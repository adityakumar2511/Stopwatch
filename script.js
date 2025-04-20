let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start(){
  timer = true;
  stopwatch();
}

function stop(){
  timer = false;
}

function reset(){
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.querySelector("#count").innerText = "00";
  document.querySelector("#sec").innerText = "00";
  document.querySelector("#min").innerText = "00";
  document.querySelector("#hr").innerText = "00";

}

function stopwatch(){
  if(timer == true){
    count = count + 1;
    
    if(count == 100){
      sec = sec + 1;
      count = 0;
    }

    if(sec == 60){
      min = min + 1;
      sec = 0;
    }

    if(min == 60){
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    let countString = count;
    let hrString = hr;
    let minString = min;
    let secString = sec;

    if(countString < 10){
      countString = "0" + countString;
    }
    if(hrString < 10){
      hrString = "0" + hrString;
    }
    if(minString < 10){
      minString = "0" + minString;
    }
    if(secString < 10){
      secString = "0" + secString;
    }

    document.querySelector("#count").innerText = countString;
    document.querySelector("#sec").innerText = secString;
    document.querySelector("#min").innerText = minString;
    document.querySelector("#hr").innerText = hrString;
    setTimeout("stopwatch()",10);
  }
}