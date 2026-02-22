# Bad Apple!! in TypeScript Type Errors

Bad Apple!! playing inside TypeScript compiler errors.

Every frame of the video is stored as a string literal type in `bad_apple.ts`. TypeScript considers each one a type error — specifically `TS2322: Type is not assignable to type 'never'`. The player uses the TypeScript Compiler API to extract all 2180 errors and replay them as frames in your terminal.

Nobody asked for this.

---

## How it works

`bad_apple.ts` contains 2180 type definitions that look like this:

```ts
type Frame0 = `
$$$$$$$$$$$$$$$$$$$
$$              $$$
$$   $$    $$   $$$
...
`;

const _f0: never = '' as unknown as Frame0;
```

The assignment to `never` forces TypeScript to emit a `TS2322` error containing the full string literal of each frame. The player compiles the file with `noErrorTruncation: true`, collects every diagnostic, and streams them to stdout at 10fps.

---

## Requirements

- Node.js
- TypeScript
- ts-node

Install dependencies:

```bash
npm install typescript @types/node
```

---

## Usage

```bash
npx ts-node --skip-project play.ts bad_apple.ts
```

Optional: set a custom framerate (default is 10fps)

```bash
npx ts-node --skip-project play.ts bad_apple.ts 15
```

> Note: `bad_apple.ts` is a large file. The initial compilation may take a moment.

---

## Files

| File | Description |
|---|---|
| `bad_apple.ts` | 2180 TypeScript type errors, one per frame |
| `play.ts` | Compiler API player — extracts errors and renders them |
| `convert.py` | Original script used to generate `bad_apple.ts` from `play.txt` |

---

## Source

ASCII frames sourced from [Chion82/ASCII_bad_apple](https://github.com/Chion82/ASCII_bad_apple).

---

## License

MIT — aguitauwu

