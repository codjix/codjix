"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSearchParams = () => {
  const router = useRouter();

  const href = typeof location !== "undefined" ? new URL(location.href) : null;
  const [url, setUrl] = useState(href);

  const get = (key: string) => url?.searchParams.get(key);

  const set = (key: string, value: string) => {
    if (!url) return;
    url.searchParams.set(key, value);
    router.push(url.toString());
    setUrl(url);
  };

  return { get, set, url };
};
