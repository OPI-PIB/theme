import type { Meta, StoryObj } from "@storybook/angular";
import { HeadingsComponent } from "./headings.component";

const meta: Meta<HeadingsComponent> = {
  title: "Typography",
  component: HeadingsComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<HeadingsComponent>;

export const Headings: Story = {
  args: {},
};
