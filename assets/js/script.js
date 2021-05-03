var currentDayEl = $('#currentDay');
var saveButton = $('.saveBtn')

// get current time and display it
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss A');
    currentDayEl.text(rightNow);
}

var currentTime = moment().format("HH")
console.log(currentTime);

function setClassStatus() {
    if (row.val < currentTime) {
        $(".row").addClass("past");
    } else if (row.val === currentTime ) {
       $(".row").addClass("present");
    } else if (row.val > currentTime) {
        $(".row").addClass("future")
    }
}
saveButton.on('click', function(event) {
    event.preventDefault();

})






  setInterval(displayTime, 1000);