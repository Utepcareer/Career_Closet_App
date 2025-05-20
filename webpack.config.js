const path = require('path');

module.exports = {
    mode: 'development',  // Or 'production' based on your needs
    entry: './public/index.js',  // Make sure this entry file exists
    output: {
        path: path.resolve(__dirname, 'public'),  // This sets the output folder to `public`
        filename: 'bundle.js'  // This will create or overwrite `bundle.js` in `public`
    },
    watch: true  // This will auto-rebuild when files change
};