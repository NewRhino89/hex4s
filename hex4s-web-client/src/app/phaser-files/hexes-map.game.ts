import eventsCenter from './events-center.game';
import Hexagon from './hexagon.game';

export default class HexesMap {
    game: any;
    hexesLinegraphics: any;
    polygonGraphics: any;
    hexSize!: number;
    hexagons: any[];
    poly!: Phaser.Geom.Polygon;
    
    constructor(game: any) {
        this.game = game;
        this.hexagons = [];
    }

    create(): void {
        this.hexesLinegraphics = this.game.add.graphics({ lineStyle: { width: 1, color: '#000000' } });
        this.polygonGraphics = this.game.add.graphics();
        this.hexSize = 20
        var width = Math.sqrt(3) * this.hexSize;
        var height = 2 * this.hexSize
        var verticalSpacing = height * 3 / 4;
        var x = 40;
        var y = 40;

        this.hexagons = [];

        for (let i = 0; i < 49; i++) {
            for (let j = 0; j < 50; j++) {
                this.drawHex(x, y);

                var hexagon = new Hexagon(x, y, i, j);
                this.hexagons.push(hexagon);
                x += width;
            }

            if (i % 2 == 0) {
                x = 40 - width / 2;
            } else {                
                this.drawHex(x, y);

                var hexagon = new Hexagon(x, y, i, 50);
                this.hexagons.push(hexagon);
                x = 40;
            }

            y += verticalSpacing;
        }
    }

    update(): void {
        this.polygonGraphics.clear();
        var x = this.game.input.mousePointer.x + this.game.cameras.main.scrollX;
        var y = this.game.input.mousePointer.y + this.game.cameras.main.scrollY;

        this.highlightHex(x, y);
    }

    drawHex(x: number, y: number): void {
        for (let i = 0; i < 6; i++) {
            this.drawHexLine(x, y, i);
        }
    }

    drawHexLine(centerX: number, centerY: number, i: number) {
        const point = this.getHexCorner(centerX, centerY, i);
        const point2 = this.getHexCorner(centerX, centerY, i + 1);
        var line = new Phaser.Geom.Line(point.x, point.y, point2.x, point2.y);
        this.hexesLinegraphics.strokeLineShape(line);
    }

    getHexCorner(centerX: number, centerY: number, i: number) {
        var angle_deg = (60 * i) - 30;
        var angle_rad = Math.PI / 180 * angle_deg
        return new Phaser.Geom.Point(centerX + this.hexSize * Math.cos(angle_rad),
            centerY + this.hexSize * Math.sin(angle_rad))
    }

    highlightHex(x: number, y: number) {
        for (var i = 0; i < this.hexagons.length; i++) {
            var hexagon = this.hexagons[i];

            var a = Math.pow(hexagon.x - x, 2);
            var b = Math.pow(hexagon.y - y, 2);
            let distance = Math.sqrt(a + b);

            if (distance < (15)) {
                this.drawHex(hexagon.x, hexagon.y);
                var points = [];

                for (let i = 0; i < 6; i++) {
                    points.push(this.getHexCorner(hexagon.x, hexagon.y, i));
                }

                this.poly = new Phaser.Geom.Polygon();
                this.poly.setTo(points);

                this.polygonGraphics.fillStyle(0xD3D3D3);
                this.polygonGraphics.fillPoints(this.poly.points, true);
                eventsCenter.emit('hex-hovered', hexagon)
                break;
            }
        }
    }
}