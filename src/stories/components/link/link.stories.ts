import type { Meta, StoryObj } from "@storybook/angular";

import { LinkComponent } from "./link.component";

const meta: Meta<LinkComponent> = {
  title: "Link",
  component: LinkComponent,
  argTypes: {},
};

export default meta;

type Story = StoryObj<LinkComponent>;

export const Link: Story = {
  args: {
    label: "Link",
  },
};
