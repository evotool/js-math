const MathRandom = Math.random;
const MathRound = Math.round;
const MathCeil = Math.ceil;
const MathFloor = Math.floor;
const $180pi = 180 / Math.PI;
const $pi180 = Math.PI / 180;

Object.defineProperties(Math, {
	random: {
		value(min?: number, max?: number): number {
			if (min !== void 0) {
				if (max === void 0) {
					max = MathFloor.call(this, min);
					min = 0;
				} else {
					max = MathFloor.call(this, max);
					min = MathCeil.call(this, min);
				}

				return MathFloor.call(this, (MathRandom.call(this) * (max - min)) + min);
			}

			return MathRandom.call(this);
		},
		enumerable: false,
		writable: false,
	},
	round: {
		value(x: number, digits: number = 0): number {
			if (digits > 0) {
				digits = 10 ** MathRound.call(this, digits);

				return MathRound.call(this, x * digits) / digits;
			}

			return MathRound.call(this, x);
		},
		enumerable: false,
		writable: false,
	},
	ceil: {
		value(x: number, digits: number = 0): number {
			if (digits > 0) {
				digits = 10 ** MathRound.call(this, digits);

				return MathCeil.call(this, x * digits) / digits;
			}

			return MathCeil.call(this, x);
		},
		enumerable: false,
		writable: false,
	},
	floor: {
		value(x: number, digits: number = 0): number {
			if (digits > 0) {
				digits = 10 ** MathRound.call(this, digits);

				return MathFloor.call(this, x * digits) / digits;
			}

			return MathFloor.call(this, x);
		},
		enumerable: false,
		writable: false,
	},
	deg: {
		value(radians: number): number {
			return radians * $180pi;
		},
		enumerable: false,
		writable: false,
	},
	rad: {
		value(degrees: number): number {
			return degrees * $pi180;
		},
		enumerable: false,
		writable: false,
	},
	spha: {
		value(locationA: Location, locationB: Location): number {
			const rLatA = this.rad(locationA.latitude);
			const rLatB = this.rad(locationB.latitude);
			const rLonD = this.rad(this.abs(locationA.longitude - locationB.longitude));
			const sin12 = this.sin(rLatA) * this.sin(rLatB);
			const cos12 = this.cos(rLatA) * this.cos(rLatB);
			const cosLamda = this.cos(rLonD);

			return this.deg(this.acos(sin12 + (cos12 * cosLamda))) as number;
		},
		enumerable: false,
		writable: false,
	},
	sphd: {
		value(radius: number, locationA: Location, locationB: Location): number {
			return $pi180 * radius * this.spha(locationA, locationB);
		},
		enumerable: false,
		writable: false,
	},
});

export {};

interface Location {
	latitude: number;
	longitude: number;
}

declare global {
	interface Math {
		random(min: number, max: number): number;
		random(max: number): number;
		random(): number;
		round(x: number, digits?: number): number;
		ceil(x: number, digits?: number): number;
		floor(x: number, digits?: number): number;
		deg(radians: number): number;
		rad(degrees: number): number;

		/**
		 * Sphere angle
		 */
		spha(locationA: Location, locationB: Location): number;

		/**
		 * Sphere distance
		 */
		sphd(radius: number, locationA: Location, locationB: Location): number;
	}
}
