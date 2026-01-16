import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import aboutImg from "@assets/2e1ff457-d783-4625-ac19-0048389a8d2e_1768587366893.jfif";

export function AboutTeaser() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="max-w-xl">
               <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">Notre Histoire</span>
               <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Derrière chaque savon, une passion</h2>
               <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 La savonnerie est née d’un amour pour le fait-main, les ingrédients naturels et les petits rituels du quotidien. Ce qui a commencé comme une simple curiosité dans ma cuisine est devenu une véritable vocation : celle d'offrir des produits sains, beaux et respectueux de l'environnement.
               </p>
               <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                 Chaque lot est unique, coupé à la main et séché patiemment pendant plusieurs semaines pour garantir une douceur incomparable.
               </p>
               <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white">
                 En savoir plus sur nous
               </Button>
             </div>
          </div>

          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="relative w-full max-w-md aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src={aboutImg} 
                 alt="Portrait of soap maker" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
