// задача №1 (фильтрация объектов по условию, что категория электроника, остаток на складе <5)
const allProducts = [
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

const newAllProducts = allProducts.filter((element) => {
  return element.category === "Электроника" && element.stock < 5;
});
const productNames = newAllProducts.map((element) => {
  return element.name;
});
console.log(productNames);

//метод forEach
/*const newAllProducts = allProducts.filter((element) => {
  return element.category === "Электроника" && element.stock < 5;
});
const productNames = [];
newAllProducts.forEach((element) => {
  productNames.push(element.name);
});
console.log(productNames);*/

//Задача №2
const products = [
  { id: 1, name: "Phone", category: "Electronics", price: 500 },
  { id: 2, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 3, name: "Chair", category: "Furniture", price: 100 },
];

function updateProductPrice(productId, newPrice) {
  return products.map((element) => {
    if (element.id === productId) {
      return { ...element, price: newPrice };
    }
    return element;
  });
}
console.log(updateProductPrice(1, 34));
console.log(products);

//задача № 4
const students = [
  { id: 1, name: "Alice", subjects: ["Math", "Science"] },
  { id: 2, name: "Bob", subjects: ["History"] },
  { id: 3, name: "Charlie", subjects: ["Math", "Art"] },
];

function addSubject(idStudent, newSubject) {
  return students.map((student) => {
    if (student.id === idStudent) {
      return { ...student, subjects: [...student.subjects, newSubject] };
    }
    return student;
  });
}
console.log(students);
console.log(addSubject(2, "PE"));

//задача №5

const product = [
  { id: 1, name: "Товар А" },
  { id: 2, name: "Товар Б" },
];
function removeProductById(idProd) {
  const newProduct = product
    .map((product2) => {
      if (product2.id === idProd) {
        return null;
      }
      return product2;
    })
    .filter((product2) => {
      return product2 !== null;
    });
  return newProduct;
}
console.log(removeProductById(1));

//задача № 6

const students3 = [
  { id: 1, name: "Иван" },
  { id: 2, name: "Петр" },
];

function updateStudentName(idStud, newName) {
  return students3.map((student33) => {
    if (student33.id === idStud) {
      return { ...student33, name: newName };
    }
    return student33;
  });
}
console.log(updateStudentName(1, "Николай"));

//задача № 7

const items = [{ id: 1, name: "Товар A" }];
let array = [];
function addProduct(pushNewItem) {
  array = [...items];
  array.push(pushNewItem);
  return array;
}
const pushNewItem = { id: 2, name: "Товар Б" };
console.log(addProduct(pushNewItem));
console.log(items);

//задача №7
const products1 = [{ id: 1, name: "Товар A" }];
let array1 = [];
function addProduct1(pushNewProd) {
  products1.forEach((product) => {
    array1.push({ ...product });
  });
  array1.push(pushNewProd);
  return array1;
}
const pushNewProd1 = { id: 2, name: "Товар Б" };
console.log(addProduct1(pushNewProd1));
console.log(products1);
console.log(array1);

//задача №8

const students1 = [
  { id: 1, name: "Иван", grade: 90 },
  { id: 2, name: "Петр", grade: 75 },
];
function filterStudentsByGrade(minGrade) {
  const newStudent = students1.filter((element) => {
    return element.grade > minGrade;
  });
  return newStudent;
}
console.log(filterStudentsByGrade(80));

// метод forEach:

/*function filterStudentsByGrade(minGrade) {
  let newStudentMinGrade = [];
  students.forEach(({ grade, ...student }) => {
    if (grade > minGrade) {
      newStudentMinGrade.push(student);
    }
  });
  return newStudentMinGrade;
}
console.log(filterStudentsByGrade(80));

способ № 2:

function filterStudentsByGrade(minGrade) {
  let newStudentMinGrade = [];
  students.forEach(student => {
    if (student.grade > minGrade) {
      newStudentMinGrade.push(student);
    }
  });
  return newStudentMinGrade;
}
console.log(filterStudentsByGrade(80));*/

//задача №9

const pRoducts = [
  { id: 1, name: "Товар A", price: 200 },
  { id: 2, name: "Товар B", price: 100 },
  { id: 3, name: "Товар С", price: 300 },
];
let sortProd = [];
function sortProductsByPrice() {
  pRoducts.sort((a, b) => a.price - b.price);
  pRoducts.forEach((sort) => {
    sortProd.push(sort);
  });
  return sortProd;
}
console.log(sortProductsByPrice());
console.log(pRoducts);

//№10 Создайте функцию findMax, которая принимает массив чисел и возвращает максимальное значение из этого массива.

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5]));

