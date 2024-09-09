import { Meta, StoryObj } from "@storybook/react";
import ShapeImage from "./index";

const meta = {
  title: "Atoms/ShapeImage",
  component: ShapeImage,
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: { type: "radio" },
      defaultValue: "square",
      description: "이미지 형태",
      table: {
        type: { summary: "circle | square" },
        defaultValue: { summary: "square" },
      },
    },
    src: {
      control: { type: "text" },
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} as Meta<typeof ShapeImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    src: "/images/sample/1.jpg",
    shape: "circle",
    width: 300,
    height: 300,
  },
};

export const Square: Story = {
  args: {
    src: "/images/sample/1.jpg",
    shape: "square",
    width: 300,
    height: 300,
  },
};
