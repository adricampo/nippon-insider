export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface ManifestoConfig {
  sectionLabel: string
  text: string
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
}

export const siteConfig: SiteConfig = {
  language: "",
  siteTitle: "",
  siteDescription: "",
}

export const navigationConfig: NavigationConfig = {
  brandName: "",
  links: [],
}

export const heroConfig: HeroConfig = {
  videoPath: "",
  eyebrow: "",
  titleLine: "",
  titleEmphasis: "",
  subtitleLine1: "",
  subtitleLine2: "",
  ctaText: "",
  ctaTargetId: "",
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "",
  text: "",
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "",
  title: "",
  pillars: [],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "",
  title: "",
  tiers: [],
}

export const footerConfig: FooterConfig = {
  ageGateText: "",
  brandName: "",
  brandTaglineLines: [],
  columns: [],
  copyright: "",
}
