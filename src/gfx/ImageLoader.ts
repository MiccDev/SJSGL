export default class ImageLoader {
	static loadImg(path: string): HTMLImageElement {
		let image = new Image();
		image.src = path;
		return image;
	}
}
