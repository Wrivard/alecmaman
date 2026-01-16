import { motion } from "framer-motion";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground">Une question ?</h1>
              <p className="text-xl text-muted-foreground">
                Une demande spéciale ? Écrivez-nous, nous serons ravis de vous répondre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white rounded-3xl overflow-hidden shadow-lg border border-border">
              
              {/* Form Side */}
              <div className="md:col-span-2 p-8 md:p-12">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Nom</label>
                    <Input placeholder="Jean Dupont" className="bg-background/50 border-input focus:border-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Courriel</label>
                    <Input type="email" placeholder="jean@exemple.com" className="bg-background/50 border-input focus:border-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Message</label>
                    <Textarea placeholder="Bonjour, j'aimerais savoir..." className="min-h-[150px] bg-background/50 border-input focus:border-primary" />
                  </div>

                  <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white">
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Info Side */}
              <div className="bg-[#F5F2EA] p-8 md:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-foreground">Nos Coordonnées</h3>
                    <p className="text-muted-foreground text-sm">Nous sommes une petite structure artisanale, nous répondons généralement sous 24-48h.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>contact@lasavonniere.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Provence, France</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Instagram className="w-5 h-5 text-primary" />
                      <span>@lasavonniere</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/10">
                   <p className="text-xs text-muted-foreground uppercase tracking-widest text-center">
                     Fabrication Artisanale & Locale
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
