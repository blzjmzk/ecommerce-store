import getBillboard from "@/actions/get-billboards";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("b1c7c088-ccd9-4857-af50-2b540b215896");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export const dynamic = "force dynamic";

export default HomePage;
