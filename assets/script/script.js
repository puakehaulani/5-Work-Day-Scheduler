//Set Date dynamically with moment
let dateEl = document.getElementById("currentDay");
let timeVar = moment();
let currentTime = timeVar.format("HH");
console.log(currentTime);
dateEl.innerHTML = timeVar.format("dddd, MMMM Do");

//Scheduler Pseudocode
// stuff to do not necessarily in order
// 3. Change background color styling on li element to match time
// $("").replaceWith()

// let hourBlock = $(".hour").attr('data-militaryTime');
for (i = 1; i < 11; i++) {
    let idName = "color-area-" + i;
    let $div = $("input#" + idName);
    let hourBlock = $div.attr('data-militaryTime');
    console.log(idName);
    // a. Use moment.js to check current time? create boolean variables on how the current time is related to the time block. Then if/else statements using the boolean values(?) to check against current time, and add in style changes.
    if (currentTime < hourBlock) {
        $div.addClass('future');
        console.log("it is future" + hourBlock);
    } else if (currentTime > hourBlock) {
        $div.addClass('past');
        console.log("it is past" + hourBlock);
    } else if (currentTime === hourBlock) {
        $div.addClass('present');
        console.log("it is present" + hourBlock);
    }
}
// a. Store input in local storage?
$(".saveBtn").click(function (event) {
    console.log(event.target);
    console.log($(this).parent().siblings(".text-input").val());
    let inputVal = $(this).parent().siblings(".text-input").val();
    let btnKey = $(this).attr("id");
    localStorage.setItem(btnKey, inputVal);
})
// ai. Key should be the time slot so it is unchanged, but if the user changes the info in the text box it will update in the right spot and delete old content by updating the value only.
// b. Get input from local storage and return in text area
for (var i = 0; i < localStorage.length; i++) {
    let keyName = localStorage.key(i);
    let valContent = localStorage.getItem(localStorage.key(i));

    console.log(localStorage.getItem(localStorage.key(i)));
    console.log(localStorage.key(i));
    $("#" + keyName).parent().siblings(".text-input").val(valContent);
}

// 4. EXTRA if time at the end, style nicely
// Hints/Notes/Extra:
// jQuery .each()