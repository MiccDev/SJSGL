import ImageLoader from '../gfx/ImageLoader';
import Texture from './components/Texture';
import Vector2 from './components/Vector2';
import Component from './components/Component';

type ComponentTypes = "Rotation" | "Position" | "Texture" | "Scale";

export class _GameObject {
	children: GameObject[];
	visible: boolean;
	components: Map < ComponentTypes,
	Component > ;

	constructor() {
		this.children = [];
		this.visible = true;
		this.components = new Map();

		this.components.set("Position", new Vector2(0, 0)!);
		this.components.set("Rotation", new Vector2(0, 0)!);
		this.components.set("Scale", new Vector2(0, 0));
		this.components.set("Texture", null!);
	}

	addChild(child: GameObject): void {
		child.parent = this;
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
	constructor() {
		super();
		this.id = Math.random().toString(36).substr(2, 9);
		this.parent = null!;
	}
}