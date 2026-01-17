import React, { createContext, useContext, useState, ReactNode } from 'react';
import handsHoldingSoap from "@assets/image_1768666312374.png";

// Dynamically import all soap images from the soaps folder
const soapImagesGlob = import.meta.glob('@assets/soaps/**/*.{jfif,png,jpg,jpeg,webp}', { eager: true, import: 'default' });

// Helper to get images for a specific soap folder
const getSoapImages = (folderName: string): string[] => {
  const images = Object.entries(soapImagesGlob)
    .filter(([path]) => path.includes(`/soaps/${folderName}/`))
    .map(([, url]) => url as string);
    
  // Return images from folder
  return images;
};

// ... existing code ...

// Combine definitions with images
const initialProducts: Product[] = productDefinitions.map(def => {
  const images = getSoapImages(def.folder);
  let mainImage = images.length > 0 ? images[0] : "https://placehold.co/600x800";
  
  // Custom overrides for specific products to fix "wrong image" issues
  // Biscuit à la mangue (id 2) - Pick a different image from its folder
  if (def.id === 2 && images.length > 1) mainImage = images.find(src => src.includes('afcb7d5e')) || images[1];
  
  // Fraise (id 5) - Pick a different image (not the woman in garden)
  if (def.id === 5 && images.length > 1) mainImage = images.find(src => src.includes('aadfa02b')) || images[1];

  // Gomme balloune (id 6) - Pick a different image
  if (def.id === 6 && images.length > 1) mainImage = images.find(src => src.includes('7022d947')) || images[1];

  // Pomme et cannelle (id 9) - Pick a different image
  if (def.id === 9 && images.length > 1) mainImage = images.find(src => src.includes('6292b548')) || images[1];

  // Thé vert et concombre (id 11) - Pick a different image
  if (def.id === 11 && images.length > 1) mainImage = images.find(src => src.includes('76b3930a')) || images[1];

  return {
    ...def,
    image: mainImage,
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
