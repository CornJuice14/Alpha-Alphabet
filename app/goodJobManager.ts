import {ctx} from './canvas2'

export const img = document.createElement ('img');
img.src = 'goodJob.png';
document
.querySelector('#assets')
.appendChild(img);

export const goodJobManager = {
  img,
  ready : img.complete,
  frameWidth : 32,
  frameHeight : 32,
  totalFrames : 8,
  x : 85,
  y : 400,
  frame : 0,
  w : 320,
  h : 200,
  ms : 0,
  display : false,
  update(elapsed) {
    if(!this.display) {return}
    this.ms += elapsed;
    if (this.ms > 1000) {
      this.ms = 0;
      this.frame += 1
    }
  },
  draw() {
    if(!this.display) {return}
    let x = this.x;
    let y = this.y;
    let frame = this.frame;
    let w = this.w;
    let h = this.h;
    if (!this.ready) {
      setTimeout(
        ()=>this.draw(x,y,frame,w,h),
        100
      )
      console.log('Warning: Image not yet ready...', this.img);
      return
    }

    if(!w) {w = this.frameWidth}
    if(!h) {h = this.frameHeight}
    frame = frame % this.totalFrames;
    ctx.drawImage(
      this.img,
      0,
      this.frame * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      x,
      y,
      w,
      h
    );
  }
}

img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  goodJobManager.ready=true
});


