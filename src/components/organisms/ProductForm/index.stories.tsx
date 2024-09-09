import { Meta, StoryObj } from "@storybook/react";
import ProductForm from "./index";

const meta = {
  title: "Organisms/ProductForm",
  component: ProductForm,
  argTypes: {
    onProductSave: {
      description: "등록 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof ProductForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = { render: (args) => <ProductForm {...args} /> };

export const Form: Story = { ...Template };
