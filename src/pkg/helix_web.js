import * as wasm from "./helix_web_bg.wasm";
import { __wbg_set_wasm } from "./helix_web_bg.js";
__wbg_set_wasm(wasm);

export * from "./helix_web_bg.js";

export default wasm;
//wasm.__wbindgen_start();
