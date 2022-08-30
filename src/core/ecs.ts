export class Entity {

    static CURRENT_ID: number = 0;

    constructor(name: string) {
        this._id = Entity.CURRENT_ID;
        this._name = name;
        Entity.CURRENT_ID++;
    }

    public addComponent<C extends Component>(component: C) {
        this._components[component.name] = component;
    }

    public getComponent<C extends Component>(component: C) {
        if (!this._components[component.name]) {
            throw new Error(`Entity ${this.id} '${this.name} does not have component: ${component.constructor.name}`);
        }
        return this._components[component.name];
    }

    public get id() { return this._id; }

    public get name() { return this._name; }
    public set name(value: string) { this._name = value; }

    private _id: number;
    private _name: string;
    private _components: {[key: string]: Component} = {};
}

export class Component {
    static CURRENT_ID: number;

    constructor() {
        console.log(this.name);
        console.log(this.parentName);
    }

    public get name() {
        return this.constructor.name;
    }

    public get parentName() {
        return Object.getPrototypeOf(this.constructor).name;
    }

    public extends<C extends Component>(c: C) {
        return this.parentName === c.name;
    }

    public get id() { return this._id; }

    private _id: number;
}