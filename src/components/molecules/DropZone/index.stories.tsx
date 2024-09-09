/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Meta, StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import Dropzone from "./index";
import Button from "@/components/atoms/Button";
import Box from "@/components/layout/Box";

type FileType =
  | "image/png"
  | "image/jpeg"
  | "image/jpg"
  | "image/gif"
  | "video/mp4"
  | "video/quicktime"
  | "application/pdf";

interface DropzoneProps {
  value?: File[];
  name?: string;
  acceptedFileTypes?: FileType[];
  width?: number | string;
  height?: number | string;
  hasError?: boolean;
  onDrop?: (files: File[]) => void;
  onChange?: (files: File[]) => void;
}

const meta = {
  title: "Molecules/Dropzone",
  component: Dropzone,
  argTypes: {
    height: {
      control: { type: "number" },
      description: "세로폭",
      table: {
        type: { summary: "number" },
      },
    },
    width: {
      control: { type: "text" },
      description: "가로폭",
      table: {
        type: { summary: "number | string" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "변형 에러 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    acceptedFileTypes: {
      control: { type: "object" },
      description: "받은 파일 타입",
      table: {
        type: { summary: "string[]" },
      },
    },
    onDrop: {
      description: "파일이 드롭 입력되었을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
    onChange: {
      description: "파일이 입력되었을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof Dropzone>;

export default meta;

const Template: StoryFn<DropzoneProps> = (args) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (newFiles: File[]) => {
    setFiles(newFiles);
    if (args.onDrop) {
      args.onDrop(newFiles);
    }
  };

  const fetchData = async () => {
    const res = await fetch("/images/1.jpg");
    const blob = await res.blob();
    const file = new File([blob], "1.png", { type: blob.type });

    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const clearImages = () => {
    setFiles([]);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>이미지를 추가</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>모든 이미지를 클리어</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        ))}
      </Box>
    </>
  );
};

export const WithControl = Template.bind({});
WithControl.args = {
  height: 200,
  width: "100%",
  acceptedFileTypes: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
  hasError: false,
};
