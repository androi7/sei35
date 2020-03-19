const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

// declare some variables
let platforms;
let dude;
let cursors;

function preload() {
  // load in our assets
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32, frameHeight: 48
  });

}

function create() {
  this.add.image(400,300, 'sky'); //.setOrigin(0,0);
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50,250, 'ground');
  platforms.create(750, 220, 'ground');

  dude = this.physics.add.sprite(100,450, 'dude');
  dude.setBounce(0.2);
  dude.setCollideWorldBounds(true);
  dude.body.setGravityY(300);
  this.physics.add.collider(dude, platforms);  // stops dude from passing through platforms

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [{
      key: 'dude', frame: 4
    }],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
    frameRate: 10,
    repeat: -1
  });

  stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, setpX: 70 }
  });

  stars.children.iterate(child => {
    child.setBounceY(Phaser.Math.FloatBetween(0, 0.8));
  });

  this.physics.add.collider(platforms, stars);
  this.physics.add.overlap(dude, stars, collectStar, null, this);

  function collectStar(dude, star) {
    star.disableBody(true, true);
  }

}

function update() {
  cursors = this.input.keyboard.createCursorKeys();

  if (cursors.left.isDown) {
    dude.setVelocityX(-160);
    dude.anims.play('left', true);
  } else if (cursors.right.isDown) {
    dude.setVelocityX(160);
    dude.anims.play('right', true);
  } else {
    dude.setVelocityX(0);
    dude.anims.play('turn');
  }

  if (cursors.up.isDown && dude.body.touching.down) {
    dude.setVelocityY(-530);
  }
}
