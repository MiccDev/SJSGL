import { game } from "../..";
import Component from "./Component";

export default class Sound extends Component {
    constructor(public readonly sound: HTMLAudioElement) {
        super('Sound');
    }

    set volume(volume: number) {
        this.sound.volume = volume;
    }

    get volume(): number {
        return this.sound.volume;
    }

    set loop(loop: boolean) {
        this.sound.loop = loop;
    }

    get loop(): boolean {
        return this.sound.loop;
    }

    hasEnded(): boolean {
        return this.sound.ended;
    }

    play(): void {
        this.sound.play();
        game.emit("SOUND_PLAY", this);
    }

}