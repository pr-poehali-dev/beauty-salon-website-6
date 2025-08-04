
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Promotions from "./pages/Promotions";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;