import { useEffect } from "react";
import { Card } from "../components/Card";
import { MainLayout } from "../components/Layouts";
import { useProducts } from "../hooks/useProducts";

function Home() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <MainLayout>
      Home
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto mt-8"
      >
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </MainLayout>
  );
}

export default Home;