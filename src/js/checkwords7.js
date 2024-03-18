function checkword(){
    let input1 = document.getElementById("input1").value;
    console.log("כ"+input1.includes("כיפת"))
    console.log("ב"+input1.includes("ברזל"))
    if (input1.includes("כיפת") && input1.includes("ברזל")  == true){
        document.getElementById("input1").style.backgroundColor = "green";
        document.getElementById("nextbutton").id = "visible";
        document.getElementById("code-received").style.display = "block"

    }
}