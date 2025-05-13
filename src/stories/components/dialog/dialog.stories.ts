import type { Meta, StoryObj } from "@storybook/angular";

import { DialogComponent } from "./dialog.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DialogComponent> = {
  title: "Dialogs",
  component: DialogComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<DialogComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dialog: Story = {
  args: {},
};
