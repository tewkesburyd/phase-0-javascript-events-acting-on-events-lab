// Your code here
const dodger = document.querySelector('#dodger');

document.addEventListener("keydown", (event) => {
    if (event.key === "arrowLeft"){
        moveDodgerLeft()
        console.log('left')
    } 
    else if (event.key === "arrowRight"){
        moveDodgerRight()
        console.log('right')
    }
})


const moveDodgerLeft = () =>{
        const leftNumbers = dodger.style.left.replace('px', '');
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`
        }

const moveDodgerRight = () => {
        const leftNumbers = dodger.style.left.replace('px', '');
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left + 1}px`
        }

//moveDodgerLeft()