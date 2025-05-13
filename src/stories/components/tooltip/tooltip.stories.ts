import type { Meta, StoryObj } from "@storybook/angular";

import { TooltipComponent } from "./tooltip.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TooltipComponent> = {
  title: "Tooltips",
  component: TooltipComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<TooltipComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tooltip: Story = {
  args: {},
};
