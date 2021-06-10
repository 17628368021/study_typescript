// interface Gril {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
//   [propname: string]: any;
//   say(): string
// }
// const gril = {
//   name: '江娜',
//   age: 16,
//   bust: 98,
//   waistline: 140,
//   sex: '女',
//   say() {
//     return "欢迎光临， 红浪漫洗浴！！"
//   },
//   teach() {
//     return "我来教书的"
//   },
//   s: 1  // 对象里面的个数不用于接口里面的个数相对应但是位置需要相对应
// }

// interface Teacher extends Gril {
//   teach():string
// }

// class Xiaojiejie implements Gril {
//   name= '江娜'
//   age= 16
//   bust= 98
//   waistline= 140
//   sex= '女'
//   say() {
//     return "欢迎光临， 红浪漫洗浴！！"
//   }
// }

// const _screenResume= (gril: Gril) : void => {
//   gril.age<24 && gril.bust>= 90 && console.log(gril.name+'进入面试');
//   gril.age > 24 || gril.bust < 90 && console.log(gril.name + '你被淘汰了');
// }
// const _getResume = (gril: Teacher) : void => {
//   console.log(gril.name+'年龄是'+gril.age);
//   console.log(gril.name + '胸围是' + gril.bust);
//   gril.waistline && console.log(gril.name +'臀围是：'+gril.waistline);
//   gril.sex && console.log(gril.name +'性别是：'+gril.sex);
//   gril.s && console.log(gril.name +'ss是：'+gril.s); // 对象里面的个数不用于接口里面的个数相对应但是位置需要相对应
// }
// // _screenResume(gril)
// _getResume(gril)
