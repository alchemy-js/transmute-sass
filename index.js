const { StringDecoder } = require('string_decoder');

const sass = require('node-sass');

const decoder = new StringDecoder('utf8');

const transmuteSass = options => (file, done) => {
  const { content, ext, name } = file;
  if (ext === '.scss' && name === options.target && content.length > 0) {
    const scssString = decoder.write(content);
    const { css } = sass.renderSync({ data: scssString, ...options.sass });
    const transmuted = decoder.write(css);
    return done({ content: transmuted, ext: '.css' });
  }
  if (ext === '.scss' && name !== options.target) {
    return done({ ignore: true });
  }
  return done();
};

module.exports = transmuteSass;
