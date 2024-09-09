"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import FilterGroup from "@/components/molecules/FilterGroup";
import Layout from "@/components/templates/Layout";
import ProductCardListContainer from "@/containers/ProductCardListContainer";
import type { Category, Condition } from "@/types";

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

type PagePrams = {
  slug: string;
};

const SearchPage = ({ params }: { params: PagePrams }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const slug: Category[] = Array.isArray(params.slug)
    ? (params.slug as Category[])
    : [];
  // 상품 상태를 쿼리로부터 얻는다
  const conditions = searchParams.getAll("condition") as Condition[];

  const handleChange = (selected: string[]) => {
    const currentParams = new URLSearchParams("");

    selected.forEach((elem) => {
      currentParams.append("condition", elem);
    });

    router.push(`${pathname}?${currentParams.toString()}`);
  };

  return (
    <Layout>
      <Box
        paddingLeft={{
          base: 2,
          md: 3,
        }}
        paddingRight={{
          base: 2,
          md: 3,
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Box marginBottom={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">톱</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">검색</Link>
            </BreadcrumbItem>
            {/* 빵 부스러기 리스트를 선택한 카테고리에서 생성 */}
            {slug.slice(0, slug.length - 1).map((category, i) => (
              <BreadcrumbItem key={i}>
                <Link href={`/search/${slug.slice(0, i + 1).join("/")}`}>
                  {categoryNameDict[category] ?? "Unknown"}
                </Link>
              </BreadcrumbItem>
            ))}
            {slug.length == 0 && <BreadcrumbItem>모두</BreadcrumbItem>}
            {slug.length > 0 && (
              <BreadcrumbItem>
                {categoryNameDict[slug[slug.length - 1]] ?? "Unknown"}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box as="aside" minWidth="200px" marginBottom={{ base: 2, md: 0 }}>
              {/* 상품 상태 필터 */}
              <FilterGroup
                title="상품 상태"
                items={[
                  { label: "새 상품", name: "new" },
                  { label: "중고 상품", name: "used" },
                ]}
                value={conditions}
                onChange={handleChange}
              />
              <Box paddingTop={1}>
                <Text as="h2" fontWeight="bold" variant="mediumLarge">
                  카테고리
                </Text>
                <Box>
                  <Link href="/search/" passHref>
                    모두
                  </Link>
                </Box>
                {/* 카테고리 링크 */}
                {Object.keys(categoryNameDict).map(
                  (category: string, i: number) => (
                    <Box key={i} marginTop={1}>
                      <Link href={`/search/${category}`} passHref>
                        {categoryNameDict[category as Category]}
                      </Link>
                    </Box>
                  )
                )}
              </Box>
            </Box>
            <Box>
              <Text
                as="h2"
                display={{ base: "block", md: "none" }}
                fontWeight="bold"
                variant="mediumLarge"
              >
                상품 목록
              </Text>
              {/*
                상품 카드 리스트 컨테이너
                상품 쿼리로부터 상품 카드 리스트를 표시
               */}
              <ProductCardListContainer
                category={slug.length > 0 ? slug[slug.length - 1] : undefined}
                conditions={conditions}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SearchPage;
