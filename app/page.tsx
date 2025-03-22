import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Header } from "./src/components/header";
import { Hero } from "./src/components/hero";
import { QuemSomos } from "./src/components/quem-somos";
import { WhatsappButton } from "./src/components/whatsapp-button";
import { Produtos } from "./src/components/produtos";
import { Servicos } from "./src/components/sevicos";
import { Testemunhos } from "./src/components/testemunhos";
import { Contato } from "./src/components/contato";
import { Footer } from "./src/components/footer";

config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuemSomos />
        <Produtos />
        <Servicos />
        <Testemunhos />
        <Contato />
        <Footer />
      </main>
      <WhatsappButton />
    </div>
  );
}
