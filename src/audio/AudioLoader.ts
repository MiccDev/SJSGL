export default class AudioLoader {

    static load(path: string): HTMLAudioElement {
        return new Audio(path);
    }

}