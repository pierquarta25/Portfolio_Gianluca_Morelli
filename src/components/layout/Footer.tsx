import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/media/gianluca-morelli-logo-v2.png" 
                alt="Gianluca Morelli" 
                width={180} 
                height={48} 
                className="h-10 w-auto object-contain"
                quality={100}
                unoptimized
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Trasforma il tuo corpo, eleva la tua mente. Personal training e coaching online su misura per te.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">Chi Sono</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">Servizi</Link>
              </li>
              <li>
                <Link href="#results" className="hover:text-primary transition-colors">Risultati</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">Contatti</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Seguimi</h4>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/gianluca_morelli_ifbb_elitepro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="mailto:info@gianlucamorelli.it" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gianluca Morelli. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
