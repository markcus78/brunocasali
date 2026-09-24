/**
 * CONTENUTI DEL SITO — Bruno Casali, RSPP esterno per impianti sportivi
 *
 * Tutto il copy vive qui. I componenti non contengono testo.
 *
 * ⚠️ REGOLA FERREA 1 — nessun claim che non sia verificabile.
 *    L'unica prova che abbiamo è "dal 1996" e il tipo di strutture su cui Bruno ha
 *    lavorato. NON aggiungere: numero di clienti, nomi di strutture seguite,
 *    testimonianze, certificazioni ISO, percentuali. Finché non ci sono, non si scrivono.
 *
 * ⚠️ REGOLA FERREA 2 — niente titoli, abilitazioni o attestati in pagina.
 *    Decisione di Marco del 24/09/2026: "non è il caso di esibirli, possono generare
 *    confusione perché le normative nel frattempo sono cambiate e bisognerebbe poi
 *    spiegare che uno sostituisce l'altro". Vale per moduli RSPP A/B/C, qualifica
 *    formatore (D.I. 6/3/13), aggiornamenti quinquennali, attestati di ogni tipo —
 *    qui, su LinkedIn e in qualunque materiale. Vale anche per i RUOLI passati citati
 *    come titolo ("ho fatto l'RSPP presso..."): si racconta il lavoro, non la qualifica.
 *    ✅ Resta "RSPP esterno" dove descrive il SERVIZIO che Bruno vende oggi: quello non
 *    è un titolo esibito, è il mestiere, e toglierlo vorrebbe dire non dire cosa fa.
 *
 * Fonte di tutto ciò che segue: la call Marco–Bruno del 22/09/2026 (verbale nel vault).
 */

// ============================================================================
// ⚠️ DA COMPILARE PRIMA DI PUBBLICARE — questi dati NON erano nella call.
// Finché uno di questi resta "DA_DEFINIRE" il sito mostra il banner di avviso.
// ============================================================================
export const DA_DEFINIRE = "DA_DEFINIRE";

export const CONFIG = {
  /** Dominio registrato da Bruno: brunocasali.it (confermato da Marco il 24/09/2026).
   *  Serve anche per public/CNAME quando si passerà al dominio proprio: oggi il sito
   *  sta su una project page e questo campo non è letto da nessuna parte della pagina. */
  dominio: "brunocasali.it",
  /** Cellulare in formato internazionale senza spazi né +.
   *  È quello che Bruno firma nelle sue email di presentazione, confermato il 24/09/2026. */
  whatsapp: "39335462299",
  /** Come si legge il numero in pagina. */
  telefonoVisibile: "335 462 299",
  /** Email dell'attività: è quella che Bruno usa già nelle sue email di presentazione.
   *  NON usare bruno@wellnesstown.it (è un indirizzo WT). Se in futuro si vuole
   *  un indirizzo sul dominio, si cambia qui. */
  email: "casali.bruno@gmail.com",
  /** P.IVA, dai dati ufficiali passati da Marco il 24/09/2026. */
  piva: "18478801006",
  /** Sede: dai dati ufficiali del 24/09/2026. Va nel footer e nell'informativa. */
  indirizzo: "Via Erode Attico, 30 — 00178 Roma",
};

/**
 * Interruttore del banner di lavorazione.
 * Si spegne a mano (BOZZA = false) quando Marco decide che il sito è pronto:
 * NON deve sparire da solo perché si è riempito un campo di CONFIG, altrimenti
 * il sito sembra finito mentre mancano ancora foto e decisioni sui prezzi.
 * `mancaQualcosa` resta come rete di sicurezza: se un dato è ancora segnaposto,
 * il banner compare comunque, anche a BOZZA spento.
 */
export const BOZZA = true;

export const mancaQualcosa = Object.values(CONFIG).some((v) => v === DA_DEFINIRE);
export const mostraAvviso = BOZZA || mancaQualcosa;

/**
 * Nota di stato mostrata in cima alla pagina finché la bozza non è completa.
 * ⚠️ Questo testo è PUBBLICO (il repo e il sito lo sono): niente note interne qui.
 * Le valutazioni di lavorazione stanno nel vault, non nel codice.
 */
export const AVVISO_INTERNO = {
  titolo: "Bozza in lavorazione — non è ancora il sito definitivo",
  righe: [
    "Prezzi: la pagina descrive il modello a due fasce ma non espone cifre, perché il prezzo d'ingresso non è ancora stato deciso.",
    "Mancano le foto di Bruno e di qualche impianto.",
  ],
};

