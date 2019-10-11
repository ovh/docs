---
title: 'Aggiornare il kernel su un server dedicato'
slug: aggiornare-kernel-server-dedicato
excerpt: 'Come aggiornare il nucleo di una distribuzione che utilizza un kernel OVH'
section: 'Utilizzo avanzato'
---

**Ultimo aggiornamento: 12/06/2019**

## Obiettivo

OVH offre la possibilità di mantenere facilmente aggiornato il kernel di un sistema Linux grazie al sistema di avvio *netboot*. Tuttavia, è comunque importante effettuare l’upgrade sul disco del sistema operativo a cui è associato il kernel.

**Questa guida ti mostra come aggiornare il nucleo di una distribuzione che utilizza un kernel OVH.**

Tutte le immagini di sistema proposte sui server dedicati OVH utilizzano di default un kernel ottimizzato. Se hai modificato queste immagini e installato un’altra distribuzione, consulta la documentazione ufficiale del sistema operativo utilizzato.


> [!warning]
>
> OVH mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta ad eseguire le operazioni di aggiornamento. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato.
>


## Prerequisiti

- Disporre di un [server dedicato OVH](https://www.ovh.it/server_dedicati/){.external}
- Essere connesso in SSH con l’utente root \[Linux]
- Aver effettuato un backup dei dati (consulta la documentazione ufficiale della tua distribuzione)


## Procedura

### Individua il kernel

Per identificare la versione di kernel utilizzata, esegui il comando:

```sh
uname -r
```

Per esempio:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Nel nostro esempio, la versione del kernel è **4.9.118-xxxx-std-ipv6-64**.

### Aggiorna il kernel utilizzando i pacchetti OVH

Nelle distribuzioni basate su Debian e Red Hat, l’aggiornamento viene effettuato tramite un gestore di pacchetti.


#### 1\. Aggiornare il kernel

Nelle distribuzioni Debian, l’aggiornamento si effettua con il comando:

```sh
apt-get update && apt-get dist-upgrade
```

Nelle distribuzioni basate su Red Hat, l’aggiornamento si effettua con il comando:

```sh
yum update
```

#### 2\. Riavviare il server

Per la corretta applicazione delle modifiche apportate, riavvia il server:

```sh
reboot
```


### Aggiorna il kernel senza utilizzare i pacchetti OVH

#### 1\. Posizionarsi nella directory

L’immagine del kernel deve trovarsi in questa cartella:

```sh
cd /boot
```

#### 2\. Recuperare l’immagine

Senza ricompilare il kernel, è sufficiente scaricare la versione bzlmage desiderata (preferibilmente l’ultima rilasciata). Le immagini sono disponibili all’indirizzo <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

I kernel sono monolitici, cioè non prendono in considerazione i moduli come CEPH, NBD, ZFS...

Se torniamo al nostro esempio, in cui versione kernel era **4.9.118-xxxx-std-ipv6-64**, sarebbe necessario scaricare un’immagine più recente utilizzando il comando:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### 3\. Aggiornare il boot loader (GRUB)

Per aggiornare GRUB, utilizza il comando:

```sh
update-grub
```

La risposta generata sarà di questo tipo:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Verifica che nella configurazione sia presente il file `06_OVHkernel`, necessario per l’aggiornamento,  con questo comando:
>
> `ls /etc/grub.d/`
>

#### 4\. Riavviare il server

Per la corretta applicazione delle modifiche apportate, riavvia il server:

```sh
reboot
```

### Annulla l’operazione

In caso di errori hai la possibilità di annullare le modifiche apportate riavviando il server in [modalità Rescue](https://docs.ovh.com/it/dedicated/rescue_mode/){.external} ed effettuando il mount del sistema con questi comandi:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> Nel nostro esempio il nome della root (o `/`) è *md1*, ma potrebbe anche essere diverso.
> 
> Per verificare il nome della tua root, utilizza il comando `fdisk` o `Isblk`.
>

```sh
munt -o rbind /dev/ mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Posizionati nella cartella `/boot` ed elimina gli ultimi file installati (comando `rm`).

Nel nostro esempio, è consigliato eseguire il comando:

```sh
rm bzlmage-4.14.13-xxxx-st-ipv6-64
```

e aggiornare nuovamente il boot loader:

```sh
update-grub
```

A questo punto, esci dalla modalità Rescue (riavvio da disco) ed effettua un reboot software con il comando:

```sh
reboot
```

Assicurati che l’aggiornamento sia stato completato correttamente e verifica la versione del kernel installata tramite il comando:

```sh
uname -r
```

> [!primary]
>
> Nell’ambito delle vulnerabilità Meltdown e Spectre, è possibile verificare dal sito ufficiale della distribuzione utilizzata se la nuova versione del kernel sia protetta da queste minacce.
>
> In caso di necessità, esistono diversi tool (ad esempio, <https://github.com/speed47/spectre-meltdown-checker>) che permettono di sapere se il kernel in uso è vulnerabile o meno.
>
> **Ti ricordiamo però che OVH non può garantire l’affidabilità di tool esterni, pertanto il loro utilizzo è sotto la tua completa responsabilità.**
>

## Per saperne di più

[Attivare e utilizzare il Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}

[Informazioni sulle vulnerabilità Meltdown e Spectre](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external} (in inglese)

[Aggiornamento in seguito alla vulnerabilità Meltdown e Spectre per sistema operativo](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external} (in inglese)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.