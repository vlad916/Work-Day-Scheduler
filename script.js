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









});