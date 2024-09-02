function switchBulb() {
    document.getElementById('bulb').src = 'bulb2.jpg'
    document.getElementById('switch').innerText = "OFF"
}

function switchBulb() {
    if (document.getElementById('switch').innerText == 'ON'){
        document.getElementById('bulb').src = "bulb2.jpg";
        document.getElementById('switch').innerText = "OFF";
    }
    else {
        document.getElementById('bulb').src = "bulb1.jpg";
        document.getElementById('switch').innerText = "ON";
    }
}

let sky = 'cloudy'

// Assignment operators = and comparison operators ==
// Conditional statements
if (sky == 'cloudy') {
    alert('It will rain');
}
else {
    alert('It will not rain');
}