---
title: "FAQ sui nomi di dominio & DNS"
excerpt: "Ritrova le principali domande sui nomi di dominio, i server DNS e le zone DNS"
updated: 2026-03-27
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

/// details | Come posso sottoscrivere un nome di dominio con OVHcloud?

Segui questi step:

1. Accedi al nostro sito web [OVHcloud](/links/website).
2. Nella pagina visualizzata, inserisci nel campo previsto il nome di dominio che desideri prenotare (ad esempio: `domain.tld`), poi clicca sul pulsante `Cerca`{.action}.
3. Nella nuova pagina visualizzata, la nostra interfaccia ti indicherà se il nome di dominio scelto è disponibile o meno per l'acquisto. Se è già prenotato con la sintassi inserita, modificalo e avvia una nuova ricerca di disponibilità.
4. Una volta trovato un nome di dominio disponibile, clicca sul pulsante `Acquista`{.action}, poi sul pulsante `Prosegui con l'ordine`{.action} nella colonna di destra.
5. Seleziona le eventuali opzioni o servizi aggiuntivi che desideri sottoscrivere insieme al nome di dominio, poi clicca su `Avanti`{.action} fino a quando il processo di ordine ti invita ad autenticarti o a creare un account cliente OVHcloud.
6. Una volta autenticato con il tuo account cliente OVHcloud, potrai personalizzare le informazioni dei contatti (titolare, amministratore, tecnico) per il tuo nome di dominio. Clicca poi sul pulsante `Continua`{.action} per accedere al riepilogo del tuo ordine.
7. Nella pagina `Riepilogo del tuo ordine`, se necessario, potrai modificare la configurazione DNS che sarà applicata al tuo nome di dominio cliccando sul link `Modifica la configurazione`{.action}. Una volta concluse le modifiche, clicca sul pulsante `Paga`{.action} per accedere all'ultimo step del tuo ordine.

Procedi al pagamento del tuo ordine per avviare la prenotazione del tuo nome di dominio e l'installazione dei servizi e delle opzioni sottoscritti.

Qualche istante dopo, riceverai un'e-mail di conferma del tuo ordine.
Potrai in seguito amministrare il tuo nome di dominio effettuando l'accesso al tuo [Spazio Cliente OVHcloud](/links/manager).

Non esitare a creare un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) in caso di necessità.

///

/// details | Come posso acquistare un nome di dominio sul mercato secondario?

L'acquisto di un nome di dominio sul mercato secondario avviene allo stesso modo della sottoscrizione di un nome di dominio.

Segui questi step:

1. Accedi al nostro sito web [OVHcloud](/links/website).
2. Nella pagina visualizzata, inserisci nel campo previsto il nome di dominio che desideri prenotare (ad esempio: `domain.tld`), poi clicca sul pulsante `Cerca`{.action}.
3. Nella nuova pagina visualizzata, la nostra interfaccia ti indicherà se il nome di dominio scelto è disponibile o meno per l'acquisto. Se è già prenotato con la sintassi inserita, modificalo e avvia una nuova ricerca di disponibilità.
4. Una volta trovato un nome di dominio disponibile, clicca sul pulsante `Acquista`{.action}, poi sul pulsante `Prosegui con l'ordine`{.action} nella colonna di destra.
5. Seleziona le eventuali opzioni o servizi aggiuntivi che desideri sottoscrivere insieme al nome di dominio, poi clicca su `Avanti`{.action} fino a quando il processo di ordine ti invita ad autenticarti o a creare un account cliente OVHcloud.
6. Una volta autenticato con il tuo account cliente OVHcloud, potrai personalizzare le informazioni dei contatti (titolare, amministratore, tecnico) per il tuo nome di dominio. Clicca poi sul pulsante `Continua`{.action} per accedere al riepilogo del tuo ordine.
7. Nella pagina `Riepilogo del tuo ordine`, se necessario, potrai modificare la configurazione DNS che sarà applicata al tuo nome di dominio cliccando sul link `Modifica la configurazione`{.action}. Una volta concluse le modifiche, clicca sul pulsante `Paga`{.action} per accedere all'ultimo step del tuo ordine.

Procedi al pagamento del tuo ordine per avviare la prenotazione del tuo nome di dominio e l'installazione dei servizi e delle opzioni sottoscritti.

Qualche istante dopo, riceverai un'e-mail di conferma del tuo ordine.
Potrai in seguito amministrare il tuo nome di dominio effettuando l'accesso al tuo [Spazio Cliente OVHcloud](/links/manager).

Non esitare a creare un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) in caso di necessità.

///

## Gestione di un nome di dominio

/// details | Come sapere se il mio nome di dominio è registrato presso OVHcloud?

Per farlo, puoi effettuare una richiesta [WHOIS](/links/web/domains-whois) per sapere dove è registrato il tuo nome di dominio e per verificare che tu risulti come titolare del nome di dominio.

Ogni Registrar (come OVHcloud) ha la possibilità di scegliere come mostrare le informazioni relative a un nome di dominio nel WHOIS.

Una volta effettuata la richiesta WHOIS, cerca nel risultato almeno una delle seguenti righe:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Se trovi almeno una di queste righe nel risultato, il tuo nome di dominio è registrato presso OVHcloud.

In caso contrario, il tuo nome di dominio è registrato presso un altro Registrar. Cerca le righe relative al `Registrar` per identificare il Registrar presso cui è registrato il tuo nome di dominio.

///

/// details | Come conoscere la data di scadenza di un nome di dominio?

