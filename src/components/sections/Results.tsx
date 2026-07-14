import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    name: "Marco Rossi",
    goal: "Ricomposizione Corporea",
    content: "In 6 mesi con Gianluca ho perso 8kg di massa grassa e aumentato la mia forza in modo incredibile. Mai stato così in forma!",
    image: "MR"
  },
  {
    name: "Laura Bianchi",
    goal: "Tonificazione",
    content: "Allenarmi online con lui è stato come averlo sempre in sala pesi con me. Sempre disponibile e schede studiate al millimetro.",
    image: "LB"
  },
  {
    name: "Alessandro Verdi",
    goal: "Aumento Massa Muscolare",
    content: "Dopo anni di stallo, la programmazione di Gianluca mi ha sbloccato. Ho messo su 5kg di massa pulita in un anno.",
    image: "AV"
  }
];

export function Results() {
  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Risultati <span className="text-primary">Reali</span></h2>
          <p className="text-lg text-muted-foreground font-light">
            Guarda le trasformazioni di chi ha già scelto di affidarsi ai miei programmi. Il prossimo potresti essere tu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden bg-background/40 backdrop-blur-md border-white/10 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-center mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary">{testimonial.image}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-primary">{testimonial.goal}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm md:text-base">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
