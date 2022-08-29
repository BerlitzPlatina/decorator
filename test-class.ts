function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('wtffffffff', propertyKey);
    
    descriptor.enumerable = value;
  }
}

class Greeter2 {
  greeting: string;
  greeting2: string;
  constructor(message: string) {
    this.greeting = message
  }

  @enumerable(false)
  greet() {
    this.greeting2 = this.greeting
    return "Hello, " + this.greeting
  }
}
const greet2 = new Greeter2('testtttt')
console.log(greet2.greet());

console.log(Object.getOwnPropertyDescriptor(greet2, 'greeting2'));

