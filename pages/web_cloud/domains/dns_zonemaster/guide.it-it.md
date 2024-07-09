---
title: Tutorial - Utilizzo di Zonemaster
updated: 2024-06-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [fornitore specializzato](/links/partner). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
> 

## Obiettivo

[Zonemaster](https://zonemaster.net/en/run-test) è uno strumento nato dalla collaborazione tra l'[AFNIC](https://www.afnic.fr/en/) (Registro francese) e [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (Registro svedese). che permette di analizzare la configurazione DNS (Domain Name System) di un dominio e identificare gli elementi che possono essere migliorati o corretti.

> [!primary]
>
> Per comprendere meglio il concetto di DNS, consulta la nostra guida "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

## Prerequisiti

- Disporre di un [dominio](/links/web/domains)

## Procedura

### Campo di inserimento

Il tool Zonemaster permette di verificare una configurazione DNS installata su un dominio o di testare una zona DNS preconfigurata su server DNS futuri.

Per verificare l'attuale configurazione di un dominio, inserisci il tuo dominio e clicca su `Run`{.action}

![Screenshot dal modulo di Zonemaster. Il dominio "domain.tld" è stato inserito ed è pronto per essere testato.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test.png){.thumbnail}

Per verificare una configurazione DNS preparata ma non ancora applicata al dominio interessato, seleziona la casella `Options`{.action} e inserisci le seguenti informazioni:

- **Nameservers**: inserisci le informazioni del server del nome associato a un dominio. Clicca su `+`{.action} per aggiungere un server con un nome supplementare. Inserire un indirizzo IP è facoltativo.
- **DS records**: inserisci gli elementi del record DS nell'ambito di una protezione DNSSEC. Clicca su `+`{.action} per aggiungere un record DS aggiuntivo. Se i server DNS non utilizzano il protocollo DNSSEC, è possibile lasciare liberi questi campi. Nel caso di una zona firmata con DNSSEC, questa funzione permette di verificare che la zona funzioni correttamente con un resolver valido, con i record DS che stiamo per pubblicare, prima della loro pubblicazione.

È inoltre possibile forzare le verifiche su un protocollo IP specifico tramite le caselle `Disable IPv6` e `Disable IPv4`

> **Esempio**:<br><br> Se disponi del dominio "domain.tld" che utilizza attualmente i server DNS "dnsXX.ovh.net" e "nsXX.ovh.net". Hai configurato una zona DNS per questo nome di dominio sui server DNS "dns1.test.tld" e "dns2.test.tld".<br>
>
> Prima di modificare i server DNS, puoi effettuare una ricerca avanzata utilizzando la casella `Options`{.action} inserendo "dns1.test.tld" e "dns2.test.tld" nelle caselle `Nameservers`.<br>
> Zonemaster eseguirà un test come se utilizzaste i server "dns1.test.tld" e "dns2.test.tld" su "domain.tld".<br>
> ![Screenshot delle opzioni avanzate del modulo di Zonemaster. I due server con i nomi "dns1.test.tld" e "dns2.test.tld" sono stati inseriti nella sezione "Server con i nomi" del form.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test-nameservers-option.png){.thumbnail}

> [!primary]
>
> Quando inserisci un dominio e clicca sui pulsanti `Fetch NS from parent zone`{.action} principale e `Fetch DS from parent zone`{.action} principale, se configurato, i server DNS associati al dominio appariranno insieme alle informazioni del record DS (DNSSEC).
>
> ![Captura de pantalla de la página de resultados de Zonemaster para el dominio "domain.tld". Se desarrolla la sección "Address".](/pages/assets/screens/other/web-tools/zonemaster/fetch-ns-from-parent-zone.png){.thumbnail}

### I Risultati

Una volta convalidato il modulo, i risultati sono classificati per codice colore:

- **Error**: questa parte presenta errori o elementi mancanti che possono causare malfunzionamenti.
- **Warning**: questa sezione funziona, ma merita un'attenzione particolare. Il tool ha rilevato che questo parametro presenta caratteristiche che non rientrano nello standard della sua categoria, senza bloccarne il funzionamento.
- **Notice**: si tratta di una semplice informazione, senza conseguenze particolari sul funzionamento del dominio.
- **Info**: questa parte è funzionale e soddisfa i criteri standard nella sua categoria.

Per ciascun test è possibile ottenere maggiori dettagli, ad esempio per comprendere l'errore nel caso di un malfunzionamento, o semplicemente a titolo indicativo.

![Screenshot della pagina dei risultati di Zonemaster per il dominio "domain.tld". La sezione "Address" viene espansa.](/pages/assets/screens/other/web-tools/zonemaster/domain-analysis.png){.thumbnail}

### Informazioni utili

Se hai altre domande su Zonemaster, consulta la sezione [FAQ](https://zonemaster.net/en/faq) su <https://zonemaster.net/>.

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_general_information){.external}

[Modifica di una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

[Proteggere il dominio dal Cache Poisoning con DNSSEC](/pages/web_cloud/domains/dns_dnssec){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).