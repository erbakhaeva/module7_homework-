//....МОДУЛЬ 7

const obj = {a:1,b:2};
for (let key in obj){
  console.log(obj[key]);
}

/*.....Создайте пустой объект,
Добавьте несколько свойств со значениями разных типов....*/

const obj = {}

obj.a = 2;
obj["b"]=3;
obj[123] = 4;
obj['hello'] = 2;
obj.var = 5;
obj.f = function(){}; //....Добавьте метод;
console.log(obj)

delete obj.a; //..Удалите одно из созданных свойств.
delete obj.f; 

console.log(obj)


/*.....Задание 1.Написать, функцию, которая принимает в качестве
аргумента объект и выводит в консоль все ключи и значения только
собственных свойств. Данная функция не должна возвращать значение...*/

const getInfo = {
  name: 'Андрей',
  age: 123
};
for (let key in getInfo){
  console.log(getInfo[key])
}

//////////////или......

function func(obj){
  for (let key in obj){
    obj.hasOwnProperty(key);
    console.log(key, obj[key]);
  }
}
let obj = {
  a: 1,
  b: 2,
  c: 3,
}
func(obj);

/*...Задание 2.Написать функцию, которая принимает в качестве аргументов
строку и объект, а затем проверяет есть ли у переданного объекта свойство
с данным именем. Функция должна возвращать true или false....*/

const obj = ('string', {
  a: 'Андрей',
  b: 123
});
console.log('c' in obj )   //false
//.............или


function func(obj, str){
  for (let key in obj){
    console.log(key, str);
  }
}
let obj = {
  a: 1,
}
let str = "привет";

func(obj,str);


/*...Задание 3.Написать функцию, которая создает пустой объект,
но без прототипа...*/

const obj = {};
  console.log(obj)

//.....или
  function func(){
  }
  console.log(typeof func)


/*...Задание 4.Реализуйте следующее консольное приложение подобно примеру, который
разбирался в видео. Реализуйте его на прототипах.Определите иерархию электроприборов.
Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает....*/


function Devices(name){
  this.material = 'iron',
  this.name = name
}
Devices.prototype.getPower = function(power){
    console.log(`Power is ${power} w`)
}

function ForeignDevices (name, foreign, material, country){
  this.name = name,
  this.foreign = foreign,
  this.material = material,
  this.country = country,
}
ForeignDevices.prototype = new Devices(); //делегирующая связь  

const philips  = new ForeignDevices('Philips', 'заграничная разработка', 'latun', 'USA');  //экземпляры
const apple = new Devices('Apple');         //экземпляры

philips.getPower(40)
apple.getPower(90)
console.log(philips)
console.log(apple)


/*.....Задание 5....Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;Использовать синтаксис ES6....*/


class Devices {
    constructor (ownCity){
      this.ownCity = ownCity || 'Moscow';
      this.hasFlat = true;
    }
    getInfo(){
      return 'I am device from ' +  this.ownCity;
    }
  }
  
  class Gadjet extends Devices {
    constructor (isStudent, city, ownCity){ 
    super (ownCity);
    this.isStudent = isStudent;
    this.city = isStudent ? city : ownCity;
  }
  getInfo(){
    if (this.isStudent){
      return 'I am device from ' +  this.city
    } else {
      return super.getInfo()
    }
   }
  }
  const student = new Gadjet(true , 'Piter')
  console.log(student.getInfo())