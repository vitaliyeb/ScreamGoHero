import {Game} from "./Game";
import {IPosition} from "./interface";

type Option = {
    size: { width: number; height: number; };
    position: IPosition;
}

export class Island {
    width: number;
    height: number;
    game: Game;
    position: IPosition;

    constructor(Game: Game, {position, size}: Option) {
        this.position = position;
        this.width = size.width;
        this.height = size.height;
        this.game = Game;
    }

    draw = () => {
        const {
            width,
            height,
            position: {x, y},
            game: {
                height: fh,
                ctx
            }
        } = this;
        ctx.fillStyle = '#000';
        ctx.fillRect(x, fh - height, width, height);
    };

    move = () => {
        this.position.x -= 6
    }
}