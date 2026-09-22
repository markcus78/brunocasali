# brunocasali — sito one page

Sito di [[Bruno Casali]]: RSPP esterno e consulenza sicurezza per impianti sportivi, Roma e provincia.
Regia e contenuti nel vault: `C:\MarcOS\brunocasali\` (MOC, MEMORY, tasks, analisi concorrenti, verbale della call fondativa del 22/09/2026).

## Com'è fatto

Vite + React + TypeScript + Tailwind v3 + shadcn/ui — stesso scheletro di `massimoserchia`.

Una sola pagina, **una sola CTA ripetuta**: il test di autovalutazione. Non c'è un modulo di contatto generico, ed è una scelta: l'analisi dei concorrenti ha mostrato che cinque siti su sei chiedono «contattaci» e si assomigliano tutti.

```
src/content/site.ts          ← TUTTO il copy sta qui. I componenti non contengono testo.
src/components/Autovalutazione.tsx  ← il test: 8 domande, punteggio pesato, risultato
src/components/landing/Sections.tsx ← le sezioni della pagina
src/pages/Index.tsx          ← l'ordine delle sezioni
src/pages/Privacy.tsx        ← informativa
```

## Il test

Otto domande (nove se l'impianto ha la piscina: si aggiunge il manuale di autocontrollo).
Ogni domanda ha un peso; «non lo so» conta come scoperto, **ed è voluto** — se non lo sa il gestore, in un controllo quella voce è scoperta.

Il risultato produce un testo che l'utente manda su **WhatsApp** con un tocco: tipo di impianto, esito e l'elenco puntuale dei buchi. Bruno riceve un lead già qualificato, compresa la fascia di prezzo (mono vs polivalente/piscina).

**Tutto client-side.** Le risposte non escono mai dal browser: nessun backend, nessun form, nessun dato raccolto — ed è quello che dice l'informativa privacy, che dev'essere vera alla lettera.

## Prima di pubblicare

Il sito mostra un banner giallo in cima finché mancano dei dati. Si compilano in `src/content/site.ts` → `CONFIG`:

| campo | cosa | nota |
|---|---|---|
| `dominio` | es. `brunocasali.it` | va messo anche in `public/CNAME` |
| `whatsapp` | `39` + cellulare, senza spazi né `+` | è la CTA principale: senza, il bottone resta spento |
| `telefonoVisibile` | come si legge in pagina | |
| `email` | email dell'attività | ⚠️ **non** `bruno@wellnesstown.it`: è un indirizzo WT |
| `piva` | P.IVA / C.F. | footer e informativa |

Poi, sempre prima del lancio:

- [ ] `public/CNAME` col dominio vero (ora contiene un segnaposto)
- [ ] **aprire il sito ai motori — le due cose vanno fatte INSIEME:** togliere `<meta name="robots" content="noindex, nofollow">` da `index.html` **e** sostituire `public/robots.txt` (ora blocca tutto). Farne una sola significa un sito live e invisibile, senza nessun errore che lo segnali
- [ ] **favicon**: rimossa perché era quella del template (altro brand). Va rifatta
- [ ] `og:image` 1200×630 e `og:url` col dominio
- [ ] self-hostare i font Archivo e Inter, così la pagina non chiama `gstatic` e l'informativa «non raccoglie dati» resta vera
- [ ] foto: Bruno e qualche impianto
- [ ] decidere se esporre i prezzi (oggi c'è solo il modello a due fasce, senza cifre, perché il prezzo d'ingresso non è ancora deciso)

## Regola ferrea sul copy

**Nessun claim che non sia verificabile.** L'unica prova che abbiamo è *«dal 1996»* e il tipo di strutture su cui Bruno ha lavorato. Non aggiungere numero di clienti, nomi di strutture seguite, testimonianze, certificazioni: finché non esistono, non si scrivono.

## Comandi

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # → dist/
npx tsc --noEmit -p tsconfig.app.json
```

## Deploy

Non ancora pubblicato: nessun repo remoto, nessun workflow. Quando si pubblica, il modello è quello di `massimoserchia` (GitHub Pages + workflow in `.github/workflows/`), ma con dominio proprio: `base: "/"` in `vite.config.ts` (già impostato) e il `CNAME` in `public/`.
