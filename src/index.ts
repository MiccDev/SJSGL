import { GameObject, GameObjectFunctions } from "./gameobjects/GameObject";
import Vector2 from "./utils/Vector2";

class Game extends GameObjectFunctions {

	private canvas: HTMLCanvasElement = document.createElement("canvas");
	private context: CanvasRenderingContext2D;
	private size: Vector2;
	private projectTitle: string;

	constructor(projectTitle: string, size: Vector2) {
		super();
		this.projectTitle = projectTitle;
		this.size = size;
		this.context = this.canvas.getContext("2d")!;

		this.init();
	}
	
	private init(): void {
		document.title = this.projectTitle;
		this.canvas.width = this.size.getX();
		this.canvas.height = this.size.getY();
		this.canvas.style.border = '1px solid #d3d3d3';
		this.canvas.style.background = '#f1f1f1';

		document.body.append(this.canvas);
	}

}

export {
	Game,
	GameObject,
	Vector2
}