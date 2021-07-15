import { GameObject, _GameObject } from './gameobjects/GameObject';
import Input from './input/Input';
import KeyCode from './input/KeyCode';
import MouseCode from './input/MouseCode';
import Vector2 from './utils/Vector2';

class Game extends _GameObject {
	private canvas: HTMLCanvasElement = document.createElement('canvas');
	private context: CanvasRenderingContext2D;
	private size: Vector2;
	private projectTitle: string;

	public input: Input;

	constructor(projectTitle: string, size: Vector2) {
		super();
		this.projectTitle = projectTitle;
		this.size = size;
		this.context = this.canvas.getContext('2d')!;
		this.input = new Input(this.canvas);

		this.init();
	}

	private init(): void {
		document.title = this.projectTitle;
		this.canvas.width = this.size.x;
		this.canvas.height = this.size.y;
		this.canvas.style.border = '1px solid #d3d3d3';
		this.canvas.style.background = '#f1f1f1';

		document.body.append(this.canvas);
	}
}

export {
	Game,
	GameObject,
	Vector2,
	KeyCode,
	MouseCode
}
