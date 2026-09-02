import { Routes, Route } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";
import Esenciales from "@/pages/Esenciales";
import Destinos from "@/pages/Destinos";
import DestinoRegion from "@/pages/DestinoRegion";
import DestinoCiudad from "@/pages/DestinoCiudad";
import PostPage from "@/pages/PostPage";
import Admin from "@/pages/Admin";
import Login from "@/pages/Login";
import Privacidad from "@/pages/Privacidad";
import AvisoLegal from "@/pages/AvisoLegal";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/esenciales" element={<Esenciales />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/region/:regionSlug" element={<DestinoRegion />} />
          <Route path="/destinos/:prefSlug/:citySlug" element={<DestinoCiudad />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <CookieConsent />
    </div>
  );
}

export default App;
