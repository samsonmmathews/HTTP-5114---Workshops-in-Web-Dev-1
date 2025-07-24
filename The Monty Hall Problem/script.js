window.onload = onReady;

function onReady() {

    var min = 0, max = 3;
    var winningDoor, choice, removeDoor;
    var switchPercentage = 0, stayPercentage = 0;

    var stayCounter = parseInt(getCookie("stayCounter")) || 0;
    var switchCounter = parseInt(getCookie("switchCounter")) || 0;
    var total = parseInt(getCookie("total")) || 0;

    winningDoor = Math.ceil(Math.random() * (max - min) ) + min;
    // var winningDoor = Math.ceil(Math.random(0,3));
    console.log("The car is behind door number " + winningDoor);

    choice = Math.ceil(Math.random() * (max - min) ) + min;
    console.log("The contestant choses door number " + choice);

    do{
        removeDoor = Math.ceil(Math.random() * (max - min) ) + min;
        console.log("The host removes door number " + removeDoor);
    }while(removeDoor == choice || removeDoor == winningDoor);

    if(choice == winningDoor)
    {
        console.log("STAY!!");
        stayCounter++;
        total++;
    }
    else
    {
        console.log("SWITCH!!");
        switchCounter++;
        total++;
    }

    makeCookie("stayCounter", stayCounter, 60 * 60 * 24);
    makeCookie("switchCounter", switchCounter, 60 * 60 * 24);
    makeCookie("total", total, 60 * 60 * 24);

    stayPercentage = (stayCounter / total) * 100;
    switchPercentage = (switchCounter / total) * 100;

    // For testing
    console.log("stayCounter: " + stayCounter);
    console.log("switchCounter: " + switchCounter);
    console.log("total: " + total);
    console.log("stayPercentage: " + stayPercentage);
    console.log("switchPercentage: " + switchPercentage);

    document.getElementById('totalTries').innerText = `Total Simulations: ${total}`;
    document.getElementById('stayPercentage').innerText = `Stay Wins: ${stayCounter} (${stayPercentage.toFixed(2)}%)`;
    document.getElementById('switchPercentage').innerText = `Switch Wins: ${switchCounter} (${switchPercentage.toFixed(2)}%)`;

}

// Function to create the cookie
function makeCookie(cookieName, cookieValue, lifespan)
{
    document.cookie = cookieName + "=" + cookieValue + ";max-age=" + lifespan;
}

// Function to get the cookie - taken from w3schools
// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cookieName)
{
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}