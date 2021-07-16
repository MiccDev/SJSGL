import { Game } from "..";
import Vector2 from "../gameobjects/components/Vector2";
import { GameObject, _GameObject } from "../gameobjects/GameObject";

export default class Renderer {
	constructor(private context: CanvasRenderingContext2D, private game: Game) {}

	render(): void {
		var screenSize = this.game.size;
		this.context.clearRect(0, 0, screenSize.x, screenSize.y);

		this.treeSearch(this.game);
	}

	private treeSearch(go: GameObject|_GameObject) {
		if(!go.visible) return;
		
		var position = go.components.get("Position");
		var texture = go.components.get("Texture");
		var scale = go.components.get("Scale");

		if(go instanceof GameObject) var parentPosition = go.parent.components.get("Position");

		if(texture) {
			if(scale) this.context.drawImage(texture.image, position?.x! + parentPosition?.x!, position?.y! + parentPosition?.y!, scale?.x!, scale?.y!);
			else this.context.drawImage(texture.image, position?.x! + (parentPosition?.x! / 2), position?.y! + (parentPosition?.y! / 2));
		}

		go.children.forEach((node) => this.treeSearch(node));
	};

}
