import { Meta, StoryObj } from "@storybook/react";
import SigninForm from "./index";

const meta = {
  title: "Organisms/SigninForm",
  argTypes: {
    onSignin: {
      description: "로그인 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof SigninForm>;

export default meta;

type Story = StoryObj<typeof meta>;
const Template: Story = {
  render: (args) => <SigninForm {...args} />,
};

export const Form: Story = { ...Template };
