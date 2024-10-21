---
title: "Attivare il Rescue mode su un’istanza Public Cloud"
excerpt: "Come attivare e utilizzare il Rescue mode OVHcloud su un’istanza Public Cloud"
updated: 2024-06-03
---

## Obiettivo

Se non riesci ad accedere alla tua istanza a causa di una configurazione non corretta o perché hai smarrito la tua chiave SSH, puoi accedere ai tuoi dati e correggere i file di configurazione attivando la modalità di ripristino. 

**Questa guida ti mostra come riavviare un’istanza Public Cloud OVHcloud in modalità Rescue e accedere ai tuoi file.**

## Prerequisiti

- Aver creato un’istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external} nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!alert]
>
> Ad oggi, la modalità Rescue per le istanze Metal non è disponibile nello Spazio Cliente OVHcloud. Per maggiori informazioni, consulta la guida dedicata al [Rescue mode per le istanze Metal](/pages/public_cloud/compute/rescue_mode_metal_instance).

### Attiva la modalità di ripristino

Per prima cosa, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca sul menu `Public Cloud`{.action}.

Poi, seleziona il tuo progetto Public Cloud dal menu a sinistra e vai su Istanze.

Quindi, clicca sui tre puntini a destra dell’istanza e seleziona `Riavvia in modalità Rescue`{.action}.

![Spazio Cliente](images/rescue2022.png){.thumbnail}

A questo punto visualizzi la finestra di dialogo “Riavvia in modalità Rescue”. Clicca sul menu a tendina per selezionare la distribuzione Linux che vuoi utilizzare in modalità Rescue e poi clicca sul pulsante `Riavvia`{.action}.

![Spazio Cliente](images/rescue2.png){.thumbnail}

Una volta riavviato il Rescue mode, una casella di informazioni mostrerà i metodi di accesso disponibili.

![Spazio Cliente](images/rescuedata.png){.thumbnail}

La tua **password della modalità Rescue** temporanea verrà visualizzata solo nella console VNC. Clicca sull'istanza nella tabella e poi accedi alla scheda `Console VNC`{.action} per recuperarla.

<table><tbody><tr><td><img alt="VNC console" class="thumbnail" src="/images/vncconsole.png" loading="lazy"></td><td><img alt="VNC rescue" class="thumbnail" src="/images/vncrescue.png" loading="lazy"></td></tr></tbody></table>

### Accedi ai tuoi dati

In modalità Rescue, i dati della tua istanza sono visibili come un disco aggiuntivo.  Per potervi accedere, è sufficiente configurare il disco seguendo questa procedura:

Accedi alla tua istanza via [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction). Una volta connesso, verifica i dischi disponibili:

```bash
lsblk
```

Il risultato sarà simile all'output di esempio seguente:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda       8:0    0  2.9G  0 disk
└─sda1    8:1    0  2.9G  0 part /
sdb       8:16   0   25G  0 disk
├─sdb1    8:17   0   24G  0 part
├─sdb14   8:30   0    4M  0 part
├─sdb15   8:31   0  106M  0 part
└─sdb16 259:0    0  913M  0 part
```

In modalità Rescue, `sda` è il disco in modalità Rescue e `sda1` è la partizione di soccorso principale montata su `/`.

In questo esempio, il disco principale è `sdb` e la partizione di sistema è `sdb1` (indicata dalla dimensione).

Monta questa partizione con questo comando:

```bash
mount /dev/sdb1 /mnt/
```

A questo punto i tuoi dati sono accessibili nella cartella `/mnt`.

### Disattiva la modalità Rescue

Una volta completate queste operazioni, è possibile disattivare la modalità Rescue riavviando normalmente la tua istanza. Per farlo, clicca sulla freccia verso il basso e seleziona `Esci dalla modalità Rescue`{.action}.

![Spazio Cliente](images/rescueexit2022.png){.thumbnail}

> [!warning]
> Se il pulsante `Esci dalla modalità Rescue`{.action} non compare in modalità Rescue, consigliamo di aggiornare la scheda.
>

### Attiva la modalità Rescue con le API OpenStack

Per riavviare la tua istanza in Rescue mode utilizzando le API OpenStack, esegui questo comando:

```bash
nova rescue INSTANCE_ID
```

Per uscire dalla modalità Rescue, esegui questo comando:

```bash
nova unrescue INSTANCE_ID
```

## Per saperne di più 

[Come sostituire una coppia di chiavi SSH su un’istanza](/pages/public_cloud/compute/replacing_lost_ssh_key)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.