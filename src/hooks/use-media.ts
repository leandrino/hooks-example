import { useEffect, useState } from "react";

export default function useMedia(
  queries: string[],
  values: number[],
  defaultValue: number
) {
  const match: any = () => {
    const query: any = queries.findIndex((q: any) => matchMedia(q).matches);
    return values[query] || defaultValue;
  };

  const [value, set] = useState(match);

  useEffect(() => {
    const handler: any = () => set(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return value;
}
