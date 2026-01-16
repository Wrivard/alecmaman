import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import assets
import soapLavender from "@assets/generated_images/artisanal_lavender_soap_bar_on_linen.png";
import soapHoney from "@assets/generated_images/artisanal_honey_oat_soap_bar.png";
import soapRose from "@assets/generated_images/artisanal_rose_clay_soap_bar.png";
import soapHands from "@assets/image_1768586718005.png"; 

const products = [
  {
    id: 1,
    name: "Douceur de Lavande",
    scent: "Lavande & Karité",
    description: "Un classique apaisant pour une détente absolue avant le coucher.",
    image: soapLavender,
    tag: "Best-seller"
  },
  {
    id: 2,
    name: "Miel & Avoine",
    scent: "Miel Local & Lait d'Avoine",
    description: "Exfoliation douce et hydratation intense pour les peaux sèches.",
    image: soapHoney,
    tag: "Nouveau"
  },
  {
    id: 3,
    name: "Argile Rose",
    scent: "Géranium & Bois de Hô",
    description: "Purifiant et équilibrant, idéal pour raviver l'éclat du teint.",
    image: soapRose,
    tag: null
  },
   {
    id: 4,
    name: "L'Authentique",
    scent: "Sans parfum",
    description: "La simplicité à l'état pur. Juste de l'huile d'olive et de la douceur.",
    image: soapHands,
    tag: "Sensible"
  }
];

export function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary/80 uppercase">Notre Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Nos savons du moment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">
                    {product.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Voir le détail
                  </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">{product.scent}</p>
                <p className="text-sm text-muted-foreground/80 line-clamp-2 mt-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary hover:text-white px-10">
            Voir tous les savons
          </Button>
        </div>
      </div>
    </section>
  );
}
