//Set Date dynamically with moment
let dateEl = document.getElementById("currentDay");
let timeVar = moment();
let currentTime = timeVar.format("HH"); //LT

dateEl.innerHTML = timeVar.format("dddd, MMMM Do");

//Scheduler Pseudocode
// stuff to do not necessarily in order

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

// 3. Change background color styling on li element to match time
// $("").replaceWith()

let hourBlock = $(this).data();
console.log(hourBlock);
// a. Use moment.js to check current time? create boolean variables on how the current time is related to the time block. Then if/else statements using the boolean values(?) to check against current time, and add in style changes.
if (currentTime > hourBlock) {
    $('hour').addClass('future').removeClass('hour');
    console.log("it is" + hourBlock);
} else if (currentTime < hourBlock) {
    $('hour').addClass('past').removeClass('hour');
    console.log("it is" + hourBlock);
} else {
    $('hour').addClass('present').removeClass('hour');
    console.log("it is" + hourBlock);
}


// 4. EXTRA if time at the end, style nicely
// Hints/Notes/Extra:
// jQuery .each()