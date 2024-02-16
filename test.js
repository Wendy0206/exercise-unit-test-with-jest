test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = (100/1.07)*156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(100)).toBe(14626.1682); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(100);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = (100/156.5)*0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(100)).toBe(0.55591054); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
