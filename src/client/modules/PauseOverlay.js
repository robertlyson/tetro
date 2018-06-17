import { Container, Sprite, Text, Texture } from 'pixi.js';
import { TweenMax } from 'gsap/all';

class PauseOverlay extends Container {
  constructor(parent) {
    super();

    this.addBackground(parent);
    this.addText();
  }

  addBackground(parent) {
    const background = new Sprite(Texture.WHITE);
    background.alpha = 0.1;
    background.tint = 0x000000;
    background.anchor.set(0.5);
    this.addChild(background);
    this._background = background;
    this.resizeBackground(parent);
  }

  addText() {
    const text = new Text('Pause', {
      align: 'center',
      cacheAsBitmap: true,
      fontFamily: 'Arial',
      fontSize: 24,
      fontWeight: 'bold',
      fill: 0xffffff
    });
    text.anchor.set(0.5);
    text.position.set(Math.floor(this.width / 2), Math.floor(this.height / 2));
    this.addChild(text);

    this._textAnimation = TweenMax.to(text, 0.6, { alpha: 0, yoyo: true, repeat: 9999 });
  }

  resizeBackground(parent) {
    this._background.width = parent.width;
    this._background.height = parent.height;
    this._background.position.set(Math.floor(this.width / 2), Math.floor(this.height / 2));
  }

  show(parent) {
    this.resizeBackground(parent);
    this.visible = true;
    this._textAnimation.resume(0);
  }

  hide() {
    this.visible = false;
    this._textAnimation.pause();
  }
}

export default PauseOverlay;
