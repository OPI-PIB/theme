import type { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";
import { sizes, sizesLabels, variants, variantsLabels } from "../../config";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: "Buttons",
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: variants,
      control: { type: "radio", labels: variantsLabels },
    },
    size: {
      options: sizes,
      control: { type: "radio", labels: sizesLabels },
    },
  },
  args: {
    variant: variants[0],
    size: sizes[0],
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
  },
};

export const Tertiary: Story = {
  args: {
    ...Default.args,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
  },
};
