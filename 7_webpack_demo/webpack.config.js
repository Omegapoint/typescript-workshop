module.exports = {
  context: __dirname + "/src",
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    "webpack/hot/only-dev-server",
    "./main"
  ],
  output: {
    path: __dirname + "/target",
    filename: "bundle.js"
  },
  plugins: [
    new (require("clean-webpack-plugin"))([__dirname + "/target"])
  ],
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: "react-hot!ts-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.(gif|png|jpe?g|svg|ttf|woff2?|eot)$/, loader: "file-loader"}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".ts", ".tsx"]
  },
  devtool: "source-map",
  devServer: {
    quiet: true,
    contentBase: "static"
  }
};
