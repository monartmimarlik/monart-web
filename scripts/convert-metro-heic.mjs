import fs from "node:fs/promises";
import path from "node:path";
import convert from "heic-convert";

const projectRoot = path.resolve(import.meta.dirname, "..");
const destDir = path.join(projectRoot, "public", "images", "projects", "metro-kalip-demir");
const sourceDir = path.join(projectRoot, "..", "..", "Proje fotoğrafları", "Metro Projesi");

async function main() {
  await fs.mkdir(destDir, { recursive: true });

  const names = (await fs.readdir(sourceDir))
    .filter((n) => /\.hei[c|f]$/i.test(n))
    .sort((a, b) => a.localeCompare(b, "tr", { numeric: true }));

  let index = 2;
  for (const name of names) {
    const input = path.join(sourceDir, name);
    const buffer = await fs.readFile(input);
    const outputBuffer = await convert({
      buffer,
      format: "JPEG",
      quality: 0.85,
    });
    const outName = `img-${String(index).padStart(2, "0")}.jpg`;
    await fs.writeFile(path.join(destDir, outName), Buffer.from(outputBuffer));
    console.log("OK", name, "->", outName);
    index += 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
