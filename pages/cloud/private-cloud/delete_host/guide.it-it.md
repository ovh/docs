---
title: 'Rimuovere un server host'
slug: rimuovere-server-host
excerpt: 'Scopri come rimuovere un server host da un’infrastruttura Private Cloud'
legacy_guide_number: '1442308'
section: 'Funzionalità OVH'
---

**Ultimo aggiornamento: 24/07/2020**

## Obiettivo

In alcuni casi eliminare un server host può risultare utile, ad esempio per restituire un host di <i>spare</i> inutilizzato o per passare a una gamma superiore.

**Questa guida ti mostra come rimuovere in modo sicuro un server host da un’infrastruttura Private Cloud.**

## Prerequisiti

* Disporre di una soluzione [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external}
* Avere accesso all’interfaccia di gestione vSphere


## Procedura

La rimozione di un server host si svolge in due step: l’attivazione della modalità manutenzione di questa risorsa e successivamente la rimozione della stessa.

### Attiva la modalità manutenzione

Una volta effettuata la connessione a vSphere, accedi all’inventario dei tuoi server host e cluster. Seleziona il server host interessato con un semplice click con il tasto destro del mouse e poi scegli `Maintenance Mode`{.action} e `Enter Maintenance Mode`{.action}. Nel caso in cui siano presenti macchine virtuali (VM) in funzione su questo server host, saranno automaticamente salvate su un altro server all’interno del tuo cluster (modalità HA e DRS attivate).

![Attivazione della modalità manutenzione](images/removehost01.png){.thumbnail}

Nella finestra di dialogo, conferma il passaggio in modalità manutenzione cliccando su `OK`{.action}.

![Conferma della modalità manutenzione](images/removehost02.png){.thumbnail}


Puoi seguire lo stato di avanzamento dell’operazione nell’area **Recent Tasks**.

![Controllo della modalità Maintenance](images/removehost03.png){.thumbnail}


### Rimuovi il server host

Una volta che il server è in modalità manutenzione, fai un click con il tasto destro del mouse e seleziona `OVHcloud`{.action}, poi clicca su `Remove this host`{.action}. 

![Rimuovere l’host](images/removehost04.png){.thumbnail}

Nella nuova finestra, conferma la rimozione cliccando su `Next`{.action}.

![Conferma della rimozione](images/removehost05.png){.thumbnail}

La richiesta di rimozione è adesso in fase di elaborazione.

![Convalida della rimozione](images/removehost06.png){.thumbnail}

Puoi seguire lo stato di avanzamento della rimozione del server host nell’area **Recent Tasks**.

![Controllo dell’attività di rimozione](images/removehost07.png){.thumbnail}

Il server host verrà rimosso entro pochi minuti e non sarà più visibile. 

> [!primary]
>
> Se si aggiungono directory o file che non erano inizialmente presenti nello storage locale del server, la rimozione non sarà possibile a causa di un errore. Soltanto le directory di base e i file vSwap consentono di eseguire questa operazione.
> 


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
