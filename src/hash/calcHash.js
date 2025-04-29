// Implement function that calculates SHA256 hash for file "fileToCalculateHashFor.txt"
// and logs it into console as "hex" using Streams API

import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

const __dirname = import.meta.dirname;

const calculateHash = async () => {
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    });

    stream.on('error', (err) => {
        console.error('FS operation failed', err);
    });
};

await calculateHash();