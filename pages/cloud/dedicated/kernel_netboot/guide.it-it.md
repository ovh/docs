---
title: Avviare un server su un kernel OVHcloud
slug: kernel-netboot
excerpt: Qui trovi gli step da seguire per avviare il tuo server su un kernel OVHcloud dalla rete
section: Utilizzo avanzato
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 25/02/2022**

## Obiettivo

Il Netboot è un servizio offerto gratuitamente da OVHcloud che permette di avviare il server dedicato OVHcloud su un kernel già compilato. Una volta configurata in questo modo, il tuo server carica automaticamente il kernel dalla rete. Non hai nient'altro da configurare. Questo metodo permette anche di aggiornare molto semplicemente il tuo kernel perché OVHcloud compila l'ultima versione del kernel non appena è disponibile e la mette a disposizione sul Netboot.

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/)
- Avere accesso [allo Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

## Procedura

### Avvia il tuo server dalla modalità Network

> [!primary]
>
> Questa parte è destinata ai server che funzionano su Linux. Per Windows, FreeBSD e le distribuzioni di virtualizzazione, sono possibili solo le modalità di boot sull'hard disk o in modalità Rescue.
>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). accedi alla sezione `Bare Metal Cloud`{.action} e seleziona il tuo server su `Server dedicati`{.action}.

Cerca "Boot" nel riquadro **Informazioni generali** e clicca su `...`{.action} poi su `Modifica`{.action}. 

![Netboot](images/netboot_2022.png){.thumbnail}

Seleziona `Avviare in modalità network`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Seleziona il kernel disponibile e inserisci il Root Device (partizione in cui si trova la partizione radice del tuo server).

Per determinare il Root Device del tuo server, consulta il file /etc/fstab del tuo server.

In SSH:

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

Nel nostro esempio, il Device Root sarà /dev/sda1.

Clicca su `Continua`{.action} e `Conferma`{.action}.

Una volta terminata la modifica, clicca su `...`{.action} a destra di "Stato" nella sezione intitolata **Stato dei servizi.** Clicca su `Riavvia`{.action} per impostare il netboot.

![Netboot](images/netboot_004.png){.thumbnail}

## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
