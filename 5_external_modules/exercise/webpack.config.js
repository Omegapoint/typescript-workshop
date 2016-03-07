module.exports = {
    context: __dirname + "/src",
    entry: './app.ts',
    output: {
        path: __dirname + "/js",
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devtool: "source-map"
}