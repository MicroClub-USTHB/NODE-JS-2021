/*
function ShadeColor({ red, green, blue }) {
  // shade color to its base by 9/10
  return {
    red: Math.floor((red * 9) / 10),
    green: Math.floor((green * 9) / 10),
    blue: Math.floor((blue * 9) / 10),
  };
}
var colors = [
  [100, 25, 49],
  [80, 150, 20],
  [220, 180, 12],
];

var shaders = colors
  .map((elm) => ({ red: elm[0], green: elm[1], blue: elm[2] }))
  .map(ShadeColor);
*/
// 1 - remap the following list of colors into a list of objects with red , green and blue propertie
var colors = [
  [100, 25, 49],
  [80, 150, 20],
  [220, 180, 12],
];
// 2 - create a function that takes an object to be unpacked into red , green and blue variables and return a color of  9/10 shade
function ShadeColor(/* unpacking */) {
  return; // object color ;
}
// 3- remap the list of colors to be shades of the previous one
// 4- chain the shading remap to 4 times

var color = [12, 98, 65];
color = { r: color[0], g: color[1], b: color[2] };
function shadeColor({ r, g, b }) {
  return {
    r: Math.floor((r * 9) / 10),
    g: Math.floor((g * 9) / 10),
    b: Math.floor((b * 9) / 10),
  };
}
console.log(shadeColor(color));
