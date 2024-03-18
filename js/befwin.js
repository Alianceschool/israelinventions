function checkword(){
    let input1 = document.getElementById("input1").value;
    if (input1.includes("7169046735") == true){
        document.getElementById("input1").style.backgroundColor = "green";
        document.getElementById("nextbutton").id = "visible";
    }
}
