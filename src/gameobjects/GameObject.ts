import ImageLoader from '../gfx/ImageLoader';
import Texture from './components/Texture';
import Transform from './components/Transform';
import Component from './components/Component';
import Vector2 from '../utils/Vector2';
import Layer from './components/Layer';
import Sound from './components/Sound';
import LineRenderer from './components/LineRenderer';

type ComponentTypes = 'Texture' | 'Layer' | 'Sound' | 'LineRenderer';

export abstract class _GameObject {
	children: GameObject[];
	visible: boolean;
	components: Map<ComponentTypes, Texture | Layer | Sound | LineRenderer>;
	transform: Transform;

	constructor() {
		this.children = [];
		this.visible = true;
		this.components = new Map();
		this.transform = new Transform(new Vector2(0, 0), new Vector2(0, 0), 0);
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

	addComponent(component: Texture | Layer | Sound | LineRenderer) {
		if (!this.components.has(component.name as ComponentTypes)) {
			this.components.set(component.name as ComponentTypes, component);
		}
	}

	getComponent<T extends Texture | Layer | Sound | LineRenderer>(name: ComponentTypes) {
		return this.components.get(name) as T;
	}

	abstract tick(delta: number);
}

export abstract class GameObject extends _GameObject {
	id: string;
	parent!: GameObject | _GameObject;
	constructor() {
		super();
		this.id = Math.random().toString(36).substr(2, 9);
	}

	abstract tick(delta: number);
}
