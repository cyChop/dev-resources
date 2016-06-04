const pkg = require('./package.json');

module.exports = {
    sonar: {
        host: {
            url: 'https://sonar.keyboardplaying.org'
        },
        projectKey: 'org.keyboardplaying.js:' + pkg.name,
        projectName: pkg.name,
        projectVersion: pkg.version,
        sources: 'src',
        language: 'js',
        sourceEncoding: 'UTF-8',
        // FIXME add test coverage
        exec: {
            maxBuffer: 1024 * 1024
        }
    }
};