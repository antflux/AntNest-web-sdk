const path = require('path');

module.exports = {
    entry: './lib/antnest.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'antnest.min.js',
        library : 'Antnest',
        libraryTarget : 'umd'
    }
};

