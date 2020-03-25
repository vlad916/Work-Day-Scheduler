$(document).ready(function () {

    // Variables created to be manipulated
    var showDateEl = $("#currentDay");
    var BtnEl = $(".saveBtn");
    var plansEl = $(".event-plan");

    // Sets the header current time
    showDateEl.text(moment().format("ddd, MMM Do h:mm a"));

    // Updating the time function
    var currentTime = function () {
        showDateEl.text(moment().format("ddd, MMM Do h:mm a"));

        var updateTime = moment().hour();

        // Check the current time of each textbox and adjust the class of the box from past, present and future accordingly
        plansEl.each(function (index, element) {
            element = $(element);
            if (updateTime > element.attr("data-time")) {
                element.addClass("past").removeClass("future");
            } else if (updateTime === element.attr("data-time")) {
                element.addClass("present").removeClass("future");
            }
        });
    }


    // Updates every second
    setInterval(currentTime, 1000);


    // Function for Save button
    BtnEl.on("click", function (event) {
        // Prevents the page from reverting to default
        event.preventDefault();
        // Creates the variables for the function
        var button = $(this);
        var btnData = $(this).attr("data-time");
        console.log(btnData);
        var targetEvent = $("#event" + btnData);
        console.log(targetEvent);
        console.log(targetEvent.val());

        // Saves input in local storage
        localStorage.setItem(targetEvent.attr("id"), targetEvent.val());
    });


    // Saved data from local storage is collected or grabbed to be used for these elements
    $("#event9").text(localStorage.getItem("event9"));
    $("#event10").text(localStorage.getItem("event10"));
    $("#event11").text(localStorage.getItem("event11"));
    $("#event12").text(localStorage.getItem("event12"));
    $("#event13").text(localStorage.getItem("event13"));
    $("#event14").text(localStorage.getItem("event14"));
    $("#event15").text(localStorage.getItem("event15"));
    $("#event16").text(localStorage.getItem("event16"));
    $("#event17").text(localStorage.getItem("event17"));

    // Clears local storage
    $("#clearBtn").on("click", function () {
        localStorage.clear();
        $(".event-plan").text("");
    });
});