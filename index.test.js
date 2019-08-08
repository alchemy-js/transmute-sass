
const transmuteSass = require('./index');

describe('transmuteSass', () => {
  it('calls done with arguments', () => {
    const done = jest.fn();
    const transmuter = transmuteSass({
      target: 'main',
      sass: { includePaths: ['./'] },
    });
    const file = {
      name: 'main',
      content: '$red:red;p{color:$red;}',
      ext: '.scss',
    };
    transmuter(file, done);
    expect(done).toBeCalledWith({
      content: 'p {\n  color: red; }\n', ext: '.css',
    });
  });

  it('calls done with ignore property', () => {
    const done = jest.fn();
    const file = { name: 'navbar', ext: '.scss' };
    const transmuter = transmuteSass({
      target: 'main',
      sass: { includePaths: ['./'] },
    });
    transmuter(file, done);
    expect(done).toBeCalledWith({ ignore: true });
  });

  it('calls done without arguments', () => {
    const done = jest.fn();
    const file = { ext: '.js' };
    const transmuter = transmuteSass({
      target: 'main',
      sass: { includePaths: ['./'] },
    });
    transmuter(file, done);
    expect(done).toBeCalledWith();
  });
});
