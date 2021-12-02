// Task 1
function SumOfTwo(a, b) {
    if (a && b) {
        if (a === b) {
            return a * 3;
        } else {
            return a + b;
        }
    } else {
        return "Enter integer values!";
    }
}

let a = Number(prompt("A: "));
let b = Number(prompt("B: "));
alert("Sum of two: " + SumOfTwo(a, b));

// Task 2
let n = Number(prompt("Number of rows: "));
if (n) {
    for (let i = 1; i <= n; i++) {
        let arr = [];
        for (let j = 0; j < i; j++) {
            arr.push("*");
        }
        console.log(arr.join(" "));
    }
} else {
    alert("Enter integer value!");
}

// Task 3
function CheckTwoNumber(a, b) {
    if (a && b) {
        alert(
            `${a} is ${a < 0 ? "negative" : "positive"}\n${b} is ${b < 0 ? "negative" : "positive"}`
        );
    } else {
        alert("Enter integer values!");
    }
}

let a = Number(prompt("A: "));
let b = Number(prompt("B: "));
CheckTwoNumber(a, b);

// Task 4
function EasyReverse(number) {
    return number.toString().split("").reverse().join("");
}
function HardReverse(number) {
    let reversed = 0;
    while (number !== 0) {
        reversed *= 10;
        reversed += number % 10;
        number = parseInt(number / 10);
    }
    return reversed;
}
let number = Number(prompt("Enter number: "));
alert(`${number} reversed as => ${EasyReverse(number)}`);
alert(`${number} reversed as => ${HardReverse(number)}`);

// Task 5
function Area(a, b) {
    if (a && b) {
        return a * b;
    } else {
        return "Enter integer values!";
    }
}

let a = Number(prompt("A: "));
let b = Number(prompt("B: "));
alert("Area: " + Area(a, b));

// Task 6
let a = Number(prompt("Enter number: "));
if (a) {
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert("Sum: " + sum)
} else {
    alert("Enter integer values!")
}