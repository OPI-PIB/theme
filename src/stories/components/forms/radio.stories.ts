import type { Meta, StoryObj } from "@storybook/angular";

import { RadioComponent } from "./radio.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<RadioComponent> = {
  title: "Forms",
  component: RadioComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<RadioComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Radio: Story = {
  args: {
    disabled: false,
  },
};
