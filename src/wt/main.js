import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
const __dirname = path.resolve();
const linkFile = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
    const cpus = os.cpus();
    const arrPromise = cpus.map((_,i) => promise(i));
    const arrResult = [];
    await Promise.all(arrPromise).then(results => results.forEach(res => arrResult.push(res)));
    return arrResult;
};

const promise = (index) => new Promise((resolve, reject) => {
    const worker = new Worker(linkFile, { workerData: 10 + index});             
    worker.on('message', msg => {           
        resolve({status: 'resolve', data: msg});    
    }); 
    worker.on('error', err => {         
        resolve({status: 'error', data: null});                                                 
    });  
});

console.log(await performCalculations());

            