//№11 фильтрация четных чисел
function filterEvenNumbers(arr) {
  return arr.filter((element) => {
    if (element % 2 == 0) {
      return arr;
    }
  });
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//№12 обратный порядок массива
function reverseArray(arr) {
  arr.reverse();
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//№13Удаление дубликатов Напишите функцию removeDuplicates, которая принимает массив и возвращает НОВЫЙ массив без дубликатов.
function removeDuplicates(arr) {
  const Dublicate = [...new Set(arr)];
  return Dublicate;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//№14 Сортировка массива Создайте функцию sortArray, которая принимает массив чисел и возвращает его отсортированным по возрастанию.

function sortArray(arr) {
  arr.sort((a, b) => {
    const sort = a - b;
    return sort;
  });
  return arr;
}
console.log(sortArray([5, 3, 8, 1, 2]));

// №15 Создайте функцию increaseProductPrices, которая принимает массив товаров и процент увеличения. Функция должна возвращать новый массив,
//в котором цены всех товаров увеличены на указанный процент.
const elements = [
  { id: 1, name: "Товар А", price: 300 },
  { id: 2, name: "Товар Б", price: 250 },
  { id: 3, name: "Товар C", price: 90 },
];
function increaseProductPrices(percent) {
  return elements.map((element) => {
    return { ...element, price: element.price * (1 + percent / 100) };
  });
}
console.log(elements);
console.log(increaseProductPrices(5));

/*№16 Поиск студента по id

Создайте функцию findStudentById, которая принимает массив студентов и id студента. 
Функция должна возвращать студента с указанным id или null, если студент не найден.*/
const arr = [
  { id: 1, name: "Иван", grade: 90 },
  { id: 2, name: "Петр", grade: 75 },
  { id: 3, name: "Николай", grade: 86 },
];
function findStudentById(idStud) {
  const findElemenT = arr.find((element) => {
    if (element.id === idStud) {
      return arr;
    }
  });
  if (findElemenT) {
    return findElemenT.name;
  } else {
    return null;
  }
}
console.log(findStudentById(2));
console.log(findStudentById(4));

/*№17 Задача 4: Удаление студента по id

Создайте функцию removeStudentById, которая принимает массив студентов и id студента. Функция должна возвращать новый массив, 
из которого удален студент с указанным id, не изменяя исходный массив.*/
/*const students = [
  { id: 1, name: "Alice", subjects: ["Math", "Science"] },
  { id: 2, name: "Bob", subjects: ["History"] },
  { id: 3, name: "Charlie", subjects: ["Math", "Art"] },
];
function removeStudentById(idStudent) {
  const sTud = students
    .map((element) => {
      if (element.id === idStudent) {
        return null;
      }
      return element;
    })
    .filter((element) => {
      return element !== null;
    });
  return sTud;
}
console.log(removeStudentById(2));

задача №18

Обновление возраста студента

Создайте функцию updateStudentAge, которая принимает id студента и новый возраст. Используя метод map, 
обновите возраст только у студента с указанным id и верните новый массив.*/
const student = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Charlie", age: 17 },
];
function updateStudentAge(idSTudent, newAge) {
  return student.map((element) => {
    if (element.id === idSTudent) {
      element.age = newAge;
    }
    return element;
  });
}
console.log(updateStudentAge(1, 20));

/* №19Сортировка товаров по цене

Создайте функцию sortProductsByPrice, которая принимает массив товаров и возвращает новый массив, 
отсортированный по цене в порядке возрастания.
const product = [
  { id: 1, name: "Товар А", price: 300 },
  { id: 2, name: "Товар Б", price: 250 },
  { id: 3, name: "Товар C", price: 90 },
];

function sortProductsByPrice(products) {
  let sort = [...products];
  return sort.sort((a, b) => a.price - b.price);
}
console.log(product);
console.log(sortProductsByPrice(product));*/

//задача № 20 Подсчет общего количества студентов

const student4 = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Charlie", age: 17 },
];
function countStudents(studentsAll) {
  return studentsAll.length;
}
console.log(countStudents(student4));
console.log(student4);

//задача №21 Объединение массивов студентов
/*Создайте функцию mergeStudentArrays, которая принимает два массива студентов и возвращает новый массив, 
содержащий всех студентов из обоих массивов, без дубликатов.*/

function mergeStudentArrays(student1, student2) {
  const newStudents = student1.concat(student2);
  const dublicateNewStudents = [...new Set(newStudents)];
  return dublicateNewStudents;
}

const stud1 = ["Иван", "Николай", "Петр", "Кирилл"];

const stud2 = ["Егор", "Илья", "Матвей", "Кирилл"];

console.log(mergeStudentArrays(stud1, stud2));

/*№22 Группировка студентов по возрасту

Создайте функцию groupStudentsByAge, которая принимает массив студентов и возвращает объект, где ключами являются возраста, 
а значениями — массивы студентов с соответствующим возрастом.*/

const student6 = [
  { name: "Иван", age: 20 },
  { name: "Николай", age: 20 },
  { name: "Петр", age: 21 },
];

function groupStudentsByAge(student) {
  const objectStudent = {};
  student.forEach((element) => {
    const age = element.age;
    if (!objectStudent[age]) {
      objectStudent[age] = [];
    }

    objectStudent[age].push(element);
  });
  return objectStudent;
}
console.log(groupStudentsByAge(student6));

//задача 23

const student7 = [
  { name: "Роман", age: 20 },
  { name: "Кирилл", age: 20 },
  { name: "Егор", age: 21 },
  { name: "Михаил", age: 23 },
  { name: "Maтвей", age: 21 },
];
function groupStudentsByAge1(studentgroup) {
  const objectStudentgroup = {};
  studentgroup.forEach((element) => {
    const age = element.age;
    if (!objectStudentgroup[age]) {
      objectStudentgroup[age] = [];
    }
    objectStudentgroup[age].push(element);
  });
  return objectStudentgroup;
}

console.log(groupStudentsByAge1(student7));
