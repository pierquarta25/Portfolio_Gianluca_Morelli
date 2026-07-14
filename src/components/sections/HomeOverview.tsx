import Link from "next/link";
import { ArrowRight, User, Dumbbell, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HomeOverview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Esplora il <span className="text-primary">Metodo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Tutto ciò di cui hai bisogno per trasformare il tuo fisico, riunito in un unico percorso d'eccellenza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Chi Sono */}
          <Link href="/chi-sono" className="group">
            <Card className="h-full bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/50 hover:bg-background/60 transition-all duration-300 overflow-hidden relative">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Chi Sono</h3>
                <p className="text-muted-foreground font-light flex-grow mb-8">
                  Scopri la mia storia da Atleta IFBB Elite Pro e la filosofia che guida ogni mio protocollo di allenamento.
                </p>
                <div className="flex items-center text-primary font-semibold mt-auto">
                  Scopri la mia storia <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card: Servizi */}
          <Link href="/servizi" className="group">
            <Card className="h-full bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/50 hover:bg-background/60 transition-all duration-300 overflow-hidden relative">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Servizi & Coaching</h3>
                <p className="text-muted-foreground font-light flex-grow mb-8">
                  Percorsi personalizzati 1-to-1, schede di allenamento e protocolli alimentari creati su misura per te.
                </p>
                <div className="flex items-center text-primary font-semibold mt-auto">
                  Vedi i percorsi <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Card: Risultati */}
          <Link href="/risultati" className="group">
            <Card className="h-full bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/50 hover:bg-background/60 transition-all duration-300 overflow-hidden relative">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Risultati</h3>
                <p className="text-muted-foreground font-light flex-grow mb-8">
                  Le trasformazioni reali dei clienti che hanno deciso di affidarsi al mio metodo. I fatti prima delle parole.
                </p>
                <div className="flex items-center text-primary font-semibold mt-auto">
                  Guarda i risultati <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
