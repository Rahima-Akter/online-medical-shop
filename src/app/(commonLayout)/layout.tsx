import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";


export default function CommonRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
