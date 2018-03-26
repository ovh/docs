---
title: Attivare la modalità Rescue sui VPS
slug: rescue
excerpt: Come riavviare il tuo VPS OVH in modalità Rescue
section: Diagnostica e modalità Rescue
---

**Ultimo aggiornamento: 19/01/2018**

## Obiettivo

La modalità Rescue è una funzione che consente di avviare il tuo server su una configurazione OVH alternativa, permettendoti di montare il disco come una partizione separata. 

Il Rescue mode offre il vantaggio di poter effettuare test o manipolazioni al momento più opportuno, ad esempio quando queste operazioni hanno l’impatto minore sull’attività del tuo server. Inoltre, è utile per correggere eventuali errori nella configurazione iniziale che potrebbero impedire al server di accedere correttamente al disco.

> [!warning]
>
> Se alcuni dei tuoi servizi sono in produzione, attivando il Rescue mode non saranno più disponibili fino a quando questa modalità non verrà disabilitata e la tua macchina riavviata.
> 

**Questa guida ti mostra la procedura per riavviare il tuo VPS OVH in modalità Rescue.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager)

## Procedura

Accedi alla sezione `Dedicato`{.action} dello Spazio Cliente OVH e seleziona il tuo VPS nella colonna di sinistra:

![Sezione VPS nello Spazio Cliente OVH](images/vps_rescue1.png){.thumbnail}

Clicca sul pulsante `Modalità rescue`{.action} a destra. Si apre una nuova finestra: per continuare, clicca su `Conferma`{.action}.

![Conferma della modalità Rescue](images/vps_rescue2.png){.thumbnail}

Il riavvio potrebbe richiedere alcuni minuti. Una barra di progressione ti mostrerà lo stato di avanzamento del processo:

![Stato di avanzamento della modalità Rescue](images/rescue_task.png){.thumbnail}

> [!primary]
>
> A operazione completata, riceverai un’email con le credenziali SSH per accedere in Rescue mode. Una copia del messaggio è disponibile nello Spazio Cliente OVH, sezione `Il tuo account`{.action} > `Email ricevute`{.action}.
> 

A questo punto puoi accedere al tuo VPS in modalità Rescue tramite il protocollo SSH. Una volta effettuate le operazioni necessarie, esegui il reboot della tua macchina sul disco principale cliccando su `Riavvia il tuo VPS`{.action}.

## Per saperne di più

[Introduzione a SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.