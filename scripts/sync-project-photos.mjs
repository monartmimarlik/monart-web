import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import convert from "heic-convert";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const desktopRoot = path.join(projectRoot, "..", "..", "Proje fotoğrafları");

const FOLDERS = [
  { folder: "Metro Projesi", id: "metro-kalip-demir" },
  { folder: "Bahçelievler Konut Projesi", id: "bahcelievler-konut" },
  { folder: "Mobilya Tasarım Projeleri", id: "mobilya-tasarim" },
  { folder: "Kınalıada Renovasyon", id: "kinaliada-renovasyon" },
  { folder: "Başakşehir Konut Projesi", id: "tasarim-konsept-konut" },
  { folder: "Mavi Baloon Projesi", id: "kadikoy-moda-mavi-balon" },
  { folder: "YTÜ Renovasyon", id: "ytu-renovasyon" },
];

const IMAGE_EXT = /\.(jpe?g|png|webp|hei[c|f])$/i;
/** Web’de gösterim için yeterli; daha büyük dosyalar indirme/decode maliyetini artırır */
const MAX_DISPLAY_EDGE = 1920;

function stem(fileName) {
  return path.basename(fileName, path.extname(fileName));
}

function isHeic(fileName) {
  return /\.hei[c|f]$/i.test(fileName);
}

function compareNumericNames(aName, bName) {
  const sa = stem(aName);
  const sb = stem(bName);
  const na = Number(sa);
  const nb = Number(sb);
  const aNum = Number.isFinite(na) && String(na) === sa;
  const bNum = Number.isFinite(nb) && String(nb) === sb;
  if (aNum && bNum) return na - nb;
  return sa.localeCompare(sb, "tr", { numeric: true });
}

async function toDisplayJpeg(input) {
  const img = Buffer.isBuffer(input) ? sharp(input) : sharp(input);
  return img
    .rotate()
    .resize({
      width: MAX_DISPLAY_EDGE,
      height: MAX_DISPLAY_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();
}

async function jpegFromHeicBuffer(buffer) {
  const jpegish = Buffer.from(
    await convert({ buffer, format: "JPEG", quality: 0.92 })
  );
  return toDisplayJpeg(jpegish);
}

/**
 * CMYK / agresif ICC gibi tarayıcıda kırılabilen JPEG'leri sRGB baseline'a indirir.
 * Uzantı .jpg olsa bile HEIC/HEIF içeriği olabilir (iPhone dışa aktarımı); sharp başarısız olursa heic-convert denenir.
 */
async function toWebSafeJpegBuffer(srcPath) {
  if (isHeic(srcPath)) {
    const buffer = await fs.readFile(srcPath);
    return jpegFromHeicBuffer(buffer);
  }
  try {
    return await toDisplayJpeg(srcPath);
  } catch {
    const buffer = await fs.readFile(srcPath);
    return jpegFromHeicBuffer(buffer);
  }
}

async function syncProject({ folder, id }) {
  const srcDir = path.join(desktopRoot, folder);
  const destDir = path.join(projectRoot, "public", "images", "projects", id);

  let names;
  try {
    names = await fs.readdir(srcDir);
  } catch {
    console.warn("SKIP (klasör yok):", folder);
    return null;
  }

  const files = names.filter((n) => IMAGE_EXT.test(n));
  if (files.length === 0) {
    console.warn("SKIP (görsel yok):", folder);
    return null;
  }

  await fs.rm(destDir, { recursive: true, force: true });
  await fs.mkdir(destDir, { recursive: true });

  const coverName = files.find((n) => stem(n).toLowerCase() === "cover");
  const others = files
    .filter((n) => stem(n).toLowerCase() !== "cover")
    .sort((a, b) => compareNumericNames(a, b));

  const orderedNames = coverName ? [coverName, ...others] : [...files].sort((a, b) => compareNumericNames(a, b));

  async function writeCoverFrom(name) {
    const srcPath = path.join(srcDir, name);
    const ext = path.extname(name).toLowerCase();
    if (isHeic(name) || ext === ".jpg" || ext === ".jpeg") {
      const buf = await toWebSafeJpegBuffer(srcPath);
      await fs.writeFile(path.join(destDir, "cover.jpg"), buf);
      return `/images/projects/${id}/cover.jpg`;
    }
    if (ext === ".png") {
      await fs.copyFile(srcPath, path.join(destDir, "cover.png"));
      return `/images/projects/${id}/cover.png`;
    }
    if (ext === ".webp") {
      const buf = await toDisplayJpeg(srcPath);
      await fs.writeFile(path.join(destDir, "cover.jpg"), buf);
      return `/images/projects/${id}/cover.jpg`;
    }
    const buf = await toWebSafeJpegBuffer(srcPath);
    await fs.writeFile(path.join(destDir, "cover.jpg"), buf);
    return `/images/projects/${id}/cover.jpg`;
  }

  async function writeGalleryFrom(name, index) {
    const srcPath = path.join(srcDir, name);
    const ext = path.extname(name).toLowerCase();
    const base = `img-${String(index).padStart(2, "0")}`;
    if (isHeic(name) || ext === ".jpg" || ext === ".jpeg") {
      const buf = await toWebSafeJpegBuffer(srcPath);
      const outPath = path.join(destDir, `${base}.jpg`);
      await fs.writeFile(outPath, buf);
      return `/images/projects/${id}/${base}.jpg`;
    }
    if (ext === ".png") {
      const outPath = path.join(destDir, `${base}.png`);
      await fs.copyFile(srcPath, outPath);
      return `/images/projects/${id}/${base}.png`;
    }
    if (ext === ".webp") {
      const buf = await toDisplayJpeg(srcPath);
      const outPath = path.join(destDir, `${base}.jpg`);
      await fs.writeFile(outPath, buf);
      return `/images/projects/${id}/${base}.jpg`;
    }
    const buf = await toWebSafeJpegBuffer(srcPath);
    const outPath = path.join(destDir, `${base}.jpg`);
    await fs.writeFile(outPath, buf);
    return `/images/projects/${id}/${base}.jpg`;
  }

  const galleryUrls = [];
  const first = orderedNames[0];
  const coverUrl = await writeCoverFrom(first);
  galleryUrls.push(coverUrl);

  let galleryIndex = 2;
  for (const name of orderedNames.slice(1)) {
    galleryUrls.push(await writeGalleryFrom(name, galleryIndex));
    galleryIndex += 1;
  }

  return { id, image: coverUrl, gallery: galleryUrls };
}

async function main() {
  const results = [];
  for (const entry of FOLDERS) {
    const r = await syncProject(entry);
    if (r) {
      results.push(r);
      console.log("OK", entry.id, "->", r.gallery.length, "görsel");
    }
  }

  const lines = [];
  lines.push("// Bu dosya scripts/sync-project-photos.mjs tarafından otomatik üretilir. Elle düzenlemeyin.");
  lines.push("export const PROJECT_MEDIA = {");
  for (const r of results) {
    lines.push(`  "${r.id}": {`);
    lines.push(`    image: ${JSON.stringify(r.image)},`);
    lines.push(`    gallery: ${JSON.stringify(r.gallery)},`);
    lines.push(`  },`);
  }
  lines.push("} as const;");
  lines.push("");
  lines.push("export type ProjectMediaId = keyof typeof PROJECT_MEDIA;");
  lines.push("");

  const outFile = path.join(projectRoot, "src", "data", "project-media.generated.ts");
  await fs.writeFile(outFile, lines.join("\n"), "utf8");
  console.log("Wrote", outFile);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
