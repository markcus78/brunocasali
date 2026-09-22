import { useReveal } from "@/hooks/useReveal";
import Autovalutazione from "@/components/Autovalutazione";
import {
  AVVISO_INTERNO, CHI_SONO, CONTATTI, CONFIG, DA_DEFINIRE, DUE_STRADE, FAQ, HERO,
  PREZZO, PROBLEM, SERVIZIO, SPECIALIZZAZIONE, TEST, TRUST_BAR, mancaQualcosa,
} from "@/content/site";
import {
  AlertTriangle, ArrowRight, Check, ClipboardCheck, Dumbbell, Flag, Mail,
  MessageCircle, Phone, ShieldAlert, Users, Waves,
} from "lucide-react";

// Un'icona per ciascuna delle quattro card di "la differenza", nell'ordine in cui
// stanno in site.ts: campo, vasca, sala, persone.
const ICONE_SPECIALIZZAZIONE = [Flag, Waves, Dumbbell, Users];

/* ---------- helpers ---------- */

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Occhiello({ children }: { children: React.ReactNode }) {
  return <p className="sec-num mb-4">{children}</p>;
}

/* ---------- BANNER INTERNO (solo finché mancano i dati) ---------- */

export function AvvisoInterno() {
  if (!mancaQualcosa) return null;
  return (
    <div className="bg-warn-soft border-b-2 border-dashed border-warn">
      <div className="container py-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-warn" />
          <div className="text-sm leading-relaxed" style={{ color: "hsl(28 90% 22%)" }}>
            <p className="font-bold">{AVVISO_INTERNO.titolo}</p>
            <ul className="mt-2 space-y-1 list-disc pl-4">
              {AVVISO_INTERNO.righe.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */

export function Hero() {
  return (
    <section className="relative bg-navy-deep text-navy-foreground overflow-hidden">
      <div className="paper-grain absolute inset-0 opacity-40" aria-hidden />
      <div className="container relative py-20 md:py-28 max-w-4xl">
        <p className="sec-num mb-6">{HERO.occhiello}</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.06] tracking-tight">
          {HERO.titolo}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-navy-foreground/80 max-w-2xl leading-relaxed">
          {HERO.sottotitolo}
        </p>
        <p className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-base md:text-lg text-navy-foreground/75 leading-relaxed">
          {HERO.agitazione}
        </p>
        <div className="mt-10">
          <a
            href="#test"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-semibold text-white shadow-lg shadow-black/25 transition hover:brightness-110"
          >
            {HERO.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-sm text-navy-foreground/60 max-w-md">{HERO.ctaNota}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */

export function TrustBar() {
  return (
    <section className="border-b border-line bg-secondary">
      <div className="container py-6">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm font-medium text-primary">
          {TRUST_BAR.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- PROBLEMA ---------- */

export function Problema() {
  return (
    <section id="problema" className="container py-20 md:py-24">
      <Reveal className="max-w-3xl">
        <Occhiello>{PROBLEM.occhiello}</Occhiello>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-primary">
          {PROBLEM.titolo}
        </h2>
        <p className="mt-6 text-lg text-mute leading-relaxed">{PROBLEM.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PROBLEM.punti.map((p) => (
          <Reveal key={p.titolo}>
            <div className="h-full rounded-2xl border border-line bg-card p-6 shadow-sm">
              <ShieldAlert className="h-6 w-6 text-cross" />
              <h3 className="mt-4 font-display text-xl text-primary">{p.titolo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{p.testo}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="mx-auto max-w-3xl border-l-4 border-accent pl-6 font-display text-xl md:text-2xl leading-snug text-primary">
          {PROBLEM.chiusura}
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- DUE STRADE ---------- */

export function DueStrade() {
  return (
    <section className="bg-secondary">
      <div className="container py-20 md:py-24">
        <Reveal className="max-w-3xl">
          <Occhiello>{DUE_STRADE.occhiello}</Occhiello>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-primary">
            {DUE_STRADE.titolo}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DUE_STRADE.colonne.map((c) => (
            <Reveal key={c.titolo}>
              <div className="h-full rounded-2xl border border-line bg-card p-7 shadow-sm">
                <h3 className="font-display text-2xl text-primary leading-snug">{c.titolo}</h3>
                <p className="mt-4 leading-relaxed text-mute">{c.testo}</p>
                <p className="mt-5 font-semibold text-primary">{c.chiusura}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- IL TEST ---------- */

export function SezioneTest() {
  return (
    <section id="test" className="container py-20 md:py-24 scroll-mt-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Occhiello>{TEST.occhiello}</Occhiello>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-primary">
          {TEST.titolo}
        </h2>
        <p className="mt-5 text-lg text-mute leading-relaxed">{TEST.sottotitolo}</p>
      </Reveal>
      <div className="mx-auto mt-10 max-w-3xl">
        <Autovalutazione />
      </div>
    </section>
  );
}

/* ---------- IL SERVIZIO ---------- */

export function Servizio() {
  return (
    <section id="come-lavoro" className="bg-navy-deep text-navy-foreground">
      <div className="container py-20 md:py-24">
        <Reveal className="max-w-3xl">
          <Occhiello>{SERVIZIO.occhiello}</Occhiello>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{SERVIZIO.titolo}</h2>
          <p className="mt-6 text-lg text-navy-foreground/75 leading-relaxed">{SERVIZIO.intro}</p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {SERVIZIO.passi.map((p) => (
            <Reveal key={p.n}>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-start md:gap-8 md:p-8">
                <span className="font-display text-3xl text-accent md:w-20 md:flex-shrink-0">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{p.titolo}</h3>
                  <p className="mt-2 leading-relaxed text-navy-foreground/75">{p.testo}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="max-w-3xl text-sm leading-relaxed text-navy-foreground/60">
            {SERVIZIO.nota}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SPECIALIZZAZIONE ---------- */

export function Specializzazione() {
  return (
    <section id="differenza" className="container py-20 md:py-24">
      <Reveal className="max-w-3xl">
        <Occhiello>{SPECIALIZZAZIONE.occhiello}</Occhiello>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-primary">
          {SPECIALIZZAZIONE.titolo}
        </h2>
        <p className="mt-6 text-lg text-mute leading-relaxed">{SPECIALIZZAZIONE.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {SPECIALIZZAZIONE.esempi.map((e, i) => {
          const Icona = ICONE_SPECIALIZZAZIONE[i] ?? Waves;
          return (
          <Reveal key={e.titolo}>
            <div className="h-full rounded-2xl border border-line bg-card p-6 shadow-sm">
              <Icona className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-display text-xl text-primary">{e.titolo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{e.testo}</p>
            </div>
          </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12">
        <p className="mx-auto max-w-3xl border-l-4 border-accent pl-6 font-display text-xl md:text-2xl leading-snug text-primary">
          {SPECIALIZZAZIONE.chiusura}
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- PREZZO ---------- */

export function Prezzo() {
  return (
    <section id="prezzo" className="bg-secondary">
      <div className="container py-20 md:py-24">
        <Reveal className="max-w-3xl">
          <Occhiello>{PREZZO.occhiello}</Occhiello>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-primary">
            {PREZZO.titolo}
          </h2>
          <p className="mt-6 text-lg text-mute leading-relaxed">{PREZZO.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PREZZO.fasce.map((f) => (
            <Reveal key={f.titolo}>
              <div className="h-full rounded-2xl border border-line bg-card p-7 shadow-sm">
                <h3 className="font-display text-2xl text-primary">{f.titolo}</h3>
                <p className="mt-2 text-sm text-mute">{f.desc}</p>
                <div className="mt-5 flex items-start gap-2 border-t border-line pt-5">
                  <ClipboardCheck className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                  <p className="text-sm leading-relaxed text-foreground">{f.incluso}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="max-w-3xl leading-relaxed text-mute">{PREZZO.chiusura}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CHI SONO ---------- */

export function ChiSono() {
  return (
    <section id="chi-sono" className="container py-20 md:py-24">
      <Reveal className="max-w-3xl">
        <Occhiello>{CHI_SONO.occhiello}</Occhiello>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-primary">
          {CHI_SONO.titolo}
        </h2>
        <div className="mt-6 space-y-5">
          {CHI_SONO.righe.map((r) => (
            <p key={r.slice(0, 24)} className="text-lg leading-relaxed text-mute">
              {r}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function Faq() {
  return (
    <section id="faq" className="bg-secondary">
      <div className="container py-20 md:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <Occhiello>Domande</Occhiello>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-primary">
            Quello che mi chiedono più spesso
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-6">
                  <span className="font-display text-lg md:text-xl text-primary leading-snug">
                    {f.q}
                  </span>
                  <span className="faq-plus mt-2" aria-hidden />
                </summary>
                <p className="mt-4 pr-10 leading-relaxed text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTATTI ---------- */

export function Contatti() {
  const pronto = CONFIG.whatsapp !== DA_DEFINIRE;
  const href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    CONTATTI.messaggioPrecompilato,
  )}`;
  return (
    <section id="contatti" className="container py-20 md:py-24">
      <Reveal className="mx-auto max-w-3xl rounded-2xl bg-navy-deep p-8 md:p-12 text-navy-foreground">
        <Occhiello>{CONTATTI.occhiello}</Occhiello>
        <h2 className="font-display text-3xl md:text-4xl leading-tight">{CONTATTI.titolo}</h2>
        <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">{CONTATTI.testo}</p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
          <a
            href={pronto ? href : "#test"}
            target={pronto ? "_blank" : undefined}
            rel={pronto ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-semibold text-white transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            {CONTATTI.whatsappLabel}
          </a>
          <div className="space-y-2 text-sm text-navy-foreground/80">
            <p className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              {CONFIG.email === DA_DEFINIRE ? (
                <span className="italic opacity-60">email da definire</span>
              ) : (
                <a href={`mailto:${CONFIG.email}`} className="underline underline-offset-4 hover:text-white">
                  {CONFIG.email}
                </a>
              )}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              {CONFIG.telefonoVisibile === DA_DEFINIRE ? (
                <span className="italic opacity-60">telefono da definire</span>
              ) : (
                <a href={`tel:${CONFIG.whatsapp}`} className="underline underline-offset-4 hover:text-white">
                  {CONFIG.telefonoVisibile}
                </a>
              )}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
