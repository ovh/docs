---
title: "Configurare l'Edge Network Firewall per server dedicati"
excerpt: "Attiva e configura l'Edge Network Firewall per filtrare il traffico in entrata verso il tuo server dedicato OVHcloud."
updated: 2026-03-10
---

## Obiettivo

Per proteggere i servizi dei clienti esposti sugli indirizzi IP pubblici, OVHcloud offre un firewall stateless configurato e integrato nell'**infrastruttura anti-DDoS**: Edge Network Firewall. Consente di limitare l'esposizione dei servizi agli attacchi DDoS, eliminando specifici flussi di rete che possono provenire dall'esterno della rete OVHcloud.

**Questa guida ti mostra come configurare Edge Network Firewall per i tuoi servizi.**

> [!primary]
>
> Per maggiori informazioni sulla soluzione Anti-DDoS, [clicca qui](/links/security/antiddos).
>

| Infrastruttura anti-DDoS e protezione DDoS Game su OVHcloud |
|:--:|
| ![global-schema](images/global_schema_2025.png){.thumbnail} |

## Prerequisiti

- Un servizio OVHcloud esposto su un indirizzo IP pubblico dedicato ([Server Dedicato](/links/bare-metal/bare-metal), [VPS](/links/bare-metal/vps), [istanza Public Cloud](/links/public-cloud/public-cloud), [Hosted Private Cloud](/links/hosted-private-cloud/vmware), [Additional IP](/links/network/additional-ip), ecc.)

<!-- CP-NAV-START:network-public-ip -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public IP](/links/control-panel/network-public-ip)
- **Percorso di navigazione:** `Network`{.action} > `Indirizzi IP pubblici`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Questa funzionalità potrebbe non essere disponibile o essere limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Per maggiori informazioni, consulta la nostra [pagina di confronto](/links/bare-metal/eco-compare).

> [!warning]
> Edge Network Firewall non supporta il protocollo QUIC.

## Procedura

Edge Network Firewall riduce l'esposizione agli attacchi DDoS di rete consentendo agli utenti di replicare alcune regole del firewall del server alla periferia della rete OVHcloud. Questo blocca gli attacchi in entrata il più vicino possibile alla loro origine, riducendo il rischio di sovraccarico delle risorse del server in caso di attacco importante.

### Configurare Edge Network Firewall

Edge Network Firewall può essere attivato o disattivato dall'utente in qualsiasi momento, con un'eccezione: viene **attivato automaticamente** quando viene rilevato un attacco DDoS e **non può essere disattivato** fino al termine dell'attacco. Di conseguenza, tutte le regole configurate nel firewall vengono applicate per tutta la durata dell'attacco. Questa logica consente ai nostri clienti di scaricare le regole del firewall del server alla periferia della rete OVHcloud per tutta la durata dell'attacco.

#### Accedere alla pagina di configurazione di Edge Network Firewall

> [!primary]
>
> A oggi, questa funzionalità è disponibile solo per gli indirizzi IPv4.

> [!primary]
>
> Edge Network Firewall protegge un IP specifico associato a un server (o servizio). Pertanto, se disponi di un server con più indirizzi IP, devi configurare ciascun IP separatamente.
>

Puoi utilizzare il menu a tendina sotto **I miei indirizzi IP pubblici e servizi associati** per filtrare i tuoi servizi per categoria, oppure digitare direttamente l'indirizzo IP desiderato nella barra di ricerca.

![filtrare i servizi](images/selectservice_cut_new.png){.thumbnail}

Clicca poi sul pulsante `⁝`{.action} a destra dell'IPv4 interessato e seleziona `Configurare Edge Network Firewall`{.action} (oppure clicca sull'icona di stato nella colonna **Edge Firewall**).

![Attivazione di Edge Network Firewall](images/firewall_config_new.png){.thumbnail}

Verrai reindirizzato alla pagina di configurazione del firewall.

> [!primary]
>
> - La frammentazione UDP è bloccata (*DROP*) di default. Quando si attiva Edge Network Firewall, se utilizzi una VPN, ricorda di configurare correttamente la tua unità di trasmissione massima (MTU). Ad esempio, con OpenVPN, puoi verificarla tramite `MTU test`.
> - Edge Network Firewall (ENF), integrato nei centri di scrubbing (VAC), gestisce solo il traffico di rete proveniente dall'esterno della rete OVHcloud.
>

> [!warning]
> Tieni presente che devi configurare i tuoi firewall locali anche se Edge Network Firewall è stato configurato, poiché il suo ruolo principale è quello di gestire il traffico proveniente dall'esterno della rete OVHcloud.
>
> Se hai configurato delle regole, ti consigliamo di verificarle regolarmente o in caso di modifiche al funzionamento dei tuoi servizi. Come accennato in precedenza, Edge Network Firewall verrà attivato automaticamente in caso di attacco DDoS, anche se è disattivato nelle impostazioni IP.
>

