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
    console.log(arrResult);
};

const promise = (index) => new Promise((resolve, reject) => {
    const worker = new Worker(linkFile, { workerData: 10 + index});             
    worker.on('message', msg => { 
        const obj = {status: 'resolve', data: msg};  
        resolve(obj);    
    }); 
    worker.on('error', err => { 
        const obj = {status: 'error', data: null}; 
        resolve(obj);                                                 
    });  
})  

performCalculations();

            