// ============================================================================
// META / SEO
// ============================================================================
export const META = {
  titolo: "RSPP esterno per impianti sportivi a Roma | Bruno Casali",
  descrizione:
    "Sicurezza sul lavoro per palestre, piscine e centri sportivi: RSPP esterno, DVR, formazione e scadenze con un solo referente. Dal 1996 sugli impianti sportivi. Verifica in 2 minuti se sei in regola.",
  autore: "Bruno Casali",
};

// ============================================================================
// HERO
// ============================================================================
export const HERO = {
  occhiello: "RSPP esterno · Impianti sportivi · Roma e provincia",
  titolo: "La sicurezza del tuo impianto sportivo, gestita da chi gli impianti sportivi li conosce.",
  sottotitolo:
    "RSPP esterno, DVR, formazione del personale e scadenze: un solo referente, dal 1996 su campi, palestre e vasche.",
  agitazione:
    "Un campo di calcio non è un ufficio. Una piscina non è un magazzino. Chi tratta il tuo impianto come un'azienda qualsiasi ti lascia scoperto proprio dove il rischio è vero.",
  cta: "Verifica il tuo impianto in 2 minuti",
  ctaNota: "Nessun dato richiesto per fare il test. Otto domande e vedi subito dove sei scoperto.",
};

export const TRUST_BAR: string[] = [
  "Dal 1996 sugli impianti sportivi",
  "Campi, palestre, piscine e polivalenti",
  "Roma e provincia",
  "Un solo referente per tutta la sicurezza",
];

// ============================================================================
// PROBLEMA — agitazione
// ============================================================================
export const PROBLEM = {
  occhiello: "Il problema",
  titolo: "Non è il faldone che ti deve preoccupare. È quello che succede se dentro manca qualcosa.",
  intro:
    "Finché non passa nessuno, un impianto fuori regola e un impianto a posto si assomigliano. La differenza si vede tutta in una volta sola, e sempre nel momento peggiore.",
  punti: [
    {
      titolo: "L'ispezione",
      testo:
        "Arriva senza preavviso e non guarda la buona fede. Guarda se il documento c'è, se è aggiornato, se il personale è formato e se riesci a dimostrarlo.",
    },
    {
      titolo: "L'infortunio",
      testo:
        "È il momento in cui la responsabilità diventa personale, non della società. E in cui si scopre se la valutazione dei rischi era un adempimento o uno strumento.",
    },
    {
      titolo: "La commessa che salta",
      testo:
        "Convenzioni, bandi, gestioni comunali: la conformità documentale è un requisito d'ingresso. Senza, non è che perdi punti — non partecipi.",
    },
  ],
  chiusura:
    "La sicurezza non ti fa guadagnare un euro finché va tutto bene. Ti fa perdere tutto il giorno in cui va male.",
};

// ============================================================================
// DUE TIPI DI CLIENTE
// ============================================================================
export const DUE_STRADE = {
  occhiello: "Da dove parti",
  titolo: "Ci sono due modi di arrivare qui. Nessuno dei due è sbagliato.",
  colonne: [
    {
      titolo: "Hai già qualcuno che se ne occupa",
      testo:
        "Allora la domanda non è se sei coperto: è quanto stai pagando e per cosa. Spesso l'impianto sportivo viene trattato come un'azienda generica, e restano fuori proprio le cose specifiche — le aree di rispetto del campo, il piano vasca, gli spogliatoi, le attrezzature.",
      chiusura: "Fai il test: se esce tutto verde, hai speso due minuti e dormi meglio.",
    },
    {
      titolo: "Non te ne sei ancora occupato davvero",
      testo:
        "Capita più di quanto sembri, soprattutto nelle società sportive dove tutti fanno tutto. Il punto è che la responsabilità non aspetta di essere organizzata: esiste già, ed è intestata a qualcuno con nome e cognome.",
      chiusura: "Fai il test: serve a sapere di cosa stiamo parlando, prima di parlarne.",
    },
  ],
};

