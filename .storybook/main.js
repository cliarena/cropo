const macrosPlugin = require("vite-plugin-babel-macros");
const windiCss = require("vite-plugin-windicss");

module.exports = {
  stories: [ "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true, interactionsDebugger: true, // 👈 enable playback controls

  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins,
      macrosPlugin.default(),
      windiCss.default(),
      // svgrPlugin({
      //   svgrOptions: {
      //     icon: true,
      //   },
      // })
    ];

    // return the customized config
    return config;
  },
};
