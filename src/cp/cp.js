import { spawn } from 'child_process';
import path from 'path';
const linkFile = path.join('files', 'script.js');

export const spawnChildProcess = async (args) => {
    const child = spawn('node ' + linkFile, args, {shell: true});
    
    child.stdout.on('data', data => {        
        console.log(`${data}`);            
    }); 
    process.stdin.on('data', data => {                     
        child.stdin.write(data);        
    });
    child.on('close', () => {
        process.exit();
    });                    
};

spawnChildProcess(['Test1', 'Test2', 'Test3']);