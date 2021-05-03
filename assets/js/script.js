var currentDayEl = $('#currentDay');


function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss a');
    currentDayEl.text(rightNow);
    
  }
  setInterval(displayTime, 1000);