function addition() {
    let first=document.getElementById("first-number").value
    first=Number(first);
    let second=document.getElementById("second-number").value
    second=Number(second);

    let result = first + second;

    document.getElementById("output").innerHTML=`<h3>${result}</h3>`;
}

function subtraction() {
    let first=document.getElementById("first-number").value
    first=Number(first);
    let second=document.getElementById("second-number").value
    second=Number(second);

    let result = first - second;

    document.getElementById("output").innerHTML=`<h3>${result}</h3>`;
}

function multiplication() {
    let first=document.getElementById("first-number").value
    first=Number(first);
    let second=document.getElementById("second-number").value
    second=Number(second);

    let result = first * second;

    document.getElementById("output").innerHTML=`<h3>${result}</h3>`;
}

function division() {
    let first=document.getElementById("first-number").value
    first=Number(first);
    let second=document.getElementById("second-number").value
    second=Number(second);

    let result = first/second;

    document.getElementById("output").innerHTML=`<h3>${result}</h3>`;
}

function power() {
    let first=document.getElementById("first-number").value
    first=Number(first);
    let second=document.getElementById("second-number").value
    second=Number(second);

    let startNumber = 1;

    for(let i = 0; i < second; i++) {
        startNumber = startNumber * first;
    }

    document.getElementById("output").innerHTML= `<h3>${startNumber}</h3>`;
}

function clearAll() {
    document.getElementById('first-number').value = "";
    document.getElementById('second-number').value = "";
    document.getElementById('output').innerHTML = "";
}