// const screenResume= (name: string, age: number, bust: number) : void => {
//   age<24 && bust>= 90 && console.log(name+'进入面试');
//   age > 24 || bust < 90 && console.log(name + '你被淘汰了');
// }
// const getResume = (name: string, age: number, bust: number) : void => {
//   console.log(name+'年龄是'+age);
//   console.log(name+'胸围是'+bust);
// }
// screenResume('姬如雪', 18, 90)
// getResume('姬如雪', 18, 90)

// interface Gril {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
// }
// const gril = {
//   name: '江娜',
//   age: 16,
//   bust: 98,
//   waistline: 140
// }

// const _screenResume= (gril: Gril) : void => {
//   gril.age<24 && gril.bust>= 90 && console.log(gril.name+'进入面试');
//   gril.age > 24 || gril.bust < 90 && console.log(gril.name + '你被淘汰了');
// }
// const _getResume = (gril: Gril) : void => {
//   console.log(gril.name+'年龄是'+gril.age);
//   console.log(gril.name + '胸围是' + gril.bust);
//   gril.waistline && console.log(gril.name +'臀围是：'+gril.waistline);
// }
// _screenResume(gril)
// _getResume(gril)