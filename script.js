function main(element){ // najszybciej będzie po prostu dać tego inwersję (negację)
    var currentColor = element.style.backgroundColor;
    element.style.backgroundColor = currentColor !== "rgb(166, 245, 189)" ? "rgb(166, 245, 189)" : "rgb(171, 205, 238)";
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
