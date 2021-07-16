import Component from './Component';
import Vector2 from '../../utils/Vector2';

export default class Transform extends Component {
	constructor(public position: Vector2, public rotation: number) {
		super('Transform');
	}
}
