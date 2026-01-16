import React, { createContext, useContext, useState, ReactNode } from 'react';

// Import assets
import soapLavender from "@assets/a83f4a1e-80f4-4000-89a4-81ff5dde47b7_1768587366893.jfif";
import soapHoney from "@assets/e5ee00a4-dd3d-4cfb-ab07-19c533cbdd6b_1768587366893.jfif";
import soapRose from "@assets/faa14cf3-baec-4057-95e2-14ae745a13a9_1768587366893.jfif";
import soapHands from "@assets/2511d2e5-f227-44f9-97da-80ec1b0a852c_1768587366893.jfif";

export type ProductStatus = 'available' | 'limited' | 'out_of_stock';

export interface Product {
  id: number;
  name: string;
  scent: string;
  description: string;
  fullDescription: string;
  ingredients: string[];
  image: string;
  status: ProductStatus;
  price?: string; // Optional since no e-commerce
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Douceur de Lavande",
    scent: "Lavande & Karité",
    description: "Un classique apaisant pour une détente absolue avant le coucher.",
    fullDescription: "Ce savon est fabriqué à la main avec des huiles végétales soigneusement sélectionnées pour leur douceur et leurs bienfaits. L'huile essentielle de lavande procure un effet apaisant immédiat, idéal pour le bain du soir.",
    ingredients: ["Huile d'olive", "Beurre de Karité", "Huile de Coco", "Huile essentielle de Lavande", "Fleurs de Lavande séchées"],
    image: soapLavender,
    status: 'available'
  },
  {
    id: 2,
    name: "Miel & Avoine",
    scent: "Miel Local & Lait d'Avoine",
    description: "Exfoliation douce et hydratation intense pour les peaux sèches.",
    fullDescription: "Un véritable câlin pour votre peau. Le miel local apporte ses propriétés cicatrisantes tandis que l'avoine calme les irritations. Parfait pour les peaux sensibles et atopiques.",
    ingredients: ["Huile d'olive", "Lait d'Avoine", "Miel brut local", "Cire d'abeille", "Flocons d'avoine"],
    image: soapHoney,
    status: 'available'
  },
  {
    id: 3,
    name: "Argile Rose",
    scent: "Géranium & Bois de Hô",
    description: "Purifiant et équilibrant, idéal pour raviver l'éclat du teint.",
    fullDescription: "L'argile rose est reconnue pour ses vertus purifiantes sans être desséchante. Associée aux notes fleuries du Géranium, ce savon est un rituel de beauté à part entière.",
    ingredients: ["Huile d'olive", "Argile Rose", "Huile de Ricin", "Huile essentielle de Géranium", "Huile essentielle de Bois de Hô"],
    image: soapRose,
    status: 'limited'
  },
  {
    id: 4,
    name: "L'Authentique",
    scent: "Sans parfum",
    description: "La simplicité à l'état pur. Juste de l'huile d'olive et de la douceur.",
    fullDescription: "Le savon le plus pur de notre gamme. Sans huile essentielle ni colorant, il convient aux bébés, aux femmes enceintes et aux peaux les plus réactives.",
    ingredients: ["Huile d'olive (100%)", "Eau", "Soude (disparue lors de la saponification)"],
    image: soapHands,
    status: 'available'
  }
];

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    const id = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id }]);
  };

  const updateProduct = (id: number, updatedFields: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
