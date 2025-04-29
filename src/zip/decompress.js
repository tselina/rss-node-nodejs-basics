// Implement function that decompresses "archive.gz" back to the "fileToCompress.txt"
// with same content as before compression using "zlib" and Streams API

import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';

const __dirname = import.meta.dirname;

const decompress = async () => {
    const sourcePath = join(__dirname, 'files', 'archive.gz');
    const destinationPath = join(__dirname, 'files', 'fileToCompress.txt');

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();