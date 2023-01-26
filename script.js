const timer = document.querySelector('#timeleft');
const result = document.querySelector('#results');
const startButton = document.querySelector('#start-pause');
const squares = document.querySelectorAll('.grid div');
const leftLogs = document.querySelectorAll('.log-left');
const rightLogs = document.querySelectorAll('.log-right');
console.log(squares.length);
let currentIndex = squares.length - 5;
let carRightStart = 54;
let carLeftStart = 53;
let carRightIndex;
let carRightEnd = 62;
let carLeftIndex;
let carLeftEnd = 45;

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
      break;
    case 'ArrowLeft':
      if (currentIndex - 1 < 0 || currentIndex % 9 === 0) {
        return;
      }
      squares[currentIndex].classList.remove('frog');
      currentIndex -= 1;
      break;
    case 'ArrowRight':
      if (currentIndex + 1 >= squares.length || currentIndex % 9 === 8) {
        return;
      }
      squares[currentIndex].classList.remove('frog');
      currentIndex += 1;

      break;

    default:
      break;
  }
  squares[currentIndex].classList.add('frog');
};
document.addEventListener('keyup', (event) => {
  moveFrogger(event);
});

function autoMoveLog() {
  console.log('movelog');
  leftLogs.forEach((leftLog) => moveLogLeft(leftLog));
  rightLogs.forEach((rightLog) => moveLogRight(rightLog));
}

function moveLogLeft(leftLog) {
  switch (true) {
    case leftLog.classList.contains('l1'):
      leftLog.classList.remove('l1');
      leftLog.classList.add('l2');
      break;
    case leftLog.classList.contains('l2'):
      leftLog.classList.remove('l2');
      leftLog.classList.add('l3');
      break;
    case leftLog.classList.contains('l3'):
      leftLog.classList.remove('l3');
      leftLog.classList.add('l4');
      break;
    case leftLog.classList.contains('l4'):
      leftLog.classList.remove('l4');
      leftLog.classList.add('l5');
      break;
    case leftLog.classList.contains('l5'):
      leftLog.classList.remove('l5');
      leftLog.classList.add('l1');
      break;
  }
}

function moveLogRight(rightLog) {
  switch (true) {
    case rightLog.classList.contains('l1'):
      rightLog.classList.remove('l1');
      rightLog.classList.add('l5');
      break;
    case rightLog.classList.contains('l2'):
      rightLog.classList.remove('l2');
      rightLog.classList.add('l1');
      break;
    case rightLog.classList.contains('l3'):
      rightLog.classList.remove('l3');
      rightLog.classList.add('l2');
      break;
    case rightLog.classList.contains('l4'):
      rightLog.classList.remove('l4');
      rightLog.classList.add('l3');
      break;
    case rightLog.classList.contains('l5'):
      rightLog.classList.remove('l5');
      rightLog.classList.add('l4');
      break;
  }
}
setInterval(autoMoveLog, 1000);
