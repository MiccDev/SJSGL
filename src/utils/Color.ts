class ColorUtils {

    static toRgb(r: number, g: number, b: number): string {
        return `rbg(${r}, ${g}, ${b})`;
    }

    static rgbToHex(r: number, g: number, b: number): string {
        function compToHex(c: number) {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        return `#${compToHex(r)}${compToHex(g)}${compToHex(b)}`;
    }

    static hexToRgb(hex: string) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : "rgb(255, 255, 255);";
    }

}

enum Color {
    BLACK = "#000000",
    SILVER = "#C0C0C0",
    GRAY = "#808080",
    WHITE = "#FFFFFF",
    MAROON = "#800000",
    RED = "#FF0000",
    PURPLE = "#800080",
    FUCHSIA = "#FF00FF",
    GREEN = "#00800",
    LIME = "#00FF00",
    OLIVE = "#808000",
    YELLOW = "#FFFF00",
    NAVY = "#000080",
    BLUE = "#0000FF",
    TEAL = "#008080",
    AQUA = "#00FFFF",
    NONE = ""
}

export {
    Color,
    ColorUtils
};