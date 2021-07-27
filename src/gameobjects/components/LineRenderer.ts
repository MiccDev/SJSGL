import Component from "./Component";

export default class LineRenderer extends Component {

    constructor(public length: number, public width: number, public rotation: number) {
        super('LineRenderer');
    }

}