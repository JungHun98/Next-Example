"use client";

import Link from "next/link";
import BreadcrumbItem from "@/components/atoms/BreadcrumbItem";
import Separator from "@/components/atoms/Separator";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import ProductCard from "@/components/organisms/ProductCard";
import UserProfile from "@/components/organisms/UserProfile";
import AddToCartButtonContainer from "@/containers/AddToCartButtonContainer";
import useProduct from "@/services/products/use-product";
import { ApiContext, Category, Product } from "@/types";

interface ProductDetailContainer {
  id: number;
  initial: Product;
}

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

function ProductDetailContainer({ id, initial }: ProductDetailContainer) {
  const data = useProduct(context, { id, initial });
  const product = data.product ?? initial;

  return (
    <Flex
      paddingTop={2}
      paddingBottom={2}
      paddingLeft={{ base: 2, md: 0 }}
      paddingRight={{ base: 2, md: 0 }}
      justifyContent="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">톱</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/search">검색</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/search/${product.category}`}>
              {categoryNameDict[product.category as Category]}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{product.title}</BreadcrumbItem>
        </Breadcrumb>
        <Flex paddingTop={2} paddingBottom={1} justifyContent="center">
          <ProductCard
            variant="detail"
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </Flex>
        <Separator />
        <Box paddingTop={1}>
          <Text as="h2" variant="large" marginTop={0}>
            게시자
          </Text>
          <Link href={`/users/${product.owner.id}`}>
            {/* 사용자 프로필 */}
            <UserProfile
              variant="small"
              username={product.owner.username}
              profileImageUrl={product.owner.profileImageUrl}
              numberOfProducts={100}
            />
          </Link>
        </Box>
      </Box>
      <Box padding={2} width={{ base: "100%", md: "700px" }}>
        <Flex
          justifyContent="space-between"
          flexDirection="column"
          height={{ base: "", md: "100%" }}
        >
          {/* 상품 개요를 표시, 줄바꿈별로 텍스트 컴포넌트로 감싼다 */}
          <Box>
            {product.description.split("\n").map((text: string, i: number) => (
              <Text key={i} as="p">
                {text}
              </Text>
            ))}
          </Box>
          {/*
                카트 추가 버튼 컨테이너
                버튼을 눌렀다면 ShoppingCartContext에 상품을 추가한다 */}
          <AddToCartButtonContainer product={product} />
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProductDetailContainer;
