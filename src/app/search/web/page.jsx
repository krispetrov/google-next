import React, { Suspense } from "react";
import WebPageClient from "./WebPageClient";

export default function WebSearchPage() {
 return (
    <Suspense fallback={<div>Loading search...</div>}>
      <WebPageClient />
    </Suspense>
  );
}
