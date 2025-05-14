import type { Meta, StoryObj } from "@storybook/angular";

import { LinkComponent } from "./link.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LinkComponent> = {
  title: "Links",
  component: LinkComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<LinkComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Link: Story = {
  args: {
    label: "Link",
  },
};
