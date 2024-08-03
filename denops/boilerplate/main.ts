import type { Denops } from "jsr:@denops/std@~7.0.1";
import { ensure, is } from "jsr:@core/unknownutil@~3.18.1";

export function main(denops: Denops) {
  denops.dispatcher = {
    foo(uFoo: unknown, uBar: unknown, uBaz: unknown) {
      try {
        const foo = ensure(uFoo, is.String);
        const bar = ensure(uBar, is.Record);
        const baz = ensure(uBaz, is.OptionalOf(is.String));
        console.log(foo, bar, baz);
      } catch (err) {
        console.error(err);
      }
    },
  };
}
