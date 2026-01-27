import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';

export default function TrustFeatures() {
  const features = [
    { icon: <LocalShippingIcon fontSize="large" />, title: "Free Delivery", subtitle: "On orders over $50" },
    { icon: <VerifiedUserIcon fontSize="large" />, title: "Certified Meds", subtitle: "100% Authentic Quality" },
    { icon: <SupportAgentIcon fontSize="large" />, title: "Expert Support", subtitle: "Talk to Pharmacists" },
    { icon: <PaymentsIcon fontSize="large" />, title: "Secure Pay", subtitle: "Encrypted Transactions" },
  ];

  return (
    <section className="bg-[#EBBA92] py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4 text-[#1E3F45]">
            {f.icon}
            <div>
              <p className="font-black text-sm uppercase tracking-wider">{f.title}</p>
              <p className="text-xs font-medium opacity-70">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
