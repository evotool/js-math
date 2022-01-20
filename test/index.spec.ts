import { ceil, deg, floor, rad, random, round, spha, sphd } from '../src';

describe('index', () => {
  it('should run without errors', (done) => {
    // random
    for (let i = 0; i < 1000; i++) {
      const r = random(100, 1000);
      expect(Number.isInteger(r)).toBe(true);
      expect(r).toBeLessThan(1000);
      expect(r).toBeGreaterThanOrEqual(100);
    }

    for (let i = 0; i < 100; i++) {
      const r = random(100);
      expect(Number.isInteger(r)).toBe(true);
      expect(r).toBeLessThan(100);
      expect(r).toBeGreaterThanOrEqual(0);
    }

    for (let i = 0; i < 100; i++) {
      const r = random();
      expect(r).toBeLessThan(1);
      expect(r).toBeGreaterThanOrEqual(0);
    }

    // floor

    let n = floor(0.44444);
    expect(n).toBe(0);

    n = floor(0.44444, 2);
    expect(n).toBe(0.44);

    n = floor(0.55555, 2);
    expect(n).toBe(0.55);

    n = floor(0.999, 2);
    expect(n).toBe(0.99);

    // round

    n = round(0.44444);
    expect(n).toBe(0);

    n = round(0.44444, 2);
    expect(n).toBe(0.44);

    n = round(0.55555, 2);
    expect(n).toBe(0.56);

    // ceil

    n = ceil(0.44444);
    expect(n).toBe(1);

    n = ceil(0.44444, 2);
    expect(n).toBe(0.45);

    n = ceil(0.55555, 2);
    expect(n).toBe(0.56);

    n = ceil(0.99000000, 2);
    expect(n).toBe(0.99);

    n = ceil(0.99000001, 2);
    expect(n).toBe(1);

    n = ceil(1.00000001, 2);
    expect(n).toBe(1.01);

    // deg

    n = round(deg(0), 14);
    expect(n).toBe(0);

    n = round(deg(Math.PI), 14);
    expect(n).toBe(180);

    n = round(deg(2 * Math.PI), 14);
    expect(n).toBe(360);

    n = round(deg(3 * Math.PI / 2), 14);
    expect(n).toBe(270);

    n = round(deg(Math.PI / 2), 14);
    expect(n).toBe(90);

    n = round(deg(Math.PI / 4), 14);
    expect(n).toBe(45);

    n = round(deg(Math.PI / 6), 14);
    expect(n).toBe(30);

    n = round(deg(-Math.PI / 2), 14);
    expect(n).toBe(-90);

    // rad

    n = rad(0);
    expect(n).toBe(0);

    n = round(rad(180), 14);
    expect(n).toBe(round(Math.PI, 14));

    n = round(rad(360), 14);
    expect(n).toBe(round(2 * Math.PI, 14));

    n = round(rad(270), 14);
    expect(n).toBe(round(3 * Math.PI / 2, 14));

    n = round(rad(90), 14);
    expect(n).toBe(round(Math.PI / 2, 14));

    n = round(rad(45), 14);
    expect(n).toBe(round(Math.PI / 4, 14));

    n = round(rad(30), 14);
    expect(n).toBe(round(Math.PI / 6, 14));

    n = round(rad(-90), 14);
    expect(n).toBe(round(-Math.PI / 2, 14));

    const a = spha({ latitude: 0, longitude: 90 }, { latitude: 90, longitude: 0 });
    expect(a).toBe(90);

    const d = sphd(6371, { latitude: 55.797416, longitude: 49.111374 }, { latitude: 55.795997, longitude: 49.127173 });
    expect(floor(d, 4)).toBe(1);

    done();
  });
});
