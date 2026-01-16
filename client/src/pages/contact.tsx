import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Mail, Instagram, Truck, Store } from "lucide-react";

export default function ContactPage() {
  const [location] = useLocation();
  const [deliveryMethod, setDeliveryMethod] = useState<"shipping" | "pickup">("shipping");
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    // Simple query param parsing since wouter's useSearch isn't always available or behaves differently
    const searchParams = new URLSearchParams(window.location.search);
    const product = searchParams.get("product");
    if (product) {
      setOrderMessage(`Bonjour, je souhaiterais commander le savon : ${product}.\n\nQuantité désirée : `);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground">Passer une commande</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Remplissez le formulaire ci-dessous avec les savons de votre choix. Nous vous recontacterons rapidement pour confirmer le total et les détails de livraison.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white rounded-3xl overflow-hidden shadow-lg border border-border">
              
              {/* Form Side */}
              <div className="md:col-span-2 p-8 md:p-12">
                <form className="space-y-6">
                  {/* Delivery Method Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Mode de réception</label>
                    <RadioGroup 
                      defaultValue="shipping" 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      onValueChange={(value) => setDeliveryMethod(value as "shipping" | "pickup")}
                    >
                      <div>
                        <RadioGroupItem value="shipping" id="shipping" className="peer sr-only" />
                        <Label
                          htmlFor="shipping"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all h-full"
                        >
                          <Truck className="mb-3 h-6 w-6 text-muted-foreground peer-data-[state=checked]:text-primary" />
                          <div className="text-center">
                            <span className="block font-semibold">Livraison</span>
                            <span className="text-xs text-muted-foreground mt-1">Expédié par la poste</span>
                          </div>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                        <Label
                          htmlFor="pickup"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all h-full"
                        >
                          <Store className="mb-3 h-6 w-6 text-muted-foreground peer-data-[state=checked]:text-primary" />
                          <div className="text-center">
                            <span className="block font-semibold">Cueillette</span>
                            <span className="text-xs text-muted-foreground mt-1">Au marché ou atelier</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Nom</label>
                      <Input placeholder="Jean Dupont" className="bg-background/50 border-input focus:border-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Téléphone</label>
                      <Input placeholder="555-555-5555" className="bg-background/50 border-input focus:border-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Courriel</label>
                    <Input type="email" placeholder="jean@exemple.com" className="bg-background/50 border-input focus:border-primary" />
                  </div>

                  {/* Conditional Address Fields */}
                  {deliveryMethod === "shipping" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Adresse de livraison</label>
                        <Input placeholder="123 Rue Principale" className="bg-background/50 border-input focus:border-primary" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Ville" className="bg-background/50 border-input focus:border-primary" />
                        <Input placeholder="Code Postal" className="bg-background/50 border-input focus:border-primary" />
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Commande</label>
                    <Textarea 
                      placeholder="Ex: 3 savons Lavande, 2 savons Avoine et Miel..." 
                      className="min-h-[150px] bg-background/50 border-input focus:border-primary" 
                      value={orderMessage}
                      onChange={(e) => setOrderMessage(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Indiquez les variétés et quantités désirées.</p>
                  </div>

                  <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white h-12 text-base">
                    Envoyer ma commande
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
                      <span>ysabellemichaud@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Sainte-Félicité / Matane, Québec</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Instagram className="w-5 h-5 text-primary" />
                      <span>@lasavonniere</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/10">
                   <p className="text-xs text-muted-foreground uppercase tracking-widest text-center">
                     Ysabelle Michaud — Fabrication Artisanale
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer showCTA={false} showMap={false} />
    </div>
  );
}
