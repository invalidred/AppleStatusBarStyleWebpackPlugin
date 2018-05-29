function AppleStatusBarStyleWebpackPlugin(style = 'black') {
  this.style = style;
}

AppleStatusBarStyleWebpackPlugin.prototype.apply = function apply(compiler) {
  const self = this;
  if (compiler.hooks) {
    // webpack 4 support
    compiler.hooks.compilation.tap(
      'AppleStatusBarStyleWebpackPlugin',
      compilation => {
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
          'FaviconsWebpackPostProcessPlugin',
          self.changeAppleStatusBarStyleMeta.bind(self)
        );
      }
    );
    return;
  }

  // Webpack 3 and below
  compiler.plugin('compilation', compilation => {
    compilation.plugin(
      'html-webpack-plugin-after-html-processing',
      self.changeAppleStatusBarStyleMeta.bind(self)
    );
  });
};

AppleStatusBarStyleWebpackPlugin.prototype.changeAppleStatusBarStyleMeta = function changeAppleStatusBarStyleMeta(
  data,
  callback
) {
  const html = data.html.replace(
    '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
    `<meta name="apple-mobile-web-app-status-bar-style" content="${
      this.style
    }">`
  );
  callback(null, Object.assign({}, data, { html }));
};

module.exports = AppleStatusBarStyleWebpackPlugin;

