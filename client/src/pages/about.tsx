import { motion } from "framer-motion";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import aboutImg from "@assets/image_1768593606691.png";
import { Heart, Leaf, Sun, Droplet } from "lucide-react";

import { MapCTASection } from "@/components/shared/MapCTASection";

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
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Ysabelle Michaud</span>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
              L'art de la savonnerie <span className="italic text-primary">artisanale</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bienvenue dans mon atelier, où chaque savon est créé avec patience, passion et le désir de partager un peu de douceur au quotidien.
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
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src={aboutImg} 
                alt="Ysabelle Michaud dans son atelier" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <h2 className="text-3xl font-serif text-foreground">Mon histoire, mon atelier</h2>
              <p>
                Je m'appelle Ysabelle Michaud, et la savonnerie est bien plus qu'un métier pour moi : c'est une façon de renouer avec l'essentiel. Tout a commencé par une quête de simplicité et de transparence pour ma propre famille. Je voulais des produits sains, dont je connaissais chaque ingrédient.
              </p>
              <p>
                Dans mon atelier, le temps ralentit. J'utilise la méthode de saponification à froid, un procédé artisanal qui demande de la patience (4 à 6 semaines de cure !) mais qui est le seul à préserver véritablement les propriétés nourrissantes des huiles et beurres végétaux.
              </p>
              <p>
                Ici, pas de machines industrielles. Je mesure, mélange, coule et coupe chaque barre à la main. Mes savons sont le reflet de mon environnement : naturels, authentiques et faits avec cœur. C'est un privilège de pouvoir partager ce savoir-faire avec vous.
              </p>
              <div className="pt-4">
                 <p className="font-serif text-xl text-primary italic">- Ysabelle</p>
              </div>
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

        <MapCTASection />
      </main>

      <Footer showCTA={true} showMap={false} />
    </div>
  );
}
