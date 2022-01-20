
const math_random = Math.random.bind(Math);
const math_round = Math.round.bind(Math);
const math_ceil = Math.ceil.bind(Math);
const math_floor = Math.floor.bind(Math);
const math_cos = Math.cos.bind(Math);
const math_acos = Math.acos.bind(Math);
const math_sin = Math.sin.bind(Math);
const math_abs = Math.abs.bind(Math);
const math_log = Math.log.bind(Math) as (x: number) => number;
const $180pi = 180 / Math.PI;
const $pi180 = Math.PI / 180;

function random(): number;
function random(max: number): number;
function random(min: number, max: number): number;
function random(min?: number, max?: number): number {
  if (min !== void 0) {
    if (max === void 0) {
      max = math_floor(min);
      min = 0;
    } else {
      max = math_floor(max);
      min = math_ceil(min);
    }

    return math_floor((math_random() * (max - min)) + min);
  }

  return math_random();
}

function round(x: number, digits: number = 0): number {
  if (digits > 0) {
    digits = 10 ** math_round(digits);

    return math_round(x * digits) / digits;
  }

  return math_round(x);
}

function ceil(x: number, digits: number = 0): number {
  if (digits > 0) {
    digits = 10 ** math_round(digits);

    return math_ceil(x * digits) / digits;
  }

  return math_ceil(x);
}

function floor(x: number, digits: number = 0): number {
  if (digits > 0) {
    digits = 10 ** math_round(digits);

    return math_floor(x * digits) / digits;
  }

  return math_floor(x);
}

function sum(...xyz: number[]): number {
  let sum = 0;

  for (const v of xyz) {
    sum += v;
  }

  return sum;
}

function mul(...xyz: number[]): number {
  let mul = 1;

  for (const v of xyz) {
    mul *= v;
  }

  return mul;
}

function ln(x: number): number {
  return math_log(x) / math_log(Math.E);
}

function log(x: number): number;
function log(x: number, y: number): number;
function log(x: number, y?: number): number {
  return y === void 0 ? math_log(x) : math_log(y) / math_log(x);
}

function deg(radians: number): number {
  return radians * $180pi;
}

function rad(degrees: number): number {
  return degrees * $pi180;
}

/**
 * Sphere angle
 */
function spha(locationA: Location, locationB: Location): number {
  const rLatA = rad(locationA.latitude);
  const rLatB = rad(locationB.latitude);
  const rLonD = rad(math_abs(locationA.longitude - locationB.longitude));
  const sin12 = math_sin(rLatA) * math_sin(rLatB);
  const cos12 = math_cos(rLatA) * math_cos(rLatB);
  const cosLamda = math_cos(rLonD);

  return deg(math_acos(sin12 + (cos12 * cosLamda)))!;
}

/**
 * Sphere distance
 */
function sphd(radius: number, locationA: Location, locationB: Location): number {
  return $pi180 * radius * spha(locationA, locationB);
}

export {
  random,
  round,
  ceil,
  floor,
  sum,
  mul,
  ln,
  log,
  deg,
  rad,
  spha,
  sphd,
};

interface Location {
  latitude: number;
  longitude: number;
}

/*
fn: {
	value<V extends { [name: string]: number }>(formula: string): (values: V) => number {
		return new Function('return 0;') as (values: V) => number;
	},
	enumerable: false,
	writable: false,
},

fn<V extends { [name: string]: number }>(formula: string): (values: V) => number;
 */
