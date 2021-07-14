import { generateId } from "../utils/Functions";

class GameObjectFunctions {

    private children: GameObject[];
    
    constructor() {
        this.children = [];
    }

    addChild(gameObject: GameObject): void {
        this.children.push(gameObject);
    }

    addChildren(gameObjectList: GameObject[]): void {
        gameObjectList.forEach(child => {
            this.children.push(child);
        }, this);
    }

    removeChild(gameObject: GameObject): void {
        var index = this.children.indexOf(gameObject);
        this.children.splice(index, 1);
    }

    getChild(index: number): GameObject {
        return this.children[index];
    }

    getChildren(): GameObject[] {
        return this.children;
    }

}

class GameObject extends GameObjectFunctions {

    private parent: GameObject;

    public id: string;

    constructor() {
        super();
        this.id = generateId();
        this.parent = null!;
    }

    getParent(): GameObject {
        return this.parent;
    }

    setParent(parent: GameObject): void {
        this.parent = parent;
    }

}

export {
    GameObject,
    GameObjectFunctions
}