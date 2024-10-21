var input=document.getElementById("Textinput");
var button=document.getElementById("Button");
function ShowAlert(){
    var inputText=input.value;
    alert("You entered" + inputText);
}

button.addEventListener("click",ShowAlert)