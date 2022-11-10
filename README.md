# @evojs/math

Math extension for nodejs

![@evojs/math npm version](https://img.shields.io/npm/v/@evojs/math.svg) ![supported node version for @evojs/math](https://img.shields.io/node/v/@evojs/math.svg) ![total npm downloads for @evojs/math](https://img.shields.io/npm/dt/@evojs/math.svg) ![monthly npm downloads for @evojs/math](https://img.shields.io/npm/dm/@evojs/math.svg) ![npm licence for @evojs/math](https://img.shields.io/npm/l/@evojs/math.svg)

## Usage example

```typescript
import { floor, round, ceil, degrees, radias, random, spha, sphd, addp, subp } from '@evojs/math';

// floor

console.log(floor(Math.E)); // 2.718281828459045 -> 2
console.log(floor(Math.E, 2)); // 2.718281828459045 -> 2.71

// round

console.log(round(Math.PI)); // 3.141592653589793 -> 4
console.log(round(Math.PI, 2)); // 3.141592653589793 -> 3.14

// ceil

console.log(ceil(1.00001, 2)); // 1.00001 -> 1.01
console.log(ceil(1.00001)); // 1.00001 -> 2

// degrees

console.log(degrees(Math.PI)); // 3.141592653589793 -> ~180

// radians

console.log(radians(180)); // 180 -> ~3.141592653589793

// random

console.log(random()); // random real [0, 1)
console.log(random(100)); // random integers [0, 100)
console.log(random(10, 100)); // random integers [10, 100)

// sphere angle

const locationA = { latitude: 0, longitude: 90 };
const locationB = { latitude: 90, longitude: 0 };

console.log(spha(locationA, locationB)); // 90 degrees

// sphere distance

const EARTH_RADIUS = 6371; // km

const locationA = { latitude: 55.797416, longitude: 49.111374 };
const locationB = { latitude: 55.795997, longitude: 49.127173 };

console.log(sphd(EARTH_RADIUS, locationA, locationB)); // ~1km

// add percent
console.log(addp(200, 20)); // 200 -> 240

// subtract percent
console.log(subp(300, 15)); // 300 -> 255
```

## License

Licensed under MIT license
