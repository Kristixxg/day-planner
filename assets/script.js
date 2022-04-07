var currentTimeEl = $('#currentDay');
var currentTime; 
var hourH = 13;
// var hourH = moment(currentTime).format("H");
var hour9El = $('#9');
var hour10El = $('#10');
var hour11El = $('#11');
var hour12El = $('#12');
var hour13El = $('#13');
var hour14El = $('#14');
var hour15El = $('#15');
var hour16El = $('#16');
var hour17El = $('#17');
var btn9  = $('#btn9');
var btn10 = $('#btn10');
var btn11 = $('#btn11');
var btn12 = $('#btn12');
var btn13 = $('#btn13');
var btn14 = $('#btn14');
var btn15 = $('#btn15');
var btn16 = $('#btn16');
var btn17 = $('#btn17');
var hour9am = hour9El.attr("id");
var hour10am = hour9El.attr("id");
var hour11am = hour9El.attr("id");
var hour12pm = hour9El.attr("id");
var hour13pm = hour9El.attr("id"); 
var hour14pm = hour9El.attr("id");
var hour15pm = hour9El.attr("id");
var hour16pm = hour9El.attr("id");
var hour17pm = hour9El.attr("id");

var hourArr = [hour9am, hour10am, hour11am, hour12pm, hour13pm, hour14pm, hour15pm, hour16pm, hour17pm];
var hourElArr = [hour9El, hour10El, hour11El, hour12El, hour13El, hour14El, hour15El, hour16El, hour17El];
var btnArr = [btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17];
hourArr.forEach(function(hour, i){

    if (hour < hourH) {
        // hourElArr[i].removeClass("future" || "present");
        hourElArr[i].addClass("past");
    } else if (hour === hourH) {
        // hourElArr[i].removeClass("future" || "past");
        hourElArr[i].addClass("present")
    } else if (hour > hourH) {
        // hourElArr[i].removeClass("past" || "present");
        hourElArr[i].addClass("future")
    }
});




var message = "";







var data = textarea.input().val().trim();

btnArr.forEach(function(button, i){
    button.on("click", function {
        localStorage.setItem("todo", data)
        hourElArr[i].text(data);
    })
})










//complete

setInterval(function() {
    currentTime = moment().format("MM/DD/YYYY [at] HH:mm:ss");
    currentTimeEl.text(currentTime);
},1000);