var total = 0;
var round = false;
var tip = 0;
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        total = $(this).val();
    }
});

function f1(){
        document.getElementById("customTip").innerHTML = "Tipping Percent: 15%"
        if(round == false){
            document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * 1.15).toFixed(2);
        }
        else{
            document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * 1.15).toFixed(0);
        }
    
}
function f2(){
    document.getElementById("customTip").innerHTML = "Tipping Percent: 18%"
    if(round == false){
        document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * 1.18).toFixed(2);
    }
    else{
        document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * 1.18).toFixed(0);
    }
}
function f3(){
    document.getElementById("customTip").innerHTML = "Tipping Percent: 20%"
    if(round == false){
        document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * 1.20).toFixed(2);
    }
    else{
        document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * 1.20).toFixed(0);
    }
}
function f4(){
    var checkBox = document.getElementById("roundUp");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
       round = true;
    } 
    else{
        round = false;
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("customTip");
output.innerHTML = "Tipping Percent: "+ String(slider.value) + "%";

slider.oninput = function() {
  output.innerHTML = "Tipping Percent: "+ this.value + "%";
  tip = 1 + this.value / 100.0
  if(round == false){
    document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * tip).toFixed(2);
}
else{
    document.getElementById("printAmt").innerHTML =  "Your total is $" + parseFloat(total * tip).toFixed(0);
}
}