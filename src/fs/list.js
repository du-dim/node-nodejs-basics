import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const fsp = fs.promises;
const linkFile = path.join(__dirname, 'files');
const arrFileName = [];

export const list = async () => {
    try {		
		if (!fs.existsSync(linkFile)) throw new Error('FS operation failed');
        const data = await fsp.opendir(linkFile);
        for await (const file of data) {
            arrFileName.push(file.name);
        }
        console.log(arrFileName);
                
	} catch (err) {
		console.log(err.message);
	}
};
list();