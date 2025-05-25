import React, { Suspense } from "react";
import ImagePageClient from "./ImagePageClient";

export default function ImageSearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <ImagePageClient />
    </Suspense>
  );
}
