import {
  Train,
  TrainFront,
  Wifi,
  Smartphone,
  BedDouble,
  Droplet,
  Building2,
  Landmark,
  Ticket,
  Luggage,
  Plane,
  ShieldCheck,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

// Un icono por afiliado (no por tipo de tarjeta) — así cada producto se
// reconoce de un vistazo en vez de compartir el mismo icono genérico.
export const AFFILIATE_ICONS: Record<string, LucideIcon> = {
  BANNER_JRPASS: Train,
  PRODUCT_POCKET_WIFI: Wifi,
  PRODUCT_JAPAN_SIM: Smartphone,
  LINK_AGODA_TOKYO: BedDouble,
  LINK_RAKUTEN_TRAVEL: Droplet,
  LINK_BOOKING_HOTELS: Building2,
  PRODUCT_KLOOK_TOURS: TrainFront,
  PRODUCT_KLOOK_SUMO: Landmark,
  PRODUCT_GETYOURGUIDE: Ticket,
  PRODUCT_AMAZON_GEAR: Luggage,
  LINK_SKYSCANNER_VUELOS: Plane,
  PRODUCT_SEGURO_VIAJE: ShieldCheck,
  PRODUCT_TARJETA_VIAJE: CreditCard,
};

export function affiliateIcon(code: string): LucideIcon {
  return AFFILIATE_ICONS[code] ?? Ticket;
}
