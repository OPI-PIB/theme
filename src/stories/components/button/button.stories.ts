import type { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  title: "Button",
  component: ButtonComponent,
  argTypes: {},
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Button: Story = {
  args: {
    label: "button",
  },
};
