import { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    content: {
      control: { type: "text" },
      description: "배지 테스트",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배지 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Orange: Story = {
  args: { content: "1", backgroundColor: "#ed9f28" },
};

export const Green: Story = {
  args: { content: "2", backgroundColor: "#32bf00" },
};

export const Red: Story = {
  args: { content: "10", backgroundColor: "#d4001a" },
};
