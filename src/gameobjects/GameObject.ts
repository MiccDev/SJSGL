import ImageLoader from '../gfx/ImageLoader';
import Texture from '../gfx/Texture';
import Component from './Component';

export class _GameObject {
	children: GameObject[];

	constructor() {
		this.children = [];
	}

	addChild(child: GameObject): void {
		this.children.push(child);
	}

	removeChild(id: string) {
		for (let i = 0; i < this.children.length; i++) {
			if (this.children[i].id == id) {
				this.children.splice(i, 1);
				return true;
			}
		}
		return false;
	}
}

export class GameObject extends _GameObject {
	id: string;
	parent: GameObject | _GameObject;
	components: Component[];
	constructor(parent: GameObject | _GameObject) {
		super();
		this.id = Math.random().toString(36).substr(2, 9);
		this.parent = parent;
		this.components = [];
	}
}
