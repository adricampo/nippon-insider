import {
  AFFILIATES,
  type AffiliateCategory,
  type AffiliateDef,
} from "@contracts/affiliates";
import {
  Plane,
  BedDouble,
  TrainFront,
  ShieldCheck,
  Wifi,
  CreditCard,
  Ticket,
  type LucideIcon,
} from "lucide-react";

// Metadatos de las 7 categorías de logística de viaje, compartidos entre
// ResourceBox (widget compacto embebido en posts) y la página Esenciales
// (versión editorial a página completa) — una sola fuente de verdad.

export const CATEGORY_META: Record<
  AffiliateCategory,
  { label: string; icon: LucideIcon }
> = {
  vuelos: { label: "Vuelos", icon: Plane },
  alojamiento: { label: "Alojamiento", icon: BedDouble },
  transporte: { label: "Transporte", icon: TrainFront },
  seguro: { label: "Seguro de viaje", icon: ShieldCheck },
  conectividad: { label: "Conectividad", icon: Wifi },
  dinero: { label: "Dinero y tarjetas", icon: CreditCard },
  tours: { label: "Tours y experiencias", icon: Ticket },
};

export const CATEGORY_ORDER: AffiliateCategory[] = [
  "vuelos",
  "alojamiento",
  "transporte",
  "seguro",
  "conectividad",
  "dinero",
  "tours",
];

export function pickByCategory(): Partial<Record<AffiliateCategory, AffiliateDef>> {
  const picks: Partial<Record<AffiliateCategory, AffiliateDef>> = {};
  for (const def of Object.values(AFFILIATES)) {
    if (def.category && !picks[def.category]) picks[def.category] = def;
  }
  return picks;
}
