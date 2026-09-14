module.exports = require('./webpack.config');
module.exports.mode = 'production';
module.exports.devtool = false;
module.exports.remotes = {
  wordToPdf: 'https://deepak-devadiga.github.io/word-to-pdf-remote/remoteEntry.js',
};
