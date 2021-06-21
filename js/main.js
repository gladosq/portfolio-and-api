/* Задание №1. Написать функцию, которая будет определять тип переменной, подающейся на вход */

function defineVariable (variable) {
  let defValue = typeof variable;
  console.log(`Переменная со значением ${variable} имеет следующий тип: ${defValue}`);
}

defineVariable(124);  // number
defineVariable('34');  // string
defineVariable('hello');  // string
defineVariable([1, 2, 'third']);  // object
defineVariable(new Date()); // object
defineVariable({a: 1}, {b: 2}); // object
defineVariable(null); // object
defineVariable(true); // boolean
defineVariable(undefined); // undefined

/* Задание №2. Дан массив [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0]. Требуется написать функции
сортировки массива по возрастанию и убыванию с сохранением повторяющихся
элементов, сортировки + удаление повторяющихся элементов, поиск наименьшего
элемента, поиск наибольшего элемента */

const numbersArray = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

function sortIncreaseWithSame (array) {  // Сортировка по возрастанию с сохранением повторяющихся элементов
  let sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  console.log(sortedArray);
}

function sortDecreaseWithSame (array) {  // Сортировка по убыванию с сохранением повторяющихся элементов
  let sortedArray = array.sort(function(a, b) {
    return b - a;
  });
  console.log(sortedArray);
}

function sortIncreaseWithoutSame (array) {  // Сортировка по возрастанию с удалением повторяющихся элементов
  let sortedArray = array.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < array.length; i++) {
    if (sortedArray.indexOf(sortedArray[i]) !== i) {
      sortedArray.splice(i, 1);
    }
  }
  console.log(sortedArray);
}

function sortDecreaseWithoutSame (array) {  // Сортировка по убыванию с удалением повторяющихся элементов
  let sortedArray = array.sort(function(a, b) {
    return b - a;
  });

  for (let i = 0; i < array.length; i++) {
    if (sortedArray.indexOf(sortedArray[i]) !== i) {
      sortedArray.splice(i, 1);
    }
  }
  console.log(sortedArray);
}

sortIncreaseWithSame(numbersArray);
sortDecreaseWithSame(numbersArray);
sortIncreaseWithoutSame(numbersArray);
sortDecreaseWithoutSame(numbersArray);

/* Задание №3. Дан массив [{name: 'overflow', value: 'hidden'}, {name: 'cursor', value: 'pointer'}]
Требуется написать такую функцию, чтобы на выходе получился объект {overflow:
'hidden', cursor: 'pointer'} */

let DATA = [{name: 'overflow', value: 'hidden'}, {name: 'cursor', value: 'pointer'}];

function extractObject (array) {
  let newObject = {};

  for (let i = 0; i < array.length; i++) {
    Object.defineProperty(newObject, array[i].name, {value: array[i].value});
  }
  console.log(newObject);
}

extractObject(DATA);