"use client";

import Link from "next/link";
import styled from "styled-components";
import AppLogo from "@/components/atoms/AppLogo";
import Button from "@/components/atoms/Button";
import {
  SearchIcon,
  PersonIcon,
  ShoppingCartIcon,
} from "@/components/atoms/IconButton";
import ShapeImage from "@/components/atoms/ShapeImage";
import Spinner from "@/components/atoms/Spinner";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import BadgeIconButton from "@/components/molecules/BadgeIconButton";
import { useAuthContext } from "@/contexts/AuthContext";
import { useShoppingCartContext } from "@/contexts/ShoppingCartContext";

// 헤더 루트
const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

// 내비게이션
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;

// 내비게이션 링크
const NavLink = styled.span`
  display: inline;
`;

/**
 * 헤더
 */
const Header = () => {
  const { cart } = useShoppingCartContext();
  const { authUser, isLoading } = useAuthContext();

  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Link href="/" passHref>
              <AppLogo />
            </Link>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search" passHref>
                모두
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/clothes" passHref>
                의류
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/book" passHref>
                책
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", md: "block" }}>
              <Link href="/search/shoes" passHref>
                신발
              </Link>
            </Box>
          </NavLink>
        </Nav>
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Box display={{ base: "block", md: "none" }}>
              <Link href="/search" passHref>
                <SearchIcon />
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart" passHref>
              <BadgeIconButton
                icon={<ShoppingCartIcon size={24} />}
                size="24px"
                badgeContent={cart.length === 0 ? undefined : cart.length}
                badgeBackgroundColor="#ed9f28"
              />
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              // 인증된 상태라면 아이콘을 표시
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <ShapeImage
                      shape="circle"
                      src={authUser.profileImageUrl}
                      width={24}
                      height={24}
                      data-testid="profile-shape-image"
                      alt={""}
                    />
                  </Link>
                );
              } else if (isLoading) {
                // 로드 중에는 스피너를 표시
                return <Spinner size={20} strokeWidth={2} />;
              } else {
                // 로그인 하지 않은 경우에는 아이콘을 표시
                return (
                  <Link href="/signin" passHref>
                    <PersonIcon size={24} />
                  </Link>
                );
              }
            })()}
          </NavLink>
          <NavLink>
            <Button href="/sell" as="a">
              등록
            </Button>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
