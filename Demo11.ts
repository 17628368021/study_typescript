// private protected public

/* 
  public: 公共的 类的内部和类的外部都能被调用
  private: 私有的 只允许在内部使用，继承的子类中也不能使用
  protected: 受保护的 只运行在类的内部使用，包括继承的
*/
class Person{
  public name: string;
  public sayHello() {
    console.log(this.name + ' say Hello');
  }
  private age: number
  protected sex: string
}

const person = new Person()
class Teacher extends Person {
  public sayBye() {
    console.log('我是' + this.sex);
    // console.log(this.age); 直接回报错
  }
}

person.name = 'jce'
// person.age = 1 // 直接会报错
// person.sex = 1 // 直接会报错
person.sayHello()
console.log(person.name)