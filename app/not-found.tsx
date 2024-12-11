import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="pb-footer flex-center absolute z-50 h-dvh w-full flex-col gap-5 bg-red-500">
      <h1 className="text-5xl font-bold">Not Found</h1>
      <Link href="/">Go to main page</Link>
    </div>
  );
}
