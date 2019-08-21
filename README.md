# sobol

Sobol quasi random sample generator. Sobol sequences are an example of quasi-random low-discrepancy sequences. See [Wikipedia](https://en.wikipedia.org/wiki/Sobol_sequence).

This generator handles up to 21201 dimensions.

## Install

```bash
npm install sobol
```

## Usage

Example: Estimate π by calculation sobol vectors inside and outside the unit circle.

```js
const { SobolSequenceGenerator } = require("sobol");

var sobol = new SobolSequenceGenerator(2); // Dimension 2
sobol.nextVector(); // Skip first

var nbIn = 0;
var nbTot = 0;
for (var i = 0; i < 10000; i++) {
	var x = sobol.nextVector();
	if (x[0] * x[0] + x[1] * x[1] < 1) nbIn++;
	nbTot++;
}
console.log((4 * nbIn) / nbTot); // Should output 3.142
```
