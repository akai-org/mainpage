type Props = {
  icon: 'pl' | 'en';
};

function Flags({ icon }: Props) {
  switch (icon) {
    case 'pl':
      return (
        <svg
          aria-label="Polish flag"
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-pl"
          viewBox="0 0 640 480"
          className="border-background/50 size-5 border"
        >
          <g fillRule="evenodd">
            <path fill="#fff" d="M640 480H0V0h640z" />
            <path fill="#dc143c" d="M640 480H0V240h640z" />
          </g>
        </svg>
      );
    case 'en':
      return (
        <svg
          aria-label="English flag"
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-gb"
          viewBox="0 0 640 480"
          className="border-background/50 size-5 border"
        >
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
          />
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
        </svg>
      );
  }
}

export { Flags };
