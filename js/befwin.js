function checkword(){
    let input1 = document.getElementById("input1").value;
    if (input1.includes("   ") == true){
        document.getElementById("input1").style.backgroundColor = "green";
        document.getElementById("nextbutton").id = "visible";
    }
}