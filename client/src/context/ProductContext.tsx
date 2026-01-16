import React, { createContext, useContext, useState, ReactNode } from 'react';

// Import assets
import soapLavender from "@assets/a83f4a1e-80f4-4000-89a4-81ff5dde47b7_1768587366893.jfif";
import soapHoney from "@assets/e5ee00a4-dd3d-4cfb-ab07-19c533cbdd6b_1768587366893.jfif";
import soapRose from "@assets/faa14cf3-baec-4057-95e2-14ae745a13a9_1768587366893.jfif";
import soapHands from "@assets/2511d2e5-f227-44f9-97da-80ec1b0a852c_1768587366893.jfif";
import soapAlgue from "@assets/generated_images/soap_algue_aloe_vera.png";
import soapMango from "@assets/generated_images/soap_mango_biscuit.png";
import soapBrandy from "@assets/generated_images/soap_vanilla_brandy.png";
import soapCherry from "@assets/generated_images/soap_cherry_scent.png";
import soapStrawberry from "@assets/generated_images/soap_strawberry_scent.png";
import soapBubblegum from "@assets/generated_images/soap_bubblegum_scent.png";
import soapPeppermint from "@assets/generated_images/soap_peppermint_scent.png";
import soapCoconut from "@assets/generated_images/soap_coconut_scent.png";
import soapApple from "@assets/generated_images/soap_apple_cinnamon.png";
import soapLemon from "@assets/generated_images/soap_lemon_tart.png";
import soapGreenTea from "@assets/generated_images/soap_green_tea_cucumber.png";

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
    name: "Algue et aloe vera",
    scent: "Frais & Marin",
    description: "Un savon rafraîchissant aux notes marines, idéal pour une sensation de pureté.",
    fullDescription: "Inspiré par la nature, ce savon combine la fraîcheur des algues et la douceur de l’aloe vera pour un moment de bien-être apaisant.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica", "Extrait d'algue", "Aloe Vera"],
    image: soapAlgue,
    status: 'available'
  },
  {
    id: 2,
    name: "Biscuit à la mangue",
    scent: "Gourmand & Exotique",
    description: "Un parfum sucré et chaleureux qui rappelle les douceurs maison.",
    fullDescription: "Ce savon aux notes de mangue et de biscuit offre une expérience réconfortante et joyeuse à chaque utilisation.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    image: soapMango,
    status: 'available'
  },
  {
    id: 3,
    name: "Brandy à la vanille",
    scent: "Chaud & Enveloppant",
    description: "Une alliance élégante entre la douceur de la vanille et des notes chaleureuses.",
    fullDescription: "Un savon au parfum riche et raffiné, parfait pour un moment de détente et de confort.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica", "Gousse de vanille"],
    image: soapBrandy,
    status: 'limited'
  },
  {
    id: 4,
    name: "Cerise",
    scent: "Fruité & Vif",
    description: "Un parfum sucré et pétillant qui éveille les sens.",
    fullDescription: "Ce savon à la cerise apporte une touche de fraîcheur et de gourmandise au quotidien.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    image: soapCherry,
    status: 'available'
  },
  {
    id: 5,
    name: "Fraise",
    scent: "Doux & Joyeux",
    description: "Une fragrance sucrée et légère, pleine de douceur.",
    fullDescription: "Le savon fraise évoque la simplicité et la fraîcheur des fruits d’été.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    image: soapStrawberry,
    status: 'available'
  },
  {
    id: 6,
    name: "Gomme balloune",
    scent: "Ludique & Nostalgique",
    description: "Un parfum amusant qui rappelle l’enfance.",
    fullDescription: "Ce savon coloré et joyeux est parfait pour ajouter une touche de fantaisie à la routine.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica"],
    image: soapBubblegum,
    status: 'available'
  },
  {
    id: 7,
    name: "Menthe poivrée",
    scent: "Énergisant & Frais",
    description: "Un savon vivifiant aux notes fraîches et tonifiantes.",
    fullDescription: "La menthe poivrée procure une sensation de fraîcheur intense et revitalisante.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Huile essentielle de Menthe Poivrée", "Mica"],
    image: soapPeppermint,
    status: 'available'
  },
  {
    id: 8,
    name: "Noix de coco",
    scent: "Tropical & Doux",
    description: "Un parfum crémeux et enveloppant.",
    fullDescription: "Ce savon à la noix de coco évoque l’évasion et la douceur des îles.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Lait de coco"],
    image: soapCoconut,
    status: 'available'
  },
  {
    id: 9,
    name: "Pomme et cannelle",
    scent: "Chaleureux & Réconfortant",
    description: "Une fragrance douce et épicée.",
    fullDescription: "L’association de la pomme et de la cannelle crée une atmosphère chaleureuse et apaisante.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Cannelle en poudre"],
    image: soapApple,
    status: 'available'
  },
  {
    id: 10,
    name: "Tartes aux citrons",
    scent: "Frais & Gourmand",
    description: "Un parfum acidulé et sucré à la fois.",
    fullDescription: "Ce savon rappelle la douceur d’une tarte au citron fraîchement préparée.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Mica", "Zeste de citron"],
    image: soapLemon,
    status: 'available'
  },
  {
    id: 11,
    name: "Thé vert et concombre",
    scent: "Frais & Zen",
    description: "Une senteur légère et apaisante.",
    fullDescription: "Le thé vert et le concombre offrent une sensation de fraîcheur et d’équilibre.",
    ingredients: ["Huile d'olive", "Huile de coco", "Huile de tournesol", "Fragrance", "Extrait de thé vert", "Jus de concombre"],
    image: soapGreenTea,
    status: 'available'
  },
  {
    id: 12,
    name: "Douceur de Lavande",
    scent: "Lavande & Karité",
    description: "Un classique apaisant pour une détente absolue avant le coucher.",
    fullDescription: "Ce savon est fabriqué à la main avec des huiles végétales soigneusement sélectionnées pour leur douceur et leurs bienfaits. L'huile essentielle de lavande procure un effet apaisant immédiat, idéal pour le bain du soir.",
    ingredients: ["Huile d'olive", "Beurre de Karité", "Huile de Coco", "Huile essentielle de Lavande", "Fleurs de Lavande séchées"],
    image: soapLavender,
    status: 'available'
  },
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
