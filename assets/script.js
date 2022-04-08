// var currentTimeEl = $('#currentDay');
// var currentTime; 
// var hourH = moment(currentTime).format("H");
// var hour9El = $('#09');
// var hour10El = $('#10');
// var hour11El = $('#11');
// var hour12El = $('#12');
// var hour13El = $('#13');
// var hour14El = $('#14');
// var hour15El = $('#15');
// var hour16El = $('#16');
// var hour17El = $('#17');
// var btn9  = $('#btn9');
// var btn10 = $('#btn10');
// var btn11 = $('#btn11');
// var btn12 = $('#btn12');
// var btn13 = $('#btn13');
// var btn14 = $('#btn14');
// var btn15 = $('#btn15');
// var btn16 = $('#btn16');
// var btn17 = $('#btn17');
// var hour9am = hour9El.attr("id");
// var hour10am = hour10El.attr("id");
// var hour11am = hour11El.attr("id");
// var hour12pm = hour12El.attr("id");
// var hour13pm = hour13El.attr("id"); 
// var hour14pm = hour14El.attr("id");
// var hour15pm = hour15El.attr("id");
// var hour16pm = hour16El.attr("id");
// var hour17pm = hour17El.attr("id");

// var hourArr = [hour9am, hour10am, hour11am, hour12pm, hour13pm, hour14pm, hour15pm, hour16pm, hour17pm];
// var hourElArr = [hour9El, hour10El, hour11El, hour12El, hour13El, hour14El, hour15El, hour16El, hour17El];
// // var btnArr = [btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17];


// hourArr.forEach(function(hour, i){

//     if (hour < hourH) {

//         hourElArr[i].addClass("past");
//         // console.log(hourElArr[i]);
//     } else if (hour === hourH) {

//         hourElArr[i].addClass("present")
//         // console.log(hourElArr[i]);
//     } else if (hour > hourH) {

//         hourElArr[i].addClass("future")
//         // console.log(hourElArr[i]);
//     }
// });


// //render old data to the page

// renderData();

// // var textInput9am = hour9El.val().trim();
// var textInput9am;
// var textInput10am = hour10El.val().trim();
// var textInput11am = hour11El.val().trim(); 
// var textInput12pm = hour12El.val().trim(); 
// var textInput13pm = hour13El.val().trim(); 
// var textInput14pm = hour14El.val().trim(); 
// var textInput15pm = hour15El.val().trim(); 
// var textInput16pm = hour16El.val().trim(); 
// var textInput17pm = hour17El.val().trim(); 

// var dataObj = {
//     block9am: textInput9am,
//     block10am: textInput10am,
//     block11am: textInput11am,
//     block12pm: textInput12pm,
//     block13pm: textInput13pm,
//     block14pm: textInput14pm,
//     block15pm: textInput15pm,
//     block16pm: textInput16pm,
//     block17pm: textInput17pm
// };



// btn9.on("click", function(){
//     console.log("btn9 was clicked");

//     textInput9am = hour9El.val().trim();
//     localStorage.setItem("data9am", JSON.stringify(textInput9am));
   
    
// })



// for (let i=9; i < 18; i++){
//    var hourEl = $("#"+i);
// }


// // var newData = {};

// function renderData() {

//     var data = JSON.parse(localStorage.getItem("data9am"));

//     if (!data) {
//         return;
//     }

//     hour9El.text(JSON.parse(localStorage.getItem("data9am")));
// }

// //when click on the save button

// // get the data from input

// //save data to localstorage

// //retrieve data from local storage

// //print data to textarea










// //

// // var message = "";


// // var data1 = $("#textarea1").val().trim();

// // btnArr.forEach(function(button, i){
// //     button.on("click", function {
// //         localStorage.setItem("todo", data1)
// //         hourElArr[i].text(data);
// //     })
// // })










//complete

var currentTimeEl = $('#currentDay');
var currentTime; 
var hourH = moment(currentTime).format("H");

setInterval(function() {
    currentTime = moment().format("MM/DD/YYYY [at] HH:mm:ss");
    currentTimeEl.text(currentTime);
},1000);










for (let i = 9; i < 18; i++ ) {
    var row = $( "<div></div>" );
    var className = 'row' + i + 'am';
    row.addClass('row h-100 ' + className);
   
    var hour = $('<div class="hour col-lg-2"></div>');

    var pTag = $('<p class="time-block"></p>');
    pTag.text(moment().hour(i).format("ha"));
    hour.append(pTag);

    let textArea = $(`<textarea id="${i}" class="description col-lg-8"></textarea>`);
    let buttonTag = $(`<button id="btn${i}" class="saveBtn col-lg-2"><i class="fas fa-save"></i></button>`)

  

    row.append(hour, textArea, buttonTag)
    $('.container').append(row);
   

    var hourH = moment();
    // console.log(i, moment().hour(i).diff(hourH, 'hours'));
    if(moment().hour(i).diff(hourH, 'hours') < 0) { 
        
        textArea.addClass("past");
    } else if (moment().hour(i).diff(hourH, 'hours') === 0) {
        
        textArea.addClass("present");
    } else {
        textArea.addClass("future");
    }

    //get old message
    var message = JSON.parse(localStorage.getItem(`textInput${i}`));
    console.log(message);
   
    if (message !== null) {
     textArea.text(message);
    };

    //save new message
    buttonTag.on("click", function(){

        localStorage.setItem(`textInput${i}`, JSON.stringify(textArea.val().trim()));
    })

    // console.log(textArea.val().trim())
}