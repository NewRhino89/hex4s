import * as Phaser from "phaser";
import eventsCenter from "./events-center.game";
import Hexagon from "./hexagon.game";

export class WorldMapSideBarScene extends Phaser.Scene {
    width!: number;
    height!: number;
    graphics!: Phaser.GameObjects.Graphics;
    text!: Phaser.GameObjects.Text;
    text2!: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'WorldMapSideBar' });
    }

    init(): void
    {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    create(): void {
        this.cameras.main.setViewport(this.width * 0.75, 0, this.width, this.height);

        this.graphics = this.add.graphics();
        this.text = this.add.text(0, 5, '0 0', { color: '#000000' }).setScrollFactor(0);

        eventsCenter.on('hex-hovered', this.hexHovered, this); 
    }

    hexHovered(hexagon: Hexagon) {
        this.text.text = hexagon.row + ' ' + hexagon.col;
    }

    update(_time: any, delta: number) {
    }
  }