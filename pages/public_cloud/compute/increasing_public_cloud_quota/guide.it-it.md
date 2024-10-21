---
title: 'Aumentare le quote Public Cloud'
excerpt: 'Come aumentare la quota Public Cloud'
updated: 2024-05-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Di default, il numero di risorse (RAM, CPU, spazio disco, numero di istanze...) e di progetti che potete creare è limitato.

Per creare di più, è necessario aumentare la quota disponibile.

**Questa guida ti mostra come richiedere e aumentare la quota Public Cloud dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- [Disporre di una modalità di pagamento valida](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) nello Spazio Cliente OVHcloud.

## Procedura

### Aumentare la quota di risorse 

In conformità ai criteri interni (anzianità, esistenza di fatture pagate, ecc.), è ora possibile richiedere aumenti di quota per le risorse dei progetti Public Cloud direttamente nello Spazio Cliente OVHcloud.

È possibile aumentare la quota delle risorse manualmente o automaticamente.

#### Aumentare la quota di risorse manualmente

Questa procedura consente di richiedere manualmente un aumento di quota e di convalidarlo con un pagamento anticipato (credito Public cloud).

Accedi allo [Spazio cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud.

Clicca su `Quota and Regions`{.action} nella barra laterale sinistra.

![access quota](images/raisepciquota1-2023.png){.thumbnail}

In questa pagina visualizzi un riepilogo delle quote attuali del tuo progetto, per regione. Se l'80% della quota è raggiunta, accanto a una risorsa compare un avviso.

Per richiedere un aumento della quota, clicca su `Aumenta la quota disponibile`{.action}.

![raise-pci-quota](images/raisepciquota2023.png){.thumbnail}

In seguito, clicca sulla freccia a discesa accanto a "Seleziona il volume" per visualizzare l'elenco delle quote attualmente disponibili risorse. In questa sezione viene inoltre indicato l'importo da pagare per poter beneficiare di tali risorse.

![select quota](images/selectquotas.png){.thumbnail}

Nella tabella seguente vengono indicate le risorse disponibili per ogni quota:

|Quota|Instanze|CPU/Cores|RAM (MB)|Dimensione del volume (GB)|Volumi|Snapshots|Dimensione di backup (GB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|10 VMs|10|34|430080|20000|100|600|60000|15|5|2|
|20 VMs|20|40|430080|20000|200|1200|120000|30|10|4|
|50 VMs|50|64|507904|20000|500|3000|300000|75|25|10|
|100 VMs|100|128|1015808|40000|1000|6000|600000|300|10|10|
|200 VMs|200|512|4063232|80000|2000|12000|1200000|600|50|50|

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

![auto scaling](images/autoscaling2023.png){.thumbnail}

Una volta fatto, *Autoscaling* sarà abilitato per il tuo progetto e la tua quota di risorse sarà aumentata nel corso del tempo.

### Aumentare la quota dei progetti Public Cloud

Se si è raggiunto il numero massimo di progetti Public Cloud autorizzati nello Spazio Cliente e si desidera creare altri progetti, è necessario effettuare una richiesta al supporto.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.