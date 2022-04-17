/* Challenge #16 - In Living Colour
It's time to order the banners and flags for the festival, and you need to decide on the key colour scheme.

You want to use colour theory to make sure the colours complement one another. To do so we'll need to choose a main colour and use code to determine the best complementary colours.

Instructions
We'll complete a function festivalColours() that calculates the split complementary colours for a given colour. We'll be working with a special colour system called HSL, which stands for Hue, Saturation, and Lightness.

Here's an example of an HSL colour picker.

The function will receive an H(Hue) value, and must return an array of the values for the two split complementary colours. The smaller number should be the first element, and the larger number should be the second element.

// formula: H1 = |(H0 + 150 degrees) - 360 degrees|
// formula: H2 = |(H0 + 210 degrees) - 360 degrees|

Examples
Input:
const color1 = 100
Output:
[250, 310] */

const festivalColours = (color)=>{
  const color1 = Math.abs(color + 150);
  const color2 = Math.abs(color + 210);

  return [color1 , color2];

};
const color = 100;
console.log(festivalColours(color));