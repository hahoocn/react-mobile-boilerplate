const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif'
      ]
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot'
      ]
    },
    svg: {
      extension: 'svg',
    },
    styleModules: {
      extensions: ['css'],
      filter: function (module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.styleLoaderFilter(module, regex, options, log);
        }
        return regex.test(module.name);
      },
      path: function (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.styleLoaderPathExtractor(module, options, log);
        }
        return module.name;
      },
      parser: function (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.cssModulesLoaderParser(module, options, log);
        }
        return module.source;
      }
    }
  }
};
