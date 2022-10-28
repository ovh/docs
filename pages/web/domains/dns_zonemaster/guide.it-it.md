---
title: Tutorial - Utilizzo di Zonemaster
slug: ovhcloud-domain-zonemaster-tutorial
section: DNS e zona DNS
order: 08
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 12/09/2022**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [fornitore specializzato](https://partner.ovhcloud.com/it/). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
> 


## Obiettivo

[Zonemaster](https://zonemaster.fr/) è uno strumento nato dalla collaborazione tra l'[AFNIC](https://www.afnic.fr/) (Registro francese) e [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (Registro svedese). che permette di analizzare la configurazione DNS (Domain Name System) di un dominio e identificare gli elementi che possono essere migliorati o corretti.

> [!primary]
>
> Per una migliore comprensione del concetto di DNS, consulta l'introduzione della nostra guida sulla [configurazione di una zona DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/).

## Prerequisiti

- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/)

## Procedura

### Campo di inserimento

Il tool Zonemaster permette di verificare una configurazione DNS installata su un dominio o di testare una zona DNS preconfigurata su server DNS futuri.

Per verificare l'attuale configurazione di un dominio, inserisci il tuo dominio e clicca su `Check`{.action}

![domini](images/zonemaster01.png){.thumbnail}

Per verificare una configurazione DNS preparata ma non ancora applicata al dominio interessato, seleziona la casella `Options`{.action} e inserisci le seguenti informazioni:

- **Server DNS**: Inserisci le informazioni del server DNS associato a un dominio e clicca su `+`{.action} per confermare l'inserimento. Inserire un indirizzo IP è facoltativo.
- **Delega del firmatario (registrazione DS)**: In caso di protezione DNSSEC, inserisci gli elementi del record DS e clicca su `+`{.action} per aggiungere il valore. Se i server DNS non utilizzano il protocollo DNSSEC, è possibile lasciare liberi questi campi.

È inoltre possibile forzare le verifiche su un protocollo IP specifico tramite le caselle `Disable IPv6` e `Disable IPv4`

> **Esempio**:<br><br> Se disponi del dominio "mydomain.ovh" che utilizza attualmente i server DNS "dns19.ovh.net" e "ns19.ovh.net". Hai configurato una zona DNS per questo nome di dominio sui server DNS "mydns.test.ovh" e "mydns2.test.ovh".<br>
>
> Prima di modificare i server DNS, puoi effettuare una ricerca avanzata utilizzando la casella `Options`{.action} inserendo "mydns.test.ovh" e "mydns2.test.ovh" nelle caselle `Nameservers`.<br>
> Zonemaster eseguirà un test come se utilizzaste i server "mydns.test.ovh" e "mydns2.test.ovh" su "mydomain.ovh".<br>
> ![domini](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> Quando inserisci un dominio e clicca sul pulsante `Fetch data from parent zone`{.action}, i server DNS associati al dominio appariranno insieme alle informazioni del record DS (DNSSEC) se è stato configurato.
> ![domini](images/zonemaster03.png){.thumbnail}


### I Risultati

Una volta convalidato il modulo, i risultati sono classificati per codice colore:

- **Verde**: Questa parte è funzionale e soddisfa i criteri standard nella sua categoria.
- **Orange**: Questa sezione funziona, ma merita un'attenzione particolare. Il tool ha rilevato che questo parametro presenta caratteristiche che non rientrano nello standard della sua categoria, senza bloccarne il funzionamento.
- **Rosso**: Questa parte presenta errori o elementi mancanti che possono causare un malfunzionamento. 
- **Blu**: si tratta di una semplice informazione, senza conseguenze particolari sul funzionamento del dominio.

![domini](images/zonemaster04.png){.thumbnail}

### Informazioni utili

Se hai altre domande su Zonemaster, consulta la sezione [FAQ](https://zonemaster.net/faq) su <https://zonemaster.fr/>.

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un dominio OVH](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}

[Modifica di una zona DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}.

[Proteggere il dominio dal Cache Poisoning con DNSSEC](https://docs.ovh.com/it/domains/proteggi_il_tuo_dominio_con_dnssec/){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
