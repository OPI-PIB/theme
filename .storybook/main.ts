import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.ts"],
  staticDirs: ["../src/stories/assets"],
  core: {
    disableTelemetry: true,
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};
export default config;
