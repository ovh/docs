---
title: Reimpostare una password Windows
slug: reimpostare-una-password-windows
excerpt: Guida alla reimpostazione di una password con Windows
section: Diagnostica e modalità Rescue
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 26/11/2020**

## Obiettivo

È possibile che sia necessario reimpostare una password nel tuo VPS con Windows. Questa guida ti mostra come reimpostare facilmente una password e ripristinare la connessione al tuo VPS.

## Prerequisiti

- Il VPS deve essere in modalità Rescue (per maggiori informazioni, consulta [Attiva la modalità Rescue su un VPS](../rescue)).

## Procedura

Accedi al VPS tramite il VNC dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) con le credenziali di accesso ricevute via email.

Effettua questi comandi per montare il file system remoto:

```sh
ntfsfix /dev/sdb2
mount -t ntfs-3g /dev/sdb2 /mnt
```

A questo punto, avvia la procedura di recupero della password:

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

Stai per visualizzare una lista di utenti. Ti preghiamo di prendere nota dell'account amministratore (o di un account da cui è necessario reimpostare la password). In questo esempio utilizzeremo l'account `Administrator`. Ti ricordiamo che gli ordini sono sensibili alla rottamazione.

```sh
chntpw -u Administrator SAM
```

Clicca su `1`{.action} e `Inserisci`{.action} per cancellare la password. Premi `q`{.action} per uscire dall'ordine di modifica della password. Poi clicca su `y`{.action} per scrivere le modifiche.

A questo punto, è possibile rimuovere il VPS dalla modalità Rescue. (Per maggiori informazioni, consulta la guida [Attiva la modalità Rescue su un VPS](../rescue))

Alla vostra prossima connessione, non sarete obbligati a inserire una password per la sessione di cui avete fatto la modifica della password.

> [!warning]
>
> Lasciare l'account amministratore (o qualsiasi account con diritti elevati) senza password vuote è estremamente rischioso. Accedi immediatamente alla tua installazione di Windows per reimpostare la password.
> 

Dopo aver effettuato l'accesso alla sessione, clicca su `CTRL`{.action} + `ALT`{.action} + `DELETE`{.action} e poi su `Modifica password`{.action}. Se utilizzi VNC, clicca sul pulsante in alto a destra intitolato `Send CtrlAltDel`{.action}.

Lascia il campo `Password` precedente vuoto e scrivi la nuova password due volte. Assicurati che la tua password sia identica.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
