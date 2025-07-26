// Placeholder game.js with audio support
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#a2d5f2',
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.audio('bgMusic', 'assets/audio/bg-music.mp3');
  this.load.audio('click', 'assets/audio/click.wav');
  this.load.audio('correct', 'assets/audio/correct.wav');
  this.load.audio('wrong', 'assets/audio/wrong.wav');
}

function create() {
  const musicVol = parseFloat(localStorage.getItem("musicVolume") || "0.5");
  const sfxVol = parseFloat(localStorage.getItem("sfxVolume") || "0.7");

  const bgMusic = this.sound.add("bgMusic", { loop: true, volume: musicVol });
  bgMusic.play();

  const clickBtn = this.add.text(300, 250, "Click Me", { fontSize: "32px", fill: "#000" }).setInteractive();
  clickBtn.on("pointerdown", () => {
    this.sound.play("click", { volume: sfxVol });
    this.sound.play("correct", { volume: sfxVol });
    this.sound.play("wrong", { volume: sfxVol });
  });
}
