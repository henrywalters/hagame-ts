import {Game} from "hagame-ts";
import { Level } from "../../dist/core/level";

const main = () => {
    const game = new Game(document.getElementById('game') as HTMLCanvasElement);

    const levels: Level[] = [
        game.addLevel("1"),
    ];

    game.levels.activate("1");

    game.run();
}

main();