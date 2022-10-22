console.warn("Homework №1");

let arr_num = [2, 3, 4, 5];    //Числа
let one = 1;    //Ответ чисел умножается на 1
let result = []

for (let item of arr_num) {         //Числа фильтруются и умножаются
  if (typeof(item) === 'number') {
    one = one * item
    result.push(one)
  }
}
result = result[result.length - 1]
console.log(result);

console.warn("Homework №2");

let example = 0;

while (example != (arr_num[0]*arr_num[1]*arr_num[2]*arr_num[3])) {           //Тут умножение сделано с помощью while
  example = arr_num[0]
  example = example*arr_num[1]
  example = example*arr_num[2]
  example = example*arr_num[3]
  console.log(example);
}

console.warn("Homewrok №3");

let mas_num = [1, 2, 3, 4, 5]     //Тут цифры, их нужно вывести на экран

while (typeof(mas_num) !== 'string') {      //Тут как я вывел их на экран через цикл while
  mas_num = mas_num.toString()
  console.log(mas_num);
  document.write(`<h1>Вывел числа через цикл while: ${mas_num}</h1>`)
}

console.warn("Универсальный цикл фор");

let num_for = [1, 2, 3, 5, 8]

for (let i = 0; i < num_for.length; i++) {      //Задача. Дан массив с числами, нужно вывести на экран с помощью цикла for
  document.write(`<h1>Вывел число через цикл for: ${num_for[i]}</h1>`)
  console.log(num_for[i]);
}