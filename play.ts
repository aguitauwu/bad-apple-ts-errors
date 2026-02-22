import * as ts from "typescript";
import * as readline from "readline";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function write(text: string): void {
  process.stdout.write(text);
}

function clear(): void {
  process.stdout.write("\x1Bc");
}

function dim(text: string): string {
  return `\x1B[2m${text}\x1B[0m`;
}

function bold(text: string): string {
  return `\x1B[1m${text}\x1B[0m`;
}

function red(text: string): string {
  return `\x1B[31m${text}\x1B[0m`;
}

function yellow(text: string): string {
  return `\x1B[33m${text}\x1B[0m`;
}

function green(text: string): string {
  return `\x1B[32m${text}\x1B[0m`;
}

function cyan(text: string): string {
  return `\x1B[36m${text}\x1B[0m`;
}

function magenta(text: string): string {
  return `\x1B[35m${text}\x1B[0m`;
}

async function typewriter(text: string, delay = 30): Promise<void> {
  for (const char of text) {
    write(char);
    await sleep(delay);
  }
}

function waitEnter(): Promise<void> {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin });
    rl.once("line", () => { rl.close(); resolve(); });
  });
}

async function loading(text: string, ms: number): Promise<void> {
  const frames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
  const end = Date.now() + ms;
  let i = 0;
  while (Date.now() < end) {
    process.stdout.write(`\r${dim(frames[i % frames.length])} ${dim(text)}`);
    await sleep(80);
    i++;
  }
  process.stdout.write("\r");
}

async function progressBar(text: string, ms: number, fail = false): Promise<void> {
  const width = 30;
  const steps = fail ? Math.floor(Math.random() * 15) + 5 : width;
  for (let i = 0; i <= steps; i++) {
    const filled = "█".repeat(i);
    const empty  = "░".repeat(width - i);
    const pct    = Math.floor((i / width) * 100);
    process.stdout.write(`\r  ${dim(text)}  [${cyan(filled)}${dim(empty)}] ${pct}%`);
    await sleep(ms / width);
  }
  if (fail) {
    process.stdout.write(`  ${red("FAILED")}\n`);
  } else {
    process.stdout.write(`  ${green("done")}\n`);
  }
}

