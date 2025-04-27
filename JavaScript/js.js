

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counterLabel = document.getElementById("counter")

var counter = 0;

// increase counter value
increase.onclick = function(){

    counter++;

    counterLabel.textContent = counter;

}

// Decrease counter value
decrease.onclick = function(){

    counter--;

    counterLabel.textContent = counter;

}

// Reset counter value

