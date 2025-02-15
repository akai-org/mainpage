import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export const MAIL = 'kontakt@akai.org.pl';
export const APPS_LINK = 'https://apps.akai.org.pl';
export const GITHUB_API = 'https://api.github.com/users/akai-org';
export const CAT_LINK = 'https://cat.put.poznan.pl';

export const PARTNERS = [
  {
    name: 'AppUnite',
    logo: '/partners/AppUnite.png',
    link: 'https://www.appunite.com',
  },
  {
    name: 'WITH secure',
    logo: '/partners/WithSecure.svg',
    link: 'https://www.withsecure.com',
  },
  {
    name: 'inetum',
    logo: '/partners/Inetum.svg',
    link: 'https://inetum.pl',
  },
  {
    name: 'NOBL',
    logo: '/partners/nobl9.svg',
    link: 'https://www.nobl9.com',
  },
  {
    name: 'VML',
    logo: '/partners/VML.png',
    link: 'https://www.vml.com',
  },
];

export const SOCIALS = [
  {
    link: 'https://www.facebook.com/akai.pp',
    icon: <FaFacebook />,
  },
  {
    link: 'https://github.com/akai-org',
    icon: <FaGithub />,
  },
  {
    link: 'https://x.com/akai_pp',
    icon: <FaX />,
  },
  {
    link: 'https://www.linkedin.com/company/akai-pp',
    icon: <FaLinkedin />,
  },
];
