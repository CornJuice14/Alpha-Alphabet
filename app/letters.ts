import { ctx, canvas } from './canvas2'
import {goodJobManager} from './goodJobManager'
import {scoreboard} from './scoreboard'


export const letterManager = {
  letters: [
    { x: Math.random() * canvas.width, y: 50, letter: "a", matched: false },
    { x: Math.random() * canvas.width, y: 50, letter: "b" },
    { x: Math.random() * canvas.width, y: 50, letter: "c" },
    { x: Math.random() * canvas.width, y: 50, letter: "d" },
    { x: Math.random() * canvas.width, y: 50, letter: "e" },
    { x: Math.random() * canvas.width, y: 50, letter: "f" },
    { x: Math.random() * canvas.width, y: 50, letter: "g" },
    { x: Math.random() * canvas.width, y: 50, letter: "h" },
    { x: Math.random() * canvas.width, y: 50, letter: "i" },
    { x: Math.random() * canvas.width, y: 50, letter: "j" },
    { x: Math.random() * canvas.width, y: 50, letter: "k" },
    { x: Math.random() * canvas.width, y: 50, letter: "l" },
    { x: Math.random() * canvas.width, y: 50, letter: "m" },
    { x: Math.random() * canvas.width, y: 80, letter: "n" },
    { x: Math.random() * canvas.width, y: 80, letter: "o" },
    { x: Math.random() * canvas.width, y: 80, letter: "p" },
    { x: Math.random() * canvas.width, y: 80, letter: "q" },
    { x: Math.random() * canvas.width, y: 80, letter: "r" },
    { x: Math.random() * canvas.width, y: 80, letter: "s" },
    { x: Math.random() * canvas.width, y: 80, letter: "t" },
    { x: Math.random() * canvas.width, y: 80, letter: "u" },
    { x: Math.random() * canvas.width, y: 80, letter: "v" },
    { x: Math.random() * canvas.width, y: 80, letter: "w" },
    { x: Math.random() * canvas.width, y: 80, letter: "x" },
    { x: Math.random() * canvas.width, y: 80, letter: "y" },
    { x: Math.random() * canvas.width, y: 80, letter: "z" },
  ],

  draw() {
    this.letters.forEach(
      (letter) => {
        ctx.font = '30px Arial';
        ctx.fillText(letter.letter, letter.x, letter.y);
      }
    )
  },

  update() {
    this.letters.forEach(
      (letter) => {
        letter.y += 1;
        letter.x += 1.5;
        if (letter.y > canvas.height) {
          letter.y = 0;
          letter.y = 1.25
          letter.x = Math.random() * canvas.width
          scoreboard.score -= 1
        }
        if (letter.x > canvas.width) {
          letter.x = 0
        }
        if (letter.matched) {
          letter.y += -100;
        }
      });
  }
}

window.addEventListener(
  'keypress',
  function(event) {
    let correct = false
    letterManager.letters.forEach(
      (letter) => {
        if (correct) {return}
        if (letter.letter == event.key) {
          letter.matched = true //will match all letters
          if(letter.y > 0) {
          scoreboard.score += 1
            correct = true
          }
        }  
      }
    )
    if (!correct) {
      scoreboard.score -= 1
    }
  }
)