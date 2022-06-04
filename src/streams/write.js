import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const linkFile = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
    const myWriteStream = fs.createWriteStream(linkFile, 'utf8');
    process.stdin.on('data', data => {        
        myWriteStream.write(data.toString());        
    });
};
write();