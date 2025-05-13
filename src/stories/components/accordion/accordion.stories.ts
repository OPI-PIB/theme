import type { Meta, StoryObj } from "@storybook/angular";

import { AccordionComponent } from "./accordion.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AccordionComponent> = {
  title: "Accordions",
  component: AccordionComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<AccordionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Accordion: Story = {
  args: {},
};
