/** Navigation model. Slugs match the live site 1:1 for SEO continuity. */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

/**
 * AGORA Mastery Engine — a separate Cloud Run app (project `agora-data-driven`).
 * TODO: swap for https://mastery.agoradatadriven.com once a Cloud Run domain
 * mapping + DNS record are set up (matches the webdev./apply. subdomain pattern).
 */
export const skillMasteryUrl = 'https://mastery-engine-c732u7m57a-uc.a.run.app';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Portfolio',
    href: '/agora-portfolio/',
    children: [
      { label: 'Marketing & Analytics', href: '/agora-portfolio/' },
      { label: 'Web Development', href: 'https://webdev.agoradatadriven.com/', external: true },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  // "LED Wall" points to the real flagship article slug (preserved for SEO).
  { label: 'LED Wall', href: '/building-an-authentic-brand-identity/' },
  { label: 'Skill Mastery', href: skillMasteryUrl, external: true },
];

export const footerNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/agora-portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'LED Wall', href: '/building-an-authentic-brand-identity/' },
  { label: 'Skill Mastery', href: skillMasteryUrl, external: true },
];

export const legalNav: NavItem[] = [
  { label: 'Terms & Conditions', href: '/terms/' },
  { label: 'Privacy Policy', href: '/privacy/' },
];
