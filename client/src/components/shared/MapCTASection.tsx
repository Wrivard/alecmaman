import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";

export function MapCTASection() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <Droplet className="w-10 h-10 text-primary mb-6 opacity-80" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Besoin de conseils pour choisir ?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chaque peau est unique. Écrivez-nous pour trouver le savon parfait pour vous. Nous sommes là pour vous guider.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center w-full">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-md">
                    Demander conseil
                  </Button>
                </Link>
                <div className="text-left text-sm text-muted-foreground">
                  <p className="font-bold text-foreground">La Savonnière</p>
                  <p>Sainte-Félicité, Québec</p>
                  <p>contact@lasavonniere.com</p>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="h-[400px] lg:h-auto min-h-[400px] relative grayscale hover:grayscale-0 transition-all duration-700 border-t lg:border-t-0 lg:border-l border-secondary/20">
               <iframe 
                src="https://maps.google.com/maps?q=Sainte-Félicité,Quebec&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
