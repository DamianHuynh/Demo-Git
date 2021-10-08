// function getHeight() {
//   var h = 100;
//   console.log(h + 'px');

//   if (h > 50) {
//     console.log(h + ' lon hon 50');
//   }
// }



// function getWidth() {
//   var w = 100;
//   console.log(w + 'px');

//   if (w < 500) {
//     let h = 50;
//   }
//   console.log(h + ' la  height khi w <500');
// }


// function sum(a, b) {
//   let c = 2
//   return a + c * b;
// }



// let d = sum(5, 10) * 2;
// let e = sum(3, 4) * 2;

// console.log(d);
// console.log(e);

/**
 * 1. CSS3:  Flex
 * 2. Khai báo biến (phân biệt được let, var, const)
 * 3. Scope của biến
 * 4. function
 */

// console.log(logUserName);
// Function Declaration: Sẽ bị hosting JS
// function logUserName(name) {
//   console.log('Log userName: ', name);
// }

// console.log(logNameFunction);

// Function Expression lưu ý  luôn tạo với 1 const
// const logNameFunction = function(name) {
//   console.log('Log userName: ', name);
// }

//user: {name:  ''}
//Default Value
// const logUserNameArrow = (user = {name: 'default'}) => {
//   console.log('name: ', user.name);
// }

// logUserNameArrow()
// logUserNameArrow({name: 'name'})

// // Arrow Function () => {}
// const logUserNameArrowDemo = () => {
//     console.log('logUserNameArrow');
// }
// const logUserNameArrow = (name)  => {
//   console.log('logUserNameArrow', name);
// }
// logUserNameArrow('RN03')

// const sumTwoNumber = (a, b = 1) => a + b

// console.log(sumTwoNumber(11) + 1)

// // Tìm số lớn nhất trong 3 số nhập vào

// const findMax =  (a, b, c) => {
//   let max = a;
//   if (max < b) {
//     max = b;
//   }
//   if (max < c) {
//     max = c
//   }
//   return max;
// }

// console.log('số lớn nhất là: ', findMax(1 ,3 ,5));

/**
 * kieu du lieu JS
 * Primitive type
 * number
 * string
 * boolean
 * undefined
 * null
 * NaN
 */

// let name, lop, tuoi, diaChi; //Nguyen Van A
// let name1, lop1, tuoi1, diaChi1; //Nguyen Van B

// Reference Type
// object: {key: value}
// console.log(student);
// student.name = " Nguyen Van B"
// console.log(student.name);

// let language = {
//   name: 'JS',
//   getLanguageName: function(){
//     console.log(this);
//   },
//   getLanguageNameArrow: () =>  {
//     console.log(this);
//   }
// }

// console.log('Global', this,language);
// language.getLanguageName()
// language.getLanguageNameArrow.bind(language)

//Array
// const danhSachSoDuong = [2,3,5,1,67,8,9,2,4,18];
// console.log(danhSachSoDuong);

// const student = {
//   name: 'Nguyen Van A',
//   lop: 'RN03',
//   tuoi: 18,
//   isAttend: true
// }
// const  logItem = ()  => {
//   // for (i = 0; i < danhSachSoDuong.length; i++) {
//   //   console.log(danhSachSoDuong[i]);
//   // }

//   for (const i in student) {
//     console.log(i + ': ' + student[i]);
//   }
  
//   for (const i of danhSachSoDuong) {
//     console.log(i); 
//   }

// }
// student.name === student['name']

// logItem()

//Rest Parameter

// const sum = (...numbers)  => {
//   let result = 0
//   for (const i of numbers) {
//     // result = result + i
//     result+=i
//   }
//   console.log(result);
// }

// sum(1,9,0,10,100,200)

//Spread Operator

// const student = {
//   name: 'Nguyen Van A',
//   lop: 'RN03',
//   tuoi: 18,
//   isAttend: true
// }
// //student = 0x001

// const student2 = {...student, name: 'Nguyen Van B'}
// // student2 = 0x002  == {
//   // name: 'Nguyen Van A',
//   // lop: 'RN03',
//   // tuoi: 18,
//   // isAttend: true,
//   // name: 'Nguyen Van B'
// // } 


// const student3 = student;
// //student3  = 0x001

// // student3.name = "Nguyen Van C"

// console.log(student);
// console.log(student3);
// console.log(student2);

// let number1 = 1;
// //0x001  = 1
// let number2 = number1;
// //0x002 = 1
// number2 = 4
// //0x002 =4
// console.log(number1);
// console.log(number2);

// Destructuring

// const dog = {
//   name: 'Corgi',
//   age:  3,
//   size: {
//     weight: 5,
//     height: 100,
//     info: {
//       address: 'abc'
//     }
//   }
// }

// const name= 'name';
// const {age, size} = dog


// // console.log('Dog name:', dogName);
// console.log('Dog age:', age);
// // console.log('Dog weight:', weight);
// // console.log('Dog height:', height);

// const arr = ['JS', 'C#', 'JAVA', 'ABC', 'EFG'];

// const [,,,,third] = arr

// console.log(third);


//Template String
// const dog =  "Pug"
// const sleep = "ngủ"
// console.log(dog +  '\nđi\n' + sleep);

// console.log(`${dog} 
// đi 
// ${sleep}`)
// // `xin chào ${userName}`


//Object Literal
// const dogLiteral = {name: 'Corgi'}
// console.log(dogLiteral.name);
// console.log(dogLiteral['name'])

// const age= 10
// const dogName= 'Corgi';

// const dog = {
//   dogName,
//   age
// }

// console.log(dog);


//class: ES6
// class Student {
//   constructor(name, age, address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   getStudentName() {
//     return this.name;
//   }
// }

// const studentA = new Student('Nguyen Van A', 18, 'TP.HCM');
// console.log(studentA);

// console.log(studentA.getStudentName())

class Animal {
  constructor(kind, color = 'red'){
    this.kind = kind;
    this.color = color 
  }

  getColorSkin() {
    console.log(this.color)
  }
}

class Dog extends Animal {
  constructor(kind, color, weight){
    super(kind, color)
    this.weight =  weight
  }

  getWeight() {
    console.log(this.weight);
  }
}

const corgi = new Dog('Corgi','black' , 3)

corgi.getWeight()
corgi.getColorSkin()
const demoFeature = () => {};
const demoFeature = () => {};