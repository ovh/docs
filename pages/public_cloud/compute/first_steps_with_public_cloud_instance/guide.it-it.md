---
title: 'Gestire le istanze Public Cloud'
excerpt: 'Scopri come gestire le istanze Public Cloud dallo Spazio Cliente OVHcloud'
updated: 2026-02-24
---

## Obiettivo

Puoi gestire le tue istanze Public Cloud nel tuo [Spazio Cliente OVHcloud](/links/manager).

**Questa guida descrive le operazioni disponibili nello Spazio Cliente OVHcloud per un'istanza Public Cloud.**

## Prerequisiti

- Un [progetto Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud
- Un'[istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) nel tuo progetto

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedura

### Utilizzare l'interfaccia di gestione delle istanze

Clicca su `Istanze`{.action} nel menu a sinistra.

Questa pagina mostra tutte le tue istanze Public Cloud e alcune delle loro proprietà:

- l'ID dell'istanza, necessario per alcune chiamate API;
- la localizzazione del datacenter, cioè la regione dell'istanza;
- il modello dell'istanza;
- l'immagine, cioè il sistema operativo installato sull'istanza;
- l'indirizzo IPv4 dell'istanza;
- l'indirizzo privato attualmente associato all'istanza;
- i volumi (dischi) aggiuntivi attualmente associati all'istanza;
- lo stato dell'istanza, indicante se è nello stato `Attivato`.

### Opzioni di gestione sulla dashboard dell'istanza

Dalla pagina di gestione delle istanze, clicca sul nome dell'istanza interessata.

Accederai alla pagina `Informazioni generali`, che centralizza i principali dettagli e lo stato di funzionamento della tua istanza (stato, risorse, rete, accesso e metadati).

Alcune di queste operazioni sono disponibili anche dalla pagina di gestione delle istanze, tramite il pulsante `...`{.action} nella tabella.

#### Modificare la configurazione di un'istanza

Clicca su `Modifica l'immagine`{.action} o `Modifica il modello`{.action}.

Puoi anche aprire `Azioni aggiuntive`{.action} e selezionare `Modifica`{.action}.

La nuova pagina presenta una versione modificata delle opzioni [di creazione dell'istanza](/pages/public_cloud/compute/public-cloud-first-steps), in cui puoi modificare i seguenti elementi:

- **Modificare il nome**: puoi assegnare un nome all'istanza per facilitarne l'identificazione.
- **Modificare l'immagine**: puoi scegliere un altro sistema operativo per l'istanza (ricorda che la reinstallazione di un'istanza comporterà l'eliminazione di tutti i dati in essa contenuti).
- **Modificare il modello**: puoi cambiare il modello di istanza. Consulta [questa guida](/pages/public_cloud/compute/public-cloud-first-steps#model) per maggiori informazioni sulle opzioni.
- **Modificare il periodo di fatturazione**: puoi modificare il periodo di fatturazione dell'istanza da una fatturazione oraria a mensile. Consulta [questa guida](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) per maggiori informazioni.

#### Creare un backup di un'istanza

Clicca su `Crea un backup`{.action}.

Consulta la guida [Salvare un'istanza](/pages/public_cloud/compute/save_an_instance) per maggiori informazioni.

#### Eliminare un'istanza

Clicca su `Elimina`{.action}.

Questa azione comporterà l'eliminazione definitiva dell'istanza e di tutti i dati in essa contenuti.

Conferma la richiesta di eliminazione nella finestra che appare.

> [!warning]
> L'eliminazione di un'istanza non comporta l'eliminazione automatica di tutte le opzioni ad essa associate (storage, snapshot, backup, ecc...). Assicurati che tutte le altre opzioni associate all'istanza siano eliminate per interrompere la fatturazione.
>

#### Associare un volume

Clicca su `Associa un volume`{.action}.

Seleziona il volume da associare all'istanza, quindi clicca su `Conferma`{.action}. Una volta associato, il volume è immediatamente disponibile e può essere montato dal sistema operativo dell'istanza.

#### Modificare il reverse DNS

Clicca su `⋮`{.action} e poi su `Modifica il reverse DNS`{.action}.

Consulta la guida [Configurare il DNS inverso di un'istanza Public Cloud](/pages/public_cloud/compute/setup_instance_reverse) per maggiori informazioni.

#### Configurare il firewall

Clicca su `⋮`{.action} e poi su `Configura il firewall`{.action}.

Consulta la guida [Attivare e configurare il Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) per maggiori informazioni.

#### Gestire le reti private

Clicca su `⋮`{.action} e poi su `Gestisci le reti private`{.action}.

Consulta la guida [Creare una rete privata con Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) per maggiori informazioni.

#### Associare una rete

Clicca su `⋮`{.action} e poi su `Associa una rete`{.action}.

Seleziona la rete desiderata dall'elenco a discesa, quindi clicca su `Conferma`{.action}.

#### Azioni aggiuntive

Clicca su `Azioni aggiuntive`{.action}

##### Creare un backup automatico di un'istanza

Clicca su `Crea un backup automatico`{.action}.

Consulta la guida [Salvare un'istanza](/pages/public_cloud/compute/save_an_instance#creare-un-backup-automatizzato-di-unistanza) per maggiori informazioni.

##### Arrestare un'istanza

Clicca su `Arresta`{.action}.

Questa operazione metterà l'istanza nello stato `Spenta`, ma continuerai a pagare lo stesso prezzo per l'istanza. Consulta la nostra guida [Sospendere o mettere in pausa un'istanza](/pages/public_cloud/compute/suspend_or_pause_an_instance#arrestare-unistanza) per maggiori informazioni.

Clicca su `Avvia`{.action} per riattivare l'istanza.

##### Utilizzare la modalità Rescue

Clicca su `Riavvia in modalità Rescue`{.action}.

Questa operazione attiverà la modalità Rescue dell'istanza. Consulta la nostra guida [Come attivare la modalità Rescue su un'istanza Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) per informazioni dettagliate.

##### Riavviare un'istanza

> [!warning]
> L'opzione di riavvio a caldo (soft) non è attualmente disponibile per le istanze Metal.
>

- Clicca su `Riavvia a caldo (soft)`{.action} per effettuare un riavvio a livello software.
- Clicca su `Riavvia a freddo (hard)`{.action} per avviare un riavvio a livello hardware.

Conferma la richiesta di riavvio nella finestra che appare.

##### Sospendere (*shelve*) un'istanza

Clicca su `Sospendi`{.action}.

Questa operazione metterà l'istanza nello stato « *shelved* », visualizzato come `Sospesa`. Consulta la nostra guida [Sospendere o mettere in pausa un'istanza](/pages/public_cloud/compute/suspend_or_pause_an_instance#sospendere-shelve-unistanza) per maggiori informazioni sui diversi stati di sospensione di un'istanza.

Clicca su `Riattiva`{.action} per ripristinare lo stato `Attivato` dell'istanza.

##### Reinstallare un'istanza

Clicca su `Reinstalla`{.action}.

Questa azione reinstallerà l'istanza con lo stesso sistema operativo, a condizione che l'immagine sia ancora supportata.

Ricorda che la reinstallazione **elimina tutti i dati** attualmente archiviati sulla tua istanza.

### Accedere alla console VNC <a name="accessvnc"></a>

Clicca su `Istanze`{.action} nel menu a sinistra. Nella pagina di gestione delle istanze, clicca sul nome dell'istanza nella tabella.

Clicca sulla scheda `Console VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

La console VNC fornisce un accesso diretto alla tua istanza. Per il corretto funzionamento di questo accesso, devi prima configurare un nome utente e una password sull'istanza.

Consulta la nostra guida [Creare e connettersi a un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console) per maggiori informazioni.

## Per saperne di più

[Creare e connettersi a un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Presentazione di Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).
