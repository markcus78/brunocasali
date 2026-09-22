import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      // Sempre scura: sopra c'e' il banner di lavorazione su fondo chiaro, e una nav
      // trasparente renderebbe illeggibile il nome. Con lo scroll si aggiunge solo il bordo.
      className={`sticky top-0 z-50 bg-navy-deep transition-shadow ${
        scrolled ? "border-b border-white/10 shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="container flex items-center justify-between gap-4 py-4">
        <a href="#top" className="font-display text-lg text-navy-foreground tracking-tight">
          Bruno Casali
          <span className="ml-2 hidden sm:inline text-xs font-sans font-normal text-navy-foreground/60">
            Sicurezza per impianti sportivi
          </span>
        </a>
        {/* Una sola CTA in tutta la pagina: il test. */}
        <a
          href="#test"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Fai il test
        </a>
      </div>
    </header>
  );
}
