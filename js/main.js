var newText = "";
var clicks =0;
function changeTextContent(){
    clicks++;
    if (clicks == 0) {
        document.getElementById("textarea").style="background-color:blue;";        
    }else if(clicks == 1){
        document.getElementById("textarea").style="background-color:red;";        
    }else if(clicks == 2){
        document.getElementById("textarea").style="background-color:green;";        
    }
    else if(clicks == 3){
        document.getElementById("textarea").style="background-color:black;";    
        clicks=0;    
    }
    newText += document.getElementById("input-text").value + "9013";
    if (newText == null){
        alert("You cant enter empty text")
        return;
    }
    document.getElementById("textarea").innerHTML = newText;
}