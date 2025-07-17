import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import Reservation from "./pages/Reservation";
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
          <Route path="/vehicules" element={<Vehicles />} />
          <Route path="/vehicule/:id" element={<VehicleDetail />} />
          <Route path="/reservation" element={<Reservation />} />
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
