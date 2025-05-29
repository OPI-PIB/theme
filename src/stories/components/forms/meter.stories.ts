import type { Meta, StoryObj } from "@storybook/angular";

import { MeterComponent } from "./meter.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MeterComponent> = {
  title: "Forms",
  component: MeterComponent,
  argTypes: {
    value: { control: "range" },
  },
  args: {
    value: 70,
  },
};

export default meta;
type Story = StoryObj<MeterComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Meter: Story = {
  args: {},
};
