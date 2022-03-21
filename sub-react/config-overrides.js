const { name } = require('./package.json');
console.log(name)

module.exports = {
  webpack: function override(config, env) {
    config.entry = config.entry.filter(
      (e) => !e.includes('webpackHotDevClient')
    );

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.historyApiFallback = true;
      config.watchContentBase = false;
      config.liveReload = false;
      config.open = false;
      config.hot = false;
      config.disableHostCheck = true;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
