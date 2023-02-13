---
title: 'Installare VMware Tools'
slug: installare-vmware-tools
excerpt: 'Come installare VMware Tools su Linux e Windows'
section: 'Gestione delle macchine virtuali'
order: 6
updated: 2022-02-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/02/2022**

## Obiettivo

VMware Tools è un software che migliora le performance di una macchina virtuale e permette di utilizzare numerose funzionalità semplici nei prodotti VMware.

**Questa guida ti mostra le operazioni da effettuare per installare i dispositivi.**

## Prerequisiti

- Avere un utente attivo (creato nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it))

## Procedura

Il processo di installazione di VMware Tools varia in base al sistema operativo della VM. Per maggiori informazioni sul procedimento da seguire sui diversi sistemi operativi, consulta la [documentazione ufficiale VMware](https://kb.vmware.com/s/article/1014294){.external-link}.

### Linux

#### Versioni recenti

La maggior parte delle distribuzioni Linux recenti permettono di installare VMware Tools direttamente tramite il loro gestore di pacchetti, [*Open VM Tools*](https://kb.vmware.com/s/article/2073803){.external-link}.

In questo modo viene garantito il regolare aggiornamento sia di MVware Tools che degli altri componenti del sistema operativo della macchina virtuale. 

Se nella distribuzione utilizzata è disponibile *Open VM Tools*, è possibile trovare il pacchetto con il nome *open-vm-tools*

Questo metodo di installazione è valido almeno per le seguenti versioni di GNU/Linux:

- Fedora 19 e superiori
- Debian 7.x e superiori
- openSUSE 11.x e superiori
- Ubuntu 12.04 LTS e superiori
- Red Hat Enterprise Linux 7.0 e superiori
- CentOS 7.0 e superiori
- Oracle Linux 7.0 e superiori
- SUSE Linux Enterprise 11 SP4 e superiori

#### Versioni precedenti

Per montare il disco dei VMware tools dal client Web Vsphere, clicca con il tasto destro della VM, poi clicca su `Guest OS`{.action} e infine su `Install VMware Tools`{.action}. 

![install VMware Tools](images/tools.png){.thumbnail}

Effettua il mount del volume attivato dal comando:

```sh
>     # mount /dev/cdrom /mnt
```

e decomprimere l'archivio di VMwareTools. In questo caso, effettueremo l’operazione in /tmp.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!primary]
>
> Se vuoi rispondere di default alle risposte proposte e non essere interrotto durante l'installazione, aggiungi "default" alla linea di installazione.
> 

Per effettuare l’installazione utilizzando le impostazioni predefinite, aggiungi “default” come argomento nel comando di installazione.

Una volta completata l’installazione, il disco dei Tools verrà eliminato automaticamente dal sistema. 

### Windows

Una volta attivato il volume con l'opzione "Install VMware Tools", il disco è reperibile nella "postazione di lavoro" della VM. Fai doppio clic sul dispositivo per avviare l’installazione:

![VMware tools windows](images/windows.jpg){.thumbnail}

L'assistente all'installazione chiederà di accettare le licenze e il tipo di installazione da scegliere (ti consigliamo di installare completamente).

Una volta terminata l'installazione, ti proporrà di riavviare la macchina per tener conto delle modifiche. Il lettore CD sarà smontato automaticamente al termine dell'installazione.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
