/*
//OPPGAVE.1, While loop
1. Gå til linje utenfor kommentar og skriv av while loopen som er laget,
2. se på console.log hva som skjer
3. Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL SKRIVE AV:

let countdown = 5;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

console.log('Blast off!');
*/
// SKRIV UNDER HER ------ hvordan lage en nedtelling --- eksempel her fra "5-0" -- Kan bruke "++" for opptelling. fra "0-5"

let countdown =5;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

console.log("Blast off!")
/*
//OPPGAVE.2, For loop
1. Gå til linje utenfor kommentar og skriv av for loopen, 
se på console.log hva som skjer
2. Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL SKRIVE AV:

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
*/
// SKRIV UNDER HER ---- Hvordan lage en gangetabell fra 1-10, eksempel her er "7-gangen"

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

/*
//OPPGAVE.3, forEach

1. Gå til linje utenfor kommentar og skriv av forEach loopen, 
se på console.log hva som skjer
2. Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL SKRIVE AV:

let shoppingList = ['milk', 'bread', 'fish', 'egg'];

shoppingList.forEach((item) => {
  console.log(item);
});
*/

// SKRIV UNDER HER

shoppingList.forEach((item) => {
  console.log(item);
});

/*
//OPPGAVE.4, map

1.Gå til linje utenfor kommentar og skriv av map funksjonen som er laget
2. se på console.log hva som skjer
3. Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL SKRIVE AV:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);
*/
// SKRIV UNDER HER
