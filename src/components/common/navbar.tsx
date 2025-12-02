import Link from "next/link";
import Container from "./container";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bg-background/30 backdrop-blur-xs border-b text-secondary-foreground p-4 z-20">
      <Container className="flex justify-between items-center">
        <div>
          <Link href="/">
            <h1>Sand Something</h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/map">Map</Link>
          <Link href="#">About</Link>
          <Link href="#">Help</Link>
        </nav>
      </Container>
    </div>
  );
}
