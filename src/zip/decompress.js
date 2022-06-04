import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
const __dirname = path.resolve();
const linkFile1 = path.join(__dirname, 'files', 'fileToCompress.txt');
const linkFile2 = path.join(__dirname, 'files', 'archive.gz');

export const decompress = async () => {
    const unzip = zlib.createUnzip();
    const myReadStream = fs.createReadStream(linkFile2);
    const myWriteStream = fs.createWriteStream(linkFile1);
    myReadStream.pipe(unzip).pipe(myWriteStream);
};
decompress();