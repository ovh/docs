---
title: "Proteggere un server game con il firewall dell'applicazione"
excerpt: "Scopri come configurare il firewall GAME DDoS di OVHcloud"
updated: 2023-12-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L’obiettivo di questa guida è aiutare gli utenti a comprendere meglio la protezione DDoS GAME (firewall GAME) e fornire istruzioni su come configurare una protezione efficace per i server che la supportano.

> [!primary]
> Per maggiori informazioni sulla protezione DDoS GAME, visita il sito Web: <https://www.ovhcloud.com/it/security/game-ddos-protection/>.
> 

I nostri server dedicati di gioco Bare Metal includono una protezione DDoS appositamente progettata per proteggere le applicazioni di gioco da attacchi mirati, garantendo stabilità e accessibilità ai gamer. Questa soluzione di protezione dedicata è robusta e di semplice utilizzo, per permetterti di concentrarti sullo sviluppo della tua attività senza preoccuparti della difesa dalla cybercriminalità.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Schema dei servizi anti-DDoS e di protezione dei giochi in OVHcloud |

## Prerequisiti

- Un [server dedicato OVHcloud **Game**](https://www.ovhcloud.com/it/bare-metal/prices/#filterType=range_element&filterValue=game)
- Accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> Questa funzionalità potrebbe non essere disponibile o essere limitata sui server della [**Linea di prodotti Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, visitate la nostra [pagina di confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

### Introduzione

L’infrastruttura anti-DDoS, insieme al firewall Edge Network, protegge la rete dalle minacce più comuni (principalmente focalizzata sui livelli 3 e 4 ISO OSI). D’altro canto, l’hosting di applicazioni di gioco può essere un’esperienza difficile in termini di sicurezza della rete. La protezione DDoS GAME è la soluzione ideale: si tratta di un firewall Layer 7 (applicazione) che protegge specifici protocolli di gioco (di solito tramite UDP). I suoi principali vantaggi sono:

- **Distanza**: sappiamo che la latenza e la sua stabilità sono fondamentali per il gaming. Queste soluzioni sono posizionate il più vicino possibile ai server e funzionano insieme a un hardware dedicato.
- **2-way**: la piattaforma analizza il traffico in entrata e uscita per comprendere al meglio la situazione di ogni giocatore.
- **Istantaneo**: è in grado di distinguere i giocatori reali dagli attacchi dannosi su un server fin dai primi pacchetti di rete.
- **Sempre attivo**: la capacità di rilevare e arrestare gli attacchi assicura un'esperienza fluida per le applicazioni di gioco sensibili senza interruzioni e cambiamenti di latenza.

### Attivazione della protezione DDoS GAME

> [!primary]
> Il firewall GAME protegge gli IP associati ad un server. Di conseguenza, se disponi di un server con più indirizzi IP (ad es. Additional IP address), è necessario configurarli singolarmente.
>

Per configurare le regole di gioco nel firewall GAME, accedi allo Spazio Cliente OVHcloud e segui questi step:

- Clicca sulla scheda `Bare Metal Cloud`{.action}.
- Vai su `Network`{.action} nella barra laterale sinistra.
- Apri `IP`{.action}.

| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Clicca sul pulsante `...`{.action} accanto all'indirizzo IP del tuo server di gioco. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Clicca su `Configura il firewall GAME`{.action}. |


| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| Nella schermata successiva, clicca sul pulsante `Aggiungi una regola`{.action} per aggiungere una regola al firewall GAME. |


Puoi impostare fino a **30 regole per IP** per proteggere uno o più giochi ospitati sul tuo server dietro il firewall GAME. La lista dei profili di gioco supportati è disponibile [qui](https://www.ovhcloud.com/it/security/game-ddos-protection/).

> [!primary]
> Di default, il firewall GAME è preconfigurato con determinate regole che OVHcloud ha stabilito utilizzare per i giochi più diffusi. Tuttavia, per i clienti con un server dedicato GAME, possiamo fare un ulteriore passo avanti e configurare le regole anche per le porte.
> 

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Attiva le porte come necessario nella seguente schermata e clicca sul pulsante `Conferma`{.action} una volta aggiunte le tue regole. Le regole del firewall GAME sono state configurate correttamente. |

> [!primary]
> È importante notare che la protezione DDoS GAME non intraprenderà alcuna azione se non vengono configurate delle regole.
>
> Inoltre, per una protezione ottimale, ti consigliamo di impostare "Default policy = DROP", che elimina il traffico non conforme alle regole definite. In questo modo l'applicazione elencata sarà protetta e nessun'altra sarà in grado di raggiungere il server.
> 

> [!warning]
> La protezione DDoS GAME diventa effettiva dopo l’[Edge Network firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Per funzionare correttamente, la protezione Edge Network non può essere troppo rigida e deve trasferire il traffico alla protezione DDoS GAME. Sarebbe ottimale disporre di una regola sul firewall Edge Network che consenta tutto il traffico UDP, quindi lasciare che la protezione DDoS GAME filtri le porte UDP specifiche.
>

### Avvisi importanti

#### FiveM

FiveM è un mod di GTA V. Attualmente non è completamente riconosciuto da Rockstar (game publisher).

Per questo motivo, non prevediamo di rilasciare un profilo pubblico del firewall FiveM GAME per la protezione di livello 7.

#### Rust

Il firewall GAME supporta Rust con un profilo dettagliato. Per maggiori informazioni sull’hosting di Rust sui server OVHcloud, consulta [questa pagina](https://www.ovhcloud.com/it/bare-metal/game/rust-server/).

#### Minecraft

Minecraft è ben supportato nelle seguenti versioni:

- Minecraft Java Edition 
- Minecraft Pocket Edition
- Minecraft Query

> [!primary]
> Per il momento Minecraft Java Edition è protetto in modalità "default" e non sono esposte ulteriori configurazioni. Se ospiti server Minecraft di dimensioni maggiori o con esigenze specifiche, contatta il nostro supporto utilizzando il [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) con tutti i dettagli necessari per ottimizzare il profilo dell'applicazione.
>

## FAQ

### È possibile utilizzare il firewall GAME su gamme diverse dai server game Bare Metal?

No, il firewall GAME è disponibile solo per i nostri server dedicati Game Bare Metal.

### È possibile disattivare la protezione del firewall GAME?

Ciò è possibile, se non consigliato. Per farlo, rimuovi tutte le regole del protocollo di gioco dalla configurazione e disabilita `Default policy: Drop`.

### Il mio gioco non è incluso nell'elenco dei protocolli supportati. Cosa posso fare?

È possibile proporre le proprie esigenze nella nostra [Infrastructure solutions roadmap on GitHub](https://github.com/orgs/ovh/projects/16/views/14). In questo modo saremo in grado di decidere la priorità tra le varie funzionalità da sviluppare.

### Mentre ho configurato il gioco con le porte appropriate e i criteri predefiniti da eliminare, ricevo ancora attacchi che hanno un impatto sul mio server di gioco. Cosa fare?

A tale scopo, è necessario condividere i dump del traffico di rete rilevanti come esempi per tali attacchi (*.pcap* file) e richiedere l'ottimizzazione della protezione del proprio profilo. Per farlo, utilizza il nostro [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help).

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.