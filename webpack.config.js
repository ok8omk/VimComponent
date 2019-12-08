const path = require("path");

module.exports = (_, argv) => {
  let config = {
    entry: {
      dist: path.join(__dirname, "/src/index.tsx")
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        }
      ]
    },
    output: {
      path: __dirname,
      filename: "[name]/index.js"
    }
  };

  switch (argv.mode) {
    case "production": {
      config.entry.docs = path.join(__dirname, "/docs/src/index.tsx");
      return config;
    }
    default: {
      config.entry.dev = path.join(__dirname, "/dev/src/index.tsx");
      config.devtool = "source-map";
      config.module.rules.push({
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      });
      config.devServer = {
        contentBase: path.join(__dirname, "dev"),
        hot: true,
        open: true,
        inline: true,
        compress: true,
        watchContentBase: true,
        port: 9000
      };
      return config;
    }
  }
};
