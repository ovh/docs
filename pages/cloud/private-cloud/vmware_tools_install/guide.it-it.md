---
title: 'Installare VMware Tools'
slug: installare-vmware-tools
excerpt: 'Come installare VMware Tools su Linux e Windows'
section: 'Gestione delle macchine virtuali'
order: 6
legacy_guide_number: g621
---

**Ultimo aggiornamento: 05/08/2019**

## Obiettivi

VMware Tools è un set di utility che consente di ottimizzare le prestazioni di una macchina virtuale e utilizzare molte funzionalità disponibili nei prodotti VMware.

**Questa guida ti mostra le operazioni da effettuare per installare questi strumenti sulla tua macchina virtuale.**

## Procedura

Il processo di installazione di VMware Tools varia in base al sistema operativo della VM.

Per maggiori informazioni sul procedimento da seguire sui diversi sistemi operativi, consulta la [documentazione ufficiale VMware](https://kb.vmware.com/s/article/1014294){.external-link}.

## Linux

### Versioni recenti

La maggior parte delle distribuzioni Linux recenti permettono di installare VMware Tools direttamente tramite il loro gestore di pacchetti, [*Open VM Tools*](https://kb.vmware.com/s/article/2073803){.external-link}.

In questo modo viene garantito il regolare aggiornamento sia di MVware Tools che degli altri componenti del sistema operativo della macchina virtuale. 

Se nella distribuzione utilizzata è disponibile *Open VM Tools*, è possibile trovare il pacchetto con il nome *open-vm-tools*.


Questo metodo di installazione è valido almeno per le seguenti versioni di GNU/Linux:

- Fedora 19 e superiori
- Debian 7.x e superiori
- openSUSE 11.x e superiori
- Ubuntu 12.04 LTS e superiori
- Red Hat Enterprise Linux 7.0 e superiori
- CentOS 7.0 e superiori
- Oracle Linux 7.0 e superiori
- SUSE Linux Enterprise 11 SP4 e superiori


### Versioni precedenti

Per prima cosa è necessario attivare il disco di VMware Tools dal client vSphere: clicca con il tasto destro sulla VM, clicca su `Guest OS`{.action} e seleziona l’opzione `Install VMware Tools`{.action}:



![](images/tools.png){.thumbnail}

A questo punto esegui il mount del volume attivato con il comando:

```sh
>     # mount /dev/cdrom /mnt
```

Estrai l’archivio di VMwareTools. In questo caso, effettueremo l’operazione in `/tmp`.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!success]
>
> Per effettuare l’installazione utilizzando le impostazioni predefinite, aggiungi “default” come argomento nel comando di installazione.
> 

Una volta completata l’installazione, il disco dei Tools verrà eliminato automaticamente dal sistema. 

## Windows

Una volta attivato il volume da vSphere con l’opzione `Install VMware Tools`{.action}, il disco risulta disponibile tra le unità presenti nella VM.

Fai doppio clic sul dispositivo per avviare l’installazione:

![](images/windows.jpg){.thumbnail}

La procedura guidata chiederà di accettare le licenze e selezionare il tipo di installazione (ti consigliamo di scegliere quella completa).

A operazione ultimata sarà necessario riavviare la macchina per rendere effettive le modifiche. Il lettore CD verrà disattivato automaticamente. 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
