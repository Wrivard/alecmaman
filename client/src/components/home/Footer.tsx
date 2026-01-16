import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#F9F7F2] pt-20 pb-10 border-t border-primary/10">
      <div className="container mx-auto px-6">
        
        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm text-center max-w-4xl mx-auto -mt-32 mb-16 border border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Envie d’en savoir plus sur nos savons ?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Écrivez-nous pour toute question, commande personnalisée ou simplement pour dire bonjour.
          </p>
          <Button size="lg" className="rounded-full px-10 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Nous contacter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">La Savonnière</h3>
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
