import { useEffect, useState } from 'react';
import { any } from 'prop-types';

export default function useMedia(queries: any, values: any, defaultValue: any) {
  const match = () => {
    const query: any = queries.findIndex((q: any) => matchMedia(q).matches);
    return values[query] || defaultValue;
  };

  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return value;
}
