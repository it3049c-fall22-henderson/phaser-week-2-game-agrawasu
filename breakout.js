let player, ball, violetBricks, yellowBricks, redBricks, cursors;

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
    player = this.physics.add.sprite(400,600,'paddle');
    ball = this.physics.add.sprite(400,565,'ball');

    redBricks = this.physics.add.group({
        key: 'brick1',
        repeat: 9,
        setXY: {
            x: 80,
            y: 140,
            stepX: 70
        }
    });
    greenBricks = this.physics.add.group({
        key: 'brick2',
        repeat: 9,
        setXY: {
            x: 80,
            y: 90,
            stepX: 70
        }
    });
    blueBricks = this.physics.add.group({
        key: 'brick3',
        repeat: 9,
        setXY: {
            x: 80,
            y: 40,
            stepX: 70
        }
    });

    cursors = this.input.keyboard.createCursorKeys();
}
function update() {
    if (isGameOver(this.physics.world)) {

    } else if (isWon()) {

    } else {
        player.body.setVelocityX(0);

        if (cursors.left.isDown) {
            player.body.setVelocityX(-350);
        } else if (cursors.right.isDown) {
            player.body.setVelocityX(350);
        }
    }
}

function isGameOver(world) {
    return ball.body.y > world.bounds.height;
}
function isWon() {
    return redBricks.countActive() + greenBricks.countActive() + blueBricks.countActive() == 0;
}