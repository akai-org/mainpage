'use client';
import { useEffect, useState } from 'react';

const useIsClient = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};
export { useIsClient };
