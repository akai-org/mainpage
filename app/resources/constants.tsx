import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export const MENU = [
  { name: 'Home', to: 'home' },
  { name: 'O nas', to: 'about' },
  { name: 'Projekty', to: 'projects' },
  { name: 'Partnerzy', to: 'partners' },
  { name: 'Kontakt', to: 'contact' },
];

export const MAIL = 'kontakt@akai.org.pl';
export const APPS = 'https://apps.akai.org.pl';
export const BLOG = 'https://blog.akai.org.pl';

export const SOCIALS = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/akai.pp',
    icon: <FaFacebook />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/akai-org',
    icon: <FaGithub />,
  },
  {
    name: 'X',
    link: 'https://x.com/akai_pp',
    icon: <FaX />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/akai-pp',
    icon: <FaLinkedin />,
  },
];

export const PARTNERS = [
  { name: 'AppUnite', logo: '', link: 'https://www.appunite.com' },
  { name: 'WITH secure', logo: '', link: 'https://www.withsecure.com' },
  { name: 'inetum', logo: '', link: 'https://inetum.pl' },
  { name: 'NOBL', logo: '', link: 'https://www.nobl9.com' },
  { name: 'VML', logo: '', link: 'https://www.vml.com' },
];
