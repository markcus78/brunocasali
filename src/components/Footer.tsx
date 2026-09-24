import { Link } from "react-router-dom";
import { CONFIG, DA_DEFINIRE, FOOTER } from "@/content/site";

function Valore({ v }: { v: string }) {
  if (v === DA_DEFINIRE) return <span className="italic opacity-50">da definire</span>;
  return <>{v}</>;
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground/70 text-sm">
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg text-navy-foreground">{FOOTER.nome}</p>
            <p className="mt-1 max-w-sm leading-relaxed">{FOOTER.claim}</p>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-navy-foreground/50">Email:</span>{" "}
              <Valore v={CONFIG.email} />
            </p>
            <p>
              <span className="text-navy-foreground/50">WhatsApp:</span>{" "}
              <Valore v={CONFIG.telefonoVisibile} />
            </p>
            <p className="pt-2">
              <Link to="/privacy" className="text-accent underline underline-offset-2">
                Informativa privacy
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-xs leading-relaxed text-navy-foreground/55">
          <p>{FOOTER.legale}</p>
          <p>
            {FOOTER.nome} · P.IVA <Valore v={CONFIG.piva} /> · {FOOTER.sede}
          </p>
        </div>
      </div>
    </footer>
  );
}
