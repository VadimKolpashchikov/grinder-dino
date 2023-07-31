const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./web/src/main.js"
  },
  devtool: "source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./web/build/"),
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 1024000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "ignore-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!images", "!images/**/*"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./web/src/images",
          to: "./images/[path][name].webp",
          toType: "template",
          globOptions: {
            copyUnmodified: true,
            force: false,
            ignore: ["/**/*.svg"],
          },
        },
        {
          from: "./web/src/images",
          to: "./images",
          globOptions: {
            copyUnmodified: true,
            force: false,
          },
        },
      ],
    }),
  ],
};
