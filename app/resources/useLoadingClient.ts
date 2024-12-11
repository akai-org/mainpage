import { useEffect, useState } from 'react';
import { LOADING_TIME } from '@/app/resources/constants';

const useLoadingClient = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_TIME);

    if (typeof window !== 'undefined') {
      setIsClient(true);
    }

    return () => clearTimeout(loadingTimeout);
  }, []);

  return !isClient || isLoading;
};
export default useLoadingClient;
