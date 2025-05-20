import type { Meta, StoryObj } from "@storybook/angular";

import { TableComponent } from "./table.component";

const meta: Meta<TableComponent> = {
  title: "Table",
  component: TableComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Table: Story = {
  args: {},
};
