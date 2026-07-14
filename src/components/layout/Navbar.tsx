import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Chi Sono", href: "/chi-sono" },
  { name: "Servizi", href: "/servizi" },
  { name: "Risultati", href: "/risultati" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-background/80 backdrop-blur-md border border-border/40 shadow-lg rounded-full flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/media/gianluca-morelli-logo-v2.png" 
              alt="Gianluca Morelli" 
              width={180} 
              height={48} 
              className="h-10 w-auto object-contain"
              quality={100}
              unoptimized
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contatti" className={buttonVariants({ variant: "default", className: "rounded-full px-6" })}>
            Inizia Ora
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "h-10 w-10" })}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-2 py-2 text-lg font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 flex">
                  <Link href="/contatti" className={buttonVariants({ variant: "default", className: "w-full rounded-full" })}>
                    Inizia Ora
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
