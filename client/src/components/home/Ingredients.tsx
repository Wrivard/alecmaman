import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ingredientsImg from "@assets/generated_images/natural_soap_ingredients_composition.png";

export function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-[#F5F2EA] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-700">
              <img 
                src={ingredientsImg} 
                alt="Natural ingredients" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-xl opacity-60"></div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">Transparence</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Des ingrédients choisis avec soin</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous croyons en la simplicité. Nos savons sont composés d’huiles végétales de qualité, sélectionnées pour leurs bienfaits et leur douceur. Pas de produits chimiques imprononçables, juste l'essentiel.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Huile d'olive extra vierge",
                "Beurre de Karité brut",
                "Huile de Coco bio",
                "Argiles naturelles",
                "Huiles essentielles pures",
                "Fleurs séchées locales"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/50 flex items-center justify-center text-primary-foreground">
                    <Check className="w-3 h-3 text-primary-foreground/80" />
                  </span>
                  <span className="text-foreground/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
