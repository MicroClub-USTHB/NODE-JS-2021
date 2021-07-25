var colors = [
    [100, 25, 49],
    [80, 150, 20],
    [220, 180, 12],
];

// 2 - create a function that takes an object to be unpacked into red ,
//green and blue variables and return a color of  9/10 shade
function ShadeColor({ r, g, b }) {
    return {
        r: Math.floor((r * 9) / 10),
        g: Math.floor((g * 9) / 10),
        b: Math.floor((b * 9) / 10),
    }; // object color ;
}
for (const color of colors) {
    const [r, g, b] = color;
    const colorRgb = { r, g, b };
    console.log(colorRgb, ShadeColor(colorRgb));
}
