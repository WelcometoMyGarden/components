module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'

    // Make whatever fine-grained changes you need
    config.resolve.alias['@'] = `${__dirname}/../src`;

    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query
    };
    config.module.rules.unshift({
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    });

    config.module.rules = [{ oneOf: config.module.rules }];

    return config;
  }
};
