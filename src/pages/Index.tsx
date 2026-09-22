import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  AvvisoInterno, ChiSono, Contatti, DueStrade, Faq, Hero, Prezzo, Problema,
  Servizio, SezioneTest, Specializzazione, TrustBar,
} from "@/components/landing/Sections";

/**
 * One page. Una sola CTA, ripetuta: il test di autovalutazione.
 * L'ordine segue problema → agitazione → diagnosi → soluzione → prova → prezzo → contatto.
 */
export default function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <AvvisoInterno />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problema />
        <DueStrade />
        <SezioneTest />
        <Servizio />
        <Specializzazione />
        <Prezzo />
        <ChiSono />
        <Faq />
        <Contatti />
      </main>
      <Footer />
    </div>
  );
}
