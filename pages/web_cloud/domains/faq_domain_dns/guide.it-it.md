---
title: "FAQ sui domini & DNS"
excerpt: "Ritrova le principali domande su nomi di dominio, server DNS e zone DNS"
updated: 2025-10-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Clicca sulle domande qui sotto per visualizzare le spiegazioni.**

## Sottoscrizione di un nome di dominio

/// details | Come posso sottoscrivere un nome di dominio su OVHcloud?

Segui questi passaggi:

1. Vai sul nostro sito web [OVHcloud](/links/website).
2. Nella pagina che appare e nel campo dedicato, digita il nome di dominio che desideri riservare (ad esempio: `domain.tld`), quindi clicca sul pulsante `Cerca`{.action}.
3. Nella nuova pagina che appare, il nostro sistema ti indicherà se il nome di dominio scelto è disponibile all'acquisto o meno. Se è già riservato con la sintassi che hai digitato, modificalo e rilancia una nuova ricerca di disponibilità.
4. Una volta che hai trovato un nome di dominio disponibile, clicca sul pulsante `Acquista`{.action}, quindi sul pulsante `Procedi con l'ordine`{.action} nella colonna a destra.
5. Seleziona eventuali opzioni o servizi a cui desideri sottoscrivere in aggiunta al tuo nome di dominio, quindi clicca su `Continua`{.action} fino a quando il tunnel d'ordine ti chiederà di autenticarti o di creare un account OVHcloud.
6. Una volta autenticato con il tuo account OVHcloud, potrai personalizzare le informazioni dei contatti (proprietario/titolare, amministratore, tecnico) per il tuo nome di dominio. Clicca quindi sul pulsante `Continua`{.action} per accedere al riepilogo del tuo ordine.
7. Nella pagina `Riepilogo del tuo ordine` e se necessario, potrai modificare la configurazione DNS che verrà applicata al tuo nome di dominio cliccando sul link intitolato `Modifica la configurazione`{.action}. Una volta completate le tue modifiche, clicca sul pulsante `Paga`{.action} per accedere all'ultima fase del tuo ordine.

Paga quindi il tuo ordine per iniziare la riservazione del tuo nome di dominio nonché l'installazione dei servizi e opzioni a cui hai sottoscritto in aggiunta.

Qualche istante più tardi riceverai un'e-mail di conferma per il tuo ordine.
Potrai quindi amministrare il tuo nome di dominio collegandoti al tuo [Spazio Cliente OVHcloud](/links/manager).

Non esitare a creare un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help) se necessario.

///

/// details | Come posso acquistare un nome di dominio sul mercato secondario?

L'acquisto di un nome di dominio sul mercato secondario avviene nello stesso modo della sottoscrizione di un nome di dominio.

Segui questi passaggi:

1. Vai sul nostro sito web [OVHcloud](/links/website).
2. Nella pagina che appare e nel campo dedicato, digita il nome di dominio che desideri riservare (ad esempio: `domain.tld`), quindi clicca sul pulsante `Cerca`{.action}.
3. Nella nuova pagina che appare, il nostro sistema ti indicherà se il nome di dominio scelto è disponibile all'acquisto o meno. Se è già riservato con la sintassi che hai digitato, modificalo e rilancia una nuova ricerca di disponibilità.
4. Una volta che hai trovato un nome di dominio disponibile, clicca sul pulsante `Acquista`{.action}, quindi sul pulsante `Procedi con l'ordine`{.action} nella colonna a destra.
5. Seleziona eventuali opzioni o servizi a cui desideri sottoscrivere in aggiunta al tuo nome di dominio, quindi clicca su `Continua`{.action} fino a quando il tunnel d'ordine ti chiederà di autenticarti o di creare un account OVHcloud.
6. Una volta autenticato con il tuo account OVHcloud, potrai personalizzare le informazioni dei contatti (proprietario/titolare, amministratore, tecnico) per il tuo nome di dominio. Clicca quindi sul pulsante `Continua`{.action} per accedere al riepilogo del tuo ordine.
7. Nella pagina `Riepilogo del tuo ordine` e se necessario, potrai modificare la configurazione DNS che verrà applicata al tuo nome di dominio cliccando sul link intitolato `Modifica la configurazione`{.action}. Una volta completate le tue modifiche, clicca sul pulsante `Paga`{.action} per accedere all'ultima fase del tuo ordine.

Paga quindi il tuo ordine per iniziare la riservazione del tuo nome di dominio nonché l'installazione dei servizi e opzioni a cui hai sottoscritto in aggiunta.

Qualche istante più tardi riceverai un'e-mail di conferma per il tuo ordine.
Potrai quindi amministrare il tuo nome di dominio collegandoti al tuo [Spazio Cliente OVHcloud](/links/manager).

Non esitare a creare un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help) se necessario.

///

## Gestione di un nome di dominio

/// details | Come posso sapere se il mio nome di dominio è registrato su OVHcloud?

Per farlo, puoi effettuare una richiesta [WHOIS](/links/web/domains-whois) per sapere dove è registrato il tuo nome di dominio e per verificare che sei effettivamente dichiarato come titolare del nome di dominio.

Ogni ufficio di registrazione (come OVHcloud) ha la possibilità di scegliere come visualizzare le informazioni relative a un nome di dominio nel WHOIS.

Una volta effettuata la richiesta WHOIS, cerca nel risultato almeno una delle seguenti righe:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Se osservi almeno una di queste righe nel risultato, il tuo nome di dominio è effettivamente registrato su OVHcloud.

Nel caso contrario, il tuo nome di dominio è registrato presso un altro ufficio di registrazione. Cerca quindi le righe relative al `Registrar` per identificare l'ufficio di registrazione dove il tuo nome di dominio è registrato.

///

/// details | Come posso conoscere la data di scadenza di un nome di dominio?

