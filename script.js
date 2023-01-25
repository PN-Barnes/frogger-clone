const timer = document.querySelector('#timeleft');
const result = document.querySelector('#results');
const startButton = document.querySelector('#start-pause');
const squares = document.querySelectorAll('.grid div');
console.log(squares.length);
let currentIndex = squares.length - 5;

console.log(currentIndex);
const moveFrogger = (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (currentIndex - 9 < 0) {
        return;
      }
      squares[currentIndex].classList.remove('frog');
      currentIndex -= 9;
      console.log(currentIndex);
      break;
    case 'ArrowDown':
      if (currentIndex + 9 >= squares.length) {
        return;
      }
      squares[currentIndex].classList.remove('frog');
      currentIndex += 9;
      console.log(currentIndex);
      break;
    case 'ArrowLeft':
      if (currentIndex - 1 < 0) {
        return;
      }
      squares[currentIndex].classList.remove('frog');
      currentIndex -= 1;
      console.log(currentIndex);
      break;
    case 'ArrowRight':
      if (currentIndex + 1 >= squares.length) {
        return;
      }
      squares[currentIndex].classList.remove('frog');
      currentIndex += 1;
      console.log(currentIndex);
      break;

    default:
      break;
  }
  squares[currentIndex].classList.add('frog');
};
document.addEventListener('keyup', (event) => {
  moveFrogger(event);
});