### Configurare le regole del firewall

Puoi impostare fino a **20 regole per indirizzo IP**.

> [!primary]
> Da marzo 2026, Edge Network Firewall supporta regole applicabili a intervalli di porte, oltre alle consuete regole a porta singola.
>
> L'utilizzo di intervalli di porte consente di proteggere con una sola regola le applicazioni che necessitano di più porte in sequenza. Questo garantisce che la configurazione rispetti il limite delle 20 regole, senza dover creare una regola distinta per ogni porta utilizzata.

> [!warning]
> Tieni presente che Edge Network Firewall di OVHcloud non può essere utilizzato per aprire le porte su un server. Per aprire le porte su un server, devi passare attraverso il firewall del sistema operativo installato sul server.
>
> Per maggiori informazioni, consulta le seguenti guide: [Configurazione del firewall su Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) e [Configurazione del firewall su Linux con iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Per aggiungere una regola**, clicca sul pulsante `+ Aggiungere una regola`{.action}, in alto a sinistra nella pagina.

| ![add-rule-btn](images/enf_add_rule_new.png) |
|:--:|
| Clicca su `+ Aggiungere una regola`{.action}. |

Per ogni regola (escluso TCP), devi scegliere:

| ![add-rule-btn](images/enf_add_rule_no_tcp_new.png){.thumbnail} |
|:--|
| - Una priorità (da 0 a 19, dove 0 rappresenta la prima regola da applicare, seguita dalle altre) <br> - Un'azione (`Accettare`{.action} o `Rifiutare`{.action}) <br> - Il protocollo <br> - L'indirizzo IP sorgente (facoltativo) |

Per ogni regola **TCP**, devi scegliere:

| ![add-rule-btn](images/enf_add_rule_tcp_new.png){.thumbnail} |
|:--|
| - Una priorità (da 0 a 19, dove 0 rappresenta la prima regola da applicare, seguita dalle altre) <br> - Un'azione (`Accettare`{.action} o `Rifiutare`{.action}) <br> - Il protocollo <br> - L'indirizzo IP sorgente (facoltativo) <br> - Porta o intervallo di porte sorgente (facoltativo) <br> - Porta o intervallo di porte di destinazione (facoltativo) <br> - Lo stato TCP (facoltativo) <br> - Frammenti (facoltativo) |

Quando configuri una regola TCP o UDP con una porta o un intervallo di porte, verifica che i campi `porta sorgente` e `porta di destinazione` contengano un numero unico compreso tra 1 e 65535 (incluso), oppure un intervallo di porte (due numeri separati da un trattino, ad esempio: 8887-8888).

> [!primary]
> Ti consigliamo di autorizzare il protocollo TCP con un'opzione `established` (per i pacchetti che fanno parte di una sessione precedentemente aperta/avviata), i pacchetti ICMP (per il ping e traceroute) ed eventualmente le risposte DNS UDP dei server esterni (se utilizzi server DNS esterni).
>
> **Esempio di configurazione:**
>
> - Priorità 0: Autorizzare TCP `established`
> - Priorità 1: Autorizzare UDP, porta sorgente 53
> - Priorità 2: Autorizzare ICMP
> - Priorità 19: Rifiutare IPv4

> [!warning]
> Le configurazioni del firewall con solo regole in modalità `Accept` non sono affatto efficaci. Un'istruzione deve indicare cosa deve essere eliminato dal firewall. Riceverai un avviso a meno che non venga creata una regola "Rifiutare".
>

**Attivare/disattivare il firewall:**

| ![activate-desactivate](images/enf_enable_disable_new.png) |
|:--:|
| Utilizza il pulsante di commutazione per attivare o disattivare il firewall. |

Dopo la convalida, il firewall verrà attivato o disattivato.

Tieni presente che le regole sono disattivate fino al momento in cui viene rilevato un attacco, dopodiché vengono attivate. Questa logica può essere utilizzata per regole che sono attive solo quando arriva un attacco ripetuto noto.

### Errori comuni e buone pratiche

#### Definire contemporaneamente le porte sorgente e di destinazione nella stessa regola

Quando si creano regole del firewall, definire sia la porta sorgente che la porta di destinazione è generalmente un errore di configurazione. Infatti, le porte sorgente sono nella maggior parte dei casi assegnate in modo casuale dal sistema operativo del client (porte effimere).

Se imposti una regola su una porta sorgente specifica, il traffico legittimo verrà probabilmente bloccato non appena la porta del client cambierà nella sessione successiva. Per garantire la continuità della connessione, devi specificare solo la porta di destinazione (la porta del tuo servizio).

**Buona pratica:** Lascia la porta sorgente vuota, a meno che tu non stia filtrando il traffico proveniente da un sistema specializzato con una configurazione di uscita statica.

#### Intervalli di porte troppo estesi

Creare regole che autorizzano il traffico su intervalli di porte molto ampi può costituire un rischio per la sicurezza, poiché aumenta considerevolmente la superficie di attacco del tuo server. Questo può comportare diversi problemi:

- Potresti esporre inavvertitamente servizi in background che non devono essere pubblici, rischiando così fughe di informazioni sul tuo sistema e consentendo ad attori malevoli di sondare il tuo server alla ricerca di vulnerabilità.
- L'audit e la risoluzione dei problemi diventano molto più complessi, poiché è più difficile verificare quali applicazioni comunicano realmente, il che può mascherare errori di configurazione o intrusioni.
- Gli ampi intervalli UDP aperti sono frequentemente presi di mira da attacchi per amplificazione e riflessione, poiché la probabilità di trovare servizi esposti è più elevata. Gli aggressori possono falsificare un indirizzo IP bersaglio per inviare piccole richieste ai servizi di questo intervallo, i quali rispondono con pacchetti molto più voluminosi. In questo modo, utilizzano il tuo server per lanciare attacchi DDoS saturando potenzialmente la tua stessa banda.

**Buona pratica:** Utilizza solo intervalli ristretti per le porte sequenziali richieste da un'applicazione specifica (es.: 5000-5100).

### Esempio di configurazione

Per assicurarti che solo le porte SSH (22), HTTP (80), HTTPS (443) e UDP (53) restino aperte durante l'autorizzazione dell'ICMP, segui le regole qui sotto:

![Esempio di configurazione](images/exemple.png){.thumbnail}

Le regole sono ordinate da 0 (la prima regola letta) a 19 (l'ultima). La catena cessa di essere analizzata non appena una regola viene applicata al pacchetto.

Ad esempio, un pacchetto per la porta TCP 80 verrà intercettato dalla regola 2 e le regole successive non verranno applicate. Un pacchetto per la porta TCP 25 verrà catturato solo dall'ultima regola (19), che lo bloccherà poiché il firewall non consente la comunicazione sulla porta 25 nelle regole precedenti.

> [!warning]
> La configurazione qui sopra è solo un esempio e deve essere utilizzata come riferimento solo se le regole non si applicano ai servizi ospitati sul tuo server. È indispensabile configurare le regole del tuo firewall affinché corrispondano ai servizi ospitati sul tuo server. Una configurazione non corretta delle regole del firewall può causare il blocco del traffico legittimo e l'inaccessibilità dei servizi del server.
>

### Mitigazione degli attacchi - Attività del centro di pulitura (Scrubbing Center)

La nostra infrastruttura anti-DDoS (VAC) funziona automaticamente. Il processo di mitigazione avviene tramite un centro di pulitura (**Scrubbing Center**) automatizzato. È lì che la nostra tecnologia avanzata esamina nel dettaglio i pacchetti e cerca di rimuovere il traffico DDoS, consentendo il passaggio del traffico legittimo.

Tutti gli indirizzi IP OVHcloud sono sottoposti a mitigazione automatica. Se viene rilevato traffico malevolo, il **Scrubbing Center** si attiva. Questo stato è quindi rappresentato dallo stato "Forzato" per un determinato indirizzo IP. In questo momento è attivo anche Edge Network Firewall. La situazione torna alla normalità quando l'attacco viene mitigato e non si osservano più attività sospette.

> [!success]
> **Suggerimenti**
>
> Puoi creare regole del firewall dedicate agli attacchi che si applicano solo dopo la rilevazione di un attacco. A tale scopo, le regole di Edge Network Firewall devono essere create ma disattivate.
>

> [!warning]
> Se la nostra infrastruttura anti-DDoS gestisce un attacco, le regole del tuo Edge Network Firewall finiranno per essere applicate, anche se hai disattivato il firewall. Se hai disattivato il tuo firewall, ricorda di eliminare anche le tue regole.
>
> Tieni presente che l'infrastruttura anti-DDoS non può essere disattivata su un servizio. Tutti i prodotti OVHcloud vengono forniti con questo dispositivo e questo non può essere modificato.
>

## Network Security Dashboard

Per una panoramica dettagliata degli attacchi rilevati e dei risultati delle attività del Scrubbing Center, ti invitiamo a consultare la nostra guida sul [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Conclusione

Dopo aver letto questo tutorial, dovresti essere in grado di configurare Edge Network Firewall per migliorare la sicurezza dei tuoi servizi OVHcloud.

## Per saperne di più

- [Proteggere un server GAME con il firewall applicativo](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Contatta la nostra [Community di utenti](/links/community).
