import * as Phaser from "phaser";
import { WorldMapSideBarScene } from "./world-map-sidebar.scene";
import { WorldMapScene } from "./world-map.scene";

export class WorldMapController extends Phaser.Scene {
    width!: number;
    height!: number;
    constructor() {
        super({ key: 'WorldMapController' });
    }

    init(): void
    {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    create(): void {
        this.scene.add('WorldMap', WorldMapScene);
        this.scene.add('WorldMapSideBar', WorldMapSideBarScene);
        this.scene.launch('WorldMap', WorldMapScene);
        this.scene.launch('WorldMapSideBar', WorldMapSideBarScene);
    }

    update(_time: any, delta: number) {
    }
  }