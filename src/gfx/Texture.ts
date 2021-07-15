import Vector2 from "../utils/Vector2";

export default class Texture {

    private image: HTMLImageElement;
    private size: Vector2;

    constructor(image: HTMLImageElement) {
        this.image = image;
        this.size = new Vector2(this.image.width, this.image.height);
    }

    private updateImageSize(): void {
        this.image.width = this.size.getX();
        this.image.height = this.size.getY();
    }

    getImage(): HTMLImageElement {
        return this.image;
    }

    setWidth(width: number) {
        this.size.setX(width);
        this.updateImageSize();
    }

    setHeight(height: number) {
        this.size.setY(height);
        this.updateImageSize();
    }

    getWidth(): number {
        return this.size.getX();
    }

    getHeight(): number {
        return this.size.getY();
    }

}