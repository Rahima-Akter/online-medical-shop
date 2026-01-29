import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactlessIcon from '@mui/icons-material/Contactless';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { RssFeed, Share } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-[#1E3F45] text-white pt-16 pb-5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#EBBA92] rounded-lg flex items-center justify-center text-[#1E3F45]">
                <MedicalServicesIcon />
              </div>
              <h2 className="text-2xl font-black tracking-tight">MediStore</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              The world&apos;s leading online pharmacy providing high-quality medicines and personal care products directly to your home.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EBBA92] hover:text-[#1E3F45] transition-colors" href="#"><span className="material-symbols-outlined text-xl"><Share/></span></a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EBBA92] hover:text-[#1E3F45] transition-colors" href="#"><span className="material-symbols-outlined text-xl"><RssFeed/></span></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Our Services</a></li>
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Contact Support</a></li>
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Return Policy</a></li>
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Shipping FAQs</a></li>
              <li><a className="hover:text-[#EBBA92] transition-colors" href="#">Order Tracking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Get health tips and exclusive offers!</p>
            <div className="flex gap-2">
              <input className="flex-1 bg-white/10 border-white/20 rounded-lg text-sm focus:ring-[#EBBA92] focus:border-[#EBBA92] px-3" placeholder="Email" type="email"/>
              <button className="bg-[#EBBA92] text-[#1E3F45] px-4 py-2 rounded-lg font-black text-sm">Join</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-medium">© 2024 MediStore Pharmacy. All rights reserved.</p>
          <div className="flex gap-6 text-white/40">
            <span className="material-symbols-outlined"><ContactlessIcon/></span>
            <span className="material-symbols-outlined"><CreditCardIcon/></span>
            <span className="material-symbols-outlined"><AccountBalanceWalletIcon/></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
