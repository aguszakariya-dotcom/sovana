const chalk = require('chalk');
const fs = require('fs');


const dirPath = './data';
// 
const dataPath = './data/diagram.json';
if(!fs.existsSync('dataPath')) {
    fs.writeFileSync('dataPath', '[]', 'utf8');
}


const simpanDiagram = (nama, style, gambar) => {
        
    const diagram = {nama, style, gambar};
    const fileBuffer = fs.readFileSync('data/diagram.json', 'utf8');
    const diagrams = JSON.parse(fileBuffer);
    // cek duplikat
    const duplikat = diagrams.find(d => d.nama === nama);
    if(duplikat) {
        console.log(chalk.red(`${nama} sudah ada`));
        return;
    }
    diagrams.push(diagram);
    fs.writeFileSync('data/diagram.json', JSON.stringify(diagrams));
    console.log(chalk.greenBright('terimakasih, diagram berhasil ditambahkan'));
    
}
module.exports = {simpanDiagram};