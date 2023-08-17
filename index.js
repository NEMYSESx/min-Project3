
let birthDay = document.querySelector('#text-1');
let birthMonth = document.querySelector('#text-2');
let birthYear = document .querySelector('#text-3');

let btn = document.querySelector('#main-button');

let updateYear = document.querySelector('#update-text-1');
let updateMonth = document.querySelector('#update-text-2');
let updateDay = document.querySelector('#update-text-3');

let currentDay = 17;
let currentMonth = 8;
let currentYear = 2023;

btn.onclick = function() {
    update();
}

function update(){
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let birthDayValue = parseInt(birthDay.value);
    let birthMonthValue = parseInt(birthMonth.value);
    let birthYearValue = parseInt(birthYear.value);
    if (birthDayValue > currentDay) {
        currentMonth = currentMonth - 1;
        currentDay = currentDay + month[birthMonthValue - 1];
    }

    if (birthMonthValue > currentMonth) {
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
    }

    updateDay.innerHTML = currentDay - birthDayValue;
    updateMonth.innerHTML = currentMonth - birthMonthValue;
    updateYear.innerHTML = currentYear - birthYearValue;
    
}

function valid(){
    
}


