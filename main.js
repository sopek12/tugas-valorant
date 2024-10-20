const boxes = document.querySelectorAll('.box');
const audioButtons = document.querySelectorAll('.sound-icon');
let currentSound = null;

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}



// Scroll
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Sound
audioButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audio = button.nextElementSibling;
        playSound(audio);
    });
});

function playSound(sound) {
    if (currentSound && !currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    if (sound) {
        sound.play();
        currentSound = sound;
    }
}