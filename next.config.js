module.exports = {
  images: {
    domains: ['raw.githubusercontent.com']
  },
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
}
