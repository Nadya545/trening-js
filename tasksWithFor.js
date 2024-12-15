const items1 = [
  { name: "Смартфон", category: "Электроника", price: 30000, stock: 10 },
  { name: "Ноутбук", category: "Электроника", price: 60000, stock: 3 },
  { name: "Холодильник", category: "Бытовая техника", price: 40000, stock: 8 },
  { name: "Телевизор", category: "Электроника", price: 50000, stock: 2 },
  {
    name: "Микроволновка",
    category: "Бытовая техника",
    price: 15000,
    stock: 15,
  },
  { name: "Наушники", category: "Электроника", price: 5000, stock: 1 },
];

function categoryProduct(product) {
  const productNames = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].category === "Электроника" && product[i].stock < 10) {
      productNames.push(product[i].name);
    }
  }
  return productNames;
}
console.log(categoryProduct(items1));

//Задача №2

/*const goods = [{ id: 1, name: "Товар A" }];
let array = [];
function addProduct(pushNewGood) {
  for (let i = 0; i < goods.length; i++) {
    array.push({ ...goods[i] });
  }
  array.push(pushNewGood);
  return array;
}
const pushNewGood = { id: 2, name: "Товар Б" };
console.log(addProduct(pushNewGood));
console.log(goods);
console.log(array);*/

//Задача №3

/*const students1 = [
  { id: 1, name: "Иван", grade: 90 },
  { id: 2, name: "Петр", grade: 75 },
];

function filterStudentsByGrade(minGrade) {
  let newStudentMinGrade = [];
  for (let i = 0; i < students1.length; i++) {
    if (students1[i].grade > minGrade) {
      newStudentMinGrade.push(students1[i]);
    }
  }
  return newStudentMinGrade;
}
console.log(filterStudentsByGrade(80));*/

//задача №4
//Подсчет вхождений. Напишите функцию countOccurrences, которая принимает массив и элемент, и возвращает количество вхождений этого элемента в массив.
function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 3, 1, 2, 1], 1));

/* Задача №5 Поиск товаров по имени

Создайте функцию findProductsByName, которая принимает массив товаров и строку для поиска. Функция должна возвращать новый массив, содержащий только товары, 
имя которых содержит указанную строку.*/
let pRoducts = [
  { name: "Футболка", price: 1000 },
  { name: "Джинсы", price: 2000 },
  { name: "Кроссовки", price: 3000 },
  { name: "Рубашка", price: 1500 },
];

function findProductsByName(seachLength) {
  const pRoducts2 = [];
  for (let i = 0; i < pRoducts.length; i++) {
    if (pRoducts[i].name.includes(seachLength)) {
      pRoducts2.push(pRoducts[i]);
    }
  }
  return pRoducts2;
}
console.log(findProductsByName("Джинсы"));
