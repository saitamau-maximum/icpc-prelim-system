import init, { greet } from "../wasm/wasm";

export default function workplace() {
  init().then(() => {
    greet("workplace");
  });
  return <>workplace</>;
}
