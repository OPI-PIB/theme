import type { Meta, StoryObj } from "@storybook/angular";

import { DataListComponent } from "./data-list.component";

const meta: Meta<DataListComponent> = {
  title: "Forms",
  component: DataListComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<DataListComponent>;

export const DataList: Story = {
  args: {},
};
