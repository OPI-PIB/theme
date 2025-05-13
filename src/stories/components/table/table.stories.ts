import type { Meta, StoryObj } from "@storybook/angular";

import { TableComponent } from "./table.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TableComponent> = {
  title: "Tables",
  component: TableComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<TableComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Table: Story = {
  args: {},
};
