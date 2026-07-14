import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contatti | Gianluca Morelli",
  description: "Contatta Gianluca Morelli per iniziare il tuo percorso di trasformazione fisica.",
};

export default function ContattiPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>
  );
}
