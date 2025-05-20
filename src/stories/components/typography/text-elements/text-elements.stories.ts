import type { Meta, StoryObj } from "@storybook/angular";
import { TextElementsComponent } from "./text-elements.component";

const meta: Meta<TextElementsComponent> = {
  title: "Typography",
  component: TextElementsComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<TextElementsComponent>;

export const TextElements: Story = {
  args: {},
};
