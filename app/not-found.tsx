import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-center-col z-50 h-dvh w-full gap-5 bg-red-500">
      <h1 className="text-4xl font-bold sm:text-5xl">Not Found :(</h1>
      <Link
        href="/#top"
        className="select-none border border-black p-1 duration-300 hover:invert active:bg-main"
      >
        Go to main page
      </Link>
    </div>
  );
}
