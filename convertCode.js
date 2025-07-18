// Instructions
// You are working as a software engineer for a secret agency that needs a way to
// encrypt and decrypt messages. The agency communicates using character
// arrays instead of plain text to ensure the messages are secure.

// Task 1: Decode the Following Reversed Messages
// Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
// arrays dynamically. Then log the messages.
// 1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
// gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
// gnidoC"
console.log("Task 1:");
let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
console.log(message1.split('').reverse().join(''));
// 2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
// gnitirw edoc tuB"
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
console.log(message2.split('').reverse().join(''));
// 3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI
// .lanoisseforp a ekil leef ot evah t'nod uoY"
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
console.log(message3.split('').reverse().join(''));
// 4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
// tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
console.log(message4.split('').reverse().join(''));

// Task 2: Write your own reverse messages
console.log("\nTask 2:");
// 1. First, write your own short messages of inspiration (without reversing them).
let inspiration = `"'You miss 100% of the shots you don't take.' - Wayne Gretzky - Michael Scott"`;
// 2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
// strings and arrays dynamically so that you have a reverse output.
// 3. Then log the messages.
console.log(inspiration.split('').reverse().join(''));
console.log(inspiration);
