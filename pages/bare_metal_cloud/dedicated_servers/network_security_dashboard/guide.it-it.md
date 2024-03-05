---
title: "Monitoraggio degli attacchi DDoS con il Network Security Dashboard"
excerpt: "Scopri come navigare attraverso il dashboard di sicurezza di rete"
updated: 2023-12-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra il Dashboard di Sicurezza di Rete e ti fornisce una panoramica delle contromisure attivate dalla nostra infrastruttura di protezione DDoS quando viene rilevata un'attività di rete malevola. Puoi trovare dettagli su quali protezioni aggiuntive sono state attivate per mantenere attivi i tuoi servizi. Inoltre, i grafici del traffico sono disponibili sulla dashboard per i periodi di attività dei centri di pulitura, in modo da visualizzare meglio la situazione.

## Prerequisiti

- Un servizio OVHcloud esposto su un indirizzo IP pubblico dedicato ([Server Dedicato](https://www.ovhcloud.com/it/bare-metal/), [VPS](https://www.ovhcloud.com/it/vps/), [Istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud) cloud/), [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/), ecc.)
- Accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Sicurezza di rete 

L’infrastruttura anti-DDoS di OVHcloud è un sistema di difesa distribuito e multilivello per combattere gli attacchi informatici. È costituito da molteplici localizzazioni e centri di pulitura che possono analizzare e ripulire il traffico malevolo. Insieme a [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) e alla [GAME DDoS protection](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos), offre servizi di protezione della qualità in diversi casi.

L’infrastruttura anti-DDoS analizza costantemente il traffico in entrata (meccanismo di rilevamento) e alla fine reindirizza tale traffico attraverso i nostri centri di scrubbing (noti anche come "mitigazione") situati nei datacenter di tutto il mondo. Il traffico in entrata viene quindi analizzato in modo approfondito e filtrato in modo da escludere i pacchetti dannosi prima di raggiungere il server o il servizio.

#### Cosa succede quando un attacco raggiunge l'IP del servizio?

Ogni volta che viene rilevato un attacco verso un qualsiasi IP del tuo servizio, ti viene inviata una notifica via email che il traffico è stato reindirizzato attraverso l'infrastruttura anti-DDoS. È inoltre possibile monitorare questi periodi nel dashboard di protezione della rete con ulteriori dettagli.

Durante un attacco, un'azione di mitigazione attiva viene indicata da un'icona di avviso nella pagina dell'elenco degli IP (nella sezione `Gestisci gli indirizzi IP`{.action} del tuo Spazio Cliente OVHcloud).

![red-line-attack](images/forced_blur.png){.thumbnail}

> [!primary]
>
> Per maggiori informazioni su come ottenere la mitigazione DDoS in OVHcloud [qui](https://www.ovhcloud.com/it/security/anti-ddos/ddos-attack-mitigation/).
>

> [!warning]
>
> La logica di protezione si basa su indirizzi IP pubblici associati a un server (o servizio). Di conseguenza, le statistiche e i grafici vengono visualizzati o calcolati per IP.
> 

### Notifiche di sicurezza di rete

![red-line-attack](images/nsd_04_blur.PNG){.thumbnail}

Nello Spazio Cliente OVHcloud, accedi alla sezione `Bare Metal Cloud`{.action}. Vai quindi su `Network`{.action} nella barra laterale sinistra e clicca su `IP`{.action}. Verifica che la `Modalità avanzata` sia abilitata per visualizzare lo stato dell'infrastruttura anti-DDoS e la configurazione dei suoi componenti.

Le colonne corrispondono allo stato di protezione anti-DDoS (**Mitigation**), allo stato di Edge Network **Firewall** e **GAME firewall*** e alla disponibilità delle funzionalità e ai relativi stati.

- Lo stato **Mitigazione** può essere:
    - **Automatico** - Il centro di pulitura è in modalità **Automatico**. Si tratta della modalità di utilizzo consigliata, che reindirizza il traffico per un’analisi più approfondita quando necessario.
    - **Permanente** - Il centro di pulitura è **abilitato in modo permanente**. Non è consigliabile attivarlo in modo permanente, a meno che non venga rilevato un jitter della latenza dovuto al reindirizzamento del traffico avanti e indietro.
    - **Forzato** - Indica che il centro di pulitura è in fase di **azione**.

- La colonna **Firewall** indica lo stato di Edge Network Firewall, che può essere:
    - **Abilitato** - Il firewall è **abilitato** per questo IP.
    - **Disattivato** - Il firewall è **disattivato** per questo IP.
    - **(nessuno stato)** - Configurazione del firewall non creata. Per configurare le regole, clicca sul pulsante `...`{.action}, quindi seleziona `Crea Firewall`{.action}.

- Lo stato **GAME firewall** (disponibile solo per i [server dedicati OVHcloud **Game**](https://www.ovhcloud.com/it/bare-metal/prices/#filterType=range_element&filterValue=game) può essere:
    - **On** - La protezione DDoS GAME è **enabled** su questo IP.
    - **Disattivato** - Il firewall GAME è **disponibile** ma **disattivato** su questo IP.
    - **(nessuno stato)** - Il firewall GAME non è disponibile per questo IP. Questo significa che l'IP elencato non è configurato su una gamma di prodotti supportata.

- La colonna **Alert** può indicare un centro di pulitura attivo con un'icona di avviso e un suggerimento appropriato.

### Network Security Dashboard

Nello Spazio Cliente OVHcloud, l’accesso alla dashboard può essere effettuato dalla pagina di creazione dell’elenco degli IP (per un particolare IP) o direttamente dalla pagina Network Security Dashboard del menu `Network`{.action}.

Accedi alla scheda `Bare Metal Cloud`{.action}, quindi a `Network`{.action} e seleziona `Network Security Dashboard`{.action}.

In alternativa, dall'elenco degli IP (questa opzione è disponibile solo quando il centro di scrubbing è in funzione): accedi alla scheda `Bare Metal Cloud`{.action}, quindi vai a `Network`{.action} e clicca su `Public IP Addresses`{.action}. Clicca sul pulsante `...`{.action} e accedi a `Network Security Dashboard`{.action}.

Nella scheda **scrubbing center log** è possibile recuperare tutte le informazioni sugli attacchi rilevati in passato (o in corso).

![red-line-attack](images/nsd_main_blur.png)

Nella tabella sono presenti le seguenti colonne: 

- **Ora rilevamento** - Timestamp del primo rilevamento attacco
- **Ora di fine** - Timestamp del completamento della mitigazione del centro di pulitura
- **IP di destinazione** - L'IP che è stato l'obiettivo dell'attacco
- **Vettori di attacco** - Fornisce informazioni sui tipi di attacco rilevati, ad esempio UDP, TCP e così via.

> [!warning]
>
> Si noti che gli indirizzi IP sorgente per gli eventi rilevati non vengono visualizzati perché sono solitamente falsificati (gli attacchi DDoS possono puntare a fonti diverse da quelle da cui provengono davvero) e che tali informazioni sono fuorvianti o inutilizzabili.
> 

Nella scheda **Traffic chart**, è possibile visualizzare un grafico che mostra il traffico verso il proprio indirizzo IP (bps o pps).

![red-line-attack](images/nsd_graph_tab_blur.png)

Presenta il traffico malevolo che è caduto (**in rosso**) e il traffico pulito recapitato al tuo indirizzo IP (**in verde**). Vengono inoltre visualizzate le statistiche di base relative alla mitigazione, ad esempio il numero di attacchi rilevati per un IP selezionato, la quantità di traffico (o pacchetti) pulito durante gli attacchi o il numero di volte che i centri di pulitura hanno eseguito un'azione per ispezionare il traffico (il numero di eventi) in un determinato periodo di tempo.

## FAQ

### Perché non vengono visualizzati tutti gli attacchi al dashboard di sicurezza di rete?

A seconda della natura dell'attacco, possono essere intraprese diverse azioni per eliminare al meglio la minaccia. In entrambi i casi è preferibile mitigare gli attacchi il più vicino possibile all’origine:

- In caso di attacco sferrato contro la rete OVHcloud (**esterna**), il traffico viene reindirizzato verso i centri di pulitura anti-DDoS (visibile sulla dashboard).
- Ricorda che gli attacchi provenienti dall’interno della rete OVHcloud (**internal**) sono gestiti dai nostri team di sicurezza. La mitigazione si concentra sul blocco dell'origine dell'attacco e non sarà segnalata dai sistemi di infrastruttura anti-DDoS.

### Nei registri del centro di pulitura non viene visualizzato alcun dato. È normale?

Sì, significa che nessun attacco sospetto ha colpito i tuoi indirizzi IP pubblici.

### Nessun grafico del traffico o dati viene visualizzato per un indirizzo IP immesso.

Questi dati sono disponibili solo per gli indirizzi IP pubblici durante gli eventi di rilevamento automatico dell'infrastruttura anti-DDoS (quando il traffico viene reindirizzato attraverso un centro di scrubbing).

### Il grafico del traffico per alcune posizioni nei registri del centro di pulitura non è disponibile.

I dati dei grafici del traffico sono disponibili solo per le ultime due settimane, mentre le voci dei log possono essere riviste per l'anno precedente.

### Un attacco al mio servizio persiste, come posso proteggere meglio il mio server?

Alcuni tipi di attacco possono essere talmente specifici che la nostra infrastruttura anti-DDoS non sarà in grado di individuarli e pulirli automaticamente. In questi casi, il firewall configurato sul tuo server è la soluzione migliore. Consigliamo inoltre di scaricare alcune regole del firewall sul perimetro della nostra rete, utilizzando Edge Network Firewall.

Per ulteriori informazioni su come configurare le regole Edge Network Firewall, consulta la nostra guida [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### Il servizio è stato attaccato e si verificano problemi sul server. Che altro posso fare?

L’infrastruttura anti-DDoS è progettata per offrire la massima efficienza e una vasta gamma di servizi da proteggere. In alcuni casi specifici può essere necessario un ulteriore tuning (ad esempio per la specificità o le dimensioni dell'applicazione). Per richiederlo, visita il nostro [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) e cerca l’azione appropriata all’interno della categoria "attacco di rete e/o anti-DDoS correlati".

Per permetterci di comprendere meglio il suo caso e di aiutarla, può fornirci ulteriori dettagli:

#### Step 1 - Acquisisci traffico

Per offrirti la soluzione più adatta alle tue esigenze, è necessario analizzare un campione di traffico.

Per fornirci questa possibilità, esegui questo comando su Linux:

```bash
tcpdump -w capture-ovh -c 100000 port not ssh
```

> [!primary]
>
> Se si utilizza Windows, utilizzare [Wireshark](https://www.wireshark.org/) e acquisire 1000000 pacchetti.
>

Al termine dell'esecuzione del comando, viene creato il file di acquisizione. È possibile allegare il file creato al ticket di supporto oppure caricarlo nella nostra soluzione di condivisione file utilizzando [questa guida](/pages/account_and_service_management/account_information/use-plik).

Assicurati di condividere il collegamento del file caricato con il team di supporto nel ticket.

#### Step 2 - Fornisci informazioni a OVHcloud

In tutti i casi in cui sarà necessario apportare modifiche al nostro sistema anti-DDoS, è obbligatorio fornire i seguenti dettagli specifici:

- Servizio ospitato sul server interessato
- Data e ora di inizio dell'attacco
- Data e ora di fine dell'attacco
- IP interessati
- Servizio, protocollo e porta utilizzati dal servizio interessato
- Dimensioni del servizio (XS: 1-10, S: 10-100, M: 100-1k, L: 1-10k, XL: 10-100k, XXL: 100k+ client connessi)
- Altri servizi ospitati sul server
- Altre porte utilizzate sul server
- Esistono altri servizi su IP separati: Sì/No
- In caso affermativo, quali IP
- Il traffico legittimo è stato eliminato: SÌ/NO
- Connessione al server interrotta: SÌ/NO
- Quale tipo di traffico legittimo viene eliminato

## Per saperne di più

[Abilitazione e configurazione di Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

[Proteggere un server GAME con il firewall dell’applicazione](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
