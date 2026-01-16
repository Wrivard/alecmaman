import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import assets
import soapMint from "@assets/soaps/menthe-poivree/28b8dd8d-ef9d-492d-8259-26e64d92127f.jfif";
import soapCoco from "@assets/soaps/noix-de-coco/2511d2e5-f227-44f9-97da-80ec1b0a852c.jfif";
import soapApple from "@assets/soaps/pomme-cannelle/413da458-9125-4f01-bf41-0c281553d993.jfif";
import soapTea from "@assets/soaps/the-vert-concombre/16f75729-80ca-4897-a859-6952cf21a95c.jfif"; 

const products = [
  {
    id: 7,
    name: "Menthe poivrée",
    scent: "Énergisant & Frais",
    description: "Un savon vivifiant aux notes fraîches et tonifiantes.",
    image: soapMint,
    tag: "Best-seller"
  },
  {
    id: 8,
    name: "Noix de coco",
    scent: "Tropical & Doux",
    description: "Un parfum crémeux et enveloppant qui évoque les îles.",
    image: soapCoco,
    tag: "Nouveau"
  },
  {
    id: 9,
    name: "Pomme et cannelle",
    scent: "Chaleureux & Réconfortant",
    description: "Une fragrance douce et épicée, parfaite pour l'automne.",
    image: soapApple,
    tag: null
  },
   {
    id: 11,
    name: "Thé vert et concombre",
    scent: "Frais & Zen",
    description: "Une senteur légère et apaisante pour un moment de détente.",
    image: soapTea,
    tag: "Apaisant"
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
