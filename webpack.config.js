const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js' /*referencia al archivo principal*/,
  output: {
    /*resolve permite detectar el __dirname directorio en el que estamos y pasandole un directorio para guardar los archivos*/
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' /* filename es el nombre del archivo final */,
  } /*output donde se guardan los archivos resultantes cuando se haga la compilación*/,
  resolve: {
    extensions: ['.js', '.jsx'],
  } /*resuelve las extensiones que usarán en el proyecto*/,
  module: {
    rules: [
      {
        /* Regla principal */ test: /\.(js|jsx)$/ /* Identificación de los archivos js y jsx */,
        exclude: /node_modules/ /* Excluye la carpeta node_modules */,
        use: {
          loader:
            'babel-loader' /* Hay que usar el loader para que babel haga el trabajo */,
        },
      },
      { /* Nueva regla */
        test: /\.html$/ /* Identificación de los archivos html */,
        use: {
          loader: 'html-loader' /* Loader de html */,
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, 'node_modules', 'font-awesome'),
        use: ['babel-loader', 'react-svg-loader'],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'node_modules', 'font-awesome'),
        use: [{
          loader: 'file-loader',
          options: {
            jsx: true,
          },
        }],
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
    ],
  }, /* Dicta las reglas necesarias para el proyecto */
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', /* Donde esta ubicado el template */
      filename: './index.html', /* Nombre */
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ] /* Añada los plugins que se necesitan */,
};
