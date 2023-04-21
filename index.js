var numberOfButton = document.querySelectorAll(".drum").length
 for(var i=0;i<numberOfButton;i++)
 {
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var buttonInnerHTML = this.innerHTML
         switch (buttonInnerHTML) {
             case 'A':
                 var tone = new Audio("sounds/crash.mp3");
                 tone.play();
                 break
             case 'B':
                 var tone = new Audio("sounds/kick-bass.mp3");
                 tone.play();
                 break
             case 'C':
                 var tone = new Audio("sounds/snare.mp3");
                 tone.play();
                 break
            case 'D':
                var tone = new Audio("sounds/tom-1.mp3");
                tone.play();
                break;

                case 'E':
                    var tone = new Audio("sounds/tom-2.mp3");
                    tone.play();
                    break;

                case 'F':
                    var tone = new Audio("sounds/tom-3.mp3");
                    tone.play();
                    break;

                case 'G':
                    var tone = new Audio("sounds/tom-4.mp3");
                    tone.play();
                    break;

            default: console.log("invalid");
                break;
        }
    });


}



