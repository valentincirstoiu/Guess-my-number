'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('body').style.backgroundImage = 'url(guessmunr1.jpg)';
const displayText = function (message) {
  document.querySelector('.message').textContent = message;
};
const numberContent = function (text) {
  document.querySelector('.number').textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    //When there is no imput

    displayText('❗  Trebuie introdus un numar.');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Numarul este corect!';
    displayText('Numarul este corect!');
    document.querySelector('body').style.backgroundImage =
      'url(guessmynr1.png)';
    document.querySelector('.module').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '25rem';
    // document.querySelector('.number').textContent = secretNumber;
    numberContent(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    // const tooHigh = 'Numarul scris este prea mare.';
    // const tooLow = 'Numarul scris este prea mic.';
    if (score > 1) {
      // if (guess > secretNumber) {
      //   document.querySelector('.message').textContent = tooHigh;
      // } else if (guess < secretNumber) {
      //   document.querySelector('.message').textContent = tooLow;
      // }
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'Numarul scris este prea mare.'
      //     : 'Numarul scris este prea mic.';
      displayText(
        guess > secretNumber
          ? 'Numarul scris este prea mare.'
          : 'Numarul scris este prea mic.'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'Scorul tau este sub 0 😥';
      displayText('Scorul tau este sub 0 😥');
      document.querySelector('.score').textContent = 0;
    }
  }
  //When is lower or higher
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Numarul scris este prea mare.';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Scorul tau este sub 0 😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Numarul scris este prea mic.';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Scorul tau este sub 0 😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = '?';
  numberContent('?');
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayText('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundImage = 'url(guessmunr1.jpg)';
  document.querySelector('.module').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
