in0 = false
in1 = false
in2 = false
in3 = false
function checkword0 (){
    let input0 = document.getElementById("input0").value;
    console.log(input0.includes("6"))
    if (input0.includes("6") == true){
        document.getElementById("input0").style.backgroundColor = "green";
        in0 = true
        finalcheck()
    }
}

function checkword1(){
    let input1 = document.getElementById("input1").value;
    console.log(input1.includes("7"))
    if (input1.includes("7") == true){
        document.getElementById("input1").style.backgroundColor = "green";
        in1 = true
        finalcheck()

    }
}


function checkword2(){
    let input2 = document.getElementById("input2").value;
    console.log(input2.includes("3"))
    if (input2.includes("3") == true){
        document.getElementById("input2").style.backgroundColor = "green";
        in2 = true
        finalcheck()
    }
}

function checkword3(){
    let input3 = document.getElementById("input3").value;
    console.log(input3.includes("5"))
    if (input3.includes("5") == true){
        document.getElementById("input3").style.backgroundColor = "green";
        in3 = true
        finalcheck()
    }
}

function finalcheck() {
    if(in0&&in1&&in2&&in3 == true){
        console.log("win")
        document.getElementById("nextbutton").id = "visible";
    }
}
