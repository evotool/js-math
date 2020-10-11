# @evojs/math

Math extension for nodejs

![@evojs/math npm version](https://img.shields.io/npm/v/@evojs/math.svg) ![supported node version for @evojs/math](https://img.shields.io/node/v/@evojs/math.svg) ![total npm downloads for @evojs/math](https://img.shields.io/npm/dt/@evojs/math.svg) ![monthly npm downloads for @evojs/math](https://img.shields.io/npm/dm/@evojs/math.svg) ![npm licence for @evojs/math](https://img.shields.io/npm/l/@evojs/math.svg)

## Usage example

```typescript
import '@evojs/math';

// Math.floor

console.log(Math.floor(Math.E)); // 2.718281828459045 -> 2
console.log(Math.floor(Math.E, 2)); // 2.718281828459045 -> 2.71

// Math.round

console.log(Math.round(Math.PI)); // 3.141592653589793 -> 4
console.log(Math.round(Math.PI, 2)); // 3.141592653589793 -> 3.14

// Math.ceil

console.log(Math.ceil(1.00001, 2)); // 1.00001 -> 1.01
console.log(Math.ceil(1.00001)); // 1.00001 -> 2

// Math.degrees

console.log(Math.degrees(Math.PI)); // 3.141592653589793 -> ~180

// Math.radians

console.log(Math.radians(180)); // 180 -> ~3.141592653589793

// Math.random

console.log(Math.random()); // random real [0, 1)
console.log(Math.random(100)); // random integers [0, 100)
console.log(Math.random(10, 100)); // random integers [10, 100)

// Math.sphereAngle

const locationA = { latitude: 0, longitude: 90 };
const locationB = { latitude: 90, longitude: 0 };

console.log(Math.sphereAngle(locationA, locationB)); // 90 degrees

// Math.sphereDistance

const EARTH_RADIUS = 6371; // km

const locationA = { latitude: 55.797416, longitude: 49.111374 };
const locationB = { latitude: 55.795997, longitude: 49.127173 };

console.log(Math.sphereDistance(EARTH_RADIUS, locationA, locationB)); // ~1km

```

## License

Licensed under MIT license
