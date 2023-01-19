import {letterManager} from './letters';
let x = 10
let y = -300
for (let word of ["hello world","cj rocks", "good job", "javascript", "having fun", "keep playing", "you are so close", "boss is next", "supercalifragilisticexpialidocious"]) {
    y -= 300
    x = 0
  for (let ltr of word) {
    x += 20
    letterManager.letters.push(
      {letter:ltr,x,y,matched:false}
    )
  }
}