// Implement function that prints content of the "fileToRead.txt" into console
// (if there's no file "fileToRead.txt" "Error" with message FS operation failed must be thrown)

import { promises as fs } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt');

    try {
        // Check if the file exists
        await fs.access(filePath);
        // Read the file content
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();