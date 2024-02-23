
let counterLabel = document.getElementById("counter")
let decreaseBtn = document.getElementById("decrease")
let resetBtn = document.getElementById("reset")
let increaseBtn = document.getElementById("increase")
let count = 0;

// increase Function
increaseBtn.onclick=function(){
    count++;
    counterLabel.textContent=count;
}
// decrease Function
decreaseBtn.onclick=function(){
    count--;
    counterLabel.textContent=count;
}
//reset Function
resetBtn.onclick=function(){
    count=0;
    counterLabel.textContent=count;
}