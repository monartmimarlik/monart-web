/**
 * Google / tarayıcılar için statik favicon üretir (kök /favicon.ico + PNG’ler).
 * node scripts/generate-favicon.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <rect width="256" height="256" fill="#171717"/>
  <text
    x="128"
    y="152"
    text-anchor="middle"
    fill="#ffffff"
    font-family="system-ui, -apple-system, 'Segoe UI', sans-serif"
    font-size="68"
    font-weight="800"
    letter-spacing="-3"
  >MONART</text>
</svg>`;

const svgBuffer = Buffer.from(SVG);

async function main() {
  await fs.promises.mkdir(publicDir, { recursive: true });

  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((s) =>
      sharp(svgBuffer)
        .resize(s, s)
        .png()
        .toBuffer()
    )
  );

  const ico = await toIco(pngBuffers);
  await fs.promises.writeFile(path.join(publicDir, "favicon.ico"), ico);

  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, "favicon-48x48.png"));

  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  console.log("OK: public/favicon.ico, favicon-48x48.png, apple-touch-icon.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
