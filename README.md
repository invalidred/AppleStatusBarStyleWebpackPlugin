# AppleStatusBarWebpackPlugin

If you use the awesome [FaviconWebpackPlugin](https://github.com/jantimon/favicons-webpack-plugin) to generate favion and icons to support android and ios *Add To Home Screen* feature, you will notice the apple status bar style is set to 'black-translucent', which makes it a problem for web apps that have white or light background since you will notice a white bar bar on top of your Web App. This plugin solve this issue by giving your control over the status bar colour.

This plugin **should** be placed after **FaviconsWebpackPlugin** for it it work.

```javascript
    plugins: [
      // Enable globals
      new HtmlWebpackPlugin({
        title: 'Engage Mobile',
        template: paths.indexTemplate
      }),

      new FaviconsWebpackPlugin({
        logo: path.join(__dirname, '../../static/icons/144x144_360.png'),
        prefix: 'icons/',
        icons: {
          appleStartup: false
        }
      }),

      new AppleStatusBarPlugin('black')
    ]
```

It's a super simple plugin, all you need to do is specify the header color in the constructor

```javascript
  new AppleStatusBarPlugin('black')
```
