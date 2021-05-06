var currentDayEl = $('#currentDay');
var saveButton = $('.saveBtn')

// get current time and display it
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY [at] h:mm:ss A');
    currentDayEl.text(rightNow);
}

// setting currentTime to military hours
var currentTime = moment().format("HH")
var timeNow = parseInt(currentTime);
// console.log(timeNow);
// console.log(typeof(timeNow))

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var inputArray = ["", "", "", "", "", "", "", "", ""]

for (var i = 0; i < hoursArray.length; i++){
    if (timeNow > hoursArray[i]){
        $('#' + hoursArray[i]).addClass("past")
    } else if (timeNow < hoursArray[i]) {
        $('#' + hoursArray[i]).addClass("future")
    } else {
        $('#' + hoursArray[i]).addClass("present")
    }
    }

    
saveButton.on('click', function(event) {
event.preventDefault();
var id =$(this).prev().attr('id');
    // need to find the index in the inputArray that references this hour
    for (var i = 0; i < hoursArray.length; i++){
    if (id == hoursArray[i]) {
        inputArray[i] = $(this).prev().val()
        }
    }
    localStorage.setItem('userData', JSON.stringify(inputArray));
})  

function loadSchedule() {
    var data = JSON.parse(localStorage.getItem('userData'));
    for (var i = 0; i < data.length; i++) { 
        var input_id = i + 9;
        var text = data[i];
        $('#' + input_id).val(text);
       }
}
loadSchedule();
setInterval(displayTime, 1000);


