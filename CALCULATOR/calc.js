let displayValue = "";

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue === "") return;
    
    if (displayValue[displayValue.length - 1] === "+" || 
        displayValue[displayValue.length - 1] === "-" || 
        displayValue[displayValue.length - 1] === "*" || 
        displayValue[displayValue.length - 1] === "/") {
        return;
    }
    
    displayValue += op;
    updateDisplay();
}

function calculate() {
    if (displayValue === "") return;
    
    try {
        let result = eval(displayValue);
        
        if (isNaN(result) || !isFinite(result)) {
            displayValue = "Error";
        } else {
            displayValue = result.toString();
        }
    } catch (error) {
        displayValue = "Error";
    }
    
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue || "0";
}