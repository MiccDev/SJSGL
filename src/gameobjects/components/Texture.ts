import Component from './Component';
import Vector2 from './Vector2';

export default class Texture extends Component {
	constructor(public image: HTMLImageElement) {
		super();
	}
	
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
