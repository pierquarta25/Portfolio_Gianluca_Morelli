import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
            <SheetContent side="right" className="w-full sm:w-[400px] bg-background/95 backdrop-blur-xl border-l-border/40 p-8 flex flex-col">
              <SheetTitle className="sr-only">Menu di Navigazione</SheetTitle>
              
              <div className="flex justify-start mb-12 mt-4">
                <Image 
                  src="/media/gianluca-morelli-logo-v2.png" 
                  alt="Gianluca Morelli" 
                  width={150} 
                  height={40} 
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </div>

              <nav className="flex flex-col gap-6 flex-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-4xl font-black uppercase tracking-tighter text-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-8 pb-8">
                <Link href="/contatti" className={buttonVariants({ variant: "default", size: "lg", className: "w-full rounded-full text-lg h-14" })}>
                  Inizia Ora
                </Link>

                <div className="flex gap-6 justify-center">
                  <Link href="https://www.instagram.com/gianluca_morelli_ifbb_elitepro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <FaInstagram className="h-7 w-7" />
                  </Link>
                  <Link href="https://wa.me/3277819482" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <FaWhatsapp className="h-7 w-7" />
                  </Link>
                  <Link href="mailto:Gianlucamorell90@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-7 w-7" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
