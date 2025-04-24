import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export const MAIL = 'kontakt@akai.org.pl';
export const APPS_LINK = 'https://apps.akai.org.pl';
export const GITHUB_REPOS = 130;

import appUniteImg from '@/../public/partners/AppUnite.png';
import withSecureImg from '@/../public/partners/WithSecure.svg';
import inetumImg from '@/../public/partners/Inetum.svg';
import noblImg from '@/../public/partners/nobl9.svg';
import vmlImg from '@/../public/partners/VML.png';

export const PARTNERS = [
  {
    name: 'AppUnite',
    logo: appUniteImg,
    link: 'https://www.appunite.com',
  },
  {
    name: 'WITH secure',
    logo: withSecureImg,
    link: 'https://www.withsecure.com',
  },
  {
    name: 'inetum',
    logo: inetumImg,
    link: 'https://inetum.pl',
  },
  {
    name: 'NOBL',
    logo: noblImg,
    link: 'https://www.nobl9.com',
  },
  {
    name: 'VML',
    logo: vmlImg,
    link: 'https://www.vml.com',
  },
];

export const SOCIALS = [
  {
    link: 'https://www.facebook.com/akai.pp',
    icon: <FaFacebook className="size-8" />,
  },
  {
    link: 'https://github.com/akai-org',
    icon: <FaGithub className="size-8" />,
  },
  {
    link: 'https://www.linkedin.com/company/akai-pp',
    icon: <FaLinkedin className="size-8" />,
  },
];
