module.exports = {
  target: 'node',
  externals: [require('webpack-node-externals')()],
  context: __dirname + '/src',
  entry: {
    index: "./index.ts"
  },
  output: {
    library: 'Langue',
    libraryTarget: 'umd',
    path: __dirname + '/dst',
    filename: './[name].js'
  },
  resolve: { extensions: ['.js', '.ts'] },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, use: [
        {
          loader: 'babel-loader',
          options: { presets: [['env', { targets: { browsers: ['last 2 versions'] } }]] }
        },
        'ts-loader'
      ] },
      { test: /\.gql$/, use: 'gql-loader' },
      { test: /\.json$/, use: 'json-schema-loader' }
    ]
  },
  watchOptions: {
    ignored: /dst/
  },
  plugins: []
};
