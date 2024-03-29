/* calculating the monthly mortgage payments using the formula
P = L[c(1+c)^n]/[(1+c)^n-1]
P = payment
L = loan amount
C = interest = take the annual rate convert it to a decimal by sdividing by 100 and 
then convert it to a monthly rate by 12
N = number of mortgage payments, multiply number of years by 12*/



/* calculating the monthly mortgage payments using the formula
P = L[c(1+c)^n]/[(1+c)^n-1]
P = payment
L = loan amount
C = interest = take the annual rate convert it to a decimal by sdividing by 100 and 
then convert it to a monthly rate by 12
N = number of mortgage payments, multiply number of years by 12*/



let L= Number(prompt("What is your purchase price?"));
let D=Number(prompt("What is your downpayment?"))

let C = (prompt("What is your interest rate?(Please enter the rate without percentages.)"));
let N = Number(prompt("How many years are you going to finance?"));
let I = Number(prompt("How much is your annual insurance amount?"));
let T = Number(prompt("How much is your annual tax amount?"));



function calculatePayment(){
let n= N*(12);
let c = C/100/(12);
let l = L-D;

let P= l*(c*(Math.pow((1+c),n))/((Math.pow((1+c),n))-1));

/*rounding payment to two decimal places*/

P = P.toFixed(2);



alert(`Your monthly payment will be ${P} (excluding taxes and insurance)`);

/*Calculating monthly payment using PITI formula
Principal,Interest,Taxes,Insurance*/

let PITI = l*(c*(Math.pow((1+c),n))/((Math.pow((1+c),n))-1))+I/12+T/12;
PITI = PITI.toFixed(2);
alert(`Your monthly payment will be ${PITI} including taxes and insurance`)

}
calculatePayment()


