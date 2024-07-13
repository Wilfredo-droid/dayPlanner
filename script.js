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

    let positionBlock = (e) => {

        if(isHold){
        /*It should'nt be -20 change it later to be - the 
        amount of space needed to center the mouse into 
        the item*/
        
        block.style.left = `clamp(0%, ${e.offsetX - 20}px, 90%)
        `; /*Set to clamp to automatically and 
        efficiently calculate how much to move the block 
        without overflowing*/
        }

    }

    let removeHold = () => {
        isHold = false; 

            //Make this into a function
        


    }

    let addHold = () => {
        isHold = true;

    }

    let onHold = () => {

        block.style.pointerEvents = "none";


        dayBlock.addEventListener("mousemove", positionBlock);
    }

    dayBlock.addEventListener("mousedown", addHold);

    dayBlock.addEventListener("mouseup", removeHold);

    
    dayBlock.addEventListener("mouseleave", removeHold);

    block.addEventListener("mousedown", onHold);


}

moveBlockWhenHold();







