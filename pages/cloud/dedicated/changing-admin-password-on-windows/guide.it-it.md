---
title: 'Modificare la password amministratore su un server dedicato Windows'
slug: modificare-password-admin-su-server-windows
excerpt: 'Scopri come modificare la password amministratore su un server Windows'
section: 'Diagnostica e rescue mode'
---

**Ultimo aggiornamento: 26/10/2018**

## Obiettivo

Durante l’installazione o la reinstallazione di un sistema operativo Windows, ti viene fornita una password per accedere come amministratore. Ti suggeriamo di modificarla, come spiegato nella nostra guida [Mettere in sicurezza un server dedicato](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/){.external}. Può anche accadere che tu perda la password e abbia bisogno di modificarla.

**Questa guida ti mostra come modificare la password amministratore del tuo server.**


## Prerequisiti

* Possedere un [server dedicato](https://www.ovh.it/server_dedicati/){.external} Windows
* Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}


## Procedura

Per prima cosa, avvia il tuo server in modalità rescue utilizzando l’ambiente WinRescue. Se necessiti assistenza, consulta la nostra guida relativa sulla [modalità rescue](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}. 

Dopo aver riavviato il server, seleziona la scheda `IPMI`{.action} sulla pagina del server nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!primary]
>
> Per informazioni più dettagliate sull’utilizzo della funzione IPMI, consulta la guida [Utilizzare l’IPMI sui server dedicati](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/){.external}.
>

Successivamente, attiva la funzione IPMI tramite l’applet Java o il tuo browser. Una volta avviata la sessione IPMI, fai doppio click sul programma NTPWdit del server sul desktop WinRescue.

![NTPWdi](images/ntpwdi-tool-01.png){.thumbnail}

Poi clicca sul pulsante `(Re)open`{.action} per visualizzare la lista degli account utenti disponibili.

![NTPWdi](images/ntpwdi-tool-02.png){.thumbnail}

Seleziona l’account utente root nella lista e clicca sul pulsante `Change password`{.action}.

![NTPWdi](images/ntpwdi-tool-03.png){.thumbnail}

Infine, inserisci la nuova password due volte e clicca su `OK`{.action}.

![NTPWdi](images/ntpwdi-tool-04.png){.thumbnail}

La tua password è stata modificata. Esci dal programma, chiudi la sessione IPMI e riavvia il server in modalità normale.


## Per saperne di più

[Rescue Mode](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}

[Utilizzare l’IPMI sui server dedicati](https://docs.ovh.com/it/dedicated/utilizzo-ipmi-server-dedicati/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.