// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// Oppgave 1 farge tekst
let a = 0;
while (a < 10) {
    document.write(`<p style="color: red">${a}</p>`)
    a++;
}
// Oppgave 2 farge tekst igjen
let p = 0;
while (p < 21) {
    document.write(`<p style="color: white; background-color: blue;">${p}</p>`);
    p += 2;
}
// Oppgave 3 summerer tall fra 1 til 10 sammen 55
var s = 0;
var sum = 0; 
while (s < 11) {
    sum += s;
    s++;
}
document.write(`<p>Summen mellom 1-10 er ${sum}</p>`)
// Oppgave 4 # oppgaven
let ht = ""
let o = 0
while (o<4) {
    ht += "#"
    document.write(`<p>${ht}</p>`)
    o++;
}
// Oppgave 5 bakglengs telling
let ned = 20;
while (ned >= 0) {
    document.write(`<p>${ned}</p>`)
    ned--;
}
// // Oppgave 6 KJEMPE KULT GJETTE SPILL
let riktigTall = 23;


let teller = 0;
while (true) {
    let input = prompt("SKRIV INN RIKTIG TALL, for å få tilgang til oppgaven");

    let gjett = parseInt(input, 10);

    if (gjett == riktigTall) {
        break;
    } 

    teller++;
}

// }

// Oppgave 7
// Lag en While-løkke som skriver ut tallene fra 1 til 100 i konsollen. For hver av følgende betingelser, skal teksten endres:

// a. Hvis tallet er delelig på 3, skal du skrive "Fizz" i stedet for tallet.

// b. Hvis tallet er delelig på 5, skal du skrive "Buzz" i stedet for tallet.

// c. Hvis tallet er delelig på både 3 og 5, skal du skrive "FizzBuzz".

// d. Hint: Modulusoperatoren (%) kan brukes for å sjekke om et tall er delelig.


let enHT = 1;
while (enHT <= 100) {
    if (enHT % 3 === 0 && enHT % 5 === 0) {
        console.log("FIZZBUZZ");   
    } else if (enHT % 3 === 0) {
        console.log("Fizz")
    } else if (enHT % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(enHT);
    }
    enHT++;
}


// Oppgave 8
let rad = 5;
let kol = 8;
let b = 1;
while (b <= rad) {
    let radS = "*";
    let op = 1;
    while (op < kol) {
        radS += "*";
        op++;
    }
    document.write(`<p>${radS}</p>`);
    b++;
}

// Oppgave 9
// let fib = 0;
// while (fib <= 10) {
//     fib += fib / 2 + fib;
//     console.log(fib)
//     fib++;
// }

let Fi = 0;
let Bo = 0;
let Na = 1;

while (Fi < 10) {
    document.write(`<p>${Bo}</p>`)
    let svar = Bo + Na;
    Bo = Na;
    Na = svar;
    Fi++;
}


//let enTH = 1;

// while (enTH <= 100) {
//     let Fizz = enTH % 3;
//     let Buzz = enTH % 5;
//     let FizzBuzz = enTH % 5 && enTH % 3;
//     if (enTH == Fizz) {
//         console.log("FIZZ");
//     } else if (enTH == Buzz) {
//         console.log("Buzz")
//     } else if (enTH == Fizz && enTH == Buzz) {
//         console.log("FIZZBUZZ")
//     }
//     console.log(enTH)
//     enTH++;
// }


// var a = 5;
// let age = 5;
// const c = 3.14;
// function name(params) {
//     console.log(a,b,c);
    
// }