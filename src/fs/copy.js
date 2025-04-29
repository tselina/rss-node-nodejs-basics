// Implement function that copies folder "files" files with all its content into folder "files_copy"
// at the same level (if "files" folder doesn't exist or "files_copy" has already been created 
// "Error" with message "FS operation failed" must be thrown)

import { promises as fs } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const copy = async () => {
    const sourceDir = join(__dirname, 'files');
    const targetDir = join(__dirname, 'files_copy');

    try {
        // Check if the source directory exists
        await fs.access(sourceDir);

        // Check if the target directory already exists
        try {
            await fs.access(targetDir);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        // Create target directory
        await fs.mkdir(targetDir, { recursive: true });
        // Read the contents of the source directory
        const items = await fs.readdir(sourceDir, { withFileTypes: true });

        // Coopy each item from source directory to the target directory
        for (const item of items) {
            const sourcePath = join(sourceDir, item.name);
            const targetPath = join(targetDir, item.name);

            await fs.copyFile(sourcePath, targetPath);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();