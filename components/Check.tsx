// app/page.tsx or app/your-page/component.tsx
"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // needed because searchParams is static
  const [query, setQuery] = useState(searchParams.get("new") || "");

  useEffect(() => {
    const currentQuery = searchParams.get("new") || "";
    setQuery(currentQuery);
    console.log("Search param q changed:", currentQuery);
  }, [searchParams, pathname]); // triggers on URL change

  return <div>Query: {query}</div>;
}
