// use global variable to share data between functions
let my_value = 0;

function turnOn() {
    my_value++;
    console.log(`turn on : ${my_value}`)
    document.getElementById("title").innerHTML = "Bulb is on";
    document.getElementById("image").src = "pic_bulbon.gif";
}

function turnOff() {
    my_value--;
    console.log(`turn off : ${my_value}`)
    document.getElementById("title").innerHTML = "Bulb is off";
    document.getElementById("image").src = "pic_bulboff.gif";
}
