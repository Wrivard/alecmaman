import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Ingredients } from "@/components/home/Ingredients";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <ProductGrid />
        <Ingredients />
        <AboutTeaser />
      </main>
      <Footer />
    </div>
  );
}
