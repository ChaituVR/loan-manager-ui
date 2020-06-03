module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true
          data: '@import "antd/dist/antd.css";',
        },
        sassLoaderOptions: {
          data: '@import "../index.scss";',
        }
      }
    }
  ],
};
