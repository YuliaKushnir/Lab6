const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const medicinesNames = Object.keys(medicines);
console.log(medicinesNames);
document.getElementsByClassName("task3_1")[0].innerHTML=medicinesNames.join(', ');;


const currentDate = new Date();
const expiry = [];
for (const [name, expiryDate] of Object.entries(medicines)) {
  if (expiryDate > currentDate) {
    expiry.push([name, expiryDate]);
  }
}
const arrForOutput = [];
for (const [name, expiryDate] of expiry) {
    arrForOutput.push([name, expiryDate.toLocaleDateString()]);
}
console.log(arrForOutput);
document.getElementsByClassName('task3_2')[0].innerHTML = arrForOutput.join(', ');;

expiry.sort((a, b) => a[1] - b[1]);
const newArrForOutput = [];
for (const [name, expiryDate] of expiry) {
    newArrForOutput.push([name, expiryDate.toLocaleDateString()]);
}
console.log(newArrForOutput);
document.getElementsByClassName('task3_3')[0].innerHTML = newArrForOutput.join(', ');