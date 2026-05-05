import Link from "next/link";
import {
  IconCheck,
  IconPackage,
  IconTruck,
  IconHome,
  IconBolt,
  IconWorld,
  IconInfoCircle,
} from "@tabler/icons-react";
import Image from "next/image";

// Shipping FAQ Section
const ShipingFAQ = () => {
  return (
    <div className="bg-[#0A1618]">
      <main className="max-w-240 mx-auto px-6 pb-20 pt-5">
        {/* Breadcrumbs */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-wrap justify-between gap-3 py-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#ffffff] text-4xl font-black leading-tight tracking-[-0.033em]">
                Shipping Information
              </p>
              <p className="text-[#FFB38E]/80 text-base font-normal leading-normal">
                Track your orders and understand our delivery commitments.
              </p>
            </div>
          </div>

          {/* Delivery Timelines */}
          <div className="mt-8 bg-[#142D30] rounded-xl p-6 border border-[#ffffff]/5">
            <h2 className="text-[#ffffff] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
              Delivery Timelines
            </h2>

            <div className="grid grid-cols-[40px_1fr] gap-x-2">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-[#FFB38E]">
                  <IconCheck size={24} />
                </div>
                <div className="w-[1.5px] bg-[#FFB38E]/20 h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 border-b border-[#ffffff]/5">
                <p className="text-[#ffffff] text-base font-medium leading-normal">
                  Order Confirmed
                </p>
                <p className="text-[#FFB38E]/70 text-base font-normal leading-normal">
                  Instant notification via email
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#FFB38E]/20 h-2"></div>
                <div className="text-[#FFB38E]">
                  <IconPackage size={24} />
                </div>
                <div className="w-[1.5px] bg-[#FFB38E]/20 h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 border-b border-[#ffffff]/5">
                <p className="text-[#ffffff] text-base font-medium leading-normal">
                  Processing &amp; Packing
                </p>
                <p className="text-[#FFB38E]/70 text-base font-normal leading-normal">
                  1-2 Business Days
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#FFB38E]/20 h-2"></div>
                <div className="text-[#FFB38E]">
                  <IconTruck size={24} />
                </div>
                <div className="w-[1.5px] bg-[#FFB38E]/20 h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 border-b border-[#ffffff]/5">
                <p className="text-[#ffffff] text-base font-medium leading-normal">
                  In Transit
                </p>
                <p className="text-[#FFB38E]/70 text-base font-normal leading-normal">
                  3-5 Business Days
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#FFB38E]/20 h-2"></div>
                <div className="text-[#FFB38E]">
                  <IconHome size={24} />
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#ffffff] text-base font-medium leading-normal">
                  Delivered
                </p>
                <p className="text-[#FFB38E]/70 text-base font-normal leading-normal">
                  Final Destination Reach
                </p>
              </div>
            </div>
          </div>

          {/* Policies */}
          <h2 className="text-[#ffffff] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-10">
            Shipping Methods &amp; Policies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-[#142D30] p-6 rounded-xl border border-[#ffffff]/5 flex flex-col gap-3">
              <div className="w-12 h-12 bg-[#FFB38E]/10 rounded-lg flex items-center justify-center text-[#FFB38E]">
                <IconBolt size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#ffffff]">
                Express Delivery
              </h3>
              <p className="text-[#FFB38E]/70 text-sm leading-relaxed">
                Need it fast? Our express shipping ensures your package arrives
                within 24-48 hours of dispatch. Available for select
                metropolitan areas with real-time GPS tracking.
              </p>
              <div className="mt-auto pt-4 flex justify-between items-center text-sm font-medium">
                <span className="text-[#ffffff]">Cost: $14.99</span>
                <span className="text-[#FFB38E]">Best Value</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#142D30] p-6 rounded-xl border border-[#ffffff]/5 flex flex-col gap-3">
              <div className="w-12 h-12 bg-[#FFB38E]/10 rounded-lg flex items-center justify-center text-[#FFB38E]">
                <IconWorld size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#ffffff]">
                International Shipping
              </h3>
              <p className="text-[#FFB38E]/70 text-sm leading-relaxed">
                We ship to over 50 countries worldwide. International orders
                typically arrive within 7-14 business days, depending on local
                customs processing and courier schedules.
              </p>
              <div className="mt-auto pt-4 flex justify-between items-center text-sm font-medium">
                <span className="text-[#ffffff]">Starts at: $25.00</span>
                <span className="text-[#FFB38E]">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-8 p-6 bg-[#142D30]/50 rounded-xl border border-dashed border-[#FFB38E]/30 flex gap-4 items-start">
            <IconInfoCircle className="text-[#FFB38E] mt-1" />
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-[#ffffff]">
                Holiday Season Notice
              </p>
              <p className="text-sm text-[#FFB38E]/70 leading-relaxed">
                During peak holiday periods (November - December), please allow
                an additional 2-3 business days for processing and delivery due
                to high volume with our courier partners.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 rounded-2xl overflow-hidden relative aspect-video">
            <Image
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWNS8MQZ9FS1MbOh3agjD_WRxdjsoLPaj-p7Av7TJnn2hTro4xpEw-UeJ9Z7n_S9pW-UwFy1Haq3BZoygAGkfKs3y5Ju3pJUtd3gZj-yv78tw173AK_o7yYCaGXq_G3zrdSvz6IVmr9YgmDtwf09_yjhdoWW8TMv-PScDRB6p4YP3HS0pwYHZoroZIuYQZ5G2HQzXYnVvcyRVfO6tO8oHkM3zfqpGz-ccK4iUdN-5jYifYOXvYTiWy9PQd3Os5cwYhYJDtaTJbjA"
              alt=""
              unoptimized
              width={100}
              height={100}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A1618] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-2xl font-bold text-[#ffffff]">
                Global Network
              </p>
              <p className="text-[#FFB38E]/90 text-sm max-w-md mt-2">
                Our proprietary logistics network connects three continents with
                carbon-neutral shipping operations.
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="mt-16 flex flex-col items-center text-center gap-4 py-10 border-t border-[#ffffff]/5">
            <h3 className="text-xl font-bold text-[#ffffff]">
              Still have questions?
            </h3>
            <p className="text-[#FFB38E]/70 max-w-md">
              Our support team is available 24/7 to help you with tracking or
              shipping modifications.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#FFB38E] text-[#0A1618] font-bold rounded-lg hover:bg-[#ffffff] transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/privacy-policy"
                className="px-6 py-2 border border-[#FFB38E] text-[#FFB38E] font-bold rounded-lg hover:bg-[#FFB38E]/10 transition-colors"
              >
                View Full Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShipingFAQ;
