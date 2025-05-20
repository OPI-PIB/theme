import type { Meta, StoryObj } from "@storybook/angular";

import { AccordionComponent } from "./accordion.component";

const meta: Meta<AccordionComponent> = {
  title: "Accordion",
  component: AccordionComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Accordion: Story = {
  args: {},
};
