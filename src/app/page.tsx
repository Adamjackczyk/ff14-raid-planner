import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Welcome from "@/features/Welcome";
import FeatureGrid from "@/features/FeatureGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-500/40 text-gray-100">
      <Header />
      <div className="container mx-auto p-8">
        <Welcome />
        <FeatureGrid />
      </div>
      <Footer />
    </main>
  );
}
