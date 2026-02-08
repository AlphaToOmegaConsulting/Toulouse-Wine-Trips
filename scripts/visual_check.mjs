import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { chromium } from 'playwright-core';

function usageAndExit() {
  // Minimal flag parsing to keep this script dependency-free.
  // Usage:
  //   node scripts/visual_check.mjs --url http://localhost:3000/booking/ --out output/playwright/booking-before.png
  console.error('Usage: node scripts/visual_check.mjs --url <url> --out <png path>');
  process.exit(2);
}

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

const url = getArg('--url');
const outPath = getArg('--out');
if (!url || !outPath) usageAndExit();

const absOut = path.resolve(process.cwd(), outPath);
await fs.mkdir(path.dirname(absOut), { recursive: true });

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
});

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForTimeout(800); // allow late fonts/embeds to settle
  await page.screenshot({ path: absOut, fullPage: true });
  console.log(absOut);
} finally {
  await browser.close();
}

