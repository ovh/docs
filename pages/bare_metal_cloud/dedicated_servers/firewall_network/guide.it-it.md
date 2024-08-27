---
title: 'Abilitazione e configurazione di Edge Network Firewall'
excerpt: 'Come configurare Edge Network Firewall per i servizi'
updated: 2024-01-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Per proteggere i servizi clienti esposti agli indirizzi IP pubblici, OVHcloud offre un firewall stateless configurato e integrato nell’infrastruttura **Anti-DDoS**: Edge Network Firewall. Consente di limitare l’esposizione dei servizi agli attacchi DDoS, eliminando specifici flussi di rete provenienti dall’esterno della rete OVHcloud.

**Questa guida ti mostra come configurare Edge Network Firewall per i tuoi servizi.**

> [!primary]
>
> Per maggiori informazioni sulla soluzione anti-DDoS di OVHcloud, visita il sito Web: <https://www.ovhcloud.com/it/security/anti-ddos/>.
> 

| ![global-schema](images/global_schema.png) | 
|:--:| 
| Schema dei servizi anti-DDoS e di protezione dei giochi in OVHcloud |

## Requisiti

- Un servizio OVHcloud esposto su un indirizzo IP pubblico dedicato ([server dedicato](/links/bare-metal/bare-metal), [VPS](https://www.ovhcloud.com/it/vps/), [istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud) cloud/), [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/), ecc.)
- Accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> Questa funzionalità potrebbe non essere disponibile o essere limitata sui server della [**Linea di prodotti Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, visitate la nostra [pagina di confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

L’Edge Network Firewall riduce l’esposizione agli attacchi DDoS di rete consentendo agli utenti di copiare alcune delle regole del firewall del server al margine della rete OVHcloud. In questo modo, gli attacchi in entrata vengono bloccati il più vicino possibile alla fonte, riducendo il rischio di saturazione delle risorse del server o delle connessioni rack in caso di attacchi gravi.

### Abilitazione di Edge Network Firewall

> [!primary]
>
> Edge Network Firewall protegge un IP specifico associato a un server (o servizio). Pertanto, se si dispone di un server con più indirizzi IP, è necessario configurare ciascun IP separatamente.
> 

Nello Spazio Cliente OVHcloud, clicca sulla sezione `Bare Metal Cloud`{.action}, poi clicca sul menu `Network`{.action} e apri `IP`{.action}. Per filtrare i servizi in base alla categoria, utilizza il menu a discesa sottostante **"I tuoi indirizzi IP pubblici e i servizi associati"**.

![filter service](images/selectservice_cut.png){.thumbnail}

A questo punto, clicca sul pulsante `...`{.action} a destra dell'IPv4 corrispondente e seleziona prima `Crea Firewall`{.action}.

![Attivazione del firewall di rete](images/firewallcreation2022.png){.thumbnail}

Ti verrà chiesto di confermare l’operazione. Il firewall verrà creato e sarà possibile configurare le regole.

> [!primary]
> Il pulsante `Create Firewall`{.action} sarà disponibile solo per gli IP che non hanno mai configurato un firewall. Se non è la prima volta che si configura il firewall, è possibile saltare questo passaggio. 
>

| ![Abilitazione della configurazione](images/activationconfig.png) |
|:--:|
| Clicca su `Edge Network Firewall configuration`{.action} per avviare la configurazione. |

In questa pagina è possibile scegliere di **Attivare** o **Disattivare** il firewall utilizzando il pulsante di commutazione.
È anche possibile farlo in un altro modo spiegato di seguito.

È possibile impostare fino a **20 regole per IP**.

> [!warning]
>
> Edge Network Firewall si attiva automaticamente quando viene rilevato un attacco DDoS e non può essere disattivato fino a quando l'attacco non è terminato. Di conseguenza, tutte le regole configurate nel firewall vengono applicate per tutta la durata dell'attacco. Questa logica permette ai nostri clienti di scaricare le regole del firewall sul perimetro della rete OVHcloud per tutta la durata dell’attacco.
>
> Ricorda che, anche se Edge Network Firewall è stato configurato, è necessario configurare il tuo firewall locale, in quanto il suo ruolo principale è quello di gestire il traffico dall'esterno della rete OVHcloud.
>
> Se hai configurato alcune regole, ti consigliamo di controllarle regolarmente o di modificarne il funzionamento. Come accennato in precedenza, Edge Network Firewall verrà attivato automaticamente in caso di attacco DDoS anche se disabilitato nelle impostazioni IP.
>

> [!primary]
>
> - La frammentazione UDP è bloccata (DROP) di default. Quando si attiva Edge Network Firewall, se si utilizza una VPN, è necessario configurare correttamente la MTU (Maximum Transmission Unit). Ad esempio, con OpenVPN, puoi controllare `MTU test`.
> - Edge Network Firewall (ENF) integrato nei centri di scrubbing (VAC) gestisce solo il traffico di rete esterno alla rete OVHcloud.
>

### Configura Edge Network Firewall

> [!warning]
> Nota che il Firewall Edge Network di OVHcloud non può essere utilizzato per aprire le porte su un server. Per aprire le porte su un server, è necessario passare attraverso il firewall del sistema operativo installato sul server.
>
> Per maggiori informazioni, consulta le seguenti guide: [Configuring the firewall on Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) and [Configuring the firewall on Linux with iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Per aggiungere una regola:**

| ![add-rule-btn](images/enf_add_rule.png) | 
|:--:| 
| Clicca su `Aggiungi una regola`{.action}. |

Per ogni regola (TCP escluso), è necessario scegliere:

| ![add-rule-btn](images/enf_add_rule_other_than_tcp.png) | 
|:--| 
| &bull; Una priorità (da 0 a 19, dove 0 rappresenta la prima regola da applicare, seguita dalle altre) <br>&bull; Un'azione (`Accept`{.action} or `Deny`{.action}) <br>&bull; Il protocollo <br>&bull; Source IP (facoltativo) |

Per ogni regola **TCP**, è necessario scegliere:

| ![add-rule-btn](images/enf_add_rule_tcp.png) | 
|:--| 
| &bull; A priority (da 0 a 19, dove 0 rappresenta la prima regola da applicare, seguita dalle altre) <br>&bull; An action (`Accept`{.action} or `Deny`{.action}) <br>&bull; The protocol <br>&bull; Source IP (optional) <br>&bull; The source port (optional) <br>&bull; The destination port (optional) <br>&bull; The TCP state (optional) <br>&bull; Fragments (optional)|

> [!primary]
> Ti consigliamo di autorizzare il protocollo TCP con un’opzione `established` (per i pacchetti che fanno parte di una sessione precedentemente aperta/avviata), i pacchetti ICMP (per il ping e traceroute) ed eventualmente le risposte DNS UDP dei server esterni (se utilizzi server DNS esterni).
>
> **Esempio di configurazione:**
>
> - Priorità 0: Autorizza TCP `established`
> - Priorità 1: Consenti UDP, porta sorgente 53
> - Priorità 2: Consenti ICMP
> - Priorità 19: Rifiutare l'IPv4

> [!warning]
> Le configurazioni del firewall con la sola modalità "Accept" non sono per niente efficaci. È necessario specificare il traffico che deve essere rilasciato dal firewall. Se non viene creata una regola di tipo "Nega", verrà visualizzato un avviso.
> 

**Abilita firewall:**

| ![activate-desactivate](images/enf_enabled_button_01.png) | 
|:--:| 
| `Attiva`{.action} per attivare |

Dopo la conferma, il firewall verrà attivato.

**Disabilita firewall:**

| ![activate-desactivate](images/enf_enabled_button_04.png) | 
|:--:| 
| `Attiva`{.action} per attivare |

Dopo la conferma, il firewall verrà disattivato.

Si noti che le regole vengono disattivate fino al momento in cui viene rilevato un attacco, quindi vengono attivate. Questa logica può essere utilizzata per regole attive solo quando è in arrivo un attacco ripetuto noto.

### Esempio di configurazione

Per assicurarsi che solo le porte standard per SSH (22), HTTP (80), HTTPS (443) e UDP (53) siano lasciate aperte durante l'autorizzazione dell'ICMP, segui le regole qui sotto:

![Esempio di configurazione](images/exemple.png){.thumbnail}

Le regole sono ordinate da 0 (prima regola letta) a 19 (ultima). La catena di regole si interrompe non appena una regola viene applicata al pacchetto.

Ad esempio, un pacchetto per la porta TCP 80 verrà intercettato dalla regola 2 e le regole che seguono non verranno applicate. Un pacchetto per la porta TCP 25 verrà acquisito solo dall'ultima regola (19), che lo bloccherà perché il firewall non consente la comunicazione sulla porta 25 nelle regole precedenti.

> [!warning]
> La configurazione di cui sopra è solo un esempio e deve essere utilizzata come riferimento solo se le regole non si applicano ai servizi ospitati sul server. È fondamentale configurare le regole del firewall in modo che corrispondano ai servizi ospitati sul server. Una configurazione non corretta delle regole del firewall può causare il blocco del traffico legittimo e l'inaccessibilità dei servizi server.
> 

### Mitigazione degli attacchi - attività del centro di pulitura

La nostra infrastruttura anti-DDoS (VAC) dispone di due modalità di funzionamento: **automatica** e **permanente**. Il processo di mitigazione avviene tramite il centro di filtraggio automatico. È qui che la nostra tecnologia avanzata esamina nel dettaglio i pacchetti e cerca di rimuovere il traffico DDoS, consentendo il passaggio del traffico legittimo.

- **La mitigazione automatica** è quella predefinita: tutti gli IP OVHcloud sono sottoposti a mitigazione automatica. Solitamente, questa è la scelta migliore per i vostri servizi. In caso di rilevamento di traffico malevolo, il centro di filtraggio si attiva. Questo stato è indicato dallo stato "Forced" (Forzato) per un determinato indirizzo IP. In questo momento è attivo anche Edge Network Firewall. La situazione torna alla normalità quando l'attacco viene mitigato e non si osservano più attività sospette.

- **La modalità di mitigazione permanente** può essere abilitata o disabilitata tramite lo Spazio Cliente OVHcloud. Con la mitigazione permanente, applichi in modo permanente il primo livello di filtraggio in modo che tutto il traffico passi sempre attraverso il sistema di mitigazione prima di raggiungere il server. Si consiglia di non attivare questa opzione per periodi di tempo più lunghi, a meno che non si verifichi un jitter della latenza dovuto al reindirizzamento del traffico troppo frequente da parte del centro di scrubbing.

Rispetto alla modalità automatica, il livello di protezione aumenta di **no** quando questa modalità è attivata.

Per attivarlo, eseguire la procedura seguente:

- Clicca sul menu `Bare Metal Cloud`{.action}.
- Vai su `Network`{.action} nella barra laterale sinistra.
- Accedi alla sezione `IP`{.action}.

| ![menu-ipv4](images/mitigation_menu.png) | 
|:--:| 
| A questo punto, clicca sul pulsante `...`{.action} a destra dell'IPv4 corrispondente. |


| ![mitigation-option](images/mitigation_menu_step_2.png) | 
|:--:| 
| Seleziona `Mitigazione: modalità permanente`{.action}. |


> [!success]
> **Suggerimenti**
>
> È possibile creare regole del firewall di tipo "attack-only", valide solo dopo aver rilevato un attacco. A tale scopo, è necessario creare regole di Edge Network Firewall, ma queste devono essere disattivate.
>

> [!warning]
> Se l'infrastruttura anti-DDoS OVHcloud mitiga un attacco, le regole Edge Network Firewall verranno applicate anche se il firewall è stato disabilitato. Se hai disattivato il firewall, ricorda di eliminare anche le regole.
> 
> La nostra infrastruttura anti-DDoS non può essere disattivata su un servizio. Tutti i prodotti OVHcloud vengono consegnati entro il perimetro di protezione e questo non può essere modificato.
>

## Network Security Dashboard

Per informazioni dettagliate sugli attacchi rilevati e sui risultati delle attività del centro di filtraggio, ti invitiamo a esplorare il nostro [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Conclusioni

Dopo aver letto questo tutorial, dovresti essere in grado di configurare Edge Network Firewall per migliorare la sicurezza dei tuoi servizi OVHcloud.

## Per saperne di più

- [Proteggere un server game con il firewall dell’applicazione](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
