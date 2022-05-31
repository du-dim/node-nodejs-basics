const args = process.argv.slice(2);

export const parseArgs = () => {
    const arr = args.join(' ').split('--').slice(1).map(arg => arg.trim().split(' ').join(' is ')); 
    console.log(arr.join(', '));
};
parseArgs();