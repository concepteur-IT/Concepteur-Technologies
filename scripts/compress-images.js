const sharp = require("sharp");
const fg = require("fast-glob");
const path = require("path");
const fs = require("fs");

const publicDir = path.join(process.cwd(), "public");

async function compressImages() {
  const images = await fg(["public/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}"]);

  console.log(`Found ${images.length} images`);

  for (const file of images) {
    try {
      const ext = path.extname(file).toLowerCase();

      let transformer = sharp(file).resize({
        width: 1920,
        withoutEnlargement: true,
      });

      if (ext === ".jpg" || ext === ".jpeg") {
        transformer = transformer.jpeg({
          quality: 70,
          mozjpeg: true,
        });
      }

      if (ext === ".png") {
        transformer = transformer.png({
          quality: 70,
          compressionLevel: 9,
        });
      }

      const tempFile = `${file}.tmp`;

      await transformer.toFile(tempFile);

      fs.unlinkSync(file);
      fs.renameSync(tempFile, file);

      console.log(`Compressed: ${file}`);
    } catch (err) {
      console.error(`Failed: ${file}`, err);
    }
  }

  console.log("Done compressing images");
}

compressImages();
