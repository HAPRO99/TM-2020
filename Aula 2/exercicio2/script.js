let strSeeNumber = "Adicionados: ";
const arrNumbers = [];

function addNumber() {
    const number = document.getElementById("number").value;
    strSeeNumber += number.toString() + ",";
    document.getElementById("seeNumber").innerHTML = strSeeNumber;
    arrNumbers.push(number);

    if(arrNumbers.length >= 5) {
        document.getElementById("calc").innerHTML = '<button onclick="calculator()">Calcular</button> <p id="showNumber"></p>';
    }
}

function calculator() {


    document.getElementById("showNumber").innerHTML = "Maior numero: " + Math.max(arrNumbers);
}