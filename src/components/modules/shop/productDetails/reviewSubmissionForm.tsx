import StarRateIcon from "@mui/icons-material/StarRate";
import VerifiedIcon from "@mui/icons-material/Verified";
import SendIcon from "@mui/icons-material/Send";

export default function ReviewSubmissionForm() {
  return (
    <main className="flex-grow flex items-center justify-center py-20 px-6 bg-[#1E3F45]">
      <div className="w-full max-w-xl">
        {/* Product Header */}
        <div className="flex items-center gap-5 mb-10 bg-white/5 p-5 rounded-[0.75rem] border border-white/10 backdrop-blur-sm">
          <div className="size-20 bg-[#ECE3DA] rounded-[0.75rem] overflow-hidden flex-shrink-0 shadow-inner">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain p-2"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvkeGuvXSTK91QGRxcZXQlXeJkFYbT27oMriHCZglQDlHznju7Eq4KZMOzz16CztlsmQAU4iXgEWPqekCNp_deI-g9O_knuJdFNJr9OoeJeRnS9w6ZPGzM32HkixL3JTGpWa0V67LnLDmyOjDI39STkfesBLFg5UpufA9zr-IEvhqJih3hjgQdTvwtefF_RHamPbxxOPdp0FK4gIJpQamGnZVA2sr8N0vyPjCRKqgGL6-_b3p3q6M1JbOCM1fgA2bhRxDhXL1YDA")',
              }}
            />
          </div>
          <div>
            <span className="text-[#EBBA92] text-[10px] font-bold uppercase tracking-[0.2em]">
              Writing review for
            </span>
            <h3 className="text-white font-bold text-xl leading-tight">
              Amoxicillin 500mg Capsules
            </h3>
            <p className="text-white/50 text-xs mt-1 font-medium italic">
              Standard prescription strength
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#ECE3DA] rounded-[0.75rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D8CFC4]/20 to-transparent px-10 py-10">
            <h1 className="text-4xl font-black text-[#1E3F45] mb-3 tracking-tight">
              Premium Review
            </h1>
            <p className="text-[#1E3F45]/50 font-medium">
              Your insight drives our medical excellence.
            </p>
          </div>

          <form className="px-10 pb-12 space-y-10">
            {/* Rating */}
            <div className="space-y-4 text-center pb-6 border-b border-[#D8CFC4]/50">
              <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#1E3F45]/40">
                Select Your Experience Rating
              </label>
              <div className="flex justify-center gap-3 text-[#EBBA92]">
                <StarRateIcon sx={{ fontSize: 48 }} />
                <StarRateIcon sx={{ fontSize: 48 }} />
                <StarRateIcon sx={{ fontSize: 48 }} />
                <StarRateIcon sx={{ fontSize: 48 }} />
                <StarRateIcon sx={{ fontSize: 48, color: "rgba(30,63,69,0.1)" }} />
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-8">
              <div className="floating-label-group">
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  className="w-full px-4 rounded-[0.75rem] border-2 border-[#D8CFC4] bg-transparent text-[#1E3F45] focus:ring-0 focus:border-[#146976] placeholder-transparent font-semibold"
                />
                <label htmlFor="title">Review Headline</label>
              </div>

              <div className="floating-label-group">
                <textarea
                  id="feedback"
                  rows={4}
                  placeholder="Feedback"
                  className="w-full px-4 rounded-[0.75rem] border-2 border-[#D8CFC4] bg-transparent text-[#1E3F45] focus:ring-0 focus:border-[#146976] placeholder-transparent font-medium"
                />
                <label htmlFor="feedback">Detailed Experience</label>
              </div>
            </div>

            {/* Recommend Toggle */}
            <div className="bg-white border border-[#D8CFC4] rounded-[0.75rem] p-6 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#146976]/5 flex items-center justify-center text-[#146976]">
                  <VerifiedIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E3F45] leading-none">
                    Recommend Product?
                  </p>
                  <p className="text-[11px] text-[#1E3F45]/40 font-medium mt-1">
                    Check to vouch for quality
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:bg-[#146976] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-6 after:transition-all peer-checked:after:translate-x-full" />
              </label>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col gap-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#146976] to-[#0E4F59] hover:brightness-110 text-white font-black py-5 px-8 rounded-[0.75rem] shadow-[0_10px_20px_-5px_rgba(20,104,117,0.4)] transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
              >
                Submit Review
                <SendIcon fontSize="small" />
              </button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-xs font-bold text-[#1E3F45]/40 hover:text-[#1E3F45] transition-colors uppercase tracking-[0.2em] underline underline-offset-8 decoration-[#D8CFC4] hover:decoration-[#146976]"
                >
                  Abandon Changes
                </button>
              </div>
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
          Secure &amp; Encrypted Submission System
        </p>
      </div>
    </main>
  );
}
