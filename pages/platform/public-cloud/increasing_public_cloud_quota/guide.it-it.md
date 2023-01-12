---
title: 'Aumentare le quote Public Cloud'
excerpt: 'Come aumentare la quota Public Cloud'
slug: increase-public-cloud-quota
legacy_guide_number: g1904
section: Gestione del progetto
order: 6
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 25/10/2021**

## Obiettivo

Di default, il numero di risorse (RAM, CPU, spazio disco, numero di istanze...) e di progetti che potete creare è limitato.

Per creare di più, è necessario aumentare la quota disponibile.

**Questa guida ti mostra come richiedere e aumentare la quota Public Cloud dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- [Disporre di una modalità di pagamento valida](../../billing/manage-payment-methods/) nello Spazio Cliente OVHcloud.


## Procedura

### Aumentare la quota di risorse 

In conformità ai criteri interni (anzianità, esistenza di fatture pagate, ecc.), è ora possibile richiedere aumenti di quota per le risorse dei progetti Public Cloud direttamente nello Spazio Cliente OVHcloud.

È possibile aumentare la quota delle risorse manualmente o automaticamente.

#### Aumentare la quota di risorse manualmente

Questa procedura consente di richiedere manualmente un aumento di quota e di convalidarlo con un pagamento anticipato (credito Public cloud).

Accedi allo [Spazio cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud.

Clicca su `Quota and Regions`{.action} nella barra laterale sinistra.

![access quota](images/raisepciquota2021.png){.thumbnail}

In questa pagina visualizzi un riepilogo delle quote attuali del tuo progetto, per regione. Se l'80% della quota è raggiunta, accanto a una risorsa compare un avviso.

Per richiedere un aumento della quota, clicca su `Aumenta la quota disponibile`{.action}.

![raise-pci-quota](images/raisepciquota2021b.png){.thumbnail}

In seguito, clicca sulla freccia a discesa accanto a "Seleziona il volume" per visualizzare l'elenco delle quote attualmente disponibili risorse. In questa sezione viene inoltre indicato l'importo da pagare per poter beneficiare di tali risorse.

![select quota](images/selectquotas.png){.thumbnail}

Nella tabella seguente vengono indicate le risorse disponibili per ogni quota:

|Quota|Instanze|CPU/Cores|RAM|Dimensione del volume|Volumi|Snapshots|
|---|---|---|---|---|---|---|
|10 VMs|10|20|40GB|20TB|20|20|
|20 VMs|20|40|240GB|20TB|40|40|
|50 VMs|50|64|496GB|20TB|100|100|
|100 VMs|100|128|992GB|39TB|200|200|
|200 VMs|200|512|3.9TB|78TB|400|400|

Una volta selezionato il suo volume, clicca su `Conferma`{.action}. Il tuo pagamento sarà elaborato al più presto.

> [!warning]
> **La procedura di fatturazione è immediata.**
>
> Una volta che clicca su `Conferma`{.action}, l'ordine è creato automaticamente e addebitato sul suo conto.
>

#### Aumentare la quota di risorse automaticamente attraverso la funzione « Quota autoscaling »

Questa opzione consente di richiedere un aumento automatico e graduale della quota delle risorse. La quota verrà aumentata a seconda dell'utilizzo e in base a un certo numero di criteri interni.

Non si tratta di un processo immediato e la quota di risorse viene aumentata nel corso del tempo.

Accedi allo [Spazio cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud.

Nella barra laterale sinistra, clicca su `Quota and Regions`{.action}. 

Clicca sul pulsante `?`{.action} per maggiori informazioni su questa funzionalità, poi clicca sull' `icona interruttore`{.action} per cambiare lo stato in "**Attivo**".

![auto scaling](images/autoscaling.png){.thumbnail}

Una volta fatto, *Autoscaling* sarà abilitato per il tuo progetto e la tua quota di risorse sarà aumentata nel corso del tempo.

### Aumentare la quota dei progetti Public Cloud

Se si è raggiunto il numero massimo di progetti Public Cloud autorizzati nello Spazio Cliente e si desidera creare altri progetti, è necessario effettuare una richiesta al supporto.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.