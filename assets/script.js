var currentTimeEl = $("#currentDay");
var currentTime;

setInterval(function () {
  currentTime = moment().format("MM/DD/YYYY [at] HH:mm:ss");
  currentTimeEl.text(currentTime);
}, 1000);

for (let i = 8; i < 19; i++) {
  var row = $("<div></div>");
  row.addClass("row h-100");

  var hour = $('<div class="hour col-lg-1"></div>');

  var pTag = $('<p class="time-block"></p>');
  pTag.text(moment().hour(i).format("ha"));
  hour.append(pTag);

  let textArea = $(
    `<textarea id="${i}" class="description col-lg-8"></textarea>`
  );
  let buttonTag = $(
    `<button id="btn${i}" class="saveBtn col-lg-2"><i class="fas fa-save"></i></button>`
  );

  row.append(hour, textArea, buttonTag);
  $(".container").append(row);

  var hourH = moment();
  if (moment().hour(i).diff(hourH, "hours") < 0) {
    textArea.addClass("past");
  } else if (moment().hour(i).diff(hourH, "hours") === 0) {
    textArea.addClass("present");
  } else {
    textArea.addClass("future");
  }

  //get old message
  var message = JSON.parse(localStorage.getItem(`textInput${i}`));

  if (message !== null) {
    textArea.text(message);
  }

  //save new message
  buttonTag.on("click", function () {
    localStorage.setItem(
      `textInput${i}`,
      JSON.stringify(textArea.val().trim())
    );
  });

}
