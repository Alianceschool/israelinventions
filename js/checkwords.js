function checkword1(){
    let input1 = document.getElementById("input1").value;
    console.log(input1.includes("שרי"))
    if (input1.includes("שרי") == true){
        document.getElementById("input1").style.backgroundColor = "green";

    }
}


function checkword2(){
    let input2 = document.getElementById("input2").value;
    console.log(input2.includes("במבה"))
    if (input2.includes("במבה") == true){
        document.getElementById("input2").style.backgroundColor = "green";
    }
}

function checkword3(){
    let input3 = document.getElementById("input3").value;
    console.log(input3.includes("עוזי"))
    if (input3.includes("עוזי") == true){
        document.getElementById("input3").style.backgroundColor = "green";
    }
}
function finalcheck(){
    let lastinput = document.getElementById("check").value;
    console.log(lastinput.includes("7"))
    console.log(lastinput.includes("שבע"))
    if (lastinput.includes("7") == true || lastinput.includes("שבע") == true){
        document.getElementById("check").style.backgroundColor = "green";
        document.getElementById("nextbutton").id = "visible";
    }
}
