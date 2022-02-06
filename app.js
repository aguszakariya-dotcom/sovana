const yargs = require("yargs");
const chalk = require("chalk");
const diagrams = require("./diagram");


yargs.command({
    command: "add",
    describe: "Add new diagram",
    builder: {
        nama: {
            describe: "Nama customer",
            demandOption: true,
            type: "string"
        },
        style: {
            describe: "Style customer",
            type: "string",
            demandOption: true,
        },
        gambar: {
            describe: "Gambar diagram",
            demandOption: true,
            type: "string"
        },
    },
    handler: function (argv) {
        diagrams.simpanDiagram(argv.nama, argv.style, argv.gambar);
        
    },
});
yargs.parse();