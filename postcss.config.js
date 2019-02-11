module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['src/theme']
    }),
    require('postcss-mixins')({
      mixinsDir: ['src/theme/mixins']
    }),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true
      }
    }),
    require('postcss-inline-svg')(),
    require('postcss-svgo')()
  ]
}
