import * as Phaser from "phaser";
import eventsCenter from "./events-center.game";
import Hexagon from "./hexagon.game";

export class WorldMapSideBarScene extends Phaser.Scene {
    width!: number;
    height!: number;
    graphics!: Phaser.GameObjects.Graphics;
    text!: Phaser.GameObjects.Text;
    text2!: Phaser.GameObjects.Text;
    currentHexagon: Hexagon | undefined;

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
        let goToPageText: Phaser.GameObjects.Text = this.add.text(0, 50, 'go to page', { color: '#000000' });
        goToPageText.setScrollFactor(0);
        goToPageText.setInteractive();
        this.input.on('gameobjectdown', () => this.navigateToKingdom());

        eventsCenter.on('hex-hovered', this.hexHovered, this); 
    }

    navigateToKingdom() {
        if(this.currentHexagon){
            debugger;
            const parsedUrl = new URL(window.location.href);
            const baseUrl = parsedUrl.origin;
            var completeUrl = baseUrl + '/kingdom/' + Math.round(this.currentHexagon.x); 
            window.location.href = completeUrl;
        }
    }

    hexHovered(hexagon: Hexagon) {
        this.currentHexagon = hexagon;
        this.text.text = hexagon.row + ' ' + hexagon.col;
    }

    update(_time: any, delta: number) {
    }
  }