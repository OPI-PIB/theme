import type { Meta, StoryObj } from "@storybook/angular";

import { ProgressComponent } from "./progress.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ProgressComponent> = {
  title: "Forms",
  component: ProgressComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<ProgressComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Progress: Story = {
  args: {},
};
