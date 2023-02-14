---
title: Gestisci le tue istanze Public Cloud tramite Horizon
slug: gestire-istanze-public-cloud
excerpt: Come gestire le tue istanze attraverso l'interfaccia Horizon
section: Gestione da Horizon
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 03/02/2022**

## Obiettivo

Oltre allo Spazio Cliente OVHcloud, è possibile gestire anche i progetti Public Cloud OVHcloud dall'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/). Da questa interfaccia è possibile visualizzare tutti i progetti di infrastruttura (istanze, backup, dischi, chiavi SSH, ecc…) e storage (inclusa la lista dei container).

**Questa guida ti mostra come gestire le tue istanze Public Cloud tramite l'interfaccia Horizon.**

## Prerequisiti

- Aver creato un'istanza Public Cloud dallo [Spazio Cliente OVHcloud](../primi-passi-public-cloud/) o tramite l'[interfaccia Horizon](https://docs.ovh.com/it/public-cloud/crea_unistanza_con_horizon/).
- [Aver creato una chiave SSH](../creare-chiave-ssh/).

## Procedura

### Accedi all'interfaccia di gestione dell'istanza

Per prima cosa accedi all'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/).

Diversamente dallo Spazio Cliente OVHcloud, Horizon separa i tuoi servizi in base alla localizzazione. Puoi scegliere la regione dal menu in alto a sinistra:

![public-cloud](images/region2021.png){.thumbnail}

Clicca sul menu `Compute`{.action} a sinistra e seleziona `Instances`{.action}. 

L’interfaccia mostra la tua infrastruttura e diverse informazioni relative all’istanza:

  * modello dell'istanza (*Flavor*)
  * nome, stato di alimentazione (Power State) e tempo trascorso dalla sua creazione (*Time since created*)
  * l'indirizzo IPv4 e IPV6 della tua istanza
  * la sua rete privata associata e il suo indirizzo IPv4 privato
  * stato (*Status*)
  * l'immagine utilizzata per l'installazione dell'istanza (se applicabile)

![public-cloud](images/options2022.png){.thumbnail}

**Launch Instance** 

Questa opzione permette di creare un'istanza. Per maggiori informazioni, consulta [questa guida](https://docs.ovh.com/it/public-cloud/crea_unistanza_con_horizon/).

**Delete Instances**

Questa opzione ti permette di eliminare diverse istanze allo stesso tempo, basta selezionare la casella a sinistra del nome dell'istanza.

**More Actions**

Questo menu ti permette di eseguire queste operazioni su una o più istanze. Per prima cosa, seleziona la casella a sinistra del nome dell'istanza:

- Start Instances: questa opzione permette di riavviare una o più istanze in stato *shutoff* o *off*.
- Shut Off Instances: questa opzione permette di sospendere una o più istanze.
- Soft Reboot Instance: questa opzione ti permette di eseguire un reavvio software su una o più istanze.

**Create Snapshot**: Questa opzione permette di creare uno Snapshot (istantaneo) dell'istanza. Per maggiori informazioni, consulta [questa guida](https://docs.ovh.com/it/public-cloud/gestisci_gli_snapshot_di_unistanza_con_horizon/).

### Modifica un'istanza

Nell'interfaccia di gestione dell'istanza, seleziona l'opzione che preferisci nel menu a tendina.

![public-cloud](images/list2022.png){.thumbnail}

- Attach Interface: questa opzione permette di aggiungere una o più interfacce private alla tua istanza tramite la VLAN. Per maggiori informazioni, consulta [questa sezione](https://docs.ovh.com/it/public-cloud/public-cloud-vrack/#aggiunta-di-uninterfaccia-privata) della guida.
- Detach Interface: questa opzione permette di eliminare un'interfaccia associata a un'istanza. Per maggiori informazioni, consulta [questa sezione](https://docs.ovh.com/it/public-cloud/public-cloud-vrack/#elimina-uninterfaccia-privata) della guida.
- Edit Instance: questa opzione permette di modificare il nome dell'istanza e i [gruppi di sicurezza](https://docs.ovh.com/it/public-cloud/configure-security-group-horizon/).

> [!warning]
> Le opzioni in rosso indicano la possibilità di perdita di dati durante il processo. Prima di apportare modifiche all'istanza, assicurati di disporre sempre di un backup dei dati.
>

### Ridimensionare un'istanza

Con il Public Cloud, puoi aumentare le risorse della tua istanza in modo semplice e veloce.

> [!warning]
>
> Per i modelli classici è possibile solo il ridimensionamento verso un modello superiore.
> Questa operazione comporta anche l'interruzione dell'istanza durante l'operazione.
> 

> [!success]
>
> Le istanze di tipo *flex* permettono il ridimensionamento verso i modelli superiori o inferiori grazie a una dimensione di disco unica.
> 

Seleziona `Resize Instance`{.action} nel menu a tendina dell'istanza pertinente.

![Resize instance](images/resizeinstance2022.png){.thumbnail}

* Scelta del template (*Flavor Choice*): questa sezione indica il template attuale (*old flavor*) e ti permette di selezionare un nuovo template (*new flavor*) per la risorsa dell'istanza.

![public-cloud](images/flavorchoice.png){.thumbnail}

* Dettagli del template (*Flavor Details*). In questa sezione vengono mostrate le risorse associate al template scelto. 
* Limiti del Progetto (*Project Limits*). Visualizza qui le risorse occupate rispetto alle risorse totali assegnate al progetto.

> [!warning]
> Ti ricordiamo che è possibile ridimensionare un'istanza solo da un modello Linux a un altro modello Linux e da un modello Windows a un altro modello Windows.
>

* Opzioni avanzate (*Advanced Options*). Questa sezione permette di gestire il partizionamento del disco (*Disk Partition*) e del gruppo di server (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Una volta terminata la configurazione, clicca su `Resize`{.action}.

**Ridimensionamento del disco con Windows**

Attenzione: durante un ridimensionamento di un’istanza Windows, la dimensione della partizione non è automaticamente aggiornata, sarà quindi necessario estenderla utilizzando il disk manager:

Fai click con il tasto destro sul menu `Start`{.action} e avvia la gestione del disco cliccando su `Gestione disco`{.action}.

![public-cloud](images/2980.png){.thumbnail}

Clicca con il tasto destro sulla partizione principale e poi su `Estendi volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

Clicca su `Avanti`{.action} per accedere al `Estensione guidata volume`. Scegli le risorse del disco da estendere e clicca su `Avanti`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Clicca su `Fine`{.action} per confermare la tua scelta.

![public-cloud](images/wizard2021.png){.thumbnail}

La nuova dimensione del disco verrà visualizzata dal gestore del disco.

![public-cloud](images/2979.png){.thumbnail}

### Reinstalla un’istanza

Questa opzione permette di riconfigurare l'istanza su un nuovo database o semplicemente di cambiare il sistema operativo.

> [!alert]
> Questa operazione comporta l'eliminazione dei dati dell'istanza.
> 

Seleziona `Rebuild Instance`{.action} nel menu a tendina dell'istanza.

![public-cloud](images/rebuildinstance.png){.thumbnail}

Seleziona l'immagine per la ricostruzione.<br>
Seleziona il tipo di partizione ("Automatica" o "Manuale"). Questo è facoltativo.<br>
Infine clicca su `Rebuild Instance`{.action}. Questa operazione potrebbe richiedere qualche minuto.

### Sospendi o metti in pausa un'istanza (Shelve or pause an instance)

Per sapere come sospendere o mettere in pausa un'istanza, clicca [qui](https://docs.ovh.com/it/public-cloud/sospendi_o_metti_in_pausa_unistanza/) per consultare la guida specifica a questo metodo.

### Accedi alla console dell'istanza <a name="console"></a>

In caso di perdita dell'accesso all'istanza a causa di una configurazione scorretta o di un blocco del servizio SSH, è possibile riconfigurare l'istanza utilizzando la console VNC.

> [!primary]
>
> Puoi accedere direttamente alla tua istanza tramite la console VNC. Per contro, è necessario configurare una password per l'utente root.
> Per maggiori informazioni, consulta [questa guida](https://docs.ovh.com/it/public-cloud/imposta_una_password_amministratore/).
> La console VNC può essere utilizzata anche come primo approccio in caso di malfunzionamento, per diagnosticare grazie all'analisi della fase di avvio dell'istanza.
> 

Nel menu a tendina corrispondente all'istanza, seleziona `Console`{.action}.

![public-cloud](images/accessconsole.png){.thumbnail}

A questo punto visualizzi la console dell'istanza.

> [!success]
>
> Se la console non risponde ai record di tastiera, clicca sulla barra dello stato.
> Per uscire dalla modalità a schermo pieno, clicca sul pulsante in ritorno dal browser.
> 

**Console dell'istanza**

![public-cloud](images/console.png){.thumbnail}

### Riavvia un'istanza

Per riavviare un'istanza esistono due metodi:

- Riavvio a caldo (software) (Soft Reboot Instance)
- Riavvio a freddo (hardware) (Hard Reboot Instance)

Nel menu a tendina corrispondente all'istanza, seleziona `Soft Reboot Instance`{.action} o `Hard Reboot Instance`{.action}.

![public-cloud](images/rebootinstance.png){.thumbnail}

Nella nuova finestra, conferma la tua richiesta.

### Elimina un'istanza

Se non hai più bisogno di una delle tue istanze, puoi eliminarla in qualsiasi momento.

> [!alert]
>
> I dati presenti sull'istanza verranno eliminati.
> Se vuoi conservare i dati e riavviare un'istanza identica in seguito, crea un backup di questa istanza.
> 

Nel menu a tendina corrispondente all'istanza, seleziona `Delete Instance`{.action}. 

![public-cloud](images/deleteinstance.png){.thumbnail}

Clicca su `Confirm`{.action} per avviare il processo.

> [!success]
>
> Una volta eliminata, l'istanza non sarà più fatturata e non sarà più in grado di recuperarla.
> 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.