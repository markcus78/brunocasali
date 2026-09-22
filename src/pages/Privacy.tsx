import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CONFIG, DA_DEFINIRE, FOOTER, PRIVACY } from "@/content/site";

export default function Privacy() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="bg-navy-deep text-navy-foreground">
        <div className="container py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-white transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Torna al sito
          </Link>
        </div>
      </header>

      <main className="container py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl md:text-4xl text-primary leading-tight">
            {PRIVACY.titolo}
          </h1>
          <p className="mt-2 text-sm text-mute">Aggiornata al {PRIVACY.aggiornata}</p>

          <div className="mt-10 space-y-8">
            {PRIVACY.blocchi.map((b) => (
              <section key={b.titolo}>
                <h2 className="font-display text-xl text-primary">{b.titolo}</h2>
                <p className="mt-2 leading-relaxed text-mute">{b.testo}</p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-xl text-primary">Contatti</h2>
              <p className="mt-2 leading-relaxed text-mute">
                Titolare del trattamento: {FOOTER.nome}
                {CONFIG.piva !== DA_DEFINIRE && <> · P.IVA {CONFIG.piva}</>}.{" "}
                {CONFIG.email === DA_DEFINIRE ? (
                  <span className="italic">Indirizzo email da definire.</span>
                ) : (
                  <>
                    Email:{" "}
                    <a href={`mailto:${CONFIG.email}`} className="underline underline-offset-2">
                      {CONFIG.email}
                    </a>
                    .
                  </>
                )}
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
