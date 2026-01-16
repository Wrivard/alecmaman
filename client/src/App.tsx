import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProductProvider } from "@/context/ProductContext";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProductsPage from "@/pages/products";
import ProductDetailPage from "@/pages/product-detail";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import AdminPage from "@/pages/admin";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { MessengerButton } from "@/components/ui/messenger-button";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/savons" component={ProductsPage} />
      <Route path="/savons/:id" component={ProductDetailPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <MessengerButton />
          <Router />
        </TooltipProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default App;
