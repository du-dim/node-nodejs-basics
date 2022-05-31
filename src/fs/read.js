import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const fsp = fs.promises;
const linkFile = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    try {		
		if (!fs.existsSync(linkFile)) throw new Error('FS operation failed');
        const data = await fsp.readFile(linkFile, 'utf8');  
        console.log(data);
	} catch (err) {
		console.log(err.message);
	}
}
read();