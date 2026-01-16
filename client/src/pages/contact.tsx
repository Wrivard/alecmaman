import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useProducts } from "@/context/ProductContext";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Mail, Instagram, Truck, Store, Minus, Plus, ShoppingBasket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const [location] = useLocation();
  const { products } = useProducts();
  const [deliveryMethod, setDeliveryMethod] = useState<"shipping" | "pickup">("shipping");
  
  // Cart state: Record<productId, quantity>
  const [cart, setCart] = useState<Record<number, number>>({});
  const [customRequest, setCustomRequest] = useState("");

  useEffect(() => {
    // Check if we have a product in URL to pre-select
    const searchParams = new URLSearchParams(window.location.search);
    const productName = searchParams.get("product");
    
    if (productName) {
      const product = products.find(p => p.name === productName);
      if (product) {
        setCart(prev => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
      }
    }
  }, [products]);

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, currentQty + delta);
      
      const newCart = { ...prev };
      if (newQty === 0) {
        delete newCart[id];
      } else {
        newCart[id] = newQty;
      }
      return newCart;
    });
  };

  // Generate the order message automatically based on selection
  const generateOrderSummary = () => {
    const selectedItems = Object.entries(cart).map(([id, qty]) => {
      const product = products.find(p => p.id === Number(id));
      return product ? `- ${qty}x ${product.name} (${product.scent})` : null;
    }).filter(Boolean);

    if (selectedItems.length === 0 && !customRequest) return "";

    let message = "Bonjour, je souhaiterais passer la commande suivante :\n\n";
    if (selectedItems.length > 0) {
      message += selectedItems.join("\n");
      message += "\n\n";
    }
    
    if (customRequest) {
      message += `Note supplémentaire :\n${customRequest}`;
    }

    return message;
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground">Passer une commande</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sélectionnez vos savons préférés ci-dessous. Nous vous recontacterons rapidement pour confirmer le total et les détails.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Product Selection Side */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-border">
                  <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                    <ShoppingBasket className="w-6 h-6 text-primary" />
                    Votre Sélection
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {products.map((product) => (
                      <div 
                        key={product.id}
                        className={`relative flex items-center p-3 rounded-xl border transition-all duration-300 ${
                          cart[product.id] 
                            ? "border-primary bg-primary/5 shadow-sm" 
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="ml-3 flex-grow min-w-0">
                          <h3 className="font-medium text-foreground truncate">{product.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{product.scent}</p>
                          <div className="mt-1">
                            {product.status === "out_of_stock" ? (
                              <Badge variant="outline" className="text-[10px] py-0 h-5 border-gray-200 text-gray-500 bg-gray-50">Rupture</Badge>
                            ) : (
                              <div className="flex items-center gap-3">
                                <button 
                                  onClick={(e) => { e.preventDefault(); updateQuantity(product.id, -1); }}
                                  className="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors disabled:opacity-30"
                                  disabled={!cart[product.id]}
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm font-bold w-4 text-center">{cart[product.id] || 0}</span>
                                <button 
                                  onClick={(e) => { e.preventDefault(); updateQuantity(product.id, 1); }}
                                  className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-dashed border-border">
                    <Label htmlFor="notes" className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
                      Demande spéciale ou note
                    </Label>
                    <Textarea 
                      id="notes"
                      placeholder="Emballage cadeau, allergies, questions..." 
                      className="bg-background/50 min-h-[80px]"
                      value={customRequest}
                      onChange={(e) => setCustomRequest(e.target.value)}
                    />
                  </div>
                </div>

                {/* Contact Info Form */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-border">
                  <h2 className="font-serif text-2xl mb-6">Vos Coordonnées</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-3">
                      <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Mode de réception</Label>
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
                            <Truck className="mb-2 h-5 w-5 text-muted-foreground peer-data-[state=checked]:text-primary" />
                            <div className="text-center">
                              <span className="block font-semibold text-sm">Livraison</span>
                            </div>
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                          <Label
                            htmlFor="pickup"
                            className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all h-full"
                          >
                            <Store className="mb-2 h-5 w-5 text-muted-foreground peer-data-[state=checked]:text-primary" />
                            <div className="text-center">
                              <span className="block font-semibold text-sm">Cueillette</span>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Nom</Label>
                        <Input placeholder="Jean Dupont" className="bg-background/50 border-input focus:border-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Téléphone</Label>
                        <Input placeholder="555-555-5555" className="bg-background/50 border-input focus:border-primary" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Votre Courriel</Label>
                      <Input type="email" placeholder="jean@exemple.com" className="bg-background/50 border-input focus:border-primary" />
                    </div>

                    <AnimatePresence>
                      {deliveryMethod === "shipping" && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 overflow-hidden"
                        >
                          <div className="space-y-2">
                            <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Adresse</Label>
                            <Input placeholder="123 Rue Principale" className="bg-background/50 border-input focus:border-primary" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Ville" className="bg-background/50 border-input focus:border-primary" />
                            <Input placeholder="Code Postal" className="bg-background/50 border-input focus:border-primary" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white h-14 text-lg shadow-lg shadow-primary/20 mt-4">
                      Envoyer ma commande {totalItems > 0 && `(${totalItems} articles)`}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-2">
                      En cliquant, vous enverrez une demande de commande. Aucun paiement n'est requis maintenant.
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-1">
                 <div className="sticky top-24 space-y-6">
                    {/* Summary Card (Visible on Desktop) */}
                    <div className="hidden lg:block bg-[#F5F2EA] rounded-3xl p-8 border border-primary/10">
                      <h3 className="font-serif text-xl mb-4">Récapitulatif</h3>
                      {totalItems === 0 ? (
                         <p className="text-muted-foreground text-sm italic">Votre panier est vide. Sélectionnez des savons pour commencer.</p>
                      ) : (
                        <ul className="space-y-3 mb-6">
                           {Object.entries(cart).map(([id, qty]) => {
                              const product = products.find(p => p.id === Number(id));
                              if (!product) return null;
                              return (
                                <li key={id} className="flex justify-between text-sm">
                                  <span>{product.name}</span>
                                  <span className="font-bold">x{qty}</span>
                                </li>
                              );
                           })}
                        </ul>
                      )}
                      <div className="pt-4 border-t border-primary/10">
                         <p className="text-xs text-muted-foreground">Le total et les frais de livraison seront confirmés par courriel.</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-border">
                      <h3 className="font-serif text-xl mb-6">Contact Direct</h3>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-3 text-muted-foreground">
                          <Mail className="w-5 h-5 text-primary mt-1" />
                          <div className="text-sm">
                            <span className="block font-medium text-foreground">Courriel</span>
                            ysabellemichaud@gmail.com
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 text-muted-foreground">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <div className="text-sm">
                            <span className="block font-medium text-foreground">Atelier</span>
                            Sainte-Félicité / Matane, Québec
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 text-muted-foreground">
                          <Instagram className="w-5 h-5 text-primary mt-1" />
                          <div className="text-sm">
                            <span className="block font-medium text-foreground">Instagram</span>
                            @lasavonniere
                          </div>
                        </div>
                      </div>
                    </div>
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
