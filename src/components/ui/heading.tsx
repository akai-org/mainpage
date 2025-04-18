import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  withoutLine?: boolean;
};
function Heading(props: Props) {
  const { children, withoutLine = false } = props;
  return (
    <div className="text-primary flex-center gap-2 pb-5 text-center text-3xl font-bold sm:text-5xl">
      {!withoutLine && <div className="bg-secondary h-1 w-6 rounded-md" />}
      <h1>{children}</h1>
      {!withoutLine && <div className="bg-secondary h-1 w-6 rounded-md" />}
    </div>
  );
}
export { Heading };
