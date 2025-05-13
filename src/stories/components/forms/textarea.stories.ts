import type { Meta, StoryObj } from "@storybook/angular";

import { TextareaComponent } from "./textarea.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TextareaComponent> = {
  title: "Forms",
  component: TextareaComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<TextareaComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Textarea: Story = {
  args: {},
};
