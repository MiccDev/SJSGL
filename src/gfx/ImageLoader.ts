export default class ImageLoader {

    constructor() {}

    loadImg(path: string): HTMLImageElement {
        var image = new Image();
        image.src = path;
        return image;
    }

}