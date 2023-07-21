---
title: Creare una zona DNS OVHcloud per un dominio
excerpt: Questa guida ti mostra come creare una zona DNS per il tuo dominio dallo Spazio Cliente OVHcloud
updated: 2023-07-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. È composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, come un centro di deviazioni.

Puoi, ad esempio, precisare:

- L'indirizzo IP (record DNS di tipo *A* e *AAAA*) del tuo hosting web per visualizzare il tuo sito web con il tuo dominio.
- I server di posta (record DNS di tipo *MX*) verso cui il tuo dominio deve reindirizzare le email che riceve. Per consultare i tuoi indirizzi email personalizzati con il tuo dominio.
- Informazioni relative alla sicurezza/autenticazione dei tuoi servizi (hosting Web, server Web, server di posta, ecc...) associati al tuo dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc...).

Se necessario, consulta la nostra documentazione su [i record DNS e la modifica di una zona DNS](/pages/web/domains/dns_zone_edit) dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Una zona DNS è ospitata/registrata su **server DNS**. I **server DNS** devono essere dichiarati presso il dominio per utilizzare la zona DNS ospitata. 

I **server DNS** funzionano generalmente in coppia:

- Un server DNS *principale*: reindirizza i flussi di richieste ricevuti dal dominio verso la zona DNS ospitata dal dominio stesso. In questo modo è possibile effettuare la *risoluzione DNS* per reindirizzare i flussi verso i servizi giusti (server, sito web, email, ecc...) associati al dominio.
- Un server DNS *secondario*: questo server *soccorso* è utilizzato se il server *principale* è saturo di richieste, non è disponibile o risponde meno rapidamente del server *secondario*.

Alcuni provider DNS propongono 3 **server DNS** o più da dichiarare presso il tuo dominio per attivare la zona DNS che ospita.

Per maggiori informazioni sui **server DNS**, consulta la nostra [guida](/pages/web/domains/dns_server_general_information) sull'argomento.

Per diversi motivi, potresti aver bisogno di creare una zona DNS per il tuo dominio in OVHcloud.

**Questa guida ti mostra come creare una zona DNS OVHcloud per il tuo dominio dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre di un dominio
- il dominio in questione non deve disporre già di una zona DNS (attiva o meno) in OVHcloud o essere oggetto di un'operazione o di un ordine in corso in OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!warning]
>
> Puoi creare più zone DNS (presso diversi provider/hosting DNS) per uno stesso dominio. ma è possibile avere una sola zona DNS attiva per il dominio. Questa restrizione mira ad evitare i *conflitti DNS*.
>
> L'attivazione/disattivazione di una zona DNS avviene a partire dalla dichiarazione dei **server DNS** presso il tuo dominio. Modifica questa dichiarazione e modifica i **server DNS** di un dominio presso: 
>
> - del *Registrar* in cui hai registrato direttamente il tuo dominio;
> - del provider che lo gestisce se passi attraverso un provider specializzato per gestire il tuo dominio.
>
> Modificando i **server DNS** di un dominio, disattivi la configurazione della zona DNS precedente applicata a vantaggio della configurazione della nuova zona DNS (presente sui nuovi **server DNS** dichiarati).
>
> Verifica che, prima di modificare i **server DNS** dichiarati presso il tuo dominio, la configurazione della nuova zona DNS corrisponda alle tue aspettative.
>

### Step 1: creare la zona DNS dallo Spazio Cliente OVHcloud

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web cloud`{.action}. Nella colonna di sinistra, clicca su `Ordina`{.action} e seleziona `Zona DNS`{.action}.

Nella nuova pagina, inserisci il dominio (ad esempio: *dominio.tld*) per il quale vuoi creare una zona DNS OVHcloud. Attendi qualche istante per verificare il dominio da parte del tool.

Se compare un messaggio che indica che la zona DNS non può essere creata, verifica che il dominio rispetti i requisiti necessari o chiedi alla persona che lo gestisce di farlo per te. Non appena tutto è corretto, prova a ripetere l'operazione.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Una volta completata la verifica, scegli se attivare il numero minimo di record per la zona DNS che vuoi creare. Questa scelta non è definitiva, perché in seguito sarà possibile [modificare i record della zona DNS](/pages/web/domains/dns_zone_edit).

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

|Attivare i record minimi?|Dettaglio|
|---|---|
|Sì|Seleziona questa scelta se vuoi personalizzare in autonomia la zona DNS in seguito.</br>![minimale-entra](images/minimal.png){.thumbnail}|
|Non|Seleziona questa opzione se intendi utilizzare servizi OVHcloud come [hosting web](https://www.ovhcloud.com/it/web-hosting/){.external}, con la zona preconfigurata a tal fine.</br>![no-minimale-entra](images/no_minimal.png){.thumbnail}|

Una volta effettuata la scelta, segui gli step fino alla creazione della zona DNS.

### Step 2: modifica la zona DNS (facoltativo)

Ora che la zona DNS del tuo dominio è stata creata, è possibile modificarla. Questa operazione è facoltativa, ma può rivelarsi necessaria per garantire la disponibilità dei servizi associati a questo dominio (ad esempio un sito Web e/o un servizio di posta elettronica).

Per modificare questa zona DNS, consulta la nostra guida "[Modifica una zona DNS in OVHcloud]()".

> [!primary]
>
> Se hai appena creato la zona DNS e il dominio non compare ancora nella lista dei tuoi servizi (nella sezione `Web cloud`{.action} dello Spazio Cliente OVHcloud > `Domini`{.action}), attendi 15-20 minuti e ricarica la pagina.
>

### Step 3: modifica i server DNS del dominio

Una volta che la zona DNS OVHcloud è pronta per l'utilizzo, associala al tuo dominio per applicare la configurazione che contiene. 

È quindi necessario recuperare prima i **server DNS** di OVHcloud sui quali è stata creata la zona DNS di OVHcloud per il tuo dominio.

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona la zona DNS interessata. 

A sinistra è presente un logo a forma di globo, contrassegnato con il termine *DNS*. 

> [!primary]
> A questo punto, se hai un logo a forma di globo (senza il termine *DNS* scritto all'interno), è perché il dominio è già gestito nello Spazio Cliente OVHcloud. 
>
> Se sei il contatto *Amministratore* del dominio, puoi modificare direttamente i **server DNS** utilizzando la nostra [guida](/pages/web/domains/dns_server_general_information) sull'argomento.
>
> Ti ricordiamo che, prima di modificare i **server DNS** dichiarati presso il tuo dominio, verifica che la configurazione della nuova zona DNS corrisponda alle tue aspettative.
>

Nella nuova pagina, i server DNS da utilizzare con il tuo dominio per attivare la zona DNS OVHcloud vengono mostrati nella parte inferiore di `Name Server`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Una volta in possesso delle informazioni, **modifica i server DNS del tuo dominio dall'interfaccia del provider che gestisce il dominio**. Una volta completata l'operazione, la propagazione delle modifiche potrebbe richiedere fino a **48 ore**.

> [!primary]
>
> Ti ricordiamo che, prima di modificare i **server DNS** dichiarati presso il tuo dominio, verifica che la configurazione della nuova zona DNS corrisponda alle tue aspettative.
>

## Per saperne di più

[Modifica una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.