La soluzione più rapida è effettuare una richiesta [WHOIS](/links/web/domains-whois) sul nome di dominio. Una volta effettuata la richiesta, cerca nel risultato la riga corrispondente alla data di scadenza (ad esempio: `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, ecc.).

Se il tuo nome di dominio è registrato presso OVHcloud, clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Le mie offerte e servizi](/links/control-panel/billing-services).
>>
> **Step 2**
>>
>> Nella tabella visualizzata, cerca la riga corrispondente al tuo nome di dominio e individua la data presente nella colonna `Data di effetto`. Questa data corrisponde alla data di scadenza del tuo nome di dominio.

///

/// details | Come cambiare la data annuale di scadenza di un nome di dominio?

La data annuale di scadenza di un nome di dominio (ad esempio: il 24 settembre) è prestabilita in base alla data di registrazione (creazione) del nome di dominio.

Generalmente, la data annuale di scadenza di un nome di dominio coincide con la data in cui hai registrato il nome di dominio.

Di conseguenza, non è possibile cambiare la data annuale di scadenza di un nome di dominio.

///

<br>

/// details | Come posso correggere un errore di battitura nel mio nome di dominio?

Una volta sottoscritto un nome di dominio, esso viene registrato con i caratteri assegnati al momento dell'ordine. La registrazione avviene presso il registro dell'estensione del nome di dominio (ad esempio: il registro dei *.com*) e i costi di prenotazione sono applicati dal Registrar (come OVHcloud).

Un nome di dominio è un indirizzo unico su Internet, ad esempio: `ovhcloud.com`.
Qualsiasi modifica a questo nome, che si tratti di un carattere o di un'estensione (.com, .fr, .net, ecc.), ne fa un nome di dominio completamente diverso.

Di conseguenza, se hai commesso un errore di digitazione al momento dell'ordine, non sarà possibile modificarlo o correggerlo. Dovrai ordinare un nuovo nome di dominio indipendentemente dal precedente (a condizione che la nuova ortografia desiderata non sia già prenotata da qualcun altro).

I nomi di dominio sono considerati prodotti personalizzati, in quanto sono registrati specificamente per un titolare e bloccati per gli altri dal momento dell'ordine. Per questo motivo, una volta registrati, non possono essere rimborsati.

///

/// details | Come modificare un nome di dominio già sottoscritto?

Una volta sottoscritto un nome di dominio, esso viene registrato con i caratteri assegnati al momento dell'ordine. La registrazione avviene presso il registro dell'estensione del nome di dominio (ad esempio: il registro dei *.com*) e i costi di prenotazione sono applicati dal Registrar (come OVHcloud).

Un nome di dominio è un indirizzo unico su Internet, ad esempio: `ovhcloud.com`.
Qualsiasi modifica a questo nome, che si tratti di un carattere o di un'estensione (.com, .fr, .net, ecc.), ne fa un nome di dominio completamente diverso.

Di conseguenza, se hai commesso un errore di digitazione al momento dell'ordine, non sarà possibile modificarlo o correggerlo. Dovrai ordinare un nuovo nome di dominio indipendentemente dal precedente (a condizione che la nuova ortografia desiderata non sia già prenotata da qualcun altro).

I nomi di dominio sono considerati prodotti personalizzati, in quanto sono registrati specificamente per un titolare e bloccati per gli altri dal momento dell'ordine. Per questo motivo, una volta registrati, non possono essere rimborsati.

///

/// details | Come eliminare un nome di dominio?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Le mie offerte e servizi](/links/control-panel/billing-services).
>>
> **Step 2**
>>
>> Nella tabella visualizzata, cerca la riga corrispondente al tuo nome di dominio, clicca sul pulsante `...`{.action} a destra, poi su `Disattiva il mio servizio`{.action}.
>>
> **Step 3**
>>
>> Nella pagina visualizzata, seleziona la modalità di disattivazione (immediatamente o alla data di scadenza del servizio) e clicca in basso sul pulsante `Sì, disattiva`{.action}.
>>
>> Il tuo nome di dominio sarà sospeso alla data di scadenza e, a partire da questa data, sarà eliminato **definitivamente** entro un massimo di 60 giorni. Questo termine è definito dall'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) affinché un nome di dominio sia completamente eliminato e nuovamente disponibile alla registrazione per un altro titolare.

> [!primary]
>
> Una volta richiesta la disattivazione, puoi accelerare l'eliminazione creando un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help). Saranno richiesti documenti giustificativi per accelerare l'eliminazione.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Come disattivare i tuoi servizi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | Ho ricevuto un'e-mail relativa alla validazione delle informazioni del titolare associata al mio nome di dominio, cosa devo fare?

Innanzitutto, se hai dei dubbi sulla legittimità dell'e-mail ricevuta, consulta la nostra guida "[Phishing - Come riconoscere e-mail o SMS fraudolenti?](/pages/account_and_service_management/account_information/phishing_care)".

Conformemente a una direttiva dell'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) del 01/09/2014, i Registrar (ad esempio: OVHcloud) sono tenuti a verificare la validità dei dati di contatto dei titolari di nomi di dominio. OVHcloud invia quindi un'e-mail ai titolari del nome di dominio registrato all'indirizzo e-mail di contatto dichiarato presso OVHcloud.

Riceverai questa e-mail quando effettuerai una delle seguenti operazioni:

- Registrazione di un nuovo nome di dominio.
- Trasferimento di un nome di dominio.
- Modifica dei dati di contatto associati al tuo nome di dominio.

Questa e-mail contiene un link che consente di verificare rapidamente i tuoi dati come titolare legale del nome di dominio.

Attenzione: questa verifica deve essere effettuata entro 15 giorni. Trascorso questo termine, il nome di dominio sarà sospeso tecnicamente. Resterà contrattualmente a tuo nome ma non sarà più accessibile su Internet. Un messaggio di errore verrà visualizzato dai visitatori del tuo sito web.

Puoi ricevere le seguenti e-mail durante i primi 15 giorni:

- **Giorno 0**: Immediatamente dopo aver ordinato il nome di dominio o modificato i suoi dati di contatto, tu (o la persona registrata come titolare del nome di dominio) riceverai la prima e-mail con un link di verifica.
- **Giorni 4, 9 e 13 (e-mail di promemoria)**: Se non hai ancora verificato il nome di dominio, riceverai nuovamente l'e-mail.
- **Giorno 14**: Se non hai ancora verificato il nome di dominio, l'e-mail viene inviata nuovamente. Inoltre, un'e-mail viene inviata all'indirizzo dell'amministratore/titolare del nome di dominio per informarlo che i dati di contatto non sono stati confermati.
- **Giorno 15**: Se il titolare del nome di dominio non ha ancora risposto, inviamo un'e-mail all'amministratore del nome di dominio per informarlo della situazione e della disattivazione del nome di dominio.

Oltre questi 15 giorni, il sistema invia e-mail supplementari (fino a 9 e-mail) prima di eliminare il tuo nome di dominio. L'eliminazione avverrà 60 giorni dopo il giorno 0.

> [!warning]
>
> In funzione dell'estensione del nome di dominio (ad esempio: *.com*, *.net*, ecc.), alcuni dei termini sopra menzionati possono variare. Ti consigliamo vivamente di verificare, presso il registro dell'estensione del tuo nome di dominio, il processo di verifica del controllo dei contatti.

///

/// details | Non ho ricevuto l'e-mail di validazione delle informazioni del titolare associato al mio nome di dominio e questo è stato sospeso, cosa devo fare?

Se non hai ricevuto l'e-mail di validazione del titolare del tuo nome di dominio, verifica i seguenti punti:

1. L'indirizzo e-mail dichiarato per il titolare del nome di dominio è valido e operativo.
2. L'e-mail di validazione non si trova nella posta indesiderata.

Dopo aver verificato e confermato i due punti precedenti, se non riesci ancora a recuperare l'e-mail di validazione del titolare, ti invitiamo ad aprire un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) per richiedere il reinvio di questa e-mail.

///

/// details | Cos'è un nome di dominio in formato IDN?

Inizialmente, i nomi di dominio potevano contenere solo caratteri **ASCII** ben specifici (tra cui le 26 lettere dell'alfabeto latino). Un **I**nternationalized **D**omain **N**ame (**IDN**) consente in particolare di utilizzare caratteri speciali o accentati, e persino altri alfabeti (come il *cirillico*).

Presso OVHcloud, è possibile ordinare IDN e utilizzarli come nomi di dominio a tutti gli effetti con i nostri altri servizi offerti (hosting web, zona DNS, ecc.<sup>1</sup>).

Una volta sottoscritti, gli IDN appaiono nel tuo [Spazio Cliente OVHcloud](/links/manager) nel formato **xn--**.

Anche se il tuo nome di dominio viene visualizzato in [notazione internazionalizzata (IDN)](https://it.wikipedia.org/wiki/Nome_di_dominio_internazionalizzato) nel tuo [Spazio Cliente OVHcloud](/links/manager), funzionerà e verrà visualizzato normalmente altrove. L'indirizzo del tuo sito web sarà visualizzato così come lo hai richiesto. Anche i tuoi indirizzi e-mail verranno visualizzati come desideri dai tuoi corrispondenti.

> [!alert]
>
> <sup>1</sup>: È sconsigliato utilizzare un indirizzo e-mail con un nome di dominio IDN da un client di posta (Outlook, Mail di macOS, ecc.). Alcuni client di posta non interpretano ancora i nomi di dominio con caratteri accentati, il che blocca la trasmissione delle e-mail. Quando un mittente ti invia un'e-mail, riceve un messaggio automatico che indica che il tuo indirizzo e-mail non esiste.
>
> **Si consiglia di prenotare, oltre al nome di dominio con caratteri accentati, lo stesso nome di dominio senza accenti, per evitare qualsiasi incompatibilità negli scambi di e-mail.**

///

/// details | Come correggere un nome di dominio in formato IDN?

Come per i nomi di dominio "classici", una volta sottoscritto un nome di dominio o un IDN, esso viene registrato con i caratteri assegnati al momento dell'ordine.

Di conseguenza, se hai commesso un errore di digitazione al momento dell'ordine, non sarà possibile correggerlo. Dovrai ordinare un nuovo nome di dominio indipendentemente dal precedente (a condizione che la nuova ortografia desiderata non sia già prenotata da qualcun altro).

///

/// details | Come rinnovare un singolo nome di dominio presente in un pack Alldom?

Per farlo, devi essere dichiarato come minimo come [contatto "Fatturazione"](/pages/account_and_service_management/account_information/managing_contacts) del nome di dominio in questione. Dovrai poi modificare la modalità di rinnovo del nome di dominio per passare al **rinnovo automatico**.

Per farlo, clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Le mie offerte e servizi](/links/control-panel/billing-services).
>>
> **Step 2**
>>
>> Nella tabella visualizzata, a destra del nome di dominio in questione, clicca sul pulsante `...`{.action} nella colonna `Azioni`, poi su `Configura il rinnovo`{.action}. Potrai poi configurare il rinnovo di questo nome di dominio in **rinnovo automatico**.

> [!primary]
>
> Se disponi di una vecchia offerta di hosting web che include un nome di dominio gratuito e modifichi questa offerta di hosting, in alcuni casi la gratuità del nome di dominio potrebbe essere annullata.
>
> In caso di dubbio, ti invitiamo ad aprire un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) indicando il nome di dominio e l'hosting web in questione.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Come rinnovare i tuoi servizi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Trasferimento di un nome di dominio

/// details | Il mio nome di dominio è trasferibile dopo un cambio di titolare?

L'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha implementato misure di sicurezza per prevenire i trasferimenti o i cambi di titolare non autorizzati o abusivi dei nomi di dominio.

L'ICANN ha definito un termine incomprimibile di **60** giorni tra ogni operazione possibile su un nome di dominio (creazione, cambio di titolare, trasferimento).

Le regole definite dall'ICANN devono essere obbligatoriamente rispettate dai Registrar (come OVHcloud).

Non avrai quindi altra scelta che attendere la fine del termine di 60 giorni per poter trasferire il tuo nome di dominio dopo averne cambiato il titolare.

///

/// details | Il mio nome di dominio è bloccato contro il trasferimento per 60 giorni, cosa posso fare?

L'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha implementato misure di sicurezza per prevenire i trasferimenti o i cambi di titolare non autorizzati o abusivi dei nomi di dominio.

L'ICANN ha definito un termine incomprimibile di **60** giorni tra ogni operazione possibile su un nome di dominio (creazione, cambio di titolare, trasferimento).

Le regole definite dall'ICANN devono essere obbligatoriamente rispettate dai Registrar (come OVHcloud).

Non avrai quindi altra scelta che attendere la fine del termine di 60 giorni per effettuare una nuova operazione (cambio di titolare o trasferimento) sul tuo nome di dominio.

///

/// details | Non trovo il mio nome di dominio nel mio Spazio Cliente, cosa devo fare?

Innanzitutto, effettua una richiesta [WHOIS](/links/web/domains-whois) per sapere dove è registrato il tuo nome di dominio e per verificare che tu risulti come titolare del nome di dominio.

Caso n°1.A - Il tuo nome di dominio è registrato presso OVHcloud e tu risulti come titolare del nome di dominio:

Effettua una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) affinché il tuo nome di dominio sia interamente gestito nel tuo [Spazio Cliente OVHcloud](/links/manager). In questo modo, non avrai più bisogno di contattare la persona che gestiva in precedenza il tuo nome di dominio.

Caso n°1.B - Il tuo nome di dominio è registrato presso OVHcloud e tu non risulti come titolare del nome di dominio:

Conformemente al **R**egolamento **G**enerale sulla **P**rotezione dei **D**ati (**RGPD**), OVHcloud non potrà fornire informazioni relative alla persona o all'organizzazione che gestisce il nome di dominio presso OVHcloud.

Tuttavia, puoi provare a contattare la persona o l'organizzazione che lo gestisce seguendo le istruzioni di [questo modulo](/links/web/contact-domain-owner).

Caso n°2 - Il tuo nome di dominio non è registrato presso OVHcloud:

Contatta direttamente il Registrar (indicato nelle righe che iniziano con il termine `Registrar`) del tuo nome di dominio per proseguire le tue ricerche. Se il nome di dominio non è registrato presso OVHcloud, non saremo in grado di assisterti in merito.

///

/// details | Non riesco a contattare la persona che gestisce il mio nome di dominio, cosa devo fare?

Innanzitutto, effettua una richiesta [WHOIS](/links/web/domains-whois) per verificare che tu risulti come titolare del nome di dominio.

Caso n°1 - Tu risulti come titolare del nome di dominio:

Effettua una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) affinché il tuo nome di dominio sia interamente gestito nel tuo [Spazio Cliente OVHcloud](/links/manager). In questo modo, non avrai più bisogno di contattare la persona che gestiva in precedenza il tuo nome di dominio.

Caso n°2 - Tu non risulti come titolare del nome di dominio:

Conformemente al **R**egolamento **G**enerale sulla **P**rotezione dei **D**ati (**RGPD**), OVHcloud non potrà fornire informazioni relative alla persona o all'organizzazione che gestisce il nome di dominio presso OVHcloud.

Tuttavia, puoi provare a contattare la persona o l'organizzazione che lo gestisce seguendo le istruzioni di [questo modulo](/links/web/contact-domain-owner).

///

/// details | Posso vendere il mio nome di dominio?

Attualmente, OVHcloud non gestisce direttamente il processo di vendita dei nomi di dominio già registrati. Non offriamo questo tipo di servizio.

Tuttavia, se desideri mettere in vendita il tuo nome di dominio su un mercato secondario, contatta uno dei nostri partner seguenti:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Se desideri vendere il tuo nome di dominio, puoi aggiungerlo a queste piattaforme. Una volta aggiunto, i fornitori autorizzati proporranno il tuo nome di dominio al prezzo che avrai definito su una delle piattaforme qui sopra.

///

## Zona DNS

> [!primary]
>
> La modifica di una zona DNS è un'operazione delicata e può causare un'interruzione dei servizi associati al tuo nome di dominio (hosting web, e-mail, ecc.). In caso di dubbio, non esitare a contattare un [fornitore specializzato](/links/partner).

/// details | Cos'è una zona DNS?

La zona DNS di un nome di dominio contiene una configurazione applicabile a quest'ultimo. Si compone di informazioni tecniche, chiamate *record DNS*. La zona DNS funziona come un centro di smistamento, dirigendo il traffico verso i servizi corretti associati al dominio.

Puoi ad esempio specificare:

- L'indirizzo IP (record DNS di tipo *A* e *AAAA*) del tuo hosting web per visualizzare il tuo sito web con il tuo nome di dominio.
- I server e-mail (record DNS di tipo *MX*) verso cui il tuo nome di dominio deve reindirizzare le e-mail ricevute.
- Informazioni legate alla sicurezza / autenticazione dei tuoi servizi (hosting web, server web, server e-mail, ecc.) associati al tuo nome di dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc.).

Una zona DNS è ospitata / registrata su **server DNS**. Questi **server DNS** devono essere dichiarati presso il Registrar del nome di dominio per utilizzare la zona DNS che ospitano.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | Cos'è un record DNS?

I record DNS sono utilizzati, ad esempio, per:

- Associare un nome di dominio a un indirizzo IP, consentendo agli utenti di accedere a un sito web o a un server remoto.
- Associare un nome di dominio ad altre risorse online utilizzando un nome di dominio (più facile da ricordare) invece di un indirizzo IP.
- Validare configurazioni di associazione o sicurezza, in particolare per i servizi e-mail e gli hosting condivisi.

Esistono numerosi record DNS. Ognuno ha uno scopo specifico nella risoluzione DNS. In OVHcloud, sono suddivisi in tre categorie:

- **Campi di puntamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
- **Campi estesi**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` e `HTTPS`.
- **Campi mail**: `MX`, `SPF`, `DKIM` e `DMARC`.

> [!success]
>
> Consulta maggiori dettagli nelle seguenti guide:
>
> - Informazioni generali:
>     - [Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
> - Record DNS di puntamento:
>     - [Aggiungere un record DNS di tipo A per un nome di dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Aggiungere un record DNS di tipo AAAA per un nome di dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Aggiungere un record DNS di tipo CNAME per un nome di dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Record DNS estesi:
>     - [Aggiungere un record DNS di tipo TXT per un nome di dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Record DNS e-mail:
>     - [Configurare un record MX per la gestione delle e-mail](/pages/web_cloud/domains/dns_zone_mx)
>     - [Migliorare la sicurezza delle e-mail con un record SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Migliorare la sicurezza delle e-mail con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Migliorare la sicurezza delle e-mail con un record DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Quali sono i record DNS disponibili in una zona DNS OVHcloud?

Clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}.
>>
>> Visualizzerai tutti i record DNS che potrai aggiungere tramite la procedura guidata di configurazione OVHcloud:
>>
>> - **Campi di puntamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
>> - **Campi estesi**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` e `HTTPS`.
>> - **Campi mail**: `MX`, `SPF`, `DKIM` e `DMARC`.
>>
>> > [!primary]
>> >
>> > Se desideri aggiungere un record DNS non presente nella lista, chiudi la finestra che si è aperta dopo aver cliccato sul pulsante `Aggiungi un record`{.action} e clicca sul pulsante `Modifica in modalità testo`{.action} situato a destra o sotto la tabella.
>> >
>> > Potrai così aggiungere manualmente il record DNS di tua scelta.

> [!success]
>
> Consulta maggiori dettagli nelle seguenti guide:
>
> - Informazioni generali:
>     - [Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
> - Record DNS di puntamento:
>     - [Aggiungere un record DNS di tipo A per un nome di dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Aggiungere un record DNS di tipo AAAA per un nome di dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Aggiungere un record DNS di tipo CNAME per un nome di dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Record DNS estesi:
>     - [Aggiungere un record DNS di tipo TXT per un nome di dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Record DNS e-mail:
>     - [Configurare un record MX per la gestione delle e-mail](/pages/web_cloud/domains/dns_zone_mx)
>     - [Migliorare la sicurezza delle e-mail con un record SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Migliorare la sicurezza delle e-mail con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Migliorare la sicurezza delle e-mail con un record DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Posso cambiare i server DNS dichiarati nella mia zona DNS su OVHcloud?

La modifica manuale dei record DNS di tipo NS di un nome di dominio in una zona DNS OVHcloud non è raccomandata perché impedirebbe la risoluzione DNS della zona DNS corrispondente.

Se desideri modificare la configurazione dei record DNS di tipo NS del tuo nome di dominio, probabilmente è perché desideri cambiare i server DNS dichiarati per quest'ultimo.

> [!primary]
>
> Per cambiare i server DNS del tuo nome di dominio su OVHcloud, una zona DNS deve già esistere sui nuovi server DNS desiderati.
> Inoltre, dovrai verificare in questa stessa zona DNS che i record DNS di tipo NS corrispondano ai server DNS corrispondenti.

Per farlo, clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul nome di dominio in questione.
>>
> **Step 3**
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} situato a destra della tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
>> Potrai modificare i server DNS per il tuo nome di dominio nella pagina visualizzata.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

In caso di errore, ti invitiamo ad aprire un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) indicando le seguenti informazioni:

- I nomi dei server DNS che desideri configurare.
- Il messaggio di errore riscontrato.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Qual è la differenza tra un record DNS di tipo A (IPv4) e AAAA (IPv6)?

La rete Internet funziona dall'inizio degli anni 1990 seguendo la norma IPv4. Questa norma consente di fornire un indirizzo IP X.X.X.X (dove ogni "X" è un numero compreso tra 0 e 255) a ciascuna delle macchine connesse alla rete Internet (server, computer, smartphone, tablet, ecc.). Tuttavia, questa norma limita a circa 4 miliardi il numero di dispositivi connessi alla rete Internet.

In seguito, è stato introdotto il protocollo IPv6 per consentire la connessione alla rete Internet di fino a 340 sestilioni di dispositivi.

Dato che gli indirizzi IPv4 sono sempre meno disponibili, è più difficile aggiungere nuove macchine alla rete Internet con la norma IPv4. Tuttavia, le connessioni con un indirizzo IPv6 sono utili solo se, ad esempio, il tuo sito web è disponibile anche con questo stesso protocollo.

I record DNS di tipo A e AAAA sono due tipi di record di risorse utilizzati per associare un nome di dominio a un indirizzo IP.

Le loro principali differenze risiedono nel tipo di indirizzo IP che utilizzano:

- **Record A** (chiamato anche "record host"): Associa un nome di dominio a un indirizzo IPv4 (ad esempio, 213.0.113.0). Gli indirizzi IPv4 sono indirizzi a 32 bit, generalmente scritti in notazione decimale puntata.
- **Record AAAA** (chiamato anche "quadruplo record A"): Associa un nome di dominio a un indirizzo IPv6 (ad esempio, 2001:db8:1:1b00:213:0:113:0). Gli indirizzi IPv6 sono indirizzi a 128 bit, generalmente scritti in notazione esadecimale.

In altre parole, i record A sono utilizzati per gli indirizzi IPv4, mentre i record AAAA sono utilizzati per gli indirizzi IPv6. Entrambi i tipi di record sono utilizzati per dirigere il traffico verso un indirizzo IP specifico, ma sono utilizzati per versioni diverse del protocollo Internet.

Da notare che un nome di dominio può avere sia record A che AAAA, il che gli consente di essere accessibile sulle reti IPv4 e IPv6. Questo è chiamato "dual stack", una pratica comune per i siti web e i servizi che desiderano essere accessibili agli utenti sia sulle reti IPv4 che IPv6.

> [!success]
>
> Consulta maggiori dettagli nelle seguenti guide:
>
> - [Aggiungere un record DNS di tipo A per un nome di dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Aggiungere un record DNS di tipo AAAA per un nome di dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configura un indirizzo IPv6 per il tuo sito web](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Come configurare un record PTR per il mio indirizzo IP esterno a OVHcloud?

In OVHcloud, le configurazioni **P**oin**T**er **R**ecord (**PTR**) non possono essere gestite direttamente all'interno delle nostre zone DNS.

Per configurare un record reverse/PTR per un indirizzo IP esterno, contatta il tuo **F**ornitore di **A**ccesso a **I**nternet (**ISP**), poiché è responsabile della gestione dei record DNS inversi degli indirizzi IP che assegna.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | Come cambiare il TTL predefinito nella mia zona DNS OVHcloud?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Modifica il TTL predefinito`{.action}.
>>
> **Step 3**
>>
>> Nella finestra che si apre, regola il valore sotto la menzione `TTL predefinito` in base alle tue esigenze, poi clicca su `Modifica`{.action}.

> [!primary]
>
> La propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

///

/// details | Cos'è un record DNS di tipo SOA?

Il record DNS di tipo **S**tart **O**f **A**uthority (**SOA**) fornisce un insieme di elementi relativi alla configurazione DNS di un nome di dominio.

Di seguito il risultato di una richiesta SOA per il nome di dominio `domain.tld`.

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

|Elemento nel risultato|Descrizione|Corrispondenza nell'esempio sopra|
|---|---|---|
|**NS (Name Server)**|Server DNS principale dichiarato per il nome di dominio `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Indirizzo e-mail del responsabile della zona DNS.|`tech.ovh.net` (il punto tra i termini `tech` e `ovh` deve essere sostituito da una `@`).|
|**Serial number**|Numero di serie unico che si incrementa a ogni modifica della zona DNS.<br>È generalmente composto dalla data di aggiornamento in formato `YYYYMMDD` seguita dal numero di aggiornamenti effettuati nella giornata.|`2025091801`: Qui sono stati effettuati 2 aggiornamenti (`00` per 1, `01` per 2, ecc.) il 18/09/2025.|
|**Refresh time**|Intervallo (in secondi) tra ogni aggiornamento dei server DNS secondari (che compongono la rete DNS) con il server DNS principale.|`86400` (24 ore).|
|**Retry time**|Intervallo (in secondi) tra ogni tentativo di riaggiornamento dei parametri dei server DNS secondari (che compongono la rete DNS) con il server DNS principale se quest'ultimo non risponde o è indisponibile.|`3600` (1 ora).|
|**Expire time**|Termine (in secondi) dopo il quale i server DNS secondari (che compongono la rete DNS) cessano di rispondere alle richieste DNS se il server DNS principale non si aggiorna più con essi.|`3600000` (1000 ore, 41,67 giorni).|
|**Minimum TTL**|Durata di vita minima (in secondi) durante la quale i record DNS della zona DNS vengono memorizzati in cache sui server DNS secondari (che compongono la rete DNS).|`300` (5 minuti).|

///

<br>

/// details | Come verificare la configurazione della mia zona DNS?

Ecco diverse soluzioni per verificare la configurazione di una zona DNS:

- **Uno strumento di verifica online**: Diversi strumenti online consentono di verificare la configurazione della tua zona DNS. Trovali direttamente tramite un browser Internet (Chrome, Edge, Firefox, Safari, ecc.) inserendo le parole chiave adeguate (ad esempio: "verifica propagazione DNS") in un motore di ricerca.

- **Il comando "dig"**: Se hai accesso a un *terminale* da un sistema operativo Linux o macOS, puoi utilizzare il comando `dig` per verificare la configurazione della tua zona DNS sulla rete DNS.

- **Il comando "nslookup"**: Il comando `nslookup` è disponibile sulla maggior parte dei sistemi operativi e consente anche di verificare la configurazione della tua zona DNS.

- **Dal tuo Spazio Cliente OVHcloud**: Se la zona DNS attiva del tuo nome di dominio è gestita su OVHcloud, accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone) per visualizzare tutti i record DNS dichiarati per il tuo nome di dominio.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Come verificare la propagazione delle modifiche effettuate nella mia zona DNS?

> [!primary]
>
> Prima di proseguire, tieni presente che:
>
> - La propagazione di una modifica effettuata in una zona DNS può richiedere fino a **24** ore.
> - La propagazione di una modifica dei server DNS per un nome di dominio può richiedere fino a **48** ore.

Puoi tuttavia verificare che la propagazione DNS si stia effettuando correttamente con l'aiuto del record DNS di tipo **S**tart **O**f **A**uthority (**SOA**).

Per prima cosa, apri un terminale compatibile sul tuo computer, poi esegui la seguente riga di comando (sostituisci `domain.tld` con il tuo nome di dominio):

```bash
dig domain.tld soa
```

> [!primary]
>
> I sistemi operativi Linux e macOS dispongono nativamente di un terminale compatibile per eseguire questo tipo di comando. Se utilizzi un altro sistema operativo, come Windows, dovrai installare preventivamente un terminale compatibile per eseguire il comando.
>
> Inoltre, esistono strumenti disponibili su Internet per verificare la propagazione DNS.

Una volta eseguito il comando, otterrai un risultato simile a questo:

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

In questo risultato, recupera il **numero di serie** (nel nostro esempio: `2025091801`).

Ha la seguente forma `YYYYMMDDRR` dove:

- `YYYYMMDD`: Rappresenta la data (anno, mese e giorno) dell'ultimo aggiornamento DNS propagato per il nome di dominio.
- `RR`: Rappresenta il numero di aggiornamenti effettuati alla data indicata. Ad esempio, se è stato effettuato un solo aggiornamento in una giornata, avrà il valore `00`. Se sono stati effettuati 2 aggiornamenti nello stesso giorno, avrà il valore `01` e così via.

Una volta recuperato il numero di serie, clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Modifica in modalità testo`{.action}.
>>
> **Step 3**
>>
>> Nella finestra che si apre, individua la seconda riga che, riprendendo il nostro esempio, sarebbe equivalente a questa: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
>>
> **Step 4**
>>
>> Confronta il numero di serie recuperato tramite il terminale con quello visualizzato nel tuo Spazio Cliente OVHcloud.
>>
>> **Caso n°1** - I due numeri di serie corrispondono:
>>
>> Ciò significa che la propagazione DNS si sta effettuando correttamente. Non devi fare altro.
>>
>> **Caso n°2** - I due numeri di serie sono diversi:
>>
>> Ciò significa che:
>>
>> - La propagazione DNS delle tue modifiche non è ancora completamente terminata (sei ancora nei tempi standard di propagazione DNS). In questo caso, attendi che la propagazione DNS sia completamente terminata (**24** ore per una modifica di zona DNS e **48** ore per una modifica dei server DNS), poi ripeti l'operazione.
>> - La propagazione DNS non si sta effettuando correttamente. In questo caso, dalla finestra `Modifica in modalità testo`{.action} che si è aperta allo step **3**, clicca direttamente **senza effettuare modifiche** sul pulsante `Avanti`{.action}, poi su `Conferma`{.action}. Verrà avviata una nuova propagazione DNS.

///

/// details | Come ripristinare una zona DNS?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Visualizza lo storico della mia zona DNS`{.action}.
>>
> **Step 3**
>>
>> Nella tabella della pagina visualizzata, identifica la riga corrispondente al backup della zona DNS desiderato, poi clicca sull'icona presente nella colonna `Ripristina`{.action}. La configurazione attuale della zona DNS sarà sostituita dal backup scelto.

> [!primary]
>
> La propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Gestire lo storico di una zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Come ottenere una copia della mia zona DNS?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Visualizza lo storico della mia zona DNS`{.action}.
>>
> **Step 3**
>>
>> Nella tabella della pagina visualizzata, identifica la riga corrispondente al backup della zona DNS desiderato, poi clicca sull'icona presente nella colonna `Scarica`{.action}. La copia della zona DNS sarà scaricata in formato *.txt*.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Gestire lo storico di una zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Posso creare una zona DNS per un sottodominio?

Puoi creare una zona DNS per un sottodominio.

Per farlo, clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi clicca sul pulsante `Ordina`{.action} in alto a destra della tabella visualizzata.
>>
> **Step 2**
>>
>> Nella pagina visualizzata, inserisci il sottodominio (ad esempio: *www.domain.tld*) per il quale desideri creare una zona DNS OVHcloud. Attendi qualche istante mentre lo strumento effettua le verifiche relative al sottodominio.
>>
> **Step 3**
>>
>> Quando la verifica è completata, scegli se attivare o meno i record minimi per la zona DNS che stai per creare. Questa scelta non è definitiva, poiché potrai sempre [modificare i record della zona DNS](/pages/web_cloud/domains/dns_zone_edit) in seguito.
>>
> **Step 4**
>>
>> Una volta effettuata la tua scelta, prosegui con gli step fino alla creazione della zona DNS.

Questa zona DNS sarà installata su 2 server DNS OVHcloud. Dovrai dichiarare i nomi di questi due server nella zona DNS attiva del nome di dominio del tuo sottodominio (ad esempio, *www.domain.tld* è un sottodominio del nome di dominio *domain.tld*).

Per recuperare i nomi dei 2 server DNS, clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il sottodominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> In alto a sinistra della pagina visualizzata, recupera i 2 nomi dei server DNS presenti sotto la menzione `Name Servers`. Questi ultimi hanno una delle 2 forme seguenti:
>>
>> - `dnsXXX.ovh.net` e `nsXXX.ovh.net` **o** `dnsXXX.ovh.ca` e `nsXXX.ovh.ca` (dove ogni `X` rappresenta una cifra compresa tra `0` e `9`).
>> - `dns200.ovh.me` e `ns200.anycast.me`.

Una volta ottenuti i 2 server DNS, dichiarali tramite due record di tipo NS nella zona DNS attiva del nome di dominio da cui proviene il tuo sottodominio.

Caso n°1 - La zona DNS attiva del nome di dominio da cui proviene il tuo sottodominio è su OVHcloud:

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}, poi seleziona il tipo di record DNS `NS`{.action} per dichiarare un server DNS.
>>
> **Step 3**
>>
>> Nella finestra che si apre, inserisci il sottodominio in questione nel campo `Sottodominio *`{.action} (ad esempio, scrivi **unicamente** *www* se il tuo nome di dominio è *domain.tld* e il tuo sottodominio completo è *www.domain.tld*). Nel campo `Destinazione *`{.action}, inserisci **uno solo** dei 2 server DNS.
>>
> **Step 4**
>>
>> Clicca su `Avanti`{.action}, poi su `Conferma`{.action}.
>>
>> Ripeti l'operazione per il secondo server DNS restante da dichiarare.

Caso n°2 - La zona DNS attiva del nome di dominio da cui proviene il tuo sottodominio non è su OVHcloud:

Dovrai dichiarare i 2 server DNS per il tuo sottodominio direttamente presso il fornitore DNS del tuo nome di dominio (da cui proviene il tuo sottodominio).

> [!primary]
>
> In entrambi i casi, la propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Consulta maggiori dettagli nelle seguenti guide:
>
> - [Creare una zona DNS OVHcloud per un nome di dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Come reindirizzare tutti i sottodomini di uno stesso nome di dominio verso lo stesso indirizzo IP?

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}, poi seleziona il tipo di record DNS `A`{.action} per un IPv4 (ad esempio: `203.0.113.0`) o `AAAA`{.action} per un IPv6 (ad esempio: `2001:db8:1:1b00:203:0:113:0`).
>>
> **Step 3**
>>
>> Nella finestra che si apre, nel campo di inserimento `Sottodominio *`{.action}, inserisci il valore `*`. L'asterisco `*` rappresenterà l'insieme dei sottodomini (ad esempio: `www.domain.tld` o `ovhcloud.domain.tld`) del tuo nome di dominio. Completa il campo `Destinazione *`{.action} con l'indirizzo IP desiderato.
>>
> **Step 4**
>>
>> Clicca su `Avanti`{.action}, poi su `Conferma`{.action}.

> [!primary]
>
> La propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Posso configurare un wildcard nella mia zona DNS?

È possibile configurare un wildcard in una zona DNS OVHcloud.

Per farlo, clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}, poi seleziona il tipo di record DNS per il quale desideri configurare un wildcard.
>>
> **Step 3**
>>
>> Nella finestra che si apre, nel campo di inserimento `Sottodominio *`{.action}, inserisci il valore `*`. L'asterisco `*` rappresenterà l'insieme dei sottodomini (ad esempio: `www.domain.tld` o `ovhcloud.domain.tld`) del tuo nome di dominio. Completa gli altri campi con i valori desiderati.
>>
> **Step 4**
>>
>> Clicca su `Avanti`{.action}, poi su `Conferma`{.action}.

> [!primary]
>
> La propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | Ho eliminato accidentalmente la mia zona DNS e desidero ripristinarla, cosa devo fare?

OVHcloud invia un'e-mail contenente una copia della zona DNS in formato testo una volta eliminata la tua zona DNS, affinché tu possa ripristinarla in seguito se necessario.
Questa e-mail viene inviata all'indirizzo e-mail associato al tuo account cliente OVHcloud.

> [!success]
>
> Se non hai ricevuto questa e-mail, controlla la posta indesiderata oppure accedi alla pagina [Il mio account](/links/control-panel/account-dashboard), poi clicca sulla scheda `E-mail ricevute`{.action}.

Per ripristinare la tua zona DNS, scarica il file contenente la zona DNS dall'e-mail ricevuta.

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Zona DNS`{.action} una volta posizionato sul nome di dominio in questione. **Se la zona DNS è inattiva, attivala da questa scheda.**
>>
> **Step 3**
>>
>> A destra o sotto la tabella, clicca su `Modifica in modalità testo`{.action}.
>>
> **Step 4**
>>
>> Nella finestra che si apre, sostituisci tutto il contenuto visualizzato con la copia della zona DNS eliminata. Poi clicca su `Avanti`{.action}, quindi su `Conferma`{.action}.

> [!primary]
>
> La propagazione della modifica di una zona DNS può richiedere fino a **24** ore.

> [!success]
>
> Consulta maggiori dettagli nelle seguenti guide:
>
> - [Creare una zona DNS OVHcloud per un nome di dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gestire lo storico di una zona DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Come annullare una richiesta di eliminazione della mia zona DNS?

Per ogni richiesta di eliminazione di un servizio, viene inviata un'e-mail di conferma di eliminazione all'indirizzo e-mail associato al tuo account cliente OVHcloud.

Se non hai cliccato sul link di conferma presente in questa e-mail, non preoccuparti, la tua zona DNS non sarà eliminata.

In caso contrario, l'eliminazione è stata avviata e non può più essere annullata. L'operazione di eliminazione può richiedere fino a 3 giorni prima che tu possa ricreare una zona DNS OVHcloud per il tuo nome di dominio.

///

/// details | Non riesco ad attivare una zona DNS per il mio nome di dominio, cosa devo fare?

Questa situazione si verifica quando esiste già una zona DNS per il tuo nome di dominio su OVHcloud.

Clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone) e verifica se il nome di dominio in questione appare.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> **Caso n°1** - Il nome di dominio in questione appare nella lista:
>>
>> Ciò significa che la zona DNS del nome di dominio esiste già nel tuo Spazio Cliente OVHcloud. Potrai gestirla direttamente in questa sezione.
>>
>> **Caso n°2** - Il nome di dominio in questione non appare nella lista:
>>
>> Ciò significa che la zona DNS del nome di dominio è gestita da un altro identificativo cliente OVHcloud diverso dal tuo.
>>
>> Conformemente al **R**egolamento **G**enerale sulla **P**rotezione dei **D**ati (**RGPD**), l'identificativo cliente sul quale si trova la zona DNS resterà confidenziale.
>>
>> In questa situazione, se non conosci questo altro identificativo cliente, ti invitiamo ad aprire un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) per recuperare la gestione della zona DNS.

///

/// details | Perché non trovo la scheda "GLUE" nel mio Spazio Cliente OVHcloud?

La funzionalità non è disponibile con tutte le estensioni di nomi di dominio.
Se la scheda non appare nel tuo [Spazio Cliente OVHcloud](/links/manager), l'opzione "GLUE" non è disponibile per il tuo nome di dominio.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Personalizzare i server DNS di un nome di dominio (Glue records)](/pages/web_cloud/domains/glue_registry)".

///

## Server DNS

> [!primary]
>
> La modifica dei server DNS è un'operazione delicata e può causare un'interruzione dei servizi associati al tuo nome di dominio (hosting web, e-mail, ecc.). In caso di dubbio, non esitare a contattare un [fornitore specializzato](/links/partner).

/// details | Come modificare i miei server DNS?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul nome di dominio in questione.
>>
> **Step 3**
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} situato a destra della tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
>> Potrai modificare i server DNS per il tuo nome di dominio nella pagina visualizzata.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Come personalizzare i miei server DNS?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul nome di dominio in questione.
>>
> **Step 3**
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} situato a destra della tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
>> Potrai personalizzare i server DNS per il tuo nome di dominio nella pagina visualizzata.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Come sostituire i miei server DNS con quelli di OVHcloud?

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul nome di dominio in questione.
>>
> **Step 3**
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} situato a destra della tabella "server DNS". A seconda della risoluzione del tuo schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
>> Potrai sostituire i server DNS per il tuo nome di dominio con quelli di OVHcloud nella pagina visualizzata.

