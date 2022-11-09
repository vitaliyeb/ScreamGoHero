import {Island} from "./Island";


export class Game {
    width = window.innerWidth;
    height = window.innerHeight;
    islands: Array<Island> = [];
    ctx: CanvasRenderingContext2D;
    key: string = '';

    constructor(
        canvas: HTMLCanvasElement
    ) {
        canvas.width = this.width;
        canvas.height = this.height;

        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        this.generateIslands();
        this.animate();

        window.addEventListener('keydown', ({key}) => {
            this.key = key;
        })
    }

    generateIslands = () => {
        const firstIsland = this.islands[0];
        const lastIsland = this.islands.at(-1);
        const extremePoint = lastIsland ? lastIsland.position.x + lastIsland.width : -100;
        const lastHeight = lastIsland?.height || 200;

        if (!lastIsland || extremePoint < this.width) {
            this.islands.push(new Island(this, {
                position: {
                    x: extremePoint + Math.min(175, Math.max(175 * Math.random(), 65)),
                    y: 0
                },
                size: {
                    width: Math.random() * 500 + 125,
                    height: Math.max(
                        Math.min(
                            lastHeight + (lastHeight * (Math.random() / 4)) * (Math.random() <= 0.5 ? 1 : -1),
                            this.height * 0.55
                        ),
                        this.height / 4)
                }
            }));
            this.generateIslands();
        }

        if (firstIsland && (firstIsland.position.x + firstIsland.width < 0)) {
            this.islands.shift();
        }
    }

    animate = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)
        requestAnimationFrame(this.animate);
        const {islands} = this;
        this.generateIslands();
        islands.forEach(island => island.move());

        // islands.forEach(island => island.draw());
    }
}