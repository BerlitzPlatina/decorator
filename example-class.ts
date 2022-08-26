import 'reflect-metadata'
// decorators.ts
export const MyDecorators = {
  NotEmpty: "NOT_EMPTY",
} as const;

export function notEmpty(target: any, propertyKey: string, index: number): void {
  const list = Reflect.getOwnMetadata(MyDecorators.NotEmpty, target, propertyKey);
  console.log(target);
  console.log(`propertyKey: ${propertyKey}`);
  console.log(`index: ${index}`);
  if (list) {
    list.push(index);
  } else {
    Reflect.defineMetadata(MyDecorators.NotEmpty, [index], target, propertyKey);
  }
}
export function validateString(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  const list: number[] = Reflect.getOwnMetadata(MyDecorators.NotEmpty, target, propertyKey);
  console.log("-------validateString");
  console.log(list);

  if (!list) {
    return;
  }

  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any) {
    // list contains indexes of the args which has a parameter decorator
    const invalid = list.filter((index) => {
      const currentArg = args[index];
      console.log(`current arg value: '${currentArg}'`)
      return currentArg.trim() === "";
    });

    if (invalid.length > 0) {
      throw new Error(`Empty string detected!`);
    }
    // Execute original method
    Reflect.apply(originalMethod, this, args);
  }
}
class ExampleClass {
  @validateString
  public testEmptyString(
    @notEmpty value1: string,
    value2: string,
    @notEmpty value3: string,
  ) { }
}