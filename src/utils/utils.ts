export function omit<T, K extends keyof T>(obj: T, keys: K[]): Partial<T> {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
  }