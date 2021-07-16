import { Game } from '..';
import Texture from '../gameobjects/components/Texture';
import Transform from '../gameobjects/components/Transform';
import { GameObject, _GameObject } from '../gameobjects/GameObject';
import Vector2 from '../utils/Vector2';

export default class Renderer {
	constructor(private context: CanvasRenderingContext2D, private game: Game) {}

	render(): void {
		var screenSize = this.game.size;
		this.context.clearRect(0, 0, screenSize.x, screenSize.y);

		this.treeSearch(this.game);
	}

	private treeSearch(go: GameObject | _GameObject) {
		if (!go.visible) return;
		let texture = go.getComponent<Texture>('Texture');
		let transform = go.transform;
		let parent =
			go instanceof GameObject
				? go.parent.transform.position
				: new Vector2(0, 0);
		if (texture) {
			this.context.drawImage(
				texture.image,
				transform.position.x + parent.x / 2,
				transform.position.y + parent.y / 2,
				transform.scale.x,
				transform.scale.y
			);
		}

		go.children.forEach((node) => this.treeSearch(node));
	}
}
