import {ctx, canvas} from './canvas2'
import {addAnimation, startAnimation} from './animation'
import {letterManager} from './letters'
import {goodJobManager} from'./goodJobManager'
import {scoreboard} from './scoreboard'
import {gameoverManager} from './gameoverManager'
addAnimation(letterManager)
addAnimation(goodJobManager)
addAnimation(gameoverManager)
scoreboard.draw()
addAnimation(scoreboard)
// run animation
startAnimation();
