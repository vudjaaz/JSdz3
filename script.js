// function helloMan(firstName, lastName, age) {
//     console.log(`Привет, ${firstName} ${lastName}, с возрастом ${age}!`);
// }

// let firstName = prompt('Введите имя');
// let lastName = prompt('Введите фамилию');
// let age = prompt('Введите возраст');

// helloMan(firstName, lastName, age)







// const power = (num) => num ** 2;

// console.log(power(5));





// const checkNum = (number) => (number >= 0) ? '+++' : '---';


// console.log(checkNum(9));
// console.log(checkNum(-3));




// function sumNumber(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let num3 = +prompt('Введите третье число');

// sumNumber(num1, num2, num3)


// const sumNumber = (num1, num2, num3) => +num1 + +num2 + num3;
// console.log(sumNumber(10, 20, 30));


// let param1 = '1';
// let param2 = 2;
// let param3 = 3;

// console.log(sumNumber(param1, param2, param3));





// function func(num = 5) {
//     console.log(num * num);
// }

// func(2);
// func(3);
// func();





// const sumNum = (num1, num2) => Math.sqrt(num1) + Math.sqrt(num2);
// console.log(sumNum(3, 4));




// const minNum = (a, b) => a < b ? a : b;
// console.log(minNum(2, 1));




// function dayWeek(day) {
//     if (day < 1 || day > 7) {
//         console.log('Введено неверное значение');
//     } else if (day === 1) {
//         console.log('Понедльник');
//     } else if (day === 2) {
//         console.log('Вторник');
//     } else if (day === 3) {
//         console.log('Среда');
//     } else if (day === 4) {
//         console.log('Четверг');
//     } else if (day === 5) {
//         console.log('Пятница');
//     } else if (day === 6) {
//         console.log('Суббота');
//     } else if (day === 7) {
//         console.log('Воскресенье');
//     }
// }

// let day = +prompt('Введите число от 1 до 7');

// dayWeek(day)



// function dayWeek(number) {
//     switch (number) {
//         case 1:
//             return 'Понедельник';
//         case 2:
//             return 'Вторник';
//         case 3:
//             return 'Среда';
//         case 4:
//             return 'Четверг';
//         case 5:
//             return 'Пятница';
//         case 6:
//             return 'Суббота';
//         case 7:
//             return 'Воскресенье';
//         default:
//             return 'Некорректное значение';
//     }
// }

// let day = +prompt('Введите число от 1 до 7');
// console.log(dayWeek(day));





// function greetUser(name, time) {
//     let greeting;

//     if (time >= 0 && time < 6) {
//         greeting = 'Доброй ночи, ' + name;
//     } else if (time >= 6 && time < 12) {
//         greeting = 'Доброе утро, ' + name;
//     } else if (time >= 12 && time < 18) {
//         greeting = 'Добрый день, ' + name;
//     } else if (time >= 18 && time <= 24) {
//         greeting = 'Добрый вечер, ' + name;
//     }

//     return greeting;
// }

// let userName = prompt('Введите ваше имя');
// const currentTime = new Date().getHours();

// const greetingMessage = greetUser(userName, currentTime);
// console.log(greetingMessage);





// function riddles(textRiddles, hint, response) {
//     let ridd = prompt(textRiddles).toLowerCase();
//     if (ridd === response) {
//         console.log('Угадал');
//     } else {
//         ridd = prompt(hint);
//         if (ridd === response) {
//             console.log('Угадал');
//         } else {
//             console.log('Не угадал');
//         }
//     }
// }

// riddles('Зимой и летом, одним цветом', 'зеленая', 'елка');







// ДЗ


// Задание 1



// const sumNum = (num1, num2) => num1 ** 3 + num2 ** 3;
// console.log(sumNum(2, 3));



// Задание 2



// function totalSalary(tax) {
//     if (tax > 0) {
//         console.log(`Размер заработной платы за вычетом налогов равен ${tax * 0.87}`);
//     } else {
//         console.log('Значение задано неверно');
//     }
// }

// let salary = +prompt('Введите вашу зарплату');
// // console.log(typeof salary);
// totalSalary(salary);



// Задание 3




// let num1 = +prompt('Введите первое число');
// let num2 = +prompt('Введите второе число');
// let num3 = +prompt('Введите третье число');

// const maxNum = Math.max(num1, num2, num3);

// console.log(maxNum);



// Задание 4



let num1 = +prompt('Введите число');
let num2 = +prompt('Введите второе число');

const sumNum = (num1, num2) => num1 + num2;
console.log(sumNum(num1, num2));

function diffNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1 - num2);
    } else {
        console.log(num2 - num1);
    }
}
diffNum(num1, num2)

const multiNum = (num1, num2) => num1 * num2;
console.log(multiNum(num1, num2));

const divNum = (num1, num2) => num1 / num2;
console.log(divNum(num1, num2));
