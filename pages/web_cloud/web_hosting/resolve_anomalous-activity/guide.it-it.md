---
title: "Come reagire a un'attività anomala rilevata sul tuo hosting web"
excerpt: "Scopri i passaggi da seguire quando viene rilevata un'attività anomala sul tuo hosting web OVHcloud"
updated: 2025-10-02
---

## Obiettivo

Questo manuale spiega perché può essere rilevata un'**attività anomala** sul tuo hosting web, quali sono le **conseguenze temporanee** (blocchi di sicurezza) e **come ripristinare** le funzionalità una volta risolto il problema.

**Scopri come reagire a un'attività insolita sul tuo hosting OVHcloud.**

## Prerequisiti

- Disporre di un'offerta di [hosting web OVHcloud](/links/web/hosting).
- Essere connesso al tuo [spazio clienti OVHcloud](/links/manager).

## Procedura

> [!primary]
> Per proteggere il tuo sito web e i tuoi visitatori, attiviamo automaticamente misure di sicurezza non appena viene rilevata un'attività insolita sul tuo hosting web. Non si tratta sempre di un attacco: la causa può essere ad esempio una cattiva configurazione del tuo sito web, uno script di terze parti o un'estensione difettosa.

### Perché appare questo messaggio?

Abbiamo rilevato un'attività insolita che potrebbe danneggiare il tuo servizio:

- Caso 1 – **Malware rilevati**: probabile presenza di **file dannosi**.
- Caso 2 – **Volume insolito di invii di email tramite PHP** (script/applicazioni).
- Caso 3 – **Volume insolito di richieste in uscita** (connessioni verso l'esterno).

Per motivi di sicurezza e a seconda della situazione, alcune funzionalità potrebbero essere temporaneamente bloccate:

- **Accesso al sito web** (caso 1)
- **Invio di email tramite PHP** (caso 1 e caso 2).
- **Richieste in uscita (TCP OUT)** (caso 1 e caso 3).

### Quali sono le conseguenze per il mio sito web?

- A seconda dell'attività insolita rilevata, il tuo **sito web potrebbe non essere più online** e accessibile ai visitatori.
- Gli **invii di email tramite PHP** (moduli, notifiche, ecc.) e/o le **connessioni in uscita** (API esterne, webhooks, aggiornamenti tramite HTTP, ecc.) potrebbero essere **temporaneamente disattivati**, a seconda del caso.

### Passaggi da seguire per risolvere la situazione

#### Caso 1 — Malware rilevati

Il tuo hosting contiene probabilmente file dannosi. Per comprendere e gestire queste anomalie, segui la nostra guida [Caso d'uso - Consigli dopo un attacco al tuo sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Una volta completata la pulizia**, consulta la sezione [Rimuovere le misure di sicurezza](#lift-security-measures) qui sotto.

#### Caso 2 — Volume insolito di invii di email tramite PHP

Il tuo sito web ha inviato un numero di email tramite PHP superiore alla norma. Questo può essere **legittimo** (campagna, modulo newsletter) o **non desiderato** (utilizzo abusivo di un modulo, script mal configurato, estensione compromessa). Per comprendere e risolvere queste anomalie, consulta la nostra guida [Monitorare e gestire le email automatizzate del tuo hosting web](/pages/web_cloud/web_hosting/mail_function_script_records).

**Una volta normalizzata la situazione**, vai alla sezione [Rimuovere le misure di sicurezza](#lift-security-measures).

> [!primary]
>
> Questa misura non riguarda **l'invio di messaggi dalla tua email** (tramite webmail o client di posta). Si applica esclusivamente alle **email inviate dai tuoi script** (funzione `mail()` PHP o invio SMTP attivato da un'applicazione dal tuo hosting web).

#### Caso 3 — Volume insolito di richieste in uscita (TCP OUT)

Il tuo sito web effettua molte connessioni esterne (API, aggiornamenti, chiamate HTTP, ecc.). Questo può indicare un malfunzionamento. Per comprendere e risolvere queste anomalie, consulta la nostra guida [Caso d'uso - Consigli dopo un attacco al tuo sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Una volta completata la pulizia**, consulta la sezione [Rimuovere le misure di sicurezza](#lift-security-measures) qui sotto.

### Rimuovere le misure di sicurezza <a name="lift-security-measures"></a>

> [!warning]
>
> Esegui questo passaggio **solo dopo aver applicato le raccomandazioni sopra** (diagnosi, correzioni/aggiornamenti, sicurezza). Se un'attività anomala viene rilevata nuovamente durante un prossimo scan, le **misure di sicurezza verranno riassegnate automaticamente**. Riceverai una nuova notifica e i blocchi rimarranno attivi fino alla **risoluzione definitiva** della situazione.

1. Accedi al tuo [spazio clienti OVHcloud](/links/manager), vai su `Web Cloud`{.action} e clicca sul tuo hosting web.
2. Una **finestra di allerta** appare: `Attività anomala sul tuo hosting`. Se clicchi sul pulsante `Più tardi`{.action}, una **bandiera di allerta** `Attività anomala rilevata` appare in alto sulla pagina. Clicca su `Scopri di più`{.action} per riaprire la finestra di allerta.
3. **Seleziona** la casella: `Confermo di aver eseguito tutte le azioni necessarie per risolvere il problema`.
4. Clicca su `Rimuovere le misure di sicurezza`{.action}.
5. Una **bandiera di conferma** appare in alto sulla pagina: `Il tuo hosting è in analisi per rimuovere le misure di sicurezza.` Segui il progresso cliccando sul link `Vedi le attività in corso`{.action} o direttamente dall'etichetta `Attività in corso`{.action}.

> [!warning]
>
> Assicurati che il tuo servizio sia **idoneo al blocco automatico** (alcuni stati non permettono di rimuovere immediatamente le misure).

## Per saperne di più <a name="go-further"></a>

[Come proteggere un sito Web?](/pages/web_cloud/web_hosting/secure_your_website)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).