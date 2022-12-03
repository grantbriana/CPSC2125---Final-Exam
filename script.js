
function recentUpdate(){
  var update = document.lastModified;
  document.getElementById("lastUpdate").innerHTML = update;
}


function init() {
	recentUpdate();
}

function calculate(){

  //Tip slider & variables 
  var slider = document.getElementById("tipRange").value;
     var total = document.getElementById("tot").value;

  //Calculate total & tip
  let tip = total * (slider/100);
  let tipTotal = Number(total) + Number(tip);

      //Display Total & Tip
document.getElementById("tip").innerHTML = "Tip Amount: " + Number(tip) + "$";
  document.getElementById("TotAmount").innerHTML = "Total Amount: " + tipTotal + "$";
}

function reset(){
    document.getElementById("TotAmount").innerHTML = "" ;
      document.getElementById("tip").innerHTML = "" ;
  document.getElementById('tot').value = '';

}

window.onload = init;

    //Update tip range Amount live
document.getElementById("tipRange").oninput = function(){
//Runs function to display each time input changes
document.getElementById("TipAmount").innerHTML = this.value;
}
