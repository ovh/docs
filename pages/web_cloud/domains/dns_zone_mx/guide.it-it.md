---
title: "Configurare un record MX per la gestione delle email"
excerpt: "Come configurare un record MX su un nome di dominio in OVHcloud"
updated: 2026-03-27
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Obiettivo

Il record MX permette di collegare un nome di dominio al server della sua piattaforma di posta. È indispensabile perché il servizio email del mittente possa raggiungere quello del destinatario.

**Questa guida ti mostra come configurare un record MX per un nome di dominio in OVHcloud.**

## Prerequisiti

- Il nome di dominio in questione deve utilizzare la configurazione OVHcloud (ad esempio i server DNS di OVHcloud).
- Disporre di una soluzione MX Plan (inclusa nelle soluzioni di [hosting Web](/links/web/hosting), [hosting gratuito 100M](/links/web/domains-free-hosting) o MX Plan ordinati separatamente), una delle nostre [offerte di posta elettronica OVHcloud](/links/web/emails) o un servizio di posta esterna.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zone DNS](/links/control-panel/web-dns-zone)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Zone DNS`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - Se il nome di dominio non utilizza i server DNS di OVHcloud, la modifica dei record MX deve essere eseguita dall’interfaccia del provider che gestisce la configurazione del nome di dominio.
>
> - Se il nome di dominio è registrato presso OVHcloud, è possibile verificare se utilizza la nostra configurazione. A tal fine e se necessario, consulta la nostra guida "[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

## Procedura

### Informazioni sul ruolo dei record MX

Il record MX (**M**ail e**X**change) è un tipo di record DNS che determina quali server di posta in arrivo sono associati al nome di dominio.

Per comprenderne il funzionamento, utilizzeremo un esempio:

- L'indirizzo **sender@otherdomain.ovh** invia un'email a **contact@mydomain.ovh**.
- Il server di invio delle email (**Outgoing mail server**) interroga la zona DNS del nome di dominio **mydomain.ovh** e legge i record **MX**.
- L'email viene trasmessa verso l'URL del record **MX** letto.
- L'email viene inviata verso la destinazione **mx0.mail.ovh.net**, preceduta dal valore **0**. Questo valore corrisponde alla priorità: il valore più basso viene interrogato per primo e il valore più alto per ultimo. Ciò significa che la presenza di più record MX consente di compensare un'assenza di risposta dal server designato dal record con la priorità più bassa, passando ai server successivi in ordine di priorità.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

È possibile configurare più record MX per uno stesso nome di dominio. È quindi necessario definire un numero di priorità per ciascuno di essi. I record MX vengono interrogati in ordine crescente, dal numero più basso a quello più alto, fino a ottenere una risposta dal server di posta in arrivo.

> [!warning]
>
> In generale, **modificare i record MX nella zona DNS del nome di dominio è un’operazione delicata**: un’azione errata potrebbe rendere impossibile la ricezione delle email sugli indirizzi. Ti consigliamo di prestare la massima attenzione durante questa operazione.
> In caso di dubbi, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner).

### Valori della configurazione MX di OVHcloud <a name="mxovhcloud"></a>

Qui sotto è disponibile la configurazione MX di OVHcloud da utilizzare con le nostre soluzioni MX Plan (da sola o inclusa in un piano di [hosting Web OVHcloud](/links/web/hosting)), [Email Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) e [Zimbra](/links/web/zimbra). I nostri server di posta dispongono di un antispam e di un antivirus integrato.

Questi valori sono comuni a tutte le soluzioni, ad eccezione di [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) e Dedicated Exchange.

|Dominio|TTL|Record|Priorità|Destinazione|
|---|---|---|---|---|
|*Lasciare il campo vuoto*|3600|MX|1|mx0.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|5|mx1.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|50|mx2.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|100|mx3.mail.ovh.net.|
|*Lasciare il campo vuoto*|3600|MX|200|mx4.mail.ovh.net.|

Questi record MX devono essere configurati nella zona DNS del nome di dominio.

<!-- CP-STEPS-START:configure-mx-record -->
### Configurare un record MX in una zona DNS OVHcloud

Clicca sulle schede qui sotto per visualizzare ciascuno dei **5** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> La tabella mostra la configurazione OVHcloud del tuo nome di dominio. Ogni riga corrisponde a un record DNS.
>>
>> Verifica se esistono già record MX selezionando il tipo **MX** nell’elenco di filtri sopra la tabella, poi conferma.
>>
>> ![Record MX DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}
>>
> **Passaggio 3**
>>
>> - Se esistono già record MX e vuoi modificarli, clicca sul pulsante `...`{.action} a destra di ogni riga della tabella e poi su `Modifica il record`{.action}.
>> - Se non sono presenti record MX, clicca sul pulsante `Aggiungi un record`{.action} a destra della tabella e seleziona `MX`{.action}.
>>
> **Passaggio 4**
>>
>> Inserisci le informazioni richieste in base alla soluzione email scelta.
>>
>> **Se disponi di una soluzione email OVHcloud**, consulta le informazioni fornite nel passaggio "[Conoscere la configurazione MX di OVHcloud](#mxovhcloud)".
>>
>> ![Record MX DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}
>>
> **Passaggio 5**
>>
>> Una volta inserite le informazioni, prosegui con i passaggi successivi e clicca su `Conferma`{.action}.

**Se utilizzi un’altra soluzione email**, segui le indicazioni fornite dal provider del tuo servizio di posta.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
<!-- CP-STEPS-END:configure-mx-record -->

## Per saperne di più

[Informazioni generali sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)

[Migliora la sicurezza delle email con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).