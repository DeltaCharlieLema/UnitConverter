const mainInput = document.querySelector('#main-input');
const convert =document.getElementById('convert');
const outputL = document.querySelector('#output-l');
const outputV = document.querySelector('#output-v');
const outputM = document.querySelector('#output-m');
let input = 1

const mtoF = 3.281;
const ltoG = 0.264;
const ktoP = 2.204;


let lengthM = 1;
let lengthF = 3.281;

let volumeL = 1;
let volumeG = 0.264;

let massK = 1;
let massP = 2.204;

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

p>1 Meter(s) = 3.281 Feet | 1 foot = 0.304 Meters</p>
<p>1 Liter(s) = 0.264172 Gallons | 1 Gallon = 3.78541 Liters</p>
<p>1 Kilogram(s) = 2.20462 Pounds | 1 Pound = 0.453592 Kilograms</p>
*/
function render(n){
    outputL.innerHTML = convertUnits(n)[0];
    outputV.innerHTML = convertUnits(n)[1];
    outputM.innerHTML = convertUnits(n)[2];
}
function convertUnits(input){
    lengthM = (input / mtoF).toFixed(2);
    volumeL =  (input / ltoG).toFixed(2);
    massK =  (input / ktoP).toFixed(2);

    lengthF = (input * mtoF).toFixed(2);
    volumeG = (input * ltoG).toFixed(2);
    massP = (input * ktoP).toFixed(2);

    return [
        `<p>${input} meter(s) = ${lengthF} feet | ${input} feet(s) = ${lengthM} meters</p>`,
        `<p>${input} liters(s) = ${volumeG} gallon(s) | ${input} gallon(s) = ${volumeL} liter(s)</p>`,
        `<p>${input} kilograms(s) = ${massP} pound(s) | ${input} pound(s) = ${massK} kilograms(s)</p>`]
}
render(1)

convert.addEventListener('click', ()=>{
    let num = Number(mainInput.value);
    if(isNaN(num)){
        alert('Please enter a number');
        mainInput.value = '';
        render(1)
    }
    else{
        render(num);
    }
})
