---
title: Scegli la manutenzione pianificata su Hosted Private Cloud
excerpt: "Questa guida ti mostra come impostare una manutenzione programmata sul tuo servizio Hosted Private Cloud powered by VMware"
slug: maintenance-rescheduling
section: Funzionalità OVHcloud
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 30/11/2022**

## Obiettivo

In caso di manutenzione programmata sull'Hosted Private Cloud, riceverai un'email di notifica per avvisarti della data del ripristino. Se non è necessario, ad esempio per esigenze di produzione, è possibile aggiornare il servizio a una data da te scelta tramite lo Spazio Cliente OVHcloud o l'API OVHcloud.

> [!primary]
> Cerchiamo di adattarci il più possibile al tipo di utilizzo dell'infrastruttura e ai tuoi vincoli. A volte, però, è necessario pianificare interventi di manutenzione per i quali non sarà possibile modificare la data e/o l'ora (interventi di manutenzione che coinvolgono più clienti, interventi urgenti per evitare un incidente, ecc...).
>
> Quando una data di manutenzione può essere modificata da te, le nuove date proposte sono incluse in un intervallo di tempo ridotto.

**Questa guida ti mostra come aggiornare la data di una manutenzione programmata sul tuo Hosted Private Cloud powered by VMware dallo Spazio Cliente OVHcloud o tramite l'API OVHcloud.**

## Prerequisiti

- Aver ricevuto un'email di notifica di manutenzione che indica specificamente che è possibile "**modificare la data di esecuzione della manutenzione**" In caso contrario, la data della manutenzione non può essere modificata.
- Essere contatto amministratore o tecnico dell'infrastruttura [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o all'[interfaccia di gestione dei servizi via API](https://eu.api.ovh.com/).

## Procedura

> [!success]
> Le email inviate da OVHcloud sono accessibili anche dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).<br>
> Clicca sul tuo nome in alto a destra e poi su `Email di servizio`{.action} nel menu di destra.

### Dallo Spazio Cliente

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) con un account amministratore.

Nel menu `Hosted Private Cloud`{.action}, clicca sulla scheda `Operazioni`{.action}. Seleziona `Da fare`{.action} nel menu a tendina che permette di filtrare le operazioni.

Clicca sui tre puntini in corrispondenza del servizio `...`{.action} e seleziona `Modifica la data di elaborazione`{.action}.

![modifica oraria](images/maintenance-date-edition01.png){.thumbnail}

> [!primary]
> Se il pulsante `Modifica la data di gestione`{.action} è grigio, significa che la manutenzione non può essere differita.

Seleziona una data nel calendario che ti viene presentato. Sono selezionabili solo le date non grigie.<br>
Inserisci manualmente una nuova ora per eseguire il servizio o lascia invariata l'orario inizialmente previsto. Se superi l'ultima ora autorizzata, l'ultima ora di programmazione possibile verrà automaticamente proposta.<br>
**Attenzione!** Il nuovo orario non deve più essere evidenziato in blu per poter essere preso in considerazione. Una volta inserito il nuovo orario, clicca accanto a quest'ultimo nella finestra in modo che l'orario non sia più evidenziato in blu.

Clicca sul pulsante `Modifica`{.action} per confermare le modifiche.

![modifica oraria](images/maintenance-date-edition02.png){.thumbnail}

### Via API OVHcloud

Accedi all'[interfaccia di gestione dei tuoi servizi via API](https://eu.api.ovh.com/). Per maggiori informazioni, consulta la guida Iniziare a [utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/).

Esegui questa chiamata API:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
>

Inserisci le variabili:

- serviceName: il riferimento del tuo PCC in forma `pcc-XX-XX-XX`.
- TaskId: è il "riferimento dell'operazione" indicato nell'email di notifica inviata.
- executionData: inserisci la nuova data di manutenzione in formato `YYYY-MM-DDTHH:MM+01:SS` (ad esempio, 2023-01-02T08:00:00+01:00 per una manutenzione programmata il 02/01/2023 alle 08:0 0 (UTC+1)).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.