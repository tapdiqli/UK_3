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
  /** Short editorial verdict shown next to the brand instead of offer copy. */
  review: string;
  tagline: string;
  established: number;
  licences: string[];
  ratings: Ratings;
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
