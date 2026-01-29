import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';

export default function FeaturedMedicines() {
  const products = [
    {
      category: "Pain Relief",
      name: "Acetaminophen 500mg",
      desc: "Effective relief for headaches, muscle aches, and fever. 50 count bottle.",
      price: "$12.50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdwA_aShQUHXjH4m7MIaqiRXBtOMzsx-zdq6uKcOThBJlzqfdw5gPOxuNbxrNZZwTbLtGBFZaNxVtfMfkQyPD3yCu8lu8gkMgylvOGuC0tZnioiKCvd2ka263EOpM1KahqW2wROOeT6dXrWL5jwNM62d2RmRq6uI8DBrAbB84F44CNPcemzi1QsJo4bwKiE_vwMlKhPfPIsJ7ICZeO76X_5g9gE_CxI9K2wcjvFhsRm_-KLaPMtIgdD7UZtRSFJcdxtgJULPiW2w",
      badge: "Best Seller",
    },
    {
      category: "Wellness",
      name: "Multivitamin Daily Pack",
      desc: "Full spectrum of essential vitamins and minerals for daily energy.",
      price: "$24.99",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADGf208wqB3-sLF2EQadCziY4aQIdsmSl76I9fgF6lNn6Kb8qpPfG7_2FfY9w0mEmb_HRrU7jTjrgUQWP964VM41mGMntCTwEwF_W343q61_lS2gwi85-Y3aCTag3nhGs67cTox9R2YEyZoK494eRRGyZrVeXjAF5qRZ2z5RDVS3UIwM-Gg2F0nb8THxJUqQR18Gfk6gXITWugmx_dl2QaJYtxhDTB80jpCTMrDVqoU9-WEu__iwkpX62p74qRshIlp1HOGKubLg",
    },
    {
      category: "Cold & Flu",
      name: "Advanced Cough Syrup",
      desc: "Fast acting cough suppressant and expectorant. Non-drowsy formula.",
      price: "$8.75",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByb4AlLtlPGkzk6eVnZKZljXRdH52e_3BFcSdTKgzZancYMtpIGMwsyFCgnsAcBaehHLVvS7JnyBOBAvNom6ZWIoPglQRCUzTxtswLFVL6zo088Pr5OoJx-ClemTaRrR-lvOImX_UcAdOmMeiiu4MpRniNfekw6gvAqrtEthgKcSTRYJDu09w92YOWR_i0h67lelZR5Y2B4oZDhuBZpI4esRg2IeW5F700kcm-wKvLTsosv0YMp5UUXE05035vvoToKVwYhghClw",
    },
    {
      category: "First Aid",
      name: "Emergency First Aid Kit",
      desc: "Complete 80-piece kit for home, office, or travel emergencies.",
      price: "$19.50",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJhs4iLFnX1_dzL0bPe3C_4c15FN-hb6S4cLVWszRIm5y6o1ILgSraZzr3bljg5dqD60YOW-StLJRmO8kEyjWICBXhCtLc33fnWyzYvgPO44ll9fCteX2u6IRqGVbK2yXjmfcVJ_vDvUgJIrxoPFeSvJIIPfYQPAU5sUTVXnMDrNkuR8wb0h5w5TWSstJPptyo93W7RT990K8vJPJ2tmMqgKeQY4QyfXgL6E8OcdjC2hAuLth1duGA7ROKJTi4E22B4bKw3dPFcw",
      badge: "Best Seller",
    },
  ];

  return (
<section className="bg-[#1E3F45] py-24">
  <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
    <div className="mb-12">
      <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
        Featured Medicines
      </h2>
      <div className="w-20 h-1.5 bg-[#EBBA92] rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((prod, i) => (
        <div
          key={i}
          className="group bg-[#1F2937] rounded-2xl overflow-hidden border border-[#146976]/10 flex flex-col"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-white p-6">
            <img
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              src={prod.img}
              alt={prod.name}
            />
            {prod.badge && (
              <div className="absolute top-4 left-4 bg-[#146976] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
                {prod.badge}
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#EBBA92] uppercase tracking-widest mb-1">
                {prod.category}
              </p>
              <h3 className="text-lg font-black text-white leading-tight mb-2">
                {prod.name}
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-4 line-clamp-2">
                {prod.desc}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-black text-[#EBBA92]">
                {prod.price}
              </span>
              <button className="w-10 h-10 rounded-lg bg-[#146976] text-white flex items-center justify-center hover:bg-[#146976]/90 transition-colors">
                <AddShoppingCartIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-16 flex justify-center">
      <Link href="/shop" className="px-10 h-12 pt-3 rounded-lg bg-[#146976]/10 text-[#EBBA92] font-black border-2 border-[#146976]/20 hover:bg-[#146976] hover:text-white transition-all">
        Discover More Products
      </Link>
    </div>
  </div>
</section>

  );
}
