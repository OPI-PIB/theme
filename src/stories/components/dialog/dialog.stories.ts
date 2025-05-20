import type { Meta, StoryObj } from "@storybook/angular";

import { DialogComponent } from "./dialog.component";

const meta: Meta<DialogComponent> = {
  title: "Dialog",
  component: DialogComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<DialogComponent>;

export const Dialog: Story = {
  args: {},
};
