import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const linkFile = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    const myReadStream = fs.createReadStream(linkFile, 'utf8');
    myReadStream.on('data', chunk => process.stdout.write(chunk));
};
read();