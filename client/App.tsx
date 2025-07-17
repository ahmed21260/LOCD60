import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./components/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/vehicules"
            element={
              <PlaceholderPage
                title="Nos véhicules"
                description="Découvrez notre gamme complète de véhicules disponibles à la location."
              />
            }
          />
          <Route
            path="/vehicule/:id"
            element={
              <PlaceholderPage
                title="Détail véhicule"
                description="Fiche détaillée du véhicule avec galerie, spécifications et réservation."
              />
            }
          />
          <Route
            path="/reservation"
            element={
              <PlaceholderPage
                title="Réservation"
                description="Réservez votre véhicule en 3 étapes simples."
              />
            }
          />
          <Route
            path="/tarifs"
            element={
              <PlaceholderPage
                title="Nos tarifs"
                description="Découvrez nos tarifs transparents et nos offres spéciales."
              />
            }
          />
          <Route
            path="/services"
            element={
              <PlaceholderPage
                title="Nos services"
                description="Services de livraison, forfaits et options disponibles."
              />
            }
          />
          <Route
            path="/a-propos"
            element={
              <PlaceholderPage
                title="À propos de Loc'D 60"
                description="Découvrez notre histoire et nos valeurs."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title="Contact"
                description="Contactez-nous pour toute question ou demande d'information."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
