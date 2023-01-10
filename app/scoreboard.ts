import {canvas, ctx } from './canvas2';
import {letterManager} from './letters';
import {goodJobManager} from'./goodJobManager';
import {gameoverManager} from './gameoverManager'

export const scoreboard = {
  score:0,
  draw() {
    ctx.font = '24px Futura';
    ctx.fillText(
      `Score: ${this.score}`, 
      50,50
    );
    if(scoreboard.score > 25) {
      goodJobManager.display = true;
    }
    if (scoreboard.score < 0) {
      gameoverManager.display = true;
    }
  }
}

