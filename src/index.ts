import {
	GameObject,
	_GameObject
} from './gameobjects/GameObject';
import Input from './input/Input';
import KeyCode from './input/KeyCode';
import MouseCode from './input/MouseCode';
import Vector2 from './utils/Vector2';
import Texture from './gameobjects/components/Texture';
import ImageLoader from './gfx/ImageLoader';
import Renderer from './render/Renderer';
import Transform from './gameobjects/components/Transform';
import Layer from './gameobjects/components/Layer';
import AudioLoader from './audio/AudioLoader';
import Sound from './gameobjects/components/Sound';
import LineTypes from './utils/LineTypes';
import LineRenderer from './gameobjects/components/LineRenderer';

type _Game = {
	title: string,
	size: Vector2,
	update: Function,
	fps: number
}

class Game extends _GameObject {
	private canvas: HTMLCanvasElement = document.createElement('canvas');
	private context: CanvasRenderingContext2D;
	private renderer: Renderer;

	private lastTime: number = new Date().getTime() / 100;
	private fps: number;

	private opts: _Game;
	private updateMethod: Function;

	input: Input;
	delta: number = 0;

	size: Vector2;
	projectTitle: string;

	constructor(opts: _Game) {
		super();

		this.opts = opts;
		this.projectTitle = opts.title;
		this.size = opts.size || new Vector2(500, 500);
		this.transform.scale = this.size;
		this.updateMethod = opts.update || null;
		this.fps = opts.fps || 60;

		this.context = this.canvas.getContext('2d') !;
		this.input = new Input(this.canvas);
		this.renderer = new Renderer(this.context, this);

		this.init();
	}

	private init(): void {
		document.title = this.projectTitle;
		this.canvas.width = this.size.x;
		this.canvas.height = this.size.y;
		this.canvas.style.border = '1px solid #d3d3d3';
		this.canvas.style.background = '#f1f1f1';

		document.body.append(this.canvas);
		setInterval(this.update.bind(this), 1000 / this.fps);
	}

	override tick(): void {}

	private update(): void {
		let time = new Date().getTime() / 100;
		this.delta = time - this.lastTime;

		this.transform.scale = this.size;

		this.renderer.render();
		this.treeSearch(this);

		if (this.updateMethod) this.updateMethod(this.delta);

		this.lastTime = time;
	}

	private treeSearch(go: GameObject | _GameObject) {
		if(!go.tick) return;
		go.tick(this.delta);

		go.children.forEach((node) => this.treeSearch(node));
	}

}

export {
	Game,
	GameObject,
	Vector2,
	KeyCode,
	MouseCode,
	Texture,
	ImageLoader,
	Transform,
	Layer,
	Sound,
	AudioLoader,
	LineRenderer,
	LineTypes
};