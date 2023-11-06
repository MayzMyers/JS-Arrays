function task1() {
  let arr = Array.from(Array(10), () => {
    return Math.round(Math.random() * 10);
  });
  alert(`Дан массив чисел: ${arr}`);
  let summ = arr.reduce(function (sum, elem) {
    if (elem % 2 == 0) sum += Math.sqrt(elem);
    return sum;
  }, 0);
  alert(
    `Сумма квадратных корней для всех чётных чисел равна ${Math.round(summ)}`
  );
}

function task2() {
  let arr = Array.from(Array(10), () => {
    return Math.round(Math.random() * 100 - 50);
  });
  alert(`Дан массив чисел: ${arr}`);
  let summ = arr.reduce(function (sum, elem) {
    if (elem > 0 && elem < 10) sum += elem;
    return sum;
  }, 0);
  alert(
    `Сумма тех элементов массива, которые больше нуля и меньше десяти равна ${summ}`
  );
}

function task3() {
  let arr = Array.from(Array(4), () => {
    return Math.round(Math.random() * 10);
  });
  alert(`Дан массив чисел: ${arr}`);
  let result = arr.every((elem) => elem % 2 == 0);
  alert(result);
}

function task4() {
  let arr = Array.from(Array(10), () => {
    return Math.round(Math.random() * 100);
  });
  alert(`Дан массив чисел: ${arr}`);
  let arr_five = arr.filter((elem) => elem % 5 == 0);
  alert(
    `Новый массив из элементов переданного массива, кратных пяти выглядит так - ${arr_five}`
  );
}

function task5() {
  let arr = Array.from(Array(10), () => {
    return Math.round(Math.random() * 10);
  });
  alert(`Дан массив чисел: ${arr}`);
  let summ = arr.reduce((sum, elem) => sum + elem, 0);
  let average = (summ / arr.length).toFixed(1);
  alert(`Среднее арифметическое равно ${average}`);
}

function task6() {
  let arr = Array.from(Array(10), () => {
    return Math.round(Math.random() * 10);
  });
  alert(`Дан массив чисел: ${arr}`);
  let first_elem = arr.shift();
  arr.push(first_elem);
  alert(`Массив с перенесенным в конец первым элементом ${arr}`);
}

function task7() {
  let arr = Array.from(Array(10), () => {
    return Math.round(Math.random() * 10);
  });
  alert(`Дан массив чисел: ${arr}`);
  let summ_even = arr.reduce(function (sum, elem, index) {
    if (index % 2 == 0) sum += elem;
    return sum;
  }, 0);
  let summ_odd = arr.reduce(function (sum, elem, index) {
    if (index % 2 != 0) sum += elem;
    return sum;
  }, 0);
  alert(
    `Сумма четных элементов равна - ${summ_even}, сумма нечетных элементов равна - ${summ_odd} и результат деления между ними ${Math.round(
      summ_even / summ_odd
    )}`
  );
}

function task8() {
  let arr_number = prompt(`Введите число`).split("");
  let new_arr = arr_number.map((num) => Number(num) + 1);
  alert(`${new_arr.join("").toString()}`);
}

function task9() {
  let arr = [
    "http://www.google.com/search?q=",
    "bd+c+url&oqb",
    "d+c+url",
    "http://github.com/Ma",
    "gs_lcrp=EgZjaHJvb",
    "WUyBggAEEUYOTIICAgCE",
    "http://a-generation.unn.ru/courses/",
  ];
  alert(`Дан массив со строками: ${arr}`);
  let url = arr.filter((elem) => elem.startsWith("http://"));
  alert(
    `Получившийся массив с строками, которые начинаются на http:// - ${url}`
  );
}

function task10() {
  let data = [
    {
      1: 11,
      2: 12,
      3: 13,
    },
    {
      1: 21,
      2: 22,
      3: 23,
    },
    {
      1: 24,
      2: 25,
      3: 26,
    },
  ];
  let arr_data_keys = [];
  let arr_data_val = [];
  for (let obj_data of data) {
    arr_data_keys = arr_data_keys.concat(Object.keys(obj_data));
    arr_data_val = arr_data_val.concat(Object.values(obj_data));
  }
  let array_data = [...arr_data_keys, ...arr_data_val];
  let sum_data = array_data.reduce(
    (sum, elem) => sum + Number(elem), 
    0,32
  );
  alert(
    `Массив ключей объекта - ${arr_data_keys}. Массив значений объекта - ${arr_data_val}. Сумма элементов структуры ${sum_data}`
  );
}
