import { Clock, Leaf, Heart } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#F9F7F2] border-t border-[#EAE7DE] relative overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EAE7DE] rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3 block">Savoir-Faire</span>
           <h2 className="font-serif text-3xl md:text-4xl text-[#2C2420] mb-6">L'Art de la Savonnerie Artisanale</h2>
           <p className="text-[#2C2420]/70 leading-relaxed font-light text-lg">
             Nous respectons un processus lent et méticuleux, hérité de traditions ancestrales, pour garantir une qualité d'exception à chaque barre.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Connecting line for desktop */}
           <div className="hidden md:block absolute top-12 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#2C2420]/10 to-transparent z-0"></div>

          {[
            { 
              icon: <Leaf className="w-6 h-6" />, 
              title: "Saponifié à Froid", 
              desc: "Une méthode ancestrale qui préserve les bienfaits des huiles et beurres végétaux." 
            },
            { 
              icon: <Heart className="w-6 h-6" />, 
              title: "Petites Quantités", 
              desc: "Fabriqué par lot de 12 savons uniquement, pour un contrôle parfait de la qualité." 
            },
            { 
              icon: <Clock className="w-6 h-6" />, 
              title: "4 Semaines de Cure", 
              desc: "Le temps de repos nécessaire pour que le savon développe toute sa douceur et sa longévité." 
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-[#EAE7DE] mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md relative">
                 <div className="absolute inset-1.5 rounded-full border border-[#EAE7DE] border-dashed"></div>
                 {item.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 text-[#2C2420]">{item.title}</h3>
              <p className="text-sm md:text-base text-[#2C2420]/70 leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
