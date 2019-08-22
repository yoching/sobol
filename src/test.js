import { SobolSequenceGenerator } from "./sobol";

test("sobol", () => {
	var sobol = new SobolSequenceGenerator(2);
	sobol.nextVector(); //skip first

	var nbIn = 0;
	var nbTot = 0;
	for (var i = 0; i < 10000; i++) {
		var x = sobol.nextVector();
		if (x[0] * x[0] + x[1] * x[1] < 1) nbIn++;
		nbTot++;
	}
	expect((4 * nbIn) / nbTot).toBe(3.142);
});
