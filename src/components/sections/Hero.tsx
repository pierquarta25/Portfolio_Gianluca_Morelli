import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-[url('/media/banner2.jpg')] bg-cover bg-[position:86.5%_center] md:bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 bg-background/50 md:bg-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:bg-none" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.1] uppercase">
            Trasforma il tuo corpo,{" "}
            <span className="text-primary">Eleva la tua mente.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 font-light tracking-wide">
            Gianluca Morelli – IFBB Elite Pro, Personal Trainer & Online Coach. Ti guido passo dopo passo verso la tua migliore forma fisica, con programmi di allenamento su misura per bodybuilding, fitness e ricomposizione corporea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link href="/contatti" className={buttonVariants({ size: "lg", className: "rounded-full text-lg h-14 px-8" })}>
              Inizia il tuo percorso <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/servizi" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full text-lg h-14 px-8" })}>
              Scopri i servizi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
