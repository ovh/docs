---
title: 'Riavvia la tua istanza in modalità di ripristino (Rescue mode)'
excerpt: 'Come riavviare un’istanza in modalità di ripristino (Rescue mode)'
slug: riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode
legacy_guide_number: g2029
---

**Ultimo aggiornamento 04/12/2019**

## Obiettivo

Se non riesci ad accedere alla tua istanza a causa di una configurazione non corretta o perché hai smarrito la tua chiave SSH, puoi accedere ai tuoi dati e correggere i file di configurazione attivando la modalità di ripristino. 

**Questa guida ti mostra come riavviare la tua istanza in modalità Rescue**

## Prerequisiti

* Aver creato un’istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external} nel tuo account OVHcloud
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* Avere accesso all’istanza via SSH con l’utente root

## Procedura

### Attiva la modalità di ripristino

Per prima cosa, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e clicca sul menu `Public Cloud`{.action}.

Poi, seleziona il tuo progetto Public Cloud dal menu a sinistra e vai su Istanze.

![Spazio Cliente](images/compute.png){.thumbnail}

Quindi, clicca sui tre puntini a destra dell’istanza e seleziona `Riavvia in modalità Rescue`{.action}

![Spazio Cliente](images/rescue1.png){.thumbnail}

A questo punto visualizzi la finestra di dialogo “Riavvia in modalità Rescue”. Clicca sul menu a tendina per selezionare la distribuzione Linux che vuoi utilizzare in modalità Rescue e poi clicca sul pulsante `Riavvia`{.action}.

![Spazio Cliente](images/rescue2.png){.thumbnail}

Una volta avviata la modalità di ripristino, visualizzi la password temporanea nella finestra che compare in alto:

![Spazio Cliente](images/rescuedata.png){.thumbnail}


### Accedi ai tuoi dati

In modalità Rescue, i dati della tua istanza sono visibili come un disco aggiuntivo.  Per potervi accedere, è sufficiente configurare il disco seguendo questa procedura:

Accedi alla tua istanza via SSH Una volta connesso, verifica i dischi disponibili:

```
root@instance:/home/admin# lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```

monta la partizione:

```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```

A questo punto i tuoi dati sono accessibili nella cartella /mnt.

### Disattiva la modalità Rescue

Una volta completate queste operazioni, è possibile disattivare la modalità Rescue riavviando normalmente la tua istanza. Per farlo, clicca sulla freccia verso il basso e seleziona `Esci dalla modalità Rescue`{.action}.

![Spazio Cliente](images/rescueexit.png){.thumbnail}

### Attiva la modalità Rescue con le API OpenStack

Per riavviare la tua istanza in Rescue mode utilizzando le API OpenStack, esegui questo comando:

```
# root@server:~# nova rescue INSTANCE_ID
```

Per uscire dalla modalità Rescue, esegui questo comando:

```
# root@server:~# nova rescue INSTANCE_ID
```

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.