async function intro(): Promise<void> {
  clear();
  await sleep(400);

  await typewriter("Hey. My name is Agua.", 40);
  await sleep(200);
  write("\n");
  await typewriter("I am an independent developer and I like Bad Apple.", 30);
  await sleep(200);
  write("\n");
  await typewriter("I did not have much to do, so I made this.", 30);
  await sleep(200);
  write("\n");
  await typewriter("Anyway, I will let you try it out.", 30);
  await sleep(600);
  write("\n\n");
  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ git clone https://github.com/apple/bad-apple-core.git\n\n"));
  await sleep(300);
  write("Cloning into " + cyan("'bad-apple-core'") + "...\n");
  await sleep(200);
  write(dim("remote: Enumerating objects: 18204, done.\n"));
  await sleep(150);
  write(dim("remote: Counting objects: 100% (18204/18204), done.\n"));
  await sleep(150);
  write(dim("remote: Compressing objects: 100% (9341/9341), done.\n"));
  await sleep(200);
  await progressBar("Receiving objects", 2000);
  await sleep(100);
  await progressBar("Resolving deltas", 1200);
  write("\n");
  write(red("fatal:") + " repository integrity check failed.\n");
  write(dim("       pack file is corrupted at offset 0x4c3f8a\n\n"));
  await sleep(600);

  write(dim("$ git clone --depth 1 https://github.com/apple/bad-apple-core.git\n\n"));
  await sleep(300);
  write("Cloning into " + cyan("'bad-apple-core'") + "...\n");
  await sleep(300);
  write(dim("remote: Enumerating objects: 3, done.\n"));
  await sleep(100);
  await progressBar("Receiving objects", 1400, true);
  write(red("error:") + " RPC failed; curl 56 GnuTLS recv error (-9).\n");
  write(red("error:") + " 1985 bytes of body are still expected.\n");
  write(red("fetch-pack:") + " unexpected disconnect while reading sideband packet.\n");
  write(red("fatal:") + " early EOF.\n\n");
  await sleep(700);

  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ npm install bad-apple-remover@latest\n\n"));
  await sleep(300);
  write(dim("npm warn deprecated bad-apple-remover@2.1.4: this package has been discontinued\n"));
  await sleep(200);
  write(dim("npm warn deprecated core-apple-fix@1.0.0: use bad-apple-remover instead\n"));
  await sleep(200);
  write(dim("npm warn deprecated bad-apple-remover@2.1.4: circular deprecation detected\n\n"));
  await sleep(400);
  await loading("Fetching package metadata...", 1200);
  write(red("npm error") + " code ECONNRESET\n");
  write(red("npm error") + " network request failed\n");
  write(dim("npm error") + " A complete log of this run can be found in:\n");
  write(dim("npm error")  + " /root/.npm/_logs/2024-01-01T00_00_00_000Z-debug-0.log\n\n");
  await sleep(500);

  write(dim("$ npm install bad-apple-remover@latest --registry https://registry.npmjs.org\n\n"));
  await loading("Downloading bad-apple-remover...", 1000);
  await progressBar("bad-apple-remover@2.1.4", 1800, true);
  write(red("npm error") + " integrity check failed for bad-apple-remover@2.1.4\n");
  write(dim("          ") + "expected: sha512-xK3rT...\n");
  write(dim("          ") + "actual:   sha512-6x6x6...\n\n");
  await sleep(600);

  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ pip install apple-type-sanitizer\n\n"));
  await loading("Collecting apple-type-sanitizer...", 900);
  write("  Downloading apple_type_sanitizer-0.9.1.tar.gz " + dim("(4.2 MB)\n"));
  await progressBar("Installing", 1600, true);
  write(red("ERROR:") + " Could not build wheels for apple-type-sanitizer\n");
  write(dim("       ") + "error in apple-type-sanitizer setup command:\n");
  write(dim("       ") + "use_2to3 is invalid. It was removed in setuptools 58.3.0\n\n");
  await sleep(500);

  write(dim("$ pip install apple-type-sanitizer --pre\n\n"));
  await loading("Collecting apple-type-sanitizer (pre-release)...", 1000);
  write(red("ERROR:") + " ResolutionImpossible: for help visit https://pip.pypa.io\n\n");
  await sleep(600);

  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ tsc --noEmit --strict bad_apple.ts\n\n"));
  await sleep(400);

  write(red("error") + " TS2322  " + cyan("bad_apple.ts") + yellow("(1,7)") + "\n");
  await sleep(100);
  write(red("error") + " TS2322  " + cyan("bad_apple.ts") + yellow("(2,7)") + "\n");
  await sleep(100);
  write(red("error") + " TS2322  " + cyan("bad_apple.ts") + yellow("(3,7)") + "\n");
  await sleep(80);

  for (let i = 4; i <= 52; i++) {
    write(red("error") + " TS2322  " + cyan("bad_apple.ts") + yellow(`(${i},7)`) + "\n");
    await sleep(16);
  }

  write("\n");
  write(red("Found 2180 errors") + " in 1 file.\n\n");
  await sleep(700);

  write(dim("Press Enter to attempt repair."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ npm run fix:types\n\n"));
  await loading("Analyzing type graph...", 1600);
  write(green("  Scan complete.") + " 2180 violations located.\n");
  await sleep(300);
  await loading("Attempting auto-fix...", 2000);
  write(red("  Auto-fix failed.") + " Violations are deeply nested.\n");
  await sleep(300);
  await loading("Trying experimental resolver...", 1400);
  write(red("  Resolver crashed.") + " Segmentation fault in ts-morph.\n\n");
  await sleep(500);

  write(yellow("warning") + "  The source of corruption could not be identified.\n");
  await sleep(200);
  write(yellow("warning") + "  Type safety across all modules is compromised.\n");
  await sleep(200);
  write(yellow("warning") + "  Proceeding may destabilize the runtime.\n\n");
  await sleep(400);

  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ npm uninstall bad_apple\n\n"));
  await loading("Resolving dependency tree...", 1000);
  write("  " + cyan("bad_apple") + dim("@6.6.6") + "  cannot be uninstalled.\n");
  await sleep(200);
  write("  Required by: " + red(bold("everything")) + "\n\n");
  await sleep(400);

  write(dim("$ rm -rf node_modules && npm install\n\n"));
  await loading("Removing node_modules...", 800);
  write(red("  Permission denied.") + " bad_apple.ts is holding a file lock.\n\n");
  await sleep(400);

  write(dim("$ git stash\n\n"));
  await sleep(300);
  write(red("  error:") + " bad_apple is not stashable. It is part of the commit history.\n\n");
  await sleep(400);

  write(dim("$ git reset --hard HEAD~1\n\n"));
  await sleep(400);
  write(red("  error:") + " cannot reset. bad_apple predates the initial commit.\n\n");
  await sleep(400);

  write(dim("$ git log --oneline | head -5\n\n"));
  await sleep(300);
  write(magenta("6x6x666") + dim(" (HEAD -> main)  ") + "add bad_apple\n");
  await sleep(100);
  write(magenta("6x6x665") + dim("                 ") + "add bad_apple\n");
  await sleep(100);
  write(magenta("6x6x664") + dim("                 ") + "add bad_apple\n");
  await sleep(100);
  write(magenta("6x6x663") + dim("                 ") + "add bad_apple\n");
  await sleep(100);
  write(magenta("6x6x662") + dim("                 ") + "add bad_apple\n\n");
  await sleep(600);

  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(200);

  write(dim("$ curl -fsSL https://get.apple-purge.sh | bash\n\n"));
  await sleep(400);
  await loading("Downloading apple-purge.sh...", 800);
  write(red("  curl: (6)") + " Could not resolve host: get.apple-purge.sh\n\n");
  await sleep(400);

  write(dim("$ docker pull apple-sanitizer:latest\n\n"));
  await loading("Pulling from library/apple-sanitizer...", 1200);
  await progressBar("latest: Pulling", 2000, true);
  write(red("error") + " response from daemon: Get https://registry-1.docker.io/v2/:\n");
  write(dim("       ") + "dial tcp: lookup registry-1.docker.io: no such host\n\n");
  await sleep(500);

  write(dim("$ sudo rm -f bad_apple.ts\n\n"));
  await sleep(500);
  write(red("rm: cannot remove 'bad_apple.ts':") + " Operation not permitted\n\n");
  await sleep(400);

  write(dim("$ sudo !!") + "\n\n");
  await sleep(300);
  write(red("rm: cannot remove 'bad_apple.ts':") + " Operation not permitted\n\n");
  await sleep(400);

  write(dim("$ sudo su\n\n"));
  await sleep(300);
  write(red("su: Authentication failure\n\n"));
  await sleep(600);

  write(dim("Press Enter to continue."));
  await waitEnter();

  clear();
  await sleep(300);

  write(red(bold("error TS666:")) + " A bad apple has contaminated the codebase.\n");
  await sleep(250);
  write(dim("            The type system has been compromised.\n"));
  await sleep(250);
  write(dim("            All fix attempts have failed.\n"));
  await sleep(250);
  write(dim("            All packages failed to download.\n"));
  await sleep(250);
  write(dim("            All repositories are corrupted.\n"));
  await sleep(250);
  write(dim("            The only option is controlled execution.\n\n"));
  await sleep(800);

  write(dim("Attempting to remove...") + "\n\n");
  await sleep(900);

  for (const n of ["3", "2", "1"]) {
    write(`         ${bold(n)}\n`);
    await sleep(900);
  }

  await sleep(300);
  clear();
}

function loadFrames(tsFile: string): string[] {
  const program = ts.createProgram([tsFile], {
    noEmit: true,
    strict: true,
    noErrorTruncation: true,
  });

  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .filter((d) => d.code === 2322 && typeof d.messageText === "string");

  const frames: string[] = [];

  for (const d of diagnostics) {
    const msg = typeof d.messageText === "string" ? d.messageText : "";
    const match = msg.match(/Type '"([\s\S]*?)"' is not assignable/);
    if (match) {
      const frame = match[1]
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t");
      frames.push(frame);
    }
  }

  return frames;
}

function renderFrame(raw: string, cols: number, rows: number): string {
  return raw
    .split("\n")
    .slice(0, rows)
    .map(line => line.slice(0, cols))
    .join("\n");
}

function playFrames(frames: string[], fps: number): void {
  const cols = process.stdout.columns ?? 80;
  const rows = (process.stdout.rows ?? 30) - 2;
  const delay = 1000 / fps;
  let i = 0;

  const tick = () => {
    if (i >= frames.length) {
      clear();
      write(dim("error TS666: Bad Apple successfully removed from the codebase.\n"));
      write(dim("            All systems nominal.\n\n"));
      process.exit(0);
    }

    clear();
    write(dim(`error TS2322  bad_apple.ts  frame ${String(i + 1).padStart(4, "0")} / ${frames.length}\n`));
    write(renderFrame(frames[i], cols, rows));
    i++;
    setTimeout(tick, delay);
  };

  tick();
}

const tsFile = process.argv[2] ?? "bad_apple.ts";
const fps    = parseFloat(process.argv[3] ?? "10");

(async () => {
  await intro();

  write("Loading frames from compiler diagnostics...\n");
  const frames = loadFrames(tsFile);

  if (frames.length === 0) {
    write(red("error: no TS2322 diagnostics found.\n"));
    process.exit(1);
  }

  write(`${frames.length} frames loaded from type errors.\n\n`);
  write(dim("Press Enter to run.\n"));

  const rl = readline.createInterface({ input: process.stdin });
  rl.once("line", () => {
    rl.close();
    playFrames(frames, fps);
  });
})();

