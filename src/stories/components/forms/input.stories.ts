import type { Meta, StoryObj } from "@storybook/angular";

import { InputComponent } from "./input.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputComponent> = {
  title: "Forms",
  component: InputComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<InputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {},
};
