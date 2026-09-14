module.exports = require('./webpack.config');
module.exports.mode = 'production';
module.exports.devtool = false;
module.exports.remotes = {
  mfe1: 'https://deepak-devadiga.github.io/word-to-pdf-remote/remoteEntry.js',
};
