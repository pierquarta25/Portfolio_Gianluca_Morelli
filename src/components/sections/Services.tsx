import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Dumbbell, Laptop, FileText } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const SERVICES = [
  {
    title: "Personal Training",
    description: "Sessioni di allenamento 1-to-1 in presenza. Ti seguirò passo dopo passo per assicurare la corretta esecuzione degli esercizi e massimizzare i risultati.",
    icon: Dumbbell,
    features: ["Valutazione iniziale", "Scheda personalizzata", "Correzione tecnica", "Monitoraggio progressi"]
  },
  {
    title: "Coaching Online",
    description: "Il percorso più completo. Avrai una programmazione su misura, check periodici e supporto costante tramite app per raggiungere i tuoi obiettivi ovunque tu sia.",
    icon: Laptop,
    features: ["Programma mensile", "Check settimanale", "Supporto WhatsApp", "Analisi video esecuzioni"]
  },
  {
    title: "Schede Personalizzate",
    description: "Una programmazione di allenamento studiata sulle tue esigenze e sui tuoi obiettivi, ideale se hai già esperienza e ti alleni in autonomia.",
    icon: FileText,
    features: ["Questionario iniziale", "Scheda di 4-6 settimane", "Spiegazione esercizi", "Consigli sull'intensità"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">I Miei <span className="text-primary">Servizi</span></h2>
          <p className="text-lg text-muted-foreground font-light">
            Scegli il percorso più adatto alle tue esigenze. Che tu voglia allenarti in palestra, a casa o avere un piano alimentare dettagliato, ho la soluzione per te.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`flex flex-col bg-background/40 backdrop-blur-md border-white/10 ${index === 1 ? 'border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10' : ''}`}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Link 
                    href={`https://wa.me/390000000000?text=Ciao%20Gianluca,%20vorrei%20informazioni%20sul%20servizio:%20${service.title}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: index === 1 ? "default" : "outline", className: "w-full" })}
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" /> WhatsApp
                  </Link>
                  <Link 
                    href="https://www.instagram.com/gianluca_morelli_ifbb_elitepro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: index === 1 ? "default" : "outline", className: "w-full" })}
                  >
                    <FaInstagram className="mr-2 h-4 w-4" /> Instagram
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
