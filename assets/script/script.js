//Set Date dynamically with moment
let dateEl = document.getElementById("currentDay");
let today = moment();
dateEl.innerHTML = today.format("dddd, MMMM Do");

//Scheduler Pseudocode
// stuff to do not necessarily in order

// a. Store input in local storage?
localStorage.setItem('hour', 'text');
// ai. Key should be the time slot so it is unchanged, but if the user changes the info in the text box it will update in the right spot and delete old content by updating the value only.
// b. Get input from local storage and return in text area
var VARNAME = localStorage.getItem('hour');
// 3. Change background color styling on li element to match time
// $("").replaceWith()
// gray is past, green is future, red is current? styles inside css given
// a. Use moment.js to check current time? create boolean variables on how the current time is related to the time block. Then if/else statements using the boolean values(?) to check against current time, and add in style changes.
// b. Add styling on css by class (.past, .present, .future) and make a function in the if loop to change the class on the li to the one that matches the case
// 4. EXTRA if time at the end, style nicely
// Hints/Notes/Extra:
// jQuery .each()