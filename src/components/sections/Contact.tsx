import { buttonVariants } from "@/components/ui/button";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-background/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Pronto a <span className="text-primary">Iniziare?</span></h2>
          <p className="text-lg text-muted-foreground font-light">
            Non rimandare a domani quello che puoi iniziare oggi. Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <a
              href="mailto:info@gianlucamorelli.it"
              className={buttonVariants({ size: "lg", variant: "default", className: "rounded-full text-lg h-14 px-8 w-full sm:w-auto" })}
            >
              <Mail className="mr-2 h-5 w-5" /> Scrivimi un'Email
            </a>
            <a
              href="https://wa.me/3277819482?text=Ciao%20Gianluca,%20vorrei%20iniziare%20un%20percorso%20con%20te!"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full text-lg h-14 px-8 w-full sm:w-auto bg-background/50" })}
            >
              <FaWhatsapp className="mr-2 h-5 w-5 text-green-500" /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/gianluca_morelli_ifbb_elitepro"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full text-lg h-14 px-8 w-full sm:w-auto bg-background/50" })}
            >
              <FaInstagram className="mr-2 h-5 w-5 text-pink-500" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
