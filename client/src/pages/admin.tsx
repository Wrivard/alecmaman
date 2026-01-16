import { useState } from "react";
import { useProducts, Product } from "@/context/ProductContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, LogOut, Package } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const productData: any = {
      name: formData.get("name"),
      scent: formData.get("scent"),
      description: formData.get("description"),
      fullDescription: formData.get("fullDescription"),
      image: formData.get("image") || "https://placehold.co/600x800", // Fallback if empty
      status: formData.get("status"),
      ingredients: (formData.get("ingredients") as string).split(",").map(i => i.trim()),
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center font-serif">Administration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label>Mot de passe</Label>
                <Input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit" className="w-full">Se connecter</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold font-serif">La Savonnière <span className="text-muted-foreground text-sm font-sans font-normal ml-2">CMS</span></h1>
        <Button variant="ghost" size="sm" onClick={() => setIsAuthenticated(false)}>
          <LogOut className="w-4 h-4 mr-2" />
          Déconnexion
        </Button>
      </header>

      <main className="container mx-auto p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Gestion des Savons</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingProduct(null)}>
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Savon
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProduct ? "Modifier le savon" : "Ajouter un savon"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSave} className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nom du savon</Label>
                    <Input name="name" defaultValue={editingProduct?.name} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Parfum</Label>
                    <Input name="scent" defaultValue={editingProduct?.scent} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description courte (Carte)</Label>
                  <Textarea name="description" defaultValue={editingProduct?.description} required />
                </div>

                <div className="space-y-2">
                  <Label>Description complète (Détail)</Label>
                  <Textarea name="fullDescription" defaultValue={editingProduct?.fullDescription} className="min-h-[100px]" required />
                </div>

                <div className="space-y-2">
                  <Label>Ingrédients (séparés par des virgules)</Label>
                  <Input name="ingredients" defaultValue={editingProduct?.ingredients.join(", ")} required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>URL Image</Label>
                    <Input name="image" defaultValue={editingProduct?.image} placeholder="/assets/..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Statut</Label>
                    <Select name="status" defaultValue={editingProduct?.status || "available"}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Disponible</SelectItem>
                        <SelectItem value="limited">Édition Limitée</SelectItem>
                        <SelectItem value="out_of_stock">Rupture</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full">Enregistrer</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 aspect-video sm:aspect-square bg-muted">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-bold">{product.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${
                        product.status === 'available' ? 'bg-green-50 border-green-200 text-green-700' :
                        product.status === 'limited' ? 'bg-amber-50 border-amber-200 text-amber-700' :
                        'bg-gray-50 border-gray-200 text-gray-700'
                      }`}>
                        {product.status === 'available' ? 'Disponible' :
                         product.status === 'limited' ? 'Édition Limitée' : 'Rupture'}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  </div>
                  <div className="flex gap-2 mt-4 sm:mt-0">
                    <Button variant="outline" size="sm" onClick={() => {
                      setEditingProduct(product);
                      setIsDialogOpen(true);
                    }}>
                      <Edit className="w-4 h-4 mr-2" />
                      Modifier
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => {
                      if (confirm("Êtes-vous sûr de vouloir supprimer ce savon ?")) {
                        deleteProduct(product.id);
                      }
                    }}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Supprimer
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
