module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      path: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: `${__dirname}/tsconfig.e2e.json`,
              // skip typechecking for speed
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
    ],
  },
};
