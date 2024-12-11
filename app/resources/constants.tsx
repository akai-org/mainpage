import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export const LOADING_TIME = 0 * 1000; // 1 000 ms = 1 s

export const MAIL = 'kontakt@akai.org.pl';

export const SOCIALS = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    name: 'GitHub',
    link: 'https://www.github.com',
    icon: <FaGithub />,
  },
  {
    name: 'X',
    link: 'https://www.x.com',
    icon: <FaX />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
];

export const PARTNERS = [
  { name: 'AppUnite', logo: '' },
  { name: 'WITH secure', logo: '' },
  { name: 'inetum', logo: '' },
  { name: 'NOBL', logo: '' },
  { name: 'VML', logo: '' },
];
