function checkword1(){
    let input1 = document.getElementById("input1").value;
    console.log(input1.includes("6"))
    if (input1.includes("6") == true){
        document.getElementById("input1").style.backgroundColor = "green";
        document.getElementById("nextbutton").id = "visible";
    }
}