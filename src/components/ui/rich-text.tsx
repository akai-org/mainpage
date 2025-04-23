import { ReactNode } from 'react';

type Tag = 'p' | 'b' | 'i' | 'br' | 'accent';

type Props = {
  className?: string;
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

function RichText(props: Props) {
  const { children, className } = props;
  return (
    <div className={className}>
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        accent: (chunks: ReactNode) => (
          <span className="text-primary">{chunks}</span>
        ),
        br: () => <br />,
      })}
    </div>
  );
}

export { RichText };