> [!primary]
>
> La propagazione della modifica dei server DNS dichiarati per un nome di dominio può richiedere fino a **48** ore.

> [!success]
>
> Consulta tutti i dettagli nella nostra guida "[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Nel mio Spazio Cliente appare un messaggio di errore che indica che non sto utilizzando i server DNS di OVHcloud per il mio nome di dominio, cosa devo fare?

Nel tuo [Spazio Cliente OVHcloud](/links/manager), questo messaggio indica unicamente che la zona DNS creata per il tuo nome di dominio non è la sua zona DNS attiva.

In altre parole, ciò significa che la configurazione presente in questa zona DNS non è quella attualmente applicata al tuo nome di dominio.

Tuttavia, verifica che i server DNS menzionati nel messaggio di errore corrispondano ai server DNS che desideri applicare al tuo nome di dominio. Verifica poi la configurazione della zona DNS dichiarata su questi stessi server DNS presso il tuo fornitore DNS.

Se desideri utilizzare i server DNS di OVHcloud per il tuo nome di dominio, potrai preparare la configurazione DNS della zona DNS presente su OVHcloud affinché corrisponda alle tue esigenze, poi attivarla per il tuo nome di dominio.

> [!success]
>
> Consulta maggiori dettagli nelle seguenti guide:
>
> - [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Non riesco a modificare i server DNS di un nome di dominio dal mio Spazio Cliente OVHcloud, cosa devo fare?

Ciò significa che disponi solo della gestione della zona DNS del nome di dominio ma non del nome di dominio stesso.

Per verificarlo, clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains) e verifica se il nome di dominio in questione appare.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> **Caso n°1** - Il nome di dominio non appare nella lista:
>>
>> Ciò significa che il nome di dominio non è gestito dal tuo Spazio Cliente OVHcloud. Effettua una richiesta [WHOIS](/links/web/domains-whois) per sapere dove è registrato.
>>
>> Potrai poi effettuare una delle seguenti operazioni (se sei il titolare dichiarato nel WHOIS del nome di dominio):
>>
>> - Il nome di dominio è registrato presso OVHcloud: Potrai effettuare una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) affinché il tuo nome di dominio sia gestito nel tuo Spazio Cliente OVHcloud.
>> - Il nome di dominio non è registrato presso OVHcloud: Potrai effettuare un'operazione di [trasferimento in entrata](/pages/web_cloud/domains/transfer_incoming_generic_domain) verso OVHcloud affinché il tuo nome di dominio sia gestito nel tuo Spazio Cliente OVHcloud.
>>
>> **Caso n°2** - Il nome di dominio appare nella lista:
>>
>> Ciò significa che non disponi dei diritti sufficienti per gestire il nome di dominio dal tuo Spazio Cliente OVHcloud. Effettua una richiesta [WHOIS](/links/web/domains-whois) per verificare che tu risulti come titolare del nome di dominio.
>>
>> Potrai poi effettuare una [procedura di recupero dei contatti](/links/transversal/procedure-contact-change) affinché il tuo nome di dominio sia interamente gestito nel tuo Spazio Cliente OVHcloud.

///

## Per saperne di più <a name="go-further"></a>

[FAQ e-mail OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Hosting Web - FAQ](/pages/web_cloud/web_hosting/faq-web_hosting)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
