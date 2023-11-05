function task1() {
  let arr = prompt(`Введите массив чисел`);
  let summ = arr.reduce(function (sum, elem) {
    if (elem % 2 == 0) sum += Math.sqrt(elem);
    return sum;
  }, 0);
  alert(`Сумма квадратных корней для всех чётных чисел равна ${summ}`);
}

function task2() {
  alert("task2");
}

function task3() {
  alert("task3");
}

function task4() {
  alert("task4");
}

function task5() {
  alert("task5");
}

function task6() {
  alert("task6");
}

function task7() {
  alert("task7");
}

function task8() {
  alert("task8");
}

function task9() {
  alert("task9");
}

function task10() {
  alert("task10");
}
