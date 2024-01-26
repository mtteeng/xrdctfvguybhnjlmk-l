// let obj1 = {
//     'name': 'Vasya',
//     'age': 16,
//     'city': 'Elabuga',
//     'last enter': '12:00'
// } 
// obj1["last enter"] = "14:00"
// obj1['dasdaw'] = 'wad'
// delete obj1['city']
// console.log(obj1.name)

// let user = {
//     name:'user',
//     login:'user1',
//     password:'User1234567',
//     sizes: {
//         'height':165,
//         'weight': 65
//     }
// }
// let permissions = {
//     'is_admin':true
// }
// let admin = Object.assign({},user,permissions)
// // let manager = {}
// // for (let i in user){
// //     manager[i]=user[i]
// // }
// // manager.name = 'manager'
// // console.log(manager)
// console.log(user)
// console.log(admin)


// function User(name){
//     this.name = name,
//     this.isAdmin = false
// }
// let user = new User('Vasya')
// console.log(user)

// let user = {
//     fio: {
//         name: 'Vasya',
//         surname: 'Petrov'
//     },
//     age: 15
// }
// console.log(user.key)

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// arr.splice(1,1, 'adawdd', [10,20])
// console.log(arr.splice(1))


// let arr = [1,2,3,4,5];
// function fun(item, index){
//     console.log(index, item*2)
// }
// arr.forEach((item, index) => fun(item, index))


// // Многомерные массивы
// // Задание 1
// const arr = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(arr[1][0]); 

// // Задание 2
// const obj2 = {id:['jQuery', 'Angular'], pop: 'Привет', name: 'мир!'};
// console.log(obj2.id[0]); 

// // Задание 3
// const chilldays = {
//     ru: ['Пон', 'Вт', 'Ср', 'Чт', 'Пят', 'Суб', 'Вск'],
//     en: ['Mon', 'Tues', 'Wed', 'Thur', 'Fr', 'Sat', 'Sun']
//   };
  
//   console.log(chilldays.ru[0]); 
//   console.log(chilldays.en[0]); 

// // Задание 4
//   const chilldays1 = {
//     ru: ['Пон', 'Вт', 'Ср', 'Чт', 'Пят', 'Суб', 'Вск'],
//     en: ['Mon', 'Tues', 'Wed', 'Thur', 'Fr', 'Sat', 'Sun']
//   };
//   const language = 'ru'; 
//  console.log(chilldays1.ru[2])


// Работа с массивами
// // Задание 1
// let arr = ['a', 'b', 'c']
// alert(arr)

// // Задание 2
// let arr = ['a', 'b', 'c']
// alert('a')
// alert('b')
// alert('c')

// Задание 3
// let arr = ['a', 'b', 'c', 'd']
// alert('a + b')
// alert('c + d')

// // Задание 4
// let arr = ['2', '5', '3', '9']
// let result = arr[0]*arr[1]+arr[2]*arr[3]
// console.log(result)


// Объекты (ассоциативные массивы)
// // Задание 1
// var obj = {a:1, b:2, c:3}
// console.log(obj['c'], obj.c)

// // Задание 2
// var obj = {'Kolya':'1000', 'Vasya':'500', 'Petya':'200'}
// console.log(obj['Petya'], obj['Kolya'])

// // Задание 3
// var ned = {'1':'Пон', '2':'Вт', '3':'Ср', '4':'Чт', '5':'Пт', '6':'Сб', '7':'Вск'}
// console.log(ned[5])

// // Задание 4
// let day = 5
// console.log(ned[5])

document.body.style.backgroundColor = 'red'
