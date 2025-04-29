// Implement function that deletes file "fileToRemove.txt" (if there's no file "fileToRemove.txt"
// "Error" with message "FS operation failed" must be thrown)

import { promises as fs } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const remove = async () => {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        // Check if the file exists
        await fs.access(filePath);
        // Delete the file
        await fs.unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();