// ============================================================================
// IL TEST DI AUTOVALUTAZIONE
// ============================================================================
export const TEST = {
  occhiello: "Autovalutazione",
  titolo: "Quanto è protetto il tuo impianto?",
  sottotitolo:
    "Otto domande, due minuti, nessun dato richiesto. Alla fine vedi dove sei scoperto e perché conta.",

  tipoDomanda: "Che tipo di impianto gestisci?",
  tipi: [
    { id: "mono", label: "Monoattività", desc: "Solo palestra, solo campi sportivi, solo centro fitness" },
    { id: "poli", label: "Polivalente", desc: "Più discipline, più spazi, più attrezzature" },
    { id: "piscina", label: "Con piscina", desc: "Qualunque impianto con una vasca, anche solo piscina" },
  ],

  /** Ogni domanda: "sì" = sei coperto. "non lo so" conta come scoperto, ed è voluto. */
  domande: [
    {
      id: "dvr",
      testo: "Hai un DVR aggiornato all'assetto attuale dell'impianto?",
      aiuto: "Aggiornato vale davvero: se hai cambiato attrezzature, spazi o attività, il DVR di tre anni fa non ti copre.",
      peso: 3,
      gap: "Il DVR manca o è vecchio. È il primo documento che ti chiedono e l'unico che dimostra che i rischi li avevi valutati prima, non dopo.",
    },
    {
      id: "rspp",
      testo: "Hai un RSPP nominato formalmente?",
      aiuto: "Nominato per iscritto, con incarico accettato — non \"ci pensa il direttore tecnico\".",
      peso: 3,
      gap: "Nessun RSPP nominato. È un obbligo, e in sua assenza la responsabilità resta tutta sul datore di lavoro.",
    },
    {
      id: "formazione",
      testo: "Il personale è formato e riesci a dimostrarlo con gli attestati?",
      aiuto: "Reception, istruttori, bagnini e manutentori hanno esposizioni diverse: una formazione uguale per tutti, in sede di controllo, non copre nessuno.",
      peso: 2,
      gap: "Formazione incompleta o non tracciabile. In sede di controllo un attestato che non si trova equivale a una formazione mai fatta.",
    },
    {
      id: "antincendio",
      testo: "La SCIA antincendio è valida e le pratiche sono in corso di validità?",
      aiuto: "Compresi rinnovo periodico, registro dei controlli e addetti antincendio designati.",
      peso: 3,
      gap: "Posizione antincendio da verificare. È la voce che chiude un impianto più in fretta di qualunque altra.",
    },
    {
      id: "manutenzioni",
      testo: "Le manutenzioni di attrezzature e impianti sono registrate e le verifiche periodiche sono in regola?",
      aiuto: "Attrezzature con targhetta, verifiche di messa a terra, ascensori e montacarichi, attrezzi sportivi, e negli impianti con vasca anche trattamento acque e impianti di aspirazione.",
      peso: 2,
      gap: "Manutenzioni non tracciate. Il problema non è farle: è dimostrare di averle fatte quando serve.",
    },
    {
      id: "emergenza",
      testo: "Hai un piano di emergenza aggiornato e il personale ha fatto la prova di evacuazione?",
      aiuto: "Con una struttura aperta al pubblico e minori in attività, la prova non è un formalismo.",
      peso: 2,
      gap: "Piano di emergenza assente o mai provato. Un piano che nessuno ha mai eseguito, in emergenza, non esiste.",
    },
    {
      id: "sorveglianza",
      testo: "La sorveglianza sanitaria è attiva, con medico competente nominato e visite in corso?",
      aiuto: "Vale per i dipendenti e, secondo i casi, per i collaboratori con mansioni a rischio — negli impianti con vasca entra anche l'esposizione al rischio chimico e biologico.",
      peso: 2,
      gap: "Sorveglianza sanitaria scoperta. È l'adempimento che si dimentica più spesso e che in un controllo salta subito.",
    },
  ],

  /** Domanda in più, solo per chi ha la piscina. */
  domandaPiscina: {
    id: "autocontrollo",
    testo: "Hai il manuale di autocontrollo della piscina e lo stai tenendo aggiornato?",
    aiuto:
      "La normativa su prese e bocchette di aspirazione è di fine agosto 2026 e il quadro si sta completando adesso: è la voce più in movimento del settore.",
    peso: 3,
    gap: "Manuale di autocontrollo da mettere in piedi o da adeguare. È la materia che sta cambiando proprio ora: chi si muove adesso lo fa con calma, chi aspetta lo farà di corsa.",
  },

  risposte: {
    si: "Sì",
    no: "No",
    nonSo: "Non lo so",
  },

  esiti: [
    {
      soglia: 0.85,
      etichetta: "Messa in sicurezza solida",
      testo:
        "Sulla carta sei messo bene. Il rischio, a questo punto, non è quello che manca: è quello che scade. Le scadenze non avvisano.",
    },
    {
      soglia: 0.6,
      etichetta: "Coperto, ma con buchi",
      testo:
        "Le basi ci sono, ma restano punti scoperti — e in caso di controllo o di infortunio si guarda proprio lì. Nessuno chiede cosa è a posto.",
    },
    {
      soglia: 0.0,
      etichetta: "Scoperto nei punti che contano",
      testo:
        "Mancano adempimenti che sono obblighi, non buone pratiche. Non è una situazione rara e non è irrecuperabile: è una situazione da mettere in ordine prima che qualcuno la guardi al posto tuo.",
    },
  ],

  nonSoNota:
    "Hai risposto «non lo so» ad alcune domande. È già di per sé una risposta: se non lo sai tu che gestisci l'impianto, in caso di controllo quella voce vale come scoperta.",

  ctaTitolo: "Adesso che sai dove sei, il secondo passo costa quanto un messaggio.",
  ctaTesto:
    "Mandami il risultato: ti dico cosa va sistemato per primo e cosa può aspettare. Senza impegno e senza che tu debba prepararmi nulla.",
  ctaBottone: "Manda il risultato su WhatsApp",
  ctaAlternativa: "Preferisci l'email?",
  rifai: "Rifai il test",
};

