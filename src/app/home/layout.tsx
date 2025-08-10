import BackgroundBits from "@/components/layout/background-bits";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <BackgroundBits />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
