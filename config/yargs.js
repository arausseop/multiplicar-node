const opciones = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo con la tabla de multiplicar especificada', opciones)
    .help()
    .argv;

module.exports = {
    argv
}