import init, { greet } from "../wasm/wasm";

export default function Workplace() {
  init().then(() => {
    greet("workplace");
  });
  return <>workplace</>;
}
