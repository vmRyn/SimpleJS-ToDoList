// Declaring Input and Task Variables
let addTaskButton = document.getElementById('addTask');
let currentTasks = document.getElementById('TaskContainer');
let inputName = document.getElementById('inputName');
let inputField = document.getElementById('inputField');
let inputDate = document.getElementById('inputDate');
let inputImportance = document.getElementById('inputImportance');
let DeleteTask = document.getElementById('DeleteButton');

//Click Add Task Function
addTaskButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('PStyling')
    paragraph.innerText = "Task For " + inputName.value + " | " + inputField.value + " | " + inputDate.value + " | " + inputImportance.value;
    currentTasks.appendChild(paragraph);
    inputName.value = "";
    inputField.value = "";
    inputDate.value = "";
    inputImportance.value = "";

    //Click once to Cross Out a Task
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })

    //Click twice to Delete a Task
    paragraph.addEventListener('dblclick', function() {
        currentTasks.removeChild(paragraph);
    })
})

// Date and Time Script
function showDateTime() {
    var LocalTime = document.getElementById("LocalTime");
    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var time = hour + ":" + min + ":" + sec;

    LocalTime.innerText = `Today is  ${today}. Time is ${time}`;
}
setInterval(showDateTime, 1000);