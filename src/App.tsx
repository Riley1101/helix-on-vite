import "xterm/css/xterm.css";
import wasm from "./pkg";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // @ts-expect-error wasm types
    wasm.__wbindgen_start();
    return () => {
      // @ts-expect-error wasm types
      wasm.__wbindgen_free();
    };
  }, []);

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      <div id="terminal" className="w-full h-full absolute top-0 left-0" />
    </div>
  );
}
