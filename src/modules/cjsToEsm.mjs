import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { createRequire } from "module";
import './files/c.js';

const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);
const require = createRequire(import.meta.url);
const aObj = require("./files/a.json");
const bObj = require("./files/b.json");

const random = Math.random();

let unknownObject;
if (random > 0.5) {
    unknownObject = aObj;    
} else {
    unknownObject = bObj;    
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServer((_, res) => {    
    res.end('Request accepted');    
});

export { unknownObject, createMyServer };

console.log(unknownObject);
createMyServer.listen(5000, () => console.log('Server started on port 5000'));