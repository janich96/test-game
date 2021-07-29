import './canvas.css';
import * as React from 'react';
import * as PIXI from 'pixi.js';
import appleImage from '../../images/apple.png';
import bananaImage from '../../images/banana.png';
import bottleImage from '../../images/bottle.png';
import cocktailImage from '../../images/cocktail.png';
import coinImage from '../../images/coin.png';
import lemonImage from '../../images/lemon.png';
import moneyImage from '../../images/money.png';
import orangeImage from '../../images/orange.png';
import pearImage from '../../images/pear.png';
import strawberryImage from '../../images/strawberry.png';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight - 100,
  backgroundColor: 0x733ed2,
  forceCanvas: true
});

const appleTexture = PIXI.Texture.from(appleImage);
const bananaTexture = PIXI.Texture.from(bananaImage);
const bottleTexture = PIXI.Texture.from(bottleImage);
const cocktailTexture = PIXI.Texture.from(cocktailImage);
const coinTexture = PIXI.Texture.from(coinImage);
const lemonTexture = PIXI.Texture.from(lemonImage);
const moneyTexture = PIXI.Texture.from(moneyImage);
const orangeTexture = PIXI.Texture.from(orangeImage);
const pearTexture = PIXI.Texture.from(pearImage);
const strawberryTexture = PIXI.Texture.from(strawberryImage);

const apple = new PIXI.Sprite(appleTexture);
const banana = new PIXI.Sprite(bananaTexture);
const bottle = new PIXI.Sprite(bottleTexture);
const cocktail = new PIXI.Sprite(cocktailTexture);
const coin = new PIXI.Sprite(coinTexture);
const lemon = new PIXI.Sprite(lemonTexture);
const money = new PIXI.Sprite(moneyTexture);
const orange = new PIXI.Sprite(orangeTexture);
const pear = new PIXI.Sprite(pearTexture);
const strawberry = new PIXI.Sprite(strawberryTexture);

const reelItems = [
  apple, banana, bottle, cocktail, coin, lemon, money, orange, pear, strawberry
];

const container = new PIXI.Container();
const containerHeight = container.height = 150;
app.stage.addChild(container);

export function reel(posX) {

  function addSlots() {
    let reelContainer = new PIXI.Container();
    let sprite = reelItems[Math.floor(Math.random() * reelItems.length)];
    sprite.height = 50;
    sprite.width = 50;
    reelContainer.addChild(sprite);
    reelContainer.x = posX;
    reelContainer.y = 10;
    container.addChild(reelContainer);
    app.ticker.add(delta => slotSpin(delta))

    function slotSpin(delta) {
      reelContainer.y += 10

      if (reelContainer.y > containerHeight) {
        container.removeChild(reelContainer);
        reelContainer.y = 10;
        reelContainer = new PIXI.Container();
        sprite = reelItems[Math.floor(Math.random() * reelItems.length)];
      }
    }
    async function game() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => addSlots(), 100)
    });
    let result = await promise;
    return result;
    }
    game();
  }
  addSlots();
}


class Canvas extends React.Component {
  render() {
    document.body.appendChild(app.view);
    return (<></>);
  }
}

export default Canvas;
