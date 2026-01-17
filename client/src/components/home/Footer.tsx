import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook } from "lucide-react";
import logo from "@assets/Group_21_1768587087985.png";
import stickerWomanWash from "@assets/8701693c-e8c1-44fa-8bcc-5b300c90f015_3_1768662774600.png";

import mataneLandscape from "@assets/stock_images/peaceful_coastal_lan_29750ffd.jpg";

export function Footer({ showCTA = true, showMap = true }: { showCTA?: boolean, showMap?: boolean }) {
  return (
    <footer id="contact" className={`bg-[#F9F7F2] pb-10 border-t border-primary/10 relative overflow-hidden ${showCTA ? "pt-20" : "pt-10"}`}>
      
      {/* Decorative sticker */}
      <img 
        src={stickerWomanWash} 
        alt="Woman washing" 
        className="absolute bottom-0 right-0 w-48 md:w-64 opacity-10 pointer-events-none z-0" 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CTA Section */}
        {showCTA && (
          <div className={`bg-white rounded-3xl p-12 shadow-sm text-center max-w-4xl mx-auto mb-16 border border-secondary/20 relative overflow-hidden ${showMap ? "-mt-32" : ""}`}>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Envie d’en savoir plus sur nos savons ?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Écrivez-nous pour toute question, commande personnalisée ou simplement pour dire bonjour.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Commander
              </Button>
            </Link>
          </div>
        )}

        {/* Map Section */}
        {showMap && (
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-16 relative group bg-gray-100">
             {/* Map Overlay Frame */}
             <div className="absolute inset-0 border-[10px] border-white/50 pointer-events-none z-10 rounded-2xl"></div>
             
             {/* Map Label */}
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">Notre Atelier</span>
             </div>

             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm z-20">
                <p className="text-xs font-medium text-foreground">Sainte-Félicité, QC</p>
             </div>

            <img 
              src={mataneLandscape}
              alt="Paysage de Sainte-Félicité"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img src={logo} alt="La Savonnière" className="w-48 h-auto mb-2" />
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Des savons artisanaux créés avec amour, patience et des ingrédients 100% naturels.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-foreground uppercase tracking-widest text-xs">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Boutique</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">À Propos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Points de vente</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground uppercase tracking-widest text-xs">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 La Savonnière. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Mentions Légales</a>
            <a href="#" className="hover:text-foreground">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
