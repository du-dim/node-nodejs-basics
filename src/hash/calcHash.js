import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
const __dirname = path.resolve();
const fsp = fs.promises;
const linkFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const data = await fsp.readFile(linkFile, 'utf8');
    return crypto.createHash('sha256').update(data).digest('hex');    
};

console.log(await calculateHash());