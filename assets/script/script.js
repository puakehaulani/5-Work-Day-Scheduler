//Set Date dynamically with moment
let dateEl = document.getElementById('currentDay');
let today = moment();
dateEl.innerHTML = today.format('dddd, MMMM Do');