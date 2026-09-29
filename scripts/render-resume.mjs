import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const sourcePath = resolve(
  "public/assets/resume/Jack_Lockhart_Resume.pdf",
);
const outputPath = resolve(
  "public/assets/resume/Jack_Lockhart_Resume.generated.png",
);
const scale = 2;

const source = new Uint8Array(await readFile(sourcePath));
const loadingTask = getDocument({ data: source });
const document = await loadingTask.promise;
const pageCount = document.numPages;
const pages = [];

for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
  const page = await document.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(
    Math.ceil(viewport.width),
    Math.ceil(viewport.height),
  );
  const context = canvas.getContext("2d");

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: context, viewport }).promise;
  pages.push(canvas);
}

const width = Math.max(...pages.map((page) => page.width));
const height = pages.reduce((total, page) => total + page.height, 0);
const output = createCanvas(width, height);
const outputContext = output.getContext("2d");
let y = 0;

outputContext.fillStyle = "#ffffff";
outputContext.fillRect(0, 0, width, height);

for (const page of pages) {
  outputContext.drawImage(page, (width - page.width) / 2, y);
  y += page.height;
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, output.toBuffer("image/png"));
await loadingTask.destroy();

console.log(`Rendered ${pageCount} résumé page(s) to ${outputPath}`);
