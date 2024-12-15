// задача №1
/*function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(sumArray([1, 2, 3, 4, 5])); */

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    const Value = accumulator + currentValue;
    return Value;
  }, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

//№ 2
const alLProducts = [
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

function nameElectr() {
  return alLProducts.reduce((accumulator, element) => {
    if (element.category === "Электроника" && element.stock < 5) {
      accumulator.push(element.name);
    }
    return accumulator;
  }, []);
}
console.log(nameElectr());

//№3
const prodUcts = [
  { id: 1, name: "Phone", category: "Electronics", price: 500 },
  { id: 2, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 3, name: "Chair", category: "Furniture", price: 100 },
];

function updateProductPrice(prodUctId, newPrIce) {
  return prodUcts.reduce((accumulator, element) => {
    if (element.id === prodUctId) {
      element.price = newPrIce;
    }
    accumulator.push(element);
    return accumulator;
  }, []);
}

console.log(updateProductPrice(2, 35));

//№4

const stUdents = [
  { id: 1, name: "Alice", subjects: ["Math", "Science"] },
  { id: 2, name: "Bob", subjects: ["History"] },
  { id: 3, name: "Charlie", subjects: ["Math", "Art"] },
];

function addSubject(idStudent, newSubject) {
  return stUdents.reduce((accumulator, element) => {
    if (element.id === idStudent) {
      element.subjects = [...element.subjects, newSubject];
    }
    accumulator.push(element);
    return accumulator;
  }, []);
}
console.log(addSubject(2, "PE"));
//№5

/*const product = [
  { id: 1, name: "Товар А" },
  { id: 2, name: "Товар Б" },
];
function removeProductById(idProd) {
  return product.reduce((accumulator, element) => {
    if (element.id !== idProd) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
}
const updatedProducts = removeProductById(2);
console.log(updatedProducts);

const producT = [
  { id: 1, name: "Товар А" },
  { id: 2, name: "Товар Б" },
];
function removeProductById(idProd) {
  const producT2 = producT
    .map((product2) => {
      if (product2.id !== idProd) {
        return product2;
      }
    })
    .filter(Boolean);
  return producT2;
}
console.log(removeProductById(1));

№ 6
const students3 = [
  { id: 1, name: "Иван" },
  { id: 2, name: "Петр" },
];

function updateStudentName(idStud, newName) {
  return students3.reduce((accomulator, element) => {
    if (element.id === idStud) {
      element.name = newName;
    }
    accomulator.push(element);
    return accomulator;
  }, []);
}

console.log(updateStudentName(1, "КОЛЯН"));

№7

const products = [{ id: 1, name: "Товар A" }];

function addProduct(pushNewProd) {
  return products.reduce((accomulator, element) => {
    accomulator.push(element, pushNewProd);
    return accomulator;
  }, []);
}
console.log(addProduct({ id: 2, name: "Товар Б" }));

№8

const students = [
  { id: 1, name: "Иван", grade: 90 },
  { id: 2, name: "Петр", grade: 75 },
];
function filterStudentsByGrade(minGrade) {
  return students.reduce((accomulator, element) => {
    if (element.grade > minGrade) {
      accomulator.push(element);
    }
    return accomulator;
  }, []);
}
console.log(filterStudentsByGrade(80));

№9
const pRoducts = [
  { id: 1, name: "Товар A", price: 200 },
  { id: 2, name: "Товар B", price: 100 },
  { id: 3, name: "Товар С", price: 300 },
];

function sortProductsByPrice() {
  pRoducts.sort((a, b) => a.price - b.price);
  return pRoducts.reduce((accomulator, element) => {
    accomulator.push(element);
    return accomulator;
  }, []);
}
console.log(sortProductsByPrice());

//№9 Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.
function sumArray(arr) {
  return arr.reduce((accomulator, element) => {
    accomulator = accomulator + element;
    return accomulator;
  }, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));*/
