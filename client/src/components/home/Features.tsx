import { motion } from "framer-motion";
import { Leaf, Heart, Droplets, MapPin } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Faits à la main",
    description: "Chaque savon est fabriqué artisanalement avec soin et passion dans notre atelier."
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Ingrédients simples",
    description: "Des huiles naturelles sélectionnées pour leur douceur et leur qualité supérieure."
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Doux pour la peau",
    description: "Formulés pour convenir à un usage quotidien et aux peaux les plus sensibles."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Production locale",
    description: "Fabriqué localement avec amour, respectant les traditions savonnières."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary-foreground mb-2">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
