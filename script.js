const dayBlock = document.querySelector(".dayBlock");
const block = document.querySelector(".block");
let isHold = true;
let isInBlock = true;

const moveBlockWhenHold = () => {

/*General structure
-Stablish a relation between dayBlock mousedown and mouseup 
to make the event fire only when the mouse is holding the 
block 

-When the mouse is holding the block, generate an event 
listener that moves the block withing the general dayBlock
and remove the pointer events to avoid glitches when the
mouse goes off the block, when the mouse stops holding, remove the event listener and reincorporate pointer events


*/

 

    let removeHold = () => {
        isHold = false; 

            //Make this into a function
        



    }

    let addHold = () => {
        isHold = true;

    }


    dayBlock.addEventListener("mousedown", addHold);

    dayBlock.addEventListener("mouseup", removeHold);

    
    dayBlock.addEventListener("mouseleave", removeHold);



}

moveBlockWhenHold();







