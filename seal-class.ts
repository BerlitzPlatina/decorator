function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// @sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    console.log('hwererer');
    
    return "Hello, " + this.greeting;
  }
}
// const test = new Greeter('wtf')
// test.constructor.prototype.message = 'ohman'
// //@ts-ignore
// console.log(test.message);

