function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${event.keyCode}"]`)
    console.log(key);
    
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")

}
function removeTransition(ev){
    if (ev.propertyName !== 'transform') return;
    console.log(ev.propertyName);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})
window.addEventListener("keydown", playSound)