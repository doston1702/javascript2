console.warn("Homework №1");

let arr_num = [2, 3, 4, 5];    //Числа
let result = 1;    //Ответ чисел умножается на 1

for (let item of arr_num) {         //Числа фильтруются и умножаются
  if (typeof(item) === 'number') {
    result = result * item
    console.log(result);
  }
}

console.warn("Homework №2");

let example = 0;

while (example != (arr_num[0]*arr_num[1]*arr_num[2]*arr_num[3])) {           //Тут умножение сделано с помощью while
  example = arr_num[0]*arr_num[1]*arr_num[2]*arr_num[3]
  console.log(example);
}

console.warn("Homewrok №3");

let mas_num = [1, 2, 3, 4, 5]     //Тут цифры, их нужно вывести на экран

while (typeof(mas_num) !== 'string') {      //Тут как я вывел их на экран
  mas_num = mas_num.toString()
  console.log(mas_num);
  document.write(`<h1>${mas_num}</h1>`)
}

console.warn("Универсальный цикл фор");

for (let step = 0; step < 5; step++) {      //А здесь универсальный цикл for
  console.log(step);
}