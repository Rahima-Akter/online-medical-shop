import ReviewsIcon from "@mui/icons-material/Reviews";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";

export default function Reviews() {
  return (
    <section className="bg-[#1E3F45] p-10 rounded-[0.75rem] shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-black text-[#FCFBFA] flex items-center gap-3">
            <ReviewsIcon className="text-[#EBBA92]" />
            Customer Reviews
          </h2>
          <p className="text-[#FCFBFA]/60 mt-2">
            Verified feedback from 128 verified purchasers.
          </p>
        </div>

        <button className="bg-[#146976] hover:bg-[#146976]/90 text-[#FCFBFA] font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all">
          <EditIcon />
          Write a Review
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT — Rating Summary */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-[#ebdbce] p-8 rounded-xl border border-[#146976]/20 flex flex-col items-center text-center">
            <span className="text-6xl font-black text-[#1E3F45]">4.8</span>

            <div className="flex gap-1 my-3 text-[#cba586]">
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
              <StarIcon fontSize="large" />
            </div>

            <p className="text-[#1E3F45]/60 font-semibold">
              Average Store Rating
            </p>
          </div>

          {/* Rating Bars */}
          {[5, 4, 3, 2, 1].map((star, i) => {
            const widths = ["85%", "10%", "3%", "1%", "1%"];
            const labels = ["85%", "10%", "3%", "1%", "1%"];
            return (
              <div key={star} className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#FCFBFA] w-4">
                  {star}
                </span>
                <StarIcon className="text-[#EBBA92]" fontSize="small" />
                <div className="flex-1 h-2.5 bg-[#FCFBFA]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#EBBA92]"
                    style={{ width: widths[i] }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-[#FCFBFA]/60 w-8 text-right">
                  {labels[i]}
                </span>
              </div>
            );
          })}
        </div>

        {/* RIGHT — Reviews */}
        <div className="lg:col-span-8 space-y-4">
          {/* Review 1 */}
          <div className="bg-[#f3e5da] p-6 rounded-[0.75rem] border border-[#146976]/20">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full border-2 border-[#146976]/20 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFg4HzJ6q9lr3ReRc56bfx7DoujP1LgFF1DfPPTDnexNOEjMkxKT05Bna_m6GC3c1A6-G6Q_h5pRV63EhyTYYs-AV3naF_4vSB-u3jrG9Hxhrn3EABtwLuUs5J9I4lDAO2AF1nllDdYZQH6yrogQWFnHEyrErbT6bS3v7lUqnGd2bnDa5fM65ny14Q63F5Sp6DMbZ32dRLmXW-qrf-vB3xxXDSKf33GG9dESZdH4asZNJahOgm_Z0zP3g9_ZszvMtYjkzrrpIdrg")',
                  }}
                />
                <div>
                  <h4 className="font-bold text-[#1E3F45]">
                    Sarah Jenkins
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#EBBA92]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} fontSize="small" />
                      ))}
                    </div>
                    <span className="text-xs text-[#1E3F45]/40 font-medium">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-sm text-[#1E3F45]/40">2 days ago</span>
            </div>

            <p className="text-[#1E3F45]/80 leading-relaxed font-medium">
              "The prescription was filled accurately and delivered within 24
              hours. The dosage instructions were clear, and the amoxicillin was
              effective for my strep throat within 48 hours. Excellent service!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-[#f3e5da] p-6 rounded-[0.75rem] border border-[#146976]/20">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full border-2 border-[#146976]/20 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqFvCjvjysKiSjVwi5mnXFyGJzFAH5JDAZX2vAoWw4m2oNHqBqw4wL7BHYqdYH_zOORGg0gwhR2vf-cuu7Up01S0jwYDnp1aIdE3fwMGd3ZOuOI2eb9X8ReZWHbscMK5zilSoTJVRYFLyaOK7k3P1N9aU3Gemqx_pLz0zmuX3Iqm7GPkRzWQom7_CaWhv02EUpYpR9Mgj0oB2IrncTk3ttoiLt7LSMf5GZMNJFrEUHjwendnpcksvaG_a7kzlo9q7e-uOmMP88wg")',
                  }}
                />
                <div>
                  <h4 className="font-bold text-[#1E3F45]">
                    Dr. Marcus Webb
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#EBBA92]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} fontSize="small" />
                      ))}
                    </div>
                    <span className="text-xs text-[#1E3F45]/40 font-medium">
                      Healthcare Prof.
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-sm text-[#1E3F45]/40">1 week ago</span>
            </div>

            <p className="text-[#1E3F45]/80 leading-relaxed font-medium">
              "As a physician, I appreciate the detailed batch information and
              the GMP certifications shown here. The packaging is robust and
              ensures the medicine remains dry. High quality generic
              amoxicillin."
            </p>
          </div>

          <button className="w-full py-4 text-[#FCFBFA]/60 font-bold hover:text-[#FCFBFA] transition-all border border-[#FCFBFA]/10 rounded-xl">
            Load 126 More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
