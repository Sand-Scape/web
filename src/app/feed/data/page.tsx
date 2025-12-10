"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageData {
  id: number;
  image_id: string;
  data: string | null;
}

const PredictionData = ({ dataString }: { dataString: string | null }) => {
  let predictions: any = {};
  if (dataString) {
    try {
      
      const parsedData = JSON.parse(dataString);
      predictions = parsedData;
    } catch (e) {
      // Fallback to trying to parse the whole thing as JSON
      try {
        predictions = JSON.parse(dataString);
      } catch (e2) {
        console.error("Failed to parse prediction data:", e, e2);
      }
    }
  }

  const coinPrediction = predictions["Coin Model Prediction"] || {};
  const grainPrediction = predictions["Grain Model Prediction"] || {};
  const distribution = grainPrediction.distribution_mm || {};

  return (
    <div className="text-xs text-gray-700 dark:text-gray-300">
      <h4 className="font-bold mt-2">Coin Model Prediction</h4>
      <ul className="list-disc list-inside pl-2">
        <li>mm/pixel: {coinPrediction.mm_per_pixel || ""}</li>
        <li>Label: {coinPrediction.coin_label || ""}</li>
        <li>
          Center: ({coinPrediction.coin_center_x || ""},{" "}
          {coinPrediction.coin_center_y || ""})
        </li>
        <li>Radius (px): {coinPrediction.coin_radius_px || ""}</li>
      </ul>
      <h4 className="font-bold mt-2">Grain Model Prediction</h4>
      <ul className="list-disc list-inside pl-2">
        <li>Size (mm): {grainPrediction.size_mm || ""}</li>
      </ul>
      <h4 className="font-bold mt-2">Grain Size Distribution (mm)</h4>
      <ul className="list-disc list-inside pl-2 grid grid-cols-2 gap-x-4">
        <li>D10: {distribution.D10 || ""}</li>
        <li>D16: {distribution.D16 || ""}</li>
        <li>D25: {distribution.D25 || ""}</li>
        <li>D50: {distribution.D50 || ""}</li>
        <li>D50mean: {distribution.D50mean || ""}</li>
        <li>D65: {distribution.D65 || ""}</li>
        <li>D75: {distribution.D75 || ""}</li>
        <li>D84: {distribution.D84 || ""}</li>
        <li>D90: {distribution.D90 || ""}</li>
      </ul>
    </div>
  );
};

export default function DataPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const startTime = performance.now();
      try {
        const response = await fetch("/api/v1/image");
        const data = await response.json();
        setImages(data);
        const endTime = performance.now();
        setResponseTime(endTime - startTime);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-1 scroll-auto">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2 ">
            <h1>
              Total Images: {images.length}
              <br />
              <span className="text-xs font-light tracking-tight">
                Total number of images processed.
              </span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2">
            <h1>
              Avg model res time:
              <br />
              <span className="text-xs font-light tracking-tight">
                Average time it takes to analyize image.
              </span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex justify-center items-center relative gap-2">
            <h1>
              Avg Res Time:{" "}
              {responseTime ? `${responseTime.toFixed(2)} ms` : "N/A"}
              <br />
              <span className="text-xs font-light tracking-tight">
                Average time it takes to fetch data.
              </span>
            </h1>
          </div>
          <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {loading
                ? // Loading Skeleton
                  Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 animate-pulse"
                    >
                      <div className="w-full h-48 bg-gray-300 dark:bg-neutral-600"></div>
                      <div className="p-4">
                        <div className="h-4 bg-gray-300 dark:bg-neutral-600 rounded w-3/4 mb-4"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-300 dark:bg-neutral-600 rounded w-1/2"></div>
                          <div className="h-3 bg-gray-300 dark:bg-neutral-600 rounded w-5/6"></div>
                          <div className="h-3 bg-gray-300 dark:bg-neutral-600 rounded w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  ))
                : // Actual Image Grid
                  images.map((image) => (
                    <div
                      key={image.id}
                      className="rounded-lg overflow-hidden border bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 flex flex-col"
                    >
                      <div
                        className="relative w-full"
                        style={{ paddingTop: "60%" }}
                      >
                        <Image
                          src={`/api/v1/image/${image.image_id}`}
                          alt={image.image_id}
                          layout="fill"
                          className="object-cover"
                        />
                        {image.data === null && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[1px] font- z-10">
                            <h1 className="animate-pulse">
                              Analyzing The Image...
                            </h1>
                          </div>
                        )}
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-sm font-bold mb-2 text-center text-gray-800 dark:text-gray-200">
                          {image.image_id}
                        </p>
                        <PredictionData dataString={image.data} />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
