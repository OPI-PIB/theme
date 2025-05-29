import type { Meta, StoryObj } from "@storybook/angular";

import { CheckboxComponent } from "./checkbox.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CheckboxComponent> = {
  title: "Forms",
  component: CheckboxComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Checkbox: Story = {
  args: {
    disabled: false,
  },
};
