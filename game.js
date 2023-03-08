window.onload = function() {
    var gameSettings = {
        playSpeed: 200,
    }
    
    var config = {
        width: 800,
        height: 600,
        backgroundColor:0x000000,
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade:{
                debug: false
            }
        }
    }

    var game = new Phaser.Game(config);
}

//======================================================= VARIABLES
var paddle1;
var paddle2;

//======================================================= FUNCTIONS
function preload() {
    game.load.image('paddle','assets/paddle.png');
}
function create() {
    paddle1 = create_paddle(0, game.world.centerY);
    paddle2 = create_paddle(game.world.width - 16, game.world.centerY);
}
function update() {
    control_paddle(paddle1, game.input.y);
}
function create_paddle(x, y) {
    var paddle = game.add.sprite(x, y, 'paddle');
    paddle.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(paddle);
    paddle.body.collideWorldBounds = true;

    return paddle;
}
function control_paddle(paddle, y) {
    paddle.y = y;

    if(paddle.y < paddle.height / 2) {
        paddle.y = paddle.height / 2;
    } else if (paddle.y > game.world.height - paddle.height / 2) {
        paddle.y = game.world.height - paddle.height / 2;
    }
}