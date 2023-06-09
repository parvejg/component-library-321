import { LinkedInAppCard, ImageCard, ProductDemoCard } from "./Card";
import { Layout } from "./Layout";

export const CardPage = () => {
  return (
    <Layout>
      <div>
        <h2>Cards</h2>
        <ImageCard />
        <div></div>
        <ProductDemoCard />
        <div></div>
        <LinkedInAppCard />
      </div>
    </Layout>
  );
};
