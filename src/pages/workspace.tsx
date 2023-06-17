import init, { greet } from "../wasm/wasm";

export default function workspace() {
  init().then(() => {
    greet("workspace");
  });
  return <>workspace</>;
}
