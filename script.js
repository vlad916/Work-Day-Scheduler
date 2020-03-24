$(document).ready(function () {

// Variables created to be manipulated
var showDateEl = $("#currentDay");
var BtnEl = $(".saveBtn");
var plansEl = $(".event-plan");


showDateEl.text(moment().format("ddd, MMM Do"));

var currentTime = function () {
    showDateEl.text(moment().format("ddd, MMM Do"));
    
    var updateTime = moment().hour();

    plansEl.each(function (index, element) {
    element = $(element);
    if (updateTime > element.attr("data-time")) {
        element.addClass("past").removeClass("future");
    } else if (updateTime === element.attr("data-time")) {
        element.addClass("present").removeClass("future");
    }  
});
}   


setInterval(currentTime, 1000);


BtnEl.on("click", function (event) {

    event.preventDefault();

    var button = $(this);
    var btnData = $(this).attr("data-time");
    console.log(btnData);
    var targetEvent = $("#event" + btnData);
    console.log(targetEvent);
    console.log(targetEvent.val());

    localStorage.setItem(targetEvent.attr("id"), targetEvent.val());
});

$("#event9").text(localStorage.getItem("event9"));
$("#event10").text(localStorage.getItem("event10"));
$("#event11").text(localStorage.getItem("event11"));
$("#event12").text(localStorage.getItem("event12"));
$("#event13").text(localStorage.getItem("event13"));
$("#event14").text(localStorage.getItem("event14"));
$("#event15").text(localStorage.getItem("event15"));
$("#event16").text(localStorage.getItem("event16"));
$("#event17").text(localStorage.getItem("event17"));


$("#clearBtn").on("click", function () {
    localStorage.clear();
    $(".event-plan").text("");
});
});