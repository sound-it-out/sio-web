module.exports = {
    lintOnSave: 'error',
    productionSourceMap: true,
    pages: {
        app: {
            entry: './src/main.ts',
            template: './public/index.html',
            filename: 'index.html',
            title: 'Project Magnum',
            chunks: [ 'chunk-vendors', 'chunk-common', 'app' ]
        },
        signedin: {
            entry: './src/signed-in.ts',
            template: './public/signed-in.html',
            filename: 'signed-in.html',
            title: 'Signed in - Project Magnum',
            chunks: [ 'chunk-vendors', 'chunk-common', 'signedin' ]
        },
        signinrefresh: {
            entry: './src/sign-in-refresh.ts',
            template: './public/sign-in-refresh.html',
            filename: 'sign-in-refresh.html',
            title: 'Signing in... - Project Magnum',
            chunks: [ 'chunk-vendors', 'chunk-common', 'signinrefresh' ]
        }
    }
}