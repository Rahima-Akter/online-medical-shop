import ProductDetailsServer from "@/components/modules/shop/productDetails/producDetailServer";

interface Iparams {
  params: {
    id: string;
  };
}

export default async function Details({ params }: Iparams) {
  const { id } = await params;

  return (
    <div className="bg-[#121e20]">
      <ProductDetailsServer id={id} />
    </div>
  );
}
