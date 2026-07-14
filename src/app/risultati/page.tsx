import { Results } from "@/components/sections/Results";

export const metadata = {
  title: "Risultati | Gianluca Morelli",
  description: "Le trasformazioni reali e i risultati ottenuti dai clienti di Gianluca Morelli.",
};

export default function RisultatiPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Results />
    </div>
  );
}
