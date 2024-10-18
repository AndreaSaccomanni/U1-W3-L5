/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/ console.log("____esercizio A____");

let sum = 10 + 20;
console.log("La somma di 10 e 20 è: ", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/ console.log("____esercizio B____");

let random = Math.ceil(Math.random() * 20);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/ console.log("____esercizio C____");

const me = {
  name: "Adrea",
  surname: "Saccomanni",
  age: 27,
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/ console.log("____esercizio D____");

const removeAge = function (obj) {
  delete obj.age;
  console.log(obj);
};
removeAge(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/ console.log("____esercizio E____");

me.skills = ["html", "css", "javascript"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("____esercizio F____");

me.skills.push("c");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/ console.log("____esercizio G____");

me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("____esercizio 1____");

const dice = function () {
  const randomNum = Math.ceil(Math.random() * 6);
  return randomNum;
};
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("____esercizio 2____");

const whoIsBigger = function (num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    switch (true) {
      case num1 > num2:
        return "il numero maggiore è: " + num1;

      case num1 < num2:
        return "il numero maggiore è: " + num2;

      case num1 === num2:
        return "i numeri inseriti sono uguali";
    }
  } else {
    return "Non hai inserito due numeri";
  }
};
console.log(whoIsBigger(5, 5));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/ console.log("____esercizio 3____");

const splitMe = function (string) {
  return string.split(" ").map((String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  });
};
let string = "Ciao a tutti sono andrea";
console.log(splitMe(string));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("____esercizio 4____");

const deleteOne = function (string, boolean) {
  if (boolean === true) {
    let deletedFirstChar = string.split("").splice(1).join("");
    return deletedFirstChar;
  } else {
    let deletedLastChar = string
      .split("")
      .splice(0, string.length - 1)
      .join("");
    return deletedLastChar;
  }
};
console.log(deleteOne("ciao", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("____esercizio 5____");

const onlyLetters = function (string) {
  let arrString = string.split("");
  console.log(arrString);
  const onlyLetter = arrString.filter((letter) => !/[0-9]/.test(letter));
  return onlyLetter.join("");
};
console.log(onlyLetters("io ho 4 cani"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/ console.log("____esercizio 6____");

const isThisAnEmail = function (string) {
  if (string.includes("@") && (string.endsWith(".com") || string.endsWith(".it"))) {
    return "true";
  } else {
    return "l' email inserita non è valida";
  }
};
console.log(isThisAnEmail("andrea@libero.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/ console.log("____esercizio 7____");

const whatDayIsIt = function () {
  const date = new Date().getDay();
  const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  return days[date];
};
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/ console.log("____esercizio 8____");

/*const dice = function () {
  const randomNum = Math.ceil(Math.random() * 6);
  return randomNum;
};*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/ console.log("____esercizio 9____");

const howManyDays = function (date) {
  const currentDate = new Date();
  const date1 = new Date(date);
  if (isNaN(date1.getTime())) {
    return "La data inserita non è valida. Inserisci: YYYY-MM-DD";
  }
  const howmanyDays = (currentDate.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  return `Sono passati ${Math.floor(howmanyDays)} giorni dalla data inserita.`;
};
console.log(howManyDays("2002-10-10"));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/ console.log("____esercizio 10____");

const isTodayMyBirthday = function (date) {
  const myBirtday = new Date("1997-07-19");
  const date1 = new Date(date);
  const month = date1.getMonth();
  const day = date1.getDate();
  if (isNaN(date1.getTime())) {
    return "La data inserita non è valida. Inserisci: YYYY-MM-DD";
  }
  if (day === myBirtday.getDate() && month === myBirtday.getMonth()) {
    console.log("Oggi è il mio compleanno");
    return true;
  } else {
    console.log("oggi non è il mio compleanno");
    return false;
  }
};
console.log(isTodayMyBirthday("2024-09-12"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/ console.log("____esercizio 11____");

const deleteProp = function (obj, string) {
  delete obj[string];
};
deleteProp(movies[0], "Poster");
console.log(movies[0]);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/ console.log("____esercizio 12____");

const newestMovie = function (array) {
  let firstMovie = array[0];
  array.forEach((movie) => {
    if (movie.Year > firstMovie.year) {
      firstMovie = movie;
    }
  });
  return firstMovie;
};
console.log("Il film più recente è: ", newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/ console.log("____esercizio 13____");

const countMovies = function (array) {
  for (let i = 0; i < array.length; i++) {
    return array.length;
  }
};
console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/ console.log("____esercizio 14____");

const onlyTheYears = (array) => {
  const onlyFilm = [];
  array.map((movie) => {
    onlyFilm.push(movie.Year);
  });
  return onlyFilm;
};
const onlyYears = onlyTheYears(movies);
console.log(onlyYears);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/ console.log("____esercizio 15____");

const onlyInLastMillennium = function (array) {
  return array.filter(function (movie) {
    return movie.Year >= 2000;
  });
};
const onlyLastMillennium = onlyInLastMillennium(movies);
console.log(onlyLastMillennium);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/ console.log("____esercizio 16____");

const sumAllTheYears = (array) => {
  return array.reduce((totalSum, year) => totalSum + year, 0);
};
const onlyYearsNumber = onlyYears.map((element) => parseInt(element, 10));
const totalSumOfTheYears = sumAllTheYears(onlyYearsNumber);
console.log(totalSumOfTheYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/ console.log("____esercizio 17____");

const searchByTitle = (string, array) => {
  return array.filter((movie) => {
    return movie.Title.includes(string);
  });
};
const searchTitle = searchByTitle("Lord", movies);
console.log(searchTitle);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/ console.log("____esercizio 18____");

const searchAndDivide = (string, array) => {
  let match = [];
  let unmatch = [];
  for (let i = 0; i < array.length; i++) {
    let movie = array[i];
    if (array[i].Title.includes(string)) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  }
  return { match, unmatch };
};
const matchMovies = searchAndDivide("Avengers", movies);
console.log(matchMovies);
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
