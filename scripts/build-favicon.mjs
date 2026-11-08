import { readFile, writeFile } from 'node:fs/promises';

const source = new URL('../public/queenan-favicon.png', import.meta.url);
const destination = new URL('../public/favicon.ico', import.meta.url);

// Preserve the exact existing Queenan Capital logo; wrap its PNG bytes in a
// standards-compliant ICO container for browsers and search-engine crawlers.
const png = await readFile(source);
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('The Queenan Capital favicon source is not a PNG');
}

const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width !== height || width < 48 || width > 256) {
  throw new Error('The Queenan Capital favicon must be square and 48–256 pixels');
}

const ico = Buffer.alloc(22 + png.length);
ico.writeUInt16LE(0, 0);             // reserved
ico.writeUInt16LE(1, 2);             // ICO format
ico.writeUInt16LE(1, 4);             // one image
ico.writeUInt8(width === 256 ? 0 : width, 6);
ico.writeUInt8(height === 256 ? 0 : height, 7);
ico.writeUInt8(0, 8);                // true color
ico.writeUInt8(0, 9);
ico.writeUInt16LE(1, 10);            // color planes
ico.writeUInt16LE(32, 12);           // 32-bit RGBA
ico.writeUInt32LE(png.length, 14);   // embedded PNG size
ico.writeUInt32LE(22, 18);           // embedded PNG offset
png.copy(ico, 22);

await writeFile(destination, ico);
console.log('Generated /favicon.ico from the existing Queenan Capital logo');
