import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const fsp = fs.promises;
let linkFile1 = path.join(__dirname, 'files');
let linkFile2 = path.join(__dirname, 'files_copy');

export const copy = async () => {
  try {		
		if (!fs.existsSync(linkFile1) || fs.existsSync(linkFile2)) throw new Error('FS operation failed');  
    await copyDir(linkFile1, linkFile2)
	} catch (err) {
		console.error(`${err}`);
	}
}

async function copyDir(a, b) {
	const files = await fsp.readdir(a, { withFileTypes: true });
	await fsp.mkdir(b, { recursive: true });
	files.forEach(async (f) => {
		if (f.isFile()) {    
		const data = await fsp.readFile(path.join(a, f.name), 'utf8');
		await fsp.writeFile(path.join(b, f.name), data);		
    } else  {
			copyDir(path.join(a, f.name), path.join(b, f.name)); 
		}           
  });
}
copy();