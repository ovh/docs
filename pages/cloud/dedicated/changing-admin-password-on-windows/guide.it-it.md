---
title: 'Modificare la password amministratore su un server dedicato Windows'
slug: "modificare-password-admin-su-server-windows"
excerpt: 'Come impostare una nuova password amministratore su un server Windows'
section: 'Diagnostica e modalità Rescue'
---

**Ultimo aggiornamento: 30/08/2018**

## Obiettivo

Durante l’installazione o la reinstallazione di una distribuzione Windows, viene fornita una password per accedere come amministratore. Per motivi di sicurezza ti consigliamo di modificarla seguendo la procedura descritta in [questa guida](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/){.external}, valida anche in caso di perdita della password.

**Questa guida ti mostra come effettuare l’operazione in queste due situazioni.**


## Prerequisiti

* Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external} Windows
* Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}


## Procedura

Per prima cosa, avvia il tuo server in modalità Rescue utilizzando l’ambiente WinRescue. In caso di necessità, consulta [questa guida](https://docs.ovh.com/it/dedicated/rescue_mode/){.external} per effettuare l’operazione. 

Dopo aver riavviato il server accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo server e clicca sulla scheda `IPMI`{.action}.

> [!primary]
>
> Per maggiori informazioni sull’utilizzo della funzionalità IPMI, consulta la guida [Utilizzare l’IPMI sui server dedicati](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/){.external}.
>

Attiva la funzione IPMI tramite applet Java o browser. Una volta avviata la sessione IPMI, clicca due volte sul tool NTPWEdit del server sul desktop WinRescue.

![NTPWEdit](images/ntpwdi-tool-01.png){.thumbnail}

Clicca sul pulsante `(Re)open`{.action} per visualizzare la lista degli utenti disponibili.

![NTPWEdit](images/ntpwdi-tool-02.png){.thumbnail}

Seleziona l’account root nella lista e clicca sul pulsante `Change password`{.action}.

![NTPWEdit](images/ntpwdi-tool-03.png){.thumbnail}

Infine, inserisci la nuova password, confermala e clicca su `OK`{.action}.

![NTPWEdit](images/ntpwdi-tool-04.png){.thumbnail}

Ora che la password è stata modificata esci dal programma, chiudi la sessione IPMI e riavvia il server in modalità normale.


## Per saperne di più

[Attivare e utilizzare il Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}

[Utilizzare l’IPMI sui server dedicati](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.