La soluzione più rapida è effettuare una richiesta [WHOIS](/links/web/domains-whois) sul nome di dominio. Una volta effettuata la richiesta, cerca nel risultato la riga corrispondente alla data di scadenza (ad esempio: `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, ecc.).

Se il tuo nome di dominio è registrato su OVHcloud, puoi anche seguire questi passaggi:

1. Collegati al tuo [Spazio Cliente OVHcloud](/links/manager).
2. Clicca sul tuo nome nell'angolo in alto a destra e scegli `Le mie offerte e servizi`{.action}.
3. Nella tabella che appare, cerca la riga corrispondente al tuo nome di dominio, quindi individua la data presente nella colonna `Data di entrata in vigore`. Questa data corrisponde alla data di scadenza del tuo nome di dominio.

///

/// details | Come modificare la data annuale di scadenza di un nome di dominio?

La data annuale di scadenza di un nome di dominio (ad esempio: il 24 settembre) è predefinita in base alla data di registrazione (creazione) del nome di dominio.

In genere, la data annuale di scadenza di un nome di dominio è la stessa della data in cui lo hai registrato.

Pertanto, non è possibile modificare la data annuale di scadenza di un nome di dominio.

///

<br>

/// details | Come posso correggere un errore di battitura nel mio nome di dominio?

Dopo che un nome di dominio è sottoscritto, esso viene registrato in base ai caratteri che gli hai definito al momento dell'ordine. La registrazione avviene presso il registro dell'estensione del tuo nome di dominio (ad esempio: il registro dei *.com*) e vengono applicati dei costi di prenotazione dal lato dell'ufficio di registrazione (come OVHcloud).

Un nome di dominio è un indirizzo unico su Internet, ad esempio: `ovhcloud.com`.
Ogni modifica in questo nome, che sia un carattere o un'estensione (.com, .fr, .net, ecc.), ne fa un nome di dominio completamente diverso.

Pertanto, se hai commesso un errore di battitura al momento dell'ordine, non potrà essere modificato o corretto. Dovrai ordinare un nuovo nome di dominio indipendentemente da quello precedente (a condizione che la nuova ortografia desiderata non sia già riservata da qualcun altro).

I nomi di dominio vengono considerati prodotti personalizzati, poiché vengono registrati specificamente per un titolare e bloccati per gli altri già al momento dell'ordine. Per questo motivo, una volta registrati, non possono essere rimborsati.

///

/// details | Come modificare un nome di dominio già sottoscritto?

Dopo che un nome di dominio è sottoscritto, esso viene registrato in base ai caratteri che gli hai definito al momento dell'ordine. La registrazione avviene presso il registro dell'estensione del tuo nome di dominio (ad esempio: il registro dei *.com*) e vengono applicati dei costi di prenotazione dal lato dell'ufficio di registrazione (come OVHcloud).

Un nome di dominio è un indirizzo unico su Internet, ad esempio: `ovhcloud.com`.
Ogni modifica in questo nome, che sia un carattere o un'estensione (.com, .fr, .net, ecc.), ne fa un nome di dominio completamente diverso.

Pertanto, se hai commesso un errore di battitura al momento dell'ordine, non potrà essere modificato o corretto. Dovrai ordinare un nuovo nome di dominio indipendentemente da quello precedente (a condizione che la nuova ortografia desiderata non sia già riservata da qualcun altro).

I nomi di dominio vengono considerati prodotti personalizzati, poiché vengono registrati specificamente per un titolare e bloccati per gli altri già al momento dell'ordine. Per questo motivo, una volta registrati, non possono essere rimborsati.

///

/// details | Come eliminare un nome di dominio?

Segui questi passaggi:

1. Collegati al tuo [Spazio Cliente OVHcloud](/links/manager).
2. Clicca sul tuo nome nell'angolo in alto a destra e scegli `Le mie offerte e servizi`{.action}.
3. Nella tabella che appare, cerca la riga corrispondente al tuo nome di dominio, clicca sul pulsante `...`{.action} a destra, quindi su `Disattivare il servizio`{.action}.
4. Sulla pagina visualizzata, seleziona la modalità di annullamento (immediatamente o alla data di scadenza del servizio) e clicca in basso sul pulsante `Sì, disattiva`{.action}.

Il tuo nome di dominio verrà sospeso alla data di scadenza, quindi, a partire da questa data, verrà eliminato **definitivamente** entro un massimo di 60 giorni. Questo periodo è definito dall'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) affinché un nome di dominio venga completamente eliminato e nuovamente disponibile per la registrazione da parte di un altro proprietario/titolare.

> [!primary]
>
> Una volta richiesta la disdetta, puoi accelerare l'eliminazione creando un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help). Devi fornire documenti giustificativi per accelerare questa eliminazione.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Come disattivare i servizi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | Ho ricevuto un'e-mail relativa alla validazione delle informazioni del titolare associate al mio nome di dominio, cosa devo fare?

Innanzitutto, se hai dubbi sulla legittimità dell'e-mail ricevuta, consulta la nostra guida "[Proteggersi dalle truffe: come riconoscere email fraudolente e di phishing](/pages/account_and_service_management/account_information/phishing_care)".

Conformemente a una direttiva dell'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) del 01/09/2014, gli uffici di registrazione (ad esempio: OVHcloud) sono tenuti a verificare la validità delle coordinate dei titolari/proprietari dei nomi di dominio. OVHcloud invia quindi un'e-mail ai titolari/proprietari del nome di dominio registrato all'indirizzo e-mail di contatto dichiarato presso OVHcloud.

Riceverai questa e-mail quando effettuerai una delle seguenti azioni:

- Registrazione di un nuovo nome di dominio.
- Trasferimento di un nome di dominio.
- Modifica delle coordinate associate al tuo nome di dominio.

Questa e-mail contiene un link che ti permette di verificare rapidamente le tue coordinate in qualità di proprietario/titolare legale del nome di dominio.

Attenzione: Questa verifica deve essere effettuata entro 15 giorni. Al di là di questo periodo, il nome di dominio verrà sospeso tecnicamente. Rimarrà contrattualmente a tuo nome ma non sarà più accessibile su Internet. Un messaggio d'errore apparirà per i visitatori del tuo sito web.

Puoi ricevere le seguenti e-mail nei primi 15 giorni:

- **Giorno 0**: Immediatamente dopo aver ordinato il nome di dominio o aver modificato le sue coordinate, tu (o la persona registrata come proprietario/titolare del nome di dominio) riceverai la prima e-mail con un link di verifica.
- **Giorni 4, 9 e 13 (e-mail di richiamo)**: Se non hai ancora verificato il nome di dominio, riceverai nuovamente l'e-mail.
- **Giorno 14**: Se non hai ancora verificato il nome di dominio, l'e-mail viene inviata nuovamente. Inoltre, un'e-mail viene anche inviata all'indirizzo e-mail dell'amministratore/titolare del nome di dominio per informarlo che le coordinate di quest'ultimo non sono state confermate.
- **Giorno 15**: Se il proprietario/titolare del nome di dominio non ha ancora risposto, inviamo un'e-mail all'amministratore del nome di dominio per informarlo della situazione e della disattivazione del nome di dominio.

Oltre questi 15 giorni, il sistema invia e-mail supplementari (fino a 9 e-mail) prima di eliminare il tuo nome di dominio. Questa eliminazione verrà effettuata dopo 60 giorni a partire dal giorno 0.

> [!warning]
>
> A seconda dell'estensione del nome di dominio (ad esempio: *.com*, *.net*, ecc.) alcuni dei periodi menzionati sopra possono variare. Ti consigliamo vivamente di verificare, presso il registro dell'estensione del tuo nome di dominio, il processo di verifica del controllo dei contatti.

///

/// details | Non ho ricevuto l'e-mail di validazione delle informazioni del titolare associato al mio nome di dominio e questo è sospeso, cosa devo fare?

Se non hai ricevuto l'e-mail di validazione del proprietario del tuo nome di dominio, verifica i punti seguenti:

1. L'indirizzo e-mail dichiarato per il titolare del nome di dominio è valido e operativo.
2. L'e-mail di validazione non si trova nella cartella di posta indesiderata.

Dopo aver verificato e confermato i due punti sopra, se non riesci comunque a recuperare l'e-mail di validazione del titolare, ti invitiamo a creare un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help) per richiedere il reinvio di questa e-mail.

///

/// details | Cos'è un nome di dominio nel formato IDN?

Inizialmente, i nomi di dominio potevano contenere solo caratteri **ASCII** specifici (tra cui le 26 lettere dell'alfabeto latino). Un **I**nternationalized **D**omain **N**ame (**IDN**) permette, tra l'altro, di utilizzare caratteri speciali o accentati, o addirittura altri alfabeti (come il *cyrillico*).

Presso OVHcloud, è perfettamente possibile ordinare degli IDN e utilizzarli come un nome di dominio autonomo con i nostri altri servizi offerti (ospedalità web, zona DNS, ecc.<sup>1</sup>).

Una volta sottoscritti, gli IDN appaiono nel tuo [Spazio Cliente OVHcloud](/links/manager) nel formato **xn--**.

Anche se il tuo dominio appare in [notazione internazionalizzata (IDN)](https://it.wikipedia.org/wiki/Nome_di_dominio_internazionalizzato) nel tuo [Spazio Cliente OVHcloud](/links/manager), funzionerà e apparirà in modo perfettamente normale altrove. L'indirizzo del tuo sito web apparirà come lo hai richiesto. Le tue indirizzi e-mail appariranno anche come desideri presso i tuoi corrispondenti.

> [!alert]
>
> <sup>1</sup>: Non è consigliabile utilizzare un indirizzo e-mail con un nome di dominio IDN da un client di posta (Outlook, Mail di macOS, ecc.). Infatti, alcuni client di posta non interpretano ancora i nomi di dominio con caratteri accentuati, il che blocca la trasmissione delle e-mail. Quando un mittente ti invia un'e-mail, riceve quindi un messaggio automatico che indica che il tuo indirizzo e-mail non esiste.
>
> **Si consiglia di riservare, in aggiunta al tuo nome di dominio con caratteri accentuati, lo stesso nome di dominio senza questi accenti, per evitare qualsiasi incompatibilità a livello degli scambi di e-mail.**

///

/// details | Come correggere un nome di dominio nel formato IDN?

Come i nomi di dominio "classici", non appena un nome di dominio o un IDN è sottoscritto, esso viene registrato in base ai caratteri che gli hai definiti al momento dell'ordine.

Pertanto, se hai commesso un errore di battitura al momento dell'ordine, non potrà essere corretto. Dovrai ordinare un nuovo nome di dominio indipendentemente da quello precedente (a condizione che la nuova ortografia desiderata non sia già riservata da qualcun altro).

///

/// details | Come rinnovare un solo nome di dominio presente in un pacchetto Alldom?

Per farlo, devi essere almeno dichiarato come [contatto "Fatturazione"](/pages/account_and_service_management/account_information/managing_contacts) del nome di dominio interessato. Dovrai quindi modificare la modalità di rinnovo del nome di dominio per passarlo in **rinnovo automatico**.

Per farlo, segui questi passaggi:

1. Collegati al tuo [Spazio Cliente OVHcloud](/links/manager).
2. Clicca sul tuo nome nell'angolo in alto a destra e scegli `Le mie offerte e servizi`{.action}.
3. Nella tabella che appare e a destra del nome di dominio interessato, clicca sul pulsante `...`{.action} nella colonna `Azioni`, quindi su `Configura il rinnovo`{.action}. Potrai quindi configurare il rinnovo di questo nome di dominio in **rinnovo automatico**.

> [!primary]
>
> Se disponi di un'offerta di ospedalità web vecchia che include un nome di dominio gratuito e se modifichi questa offerta di ospedalità, in alcuni casi ciò può annullare la gratuità del nome di dominio.
>
> In caso di dubbio, ti invitiamo a creare un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help) specificando il nome di dominio e l'ospedalità web interessati.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Come rinnovare i servizi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Trasferimento di un nome di dominio

/// details | Il mio nome di dominio è trasferibile dopo un cambio di proprietario?

L'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha stabilito misure di sicurezza per prevenire trasferimenti o cambi di proprietari non autorizzati o abusivi dei nomi di dominio.

L'ICANN ha definito in particolare un periodo incompressibile di **60** giorni tra ogni operazione che può verificarsi su un nome di dominio (creazione, cambio di proprietario, trasferimento).

Le regole definite dall'ICANN devono essere rispettate obbligatoriamente dagli uffici di registrazione (come OVHcloud).

Non avrai quindi altra scelta che attendere fino alla fine del periodo di 60 giorni per poter trasferire il tuo nome di dominio dopo averne cambiato il proprietario.

///

/// details | Il mio nome di dominio è bloccato per il trasferimento per 60 giorni, cosa devo fare?

L'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha stabilito misure di sicurezza per prevenire trasferimenti o cambi di proprietari non autorizzati o abusivi dei nomi di dominio.

L'ICANN ha definito in particolare un periodo incompressibile di **60** giorni tra ogni operazione che può verificarsi su un nome di dominio (creazione, cambio di proprietario, trasferimento).

Le regole definite dall'ICANN devono essere rispettate obbligatoriamente dagli uffici di registrazione (come OVHcloud).

Non avrai quindi altra scelta che attendere fino alla fine del periodo di 60 giorni per effettuare una nuova operazione (cambio di proprietario o trasferimento) sul tuo nome di dominio.

///

/// details | Non trovo il mio nome di dominio nel mio spazio client, cosa devo fare?

Innanzitutto, effettua una richiesta [WHOIS](/links/web/domains-whois) per sapere dove è registrato il tuo nome di dominio e per verificare che sei effettivamente dichiarato come titolare del nome di dominio.

Caso n. 1.A - Il tuo nome di dominio è registrato presso OVHcloud e sei effettivamente dichiarato come titolare del nome di dominio:

Effettua una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) per far sì che il tuo nome di dominio venga completamente gestito nel tuo [Spazio Cliente OVHcloud](/links/manager). In questo modo, non avrai più bisogno di contattare la persona che gestiva in precedenza il tuo nome di dominio.

Caso n. 1.B - Il tuo nome di dominio è registrato presso OVHcloud e non sei dichiarato come titolare del nome di dominio:

Conformemente al **R**egolamento **G**enerale sulla **P**rotezione dei **D**ati (**RGPD**), OVHcloud non potrà fornire informazioni relative alla persona o all'organizzazione che gestisce il nome di dominio presso OVHcloud.

Tuttavia, puoi provare a contattare la persona o l'organizzazione che lo gestisce seguendo le istruzioni di [questo modulo](/links/web/contact-domain-owner).

Caso n. 2 - Il tuo nome di dominio non è registrato presso OVHcloud:

Contatta direttamente l'ufficio di registrazione (indicato nelle righe che iniziano con il termine `Registrar`) del tuo nome di dominio per proseguire le tue ricerche. Infatti, se il nome di dominio non è registrato presso OVHcloud, non saremo in grado di aiutarti su questo argomento.

///

/// details | Non riesco a contattare la persona che gestisce il mio nome di dominio, cosa devo fare?

Innanzitutto, effettua una richiesta [WHOIS](/links/web/domains-whois) per verificare che sei effettivamente dichiarato come titolare del nome di dominio.

Caso n. 1 - Sei effettivamente dichiarato come titolare del nome di dominio:

Effettua una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) per far sì che il tuo nome di dominio venga interamente gestito nel tuo [Spazio Cliente OVHcloud](/links/manager). In questo modo, non avrai più bisogno di contattare la persona che gestiva in precedenza il tuo nome di dominio.

Caso n. 2 - Non sei dichiarato come titolare del nome di dominio:

Conformemente al **R**egolamento **G**enerale sulla **P**rotezione dei **D**ati (**RGPD**), OVHcloud non potrà fornire informazioni relative alla persona o all'organizzazione che gestisce il nome di dominio su OVHcloud.

Tuttavia, puoi provare a contattare la persona o l'organizzazione che lo gestisce seguendo le istruzioni di [questo modulo](/links/web/contact-domain-owner).

///

/// details | Posso vendere il mio nome di dominio?

Attualmente, OVHcloud non supporta direttamente il processo di vendita dei nomi di dominio già registrati. Non offriamo questo tipo di servizio.

Tuttavia, se desideri mettere in vendita il tuo nome di dominio su un mercato secondario, contatta uno dei nostri partner seguenti:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Se desideri vendere il tuo nome di dominio, puoi aggiungerlo a queste piattaforme. Una volta aggiunto, i fornitori autorizzati proporranno il tuo nome di dominio al prezzo che avrai definito su una delle piattaforme sopra indicate.

///

## Zone DNS

> [!primary]
>
> La modifica di una zona DNS è un'operazione delicata e può causare interruzioni nei servizi associati al tuo nome di dominio (ospedamento web, e-mail, ecc.). In caso di dubbi, non esitare a contattare un [fornitore specializzato](/links/partner).

/// details | Cos'è una zona DNS?

La zona DNS di un nome di dominio contiene una configurazione applicabile a quest'ultimo. È composta da informazioni tecniche, chiamate *record DNS*. La zona DNS funziona come un centro di instradamento, dirigendo il traffico verso i servizi corretti associati al dominio.

Puoi ad esempio specificare:

- L'indirizzo IP (record DNS di tipo *A* e *AAAA*) del tuo ospedamento web per visualizzare il tuo sito web con il tuo nome di dominio.
- I server e-mail (record DNS di tipo *MX*) verso cui il tuo nome di dominio deve indirizzare le e-mail che riceve.
- Informazioni relative alla sicurezza / all'autenticazione dei tuoi servizi (ospedamento web, server web, server e-mail, ecc.) associati al tuo nome di dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc.).

Una zona DNS è ospitata / registrata su **server DNS**. Questi **server DNS** devono essere dichiarati presso l'ufficio di registrazione del nome di dominio per utilizzare la zona DNS che ospitano.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | Cos'è un record DNS?

I record DNS vengono utilizzati, ad esempio, per:

- Associare un nome di dominio a un indirizzo IP, permettendo agli utenti di accedere a un sito web o a un server remoto.
- Associare un nome di dominio ad altre risorse online utilizzando un nome di dominio (più facilmente memorizzabile) invece di un indirizzo IP.
- Validare configurazioni di associazione o di sicurezza, in particolare per i servizi e-mail e gli ospedamenti condivisi.

Esistono molti tipi di record DNS. Ogni tipo ha uno scopo specifico nella risoluzione DNS. Su OVHcloud, vengono distinti in tre parti:

- **Campi di puntamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
- **Campi estesi**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP` e `TLSA`.
- **Campi e-mail**: `MX`, `SPF`, `DKIM` e `DMARC`.

> [!success]
>
> Trova ulteriori dettagli nei seguenti guide:
>
> - Informazioni generali:
>     - [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
> - Record DNS di puntamento:
>     - [Aggiungere un record DNS di tipo A per un dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Aggiungere un record DNS di tipo AAAA per un dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Aggiungere un record DNS di tipo CNAME per un dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Record DNS estesi:
>     - [Aggiungere un record DNS di tipo TXT per un dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Record DNS e-mail:
>     - [Configurare un record MX per la gestione delle email](/pages/web_cloud/domains/dns_zone_mx)
>     - [Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Migliora la sicurezza delle email con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Migliora la sicurezza delle email con un record DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Quali record DNS sono disponibili in una zona DNS OVHcloud?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}.

A questo punto, visualizzerai l'intera lista dei record DNS che puoi aggiungere tramite l'assistant di configurazione OVHcloud.

Grazie a questo assistant di configurazione, potrai aggiungere i seguenti tipi di record DNS:

- **Campi di puntamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
- **Campi estesi**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP` e `TLSA`.
- **Campi e-mail**: `MX`, `SPF`, `DKIM` e `DMARC`.

> [!primary]
>
> Se desideri aggiungere un record DNS non presente nell'elenco, chiudi la finestra che si è aperta dopo aver cliccato sul pulsante `Aggiungi un record`{.action} e clicca sul pulsante `Utilizza l'editor di testo`{.action} situato a destra o sotto la tabella.
>
> Potrai così aggiungere manualmente il record DNS desiderato.

> [!success]
>
> Trova ulteriori dettagli nei seguenti guide:
>
> - Informazioni generali:
>     - [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
> - Record DNS di puntamento:
>     - [Aggiungere un record DNS di tipo A per un dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Aggiungere un record DNS di tipo AAAA per un dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Aggiungere un record DNS di tipo CNAME per un dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Record DNS estesi:
>     - [Aggiungere un record DNS di tipo TXT per un dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Record DNS e-mail:
>     - [Configurare un record MX per la gestione delle email](/pages/web_cloud/domains/dns_zone_mx)
>     - [Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Migliora la sicurezza delle email con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Migliora la sicurezza delle email con un record DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Posso modificare i server DNS dichiarati nella mia zona DNS su OVHcloud?

La modifica manuale degli record DNS di tipo NS di un nome di dominio in una zona DNS OVHcloud non è consigliata, poiché impedirebbe la risoluzione DNS della zona DNS corrispondente.

Se desideri modificare la configurazione degli record DNS di tipo NS del tuo nome di dominio, probabilmente è perché desideri cambiare i server DNS dichiarati per quest'ultimo.

> [!primary]
>
> Per modificare i server DNS del tuo nome di dominio su OVHcloud, una zona DNS deve già esistere sui nuovi server DNS desiderati.
> Inoltre, dovrai verificare nella stessa zona DNS che gli record DNS di tipo NS corrispondano effettivamente ai server DNS corrispondenti.

Per farlo, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
3. Una volta posizionato sul nome di dominio desiderato, seleziona l'etichetta `Server DNS`{.action}.
4. Per modificare i server DNS, clicca sul pulsante `Modifica i server DNS`{.action} situato a destra del tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.

Potrai modificare i server DNS per il tuo nome di dominio sulla pagina che appare.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

In caso di errore, ti invitiamo a aprire un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help) specificando le seguenti informazioni:

- I nomi dei server DNS che desideri configurare.
- Il messaggio di errore riscontrato.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Qual è la differenza tra un record DNS di tipo A (IPv4) e AAAA (IPv6)?

La rete Internet ha iniziato a funzionare fin dagli anni '90 seguendo la norma IPv4. Questa norma permette di fornire un indirizzo IP X.X.X.X (dove ogni "X" è un numero compreso tra 0 e 255) a ciascuna delle macchine collegate alla rete Internet (server, computer, smartphone, tablet, ecc.). Tuttavia, questa norma limita a circa 4 miliardi il numero di dispositivi connessi alla rete Internet.

A causa di ciò, il protocollo IPv6 è stato introdotto per permettere di collegare alla rete Internet fino a 340 sextillioni di dispositivi.

Gli indirizzi IPv4 sono ormai meno disponibili, quindi è più difficile aggiungere nuove macchine alla rete Internet con la norma IPv4. Tuttavia, le connessioni con un indirizzo IPv6 sono utili solo se, ad esempio, il tuo sito web è disponibile anche con lo stesso protocollo.

I record DNS di tipo A e AAAA sono due tipi di record di risorse utilizzati per associare un nome di dominio a un indirizzo IP.

Le loro principali differenze risiedono nel tipo di indirizzo IP che utilizzano:

- **Record A** (chiamato anche "record host"): Associa un nome di dominio a un indirizzo IPv4 (ad esempio, 213.0.113.0). Gli indirizzi IPv4 sono indirizzi a 32 bit, generalmente scritti in notazione decimale puntata.
- **Record AAAA** (chiamato anche "quadruplo record A"): Associa un nome di dominio a un indirizzo IPv6 (ad esempio, 2001:db8:1:1b00:213:0:113:0). Gli indirizzi IPv6 sono indirizzi a 128 bit, generalmente scritti in notazione esadecimale.

In altre parole, i record A vengono utilizzati per gli indirizzi IPv4, mentre i record AAAA vengono utilizzati per gli indirizzi IPv6. Entrambi i tipi di record vengono utilizzati per indirizzare il traffico verso un indirizzo IP specifico, ma vengono utilizzati per diverse versioni del protocollo Internet.

Da notare che un dominio può avere sia record A che AAAA, il che gli permette di essere accessibile sui reti IPv4 e IPv6. Questo è ciò che si chiama "doppio stack", una pratica comune per i siti web e i servizi che desiderano essere accessibili agli utenti su reti IPv4 e IPv6.

> [!success]
>
> Trova ulteriori dettagli nei seguenti guide:
>
> - [Aggiungere un record DNS di tipo A per un dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Aggiungere un record DNS di tipo AAAA per un dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configura un indirizzo IPv6 per il tuo sito Web](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Come configurare un record PTR per il mio indirizzo IP esterno a OVHcloud?

Su OVHcloud, le configurazioni **P**oin**T**er **R**ecord (**PTR**) non possono essere gestite direttamente all'interno delle nostre zone DNS.

Per configurare un record reverse/PTR per un indirizzo IP esterno, contatta il tuo **F**ornitore d'**A**cceso a **I**nternet (**FAI**) poiché è responsabile della gestione degli record DNS inversi degli indirizzi IP che assegna.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | Come modificare il TTL predefinito nella mia zona DNS OVHcloud?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Modifica il TTL predefinito`{.action}.
4. Nella finestra che si apre, regola il valore sotto la dicitura `TTL predefinito` in base alle tue esigenze, quindi clicca su `Modifica`{.action}.

> [!primary]
>
> La propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

///

/// details | Cos'è un record DNS di tipo SOA?

Il record DNS di tipo **S**tart **O**f **A**uthority (**SOA**) fornisce un insieme di elementi riguardanti la configurazione DNS di un nome di dominio.

Ecco il risultato di una richiesta SOA per il nome di dominio `domain.tld`.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Elemento nel risultato|Descrizione|Corrispondenza nell'esempio sopra|
|---|---|---|
|**NS (Name Server)**|Server DNS principale dichiarato per il nome di dominio `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Indirizzo e-mail del responsabile della zona DNS.|`tech.ovh.net` (il punto tra i termini `tech` e `ovh` deve essere sostituito da un `@`).|
|**Serial number**|Numero di serie unico che incrementa ad ogni modifica della zona DNS.<br>È generalmente composto dalla data di aggiornamento nel formato `YYYYMMDD` seguito dal numero di aggiornamenti effettuati nella giornata.|`2025091801`: Qui 2 aggiornamenti (`00` per 1, `01` per 2, ecc.) sono stati fatti il 18/09/2025.|
|**Refresh time**|Intervallo (in secondi) tra ogni aggiornamento dei server DNS secondari (componenti della rete DNS) con il server DNS principale.|`86400` (24 ore).|
|**Retry time**|Intervallo (in secondi) tra ogni tentativo di aggiornamento dei parametri dei server DNS secondari (componenti della rete DNS) con il server DNS principale se quest'ultimo non risponde o è non disponibile.|`3600` (1 ora).|
|**Expire time**|Intervallo (in secondi) dopo il quale i server DNS secondari (componenti della rete DNS) smettono di rispondere alle richieste DNS se il server DNS principale non si aggiorna con loro.|`3600000` (1000 ore, 41,67 giorni).|
|**Minimum TTL**|Durata di vita minima (in secondi) durante la quale gli record DNS della zona DNS vengono memorizzati in cache sui server DNS secondari (componenti della rete DNS).|`300` (5 minuti).|

///

<br>

/// details | Come verificare la configurazione della mia zona DNS?

Ecco diverse soluzioni per verificare la configurazione di una zona DNS:

- **Uno strumento di verifica online**: Molti strumenti online permettono di verificare la configurazione della tua zona DNS. Trovali direttamente utilizzando un browser Internet (Chrome, Edge, Firefox, Safari, ecc.) digitando le parole chiave appropriate (ad esempio: "verificare la propagazione DNS") in un motore di ricerca.

- **Il comando "dig"**: Se hai accesso a un *terminale* da un sistema operativo Linux o macOS, puoi utilizzare il comando `dig` per verificare la configurazione della tua zona DNS sulla rete DNS.

- **Il comando "nslookup"**: Il comando `nslookup` è disponibile su quasi tutti i sistemi operativi e permette anch'esso di verificare la configurazione della tua zona DNS.

- **Dallo spazio client OVHcloud**: Per farlo, segui questi passaggi (se la zona DNS attiva del tuo nome di dominio è gestita da OVHcloud):
    1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
    2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
    3. Nella tabella della pagina che appare, visualizzerai l'intera lista degli record DNS dichiarati per il tuo nome di dominio.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Come verificare la propagazione delle modifiche effettuate nella mia zona DNS?

> [!primary]
>
> Prima di procedere, sappi che:
>
> - La propagazione di una modifica effettuata in una zona DNS può richiedere fino a **24** ore.
> - La propagazione di una modifica dei server DNS per un nome di dominio può richiedere fino a **48** ore.

Puoi comunque verificare che la propagazione DNS si svolga correttamente utilizzando l'record DNS di tipo **S**tart **O**f **A**uthority (**SOA**).

In primo luogo, apri un terminale compatibile sul tuo computer, quindi esegui la seguente riga di comando (sostituisci `domain.tld` con il tuo nome di dominio):

```bash
dig domain.tld soa
```

> [!primary]
>
> I sistemi operativi Linux e macOS dispongono nativamente di un terminale compatibile per eseguire questo tipo di comando. Se utilizzi un altro sistema operativo, ad esempio Windows, dovrai installare preventivamente un terminale compatibile per eseguire il comando.
>
> Inoltre, sappi che esistono anche strumenti disponibili online per verificare la propagazione DNS.

Una volta eseguito il comando, ottieni un risultato simile a questo:

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

In questo risultato, recupera il **numero di serie** (nella nostra esempio: `2025091801`).

Ha la forma seguente `YYYYMMDDRR` dove:

- `YYYYMMDD`: Rappresenta la data (l'anno, il mese e il giorno) dell'ultima modifica DNS propagata per il nome di dominio.
- `RR`: Rappresenta il numero di modifiche effettuate nella data indicata. Ad esempio, se una sola modifica è stata effettuata in un giorno, avrà il valore `00`. Se 2 modifiche sono state effettuate nello stesso giorno, avrà il valore `01` e così via.

Una volta recuperato il numero di serie, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Utilizza l'editor di testo`{.action}.
4. Nella finestra che si apre, individua la seconda riga, che, per riprendere il nostro esempio, sarebbe equivalente a questa: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Confronta il numero di serie recuperato tramite il terminale con quello che appare nel tuo spazio client OVHcloud.

Caso n. 1 - I due numeri di serie corrispondono:

Questo significa che la propagazione DNS si svolge correttamente. Non hai nient'altro da fare.

Caso n. 2 - I due numeri di serie sono diversi:

Questo significa che:

- La propagazione DNS delle tue modifiche non è ancora completamente terminata (sei ancora nei tempi standard di propagazione DNS). In questo caso, attendi che la propagazione DNS sia completamente terminata (**24** ore per una modifica della zona DNS e **48** ore per una modifica dei server DNS), quindi ripeti l'operazione.
- La propagazione DNS non si svolge correttamente. In questo caso, dalla finestra `Utilizza l'editor di testo`{.action} che si è aperta al passo **4**, clicca direttamente **senza effettuare modifiche** sul pulsante `Continua`{.action}, quindi su `Conferma`{.action}. Una nuova propagazione DNS verrà quindi avviata.

///

/// details | Come ripristinare una zona DNS?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Visualizza la cronologia della tua zona DNS`{.action}.
4. Nella tabella della pagina che appare, identifica la riga corrispondente al backup della zona DNS desiderata, quindi clicca sull'icona presente nella colonna `Ripristinare`{.action}. La configurazione attuale della zona DNS verrà sostituita dal backup selezionato.

> [!primary]
>
> La propagazione delle modifiche a una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Gestire la cronologia di una zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Come recuperare una copia della mia zona DNS?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Visualizza la cronologia della tua zona DNS`{.action}.
4. Nella tabella della pagina che appare, identifica la riga corrispondente al backup della zona DNS desiderata, quindi clicca sull'icona presente nella colonna `Scarica`{.action}. La copia della zona DNS verrà scaricata nel formato *.txt*.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Gestire la cronologia di una zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Posso creare una zona DNS per un sottodominio?

Puoi creare una zona DNS per un sottodominio.

Per farlo, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action}, quindi clicca sul pulsante `Ordina`{.action} in alto a destra della tabella che appare.
3. Nella pagina che appare, inserisci il sottodominio (ad esempio: *www.domain.tld*) per cui desideri creare una zona DNS OVHcloud. Aspetta alcuni istanti mentre lo strumento effettua verifiche sul sottodominio.
4. Non appena la verifica riesce, scegli di attivare o meno le voci minime per la zona DNS che stai per creare. Questa scelta non è definitiva poiché potrai sempre [modificare gli record della zona DNS](/pages/web_cloud/domains/dns_zone_edit) in seguito.
5. Una volta effettuata la tua scelta, prosegui fino alla creazione della zona DNS.

Questa zona DNS verrà installata su 2 server DNS OVHcloud. Dovrai dichiarare i nomi di questi due server nella zona DNS attiva del nome di dominio del tuo sottodominio (ad esempio, *www.domain.tld* è un sottodominio del nome di dominio *domain.tld*).

Per recuperare i nomi dei 2 server DNS, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action}, quindi seleziona il sottodominio desiderato.
3. In alto a sinistra della pagina che appare, recupera i 2 nomi dei server DNS presenti sotto la dicitura `Name Servers`. Questi ultimi hanno una delle 2 forme seguenti:

- `dnsXXX.ovh.net` e `nsXXX.ovh.net` **o** `dnsXXX.ovh.ca` e `nsXXX.ovh.ca` (dove ogni `X` rappresenta una cifra compresa tra `0` e `9`).
- `dns200.ovh.me` e `ns200.anycast.me`.

Una volta in possesso dei 2 server DNS, dichiarali utilizzando due record di tipo NS nella zona DNS attiva del nome di dominio da cui proviene il tuo sottodominio.

Cas n. 1 - La zona DNS attiva del nome di dominio da cui proviene il tuo sottodominio è su OVHcloud:

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}, quindi seleziona il tipo di record DNS di tipo `NS`{.action} per dichiarare un server DNS.
4. Nella finestra che appare, inserisci il sottodominio desiderato nel campo `Sottodominio *`{.action} (ad esempio, scrivi **solo** *www* se il tuo nome di dominio è *domain.tld* e il tuo sottodominio completo è *www.domain.tld*). Nel campo `Destinazione *`{.action}, inserisci **solo uno** dei 2 server DNS.
5. Clicca su `Continua`{.action}, quindi su `Conferma`{.action}.

Ripeti l'operazione per il secondo server DNS rimanente da dichiarare.

Cas n. 2 - La zona DNS attiva del nome di dominio da cui proviene il tuo sottodominio non è su OVHcloud:

Dovrai quindi dichiarare i 2 server DNS per il tuo sottodominio direttamente presso il fornitore DNS del tuo nome di dominio (da cui proviene il tuo sottodominio).

> [!primary]
>
> In entrambi i casi, la propagazione delle modifiche a una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Trova ulteriori dettagli nei seguenti guide:
>
> - [Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Come reindirizzare tutti i sottodomini dello stesso nome di dominio verso la stessa indirizzo IP?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}, quindi seleziona il tipo di record DNS di tipo `A`{.action} per un IPv4 (ad esempio: `203.0.113.0`) o di tipo `AAAA`{.action} per un IPv6 (ad esempio: `2001:db8:1:1b00:203:0:113:0`).
4. Nella finestra che appare e nel campo di input intitolato `Sottodominio *`{.action}, inserisci il valore `*`. L'asterisco `*` rappresenterà tutti i sottodomini (ad esempio: `www.domain.tld` o `ovhcloud.domain.tld`) del tuo nome di dominio. Completa il campo `Destinazione *`{.action} con l'indirizzo IP desiderato.
5. Clicca su `Continua`{.action}, quindi su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche a una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Posso mettere in atto un wildcard nella mia zona DNS?

È possibile mettere in atto un wildcard in una zona DNS OVHcloud.

Per farlo, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
3. A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}, quindi seleziona il tipo di record DNS per cui desideri mettere in atto un wildcard.
4. Nella finestra che appare e nel campo di input intitolato `Sottodominio *`{.action}, inserisci il valore `*`. L'asterisco `*` rappresenterà tutti i sottodomini (ad esempio: `www.domain.tld` o `ovhcloud.domain.tld`) del tuo nome di dominio. Completa gli altri campi con i valori desiderati.
5. Clicca su `Continua`{.action}, quindi su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche a una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | Ho accidentalmente eliminato la mia zona DNS e desidero ripristinarla, cosa devo fare?

OVHcloud invia un'e-mail contenente una copia della zona DNS in formato testo una volta che la tua zona DNS è stata eliminata, in modo che tu possa ripristinarla in seguito se necessario.
Questa e-mail è inviata all'indirizzo e-mail associato al tuo account client OVHcloud.

> [!success]
>
> Se non hai ricevuto questa e-mail, controlla nella cartella di posta indesiderata o segui questi passaggi:
>
> 1. Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), clicca sul tuo nome in alto a destra, quindi su `Accedere al mio account`{.action}.
> 2. Nella pagina che appare, clicca sull'etichetta `Email ricevute`{.action}.
> 3. Nella tabella che appare e tra l'elenco delle e-mail ricevute, clicca sull'e-mail desiderata per visualizzarne il contenuto.

Per ripristinare la tua zona DNS, segui questi passaggi:

1. Scarica il file contenente la zona DNS dall'e-mail ricevuta.
2. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
3. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
4. Una volta posizionato sul nome di dominio desiderato, seleziona l'etichetta `Zona DNS`{.action}. **Se la zona DNS è inattiva, attivala da questa etichetta.**
5. A destra o sotto la tabella, clicca su `Utilizza l'editor di testo`{.action}.
6. Nella finestra che appare, sostituisci tutto il contenuto visualizzato con la copia della zona DNS eliminata. Clicca quindi su `Continua`{.action}, quindi su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche a una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Trova ulteriori dettagli nei seguenti guide:
>
> - [Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gestire la cronologia di una zona DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Come annullare una richiesta di eliminazione della mia zona DNS?

Per ogni richiesta di eliminazione di un servizio, un'e-mail richiedente la conferma dell'eliminazione viene inviata all'indirizzo e-mail associato al tuo account client OVHcloud.

Se non hai cliccato sul link di conferma presente in questa e-mail, non preoccuparti, la tua zona DNS non verrà eliminata.

Al contrario, se hai cliccato sul link di conferma, l'eliminazione è iniziata e non può più essere annullata. L'operazione di eliminazione può richiedere fino a 3 giorni prima che tu possa ricreare una zona DNS OVHcloud per il tuo nome di dominio.

///

/// details | Non riesco ad attivare una zona DNS per il mio nome di dominio, cosa devo fare?

Questa situazione si verifica quando esiste già una zona DNS per il tuo nome di dominio su OVHcloud.

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Zone DNS`{.action}, quindi verifica se il nome di dominio desiderato appare.

Cas n. 1 - Il nome di dominio desiderato appare nell'elenco:

Questo significa che la zona DNS del nome di dominio esiste già nel tuo [Spazio Cliente OVHcloud](/links/manager). Potrai gestirla direttamente da questo punto.

Cas n. 2 - Il nome di dominio desiderato non appare nell'elenco:

Questo significa che la zona DNS del nome di dominio è gestita da un altro identificativo client OVHcloud.

Conformemente al **R**egolamento **G**enerale sulla **P**rotezione dei **D**ati (**RGPD**), l'identificativo client su cui si trova la zona DNS rimarrà riservato.

In questa situazione e se non conosci questo altro identificativo client, ti invitiamo a aprire un ticket di assistenza dal [centro di aiuto](https://help.ovhcloud.com/csm?id=csm_get_help) per recuperare la gestione della zona DNS.

///

/// details | Perché non trovo l'etichetta "GLUE" nel mio spazio client OVHcloud?

La funzionalità non è disponibile con tutte le estensioni dei nomi di dominio.
Se l'etichetta non appare nel tuo [Spazio Cliente OVHcloud](/links/manager), significa che l'opzione "GLUE" non è disponibile per il tuo nome di dominio.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Personalizzare i server DNS di un dominio (Glue Records)](/pages/web_cloud/domains/glue_registry)".

///

## Server DNS

> [!primary]
>
> La modifica dei server DNS è un'operazione delicata e può causare interruzioni nei servizi associati al tuo nome di dominio (ospedamento web, e-mail, ecc.). In caso di dubbi, non esitare a contattare un [fornitore specializzato](/links/partner).

/// details | Come modificare i miei server DNS?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
3. Una volta posizionato sul nome di dominio desiderato, seleziona l'etichetta `Server DNS`{.action}.
4. Per modificare i server DNS, clicca sul pulsante `Modifica i server DNS`{.action} situato a destra del tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.

Potrai modificare i server DNS per il tuo nome di dominio sulla pagina che appare.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Come personalizzare i miei server DNS?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
3. Una volta posizionato sul nome di dominio desiderato, seleziona l'etichetta `Server DNS`{.action}.
4. Per modificare i server DNS, clicca sul pulsante `Modifica i server DNS`{.action} situato a destra del tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.

Potrai personalizzare i server DNS per il tuo nome di dominio sulla pagina che appare.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Come sostituire i miei server DNS con quelli di OVHcloud?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
3. Una volta posizionato sul nome di dominio desiderato, seleziona l'etichetta `Server DNS`{.action}.
4. Per modificare i server DNS, clicca sul pulsante `Modifica i server DNS`{.action} situato a destra del tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.

Potrai sostituire i server DNS per il tuo nome di dominio con quelli di OVHcloud sulla pagina che appare.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

> [!success]
>
> Trova tutti i dettagli nel nostro guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Nel mio spazio client, ho un messaggio di errore che mi indica che non sto utilizzando i server DNS di OVHcloud per il mio nome di dominio, cosa devo fare?

Nel tuo [Spazio Cliente OVHcloud](/links/manager), questo messaggio indica semplicemente che la zona DNS creata per il tuo nome di dominio non è la sua zona DNS attiva.

In altre parole, ciò significa che la configurazione presente in questa zona DNS non è quella che è attualmente applicata al tuo nome di dominio.

Tuttavia, verifica che i server DNS menzionati nel messaggio di errore corrispondano effettivamente ai server DNS che desideri applicare al tuo nome di dominio. Verifica quindi la configurazione della zona DNS dichiarata su questi stessi server DNS presso il tuo fornitore DNS.

Se desideri utilizzare i server DNS di OVHcloud per il tuo nome di dominio, potrai preparare la configurazione DNS della zona DNS presente su OVHcloud in modo che corrisponda alle tue esigenze, quindi attivarla per il tuo nome di dominio.

> [!success]
>
> Trova ulteriori dettagli nei seguenti guide:
>
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Non riesco a modificare i server DNS di un nome di dominio dal mio spazio client OVHcloud, cosa devo fare?

Questo significa che disponi solo della gestione della zona DNS del nome di dominio ma non del nome di dominio stesso.

Per verificare, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Domini`{.action}, quindi verifica se il nome di dominio desiderato appare.

Cas n. 1 - Il nome di dominio non appare nell'elenco:

Questo significa che il nome di dominio non è gestito dal tuo [Spazio Cliente OVHcloud](/links/manager). Esegui una richiesta [WHOIS](/links/web/domains-whois) con quest'ultimo per conoscere dove è registrato.

Potrai quindi effettuare una delle seguenti azioni (se sei il titolare dichiarato sul WHOIS del nome di dominio):

- Il nome di dominio è registrato su OVHcloud: Potrai effettuare una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) per far sì che il tuo nome di dominio venga gestito nel tuo [Spazio Cliente OVHcloud](/links/manager).
- Il nome di dominio non è registrato su OVHcloud: Potrai effettuare un'operazione di [trasferimento entrante](/pages/web_cloud/domains/transfer_incoming_generic_domain) verso OVHcloud per far sì che il tuo nome di dominio venga gestito nel tuo [Spazio Cliente OVHcloud](/links/manager).

Cas n. 2 - Il nome di dominio appare nell'elenco:

Questo significa che non disponi dei diritti sufficienti per gestire il nome di dominio dal tuo [Spazio Cliente OVHcloud](/links/manager). Esegui una richiesta [WHOIS](/links/web/domains-whois) per verificare che sei effettivamente dichiarato come titolare del nome di dominio.

Potrai quindi effettuare una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) per far sì che il tuo nome di dominio venga interamente gestito nel tuo [Spazio Cliente OVHcloud](/links/manager).

///

## Per saperne di più <a name="go-further"></a>

[FAQ email OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[FAQ Hosting web](/pages/web_cloud/web_hosting/faq-web_hosting)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).