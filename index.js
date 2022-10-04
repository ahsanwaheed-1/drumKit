var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting button press

for(var i=0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var keyPressed = this.innerHTML;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});
}

//detecting key press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom1 = new Audio("tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio("tom-3.mp3");
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio("tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio("snare.mp3");
            tom1.play();
            break;
         
        case "k":
            var tom1 = new Audio("crash.mp3");
            tom1.play();
            break;

        case "l":
            var tom1 = new Audio("kick-bass.mp3");
            tom1.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    var animation = document.querySelector("." +  currentKey);
    animation.classList.add("pressed");

    setTimeout( function (){
        animation.classList.remove("pressed");
    }, 100);
}