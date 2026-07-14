"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative group">
            <Carousel 
              className="w-full"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-square md:aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative border border-border shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-[url('/media/PHOTO-2026-01-30-11-06-15.jpg')] bg-cover bg-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square md:aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative border border-border shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-[url('/media/PHOTO-2026-01-30-11-06-15%20copia.jpg')] bg-cover bg-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:-left-6 md:right-auto bg-background/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                </div>
                <div className="text-sm font-medium leading-tight">10+ Anni di<br/>Esperienza</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8 mt-8 lg:mt-0">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Chi è <span className="text-primary">Gianluca Morelli</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Come Atleta IFBB Elite Pro, so bene cosa significhi dedizione, disciplina e spingersi oltre i propri limiti. Ho trasformato la mia passione per il bodybuilding e il fitness in una professione per aiutare gli altri. Il mio obiettivo non è solo farti raggiungere il fisico che desideri, ma trasmetterti una mentalità vincente.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Nel corso degli anni, ho aiutato centinaia di persone a superare i propri limiti, migliorando non solo l'estetica, ma anche la forza, la mobilità e la sicurezza in se stessi.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Atleta Professionista IFBB Elite Pro",
                  "Preparazione Agonistica Bodybuilding",
                  "Esperto in Ricomposizione Corporea",
                  "Personal Trainer Certificato",
                  "Consulenza Nutrizionale",
                  "Coaching Online"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
