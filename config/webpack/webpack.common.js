const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    main: "./src/ts/main.ts",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve("./src"),
          path.resolve("./node_modules")
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "postcss-loader",
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: "../_data/manifest.yml",
    }),
  ],
};
