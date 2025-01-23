import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export const MAIL = 'kontakt@akai.org.pl';
export const APPS_LINK = 'https://apps.akai.org.pl';
export const GITHUB_NAME = 'akai-org';

export const JOBS = [
  {
    name: 'Front-end development',
    desc: 'Wszystko to, co widzi użytkownik. Odpowiada za wygląd i zachowanie strony lub aplikacji internetowej. Powstaje przy pomocy HTML, CSS i JavaScript, ale w dzisiejszych czasach często nie jest to wystarczające. Dlatego często korzystamy z różnych frameworków jak React, Vue, Next.js i Gatsby.',
    descEn:
      "Everything the user sees. Responsible for the appearance and behavior of a website or web application. It is created with the help of HTML, CSS, and JavaScript, but nowadays, that's often not enough. That's why we often use various frameworks like React, Vue, Next.js, and Gatsby.",
  },
  {
    name: 'Back-end development',
    desc: 'Oprogramowanie uruchamiane po stronie serwera. Przetwarza dane i wykonuje różne operacje. To tutaj dzieje się magia. W kole korzystamy z różnych języków programowania (m. in. Python, Java, PHP, Go, Ruby)',
    descEn:
      'Software that runs on the server side. It processes data and performs various operations. This is where the magic happens. In the circle, we use different programming languages (e.g., Python, Java, PHP, Go, Ruby).',
  },
  {
    name: 'Mobile development',
    desc: 'Świat aplikacji mobilnych, dostępnych na wyciągnięcie ręki, na urządzeniach z systemami iOS i Android. Aplikacje piszemy najczęściej natywnie dla Androida w języku Kotlin lub multiplatform przy użyciu Fluttera. W ramach sekcji mobile tworzymy także czasem PWA.',
    descEn:
      'The world of mobile applications, available at your fingertips, on iOS and Android devices. We typically write apps natively for Android in Kotlin or multiplatform using Flutter. In the mobile section, we also sometimes create PWAs.',
  },
  {
    name: 'Graphic design / UI / UX',
    desc: 'Zanim coś stworzymy, warto to zaprojektować. Oprócz tego, żeby było przyjemne dla oka - warto również zadbać o to, aby interfejs był intuicyjny dla użytkownika.',
    descEn:
      "Before we create something, it's worth designing it. In addition to making it visually appealing, it's also important to ensure that the interface is intuitive for the user.",
  },
];

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
