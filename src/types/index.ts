export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  country: string;
  language: string;
  currency: string;
  email: string;
  established: string;
  minAge: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BonusOffer {
  headline: string;
  amount: string;
  details: string;
  wagering: string;
  minDeposit: string;
  bonusCode?: string;
  expiryDays: number;
}

export interface Ratings {
  overall: number;
  games: number;
  bonuses: number;
  safety: number;
  support: number;
  mobile: number;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  logoColor: string;
  accentColor: string;
  tagline: string;
  established: number;
  licences: string[];
  ratings: Ratings;
  bonus: BonusOffer;
  highlights: string[];
  gameCount: number;
  gameTypes: string[];
  paymentMethods?: string[];
  withdrawalTime?: string;
  minDeposit?: string;
  customerSupport: string[];
  pros: string[];
  cons: string[];
  reviewSummary: string;
  reviewBody: string[];
  featured: boolean;
  rank: number;
  visitUrl: string;
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  updated: string;
  body: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteData {
  site: SiteConfig;
  nav: NavItem[];
  brands: Brand[];
  guides: Guide[];
  faqs: FaqItem[];
}
