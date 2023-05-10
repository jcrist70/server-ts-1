import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function bodyValidator(...keys: string[]) {
  return function (target: object, key: string) {
    // console.log('TYPEOF TARGET:', typeof target);
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
