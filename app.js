function sum (num, num2){
    return num+num2;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}



const fromDollarToYen= function (valueInDollar) {
    let valueInYen = (valueInDollar/oneEuroIs.USD)*oneEuroIs.JPY;
    return valueInYen;
 
}
console.log(fromDollarToYen(100))



    const fromYenToPound = function (valueInYen) {
        let valueInPound = (valueInYen/oneEuroIs.JPY)*oneEuroIs.GBP;
    return valueInPound;
    }

    module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound }