---
title: Gestire le istanze Public Cloud
slug: come_utilizzare_la_tua_istanza_public_cloud
excerpt: Come gestire le istanze Public Cloud dallo Spazio Cliente OVHcloud
section: 'Per iniziare'
order: 05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 04/01/2023**

## Obiettivo

Le istanze Public Cloud possono essere gestite direttamente dallo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

**Questa guida ti mostra le operazioni disponibili nello Spazio Cliente OVHcloud per un'istanza Public Cloud.**

## Prerequisiti

- Un [progetto Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud
- Un'[istanza Public Cloud](../primi-passi-public-cloud/) nel tuo progetto
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e apri il tuo progetto `Public Cloud`{.action}. 

### Utilizza l'interfaccia di gestione delle istanze

Clicca sulle `Instances`{.action} nel menu a sinistra. 

![public-cloud](images/compute.png){.thumbnail}

In questa pagina sono elencate tutte le tue istanze Public Cloud e alcune delle loro proprietà:

- l'ID dell'istanza, necessario per alcune chiamate API;
- localizzazione del datacenter, cioè la regione dell'istanza;
- il modello dell'istanza;
- l'immagine, cioè il sistema operativo installato sull'istanza;
- indirizzo IPv4 dell'istanza
- i volumi (dischi) aggiuntivi attualmente associati all'istanza;
- lo stato dell'istanza, che indica se è allo stato `Attivato`.

### Opzioni di gestione sul pannello di controllo dell'istanza

Nella pagina di gestione delle istanze, clicca sul nome dell'istanza.

Seleziona l'opzione scelta nel riquadro di sinistra "Gestione".

![public-cloud](images/management.png){.thumbnail}

Queste azioni sono disponibili anche sulla pagina di gestione delle istanze se cliccate sul pulsante `...`{.action} nella tabella.

#### Modifica la configurazione dell’istanza

Clicca su `Modifica`{.action}.

Visualizzi una nuova pagina con una versione modificata delle opzioni [di creazione dell'istanza](../primi-passi-public-cloud/), in cui puoi modificare questi elementi:

- **Modifica il nome**: per facilitare l'identificazione, assegna un nome all'istanza.
- **Modifica l'immagine**: è possibile scegliere un altro sistema operativo per l'istanza (ricordati che la reinstallazione di un'istanza comporta la cancellazione di tutti i dati).
- **Modifica il modello**: è possibile modificare il modello di istanza Per maggiori informazioni sulle opzioni, consulta [questa guida](../primi-passi-public-cloud/#step-3-crea-unistanza).
- **Modifica il periodo di fatturazione**: è possibile modificare il periodo di fatturazione dell'istanza da una fatturazione oraria a mensile. Per maggiori informazioni, consulta [questa guida](../cambiare-tipo-fatturazione-public-cloud/).

#### Crea un backup di un'istanza

Clicca su `Crea un backup`{.action}.

Per maggiori informazioni, consulta la guida [Salva un'istanza](../effettuare-snapshot-di-un-istanza/). 

#### Crea un backup automatico di un'istanza

Clicca su `Crea un backup automatizzato`{.action}.

Per maggiori informazioni, consulta la guida [Salva un'istanza](../effettuare-snapshot-di-un-istanza/#creare-un-backup-automatizzato-di-unistanza).

#### Sospendi un'istanza

Clicca su `Arrestare`{.action}.

L'azione sospenderà l'istanza. Per maggiori informazioni, consulta la nostra guida [Sospendi o metti in pausa un’istanza](../sospendi_o_metti_in_pausa_unistanza/#nello-spazio-cliente-ovhcloud_2).

Clicca su `Avvia`{.action} per riattivare l'istanza.

#### Utilizza la modalità Rescue

Clicca su `Riavvia in modalità Rescue`{.action}.

Questa operazione attiverà la modalità Rescue dell'istanza. Per maggiori informazioni, consulta la guida [Riavvia la tua istanza in Rescue mode](../riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode/).

#### Riavvia l’istanza

> [!warning]
> L'opzione di riavvia a caldo (soft) non è attualmente disponibile per le istanze Metal.
>

- Clicca su `Riavvia a caldo (soft)`{.action} per effettuare un riavvio a livello software.
- Clicca su `Riavvia a freddo (hard)`{.action} per avviare un riavvio a livello hardware.

Conferma la richiesta di riavvio nella nuova finestra.

#### Sospendere (*shelve*) un'istanza

Clicca su `Sospendere`{.action}.

Questa azione posizionerà l'istanza nello stato "*shelved*", visualizzato come `Suspended`. Per maggiori informazioni sui diversi stati di sospensione dell'istanza, consulta la guida [Sospendi o metti in pausa un’istanza](../sospendi_o_metti_in_pausa_unistanza/#sospendere-shelve-unistanza).

Clicca su `Riattiva`{.action} per ripristinare lo stato `Attivato` dell'istanza.

#### Reinstalla l’istanza

Clicca su `Reinstalla`{.action}.

Questa azione reinstallerà l'istanza con lo stesso sistema operativo, a condizione che l'immagine sia sempre supportata.

Ti ricordiamo che la reinstallazione **elimina tutti i dati** archiviati sulla tua istanza.

#### Elimina l’istanza

Clicca su `Elimina`{.action}.

Questa azione comporta la cancellazione definitiva dell'istanza e di tutti i suoi dati.

Nella nuova finestra, conferma l'operazione.

### Accedi alla console VNC

Clicca sulle `Instances`{.action} nel menu a sinistra. Nella pagina di gestione delle istanze, clicca sul nome dell'istanza nella tabella.

Clicca sulla scheda `Console VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

La console VNC fornisce un accesso diretto all'istanza. Per il corretto funzionamento dell'accesso, è necessario configurare un nome utente e una password sull'istanza. 

Per maggiori informazioni, consulta la nostra guida [Creare e connettersi a un’istanza Public Cloud](../primi-passi-public-cloud/#connect-to-instance) a essa.

## Per saperne di più

[Creare e connettersi a un’istanza Public Cloud](../primi-passi-public-cloud/)

[Presentazione di Horizon](../horizon/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.