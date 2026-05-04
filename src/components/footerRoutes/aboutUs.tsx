import {
  IconShieldCheck,
  IconTruckDelivery,
  IconHeartHandshake,
  IconHeadset,
  IconLock,
  IconAward,
} from "@tabler/icons-react";

const AboutUs = () => {
  return (
    <div className="bg-[#0A1618] text-[#ffffff] antialiased min-h-screen">
      <main className="max-w-250 mx-auto px-6 md:px-12 py-20">
        {/* Hero Section */}
        <section className="mb-32 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="w-16 h-1 bg-[#6e5d27]"></div>
            <h1 className="text-[#ffffff] text-5xl lg:text-7xl font-black leading-tight tracking-tight max-w-3xl">
              Empowering health through accessibility.
            </h1>
            <p className="text-[#ffffff]/80 text-xl leading-relaxed max-w-2xl">
              MediStore is more than just a pharmacy. We are a team of dedicated
              healthcare professionals committed to bringing authentic,
              affordable medicine to every doorstep.
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNLmxUoJj3QauLfncFwcmzP1KZRQ2Zvn47w5flHXoOHFhvRVgBLTfxpaSkc6VWItx2xmWl7ZR64oFkRG4GS6rinS7Jo9ELfAvcL0OuheHqxwDpYo7LQV8L6PzYM2uBzvR1YyOsTcK0JOIwTW7SC5fpIvutRkTyc70luYdNVQUFjvGhm6ZWRNZ56nyuTUlB8Hy4nC7eg44MJMbIcnoL9spbZ1wD4zP4bTlfUpgRb6HFf1h5D1Nz1WAupoWLO-3klsS0ww2am4ySOA")',
              }}
            ></div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-32">
          <div className="bg-[#ffffff]/5 rounded-2xl p-8 lg:p-16 border border-[#ffffff]/10 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3">
                <h2 className="text-[#6e5d27] font-bold uppercase tracking-widest text-sm mb-4">
                  Our Mission
                </h2>
                <h3 className="text-[#ffffff] text-4xl font-bold leading-tight">
                  Healthcare for Everyone, Everywhere.
                </h3>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-8">
                <p className="text-[#ffffff]/70 text-lg leading-relaxed">
                  Our mission is to bridge the gap between quality
                  pharmaceutical care and the people who need it most. By
                  leveraging modern technology and a robust logistics network,
                  we ensure that no one is ever more than a few clicks away from
                  the medicine they need.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="text-[#6e5d27] bg-[#6e5d27]/10 p-3 rounded-xl">
                      <IconShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#ffffff] text-lg">
                        Authenticity Guaranteed
                      </h4>
                      <p className="text-sm text-[#ffffff]/60">
                        Every product is sourced directly from certified
                        manufacturers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#6e5d27] bg-[#6e5d27]/10 p-3 rounded-xl">
                      <IconTruckDelivery size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#ffffff] text-lg">
                        Rapid Delivery
                      </h4>
                      <p className="text-sm text-[#ffffff]/60">
                        Specialized cold-chain logistics for
                        temperature-sensitive meds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#ffffff] text-3xl font-bold mb-4">
              Trusted by Professionals
            </h2>
            <div className="w-16 h-1 bg-[#6e5d27] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-8 bg-[#ffffff]/5 rounded-2xl border border-[#ffffff]/10 transition-all hover:bg-[#ffffff]/10">
              <IconHeartHandshake className="text-[#6e5d27] mb-4" size={48} />
              <span className="font-bold text-sm text-center text-[#ffffff]/90">
                FDA Approved Sourcing
              </span>
            </div>

            <div className="flex flex-col items-center p-8 bg-[#ffffff]/5 rounded-2xl border border-[#ffffff]/10 transition-all hover:bg-[#ffffff]/10">
              <IconHeadset className="text-[#6e5d27] mb-4" size={48} />
              <span className="font-bold text-sm text-center text-[#ffffff]/90">
                24/7 Pharmacist Advice
              </span>
            </div>

            <div className="flex flex-col items-center p-8 bg-[#ffffff]/5 rounded-2xl border border-[#ffffff]/10 transition-all hover:bg-[#ffffff]/10">
              <IconLock className="text-[#6e5d27] mb-4" size={48} />
              <span className="font-bold text-sm text-center text-[#ffffff]/90">
                Secure Prescriptions
              </span>
            </div>

            <div className="flex flex-col items-center p-8 bg-[#ffffff]/5 rounded-2xl border border-[#ffffff]/10 transition-all hover:bg-[#ffffff]/10">
              <IconAward className="text-[#6e5d27] mb-4" size={48} />
              <span className="font-bold text-sm text-center text-[#ffffff]/90">
                Certified Quality
              </span>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div
              className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl aspect-square bg-cover bg-center border border-[#ffffff]/10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDs6MIb8fsloon8LZ1LJnA60EQDCpKmDj12SfMjUOhfo__NsA3y-RwmfIBcmWPi_2tn518FF2ghEsKvlRYN7OCQmn8f3ztNnT6aKs0Qre3CvXT_AVZWcfY0AXDxqoDhj1jD9DqSXXExkgltXUt3jClEYpqaLCocKl3HaCKeDGhbK4jj8KKuvpSVH33UbWlZq3wX5HgEjcVIRwb1PilyUdMOwbMuYunzUkZb5W9CiJW13zPX2NHnUEBcoDUE4DxuyNC4rfuGEzUOig")',
              }}
            ></div>

            <div className="lg:w-1/2 flex flex-col gap-8">
              <h2 className="text-[#ffffff] text-5xl font-bold leading-tight">
                Our Story
              </h2>
              <p className="text-[#ffffff]/70 text-xl leading-relaxed">
                Founded in 2018, MediStore began with a simple observation:
                obtaining chronic medication was a burden for those with limited
                mobility. What started as a local delivery service in a small
                neighborhood has grown into a nationwide platform serving
                thousands of families.
              </p>
              <p className="text-[#ffffff]/70 text-xl leading-relaxed">
                We pride ourselves on maintaining the personal touch of a
                community pharmacy while utilizing the efficiency of a digital
                leader. Every order is reviewed by a human pharmacist, ensuring
                that safety is never sacrificed for speed.
              </p>

              <div className="pt-8 border-t border-[#ffffff]/10">
                <div className="flex gap-16">
                  <div>
                    <p className="text-4xl font-black text-[#6e5d27]">50k+</p>
                    <p className="text-sm uppercase tracking-widest text-[#ffffff]/40 font-bold mt-2">
                      Customers Served
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-[#6e5d27]">12+</p>
                    <p className="text-sm uppercase tracking-widest text-[#ffffff]/40 font-bold mt-2">
                      Major Awards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
