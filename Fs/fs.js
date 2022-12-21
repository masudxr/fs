import fs from 'fs';

// Write Array of object in the CSV file//

let data = [];
class person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
// data.push(new person('id', 'Masud', 'age'));
data.push(new person(1, 'Masud', 2229));
data.push(new person(2, 'Rana', 2329));
data.push(new person(3, 'Shihab', 129));
data.push(new person(4, 'Mridha', 290));
data.push(new person(5, 'Methu', 200));
data.push(new person(6, 'Masud', 2229));

const filewrite = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(file, content, (err) => {
            if (err) reject(err)
            if(!err) resolve('Append Success')
        })
    })
};
// call new promise function within the async function using await. and send path name and content data.
// using for loop to send the content data 1 by 1. loop call the promise function as length
async function writecall(data) {
    // console.log('data:', data)
    for (let i = 0; i < data.length; i++) {
        // console.log('data Length:', data.length)
        let content = data[i].id + ',' + data[i].name + ',' + data[i].age + '\n';
        // console.log('Content:', content)
        await filewrite('mov2.csv', content);
    }
}
// send Array of object data.
writecall(data).catch((err) => {
    console.log('error:', err)
})
