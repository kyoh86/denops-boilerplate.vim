import { test } from "jsr:@denops/test@3.0.1";
import { assert } from "jsr:@std/assert@0.224.0";

test({
  mode: "all",
  name: "dummy",
  fn: () => {
    assert(true);
  },
});
