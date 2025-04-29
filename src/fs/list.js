// Implement function that prints array of all filenames from "files" folder into console
// (if "files" folder doesn't exists "Error" with message "FS operation failed" must be thrown)

import { promises as fs } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

const list = async () => {
    const folderPath = join(__dirname, 'files');

    try {
        // Check if the folder exists
        await fs.access(folderPath);
        // Read the folder content
        const files = await fs.readdir(folderPath);
        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();