---
title: "Rendere sicuro il tuo dominio con DNSSEC"
excerpt: "Questa guida ti mostra come proteggere il tuo dominio dal Cache Poisoning attivando DNSSEC"
updated: 2023-07-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo 

Un server DNS ospita una o più zone DNS. Una zona DNS contiene la configurazione DNS di un dominio. È questa configurazione che collega il dominio ai diversi servizi associati (server di hosting per il sito Web, server per gli indirizzi email personalizzati con il dominio, ecc...).

In alcuni casi, i flussi di dati che passano attraverso i server DNS possono essere dirottati da persone malintenzionate.
In sintesi, per fare ciò, queste persone avvelenano la cache dei server DNS con la configurazione DNS che vogliono applicare al tuo dominio: è quello che chiamano "Cache poisoning".
In questo modo, possono reindirizzare i flussi in entrata dal tuo dominio verso i loro siti Web e verso i loro indirizzi email.

Il **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**), permette di proteggere la configurazione DNS del tuo nome di dominio dal "Cache poisoning" verificando e autenticando le risposte DNS.

**Questa guida ti mostra come attivare il protocollo DNSSEC per proteggere il tuo dominio dal "Cache poisoning".**

Per maggiori informazioni sul funzionamento del **DNSSEC**, consulta la nostra pagina "[Comprendere il DNSSEC](https://www.ovhcloud.com/it/domains/dnssec/){.external}".

Per maggiori informazioni su questi argomenti, consulta le nostre guide disponibili su [server DNS OVHcloud](/pages/web/domains/dns_server_general_information) e sull’[edizione di una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit).

## Prerequisiti

- Disporre di un dominio registrato in OVHcloud.
- l’estensione del dominio deve essere compatibile con DNSSEC.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}.

## Procedura

L'attivazione del **DNSSEC** è possibile in due casi:

- **Il dominio utilizza i server DNS di OVHcloud**: l’attivazione avviene in un click dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} (se non è già attiva di default).

- **Il dominio non utilizza i server DNS di OVHcloud**: contatta il provider che gestisce la configurazione DNS del dominio per richiedere i parametri. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio dalla lista.</br>
Seleziona la scheda `Record DS`{.action}, clicca sul pulsante `Modifica`{.action} a destra e poi sul pulsante `+`{.action} che appare.</br>
A questo punto puoi inserire i 4 campi "Key Tag", "Flag", "Algoritmo", "Chiave pubblica (codificata in base64)" con i dati comunicati dal tuo attuale provider.

> [!primary]
>
> Per verificare se il dominio utilizza la configurazione DNS di OVHcloud, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio dalla lista. Seleziona la scheda `Server DNS`{.action} una volta posizionato sul dominio interessato.
>
> Se i nomi dei server DNS terminano con *ovh.net*, *ovh.ca* o *anycast.me*, il dominio utilizza effettivamente i server DNS di OVHcloud.
>

### Step 1: accedi alla gestione del dominio <a name="step1"></a>

Per attivare la soluzione **DNSSEC** per il tuo dominio, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio dalla lista.

Visualizzi una tabella con tutte le informazioni generali del dominio. 

### Step 2: gestisci il DNSSEC del tuo dominio

Sempre nella scheda `Informazioni generali`{.action}, in seguito allo [step 1](#step1) è possibile verificare lo stato di attivazione del **DNSSEC** sul dominio.

Per farlo, nella sezione "Sicurezza", controlla lo stato accanto alla voce "Delegazione Sicura (DNSSEC)".

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

Il pulsante di attivazione situato sopra la voce `Delegazione Sicura (DNSSEC)`{.action} permette di attivare o disattivare il **DNSSEC** sul dominio. Eseguendo questa operazione, si apre una nuova finestra da cui è possibile confermare la modifica.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> L'attivazione/disattivazione del **DNSSEC** richiede **24** ore per essere effettiva.
>
> Inoltre, se in seguito desideri modificare i server DNS associati al tuo dominio, la modifica dei server DNS non sarà effettiva sul lato OVHcloud fino a quando non disattiverai il **DNSSEC**. In seguito, la propagazione DNS della modifica potrebbe richiedere da **24** a **48** ore.
>
> In totale, la modifica dei server DNS di un dominio con la soluzione **DNSSEC** attiva sarà pienamente effettiva dopo **48** alle **72** ore.
>

## Per saperne di più

[Generalità sui server DNS OVHcloud](/pages/web/domains/dns_server_general_information)

[Modificare una zona DNS in OVHcloud](/pages/web/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.