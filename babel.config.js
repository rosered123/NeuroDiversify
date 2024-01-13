module.exports = function(api) {
  // project: {
  //   ios: {},
  //   android: {},
  // },
  // assets: ['./assets/fonts'],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
