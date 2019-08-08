# Transmute Sass
Transmutes Sass for the [Alchemy static site generator](https://github.com/alchemy-js/alchemy).

- Transmutes Sass content to CSS
- Transmutes file extension from .scss to .css
- Options object requires a `target` entry file for Sass compilation
- Options object also accepts all valid `node-sass` options

## Installation
`npm i @alchemy/transmute-sass`

## API

This is a wrapper around the `node-sass` [package](https://www.npmjs.com/package/node-sass), accepting all valid options as an object.

```javascript
const Alchemy = require('@alchemy-js/alchemy');
const sass = require('@alchemy-js/transmute-sass');

Alchemy({
  /* file paths */
}).clean()
  .transmute(sass({
    /* required target/entry to compile sass*/
    target: 'main',
    /* accepts valid node-sass options as an object */
    sass: { includePaths: ['./data/styles'] },
  })
  .build()
```

## License
MIT
