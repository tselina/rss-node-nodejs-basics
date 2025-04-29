// Implement function that renames file "wrongFilename.txt" to "properFilename" with extension ".md"
// (if there's no file "wrongFilename.txt" or "properFilename.md" already exists "Error"
// with message "FS operation failed" must be thrown)

import { promises as fs } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const rename = async () => {
    const oldFilePath = join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = join(__dirname, 'files', 'properFilename.md');

    try {
        // Check if the old file exists
        await fs.access(oldFilePath);

        // Check if the new file already exists
        try {
            await fs.access(newFilePath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        // Rename the file
        await fs.rename(oldFilePath, newFilePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();