import { Services } from "@/components/sections/Services";

export const metadata = {
  title: "Servizi | Gianluca Morelli",
  description: "Scopri i servizi di personal training e coaching online offerti da Gianluca Morelli.",
};

export default function ServiziPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Services />
    </div>
  );
}
