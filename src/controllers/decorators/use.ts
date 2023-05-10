import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler) {
  return function (target: object, key: string) {
    // console.log('TYPEOF TARGET:', typeof target);
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
    console.log(Reflect.getMetadata(MetadataKeys.middleware, target, key));
  };
}
