import type { Meta, StoryObj } from "@storybook/angular";

import { DefinitionListComponent } from "./definition-list.component";

const meta: Meta<DefinitionListComponent> = {
  title: "DefinitionList",
  component: DefinitionListComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<DefinitionListComponent>;

export const DefinitionList: Story = {
  args: {},
};
