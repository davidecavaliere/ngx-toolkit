export function caseInsensitiveIncludes(value: string | string[], searchString: string): boolean {
  const search = String(searchString ?? '').toLowerCase();
  if (Array.isArray(value)) {
    return value
      .filter(item => typeof item === 'string')
      .map(item => item.toLowerCase())
      .includes(search);
  }
  return String(value ?? '').toLowerCase().includes(search);
}

export function parseDate(date?: string): Date | undefined {
  if (date !== null && date !== undefined && typeof date === 'string') {
    const timezoneOffset = date.endsWith('+00:00') ? '' : '+00:00';
    return new Date(date + timezoneOffset);
  }

  return date;
}

<<<<<<< HEAD
export function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as any);
=======
export function isObject(value: any): boolean {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function omit(obj: object, keys: string[]) {
  if (!isObject(obj)) {
    throw new Error('Input must be an object');
  }

  const newObject: any = {};
  Object.entries(obj).filter(([ k ]) => !keys.includes(k)).forEach(([ key, value ]) => {
    newObject[key] = value;
  });
  return newObject;
}

export function pick(obj: object, keys: string[]) {
  if (!isObject(obj)) {
    throw new Error('Input must be an object');
  }

  const newObject: any = {};
  Object.entries(obj).filter(([ k ]) => keys.includes(k)).forEach(([ key, value ]) => {
    newObject[key] = value;
  });
  return newObject;
>>>>>>> 38eebec (feat(core): add pick, omit, isObject utilities)
}

export function stringify(d: unknown, pretty: boolean = false): string {
  if (d === undefined || d === null) {
    return '';
  }

  if (typeof d === 'string') {
    return d;
  }

  let v = '';

  try {
    if (pretty) {
      v = JSON.stringify(d, null, 2);
    } else {
      v = JSON.stringify(d);
    }
  } catch (e) {
    console.warn(e);
  }

  return v;
}

export function beginningOfDay(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0));
}

export function endOfDay(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 23, 59, 59, 999));
}

export function toTimezoneAwareISOString(date: Date): string {
  return date.toISOString().replace('Z', getTimezoneOffsetSuffix());
}

function getTimezoneOffsetSuffix(): string {
  const timezoneOffset = new Date().getTimezoneOffset();
  const prefix = timezoneOffset < 0 ? '+' : '-';
  const offsetHours = Math.floor(timezoneOffset / 60).toString().padStart(2, '0');
  const offsetMinutes = Math.abs(Math.floor(timezoneOffset % 60)).toString().padStart(2, '0');

  return `${prefix}${offsetHours}:${offsetMinutes}`;
}

