import type { Meta, StoryObj } from "@storybook/angular";

import { MediaComponent } from "./media.component";

const meta: Meta<MediaComponent> = {
  title: "Media",
  component: MediaComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<MediaComponent>;

export const Media: Story = {
  args: {},
};
