import React, { createContext, useContext, useState, ReactNode } from 'react';
import handsHoldingSoap from "@assets/image_1768666312374.png";

// Dynamically import all soap images from the soaps folder
const soapImagesGlob = import.meta.glob('@assets/soaps/**/*.{jfif,png,jpg,jpeg,webp}', { eager: true, import: 'default' });

// Helper to get images for a specific soap folder
const getSoapImages = (folderName: string): string[] => {
  const images = Object.entries(soapImagesGlob)
    .filter(([path]) => path.includes(`/soaps/${folderName}/`))
    .map(([, url]) => url as string);
    
  // Prepend the "hands holding soap" image to every gallery as the main image
  // In a real app, this would be specific to each product, but for this mockup request we use the provided reference
  return [handsHoldingSoap, ...images];
};

export type ProductStatus = 'available' | 'limited' | 'out_of_stock';

export interface Product {
  id: number;
  name: string;
  scent: string;
  description: string;
  fullDescription: string;
  ingredients: string[];
  image: string;     // Main image (first in gallery)
  gallery: string[]; // All images including main
  status: ProductStatus;
  price?: string;
}

// Define the base product data (without images yet)
const productDefinitions = [
  {
    id: 1,
    folder: "algue-aloe-vera",
    name: "Algue et aloe vera",
    scent: "Frais & Marin",
    description: "Un savon rafraîchissant aux notes marines, idéal pour une sensation de pureté.",
    fullDescription: "Inspiré par la nature, ce savon combine la fraîcheur des algues et la douceur de l’aloe vera pour un moment de bien-être apaisant.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica", "Extrait d'algue", "Aloe Vera"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 2,
    folder: "biscuit-mangue",
    name: "Biscuit à la mangue",
    scent: "Gourmand & Exotique",
    description: "Un parfum sucré et chaleureux qui rappelle les douceurs maison.",
    fullDescription: "Ce savon aux notes de mangue et de biscuit offre une expérience réconfortante et joyeuse à chaque utilisation.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 3,
    folder: "brandy-vanille",
    name: "Brandy à la vanille",
    scent: "Chaud & Enveloppant",
    description: "Une alliance élégante entre la douceur de la vanille et des notes chaleureuses.",
    fullDescription: "Un savon au parfum riche et raffiné, parfait pour un moment de détente et de confort.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica", "Gousse de vanille"],
    status: 'limited' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 4,
    folder: "cerise",
    name: "Cerise",
    scent: "Fruité & Vif",
    description: "Un parfum sucré et pétillant qui éveille les sens.",
    fullDescription: "Ce savon à la cerise apporte une touche de fraîcheur et de gourmandise au quotidien.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 5,
    folder: "fraise",
    name: "Fraise",
    scent: "Doux & Joyeux",
    description: "Une fragrance sucrée et légère, pleine de douceur.",
    fullDescription: "Le savon fraise évoque la simplicité et la fraîcheur des fruits d’été.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 6,
    folder: "gomme-balloune",
    name: "Gomme balloune",
    scent: "Ludique & Nostalgique",
    description: "Un parfum amusant qui rappelle l’enfance.",
    fullDescription: "Ce savon coloré et joyeux est parfait pour ajouter une touche de fantaisie à la routine.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 7,
    folder: "menthe-poivree",
    name: "Menthe poivrée",
    scent: "Énergisant & Frais",
    description: "Un savon vivifiant aux notes fraîches et tonifiantes.",
    fullDescription: "La menthe poivrée procure une sensation de fraîcheur intense et revitalisante.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Huile essentielle de Menthe Poivrée", "Mica"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 8,
    folder: "noix-de-coco",
    name: "Noix de coco",
    scent: "Tropical & Doux",
    description: "Un parfum crémeux et enveloppant.",
    fullDescription: "Ce savon à la noix de coco évoque l’évasion et la douceur des îles.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Lait de coco"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 9,
    folder: "pomme-cannelle",
    name: "Pomme et cannelle",
    scent: "Chaleureux & Réconfortant",
    description: "Une fragrance douce et épicée.",
    fullDescription: "L’association de la pomme et de la cannelle crée une atmosphère chaleureuse et apaisante.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Cannelle en poudre"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 10,
    folder: "tarte-citron",
    name: "Tartes aux citrons",
    scent: "Frais & Gourmand",
    description: "Un parfum acidulé et sucré à la fois.",
    fullDescription: "Ce savon rappelle la douceur d’une tarte au citron fraîchement préparée.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica", "Zeste de citron"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  },
  {
    id: 11,
    folder: "the-vert-concombre",
    name: "Thé vert et concombre",
    scent: "Frais & Zen",
    description: "Une senteur légère et apaisante.",
    fullDescription: "Le thé vert et le concombre offrent une sensation de fraîcheur et d’équilibre.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Extrait de thé vert", "Jus de concombre"],
    status: 'available' as ProductStatus,
    price: "6.00 $"
  }
];

// Combine definitions with images
const initialProducts: Product[] = productDefinitions.map(def => {
  const images = getSoapImages(def.folder);
  return {
    ...def,
    image: images.length > 0 ? images[0] : "https://placehold.co/600x800", // Fallback
    gallery: images,
  };
});

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
