const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0A1618] font-[Inter,sans-serif] text-[#F5F1E9] min-h-screen scroll-smooth">
      <main className="max-w-200 mx-auto px-6 py-16">
        
        {/* Page Heading */}
        <div className="flex flex-col gap-4 pb-12 border-b border-[#1E3F45] mb-12 text-center">
          
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 text-[#13cfec]">
              <svg fill="currentColor" viewBox="0 0 48 48">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" />
              </svg>
            </div>
          </div>

          <h1 className="text-[#F5F1E9] text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
            Privacy Policy & Data Protection
          </h1>

          <div className="flex flex-col items-center gap-2">
            <span className="bg-[#13cfec]/20 text-[#13cfec] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Official Policy
            </span>
            <p className="text-[#F5F1E9]/60 text-sm">
              Last updated: April 24, 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="space-y-16">

          {/* 1 */}
          <section id="intro">
            <h2 className="text-[#13cfec] text-2xl font-bold mb-6 flex items-center gap-2">
              1. Introduction
            </h2>

            <div className="text-[#F5F1E9]/90 leading-relaxed text-lg space-y-6">
              <p>
                At <strong className="text-[#F5F1E9]">MediStore 💊</strong>, we recognize that your health information is personal and sensitive. We are committed to protecting your privacy and maintaining the confidentiality of the medical data you share with us. This Privacy Policy describes how we collect, use, and protect your information when you use our website and services.
              </p>

              <p>
                By using our platform, you consent to the data practices described in this statement. We adhere to international health data standards to ensure your peace of mind while purchasing medicines online.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section id="protection">
            <h2 className="text-[#13cfec] text-2xl font-bold mb-6 flex items-center gap-2">
              2. Data Protection & Security
            </h2>

            <div className="text-[#F5F1E9]/90 leading-relaxed text-lg space-y-6">
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data, including prescriptions and medical history, is encrypted using Secure Socket Layer (SSL) technology and stored behind secured networks.
              </p>

              <div className="bg-[#122629] p-6 rounded-xl border border-[#1E3F45] space-y-4">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#13cfec]">🔒</span>
                    <span>
                      <strong className="text-[#F5F1E9]">AES-256 Encryption:</strong> All medical records are encrypted at rest.
                    </span>
                  </li>

                  <li className="flex gap-3 items-start">
                    <span className="text-[#13cfec]">🛡️</span>
                    <span>
                      <strong className="text-[#F5F1E9]">Access Control:</strong> Only licensed pharmacists and authorized personnel have access to your prescription data.
                    </span>
                  </li>

                  <li className="flex gap-3 items-start">
                    <span className="text-[#13cfec]">✔️</span>
                    <span>
                      <strong className="text-[#F5F1E9]">Regular Audits:</strong> We conduct bi-annual security audits and vulnerability assessments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="cookies">
            <h2 className="text-[#13cfec] text-2xl font-bold mb-6 flex items-center gap-2">
              3. Cookies & Tracking
            </h2>

            <div className="text-[#F5F1E9]/90 leading-relaxed text-lg space-y-6">
              <p>
                We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and interaction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 border border-[#1E3F45] rounded-xl bg-[#122629]">
                  <h4 className="font-bold text-[#F5F1E9] mb-2 flex items-center gap-2">
                    ⚙️ Essential Cookies
                  </h4>
                  <p className="text-sm text-[#F5F1E9]/70">
                    Required for core site functionality like login and cart processing.
                  </p>
                </div>

                <div className="p-6 border border-[#1E3F45] rounded-xl bg-[#122629]">
                  <h4 className="font-bold text-[#F5F1E9] mb-2 flex items-center gap-2">
                    📊 Performance Cookies
                  </h4>
                  <p className="text-sm text-[#F5F1E9]/70">
                    Helps us understand how visitors interact with our pharmacy store.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section id="sharing">
            <h2 className="text-[#13cfec] text-2xl font-bold mb-6">
              4. Third-party Sharing
            </h2>

            <div className="text-[#F5F1E9]/90 leading-relaxed text-lg space-y-6">
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as they agree to keep this information confidential.
              </p>

              <p className="italic text-sm text-[#F5F1E9]/50 bg-white/5 p-4 rounded-lg border-l-4 border-[#13cfec]">
                Example: Sharing your address with a verified delivery courier to ship your medicine.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section id="rights">
            <h2 className="text-[#13cfec] text-2xl font-bold mb-6">
              5. User Rights
            </h2>

            <div className="text-[#F5F1E9]/90 leading-relaxed text-lg space-y-6">
              <p>
                You have the right to request access to the personal information we hold about you. You can also request correction, update, or deletion of your data.
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-6 py-3 bg-[#122629] border border-[#1E3F45] rounded-lg text-sm font-semibold text-[#F5F1E9]">
                  Request Data Export
                </button>

                <button className="px-6 py-3 bg-[#1E3F45]/40 border border-[#13cfec]/30 rounded-lg text-sm font-semibold text-[#13cfec]">
                  Request Account Deletion
                </button>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section id="contact">
            <h2 className="text-[#13cfec] text-2xl font-bold mb-6">
              6. Contact Information
            </h2>

            <div className="bg-[#122629] p-8 rounded-2xl border border-[#13cfec]/20">
              <p className="text-[#F5F1E9] mb-6">
                If there are any questions regarding this privacy policy, you may contact us using the information below:
              </p>

              <div className="space-y-5">
                <p className="text-sm text-[#F5F1E9]/80">
                  📍 MediStore Headquarters — 123 Pharma Lane, Medical District, NY 10001
                </p>

                <p className="text-sm text-[#F5F1E9] font-semibold">
                  📧 privacy@medistore.example.com
                </p>

                <p className="text-sm text-[#F5F1E9] font-semibold">
                  📞 +1 (555) 010-9988
                </p>
              </div>
            </div>
          </section>

        </article>

        <div className="mt-24 pt-12 border-t border-[#1E3F45] text-center">
          <p className="text-[#F5F1E9]/40 text-sm italic">
            Thank you for trusting MediStore with your health data protection.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;