import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
const __dirname = path.resolve();
const linkFile1 = path.join(__dirname, 'files', 'fileToCompress.txt');
const linkFile2 = path.join(__dirname, 'files', 'archive.gz');

export const compress = async () => {
    const gzip = zlib.createGzip();
    const myReadStream = fs.createReadStream(linkFile1);
    const myWriteStream = fs.createWriteStream(linkFile2);
    myReadStream.pipe(gzip).pipe(myWriteStream);
};
compress();