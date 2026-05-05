import Link from "next/link";

// Not Found Page
const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-[#0e1416]">
      <h1 className="text-[#dde4e6] text-7xl md:text-9xl font-black leading-none mb-2">
        404
      </h1>

      <h2 className="text-[#dde4e6] text-2xl md:text-3xl font-bold mb-6">
        Page Not Found
      </h2>

      <p className="text-[#a3a3a3] text-lg max-w-md mx-auto mb-10 leading-relaxed">
        The prescription for this page couldn&apos;t be filled. It seems the
        medicine or page you are looking for is currently unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/home"
          className="inline-flex items-center justify-center min-w-50 h-14 bg-[#22c55e] text-[#052e16] rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-[#22c55e]/20"
        >
          Back to Home
        </Link>

        <Link
          href="/shop"
          className="inline-flex items-center justify-center min-w-50 h-14 bg-transparent text-[#22c55e] border-2 border-[#22c55e] rounded-xl font-bold text-base hover:bg-[#22c55e]/5 transition-all"
        >
          Browse Shop
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
