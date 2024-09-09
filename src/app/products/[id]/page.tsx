import Layout from "@/components/templates/Layout";
import ProductDetailContainer from "@/containers/ProductDetailContainer";
import getProduct from "@/services/products/get-product";

import type { ApiContext } from "@/types";

type PagePrams = {
  id: string;
};

const getProductInfo = async (params: PagePrams) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };

  if (!params) {
    throw new Error("params is undefined");
  }

  // 상품을 얻고, 정적 페이지를 생성
  // 10초 동안 stale 상태로 만들고, 정적 페이지를 업데이트한다
  const productId = Number(params.id);
  const product = await getProduct(context, { id: productId });

  return {
    id: productId,
    product,
  };
};

const Page = async ({ params }: { params: PagePrams }) => {
  const { id, product: initial } = await getProductInfo(params);
   
  return (
    <Layout>
      <ProductDetailContainer
        id={id}
        initial={initial}
      ></ProductDetailContainer>
    </Layout>
  );
};

export default Page;
