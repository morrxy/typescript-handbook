const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const glob = require('glob')
const fs = require('fs')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
}

const commonConfig = {
  output: {
    filename: 'js/[name].js?[chunkhash:4]',
    path: PATHS.build,
    publicPath: '../'
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: PATHS.app
      // },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {}
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: "awesome-typescript-loader",
      //   include: PATHS.app
      // },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: PATHS.app,
        options: {
          transpileOnly: true // HMR doesn't work without this
        }
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: false
    })
  ]
}

const developmentConfig = {
  devServer: {
    stats: 'errors-only',
    publicPath: '/'
  },

  devtool: 'source-map',
  // devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

const productionConfig = {
  optimization: {
    minimizer: []
  },

  module: {
    rules: []
  },

  plugins: [
    new CleanWebpackPlugin([PATHS.build])
  ]
}

module.exports = (mode) => {
  const jsEntryList = glob.sync(`${PATHS.app}/**/*.ts`, {
    nodir: true
  })

  const pages = jsEntryList.map(js => {
    const jsPath = path.parse(js)
    const name = jsPath.name
    const htmlFilePath = `${jsPath.dir}/${name}.html`
    const subPath = getSubPath(jsPath.dir)

    try {
      fs.accessSync(htmlFilePath)

      return {
        entry: {
          [name]: js
        },
        plugins: [
          new HtmlWebpackPlugin({
            filename: `${subPath}${name}.html`,
            template: htmlFilePath
          })
        ]
      }
    } catch (err) {
      return {
        entry: {
          [name]: js
        },
        plugins: [
          new HtmlWebpackPlugin({
            filename: `${subPath}${name}.html`
          })
        ]
      }
    }
  })

  const config = mode === 'production' ? productionConfig : developmentConfig

  const configList = pages.map(page => merge(commonConfig, config, page, {
    mode
  }))

  console.log('config list: ', configList.length)

  return configList
}

function getSubPath (dir) {
  const dirList = dir.split('/')
  const srcIndex = dirList.indexOf('src')
  const result = dirList.slice(srcIndex + 1).join('/')
  return result === '' ? '' : `${result}/`
}
