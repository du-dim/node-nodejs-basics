const data = process.env;
const list = [];
export const parseEnv = () => {     
    for (const key in data) {
        if (key.includes('RSS_')) list.push(`${key} = ${data[key]}`);
    }    
    list.length ? console.log(list.join('; ')) : false;
};
parseEnv();