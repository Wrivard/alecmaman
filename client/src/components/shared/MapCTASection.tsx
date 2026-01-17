import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";

export function MapCTASection() {
  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#EAE7DE] flex flex-col lg:flex-row min-h-[450px]">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center items-start text-left space-y-8">
            <div className="w-12 h-12 rounded-full border border-[#2C2420]/10 flex items-center justify-center mb-2">
               <Droplet className="w-5 h-5 text-[#2C2420]/60" strokeWidth={1.5} />
            </div>
            
            <div className="space-y-4 max-w-md">
              <h2 className="font-serif text-4xl text-[#2C2420]">Besoin de conseils pour choisir ?</h2>
              <p className="text-[#2C2420]/70 leading-relaxed font-light">
                Chaque peau est unique. Écrivez-nous pour trouver le savon parfait pour vous. Nous sommes là pour vous guider.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center pt-2">
              <Link href="/contact">
                <Button className="rounded-full px-8 h-12 text-sm font-medium bg-[#8C7E74] hover:bg-[#7A6D64] text-white shadow-md transition-all tracking-wide">
                  Demander conseil
                </Button>
              </Link>
              
              <div className="text-left text-xs leading-5 text-[#2C2420]/60 border-l border-[#2C2420]/10 pl-4">
                <p className="font-bold text-[#2C2420]">Ysabelle Michaud</p>
                <p>Sainte-Félicité, Québec</p>
                <p>ysabellemichaud@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto bg-[#F5F2EA] border-t lg:border-t-0 lg:border-l border-[#EAE7DE]">
             {/* Styled Google Map */}
             <iframe 
              src="https://maps.google.com/maps?q=Sainte-Félicité,Quebec&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) sepia(0.3) opacity(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full mix-blend-multiply"
            ></iframe>
            
            {/* Overlay to enforce beige tint */}
            <div className="absolute inset-0 bg-[#F5F2EA]/20 pointer-events-none mix-blend-overlay"></div>
            
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm z-20 border border-white/50">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2C2420]">Sainte-Félicité, QC</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
