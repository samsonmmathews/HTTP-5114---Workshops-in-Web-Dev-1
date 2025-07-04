var min = 0, max = 3;
var winningDoor, choice, removeDoor;
var switchCounter = 0, stayCounter = 0, total = 0; 
var percentage = 0;

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



