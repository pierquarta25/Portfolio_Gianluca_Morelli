"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Mail, ArrowRight, Target, Dumbbell, Flame, Trophy } from "lucide-react";
import Link from "next/link";

const GOALS = [
  {
    id: "massa",
    title: "Aumento Massa Muscolare",
    description: "Costruisci volumi e forza con una programmazione chirurgica.",
    icon: Dumbbell,
  },
  {
    id: "definizione",
    title: "Dimagrimento & Definizione",
    description: "Riduci la massa grassa mantenendo i muscoli guadagnati.",
    icon: Flame,
  },
  {
    id: "ricomposizione",
    title: "Ricomposizione Corporea",
    description: "Il percorso perfetto per ricominciare o sbloccarsi da uno stallo.",
    icon: Target,
  },
  {
    id: "agonismo",
    title: "Preparazione Agonistica",
    description: "Punta al palco. Protocolli estremi per veri atleti.",
    icon: Trophy,
  }
];

export function Contact() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const getWhatsappUrl = () => {
    const baseUrl = "https://wa.me/3277819482";
    if (!selectedGoal) {
      return `${baseUrl}?text=Ciao%20Gianluca,%20vorrei%20avere%20maggiori%20informazioni%20sui%20tuoi%20percorsi.`;
    }
    const goalObj = GOALS.find(g => g.id === selectedGoal);
    const message = `Ciao Gianluca, vorrei iniziare un percorso con te. Il mio obiettivo principale è: ${goalObj?.title}.`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Qual è il tuo <span className="text-primary">Obiettivo?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Seleziona il traguardo che vuoi raggiungere. Ti preparerò un messaggio precompilato per parlarne direttamente su WhatsApp.
          </p>
        </div>

        {/* Goal Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {GOALS.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal === goal.id;
            return (
              <Card
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`cursor-pointer transition-all duration-300 border-white/10 overflow-hidden relative group ${isSelected
                    ? "bg-primary/20 border-primary shadow-[0_0_30px_rgba(var(--primary),0.3)] scale-[1.02]"
                    : "bg-background/40 backdrop-blur-md hover:bg-background/60 hover:border-primary/50"
                  }`}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="pr-12">
                    <h3 className="text-xl font-bold mb-1 tracking-tight">{goal.title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{goal.description}</p>
                  </div>

                  {/* Selection Indicator */}
                  <div className={`absolute top-1/2 right-6 -translate-y-1/2 w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${isSelected ? "border-primary bg-primary" : "border-border"
                    }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Area */}
        <div className="bg-background/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
          <h3 className="text-2xl font-bold mb-8">
            {selectedGoal
              ? "Ottima scelta! Mandami un messaggio per iniziare."
              : "Oppure contattami tramite i canali tradizionali:"}
          </h3>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", variant: "default", className: "rounded-full text-lg h-14 px-8 w-full sm:w-auto shadow-lg hover:shadow-primary/25 transition-all group" })}
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />
              {selectedGoal ? "Invia su WhatsApp" : "Scrivimi su WhatsApp"}
              {selectedGoal && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </a>

            {!selectedGoal && (
              <>
                <a
                  href="mailto:Gianlucamorell90@gmail.com"
                  className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full text-lg h-14 px-8 w-full sm:w-auto bg-background/50 border-white/10" })}
                >
                  <Mail className="mr-2 h-5 w-5" /> Email
                </a>
                <a
                  href="https://www.instagram.com/gianluca_morelli_ifbb_elitepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full text-lg h-14 px-8 w-full sm:w-auto bg-background/50 border-white/10" })}
                >
                  <FaInstagram className="mr-2 h-5 w-5 text-pink-500" /> Instagram
                </a>
              </>
            )}
          </div>

          {selectedGoal && (
            <button
              onClick={() => setSelectedGoal(null)}
              className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Voglio contattarti in un altro modo
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
