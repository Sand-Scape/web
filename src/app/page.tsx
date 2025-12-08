"use client";
import Container from "@/components/common/container";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        router.push("/feed");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div className="relative overflow-hidden">
      <BackgroundRippleEffect />
      <Container className="flex justify-center h-screen items-center p-4">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-6xl font-semibold tracking-tight">
            Sand Grain Size Mapping
          </h1>
          <p className="text-2xl tracking-wide font-light">
            This web app is to show the data of sand grain
          </p>
          <Link href="/feed">
            <Button>Get Started</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
