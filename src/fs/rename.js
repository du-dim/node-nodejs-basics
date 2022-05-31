import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const fsp = fs.promises;
const linkFile1 = path.join(__dirname, 'files', 'wrongFilename.txt');
const linkFile2 = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
    try {		
		if (!fs.existsSync(linkFile1) || fs.existsSync(linkFile2)) throw new Error('FS operation failed');  
        await fsp.rename(linkFile1, linkFile2);
	} catch (err) {
		console.log(err.message);
	}
};
rename();