// ============================================================================
// COSA FACCIO — il pacchetto
// ============================================================================
export const SERVIZIO = {
  occhiello: "Come lavoro",
  titolo: "Divento il tuo referente unico per la sicurezza. Per dodici mesi, non per un documento.",
  intro:
    "L'incarico non inizia con una firma e un faldone: inizia con una fotografia di quello che hai. Poi si sistema, e poi si tiene in piedi.",
  passi: [
    {
      n: "01",
      titolo: "Audit della situazione",
      testo:
        "Vengo, guardo e ti dico dove sei davvero: documenti, spazi, attrezzature, personale. Alla fine sai cosa manca e in che ordine va affrontato.",
    },
    {
      n: "02",
      titolo: "Audit economico",
      testo:
        "Guardo anche quanto stai già spendendo per la sicurezza e a chi. Spesso una parte di quei costi si ricontratta o si evita: quello che risparmi resta tuo.",
    },
    {
      n: "03",
      titolo: "DVR e valutazioni specifiche",
      testo:
        "Se ce l'hai lo verifico e lo aggiorno, se non ce l'hai lo scrivo. Tarato sul tuo impianto, non su un modello generico con il nome cambiato.",
    },
    {
      n: "04",
      titolo: "Formazione del personale",
      testo:
        "Una parte generale online, che ciascuno segue quando può e resta tracciata. Una parte specifica sul tuo impianto e sul ruolo: reception, istruttori, bagnini e manutentori non corrono gli stessi rischi, e una formazione uguale per tutti non copre nessuno davvero.",
    },
    {
      n: "05",
      titolo: "Incarico RSPP per dodici mesi",
      testo:
        "Sono io il responsabile del servizio di prevenzione e protezione. Le scadenze le seguo io, i controlli li faccio io, e quando cambia qualcosa nell'impianto si aggiorna senza che tu debba ricordartelo.",
    },
  ],
  nota:
    "Ci sono adempimenti che richiedono altri professionisti — la pratica antincendio, il medico competente. Non ti lascio a cercarli: li coordino io e resto io il tuo unico interlocutore.",
};

