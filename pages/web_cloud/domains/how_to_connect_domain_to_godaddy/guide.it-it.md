---
title: "Connettere un nome di dominio OVHcloud a GoDaddy"
excerpt: Prepara e configura la zona DNS del tuo nome di dominio OVHcloud per connetterla a un hosting GoDaddy
updated: 2026-03-18
---

## Obiettivo

Sei titolare di un nome di dominio presso OVHcloud e desideri connetterlo a un hosting GoDaddy. Questa guida ti spiega come preparare e configurare la tua zona DNS OVHcloud per il tuo hosting GoDaddy.

**Scopri come connettere il tuo nome di dominio OVHcloud a un hosting GoDaddy**

> [!warning]
>
> - L'assistenza GoDaddy non ha accesso ai parametri del tuo nome di dominio OVHcloud e non può quindi consigliarti sulle informazioni che dovrai fornire.
> - OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione, la gestione e la responsabilità. Garantirne il corretto funzionamento è quindi responsabilità dell'utente.<br><br> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.

## Prerequisiti

- Disporre di un [nome di dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle [autorizzazioni necessarie per gestire](/pages/account_and_service_management/account_information/managing_contacts) il nome di dominio.
- Disporre di un hosting presso GoDaddy.
- Avere accesso alla gestione di questo hosting presso GoDaddy.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zone DNS](/links/control-panel/web-dns-zone)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Zone DNS`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedura

Prima di seguire i passaggi di questa guida, ti consigliamo di consultare la nostra guida "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> La tua zona DNS è potenzialmente già preconfigurata o collegata a un hosting. Ti mostreremo come identificare ogni record DNS necessario alla connessione con il tuo hosting GoDaddy. Alcuni dovranno essere eliminati per evitare conflitti con i record DNS necessari in questa configurazione. Altri dovranno semplicemente essere modificati o creati. Per una migliore comprensione, utilizzeremo come esempio il nome di dominio "**mydomain.ovh**". Sostituiscilo con il tuo nome di dominio durante la configurazione.

### 1. Configura il tuo hosting GoDaddy

Prepara il tuo hosting GoDaddy seguendo le istruzioni di [**questa pagina della documentazione GoDaddy**](https://it.godaddy.com/help/collegare-il-mio-sito-di-marketing-di-websites-a-un-dominio-registrato-altrove-40612).

### 2. Configura i tuoi record DNS sul tuo account OVHcloud

> [!warning]
>
> Prima di proseguire:
>
> - Apri una scheda in parallelo sul tuo browser internet.
> - Apri [**questa pagina della documentazione GoDaddy**](https://it.godaddy.com/help/collegare-il-mio-sito-di-marketing-di-websites-a-un-dominio-registrato-altrove-40612).
> - Segui le istruzioni fino al passaggio 10 e recupera le informazioni specifiche del tuo sito web per poter modificare in seguito i tuoi record DNS OVHcloud.<br>
> Le istruzioni seguenti ti aiuteranno a configurare più facilmente la tua zona DNS OVHcloud.

Clicca sulle schede qui di seguito per visualizzare in successione ciascuno dei **5** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il nome di dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> La tabella visualizzata elenca tutti i record DNS del nome di dominio selezionato.
>>
> **Passaggio 2**
>>
>> **Configurazione del record A**
>>
>> **1 - Identificazione:** filtra i record DNS selezionando il tipo `A` nel menu dei filtri situato in alto a destra della tabella.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Individua i record "A" esistenti per il tuo dominio (esempio: `mydomain.ovh.`) e per il sottodominio "www" (esempio: `www.mydomain.ovh.`).
>>
>> **2 - Eliminazione:** elimina tutti i record "A" esistenti per il sottodominio "www". Se esistono più record "A" per il nome di dominio, eliminali tutti tranne uno, che modificherai nel passaggio successivo. Per ogni record da eliminare, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> **3 - Modifica:** se esiste un record "A" per il nome di dominio, clicca sul pulsante `...`{.action} e poi su `Modifica il record`{.action}. Lascia il campo **Sottodominio** vuoto e sostituisci la destinazione con l'indirizzo IPv4 recuperato dalla tua interfaccia GoDaddy. Clicca su `Continua`{.action} e conferma.
>>
>> Se non esiste alcun record "A", clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `A`{.action}, lascia il campo **Sottodominio** vuoto e inserisci l'indirizzo IPv4 recuperato dalla tua interfaccia GoDaddy nel campo **Destinazione**. Clicca su `Continua`{.action} e conferma.
>>
>> Passa quindi al passaggio 3.
>>
> **Passaggio 3**
>>
>> **Eliminazione dei record AAAA**
>>
>> **1 - Identificazione:** filtra i record DNS selezionando il tipo `AAAA` nel menu dei filtri situato in alto a destra della tabella.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Individua i record "AAAA" esistenti per il tuo dominio (esempio: `mydomain.ovh.`) e per il sottodominio "www" (esempio: `www.mydomain.ovh.`).
>>
>> **2 - Eliminazione:** elimina tutti i record "AAAA" identificati (nome di dominio e sottodominio "www") per evitare un conflitto con i nuovi record DNS. Per ogni record, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> Se non esiste alcun record "AAAA", passa al passaggio 4.
>>
> **Passaggio 4**
>>
>> **Eliminazione dei record TXT**
>>
>> **1 - Identificazione:** filtra i record DNS selezionando il tipo `TXT` nel menu dei filtri situato in alto a destra della tabella.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Individua i record "TXT" esistenti per il tuo dominio (esempio: `mydomain.ovh.`) e per il sottodominio "www" (esempio: `www.mydomain.ovh.`).
>>
>> **2 - Eliminazione:** elimina tutti i record "TXT" identificati (nome di dominio e sottodominio "www") per evitare un conflitto con i nuovi record DNS. Per ogni record, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> Se non esiste alcun record "TXT", passa al passaggio 5.
>>
> **Passaggio 5**
>>
>> **Configurazione del record CNAME**
>>
>> **1 - Identificazione:** filtra i record DNS selezionando il tipo `CNAME` nel menu dei filtri situato in alto a destra della tabella.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Individua i record "CNAME" esistenti per il sottodominio "www" (esempio: `www.mydomain.ovh.`).
>>
>> **2 - Eliminazione:** se esistono più record "CNAME" per il sottodominio "www", eliminali tutti tranne uno. Per ogni record da eliminare, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> **3 - Modifica:** se esiste un record "CNAME" per il sottodominio "www", clicca sul pulsante `...`{.action} e poi su `Modifica il record`{.action}. Sostituisci unicamente la **Destinazione** con il valore recuperato dalla tua interfaccia GoDaddy. Clicca su `Continua`{.action} e conferma.
>>
>> Se non esiste alcun record "CNAME" per il sottodominio "www", clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `CNAME`{.action}, inserisci `www` nel campo **Sottodominio** e il valore recuperato dalla tua interfaccia GoDaddy nel campo **Destinazione**. Clicca su `Continua`{.action} e conferma.

La zona DNS è ora configurata per puntare verso il tuo hosting GoDaddy.

> [!primary]
>
> La verifica del tuo nome di dominio può richiedere fino a 48 ore.

Se utilizzi un servizio e-mail OVHcloud o prevedi di sottoscrivere una delle [nostre soluzioni e-mail](/links/web/emails), è necessario preparare anche la tua zona DNS di conseguenza. Consulta la nostra guida sulla [configurazione di un record MX](/pages/web_cloud/domains/dns_zone_mx).

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Creare una zona DNS OVHcloud per un nome di dominio](/pages/web_cloud/domains/dns_zone_create)

[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per modificare la gestione del tuo nome di dominio verso un altro account cliente OVHcloud, segui la guida "[Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts)".

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
