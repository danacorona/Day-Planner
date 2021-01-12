$(document).ready(function() {

    //.saveBtn is clicked, a var is set with the div ID. The div ID in ls key called "time".
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr('id');
        var textContent = $(this).siblings(".calEvent").val();
        console.log(textContent);
        localStorage.setItem(time, textContent);
    });

    //repeat this for every hour
    $("#nineAM .calEvent").val(localStorage.getItem("nineAM"));
    $("#tenAM .calEvent").val(localStorage.getItem("tenAM"));
    $("#elevenAM .calEvent").val(localStorage.getItem("elevenAM"));
    $("#twelvePM .calEvent").val(localStorage.getItem("twelvePM"));
    $("#onePM .calEvent").val(localStorage.getItem("onePM"));
    $("#twoPM .calEvent").val(localStorage.getItem("twoPM"));
    $("#threePM .calEvent").val(localStorage.getItem("threePM"));
    $("#fourPM .calEvent").val(localStorage.getItem("fourPM"));
    $("#fivePM .calEvent").val(localStorage.getItem("fivePM"));
    $("#sixPM .calEvent").val(localStorage.getItem("sixPM"));
    
    function grabHours () {
        var currentDay = document.querySelector("#currentDay");
        currentDay.innerHTML = moment().format('LLLL');
        var momentHour = moment().hour();
        $(".row").each(function () {
            var hour = $(this).children(".hour").text().split(" ")[0];
            if (hour === momentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            } else if (hour > momentHour) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            } else {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
        })
    }



    grabHours();

    var interval = setInterval(grabHours, 10000);

    
});
