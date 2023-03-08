let player, ball, violetBricks, yellowBricks, redBricks;

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    heigth: 640,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload,
        create,
        update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        },
    }
};
  
const game = new Phaser.Game(config);

function preload() {
  this.load.image('ball', 'assets/images/ball.png');
  this.load.image('paddle', 'assets/images/paddle.png');
  this.load.image('brick1', 'assets/images/brick1.png');
  this.load.image('brick2', 'assets/images/brick2.png');
  this.load.image('brick3', 'assets/images/brick3.png');
}
function create() {

}
function update() {

}