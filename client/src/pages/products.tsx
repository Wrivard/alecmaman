import { motion } from "framer-motion";
import { Link } from "wouter";
import { useProducts, ProductStatus } from "@/context/ProductContext";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Clock, Heart, Droplet } from "lucide-react";

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
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">La Collection</span>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">Nos Savons Artisanaux</h1>
              <div className="w-20 h-1 bg-primary/20 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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

        {/* The Missing Component: "Savoir-Faire" Section */}
        <section className="py-24 bg-[#2C2420] text-[#F9F7F2]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1 text-center lg:text-left">
                 <h2 className="font-serif text-3xl text-[#F9F7F2] mb-4">L'Art de la<br/>Savonnerie</h2>
                 <p className="text-[#F9F7F2]/70 text-sm leading-relaxed">
                   Nous respectons un processus lent et méticuleux pour garantir une qualité d'exception à chaque barre.
                 </p>
              </div>
              
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <Clock className="w-6 h-6" />, 
                    title: "4 Semaines de Cure", 
                    desc: "Le temps nécessaire pour que le savon développe toute sa douceur." 
                  },
                  { 
                    icon: <Leaf className="w-6 h-6" />, 
                    title: "Saponifié à Froid", 
                    desc: "Une méthode ancestrale qui préserve les bienfaits des huiles." 
                  },
                  { 
                    icon: <Heart className="w-6 h-6" />, 
                    title: "Petites Quantités", 
                    desc: "Fabriqué par lot de 12 savons uniquement, pour un contrôle parfait." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-6 bg-[#F9F7F2]/5 rounded-xl hover:bg-[#F9F7F2]/10 transition-colors border border-[#F9F7F2]/10">
                    <div className="w-12 h-12 bg-[#F9F7F2]/10 rounded-full flex items-center justify-center text-primary shadow-sm mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-[#F9F7F2]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Merged Map & Advice Section */}
        <section className="bg-primary/5 pt-16 pb-24">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-secondary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                  <Droplet className="w-10 h-10 text-primary mb-6 opacity-80" />
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Besoin de conseils pour choisir ?</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Chaque peau est unique. Écrivez-nous pour trouver le savon parfait pour vous. Nous sommes là pour vous guider.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 items-center w-full">
                    <Link href="/contact">
                      <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-md">
                        Demander conseil
                      </Button>
                    </Link>
                    <div className="text-left text-sm text-muted-foreground">
                      <p className="font-bold text-foreground">La Savonnière</p>
                      <p>Sainte-Félicité, Québec</p>
                      <p>contact@lasavonniere.com</p>
                    </div>
                  </div>
                </div>

                {/* Map Side */}
                <div className="h-[400px] lg:h-auto min-h-[400px] relative grayscale hover:grayscale-0 transition-all duration-700 border-t lg:border-t-0 lg:border-l border-secondary/20">
                   <iframe 
                    src="https://maps.google.com/maps?q=Sainte-Félicité,Quebec&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showCTA={true} showMap={false} />
    </div>
  );
}
