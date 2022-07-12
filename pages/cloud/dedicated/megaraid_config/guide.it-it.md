---
title: Configura il tuo MegaRAID in RAID 0
slug: using-the-maximum-amount-of-disk-space
excerpt: "Come configurare i dischi del tuo server in RAID 0, per sfruttare il massimo dello spazio disponibile"
section: RAID e dischi
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 08/07/2022**
 
## Obiettivo

Il RAID (Redundant Array of Independent Disks) è un insieme di tecniche che attenuano la perdita di dati su un server, replicando le informazioni su più dischi.

Il livello di RAID predefinito dei server OVHcloud è il RAID 1 che raddoppia il volume occupato dai tuoi dati, riducendo lo spazio disponibile.

**Questa guida ti mostra come configurare i dischi del tuo server in RAID 0, per sfruttare il massimo dello spazio disponibile.**

> [!warning]
> 
> Attenzione: il RAID 0 non offre **tolleranza ai guasti** né **ridondanza dei dati**. Questa operazione rende molto probabile la perdita di informazioni in caso di malfunzionamento del disco.
> 

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} con un RAID hardware
- Avere accesso al server via SSH come amministratore (root)

## Procedura

### Utilizza lo Spazio Cliente OVHcloud

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}. 

Cerca "Ultimo sistema operativo installato da OVHcloud" nella sezione `Informazioni generali`{.action} e clicca su `...`{.action} poi su `Installare`{.action} un nuovo sistema operativo con la tua configurazione RAID 0 personalizzata.

Seleziona **Installa partendo da un template OVHcloud** e clicca su `Seguente`{.action}.

![MegaRAID](images/server_installation_raid0_1.png){.thumbnail}

Seleziona il sistema operativo da installare e clicca su `Seguente`{.action}.

Seleziona le caselle **Personalizza la configurazione del RAID** hardware e **Personalizza la configurazione delle partizioni**, poi clicca su `Seguente`{.action}.

![MegaRAID](images/server_installation_raid0_2.png){.thumbnail}

Seleziona "raid0" nella lista di RAID a tendina e clicca su `Avanti`{.action}.

![MegaRAID](images/server_installation_raid0_3.png){.thumbnail}

Configura le partizioni in base alle tue esigenze e clicca su `Seguente`{.action}.

![MegaRAID](images/server_installation_raid0_4.png){.thumbnail}

Infine clicca su `Conferma`{.action}.

![MegaRAID](images/server_installation_raid0_5.png){.thumbnail}

Una volta configurato il server, verifica la dimensione delle partizioni accedendo via SSH ed eseguendo il seguente comando:

```sh
df -h
```

### Utilizza la modalità Rescue

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), seleziona il tuo server nella sezione `Bare Metal Cloud`{.action} e poi `Server dedicati`{.action}.

Cerca "Boot" nel riquadro **Informazioni generali** e clicca su `...`{.action} poi su `Modifica`{.action} per cambiare il sistema di avvio.

![MegaRAID](images/rescue_mode_raid0_1.png){.thumbnail}

A questo punto seleziona `Avviare in Rescue mode`{.action} e seleziona `Rescue-customer`{.action} nel menu a tendina.

Nel campo "Ricevi le credenziali della modalità all'indirizzo email:", inserisci un altro indirizzo email se non vuoi che le credenziali di accesso siano inviate all'indirizzo principale del tuo account OVHcloud.

![MegaRAID](images/rescue_mode_raid0_2.png){.thumbnail}

Clicca su `Seguente`{.action} e poi su `Conferma`{.action} nella schermata che appare.

![MegaRAID](images/rescue_mode_raid0_3.png){.thumbnail}

Una volta terminata la modifica, clicca su `...`{.action} a destra di "Stato" nella sezione intitolata **Stato dei servizi.** 

Clicca sul pulsante `Riavvia`{.action} e il server riavvia in modalità Rescue. Questa operazione potrebbe richiedere alcuni minuti. 

![MegaRAID](images/server_installation_raid0_6.png){.thumbnail}

Quando il server si riavvia, accedi al server via SSH utilizzando le credenziali della modalità Rescue. inviati all'indirizzo email principale dell'account o, in caso affermativo, all'indirizzo email fornito in precedenza.

Dalla riga di comando, inserisci questi comandi per eliminare i parametri RAID esistenti. Tutti i dati del RAID verranno eliminati:

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -aAll
```

Per recuperare le credenziali di localizzazione dei dischi, esegui questo comando:

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Inserisci questi comandi per configurare il RAID 0:

```sh
MegaCli -CfgLDAdd -R0[252:0,252:1] -a0
```

In questo esempio, 252 è l'identificativo della cassa del disco.

Dopo aver definito il nuovo livello di RAID, puoi verificare le impostazioni utilizzando il seguente comando:

```sh
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Per saperne di più

[Sostituire a caldo un disco su un server con RAID hardware](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/)

[Sostituire a caldo un disco su un server con RAID software](https://docs.ovh.com/it/dedicated/hotswap-raid-soft/)

[Gestione del RAID hardware](https://docs.ovh.com/gb/en/dedicated/raid-hard/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.