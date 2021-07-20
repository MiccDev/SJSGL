import LineTypes from "../../utils/LineTypes";
import Vector2 from "../../utils/Vector2";
import Component from "./Component";
import Transform from "./Transform";

export default class LineRenderer extends Component {

    constructor(private options: LineTypes) {
        super('LineRenderer');
    }

    getRotation(): number {
        return this.options.rotation;
    }

    getLength(): number {
        return this.options.length;
    }

    getWidth(): number {
        return this.options.width;
    }

    setOptions(options: LineTypes): void {
        this.options = options;
    }

}