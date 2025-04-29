// Implement function that compresses file "fileToCompress.txt" to "archive.gz"
// using "zlib" and Streams API

import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';

const __dirname = import.meta.dirname;

const compress = async () => {
    const sourcePath = join(__dirname, 'files', 'fileToCompress.txt');
    const destinationPath = join(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();