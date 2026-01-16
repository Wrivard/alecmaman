import { motion } from "framer-motion";
import { Link } from "wouter";
import { useProducts, ProductStatus } from "@/context/ProductContext";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Badge } from "@/components/ui/badge";

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
      
      <main className="pt-32 pb-24">
        {/* Hero Simple */}
        <section className="container mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Nos savons artisanaux</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Découvrez notre sélection de savons faits à la main, chacun avec sa personnalité et son parfum unique.
              Une invitation au voyage sensoriel.
            </p>
          </motion.div>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/savons/${product.id}`}>
                <motion.a 
                  className="group block cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className={`font-medium tracking-wide ${statusConfig[product.status].className}`}>
                        {statusConfig[product.status].label}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-primary/80">{product.scent}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.ingredients.slice(0, 3).join(", ")}...
                    </p>
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-widest font-bold border-b border-primary/30 pb-0.5 group-hover:border-primary transition-colors">
                        Voir le savon
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center border-t border-border pt-10">
            <p className="text-muted-foreground italic">
              Tous nos savons sont fabriqués à la main en petites quantités, avec des ingrédients simples et naturels.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
