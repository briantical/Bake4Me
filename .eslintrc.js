module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/constants',
          _reduxmgt: './src/reduxmgt',
          _actions: './src/reduxmgt/actions',
          _reducers: './src/reduxmgt/reducers',
          _store: './src/reduxmgt/store',
          _routes: './src/routes',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
    },
  },
};
