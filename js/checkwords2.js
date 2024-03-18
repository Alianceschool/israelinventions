word1 = false
word2 = false
word3 = false
function checkword1(){
    let input1 = document.getElementById("input1").value;
    console.log(input1.includes("אפרון"))
    if (input1.includes("אפרון") == true){
        document.getElementById("input1").style.backgroundColor = "green";

    }
}

function checkword2(){
    let input2 = document.getElementById("input2").value;
    console.log(input2.includes("חסקה"))
    if (input2.includes("חסקה") == true){
        document.getElementById("input2").style.backgroundColor = "green";
    }
}

function checkword3(){
    let input3 = document.getElementById("input3").value;
    console.log(input3.includes("דיסק און קי"))
    if (input3.includes("דיסק און קי") == true){
        document.getElementById("input3").style.backgroundColor = "green";
    }
}
function finalcheck(){
    let lastinput = document.getElementById("check").value;
    console.log(lastinput.includes("1"))
    console.log(lastinput.includes("אחד"))
    if (lastinput.includes("1") == true || lastinput.includes("אחד") == true){
        document.getElementById("check").style.backgroundColor = "green";
        document.getElementById("nextbutton").id = "visible";
    }
}
