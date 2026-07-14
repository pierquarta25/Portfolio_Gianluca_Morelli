import { About } from "@/components/sections/About";

export const metadata = {
  title: "Chi Sono | Gianluca Morelli",
  description: "Scopri la storia di Gianluca Morelli, Atleta IFBB Elite Pro e Personal Trainer.",
};

export default function ChiSonoPage() {
  return (
    <div className="pt-24 min-h-screen">
      <About />
    </div>
  );
}
