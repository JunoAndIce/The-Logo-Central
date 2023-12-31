// TODO: Add generateSVG function

function generateSVG(shape) {
  return `
  <svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

${shape.render()}

<text x="150" y="125" font-size="45" text-anchor="middle" fill="${shape.tColor}">${shape.text}</text>

</svg>
`
}

module.exports = generateSVG;