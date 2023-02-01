import Layout from "@/components/layout";

import Images from "@/components/images";

import { images } from "@/utils/images";

const randomizedArray = images.sort(() => Math.random() - 0.5);

export default function Gallery() {
  return (
    <Layout>
      <Images items={randomizedArray} />
    </Layout>
  );
}
