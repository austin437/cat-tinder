module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@app': './app',
        },
      },
    ],
    ['module:react-native-dotenv'],
    ['react-native-reanimated/plugin'],
  ],
};
