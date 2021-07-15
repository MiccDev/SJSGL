import Vector2 from '../utils/Vector2';

export default class Texture {
	constructor(public readonly image: HTMLImageElement) {}
	get width(): number {
		return this.image.width;
	}

	set width(width: number) {
		this.image.width = width;
	}

	get height(): number {
		return this.image.height;
	}

	set height(height: number) {
		this.image.height = height;
	}
}
