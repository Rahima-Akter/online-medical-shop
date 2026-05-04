import {
  IconInfoCircle,
  IconShoppingBag,
  IconFileDescription,
  IconUser,
  IconRefresh,
  IconGavel,
  IconCheck,
} from "@tabler/icons-react";

const TermsOfUse = () => {
  return (
    <div className="bg-[#121e20] text-[#f1f5f9] min-h-screen">
      <main className="max-w-200 mx-auto px-6 py-12 md:py-18">
        {/* Hero Header */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 min-h-60 flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(18, 30, 32, 0.2) 0%, rgba(18, 30, 32, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAulENIq0aXeunlTRIm5LGwcPN9x7ASDNZ4E9_bTV9x4DW-qcB4IuIbHhHub0nrklOMdgl2Ji8jyL39w0oNMjVsjpp_cnUcMS5n3izOEXauYgaEa-NIH7rseWBRTAg41UbXrFFl7bCL52oX50tAfUQ8tZjnBjnJ0uq0y6dXt5393XmbFFw_fMCx9zR2kDpsrkwZcSthg4EoYhrZaeUvc6tLg7c_mPvc8TTOfhJJWjxLTekBlOBzG8sGDzy7BGtpD08OC2LiSvcn4A")',
            }}
          ></div>
          <div className="relative p-8 md:p-12">
            <h1 className="text-[#ffffff] text-4xl md:text-5xl font-extrabold leading-tight mb-2">
              Terms and Conditions of Use
            </h1>
            <p className="text-[#94a3b8] text-sm">
              Last updated: October 24, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="flex flex-col gap-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#146976]">
              <IconInfoCircle />
              1. Introduction
            </h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Welcome to MediStore. These Terms and Conditions govern your use
                of our website and services. By accessing or using our platform,
                you agree to be bound by these terms. If you do not agree with
                any part of these terms, you must not use our services.
              </p>
              <p>
                MediStore provides an online marketplace for pharmaceutical
                products, health supplements, and wellness items. We act as a
                bridge between licensed pharmacies and end-users, ensuring that
                all regulatory standards are met.
              </p>
            </div>
          </section>

          <hr className="border-[#1e293b]" />

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#146976]">
              <IconShoppingBag />
              2. Terms of Sale
            </h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                All orders placed through MediStore are subject to product
                availability and price verification. We reserve the right to
                cancel any order if the product is unavailable or if there is an
                error in pricing.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Prices are listed in local currency and include applicable
                  taxes unless stated otherwise.
                </li>
                <li>
                  Payments must be made through our secure gateway using
                  approved credit/debit cards or digital wallets.
                </li>
                <li>
                  Shipping times are estimates and may vary based on location
                  and carrier performance.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-8 bg-[#146976]/5 rounded-2xl border border-[#146976]/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#146976]">
              <IconFileDescription />
              3. Prescription Requirements
            </h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p className="font-semibold text-[#f1f5f9]">
                Critical Compliance Notice:
              </p>
              <p>
                For any medication classified as &quot;Prescription Only&quot;
                (RX), MediStore strictly requires a valid, legible prescription
                from a licensed medical professional before the order can be
                processed.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#1e293b] p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-bold text-[#146976] mb-2">
                    Valid Prescription
                  </h4>
                  <p className="text-xs">
                    Must include patient name, doctor&quot;s signature,
                    registration number, and date within the last 6 months.
                  </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-bold text-[#146976] mb-2">
                    Verification Process
                  </h4>
                  <p className="text-xs">
                    Our clinical team verifies all uploaded documents. This
                    process typically takes 1-4 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#146976]">
              <IconUser />
              4. User Obligations
            </h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>As a user of MediStore, you represent and warrant that:</p>
              <ul className="list-decimal pl-5 space-y-3">
                <li>
                  You are at least 18 years of age or have legal capacity to
                  enter into a binding contract.
                </li>
                <li>
                  The information you provide during registration is accurate
                  and complete.
                </li>
                <li>
                  You will maintain the confidentiality of your account
                  credentials and are responsible for all activities under your
                  account.
                </li>
                <li>
                  You will not use the platform for any fraudulent or illegal
                  activity, including attempting to purchase controlled
                  substances without proper authorization.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#146976]">
              <IconRefresh />
              5. Returns & Refunds
            </h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Due to health and safety regulations, medications cannot be
                returned once they have left the pharmacy&quot;s custody.
                However, refunds may be issued if:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 p-3 rounded-xl border border-[#1e293b]">
                  <IconCheck className="text-[#146976]" />
                  <p className="text-sm italic">
                    The wrong medication was delivered due to a MediStore error.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-[#1e293b]">
                  <IconCheck className="text-[#146976]" />
                  <p className="text-sm italic">
                    The product arrived damaged or past its expiration date.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#146976]">
              <IconGavel />
              6. Limitation of Liability
            </h2>
            <div className="bg-[#1e293b] p-6 rounded-2xl border-l-4 border-[#146976] italic text-[#94a3b8]">
              &quot;MediStore shall not be liable for any indirect, incidental,
              special, or consequential damages resulting from the use or
              inability to use our services.&quot;
            </div>
            <p className="mt-4 text-[#94a3b8] text-sm leading-relaxed">
              We do not provide medical advice. Any information provided is not
              a substitute for professional consultation.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default TermsOfUse;
