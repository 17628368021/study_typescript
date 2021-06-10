// 函数参数
// 问题
// function getTotal (one: number, two: number) : number {
//     return one + two + ''
// }
//解决
// function getTotal (one: number, two: number) : number {
//     return one + two
// }

// 不好的方式
// const total : number = getTotal(1,2)

// 正确方式
// const total = getTotal(1,2)



// function sayHello() : void{
//     console.log('Hello World')
//     // 如果写了return就会有问题
//     // return ''
// }
// sayHello()


// 永远执行不到  :never
// function errorFunction () : never {
//     throw new Error()
//     console.log('21232')
// }
// errorFunction()

// function forNever () : never {
//     while(true) {}
//     console.log('21232')
// }


// 对象类型参数注解
// function add ({one,two}: {one: number, two: number} ) {
//     return one + two 
// }
// const total  = add ({one: 1, two: 2})

// function getNumber ( {one}: {one: number} ) {
//     return one
// }
// const one  = getNumber ({one: 1})