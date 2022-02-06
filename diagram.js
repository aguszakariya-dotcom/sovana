const chalk = require('chalk');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dirPath = './data';
// 
const dataPath = './data/diagram.json';
if(!fs.existsSync('dataPath')) {
    fs.writeFileSync('dataPath', '[]', 'utf8');
}
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
}

const simpanDiagram = (nama, style, gambar) => {
        
    const diagram = {nama, style, gambar};
    const fileBuffer = fs.readFileSync('data/diagram.json', 'utf8');
    const diagrams = JSON.parse(fileBuffer);
    diagrams.push(diagram);
    fs.writeFileSync('data/diagram.json', JSON.stringify(diagrams));
    console.log(chalk.redBright('terimakasih, diagram berhasil ditambahkan'));
    rl.close();
}
module.exports = {tulisPertanyaan, simpanDiagram};