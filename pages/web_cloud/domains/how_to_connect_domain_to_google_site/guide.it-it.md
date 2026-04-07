---
title: "Connettere un nome di dominio OVHcloud a un Google Site"
excerpt: "Prepara e configura la zona DNS del tuo nome di dominio OVHcloud per connetterla a un Google Site"
updated: 2026-03-18
---

## Obiettivo

Sei titolare di un nome di dominio presso OVHcloud e desideri connetterlo a un Google Site. Questa guida ti spiega come preparare e configurare la tua zona DNS OVHcloud per il tuo Google Site.

**Scopri come connettere il tuo nome di dominio OVHcloud a un Google Site.**

> [!warning]
>
> - L'assistenza Google Site non ha accesso ai parametri del tuo nome di dominio OVHcloud e non può quindi consigliarti sulle informazioni che dovrai fornire.
> - OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione, la gestione e la responsabilità. Garantirne il corretto funzionamento è quindi responsabilità dell'utente.<br><br> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di un [nome di dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle [autorizzazioni necessarie](/pages/account_and_service_management/account_information/managing_contacts) per gestire il nome di dominio.
- Disporre di un Google Site ed esserne il proprietario.

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
> La tua zona DNS è potenzialmente già preconfigurata o collegata a un hosting web. Ti mostreremo come identificare ogni record DNS necessario alla connessione con il tuo Google Site. Alcuni dovranno essere eliminati per evitare conflitti con i record DNS necessari in questa configurazione. Altri dovranno semplicemente essere modificati o creati. Per una migliore comprensione, utilizzeremo come esempio il nome di dominio "**mydomain.ovh**". Sostituiscilo con il tuo nome di dominio durante la configurazione.

### 1. Configura il tuo Google Site

> [!warning]
>
> Solo il proprietario di un Google Site può collegarlo a un nome di dominio. Se necessario, scopri come [modificare il proprietario del Google Site](https://support.google.com/sites/answer/97934?hl=it).

Prepara il tuo Google Site seguendo le istruzioni della sezione **Configurer un nom de domaine personnalisé** da [**questa pagina del supporto Google**](https://support.google.com/sites/answer/9068867?hl=it#zippy=).

### 2. Configura i tuoi record DNS sul tuo account OVHcloud

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
>> **2 - Eliminazione:** elimina tutti i record "A" esistenti per il sottodominio "www". Se esistono più di 4 record "A" per il nome di dominio, elimina quelli in eccesso per conservarne solo 4. Per ogni record da eliminare, clicca sul pulsante `...`{.action} a destra della riga corrispondente, quindi su `Elimina il record`{.action}.
>>
>> **3 - Modifica:** modifica ciascun record "A" conservato per il nome di dominio cliccando sul pulsante `...`{.action} e poi su `Modifica il record`{.action}. Sostituisci la destinazione con uno dei 4 indirizzi IPv4 di Google Site (un indirizzo diverso per ogni record):
>>
>> - `216.239.32.21`
>> - `216.239.34.21`
>> - `216.239.36.21`
>> - `216.239.38.21`
>>
>> Clicca su `Continua`{.action} e conferma.
>>
>> **4 - Aggiunta:** se esistevano meno di 4 record "A", crea i record mancanti. Clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `A`{.action}, lascia il campo **Sottodominio** vuoto e inserisci nel campo **Destinazione** ogni indirizzo IPv4 non ancora assegnato. Clicca su `Continua`{.action} e conferma.
>>
>> Poiché i valori di questi indirizzi IP sono soggetti a modifiche, verificali nella documentazione ufficiale alla pagina [valori dei record A](https://support.google.com/a/answer/2579934?hl=it&ref_topic=2721296&sjid=10373374977980680534-EU).
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
>> **3 - Aggiunta:** crea un record TXT di verifica. Clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `TXT`{.action}. Completa i campi **Sottodominio** e **Destinazione** con le informazioni presenti nella pagina "[Valori dei record TXT](https://support.google.com/a/answer/2716802?hl=it&ref_topic=2716886&sjid=3052810298579211755-EU)" della documentazione ufficiale. In genere, il campo **Sottodominio** è vuoto e il campo **Destinazione** è di tipo `google-site-verification=XXXXXXXXXXXX`. Clicca su `Continua`{.action} e conferma.
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
>> **3 - Modifica:** se esiste un record "CNAME" per il sottodominio "www", clicca sul pulsante `...`{.action} e poi su `Modifica il record`{.action}. Sostituisci unicamente la **Destinazione** con `ghs.googlehosted.com.`. Clicca su `Continua`{.action} e conferma.
>>
>> Se non esiste alcun record "CNAME" per il sottodominio "www", clicca su `Aggiungi un record`{.action} in alto a destra, seleziona il campo di puntamento `CNAME`{.action}, inserisci `www` nel campo **Sottodominio** e `ghs.googlehosted.com.` nel campo **Destinazione**. Clicca su `Continua`{.action} e conferma.
>>
>> Poiché questi valori sono soggetti a modifiche, verificali nella pagina "[Valori dei record CNAME](https://knowledge.workspace.google.com/admin/support/troubleshooting/cname-record-values?hl=it)" della documentazione ufficiale.

La zona DNS è ora configurata per puntare verso il tuo Google Site.

> [!primary]
>
> La verifica del tuo nome di dominio può richiedere fino a 48 ore.

Se utilizzi un servizio e-mail OVHcloud o prevedi di sottoscrivere una delle [nostre soluzioni e-mail](/links/web/emails), prepara la tua zona DNS di conseguenza. Consulta la nostra guida sulla [configurazione di un record MX](/pages/web_cloud/domains/dns_zone_mx).

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Creare una zona DNS OVHcloud per un nome di dominio](/pages/web_cloud/domains/dns_zone_create)

[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per modificare la gestione del tuo nome di dominio verso un altro account cliente OVHcloud, segui la guida "[Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts)".

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
