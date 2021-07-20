import {
	Game
} from '..';
import LineRenderer from '../gameobjects/components/LineRenderer';
import Texture from '../gameobjects/components/Texture';
import Transform from '../gameobjects/components/Transform';
import {
	GameObject,
	_GameObject
} from '../gameobjects/GameObject';
import Vector2 from '../utils/Vector2';

export default class Renderer {
	constructor(private context: CanvasRenderingContext2D, private game: Game) {}

	render(): void {
		this.context.save();
		var screenSize = this.game.size;
		this.context.clearRect(0, 0, screenSize.x, screenSize.y);

		this.goTreeSearch(this.game);

		this.context.restore();
	}

	private goTreeSearch(go: GameObject | _GameObject) {
		if (!go.visible) return;
		let texture = go.getComponent < Texture > ('Texture');
		let lineRenderer = go.getComponent < LineRenderer > ('LineRenderer');
		let transform = go.transform;
		let parent =
			go instanceof GameObject ?
			go.parent.transform.position :
			new Vector2(0, 0);
		if (texture) {
			this.context.translate(
				transform.position.x - (transform.scale.x / 2) - (parent.x / 2),
				transform.position.y - (transform.scale.y / 2) - (parent.y / 2)
			);
			if (transform.rotation) {
				this.context.rotate((Math.PI / 180) * transform.rotation);
			}
			this.context.drawImage(
				texture.image,
				(-transform.scale.x / 2) + parent.x / 2,
				(-transform.scale.y / 2) + parent.y / 2,
				transform.scale.x,
				transform.scale.y
			);
			this.context.translate(0, 0);
		}
		if (lineRenderer) {
			this.context.translate(
				transform.position.x - (parent.x / 2),
				transform.position.y - (parent.y / 2)
			);
			// if (lineRenderer.getRotation()) {
			// 	this.context.rotate((Math.PI / 180) * lineRenderer.getRotation());
			// }
			this.context.lineWidth = lineRenderer.getWidth() || 1;
			this.context.lineTo(transform.position.x + lineRenderer.getLength(), transform.position.y + lineRenderer.getLength());
			this.context.translate(0, 0);
		}

		go.children.forEach((node) => this.goTreeSearch(node));
	}
}