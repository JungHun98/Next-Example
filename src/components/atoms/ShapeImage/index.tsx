"use client";

import Image, { ImageProps } from "next/image";
import styled from "styled-components";

type ImageShape = "circle" | "square";
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "0")};
`;

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;

  return <ImageWithShape shape={shape} {...imageProps} alt="" />;
};

export default ShapeImage;
