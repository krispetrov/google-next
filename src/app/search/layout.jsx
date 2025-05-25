import SearchHeader from "@/components/SearchHeader";
import React, { Suspense } from "react";
import "./../globals.css";

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}
