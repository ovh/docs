---
title: "Come identificare il server del proprio database"
excerpt: "Scopri come trovare il nome del server che ospita il tuo database condiviso, accessibile con il tuo hosting web"
updated: 2026-02-12
---

## Obiettivo

Nell'utilizzo dei tuoi servizi, potresti dover conoscere il nome del server SQL su cui si trova il tuo database (incluso o acquistato come opzione aggiuntiva tramite il tuo [hosting web](/links/web/hosting)).

> [!warning]
>
> Questa guida non riguarda i database presenti su una soluzione [Web Cloud Database](/links/web/databases).

**Scopri come trovare il nome del server che ospita il tuo database condiviso, accessibile con il tuo hosting web.**

## Prerequisiti

- Disporre di un'offerta [OVHcloud Web Hosting](/links/web/hosting).
- Essere connessi al vostro [Spazio Cliente OVHcloud](/links/manager).
- Utilizzare un database incluso o [acquistato come opzione aggiuntiva](/links/web/hosting-options-startsql) tramite il vostro hosting web.

## Procedura

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `Database`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella tabella, individua la colonna **Server**.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Per il database desiderato, troverai in questa colonna il nome del server SQL (ad esempio: **mysqlXXX.euXXX**) su cui è ospitato il tuo database condiviso.
>>
>> > [!warning]
>> >
>> > Non confondere il **Server** con l'**Indirizzo del server** :
>> >
>> > - L'**Indirizzo del server** fa parte delle credenziali di accesso specifiche del tuo database e permette al tuo sito web di connettersi a quest'ultimo.
>> > - Il **Server** rappresenta l'infrastruttura che ospita il tuo database, insieme ad altri database. Il nome del server permette di verificare se è interessato da un intervento di manutenzione o da un incidente dichiarato sulla nostra pagina [Web Cloud Status](https://web-cloud.status-ovhcloud.com/).

## Per saperne di più <a name="go-further"></a>

[Risolvi gli errori più frequenti associati ai database](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).