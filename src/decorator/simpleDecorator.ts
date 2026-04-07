export function Greeter<T extends { new (...args: any[]): {} }>(
  ctor: T,
  context: DecoratorContext
) {
  return class extends ctor {
    greet() {
      console.log("你好", context);
    }
  };
}
export function countInstance(
  value: new (...args: any[]) => {} & { count: number },
  _context: ClassDecoratorContext
) {
  let instanceCount = 0;
  const wrapper = function (...args: any[]) {
    instanceCount++;
    const instance = new value(...args);
    instance.count = instanceCount;
    return instance;
  } as unknown as typeof value;

  wrapper.prototype = value.prototype;
  return wrapper;
}
