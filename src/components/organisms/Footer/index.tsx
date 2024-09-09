"use client";

import Link from "next/link";
import styled from "styled-components";
import { GitHubIcon } from "@/components/atoms/IconButton";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/**
 * 푸터
 */
const Footer = () => {
  return (
    <footer>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box
          minWidth={{ base: "100%", md: "120px" }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                톱
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                채용
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                알림
              </Link>
            </Box>
          </nav>
        </Box>
        <Box
          minWidth={{ base: "100%", md: "120px" }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                사용 규약
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                개인 정보 정책
              </Link>
            </Box>
            <Box marginBottom={2}>
              <Link href="/" passHref>
                배송 및 반품
              </Link>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ base: "100%", md: "120px" }}>
          <nav>
            <Anchor
              as="a"
              href="https://github.com/moseskim/ts-nextbook-app"
              target="_blank"
            >
              <GitHubIcon size={22} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box paddingTop={3} paddingBottom={2}>
        <Text>© 2021 Gijutsuhyoronsha Co., Ltd.. All rights reserved.</Text>
      </Box>
    </footer>
  );
};

export default Footer;
