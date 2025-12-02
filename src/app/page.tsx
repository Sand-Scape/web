import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container className="flex pointer-events-auto justify-center h-screen items-center p-4">
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
    </>
  );
}
