// Implement function that writes "process.stdin" data into file "fileToWrite.txt"
// content using Writable Stream

import { createWriteStream } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const write = async () => {
    const filePath = join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = createWriteStream(filePath);

    process.stdin.pipe(writableStream);
};

await write();