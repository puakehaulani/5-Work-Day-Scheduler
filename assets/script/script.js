//Set Date dynamically with moment
let dateEl = document.getElementById("currentDay");
let today = moment();
dateEl.innerHTML = today.format("dddd, MMMM Do");

//Scheduler Pseudocode
// stuff to do not necessarily in order
// 1. Create time slots
// a. Create list items for each hour block.
// ai. Give attributes to label with time, give classname to access later, styling attribute to change on time.
// aii. Add submit button on end of line with fontawesome icon to save text
// b. Create ordered list for li to sit in
// c. Append all created elements so they will appear on page
// 2. User input text areas on li
// a. Store input in local storage?
// ai. Key should be the time slot so it is unchanged, but if the user changes the info in the text box it will update in the right spot and delete old content by updating the value only.
// b. Get input from local storage and return in text area
// 3. Change background color styling on li element to match time
// gray is past, green is future, red is current?
// a. Use moment.js to check current time? create boolean variables on how the current time is related to the time block. Then if/else statements using the boolean values(?) to check against current time, and add in style changes.
// b. Add styling on css by class (.past, .present, .future) and make a function in the if loop to change the class on the li to the one that matches the case
// 4. EXTRA if time at the end, style nicely
// Hints/Notes/Extra:
// jQuery .each()
