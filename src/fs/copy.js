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
		console.log(err.message);
	}
}

async function copyDir(a, b) {
	const files = await fsp.readdir(a, { withFileTypes: true })
	await fsp.mkdir(b, { recursive: true });
	files.forEach(f => {
		if (f.isFile()) {
        let myReadStream = fs.createReadStream(path.join(a, f.name));
		let myWriteStream = fs.createWriteStream(path.join(b, f.name));
		myReadStream.pipe(myWriteStream);
		myReadStream.on('error', (err) => console.log(err.message));
		myWriteStream.on('error', (err) => console.log(err.message));
    } else  {
			copyDir(path.join(a, f.name), path.join(b, f.name)); 
		}           
  })
}
copy();