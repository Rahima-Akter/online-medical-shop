"use client";
import { useState } from "react";
import Image from "next/image";
import { Bedtime, Close, Restaurant, Verified } from "@mui/icons-material";
import { IconActivity, IconArrowRight } from "@tabler/icons-react";

interface Card {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Article {
  category: string;
  title: string;
  desc: string;
  image: string;
  cards: Card[];
  sectionTitle: string;
  body: string[];
}

const articles: Article[] = [
  {
    category: "Wellness Tips",
    title: "Boosting Your Immunity: A Seasonal Guide",
    desc: "Discover the top vitamins, minerals, and simple lifestyle changes that can help strengthen your immune system this winter. From essential nutrients like vitamin C, vitamin D, and zinc, to practical habits such as better sleep, regular exercise, and stress management, learn how to support your body’s natural defenses and stay healthy throughout the colder months.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJKIIAEyp0DkXNRYWsYIgPywDWd4tNbvuGO_Gl8RafXfnNaFI6ZtMlgmkvQT86_Nu89I-_hD2Ev8ccr38LpPfchqeH91EJaisTcARAAlz5HIyG7Vabv03q5IdT7kq4iprncffZZ3tMuyTEGTVfFplCDTaTUtaNkZbOprhL3h17PBHbGlibVsObe9kesR_cZJ0SfFUDbT6CKVlOjJ_rtcSrC4-KVY-Q8X8TogOi9-GCnSy_-ZY9i2znQ1qHj4uMbyl-OSbJNy3w6A",
    cards: [
      {
        title: "Nutritional Precision",
        desc: "Prioritize key nutrients to boost your health this season: Zinc for immune support, Vitamin D3 for bone strength, Omega-3 for heart and brain health, and Vitamin C for overall wellness.",
        icon: <Restaurant />,
      },
      {
        title: "Sleep Optimization",
        desc: "Deep REM sleep enhances immune memory, supports brain function, regulates hormones, and aids overall recovery.",
        icon: <Bedtime />,
      },
    ],
    sectionTitle: "The Science of Resilience",
    body: [
      "Gut microbiome plays a central role in immune regulation and overall health.",
      "Hydration, stress management, and a clean environment help reduce immune system burden.",
      "Balanced nutrition and regular exercise further support immune resilience.",
      "Adequate sleep and mindful lifestyle choices enhance your body's natural defenses.",
    ],
  },
  {
    category: "Disease Management",
    title: "Managing Hypertension Naturally",
    desc: "Learn how making simple lifestyle adjustments, such as maintaining a balanced diet rich in fruits, vegetables, and whole grains, along with engaging in moderate regular exercise, can significantly influence your blood pressure. When combined with prescribed medication, these healthy habits can enhance treatment effectiveness, support heart health, and help you achieve better overall wellness.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDl7JShSYPo2rM1eVrvX9t9VSl7fXtq7Ys5UE9gMdXwYU6dYdKLWJAbVkrHyd9uK9-PT_2JyqFT0l_tScX7Qqh5KefnV85zxVXiXGls2ORhZ-p27ku3Fri3GOSt7gMXk1L-m5gSzW3XVtJXSLKELLgEjW9w7THtPQHKdfgvHFW_pDAoahVEwDIVvDw7JXsG_4k6j_z_2kQwlrb20g5Q3C9tE7o2l4Nl9PrEztwUKBAW3RlidWgK_hg-W_n9fa_W_vjkAE1AUfBBQQ",
    cards: [
      {
        title: "Heart-Friendly Diet",
        desc: "Low sodium, high potassium foods help maintain blood pressure, support heart function, and reduce strain on arteries.",
        icon: <IconActivity />,
      },
      {
        title: "Exercise Routine",
        desc: "Moderate cardio 30 mins daily improves vascular health, boosts circulation, and strengthens the heart over time.",
        icon: <Bedtime />,
      },
    ],
    sectionTitle: "Lifestyle for Healthy Blood Pressure",
    body: [
      "Consistent monitoring, balanced diet, and portion control are essential for maintaining healthy blood pressure.",
      "Stress reduction techniques and regular sleep patterns support heart health and overall well-being.",
      "Incorporating regular physical activity enhances circulation and cardiovascular resilience.",
      "Hydration and mindful lifestyle choices further contribute to long-term heart health.",
    ],
  },
  {
    category: "Medicine News",
    title: "The Ultimate Vitamin Guide for 2024",
    desc: "Explore the key differences between water-soluble and fat-soluble vitamins, and learn how these distinctions affect absorption, storage, and overall health. Discover which vitamins need to be taken with meals containing fats, which should be replenished more frequently, and how understanding these differences can help you maximize the benefits of your daily nutrition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTpu4PKMY3Z0eSYpH6O7QxZMG6lwyDELMzNekNwSJwocgBJ83xWtUWPGTAOq9rr8_LtKe-A_36IIYsVMJ_zDvS30-g3EWycx_OPEKKDPWScL3XJsIGkuH105-LRMax6xiFXKikN0eDV6noO8AASSd6sFSx70bi9ziGmBBPnVjP51mEtMacHq40H-HJZhIFh_a7ZljBF_c2Rz0cRO5b95TpKXeDeJKKbh3eO6wpiqw0lhSZuq1MQkcIChH6r5knXoKkn2uCRA9wBg",
    cards: [
      {
        title: "Vitamin Types",
        desc: "Water-soluble vs fat-soluble vitamins explained, highlighting how the body absorbs and stores each type.",
        icon: <Restaurant />,
      },
      {
        title: "Absorption Tips",
        desc: "Pair fat-soluble vitamins with healthy fats for better absorption, ensuring maximum benefits from your diet.",
        icon: <Bedtime />,
      },
    ],
    sectionTitle: "Optimizing Nutrient Intake",
    body: [
      "Proper timing and combination of vitamins improves efficacy and overall nutrient utilization.",
      "Consult healthcare professionals before high-dose supplementation to avoid imbalances or toxicity.",
      "Understand which foods naturally provide these vitamins to optimize daily intake.",
      "Maintaining a balanced diet supports long-term vitamin absorption and health.",
    ],
  },
];

const HealthAndWellness = () => {
  const [selected, setSelected] = useState<Article | null>(null);

  return (
    <section className="bg-[#121e20] py-24 border-t border-[#146976]/10">
      <div className="max-w-360 mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-[#F5F2ED] text-3xl md:text-4xl font-black tracking-tight">
              Health & Wellness
            </h2>
            <p className="text-[#F5F2ED]/60 mt-2 font-medium">
              Expert tips and news for a healthier lifestyle
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-video rounded-2xl bg-[#1E3F45] mb-6 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              <span className="text-[10px] font-bold text-[#146976] uppercase tracking-widest mb-3 block">
                {a.category}
              </span>

              <h3 className="text-xl font-black text-[#F5F2ED] mb-3 group-hover:text-[#EBBA92] transition-colors">
                {a.title}
              </h3>

              <p className="text-[#F5F2ED]/60 text-sm mb-4">{a.desc.substring(0, 100)}</p>

              <button
                onClick={() => setSelected(a)}
                className="text-sm font-bold text-[#F5F2ED] flex items-center gap-2 hover:text-[#EBBA92] transition-colors"
              >
                Read Full Article
                <IconArrowRight size={16} className="mt-1" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-[#081315]/95 flex items-center justify-center z-50 px-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-0"
            onClick={() => setSelected(null)}
          />

          <div className="relative z-10 w-full max-w-200 rounded-xl overflow-hidden shadow-2xl flex flex-col bg-[#0e1416] border border-[#3c494c] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="relative w-full h-64 md:h-70 shrink-0">
              <Image
                src={selected.image}
                alt={selected.title}
                width={1000}
                height={800}
                className="w-full h-full object-cover"
                unoptimized
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0e1416]/90 via-[#0e1416]/40 to-transparent" />

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-3 p-2 rounded-full bg-[#0A1618]/40 border border-white/10 text-[#dde4e6] hover:bg-white/10 transition-all flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[10px]">
                  <Close />
                </span>
              </button>

              <div className="absolute bottom-0 left-0 w-full px-8 pb-8">
                <h1 className="text-3xl md:text-4xl font-black text-[#dde4e6] leading-tight">
                  {selected.title}
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="grow px-8 py-10 space-y-12">
              <section>
                <p className="text-lg text-[#bbc9cd] leading-relaxed">
                  {selected.desc}
                </p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selected.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1a2122] p-6 rounded-lg border border-[#3c494c]/20 space-y-3"
                  >
                    <div className="flex items-center gap-3 text-[#EBBA92]">
                      {card.icon}
                      <h3 className="font-bold text-[#EBBA92] text-lg">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#bbc9cd] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="border-l-4 border-[#7de8ff] pl-4 text-xl font-bold text-[#dde4e6]">
                  {selected.sectionTitle}
                </h2>
              </section>

              <section className="space-y-4 text-[#bbc9cd] text-base leading-relaxed">
                {selected.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HealthAndWellness;
