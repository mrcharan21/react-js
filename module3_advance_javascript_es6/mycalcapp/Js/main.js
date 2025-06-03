// Global variable to store memory value
let memory = 0;

/////////////////////////
// BASIC FUNCTIONALITY //
/////////////////////////

/**
 * Clears the entire input field (like pressing 'C')
 */
function clearData() {
    document.getElementById("result").value = "";
}

/**
 * Removes the last complete entry, based on space separation
 * (Useful if the expression is written with spaces between elements)
 */
function clearEntry() {
    let val = document.getElementById("result").value;
    document.getElementById("result").value = val.slice(0, val.lastIndexOf(" "));
}

/**
 * Appends a character (number/operator) to the result input field
 */
function inputButton(val) {
    document.getElementById("result").value += val;
}

/**
 * Removes the last character from the result (like backspace)
 */
function sliceValue() {
    let val = document.getElementById("result").value;
    document.getElementById("result").value = val.slice(0, -1);
}

/**
 * Calculates the result of the full expression
 * Uses try-catch to handle invalid expressions
 */
function finalResult() {
    try {
        let x = document.getElementById("result").value;
        let res = eval(x); // Note: eval() should be used with caution
        document.getElementById("result").value = res;
    } catch {
        document.getElementById("result").value = "Error";
    }
}

/////////////////////////////
// SCIENTIFIC CALCULATIONS //
/////////////////////////////

/**
 * Calculates the square root of the current value
 */
function squareRoot() {
    let x = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(parseFloat(x));
}

/**
 * Converts the current value to a percentage (x ÷ 100)
 */
function percentage() {
    let x = document.getElementById("result").value;
    document.getElementById("result").value = parseFloat(x) / 100;
}

/**
 * Squares the current value (x²)
 */
function sq() {
    let x = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(parseFloat(x), 2);
}

/**
 * Calculates reciprocal (1/x)
 */
function reciprocal() {
    let x = parseFloat(document.getElementById("result").value);
    if (x !== 0) {
        document.getElementById("result").value = 1 / x;
    } else {
        document.getElementById("result").value = "Infinity"; // Handle divide-by-zero
    }
}

/**
 * Toggles the sign of the current value (+ to -, or - to +)
 */
function toggleSign() {
    let x = document.getElementById("result").value;
    document.getElementById("result").value = parseFloat(x) * -1;
}

/////////////////////
// MEMORY FUNCTIONS //
/////////////////////

/**
 * Clears the stored memory (MC)
 */
function memoryClear() {
    memory = 0;
}

/**
 * Recalls the stored memory value into the result field (MR)
 */
function memoryRecall() {
    document.getElementById("result").value = memory;
}

/**
 * Adds the current input value to memory (M+)
 */
function memoryAdd() {
    memory += parseFloat(document.getElementById("result").value);
}

/**
 * Subtracts the current input value from memory (M-)
 */
function memorySubtract() {
    memory -= parseFloat(document.getElementById("result").value);
}

/**
 * Stores the current input value into memory (MS)
 */
function memoryStore() {
    memory = parseFloat(document.getElementById("result").value);
}
