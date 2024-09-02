---
title: "Configurare un record MX per la gestione delle email"
excerpt: "Come configurare un record MX su un dominio in OVHcloud"
updated: 2024-09-02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il record MX permette di collegare un dominio al server della sua piattaforma di posta. È indispensabile perché il servizio email del mittente possa raggiungere quello del destinatario.

**Questa guida ti mostra come configurare un record MX per un dominio in OVHcloud.**

## Prerequisiti

- Avere accesso alla gestione della zona DNS del dominio dallo [Spazio Cliente OVHcloud](/links/manager).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Il dominio in questione deve utilizzare la configurazione OVHcloud (ad esempio i server DNS di OVHcloud).
- Disporre di una soluzione MX Plan (inclusa nelle soluzioni di [hosting Web](/links/web/hosting), [hosting gratuito 100M](/links/web/domains-free-hosting) o MX Plan ordinati separatamente), una delle nostre [offerte di posta elettronica OVHcloud](/links/web/emails) o un servizio di posta esterna.

> [!primary]
>
> - Se il dominio non utilizza i server DNS di OVHcloud, la modifica dei record MX deve essere eseguita dall’interfaccia del provider che gestisce la configurazione del dominio.
>
> - Se il dominio è registrato presso OVHcloud, è possibile verificarne la configurazione attraverso lo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=it). Una volta effettuato il login sul dominio interessato, accedi alla sezione `Informazioni Generali`{.action} della scheda `Server DNS`{.action} e clicca su `Attivo` in "**server DNS**" per utilizzare i server DNS di OVHcloud.
>
> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/dns-servers-enabled.png){.thumbnail}

## Procedura

### Informazioni sul ruolo dei record MX 

I record MX (**M**ail **e**Xchange) permettono di collegare il dominio ai server di posta associati al servizio di posta. Ci baseremo su un esempio.

Quando l'indirizzo **sender@otherdomain.ovh** invia un’email a **contact@mydomain.ovh**, il server di invio delle email (**Outgoing mail server**):

- **(1)** interrogare la zona DNS del dominio **mydomain.ovh** e leggere i record **MX**.
- **(2)** trasmettere l’email verso l’URL del record **MX** letto.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail}

L’email sarà inviata verso la destinazione **mx0.mail.ovh.net**, preceduta dal valore **0**. Questo valore viene denominato priorità. Il valore più basso viene interrogato per primo e il valore più alto per ultimo. Ciò significa che la presenza di più record consente di compensare un'assenza di risposta da parte del record MX con la priorità più bassa.

È possibile configurare più record MX per uno stesso dominio. È quindi necessario definire un numero di priorità per ciascuno di essi. I record MX vengono interrogati in ordine crescente, dal numero più basso a quello più alto, fino a ottenere una risposta dal server di posta in arrivo.

> [!warning]
>
> In generale, **modificare i record MX nella zona DNS del dominio è un’operazione delicata**: un’azione errata potrebbe rendere impossibile la ricezione delle email sugli indirizzi. Ti consigliamo di prestare la massima attenzione durante questa operazione.
> In caso di dubbi, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner).

### Valori della configurazione MX di OVHcloud <a name="mxovhcloud"></a>

Qui sotto è disponibile la configurazione MX di OVHcloud da utilizzare con le nostre soluzioni MX Plan (da sola o inclusa in un piano di [hosting Web OVHcloud](/links/web/hosting)), [Email Pro](/links/web/email-pro) e [Exchange](/links/web/emails). I nostri server di posta dispongono di un antispam e di un antivirus integrato.

Questi valori sono comuni a tutte le soluzioni, ad eccezione di [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) e Dedicated Exchange.

|Dominio|TTL|Record|Priorità|Destinazione|
|---|---|---|---|---|
|*Lasciare il campo vuoto*|3600|MX|1|mx0.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|5|mx1.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|50|mx2.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|100|mx3.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|200|mx4.mail.ovh.net.|

Questi record MX devono essere configurati nella zona DNS del dominio.

### Configurare un record MX in una zona DNS OVHcloud

Per creare o modificare i record MX nella configurazione OVHcloud del dominio, accedi allo [Spazio Cliente OVHcloud](/links/manager). Accedi alla sezione `Domini`{.action}, clicca sul dominio interessato e poi sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con la configurazione OVHcloud del tuo dominio. ogni riga corrisponde a un diverso record DNS.

Per prima cosa, è necessario verificare se esistono record MX nella configurazione DNS OVHcloud del dominio utilizzando l’elenco di filtri disponibile sopra la tabella della zona DNS.<br>
Seleziona il tipo **MX** e poi conferma per visualizzare solo i record MX DNS della zona DNS. Consulta lo screenshot qui sotto.

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail}

- Se esistono record MX e vuoi modificarli, clicca sui tre puntini `...`{.action} a destra di ogni riga della tabella e poi clicca su `Modifica record`{.action}.
- Se non sono presenti record MX, clicca sul pulsante `Aggiungi un record`{.action} a destra della tabella e seleziona `MX`{.action}. In base alla soluzione email scelta, inserisci le informazioni richieste:

**Se disponi di una soluzione email OVHcloud**, consulta le informazioni fornite nello step "[Conoscere la configurazione MX di OVHcloud](#mxovhcloud)".

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail}

Una volta inserite le informazioni, prosegui con gli step successivi e clicca su `Conferma`{.action}.

**Se utilizzi un’altra soluzione email**, segui le indicazioni fornite dal provider del tuo servizio di posta.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

## Per saperne di più

[Informazioni generali sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)

[Migliora la sicurezza delle email con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Per prestazioni specializzate (referenziazione, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un'assistenza per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).