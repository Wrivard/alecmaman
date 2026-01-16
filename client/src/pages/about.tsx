import { motion } from "framer-motion";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import aboutImg from "@assets/2e1ff457-d783-4625-ac19-0048389a8d2e_1768587366893.jfif";
import { Heart, Leaf, Sun, Droplet } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Emotion */}
        <section className="container mx-auto px-6 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Notre Philosophie</span>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
              Une passion pour le <span className="italic text-primary">fait-main</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La savonnerie est née d’un amour pour les ingrédients simples, les gestes authentiques et les petits rituels du quotidien.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={aboutImg} 
                alt="Notre histoire" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <h2 className="text-3xl font-serif text-foreground">Pourquoi la savonnerie a commencé</h2>
              <p>
                Tout a débuté dans ma cuisine, avec une simple envie : savoir exactement ce que j'appliquais sur ma peau et celle de ma famille. Lassée des listes d'ingrédients interminables et incompréhensibles, je suis revenue aux sources.
              </p>
              <p>
                La saponification à froid s'est imposée comme une évidence. C'est une méthode ancestrale, lente et respectueuse, qui préserve les bienfaits des huiles et produit naturellement de la glycérine hydratante.
              </p>
              <p>
                Aujourd'hui, chaque savon est le fruit de cette démarche : pas de compromis, juste de la nature, de la patience et beaucoup d'amour.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#F5F2EA] py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Heart />, title: "Authenticité", text: "Des produits vrais, sans artifice." },
                { icon: <Leaf />, title: "Simplicité", text: "Des formules courtes et efficaces." },
                { icon: <Droplet />, title: "Douceur", text: "Respect du film hydrolipidique de la peau." },
                { icon: <Sun />, title: "Local", text: "Privilégier les producteurs de la région." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center space-y-4">
                  <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mx-auto">
                    {val.icon}
                  </div>
                  <h3 className="font-serif text-xl">{val.title}</h3>
                  <p className="text-muted-foreground text-sm">{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
