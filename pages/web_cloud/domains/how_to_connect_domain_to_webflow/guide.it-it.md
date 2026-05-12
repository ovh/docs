---
title: "Connettere un nome di dominio OVHcloud a Webflow"
excerpt: Prepara e configura la zona DNS del tuo nome di dominio OVHcloud per connetterla a un hosting Webflow
updated: 2026-03-18
---

## Obiettivo

Sei titolare di un nome di dominio presso OVHcloud e desideri connetterlo a un hosting Webflow. Questa guida ti spiega come preparare e configurare la tua zona DNS OVHcloud per il tuo hosting Webflow.

**Scopri come connettere il tuo nome di dominio OVHcloud a un hosting Webflow**

> [!warning]
>
> - L'assistenza Webflow non ha accesso ai parametri del tuo nome di dominio OVHcloud e non può quindi consigliarti sulle informazioni che dovrai fornire.
> - OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione, la gestione e la responsabilità. Garantirne il corretto funzionamento è quindi responsabilità dell'utente.<br><br> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di un [nome di dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle [autorizzazioni necessarie per gestire](/pages/account_and_service_management/account_information/managing_contacts) il nome di dominio.
- Disporre di un hosting presso Webflow.
- Avere accesso alla gestione di questo hosting presso Webflow.

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
> La tua zona DNS è potenzialmente già preconfigurata o collegata a un hosting. Ti mostreremo come identificare ogni record DNS necessario alla connessione con il tuo hosting Webflow. Alcuni dovranno essere eliminati per evitare conflitti con i record DNS necessari in questa configurazione. Altri dovranno semplicemente essere modificati o creati. Per una migliore comprensione, utilizzeremo come esempio il nome di dominio "**mydomain.ovh**". Sostituiscilo con il tuo nome di dominio durante la configurazione.

### 1. Configura il tuo hosting Webflow

Prepara il tuo hosting Webflow seguendo le istruzioni della sezione **How to connect your custom domain** da [**questa pagina della documentazione Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Configura i tuoi record DNS sul tuo account OVHcloud

> [!warning]
>
> Prima di proseguire:
>
> - Apri una scheda in parallelo sul tuo browser internet.
> - Apri [**questa pagina della documentazione Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export).
> - Posizionati sulla sezione "**How to set your DNS records**" della documentazione Webflow.<br>
> Le istruzioni seguenti ti aiuteranno a configurare più facilmente la tua zona DNS OVHcloud.

Clicca sulle schede qui di seguito per visualizzare in successione ciascuno dei **5** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il nome di dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> La tabella elenca i record DNS del nome di dominio selezionato.
>>
> **Passaggio 2**
>>
>> **Configurazione dei record A**
>>
>> **1 - Identificazione:** filtra i record DNS selezionando il tipo `A` nel menu dei filtri situato in alto a destra della tabella.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Individua i record "A" esistenti per il tuo dominio (esempio: `mydomain.ovh.`) e per il sottodominio "www" (esempio: `www.mydomain.ovh.`).
>>
>> **2 - Eliminazione:** elimina tutti i record "A" esistenti per il sottodominio "www". Se esistono più di 2 record "A" per il nome di dominio, elimina quelli in eccesso per conservarne solo 2. Per ogni record da eliminare, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> **3 - Modifica:** modifica ciascun record "A" conservato per il nome di dominio cliccando sul pulsante `...`{.action} e poi su `Modifica il record`{.action}. Sostituisci la destinazione con uno dei 2 indirizzi IPv4 di Webflow (un indirizzo diverso per ogni record):
>>
>> - `75.2.70.75`
>> - `99.83.190.102`
>>
>> Clicca su `Continua`{.action} e conferma.
>>
>> **4 - Aggiunta:** se esistevano meno di 2 record "A", crea i record mancanti. Clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `A`{.action}, lascia il campo **Sottodominio** vuoto e inserisci nel campo **Destinazione** ogni indirizzo IPv4 non ancora assegnato. Clicca su `Continua`{.action} e conferma.
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
>> **Configurazione del record TXT**
>>
>> **1 - Identificazione:** filtra i record DNS selezionando il tipo `TXT` nel menu dei filtri situato in alto a destra della tabella.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Individua i record "TXT" esistenti per il tuo dominio (esempio: `mydomain.ovh.`) e per il sottodominio "www" (esempio: `www.mydomain.ovh.`).
>>
>> **2 - Eliminazione:** elimina tutti i record "TXT" identificati (nome di dominio e sottodominio "www") per evitare un conflitto con i nuovi record DNS. Per ogni record, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> **3 - Aggiunta:** crea un record TXT di verifica. Clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `TXT`{.action}, inserisci `_webflow` nel campo **Sottodominio** e nel campo **Destinazione** il valore di tipo `one-time-verification=XXXXXXXX` presente nella sezione `Site settings > Publishing tab > Production`{.action} del tuo account Webflow. Clicca su `Continua`{.action} e conferma.
>>
>> Passa quindi al passaggio 5.
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
>> **3 - Modifica:** se esiste un record "CNAME" per il sottodominio "www", clicca sul pulsante `...`{.action} e poi su `Modifica il record`{.action}. Sostituisci unicamente la **Destinazione** con `proxy-ssl.webflow.com.`. Clicca su `Continua`{.action} e conferma.
>>
>> Se non esiste alcun record "CNAME" per il sottodominio "www", clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `CNAME`{.action}, inserisci `www` nel campo **Sottodominio** e `proxy-ssl.webflow.com.` nel campo **Destinazione**. Clicca su `Continua`{.action} e conferma.

La zona DNS è ora configurata per puntare verso il tuo hosting Webflow.

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
