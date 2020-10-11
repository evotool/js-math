import '../src';

describe('index', () => {
	it('should run without errors', (done) => {
		for (let i = 0; i < 1000; i++) {
			const r = Math.random(100, 1000);
			expect(Number.isInteger(r)).toBe(true);
			expect(r).toBeLessThan(1000);
			expect(r).toBeGreaterThanOrEqual(100);
		}

		for (let i = 0; i < 100; i++) {
			const r = Math.random(100);
			expect(Number.isInteger(r)).toBe(true);
			expect(r).toBeLessThan(100);
			expect(r).toBeGreaterThanOrEqual(0);
		}

		for (let i = 0; i < 100; i++) {
			const r = Math.random();
			expect(r).toBeLessThan(1);
			expect(r).toBeGreaterThanOrEqual(0);
		}

		// Math.floor

		let n = Math.floor(0.44444);
		expect(n).toBe(0);

		n = Math.floor(0.44444, 2);
		expect(n).toBe(0.44);

		n = Math.floor(0.55555, 2);
		expect(n).toBe(0.55);

		n = Math.floor(0.999, 2);
		expect(n).toBe(0.99);

		// Math.round

		n = Math.round(0.44444);
		expect(n).toBe(0);

		n = Math.round(0.44444, 2);
		expect(n).toBe(0.44);

		n = Math.round(0.55555, 2);
		expect(n).toBe(0.56);

		// Math.ceil

		n = Math.ceil(0.44444);
		expect(n).toBe(1);

		n = Math.ceil(0.44444, 2);
		expect(n).toBe(0.45);

		n = Math.ceil(0.55555, 2);
		expect(n).toBe(0.56);

		n = Math.ceil(0.99000000, 2);
		expect(n).toBe(0.99);

		n = Math.ceil(0.99000001, 2);
		expect(n).toBe(1);

		n = Math.ceil(1.00000001, 2);
		expect(n).toBe(1.01);

		// Math.degrees

		n = Math.round(Math.degrees(0), 14);
		expect(n).toBe(0);

		n = Math.round(Math.degrees(Math.PI), 14);
		expect(n).toBe(180);

		n = Math.round(Math.degrees(2 * Math.PI), 14);
		expect(n).toBe(360);

		n = Math.round(Math.degrees(3 * Math.PI / 2), 14);
		expect(n).toBe(270);

		n = Math.round(Math.degrees(Math.PI / 2), 14);
		expect(n).toBe(90);

		n = Math.round(Math.degrees(Math.PI / 4), 14);
		expect(n).toBe(45);

		n = Math.round(Math.degrees(Math.PI / 6), 14);
		expect(n).toBe(30);

		n = Math.round(Math.degrees(-Math.PI / 2), 14);
		expect(n).toBe(-90);

		// Math.radians

		n = Math.radians(0);
		expect(n).toBe(0);

		n = Math.round(Math.radians(180), 14);
		expect(n).toBe(Math.round(Math.PI, 14));

		n = Math.round(Math.radians(360), 14);
		expect(n).toBe(Math.round(2 * Math.PI, 14));

		n = Math.round(Math.radians(270), 14);
		expect(n).toBe(Math.round(3 * Math.PI / 2, 14));

		n = Math.round(Math.radians(90), 14);
		expect(n).toBe(Math.round(Math.PI / 2, 14));

		n = Math.round(Math.radians(45), 14);
		expect(n).toBe(Math.round(Math.PI / 4, 14));

		n = Math.round(Math.radians(30), 14);
		expect(n).toBe(Math.round(Math.PI / 6, 14));

		n = Math.round(Math.radians(-90), 14);
		expect(n).toBe(Math.round(-Math.PI / 2, 14));

		const a = Math.sphereAngle({ latitude: 0, longitude: 90 }, { latitude: 90, longitude: 0 });
		expect(a).toBe(90);

		const d = Math.sphereDistance(6371, { latitude: 55.797416, longitude: 49.111374 }, { latitude: 55.795997, longitude: 49.127173 });
		expect(Math.floor(d, 4)).toBe(1);

		done();
	});
});
