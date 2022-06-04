import { Transform, pipeline } from 'stream';

const readable = process.stdin;
const writable = process.stdout;

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        const chunkData = chunk.toString().trim();
        const chunkTransform = chunkData.split('').reverse().join(''); 
        callback(null, chunkTransform + '\n');        
    }
});

export const transform = async () => {
    pipeline(readable, myTransform, writable, err => console.error(`${err}`));    
};
transform();