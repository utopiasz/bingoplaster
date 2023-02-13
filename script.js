/*zaznaczanie kafelkow*/
function main(element){
    var currentColor = element.style.backgroundColor;
    element.style.backgroundColor = currentColor !== "rgb(166, 245, 189)" ? "rgb(166, 245, 189)" : "rgb(171, 205, 238)";
}

/*timer*/
function ShowTimes() {
    var now = new Date();
    var hrs = 23-now.getHours();
    var mins = 59-now.getMinutes();
    if (mins<10) mins='0'+mins;
    var secs = 59-now.getSeconds();
    if (secs<10) secs='0'+secs;
    var str = '';
        str += ''+hrs+':'+mins+':'+secs;
    document.getElementById('countdownToMidnight').innerHTML = str;
  }
  var _cntDown;
  function StopTimes() {
      clearInterval(_cntDown);
  }

/*wyświetlanie listy kontakt/zasady po naciśnięciu*/
document.getElementById("kontakt_list").style.display="none";
var a=0;
function show_hide_kontakt(){
    if (a==0){
        document.getElementById("kontakt_list").style.display="flex";
        return a=1;
    }
    else{
        document.getElementById("kontakt_list").style.display="none";
        return a=0;
    }
}

document.getElementById("zasady_list").style.display="none";
var a=0;
function show_hide_zasady(){
    if (a==0){
        document.getElementById("zasady_list").style.display="flex";
        return a=1;
    }
    else{
        document.getElementById("zasady_list").style.display="none";
        return a=0;
    }
}
