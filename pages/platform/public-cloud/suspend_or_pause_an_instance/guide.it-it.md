---
title: Sospendi o metti in pausa un’istanza
slug: sospendi_o_metti_in_pausa_unistanza
legacy_guide_number: g1781
section: Gestione del progetto
order: 3
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 1 Ottobre 2021**

## Obiettivo

 Durante la configurazione di un'infrastruttura ad alta disponibilità, potresti avere bisogno di interrompere l’esecuzione delle tue istanze per effettuare alcuni test. OpenStack ti permette di sospendere, arrestare o mettere in pausa le tue istanze. In ogni caso, il tuo IP viene mantenuto.

> [!warning]
> Il nome di queste opzioni nello Spazio Cliente OVHcloud è diverso dal nome in OpenStack/Horizon. Se effettui questa operazione utilizzando lo Spazio Cliente OVHcloud, assicurati di selezionare l'opzione più adatta.
>

**Questa guida ti mostra come sospendere, arrestare o mettere in pausa un'istanza.**

## Prerequisiti

- un'[istanza Public Cloud](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/) con la fatturazione **oraria**
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o all'[interfaccia Horizon](https://docs.ovh.com/it/public-cloud/horizon/)
- Conoscenza dell'[API OpenStack](https://docs.ovh.com/it/public-cloud/prepare_the_environment_for_using_the_openstack_api/) e delle [variabili d’ambiente OpenStack](https://docs.ovh.com/it/public-cloud/set-openstack-environment-variables/)

## Procedura

> [!alert]
>
> Queste manipolazioni comportano sempre la fatturazione dell'istanza finché non viene **eliminata**.
>

La tabella qui sotto ti permette di differenziare le opzioni disponibili sulle tue istanze. Prosegui nella lettura di questa guida cliccando sull'opzione che preferisci.

