const chalk = require('chalk');
const diagrams = require('./diagram');

// const main = async() => {
//     const nama = await diagram.tulisPertanyaan('masukkan nama customer');
//     const style = await diagram.tulisPertanyaan('masukkan style customer');
//     const gambar = await diagram.tulisPertanyaan('masukkan nama gambar');

//     simpanDiagram(nama, style, gambar);
// }

// main();

// batas


const main = async() => {
    const nama = await diagrams.tulisPertanyaan('Masukkan nama customer : ');
    const style = await diagrams.tulisPertanyaan('Masukkan nama Style : ');
    const gambar = await diagrams.tulisPertanyaan('Masukkan nama gambar : ');

    diagrams.simpanDiagram(nama, style, gambar);
}
main();