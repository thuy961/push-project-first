// tinh chat cua var 
// khai bao lai duoc va gan lai duoc gia tri 
//ex :
// var a =  10;
// var a = 30;
// a = 'hello'
// console.log(a);


// let: gan duoc lai gia tri nhung khong khai bao lai duoc 


// const la hang so 
// khong khai bao lai duoc va khong gan lai duoc gia tri 


// 2.pham vi bien 
// 1.golobal scope



// 2. block scope




// 3 function scope(local scope)


// ** hoisting chi xay ra voi tu khoa var (var thi se day tu khoa var len dau vaf undifined);



// map va forEach  
// map tao ra mang moi, kieu du lieu tra ve la mang array
// let arr = [1,2,2,3,4]
// arr.map((value, index) => {
//     console.log('value', value);
//     console.log('index', index);

// })

// let newArr = arr.map((value, index) => value * 2 );
// console.log(newArr);
// foreach khong tao ra mang moi, tra ve phan tu da co trong mnag


// let arr = [10, 20, 30,40];
// arr.forEach((value, index) => console.log(value * 2));

// chuuyen ham mao va foreach ve for thuong 
// let arr = [10,20,30];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//    newArr.push(arr[i] * 2)
// (dau cong tu dong ep kieu du lieu trong js Vd: 10+ '10' = 1010, neu 10 - '10' = 0)
   
// }
// console.log(newArr);
// let arr = [10,20,30];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i] * 2);
   
// }



// filter tra ve 1 mang moi thao man 

// let arr = [1,2,3,4]

//  let filterArr = arr.filter((value) => value % 2 === 0);
//  console.log(filterArr);
// dung vong lap for thomg thuong 

// let arr = [1,2,3,4]
// let newArr = [];
//  for (let i = 0; i < arr.length; i++) {
//    if(arr[i] % 2 === 0) {
//     newArr.push(arr[i]);
//    }
   
//  }
//  console.log();

//  find tra ve phan tu dau tien cua man thoa man 

//  let findArr = arr.find((value) => value % 2 === 0);
//  console.log(findArr);
// for thon thuong 
// let arr = [1,2,3,4]
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0){
//     console.log(arr[i]);
//     break;
//   }
  
//

// 4 destructurring 
// voi mang 
// let arr = [10, 20, 30, 40]
//  let [a, , , d] = arr;
//  console.log(a, d);

//  voi 1 doi tuong 
// let peple = {
//   name: 'thuy',
//   age: '27'
// };
// let {name, age, age2 }= peple;
// console.log(name, age,age2);



// 5 Spread :
// voi mang 
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// console.log(...arr1, ...arr2);
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

//  voi 1 doi tuong (obj)
// let peple = {
//     name: 'thuy',
//     age: '27'
//   };
// let peopleAddress = {...peple, address: 'nghe An '}// them moot address
// console.log(peopleAddress);

// let peopleAddress = {...peple, age: 18}// thay doi mot key age,cap nhat cho key 
// console.log(peopleAddress);


// 7 re4st paraneter 
// function f(param1, param2, ...param){
//   console.log(param1);
//   console.log(param2);
//   console.log(param);
//   let sum = param1 + param2// sum =  0
//   for (let i = 0; i < param.length; i++) {
//     sum += param[i]
    
//   }
//   return console.log(sum);
// }
// f(10, 20, 30,40,50, 60, 70);

// 8
// cach thong thuong 
// const nameUser = 'thuy';
// const age = 18;
// let people = {
//   name: 'thuy',
//   age: 18
// };
// cach ngan gon 
// const nameUser = 'thuy';
// const age = 18; 
// let people = {
//   nameUser,
//   age,
// }
// console.log(people);



// 9.module
import {sum} from"./module.js";
console.log(sum(10, 20));

// import PI from "./module.js";
// console.log(PI);