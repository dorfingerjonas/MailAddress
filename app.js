const readline = require('readline');
const fs = require('fs');
const filename = "teachers.csv";
const mail = "@htl-leonding.ac.at";

let teachers = [];
let parts = [];
let firstName;
let lastName;
let adress = "";

printHeader();

const rl = readline.createInterface({
    input: fs.createReadStream(filename),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    teachers.push(line);
});

rl.on('close', () => {

    for (let i = 0; i < teachers.length; i++) {
        let currTeacher = teachers[i];

        parts = currTeacher.split(";");
        lastName = parts[0];
        firstName = parts[1];

        console.log(getEmailAdress(firstName, lastName));
    }
    console.log("-----------------------------------------");
});

function printHeader() {
console.log(`-----------------------------------------
email adresses
-----------------------------------------`)
}

function getEmailAdress(firstName, lastName) {
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    lastName = lastName.replace("ä", "ae");
    lastName = lastName.replace("ö", "oe");
    lastName = lastName.replace("ü", "ue");

    adress = firstName.charAt(0) + "." + lastName + mail;

    return adress;
}