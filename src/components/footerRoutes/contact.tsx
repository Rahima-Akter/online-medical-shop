/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  IconPhone,
  IconMail,
  IconShieldCheck,
  IconLock,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

const Contact = () => {
  const formRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    formRef.current?.reset();
  };
  return (
    <div className="font-['Inter'] text-[#dde4e6] min-h-screen flex items-center justify-center p-6 bg-[#0e1416]">
      <main className="w-full max-w-200 mx-auto space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-[3rem] leading-[1.1] tracking-[-0.033em] font-black text-[#13cfec]">
            Contact Support
          </h1>
          <p className="text-[#bbc9cd] max-w-md mx-auto">
            Our clinical technical team is standing by to assist with your
            medical data inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Quick Actions */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-6 rounded-xl flex flex-col items-center text-center group cursor-pointer hover:bg-[#ffffff]/5 transition-all bg-[#1a2122]">
              <div className="w-12 h-12 rounded-full bg-[#7de8ff]/10 flex items-center justify-center mb-4 text-[#7de8ff]">
                <IconPhone />
              </div>
              <span className="text-[0.75rem] leading-none tracking-[0.05em] font-bold text-[#bbc9cd] uppercase mb-1">
                + 01234567890
              </span>
              <p className="text-[1.5rem] leading-tight] font-bold text-[#dde4e6]">
                Call Us
              </p>
            </div>

            <div className="p-6 rounded-xl flex flex-col items-center text-center group cursor-pointer hover:bg-[#ffffff]/5 transition-all bg-[#1a2122]">
              <div className="w-12 h-12 rounded-full bg-[#7de8ff]/10 flex items-center justify-center mb-4 text-[#7de8ff]">
                <IconMail />
              </div>
              <span className="text-[0.75rem] leading-none tracking-[0.05em] font-bold text-[#bbc9cd] uppercase mb-1">
                mediStore@gmail.com
              </span>
              <p className="text-[1.5rem] leading-tight] font-bold text-[#dde4e6]">
                Email Support
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-8">
            <div className="p-8 rounded-xl relative overflow-hidden bg-[#1a2122]">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#7de8ff]/5 rounded-full blur-3xl"></div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.75rem] leading-none tracking-[0.05em] font-bold text-[#bbc9cd] uppercase">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-[#161d1e] border border-[#ffffff]/5 rounded-lg px-4 py-3 text-[#dde4e6] placeholder:text-[#3c494c] focus:outline-none focus:border-[#7de8ff]/40 transition-colors"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.75rem] leading-none tracking-[0.05em] font-bold text-[#bbc9cd] uppercase">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-[#161d1e] border border-[#ffffff]/5 rounded-lg px-4 py-3 text-[#dde4e6] placeholder:text-[#3c494c] focus:outline-none focus:border-[#7de8ff]/40 transition-colors"
                      placeholder="john@medistore.tech"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.75rem] leading-none tracking-[0.05em] font-bold text-[#bbc9cd] uppercase">
                    Your Message
                  </label>
                  <textarea
                    className="w-full bg-[#161d1e] border border-[#ffffff]/5 rounded-lg px-4 py-3 text-[#dde4e6] placeholder:text-[#3c494c] focus:outline-none focus:border-[#7de8ff]/40 transition-colors resize-none"
                    placeholder="How can our clinical team help you today?"
                    rows={5}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <div className="flex items-center gap-3 bg-[#7de8ff]/10 px-4 py-2 rounded-2xl border border-[#7de8ff]/20">
                    <IconShieldCheck className="text-[#7de8ff]" size={16} />
                    <p className="text-[0.75rem] leading-none tracking-[0.05em] font-bold text-[#7de8ff] uppercase">
                      We aim to respond within 2 hours.
                    </p>
                  </div>

                  <button
                    className="w-full sm:w-auto px-8 py-4 bg-[#ffab3c] hover:bg-[#ffd09e] transition-all text-[#2b1700] font-bold rounded-lg shadow-lg shadow-[#ffab3c]/10 active:scale-[0.98]"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Image */}
            <div className="mt-8 rounded-xl overflow-hidden h-32 relative">
              <Image
                alt="Clinical environment"
                className="w-full h-full object-cover opacity-40 grayscale"
                fill
                unoptimized
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMPsVouzzie1zn2yOB2KWngPO0XnIWqNoGFbWbzupxaGQjs2vY-ReWGjmF372lnpUEEqeOpBaVvVa_MVl-pStq22zWE6ZWZi-C_pcdFYIAJr3TniBM3T_hhdtRJzmogiuOnQRrwKYJpZAIPMztwG9ky0W1R7JJDqoozM_Ae9jQaKXV-mixhC-suwICAh1nlEz-OQcRNroo4qPZm3SErovspsc1BgHeeAs-s8xwJH_o6f4M3O93bmvzfwTM7GAZKgie7Ol5QZwvaw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e1416] to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center pt-12">
          <div className="flex items-center gap-2 text-[#859397] text-xs uppercase tracking-widest opacity-50">
            <IconLock size={14} />
            Secure End-to-End Encrypted Support
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
