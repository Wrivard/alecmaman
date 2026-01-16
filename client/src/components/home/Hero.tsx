import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/image_1768586702374.png"; // Woman laughing with soap

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-[#F9F7F2]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="order-2 lg:order-1 space-y-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-xs font-bold tracking-wider uppercase">
            Savons Artisanaux Faits Main
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1]">
            Des savons doux, <br/>
            <span className="text-primary italic">naturels</span> et remplis d'amour
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Chaque savon est fabriqué à la main avec des ingrédients simples et soigneusement choisis, pour prendre soin de votre peau tout en douceur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
              Découvrir nos savons
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 px-8 h-12 text-base text-foreground">
              Nous contacter
            </Button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-primary/5 rounded-t-[10rem] lg:rounded-t-[20rem] transform translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 rounded-t-[10rem] lg:rounded-t-[20rem] overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Artisan soap maker" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute top-20 right-0 w-60 h-60 bg-secondary/20 rounded-full blur-3xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
