let userInput = "yes";
while (userInput === "yes") {
    const firstNumber = Number(prompt("Enter first number"));
    const operator = prompt("Enter the operator");
    const secondNumber = Number(prompt("Enter second number"));
    
    if (operator === "+") {
        alert(firstNumber + secondNumber);
    } else if (operator === "-") {
        alert(firstNumber - secondNumber);
    } else if (operator === "/") {
        alert(firstNumber / secondNumber);
    } else if (operator === "*") {
        alert(firstNumber * secondNumber);
    } else {
        alert("Invalid operator entered");
    }

    switch (operator) {
        case "+":
            alert(firstNumber + secondNumber);
        case "-":
            alert(firstNumber - secondNumber);
        case "*":
            alert(firstNumber * secondNumber);
        case "/":
            alert(firstNumber / secondNumber);
    }

    userInput = prompt("yo, dis true");
}


