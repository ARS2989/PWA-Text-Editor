const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};

// ES6+
import WebpackPwaManifest from 'webpack-pwa-manifest'
 
// ES5
var WebpackPwaManifest = require('webpack-pwa-manifest')
 

 
plugins: [
  new WebpackPwaManifest({
    name: 'My Progressive Web App',
    short_name: 'MyPWA',
    description: 'My awesome Progressive Web App!',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      {
        src: path.resolve('src/assets/large-icon.png'),
        size: '1024x1024' // you can also use the specifications pattern
      },
      {
        src: path.resolve('src/assets/maskable-icon.png'),
        size: '1024x1024',
        purpose: 'maskable'
      }
    ]
  })
]
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // ... other webpack configuration settings ...

  plugins: [
    new GenerateSW({
      // Configuration options for Workbox
      // ...
    })

    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    }
    
    fetchData().then(result => {
      console.log(result);
    });