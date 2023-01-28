'use strict';
//camelCase - названия переменных
//snake_case - названия папок и файлов с low dash _
//UPPER_SNAKE_CASE - названия констант
//Kebab-case
//PascalCase - for classes


// let number = 5; //переменная изменяемая, можно менять значения
// const leftBorderWidth = 1; //значение поменять не можем


// number = 10; 
// console.log(number);


// const obj = {
//     name: "John",
//     age:25,
//     isMarried: false 

// };

// obj.b = "346913";
// console.log(obj.b);
// console.log(obj["b"]);



// console.log(obj.name);
// // console.log(obj["name"])


// const storeName = "Concept Store";
// let storeDescription = {
//     budget: 10000,
//     employees : ["Helena", "Margaret", "John"],
//     products : {
//         mobilePhone: 2000, 
//         mobileCase: 500  },
//     open: true
// }

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Are you 18 years old?", "18")
// console.log(typeof(answer)); //typeof - операторб который помогает проверить какой тип данных возвращает 

//ВСЯ ИНФОРМАЦИЯ ОТ ПОЛЬЗОВАТЕЛЯ ПРИХОДИТ В ВИЖЕ СТРОК

// const answers = [];
// answers[0] = prompt("What is your name?", '');
// answers[1] = prompt("What is your surname?", '');
// answers[2] = prompt("What is your age?", '');

// console.log(typeof(answers));

 

// const category = 'toys';  

// console.log(`htpps://someurl.com/${category}/5`);

// const user = "Ivan";
// alert( `Привет, ${user}`);

let incr = 10,
    decr = 10;

    // incr ++;
    // decr--;


    // console.log(++incr);
    // console.log (--decr);
    // console.log(5%2);

    const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''); 
    // + перед prompt значит что вводится может только число
    const personalMovieDB = {
        count: numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat: false
        };    

    const lastSeenMovie = prompt("Один из просмотренных фильмов?", ''),
          lastSeenMovieRating = prompt("На сколько оцениваете его?", ''),
          lastSeenMovie2 = prompt("Один из просмотренных фильмов?", ''),
          lastSeenMovieRating2 = prompt("На сколько оцениваете его?", '');

    personalMovieDB.movies [lastSeenMovie] = lastSeenMovieRating;
    personalMovieDB.movies [lastSeenMovie2] = lastSeenMovieRating2;

    console.log(personalMovieDB);