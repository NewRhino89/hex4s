import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorldMapController } from '../phaser-files/world-map-controller.scene';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  phaserGame: Phaser.Game | undefined;

  config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'main',
    width: window.innerWidth - 25,
    height: window.innerHeight - 25,
    scene: [WorldMapController],
    backgroundColor: '#fff9e6'
  };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
    this.phaserGame.scene.start('WorldMapController', { someData: '...arbitrary data' });
  }
}
