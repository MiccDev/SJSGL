import { GameObject, GameObjectFunctions } from "./gameobjects/GameObject";
import Vector2 from "./utils/Vector2";

class Game extends GameObjectFunctions {

	private canvas: HTMLCanvasElement = document.createElement("canvas");
	private context: CanvasRenderingContext2D;
	private size: Vector2;

	constructor(size: Vector2) {
		super();
		this.size = size;
		this.context = this.canvas.getContext("2d")!;

		this.init();
	}
	
	private init(): void {
		this.canvas.width = this.size.getX();
		this.canvas.height = this.size.getY();
	}

}

export {
	Game,
	GameObject,
	Vector2
}