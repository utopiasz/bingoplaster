function main(element){
    var currentColor = element.style.backgroundColor;
    if (currentColor == "rgb(171, 205, 238)"){
        element.style.backgroundColor = "rgb(166, 245, 189)";
    }
    else{
        element.style.backgroundColor = "rgb(171, 205, 238)";
    }
}
/* 
function main(element){
    var currentColor = element.style.backgroundColor;
    if (currentColor == "rgb(171, 205, 238)"){
        element.style.backgroundColor = "rgb(166, 245, 189)";
    }
    else{
        element.style.backgroundColor = "rgb(171, 205, 238)";
    }
}
*/ 

function ShowTimes() {
    var now = new Date();
    var hrs = 23-now.getHours();
    var mins = 59-now.getMinutes();
    var secs = 59-now.getSeconds();
    var str = '';
        str += ''+hrs+':'+mins+':'+secs;
    document.getElementById('countdownToMidnight').innerHTML = str;
  }
  var _cntDown;
  function StopTimes() {
      clearInterval(_cntDown);
  }
