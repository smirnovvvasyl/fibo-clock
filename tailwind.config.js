/** @type {import('tailwindcss').Config} */

function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 80;

const minSpacingPixel = 0;
const maxSpacingPixel = 800;
const spacingPixelIncrement = 5;

const vhs = ['10vh', '20vh', '30vh', '40vh', '50vh', '60vh', '70vh', '80vh', '90vh', '100vh'];
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    colors: {
      borderColor: '#504c4c',
      greenColor: 'green',
      blueColor: 'blue',
      redColor: 'red',

      whitecolor: 'white',
      blackColor: 'black',
    },

    extend: {},

    fontSize: {
      ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    spacing: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    maxWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    minWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    maxHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
    },

    minHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
    },
  },

  plugins: [],
};
