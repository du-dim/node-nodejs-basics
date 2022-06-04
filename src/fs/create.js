import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const fsp = fs.promises;
const linkFile = path.join(__dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

export const create = async () => {
  try {		
		if (fs.existsSync(linkFile)) throw new Error('FS operation failed');
    await fsp.writeFile(linkFile, data);   
	} catch (err) {
		console.log(`${err}`);
	}
};
create();