import { Transform, pipeline } from 'stream';

const readable = process.stdin;
const writable = process.stdout;

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        const chunkData = chunk.toString();
        const chunkTransform = chunkData; // doesn't transform
        callback(null, chunkTransform);
        process.exit();
    }
});

export const transform = async () => {
    pipeline(readable, myTransform, writable, err => console.error(`${err}`));
    
};
transform();