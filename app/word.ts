import {letterManager} from './letters';
let x = 10
let y = -100
for (let word of ["helloworld","cjrocks", "goodjob", "javascript", "havingfun", "keepplaying", "youaresoclose", "bossisnext", "supercalifragilisticexpialidocious"]) {
    y -= 300
    x = 0
  for (let ltr of word) {
    x += 20
    letterManager.letters.push(
      {letter:ltr,x,y,matched:false}
    )
  }
}