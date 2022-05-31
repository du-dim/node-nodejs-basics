import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const fsp = fs.promises;
const linkFile = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
    try {		
		if (!fs.existsSync(linkFile)) throw new Error('FS operation failed');
        await fsp.rm(linkFile, { recursive: true });
	} catch (err) {
		console.log(err.message);
	} 
};
remove();