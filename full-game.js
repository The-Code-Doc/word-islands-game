window.onload = function () {
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
    this.load.audio('bgMusic', 'bg-music.mp3');
    this.load.audio('click', 'click.wav');
    this.load.audio('correct', 'correct.wav');
    this.load.audio('wrong', 'wrong.wav');
  

  function create() {
    const musicVol = parseFloat(localStorage.getItem("musicVolume") || "0.5");
    const sfxVol = parseFloat(localStorage.getItem("sfxVolume") || "0.7");

    const bgMusic = this.sound.add("bgMusic", { loop: true, volume: musicVol });
    bgMusic.play();

    this.add.text(400, 60, "🌍 Word Islands", {
      fontSize: "36px",
      fill: "#003",
      fontFamily: "Quicksand"
    }).setOrigin(0.5);

    const startBtn = this.add.text(400, 200, "Start Game", {
      fontSize: "28px",
      backgroundColor: "#00c2ff",
      color: "#fff",
      padding: { x: 20, y: 10 },
      borderRadius: 10
    }).setOrigin(0.5).setInteractive();

    startBtn.on("pointerdown", () => {
      this.sound.play("click", { volume: sfxVol });
      showIslandScreen.call(this);
    });
  }

  function showIslandScreen() {
    this.add.rectangle(400, 300, 720, 480, 0xe0f7fa).setStrokeStyle(4, 0x004d40);
    this.add.text(400, 100, "Choose an Island", {
      fontSize: "32px",
      fill: "#004d40",
      fontFamily: "Quicksand"
    }).setOrigin(0.5);

    const islands = ["Earth", "Water", "Wind", "Fire", "Elemental"];
    islands.forEach((island, i) => {
      const btn = this.add.text(200 + i * 120, 250, island, {
        fontSize: "20px",
        backgroundColor: "#004d40",
        color: "#fff",
        padding: { x: 10, y: 5 }
      }).setOrigin(0.5).setInteractive();

      btn.on("pointerdown", () => {
        this.sound.play("click", { volume: 0.7 });
        this.add.text(400, 450, `You selected ${island} Island`, {
          fontSize: "18px", fill: "#333"
        }).setOrigin(0.5);
      });
    });
  }
};