// ============================================================================
// PERCHÉ UN GENERALISTA NON BASTA
// ============================================================================
export const SPECIALIZZAZIONE = {
  occhiello: "La differenza",
  titolo: "Chi fa sicurezza per tutti, sugli impianti sportivi si ferma alla porta.",
  intro:
    "La sicurezza sul lavoro in un impianto sportivo è due cose insieme: gli ambienti di lavoro, come ovunque, e l'attività sportiva, che ha le sue regole tecniche. La seconda metà è quella che nessuno guarda.",
  esempi: [
    {
      titolo: "Il campo",
      testo:
        "Le aree di rispetto a bordo campo non sono un'opinione: sono normativa tecnica federale, e cambiano da sport a sport. Un muretto troppo vicino è un rischio, non un dettaglio estetico.",
    },
    {
      titolo: "La vasca",
      testo:
        "Rischio chimico da cloro e trattamento acque, rischio biologico e legionella negli spogliatoi, microclima indoor, scivolamento, piano vasca e autocontrollo. Nessuna di queste voci esiste in un'azienda normale, e sono tutte obblighi.",
    },
    {
      titolo: "La sala",
      testo:
        "Attrezzature da verificare, rumore nelle sale corsi, microclima, percorsi e carichi. Un istruttore che affianca un socio su un bilanciere non ha l'esposizione di chi sta al bancone, e la formazione deve dirlo.",
    },
    {
      titolo: "Le persone e l'affollamento",
      testo:
        "Un impianto aperto al pubblico ha dentro dipendenti, collaboratori sportivi, fornitori e utenti, spesso minori, tutti nello stesso momento. La gestione degli affollamenti è un rischio a sé, e le responsabilità convivono nello stesso metro quadro.",
    },
  ],
  chiusura:
    "Io questo mestiere lo faccio dal 1996 e l'ho fatto dentro gli impianti, non sopra di essi: sugli impianti tecnologici, sulle strutture e sulla sicurezza di complessi sportivi veri. Non devo studiare il tuo settore, ci lavoro.",
};

// ============================================================================
// PREZZO — modello, senza cifre finché non sono decise
// ============================================================================
export const PREZZO = {
  occhiello: "Come si paga",
  titolo: "Un canone mensile, tutto compreso. Nessun preventivo a sorpresa per ogni foglio.",
  intro:
    "Il costo dipende da una cosa sola: quanto è complesso l'impianto. Un centro con una sola attività e un polivalente con la piscina non richiedono lo stesso lavoro, e non è giusto che costino uguale.",
  fasce: [
    {
      titolo: "Impianto monoattività",
      desc: "Una sola disciplina: solo palestra, solo campi sportivi, solo centro fitness.",
      incluso: "Tutta la sicurezza negli ambienti di lavoro: DVR, incarico RSPP, formazione, scadenze.",
    },
    {
      titolo: "Polivalente o con piscina",
      desc: "Più discipline e più spazi, oppure presenza di vasca — anche quando la vasca è l'unica attività.",
      incluso:
        "Tutto quello sopra più la sicurezza specifica dell'attività sportiva: normative tecniche, piano vasca, autocontrollo, attrezzature.",
    },
  ],
  chiusura:
    "Il primo anno comprende la messa in ordine iniziale — audit, DVR, formazione — e costa più del rinnovo. Dal secondo anno paghi solo la gestione, perché il grosso è già fatto.",
};

// ============================================================================
// CHI SONO
// ============================================================================
export const CHI_SONO = {
  occhiello: "Chi sono",
  titolo: "Bruno Casali",
  righe: [
    "Lavoro sulla sicurezza degli impianti sportivi dal 1996. Trent'anni sullo stesso mestiere e sullo stesso tipo di strutture: campi, palestre, centri fitness, piscine, complessi polivalenti.",
    "Ho lavorato dentro complessi sportivi polifunzionali, occupandomi degli impianti tecnologici, della gestione tecnica e della sicurezza — non come consulente che passa una volta l'anno. E il mondo del fitness l'ho vissuto anche dall'altra parte, da istruttore. Vuol dire che quando entro in un impianto so già dove guardare, e quando mi racconti un problema non me lo devo far spiegare due volte.",
    "Lavoro con centri sportivi, palestre, piscine, società sportive, ASD e SSD, su Roma e provincia — perché la sicurezza si fa venendo sul posto, non a distanza.",
  ],
};

