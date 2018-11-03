var time = new Date().getHours();
var noon = 12;
var evening = 17;
var partyTime;
var napTime = 15;
var wakeUpTime = 7;
var lunchTime;
var isPartyTime = false;

var updateClock = function () {
	var messageText;
	var image;
	if (time === wakeUpTime) {
        messageText = "MAOW! ~poke~";
        image =	"https://dingo.care2.com/pictures/causes/3116/3115002.large.jpg";
    } else if (time < noon) {
        messageText = "Iz morning!";
        image = "http://mewanty.net/assets/Cat-Necktie.jpg";
    } else if (time >= noon && time < 1) {
        time = lunchTime;
        messageText = "Time to eat a food";
        image = "http://www.petbusiness.com/catmeat.jpg";
    } else if (time >= napTime && time < evening) {
        messageText = "I am a sleepy loaf";
        image = "https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b45d277eab70f78361786eace13dbb16&auto=format&fit=crop&w=1050&q=80";
    } else if (time === partyTime) {
        messageText = "WOO. I invited Whiskers, zat k?";
        image = "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43cb78de7049ab49aaa8b6ce363b8986&auto=format&fit=crop&w=1050&q=80";
    } else if (time > evening) {
        messageText = "Gud evning";
        image = "https://images.unsplash.com/photo-1465263284753-a3028ea154e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2391b994e16b0103e64650c56dd94506&auto=format&fit=crop&w=1052&q=80";
    } else {
        messageText = "Gud aftrnun!";
        image = "https://dailykitten.com/wp-content/uploads/2010/11/1289966550.P1010276.jpg";
    }

    var lolcat = document.getElementById('lolcat');
    lolcat.src = image;

    var timeEventJS = document.getElementById("timeEvent");
    timeEventJS.innerText = messageText;

    showCurrentTime();
};
	
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours 
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = (hours - 12);
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");



var partyEvent = function () {
        if (isPartyTime === false) {
            isPartyTime = true;
            time = partyTime;
            partyTimeButton.innerText  = "Party Over";
            partyTimeButton.style.backgroundColor = "#0A8DAB";
        } else {
            isPartyTime = false;
            time = new Date().getHours();
            partyTimeButton.innerText = "PARTY TIME!";
            partyTimeButton.style.backgroundColor = "#222";
        }
    };
var wakeUpEvent = function () {
    wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function () {
    lunchTime = lunchTimeSelector.value;
};
var napEvent = function () {
    napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);

napTimeSelector.addEventListener('change', napEvent);

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
