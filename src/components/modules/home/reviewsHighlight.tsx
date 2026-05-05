import { IconStar, IconStarHalf } from "@tabler/icons-react";

// Reviews Highlight Section
const ReviewsHighlight = () => {
  return (
    <>
      <section className="bg-[#1e3f45] py-24 relative overflow-hidden">
        <div className="max-w-360 mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          <div className="mb-16">
            <h2 className="text-[#ffffff] text-3xl md:text-5xl font-black mb-4">
              Customer Success Stories
            </h2>
            <div className="w-24 h-1.5 bg-[#ffd09e] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-[#ffffff]/5 backdrop-blur-sm p-8 rounded-3xl border border-[#ffffff]/10 flex flex-col">
              <div className="flex gap-1 text-[#ffd09e] mb-6">
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
              </div>
              <p className="text-[#ffffff]/80 italic mb-8 leading-relaxed text-lg">
                &apos;MediStore has completely changed how I manage my chronic
                condition. Their delivery is always on time, and the pharmacist
                support is incredible.&apos;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7de8ff]/30 border border-[#7de8ff]/50"></div>
                <div>
                  <p className="text-[#ffffff] font-bold">Sarah Jenkins</p>
                  <p className="text-[#ffd09e] text-xs uppercase font-bold tracking-widest">
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#ffffff]/5 backdrop-blur-sm p-8 rounded-3xl border border-[#ffffff]/10 flex flex-col">
              <div className="flex gap-1 text-[#ffd09e] mb-6">
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
              </div>
              <p className="text-[#ffffff]/80 italic mb-8 leading-relaxed text-lg">
                &apos;The process of uploading prescriptions is so seamless. I saved
                nearly 30% on my monthly vitamins compared to my local pharmacy.&apos;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7de8ff]/30 border border-[#7de8ff]/50"></div>
                <div>
                  <p className="text-[#ffffff] font-bold">Michael Chen</p>
                  <p className="text-[#ffd09e] text-xs uppercase font-bold tracking-widest">
                    Monthly Subscriber
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#ffffff]/5 backdrop-blur-sm p-8 rounded-3xl border border-[#ffffff]/10 flex flex-col">
              <div className="flex gap-1 text-[#ffd09e] mb-6">
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStar size={16} />
                <IconStarHalf size={16} />
              </div>
              <p className="text-[#ffffff]/80 italic mb-8 leading-relaxed text-lg">
                &apos;Customer support was very helpful when I had questions about my
                dosage. It&apos;s rare to find such personal care in an online store.&apos;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7de8ff]/30 border border-[#7de8ff]/50"></div>
                <div>
                  <p className="text-[#ffffff] font-bold">Emma Thompson</p>
                  <p className="text-[#ffd09e] text-xs uppercase font-bold tracking-widest">
                    Wellness Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#7de8ff]/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
};

export default ReviewsHighlight;