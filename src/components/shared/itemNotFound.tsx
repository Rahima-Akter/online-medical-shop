
export default function ItemNotFound() {
  return (
    <div className="bg-[#0A1618] font-display min-h-screen transition-colors duration-300 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="flex flex-col max-w-[800px] w-full items-center text-center">
          {/* Hero Illustration */}
          <div className="flex w-full justify-center mb-8 drop-shadow-[0_0_15px_rgba(14,109,123,0.4)]">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Styled SVG Illustration */}
              <svg
                className="w-full h-full text-[#0e6d7b]"
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="stroke-current"
                  height="100"
                  rx="4"
                  strokeDasharray="8 4"
                  strokeWidth="2"
                  width="120"
                  x="40"
                  y="60"
                />
                <circle
                  className="stroke-[#EBBA92] stroke-opacity-80"
                  cx="100"
                  cy="110"
                  r="30"
                  strokeWidth="3"
                />
                <path
                  className="stroke-[#EBBA92]"
                  d="M122 132L145 155"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <rect
                  className="fill-[#0e6d7b]/20"
                  height="8"
                  rx="1"
                  width="20"
                  x="55"
                  y="80"
                />
                <rect
                  className="fill-[#0e6d7b]/20"
                  height="8"
                  rx="1"
                  width="20"
                  x="85"
                  y="80"
                />
                <rect
                  className="fill-[#0e6d7b]/20"
                  height="8"
                  rx="1"
                  width="20"
                  x="115"
                  y="80"
                />
                <rect
                  className="fill-[#0e6d7b]/10"
                  height="15"
                  rx="2"
                  width="15"
                  x="55"
                  y="100"
                />
                <rect
                  className="fill-[#0e6d7b]/10"
                  height="15"
                  rx="2"
                  width="15"
                  x="130"
                  y="100"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-[#F5F1E9] tracking-tight text-4xl lg:text-5xl font-bold leading-tight pb-4">
            Medicine Not Found
          </h1>
          <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-xl pb-10">
            We could&apos;t find the specific item you&apos;re looking for. Please check
            the spelling, or try searching for a generic name or category.
          </p>
        </div>
      </main>
    </div>
  );
}
