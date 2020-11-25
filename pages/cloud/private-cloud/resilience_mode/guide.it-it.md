---
title: 'Utilizzare la modalità resilienza'
slug: modalita-resilienza
excerpt: 'Come impostare la funzionalità resilienza di OVH'
legacy_guide_number: '7766742'
section: 'Funzionalità OVHcloud'
---

**Ultimo aggiornamento: 12/12/2018**

## Obiettivo

La modalità resilienza è un tool sviluppato da OVH che simula un guasto su uno dei tuoi server host, al fine di verificare che i sistemi di tipo *High Availability* (HA) e *Fault Tolerance* (FT) funzionino correttamente in un cluster **di sviluppo**.

**Questa guida ti mostra come impostare la modalità resilienza di OVH.**

## Prerequisiti

* Disporre di un piano [Private Cloud](https://www.ovh.it/private-cloud/){.external}
* Avere accesso all’interfaccia di gestione vSphere



## Procedura

Come prima cosa assicurati che:
- il server host si trovi all’interno di un cluster
- l'opzione High Availability (HA) sia stata attivata
- un altro server host all’interno del cluster sia disponibile e in funzione

> [!warning]
>
> Questo è un test per un **ambiente di sviluppo**. Non eseguire questo tipo di operazione in un **ambiente di produzione**.
> 


### Attiva la modalità resilienza

Una volta connesso a vSphere, accedi all’inventario dei tuoi server host e cluster. Clicca con il tasto destro sul server host in cui vuoi attivare la modalità di resilienza, poi seleziona `OVH Private Cloud`{.action} > `Resilience`{.action}.

![Fai click con il tasto destro del mouse sull’host per attivare la modalità resilienza.](images/resilience_01.png){.thumbnail}

Dopo aver verificato di rispettare tutti i prerequisiti, clicca sul pulsante `Next`{.action}.

![Verifica dei prerequisiti e conferma.](images/resilience_02.png){.thumbnail}

Prima di avviare il test è necessario accettare le condizioni di utilizzo. Dopo aver selezionato la casella `I accept the terms of the failure simulation agreement`{.action}, clicca sul pulsante `Next`{.action}.

![Condizioni di Utilizzo del servizio](images/resilience_03.png){.thumbnail}

La richiesta di attivazione è stata inviata correttamente.

![Attivazione della modalità resilienza in corso.](images/resilience_04.png){.thumbnail}

Nel giro di pochi istanti il server host non sarà più disponibile.

![Host non disponibile](images/resilience_05.png){.thumbnail}


### Disattiva la modalità resilienza

Per completare la simulazione, clicca di nuovo su `OVH Private Cloud`{.action} > `Resilience`{.action}.

![Completamento della simulazione](images/resilience_06.png){.thumbnail}

La richiesta di disattivazione è stata inviata correttamente.

![Disattivazione della modalità resilienza in corso.](images/resilience_07.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.