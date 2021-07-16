import { GameObject, _GameObject } from './gameobjects/GameObject';
import Input from './input/Input';
import KeyCode from './input/KeyCode';
import MouseCode from './input/MouseCode';
import Vector2 from './utils/Vector2';
import Texture from './gameobjects/components/Texture';
import ImageLoader from './gfx/ImageLoader';
import Renderer from './render/Renderer';

class Game extends _GameObject {
	private canvas: HTMLCanvasElement = document.createElement('canvas');
	private context: CanvasRenderingContext2D;
	private renderer: Renderer;

	private lastTime: number = performance.now() / 2;
	private fps: number = 60;

	input: Input;
	delta: number = 0;

	size: Vector2;
	projectTitle: string;

	constructor(projectTitle: string, size: Vector2) {
		super();
		this.projectTitle = projectTitle;
		this.size = size;
		this.context = this.canvas.getContext('2d')!;
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

	private update(): void {
		var time = performance.now() / 2;
		var deltaTime = time - this.lastTime;
		this.lastTime = time;
		this.delta = deltaTime;

		this.renderer.render();
	}
}

export { Game, GameObject, Vector2, KeyCode, MouseCode, Texture, ImageLoader };
