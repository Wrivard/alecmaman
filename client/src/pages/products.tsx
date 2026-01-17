import { motion } from "framer-motion";
import { Link } from "wouter";
import { useProducts, ProductStatus } from "@/context/ProductContext";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Clock, Heart, Droplet } from "lucide-react";
import stickerWomanSoap from "@assets/image_12_1768662774600.png";

import { MapCTASection } from "@/components/shared/MapCTASection";
import { ProcessSection } from "@/components/shared/ProcessSection";

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  available: { label: "Disponible", className: "bg-green-100 text-green-800 hover:bg-green-100" },
  limited: { label: "Édition Limitée", className: "bg-amber-100 text-amber-800 hover:bg-amber-100" },
  out_of_stock: { label: "Rupture", className: "bg-gray-100 text-gray-500 hover:bg-gray-100" }
};

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main>
        {/* Collection Hero */}
        <section className="relative pt-32 pb-20 bg-[#F9F7F2] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.img 
                src={stickerWomanSoap} 
                className="absolute top-10 left-0 lg:left-20 w-32 md:w-48 hidden md:block opacity-90 -rotate-6 z-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              />
              
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 relative z-10">La Collection</span>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 relative z-10">Nos Savons Artisanaux</h1>
              <div className="w-20 h-1 bg-primary/20 mx-auto mb-8 relative z-10"></div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed relative z-10">
                Découvrez notre sélection de savons faits à la main, chacun avec sa personnalité et son parfum unique.
                Une invitation au voyage sensoriel.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <Link key={product.id} href={`/savons/${product.id}`}>
                <motion.a 
                  className="group block cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-muted shadow-sm group-hover:shadow-md transition-all duration-300">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className={`font-medium tracking-wide ${statusConfig[product.status].className}`}>
                        {statusConfig[product.status].label}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium text-primary/80 uppercase tracking-wider">{product.scent}</p>
                    <div className="w-8 h-px bg-border mx-auto group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>
        </section>

        {/* The Missing Component: "Savoir-Faire" Section - Replaced with Shared Component */}
        <ProcessSection />

        {/* Merged Map & Advice Section */}
        <MapCTASection />
      </main>

      <Footer showCTA={true} showMap={false} />
    </div>
  );
}
