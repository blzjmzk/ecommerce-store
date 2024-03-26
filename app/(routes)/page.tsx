import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import ProductList from "../components/product-list";

const HomePage = async () => {
  const billboard = await getBillboard("b1c7c088-ccd9-4857-af50-2b540b215896");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export const dynamic = "force dynamic";

export default HomePage;
