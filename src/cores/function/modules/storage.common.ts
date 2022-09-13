import { Base64 } from 'js-base64';
import { getEnvEncodeStatus } from '@/cores/function/modules/utils.common';

export class CoresWebStorage {
  public encodeKey(key: string): string {
    getEnvEncodeStatus() && (key = Base64.encode(key));
    return key;
  }

  public getValue(key: string) {
    const data = localStorage.getItem(this.encodeKey(key)) as string;
    return JSON.parse(data);
  }

  public setValue<T>(key: string, value: T): void {
    const data = JSON.stringify(value);
    localStorage.setItem(this.encodeKey(key), data);
  }

  public removeKey(key: string): void {
    localStorage.removeItem(this.encodeKey(key));
  }

  public clear(): void {
    localStorage.clear();
  }

  public getAllKeys(): string[] {
    return Object.keys(localStorage);
  }
  public hasKey(key: string): boolean {
    return this.getAllKeys().includes(this.encodeKey(key));
  }
}

export class CoresSessionStorage {
  public encodeKey(key: string): string {
    getEnvEncodeStatus() && (key = Base64.encode(key));
    return key;
  }

  public getValue(key: string) {
    const data = sessionStorage.getItem(this.encodeKey(key)) as string;
    return JSON.parse(data);
  }

  public setValue<T>(key: string, value: T): void {
    const data = JSON.stringify(value);
    sessionStorage.setItem(this.encodeKey(key), data);
  }

  public removeKey(key: string): void {
    sessionStorage.removeItem(this.encodeKey(key));
  }

  public clear(): void {
    sessionStorage.clear();
  }

  public getAllKeys(): string[] {
    return Object.keys(sessionStorage);
  }

  public hasKey(key: string): boolean {
    return this.getAllKeys().includes(this.encodeKey(key));
  }
}

export const coresWebStorage = new CoresWebStorage();
export const coresSessionStorage = new CoresSessionStorage();
