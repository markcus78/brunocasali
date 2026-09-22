import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, HelpCircle, Mail, MessageCircle, RotateCcw, X } from "lucide-react";
import { CONFIG, CONTATTI, DA_DEFINIRE, TEST } from "@/content/site";

type Risposta = "si" | "no" | "nonSo";
type Tipo = "mono" | "poli" | "piscina";

/**
 * Test di autovalutazione — è il cuore della pagina e l'unica CTA del sito.
 *
 * Tutto client-side: le risposte non escono dal browser (vedi informativa privacy).
 * Il risultato viene passato a WhatsApp come testo precompilato, quindi è l'utente
 * a decidere se e cosa inviare. Nessun backend, nessun form, nessun dato raccolto.
 */
export default function Autovalutazione() {
  const box = useRef<HTMLDivElement>(null);
  const primoRender = useRef(true);
  const [tipo, setTipo] = useState<Tipo | null>(null);
  const [risposte, setRisposte] = useState<Record<string, Risposta>>({});
  const [indice, setIndice] = useState(0);
  const [finito, setFinito] = useState(false);

  // Con la piscina si aggiunge la domanda sull'autocontrollo.
  const domande = useMemo(() => {
    const base = TEST.domande;
    return tipo === "piscina" ? [...base, TEST.domandaPiscina] : base;
  }, [tipo]);

  const totalePassi = domande.length + 1; // +1 per la scelta del tipo
  const passoCorrente = tipo === null ? 1 : Math.min(indice + 2, totalePassi);

  const esito = useMemo(() => {
    if (!finito) return null;
    const pesoTotale = domande.reduce((s, d) => s + d.peso, 0);
    const pesoOk = domande.reduce((s, d) => (risposte[d.id] === "si" ? s + d.peso : s), 0);
    const quota = pesoTotale === 0 ? 0 : pesoOk / pesoTotale;
    const fascia = TEST.esiti.find((e) => quota >= e.soglia) ?? TEST.esiti[TEST.esiti.length - 1];
    const buchi = domande.filter((d) => risposte[d.id] !== "si");
    const nonSo = domande.filter((d) => risposte[d.id] === "nonSo").length;
    return { quota, fascia, buchi, nonSo, pesoOk, pesoTotale };
  }, [finito, domande, risposte]);

  // A ogni passo la card cambia altezza: senza questo, rispondendo si finisce
  // fuori schermo e il test sembra rotto. Non scatta al primo render.
  useEffect(() => {
    if (primoRender.current) {
      primoRender.current = false;
      return;
    }
    box.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [indice, tipo, finito]);

  function rispondi(id: string, r: Risposta) {
    setRisposte((prec) => ({ ...prec, [id]: r }));
    if (indice + 1 >= domande.length) setFinito(true);
    else setIndice(indice + 1);
  }

  function indietro() {
    if (indice === 0) {
      setTipo(null);
      return;
    }
    setIndice(indice - 1);
  }

  function ricomincia() {
    setTipo(null);
    setRisposte({});
    setIndice(0);
    setFinito(false);
  }

  const contattiPronti = CONFIG.whatsapp !== DA_DEFINIRE;

  const messaggio = useMemo(() => {
    if (!esito || !tipo) return CONTATTI.messaggioPrecompilato;
    const nomeTipo = TEST.tipi.find((t) => t.id === tipo)?.label ?? tipo;
    const righe = [
      CONTATTI.messaggioPrecompilato,
      "",
      `Impianto: ${nomeTipo}`,
      `Esito: ${esito.fascia.etichetta}`,
      "",
      esito.buchi.length ? "Punti scoperti:" : "Nessun punto scoperto.",
      ...esito.buchi.map((d) => `- ${d.testo}${risposte[d.id] === "nonSo" ? " (non lo so)" : ""}`),
    ];
    return righe.join("\n");
  }, [esito, tipo, risposte]);

  const hrefWhatsapp = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(messaggio)}`;
  const hrefEmail = `mailto:${CONFIG.email}?subject=${encodeURIComponent(
    "Autovalutazione sicurezza impianto",
  )}&body=${encodeURIComponent(messaggio)}`;

  return (
    <div ref={box} className="scroll-mt-24 rounded-2xl border border-line bg-card shadow-sm overflow-hidden">
      {/* barra di avanzamento */}
      {!finito && (
        <div className="h-1.5 w-full bg-muted">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${(passoCorrente / totalePassi) * 100}%` }}
          />
        </div>
      )}

      <div className="p-6 md:p-10">
        {/* ---------- passo 1: tipo di impianto ---------- */}
        {tipo === null && !finito && (
          <div>
            <p className="text-sm font-semibold text-mute">
              Domanda 1 di {TEST.domande.length + 1}
            </p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl text-primary leading-snug">
              {TEST.tipoDomanda}
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {TEST.tipi.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTipo(t.id as Tipo)}
                  className="group rounded-xl border-2 border-line bg-background p-5 text-left transition hover:border-accent hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span className="block font-semibold text-primary">{t.label}</span>
                  <span className="mt-1 block text-sm text-mute leading-snug">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ---------- passi 2..n: le domande ---------- */}
        {tipo !== null && !finito && (
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-mute">
                Domanda {indice + 2} di {totalePassi}
              </p>
              <button
                type="button"
                onClick={indietro}
                className="inline-flex items-center gap-1.5 text-sm text-mute hover:text-primary transition"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Indietro
              </button>
            </div>

            <h3 className="mt-2 font-display text-2xl md:text-3xl text-primary leading-snug">
              {domande[indice].testo}
            </h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-mute leading-relaxed">
              <HelpCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
              <span>{domande[indice].aiuto}</span>
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <RispostaBtn
                onClick={() => rispondi(domande[indice].id, "si")}
                icona={<Check className="h-4 w-4" />}
                variante="si"
              >
                {TEST.risposte.si}
              </RispostaBtn>
              <RispostaBtn
                onClick={() => rispondi(domande[indice].id, "no")}
                icona={<X className="h-4 w-4" />}
                variante="no"
              >
                {TEST.risposte.no}
              </RispostaBtn>
              <RispostaBtn
                onClick={() => rispondi(domande[indice].id, "nonSo")}
                icona={<HelpCircle className="h-4 w-4" />}
                variante="forse"
              >
                {TEST.risposte.nonSo}
              </RispostaBtn>
            </div>
          </div>
        )}

        {/* ---------- risultato ---------- */}
        {finito && esito && (
          <div>
            <p className="sec-num">Il tuo risultato</p>
            <h3 className="mt-3 font-display text-2xl md:text-4xl text-primary leading-tight">
              {esito.fascia.etichetta}
            </h3>
            <p className="mt-4 text-lg text-mute leading-relaxed">{esito.fascia.testo}</p>

            {esito.buchi.length > 0 && (
              <div className="mt-8 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Dove sei scoperto
                </p>
                {esito.buchi.map((d) => (
                  <div
                    key={d.id}
                    className="flex items-start gap-3 rounded-xl border border-line bg-background p-4"
                  >
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-cross" />
                    <p className="text-sm leading-relaxed text-foreground">{d.gap}</p>
                  </div>
                ))}
              </div>
            )}

            {esito.nonSo > 0 && (
              <p className="mt-5 rounded-xl bg-muted p-4 text-sm leading-relaxed text-mute">
                {TEST.nonSoNota}
              </p>
            )}

            <div className="mt-10 rounded-2xl bg-navy-deep p-6 md:p-8 text-navy-foreground">
              <h4 className="font-display text-xl md:text-2xl leading-snug">{TEST.ctaTitolo}</h4>
              <p className="mt-3 text-navy-foreground/80 leading-relaxed">{TEST.ctaTesto}</p>

              {contattiPronti ? (
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={hrefWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-semibold text-white transition hover:brightness-110"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {TEST.ctaBottone}
                  </a>
                  <a
                    href={hrefEmail}
                    className="inline-flex items-center gap-2 text-sm text-navy-foreground/80 underline underline-offset-4 hover:text-white transition"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {TEST.ctaAlternativa}
                  </a>
                </div>
              ) : (
                <p
                  className="mt-6 rounded-lg border-2 border-dashed border-warn bg-warn-soft px-4 py-3 text-sm font-medium"
                  style={{ color: "hsl(38 92% 24%)" }}
                >
                  Bottone disattivato: manca il numero WhatsApp in <code>src/content/site.ts</code>.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={ricomincia}
              className="mt-6 inline-flex items-center gap-2 text-sm text-mute hover:text-primary transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {TEST.rifai}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function RispostaBtn({
  children,
  onClick,
  icona,
  variante,
}: {
  children: React.ReactNode;
  onClick: () => void;
  icona: React.ReactNode;
  variante: "si" | "no" | "forse";
}) {
  const stile =
    variante === "si"
      ? "hover:border-check hover:text-check"
      : variante === "no"
        ? "hover:border-cross hover:text-cross"
        : "hover:border-accent hover:text-accent";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 border-line bg-background px-5 py-4 font-semibold text-primary transition focus:outline-none focus:ring-2 focus:ring-accent ${stile}`}
    >
      {icona}
      {children}
    </button>
  );
}
