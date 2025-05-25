"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";
import { useSearchParams } from "next/navigation";
import { imageSearchAPI } from "@/api/getImages";
import Loading from "./loading";

export default function ImagePageClient() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  // Get 'start' from the query string, parse it as number, fallback to 1
  const startIndex = parseInt(searchParams.get("start") || "1", 10);

  const [imageResults, setImageResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    const getImages = async () => {
      setLoading(true);
      try {
        const response = await imageSearchAPI(searchTerm, startIndex);
        if (response) {
          setImageResults(response);
          setLoading(false);
        }
      } catch (e) {
        throw new Error("Something went wrong");
      }
    };

    getImages();
  }, [searchTerm, startIndex]);

  if (loading) {
    return <Loading />;
  }
  if (!imageResults && !loading) {
    return (
      <div className=" flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
        <p className="text-lg">
          Try Searching the web or images for something else
          <Link href="/" className="text-blue-500">
            {" "}
            Home{" "}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {imageResults && !loading && (
        <ImageSearchResults results={imageResults} />
      )}
    </div>
  );
}
