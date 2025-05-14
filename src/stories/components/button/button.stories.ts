import type { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";
import { sizes, sizesLabels } from "../../config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: "Buttons",
  component: ButtonComponent,
  argTypes: {
    size: {
      options: sizes,
      control: { type: "radio", labels: sizesLabels },
    },
  },
  args: {
    size: sizes[0],
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Button: Story = {
  args: {
    label: "Button",
  },
};
