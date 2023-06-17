# ICPC Prelim System

Imitation of ICPC Prelim System for Practice

**The ICPC Foundation does not endorse this project.**

## Development

### Requirements

- Node.js v18
- Cargo latest

### Setup

```bash
git clone
cd icpc-prelim-system
yarn install
cargo install wasm-pack
```

### Build

```bash
yarn build
cd wasm && wasm-pack build --target web --out-dir ../src/wasm
```
