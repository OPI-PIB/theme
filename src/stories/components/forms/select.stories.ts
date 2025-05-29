import type { Meta, StoryObj } from "@storybook/angular";

import { SelectComponent } from "./select.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SelectComponent> = {
  title: "Forms",
  component: SelectComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<SelectComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Select: Story = {
  args: {
    disabled: false,
  },
};
