/*
Create by Vincent on 2018/06/19

 */


 // px2rem设置
 /*
 * 750px(iphone6)宽度为基准
 * */
 const viewportWidth = 750
 const viewportHeight = 1334
 const unitPrecision = 5
 const viewportUnit = "vw"
module.exports.dev_less_to_css =  {
  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('autoprefixer')({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
          require("postcss-aspect-ratio-mini"),
          require("postcss-write-svg")({ utf8: false }),
          require("postcss-cssnext"),
          require("postcss-px-to-viewport")({
              viewportWidth,
              viewportHeight,
              unitPrecision,
              viewportUnit,
              selectorBlackList: ['.ignore', '.hairlines'],
              minPixelValue: 1,
              mediaQuery: false
          }),
          require("postcss-viewport-units"),
          require("cssnano")({
              preset: "advanced",
              autoprefixer: false,
              "postcss-zindex": false
          })

        ],
      },
    },
    require.resolve('less-loader')
  ],
}


const paths = require('./paths');
const getClientEnvironment = require('./env');

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
    { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

module.exports.prod_less_to_css = {
  test: /\.(css|less)$/,
  loader: require('extract-text-webpack-plugin').extract(
    Object.assign(
      {
        fallback: {
          loader: require.resolve('style-loader'),
          options: {
            hmr: false,
          },
        },
        use: [
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: shouldUseSourceMap,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                require("postcss-aspect-ratio-mini"),
                require("postcss-write-svg")({ utf8: false }),
                require("postcss-cssnext"),
                require("postcss-px-to-viewport")({
                    viewportWidth,
                    viewportHeight,
                    unitPrecision,
                    viewportUnit,
                    selectorBlackList: ['.ignore', '.hairlines'],
                    minPixelValue: 1,
                    mediaQuery: false
                }),
                require("postcss-viewport-units"),
                require("cssnano")({
                    preset: "advanced",
                    autoprefixer: false,
                    "postcss-zindex": false
                })

              ],
            },
          },
          require.resolve('less-loader')
        ],
      },
      extractTextPluginOptions
    )
  ),
  // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
}
