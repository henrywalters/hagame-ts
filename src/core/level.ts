import { Engine, Scene } from "babylonjs";
import { Game } from "./game";

export class Level extends Scene {

    constructor(game: Game, name: string) {
        super(game.engine);
        this.game = game;
        this.name = name;
    }

    public name: string;
    protected game: Game;

    // Run on level activation
    public onActivate() {
        console.log(`${this.name} activated`);
    }

    // Run on level deactivation
    public onDeactivate() {
        console.log(`${this.name} deactivated`);
    }

    // Run every frame
    public onUpdate(dt: number) {}
}