import { ArcRotateCamera, Camera, Engine, HemisphericLight, MeshBuilder, Vector3 } from "babylonjs";
import { StateMachine } from "hcore/dist/stateMachine";
import { Level } from "./level";

export class Game {

    public running: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this._engine = new Engine(canvas, true);
        this._levels = new StateMachine<Level>();
        this._canvas = canvas;
        console.log(new Date());
    }

    public run() {
        this.engine.runRenderLoop(() => {
            this._levels.active.onUpdate(this._levels.active.deltaTime);
            this._levels.active.render();
        })
    }

    public addLevel(name: string): Level {
        const level = this._levels.add(name, new Level(this, name));
        this.addLevelHooks(name);
        return level;
    }

    public addLevelHooks(name: string) {
        this._levels.onActivate(name, (l) => {
            l.onActivate();
        });
        this._levels.onDeactivate(name, (l) => {
            l.onDeactivate();
        });
    }

    public get fps() {
        return this._fps;
    }

    public get engine() {
        return this._engine;
    }

    public get levels() {
        return this._levels;
    }

    public get canvas() {
        return this._canvas;
    }

    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _fps: number;
    private _levels: StateMachine<Level>;
}