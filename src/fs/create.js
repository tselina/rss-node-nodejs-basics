// Implement function that creates new file "fresh.txt" with content "I am fresh and young" 
// inside of the "files" folder (if file already exists "Error" with message "FS operation failed" must be thrown)

import { promises as fs } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const create = async () => {
    const filePath = join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        // Check if the file already exists
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            // File does not exist, create it
            await fs.writeFile(filePath, content, 'utf8');
        } else {
            // Throw if any other error apppears
            throw err;
        }
    }
};

await create();