import type { Meta, StoryObj } from "@storybook/angular";

import { AlertComponent } from "./alert.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AlertComponent> = {
  title: "Alerts",
  component: AlertComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<AlertComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Alert: Story = {
  args: {
    content: 'Treść komunikatu. <a href="#">Odnośnik</a>',
  },
};
