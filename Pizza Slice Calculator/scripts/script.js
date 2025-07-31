window.onload = onReady;

function onReady() {
    
    var totalPeople = document.getElementById('totalPeople');
    var averageSlices = document.getElementById('averageSlices');
    var calculateBtn = document.getElementById('calculateBtn');
    
    var totalSlices, pizzasToOrder, leftoverSlices;

    calculateBtn.onclick = function() {

        var totalPeopleValue = parseInt(totalPeople.value);
        var averageSlicesValue = parseInt(averageSlices.value);

        totalSlices = totalPeopleValue * averageSlicesValue;
        pizzasToOrder = Math.ceil(totalSlices/8);
        leftoverSlices = (pizzasToOrder * 8) - totalSlices;
        
        console.log("totalPeople: " + totalPeopleValue);
        console.log("averageSlices: " + averageSlicesValue);

        document.getElementById('totalSlices').innerText = `Total slices needed: ${totalSlices}`;
        document.getElementById('pizzasToOrder').innerText = `Pizzas to order: ${pizzasToOrder}`;
        document.getElementById('leftoverSlices').innerText = `Leftover slices: ${leftoverSlices}`;

        console.log("totalSlices: " + totalSlices);
        console.log("pizzasToOrder: " + pizzasToOrder);
        console.log("leftoverSlices: " + leftoverSlices);

    }

}