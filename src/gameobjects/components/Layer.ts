import Component from "./Component";

export default class Layer extends Component {
    constructor(public layerName: string) {
        super('Layer');
    }
}