import { useRoute, Link } from "wouter";
import { useProducts, ProductStatus } from "@/context/ProductContext";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  available: { label: "Disponible", className: "bg-green-100 text-green-800" },
  limited: { label: "Édition Limitée", className: "bg-amber-100 text-amber-800" },
  out_of_stock: { label: "Rupture", className: "bg-gray-100 text-gray-500" }
};

export default function ProductDetailPage() {
  const [match, params] = useRoute("/savons/:id");
  const { products } = useProducts();
  
  const product = products.find(p => p.id === Number(params?.id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-serif">Savon introuvable</h1>
        <Link href="/savons">
          <Button variant="link">Retour aux savons</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link href="/savons">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la boutique
            </a>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Image Section */}
            <motion.div 
              className="relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="space-y-8 lg:pt-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className={`text-sm px-3 py-1 ${statusConfig[product.status].className}`}>
                  {statusConfig[product.status].label}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-xl text-primary font-medium">
                  {product.scent}
                </p>
              </div>

              <div className="prose prose-stone text-muted-foreground leading-relaxed">
                <p>{product.fullDescription}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="font-serif text-lg text-foreground">Ingrédients Clés</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 space-y-4">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  Intéressé par ce savon ?
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base">
                    Nous contacter
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-4">
                  * Pas de vente directe en ligne. Contactez-nous pour commander.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
