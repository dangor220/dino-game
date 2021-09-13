const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

document.addEventListener('keydown', (event) => {
  jump();
  isAlive();
})

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(() => {
    dino.classList.remove('jump');
  }, 300)
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game over!");
  }
}, 10) 