|Termine|Descrizione|Fatturazione|
|---|---|---|
|[Sospendere (*shelve*)](#shelve-instance)|Conserva le risorse e i dati del tuo disco creando uno Snapshot. Tutte le altre risorse sono liberate.|Viene fatto pagare solo lo snapshot.|
|[Arrestare (*suspend*)](#stop-suspend-instance)|Salvare lo stato della macchina virtuale sul disco, le risorse dedicate all'istanza sono sempre riservate.|Riceverai sempre la stessa tariffa per la tua istanza.|
|[Pausare](#pause-instance)|Salva lo stato della macchina virtuale nella RAM, un'istanza sospesa diventa «bloccata».|Riceverai sempre la stessa tariffa per la tua istanza.|

### Sospendere (shelve) un'istanza <a name="shelve-instance"></a>

Questa opzione permette di liberare le risorse dedicate all'istanza Public Cloud, ma l'indirizzo IP resta. I dati del disco locale saranno salvati in un snapshot «istantanea» creata automaticamente una volta che l'istanza è sospesa. I dati archiviati nella memoria e altrove non saranno conservati.

#### Nello Spazio Cliente OVHcloud

Nello Spazio Cliente OVHcloud, vai alla sezione `Public Cloud`{.action}, seleziona il tuo progetto Public Cloud e clicca su `Instances`{.action} nella barra di navigazione a sinistra. 

Clicca su `...`{.action} a destra dell'istanza da sospendere, poi clicca su `Sospesa`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

Nella finestra contestuale, annota il messaggio e clicca su `Conferma`{.action}.

![confirm suspension](images/confirm_suspension.png){.thumbnail}

Una volta completata la procedura, l'istanza si presenta come *Sospesa*.

![sospeso](images/instance_suspended.png){.thumbnail}

Lo snapshot sarà disponibile nella sezione `Instance Backup`{.action}. Un'istantanea chiamata *xxxxx-shelved* è quindi visibile:

![snapshot tab](images/shelved_backup.png){.thumbnail}

#### Dall'interfaccia Horizon

Per continuare, devi [creare un utente per accedere a horizon](../horizon/) e [connetterti all'interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/).

Se hai installato istanze in diverse regioni, assicurati di essere nella localizzazione giusta. Puoi verificarlo nell'angolo superiore sinistro dell'interfaccia Horizon.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Clicca su `Compute`{.action} nel menu a sinistra e seleziona `Instances`{.action}. Seleziona `Shelve Instance`{.action} nel menu a tendina dell'istanza.

![instance shelve](images/shelveinstancehorizon.png){.thumbnail}

Una volta terminata la procedura, l'istanza apparirà come *Shelved Offloaded*.

![istanza riservata](images/newinstancestatushorizon.png){.thumbnail}

Per visualizzare lo snapshot, nel menu `Compute`{.action}, clicca su `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Dalle API OpenStack/Nova

Prima di continuare, si raccomanda di consultare le seguenti guide:

- [Preparare l’ambiente per utilizzare l’API OpenStack](https://docs.ovh.com/it/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Impostare le variabili d’ambiente OpenStack](https://docs.ovh.com/it/public-cloud/set-openstack-environment-variables/)

Una volta che l'ambiente è pronto, esegui questo comando:

```bash
openstack server shelve <UUID server>
 
=====================================

nova shelve <UUID server> 
```

### Riattivare (unshelve) un'istanza

Questa opzione ti permette di riattivare l'istanza per poterla utilizzare. Ti ricordiamo che, una volta completata l'operazione, la fatturazione riprenderà normalmente.

> [!alert] **Azioni sullo snapshot**
>
> Qualsiasi azione sullo snapshot diversa dalla riattivazione (*unshelve*) può essere molto pericolosa per la tua infrastruttura in caso di uso improprio. Quando un'istanza è riattivata (*unshelved*), lo snapshot viene automaticamente eliminata. Non è consigliabile creare una nuova istanza da un snapshot creata in seguito alla Sospesa (*shelve*) di un'istanza.
>
> OVHcloud fornisce i servizi di cui sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell’utente garantire ogni giorno la gestione e la sicurezza del software. In caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida. .
>

#### Nello Spazio Cliente OVHcloud

Nello Spazio Cliente OVHcloud, vai alla sezione `Public Cloud`{.action}, seleziona il tuo progetto Public Cloud e clicca su `Instances`{.action} nella barra di navigazione a sinistra.

Clicca su `...`{.action} a destra dell'istanza e poi clicca su `Riattiva`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

Nella finestra contestuale, annota il messaggio e clicca su `Conferma`{.action}.

Una volta terminato il processo, l'istanza apparirà come *Attivo*.

#### Dall'interfaccia Horizon

Nell'interfaccia Horizon, clicca su `Compute`{.action} nel menu a sinistra e seleziona `Instances`{.action}. Seleziona `Unshelve Instance`{.action} nel menu a tendina dell'istanza.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Una volta terminato il processo, l'istanza apparirà come *Active*.

#### Dalle API OpenStack/Nova

Una volta che l'ambiente è pronto, esegui questo comando:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Arrestare (suspend) un'istanza <a name="stop-suspend-instance"></a>

Questa opzione ti permette di arrestare la tua istanza e salvare lo stato della macchina virtuale sul disco. La memoria sarà anche scritta sul disco.

#### Nello Spazio Cliente OVHcloud

Nello Spazio Cliente OVHcloud, vai alla sezione `Public Cloud`{.action}, seleziona il tuo progetto Public Cloud e clicca su `Instances`{.action} nella barra di navigazione a sinistra.

Clicca su `...`{.action} a destra dell'istanza da arrestare, poi clicca su `Arresta`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Nella finestra contestuale, annota il messaggio e clicca su `Conferma`{.action}.

Una volta completata la procedura, l'istanza apparirà come *Spento*.

Per riattivare l'istanza, effettua gli stessi step indicati in precedenza. Clicca su `...`{.action} a destra dell'istanza e seleziona `Comincia ora`{.action}. In alcuni casi, potrebbe essere necessario riavviare a freddo.

#### Dall'interfaccia Horizon 

Nell'interfaccia Horizon, clicca su `Compute`{.action} nel menu a sinistra e seleziona `Instances`{.action}. Seleziona `Suspend Instance`{.action} nel menu a tendina dell'istanza.

![suspend instance Horizon](images/suspendinstancehorizon.png){.thumbnail}

Compare il messaggio di conferma che l'istanza è stata sospesa.

Per riattivare l'istanza, effettua le stesse operazioni indicate in precedenza. Nella lista a tendina dell'istanza corrispondente, seleziona `Resume Instance`{.action}.

#### Dalle API OpenStack/Nova

Una volta che l'ambiente è pronto, esegui questo comando:

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Per riattivare l'istanza, esegui questo comando:

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Mettere in pausa un'istanza <a name="pause-instance"></a>

Questa operazione è possibile solo nell'interfaccia Horizon o tramite l'API Openstack/Nova. Permette di mettere l'istanza in *standby*

#### Dall'interfaccia Horizon 

Nell'interfaccia Horizon, clicca su `Compute`{.action} nel menu a sinistra e seleziona `Instances`{.action}. Seleziona `Pause Instance`{.action} nel menu a tendina dell'istanza.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Compare il messaggio di conferma che l'istanza è stata messa in pausa.

Per riattivare l'istanza, segui gli step indicati qui sotto. Nella lista a tendina dell'istanza corrispondente, seleziona `Resume Instance`{.action}.

#### Dalle API OpenStack/Nova

Una volta che l'ambiente è pronto, esegui questo comando:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Per riattivare l'istanza, esegui questo comando:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Per saperne di più

[Documentazione OpenStack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
