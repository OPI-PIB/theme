import type { Meta, StoryObj } from "@storybook/angular";

import { AlertComponent } from "./alert.component";

const meta: Meta<AlertComponent> = {
  title: "Alert",
  component: AlertComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Alert: Story = {
  args: {
    content: 'Treść komunikatu. <a href="#">Odnośnik</a>',
  },
};
