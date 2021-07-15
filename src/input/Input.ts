import Vector2 from '../utils/Vector2';
import KeyCode from './KeyCode';
import MouseCode from './MouseCode';

export default class Input {
	private mouseClick: boolean[];
	private mousePos: Vector2;

	private keys: boolean[];

	private canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.keys = [];
		this.mouseClick = [];
		this.mousePos = new Vector2(0, 0);

		for (var i = 0; i < 222; i++) {
			this.keys.push(false);
		}

		for (var i = 0; i < 3; i++) {
			this.mouseClick.push(false);
		}

		this.init();
	}

	private init(): void {
		var _this = this;

		window.addEventListener(
			'keydown',
			(event) => {
				_this.keys[event.keyCode] = true;
			},
			false
		);

		window.addEventListener(
			'keyup',
			(event) => {
				_this.keys[event.keyCode] = false;
			},
			false
		);

		window.addEventListener(
			'mousedown',
			(event) => {
				_this.mouseClick[event.button] = true;
			},
			false
		);

		window.addEventListener(
			'mouseup',
			(event) => {
				_this.mouseClick[event.button] = false;
			},
			false
		);

		window.addEventListener(
			'mousemove',
			(event) => {
				var rect = _this.canvas.getBoundingClientRect();
				_this.mousePos.x = event.clientX - rect.left;
				_this.mousePos.x = event.clientY - rect.top;
			},
			false
		);
	}

	getKeyDown(key: KeyCode | number): boolean {
		return this.keys[key];
	}

	getMouseDown(button: MouseCode | number): boolean {
		return this.mouseClick[button];
	}

	getKeyUp(key: KeyCode | number): boolean {
		return !this.keys[key];
	}

	getMouseUp(key: MouseCode | number): boolean {
		return !this.keys[key];
	}

	getMousePosition(): Vector2 {
		return this.mousePos;
	}
}