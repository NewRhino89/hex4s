import * as Phaser from "phaser";
import HexesMap from "./hexes-map.game";

export class WorldMapScene extends Phaser.Scene {
    width!: number;
    height!: number;
    hexesMap: HexesMap | undefined;
    cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    controls!: Phaser.Cameras.Controls.FixedKeyControl;
    graphics!: Phaser.GameObjects.Graphics;
    text!: Phaser.GameObjects.Text;
    text2!: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'WorldMap' });
    }

    init(): void
    {
        this.width = window.innerWidth * 0.75;
        this.height = window.innerHeight;
    }

    create(): void {
        this.hexesMap = new HexesMap(this);
        this.hexesMap.create();

        this.cameras.main.setViewport(0, 0, this.width, this.height);

        this.cursors = this.input.keyboard.createCursorKeys();

        const controlConfig: Phaser.Types.Cameras.Controls.FixedKeyControlConfig = {
            camera: this.cameras.main,
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            speed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
    }

    update(_time: any, delta: number) {
        if(this.hexesMap){
            this.hexesMap.update();
        }

        this.controls.update(delta);

        if(this.cameras.main.scrollX < 0){
            this.cameras.main.scrollX = 0;
        }

        if(this.cameras.main.scrollX > (this.width * 0.27)){
            this.cameras.main.scrollX = (this.width * 0.27);
        }

        if(this.cameras.main.scrollY < 0){
            this.cameras.main.scrollY = 0;
        }

        if(this.cameras.main.scrollY > (this.height * 0.65)){
            this.cameras.main.scrollY = (this.height * 0.65);
        }
    }
  }