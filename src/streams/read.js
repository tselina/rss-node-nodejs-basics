// Implement function that reads file "fileToRead.txt" content using Readable Stream
// and prints it's content into "process.stdout"

import { createReadStream } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const stdout = process.stdout;

// stdout.on('data', (chunk) => {
//     console.log('stdout Chunk received:', chunk.toString());
// });
// stdout.on('end', (chunk) => {
//     console.log('stdout end:', chunk.toString());
// });
// stdout.on('error', (err) => {
//     console.error('stdout Error reading from stdout:', err.message);
// });

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = createReadStream(filePath);

    // readableStream.on('error', (err) => {
    //     console.error('Error reading the file:', err.message);
    // });

    // readableStream.on('data', (chunk) => {
    //     console.log('Chunk received:', chunk.toString());
    // });

    readableStream.on('end', () => {
        readableStream.pipe(process.stdout, { end: true });
        // process.stdout.write(readableStream.read().toString());
    });
    // console.log(readableStream);
};

await read();