// ============================================================================
// FAQ
// ============================================================================
export const FAQ: { q: string; a: string }[] = [
  {
    q: "L'incarico di RSPP è per forza legato al DVR?",
    a: "No, non necessariamente. Se hai già un DVR lo verifico e, se serve, lo aggiorno — non c'è motivo di rifare da zero un documento che tiene. Se non ce l'hai, o se non rispecchia più l'impianto, lo scrivo io.",
  },
  {
    q: "Cosa comprende esattamente l'incarico annuale?",
    a: "L'assunzione del ruolo di RSPP, i sopralluoghi periodici sull'impianto, la gestione delle scadenze, l'aggiornamento dei documenti quando cambia qualcosa e il supporto quando ti serve una risposta. Gli interventi fuori perimetro si concordano prima, mai a sorpresa.",
  },
  {
    q: "La formazione si può fare online o serve in presenza?",
    a: "Tutte e due, ed è giusto così. La parte generale si fa online, quando ciascuno può, e resta tracciata con gli attestati. La parte specifica — il tuo impianto, le tue attrezzature, il ruolo di ognuno — si fa sul posto, perché è lì che ha senso.",
  },
  {
    q: "Ho già un consulente per la sicurezza. Perché dovrei cambiare?",
    a: "Non è detto che tu debba. Fai il test: se esce tutto in ordine, hai la conferma che stai spendendo bene. Se escono buchi proprio sulla parte sportiva, allora sai che il tuo consulente sta trattando l'impianto come un'azienda qualsiasi.",
  },
  {
    q: "Segui anche gli adempimenti che non fai tu, tipo l'antincendio?",
    a: "Li coordino. Per alcune pratiche serve una firma specifica che non è la mia: in quel caso porto io il professionista e resto il tuo unico interlocutore, così non ti ritrovi a fare da centralino fra tre fornitori.",
  },
  {
    q: "Lavori fuori Roma?",
    a: "Di norma no. Il servizio ha senso se vengo sull'impianto con regolarità, e questo funziona su Roma e provincia. Se sei appena fuori, chiedimelo: valutiamo.",
  },
];

// ============================================================================
// CONTATTI
// ============================================================================
export const CONTATTI = {
  occhiello: "Parliamone",
  titolo: "Il primo passo è una chiacchierata, non un contratto.",
  testo:
    "Mandami il risultato del test o scrivimi due righe su che impianto gestisci. Ti dico se c'è qualcosa da sistemare subito e cosa invece può aspettare — se non serve niente, te lo dico e ti ho fatto risparmiare una telefonata.",
  whatsappLabel: "Scrivimi su WhatsApp",
  emailLabel: "Scrivimi una email",
  telefonoLabel: "Chiamami",
  messaggioPrecompilato:
    "Ciao Bruno, ho fatto il test di autovalutazione sul tuo sito.",
};

// ============================================================================
// FOOTER
// ============================================================================
export const FOOTER = {
  nome: "Bruno Casali",
  claim: "RSPP esterno e consulenza sicurezza per impianti sportivi — Roma e provincia",
  legale:
    "Le informazioni presenti su questo sito hanno carattere informativo e non sostituiscono una valutazione dei rischi effettuata sul posto ai sensi del D.Lgs. 81/2008.",
};

// ============================================================================
// PRIVACY
// ============================================================================
export const PRIVACY = {
  titolo: "Informativa privacy",
  aggiornata: "22 settembre 2026",
  blocchi: [
    {
      titolo: "Chi tratta i tuoi dati",
      // L'indirizzo viene da CONFIG: e' scritto in un posto solo.
      testo:
        `Il titolare del trattamento è Bruno Casali, con sede in ${CONFIG.indirizzo}. Per qualunque richiesta relativa ai tuoi dati puoi scrivere all'indirizzo email indicato in fondo a questa pagina.`,
    },
    {
      titolo: "Quali dati raccoglie questo sito",
      testo:
        "Nessuno. Il sito non ha moduli di contatto, non usa cookie di profilazione, non ha strumenti di analisi del traffico e non ti identifica in alcun modo mentre lo navighi.",
    },
    {
      titolo: "Il test di autovalutazione",
      testo:
        "Le risposte che dai al test restano nel tuo browser e non vengono inviate da nessuna parte. Non vengono salvate, non vengono viste da noi e spariscono quando chiudi la pagina.",
    },
    {
      titolo: "Quando ci scrivi",
      testo:
        "Se scegli di contattarci, lo fai tramite WhatsApp o email: in quel momento i tuoi dati li tratta il servizio che hai scelto, secondo le sue condizioni. I dati che ci comunichi li usiamo solo per risponderti e per l'eventuale rapporto professionale che ne deriva, e non vengono comunicati a terzi né usati per invio di comunicazioni commerciali.",
    },
    {
      titolo: "Per quanto li teniamo",
      testo:
        "Le conversazioni che non danno seguito a un rapporto professionale vengono cancellate. Se invece diventi cliente, i dati restano per il tempo previsto dagli obblighi di legge legati alla prestazione.",
    },
    {
      titolo: "I tuoi diritti",
      testo:
        "Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, di correggerli o di cancellarli, scrivendo all'indirizzo qui sotto. Se ritieni che il trattamento non sia corretto puoi rivolgerti al Garante per la protezione dei dati personali.",
    },
  ],
};
