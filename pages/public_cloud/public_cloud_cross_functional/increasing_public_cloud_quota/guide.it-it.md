---
title: 'Aumentare le quote Public Cloud'
excerpt: 'Come aumentare la quota Public Cloud'
updated: 2025-12-17
---

## Obiettivo

Per default, il numero di risorse (RAM, CPU, spazio disco, numero di istanze, ecc.) e di progetti che puoi creare è limitato per motivi di sicurezza.

Per creare di più, è necessario aumentare la quota disponibile.

**Questa guida ti mostra come richiedere e aumentare la quota Public Cloud dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- [Disporre di una modalità di pagamento valida](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) nello Spazio Cliente OVHcloud.

## Procedura

### Aumentare la quota di risorse 

In base a criteri interni (anzianità, esistenza di fatture pagate, ecc.), ora siete autonomi nelle richieste di aumento delle quote relative ai vostri progetti Public Cloud.

È possibile aumentare la quota delle risorse manualmente o automaticamente.

#### Aumentare automaticamente la tua quota di risorse tramite l'opzione "Quota autoscaling"

Questa opzione ti permette di richiedere un aumento automatico e progressivo della tua quota di risorse. La quota verrà regolata in base al tuo utilizzo effettivo **se superi il 60% della tua quota corrente per 30 giorni consecutivi**, nonché in base a un insieme di criteri interni e finanziari.

> [!primary]
>
> **Nota**: Questo processo non è adatto per aumenti rapidi della quota.
>

Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud.

Nel menu a sinistra, fai clic su `Quota e Region`{.action} sotto **Impostazioni**.

In alto a destra della pagina visualizzata, troverai l'opzione **Quota autoscaling**:

- Per saperne di più su questa funzionalità, fai clic sul `?`{.action} accanto a questa opzione.
- Attiva l'opzione cliccando sul pulsante a destra di questa. Il suo stato passerà da *Disattivato* a *Attivato*.

![auto scaling](images/autoscaling.png){.thumbnail}

Una volta attivato, l'auto-scaling aumenterà progressivamente la quota del tuo progetto in base ai tuoi reali bisogni.

#### Aumentare la tua quota di risorse manualmente

> [!primary]
>
> Se hai bisogno di aumentare la tua quota e il pulsante `Aumenta la quota disponibili`{.action} non è disponibile nel tuo Spazio Cliente, clicca sul pulsante `Contatta il supporto`{.action}.
>

![Contact Support](images/contact_support_quota.png){.thumbnail}

Questa procedura consente un aumento rapido e significativo delle vostre quote (ad esempio: scalabilità rapida, istanze GPU, ecc.). Questo metodo si basa sull'acquisto immediato di un credito, dal quale tutte le tue spese cloud saranno automaticamente dedotte.

È possibile acquistare diversi crediti.

Accedi allo [Spazio cliente OVHcloud](/links/manager), vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud.

Nel menu a sinistra, fai clic su `Quota e Region`{.action} sotto **Impostazioni**.

![access quota](images/raisepciquota1.png){.thumbnail}

Questa pagina presenta un riepilogo delle quote attuali del tuo progetto per regione. Un avviso appare non appena una risorsa raggiunge l'80% della sua quota.

Per richiedere un aumento della quota, clicca su `Aumenta la quota disponibile`{.action}.

![raise-pci-quota](images/raisepciquota2.png){.thumbnail}

In seguito, clicca sulla freccia a discesa accanto a "Seleziona il volume" per visualizzare l'elenco delle quote attualmente disponibili risorse. In questa sezione viene inoltre indicato l'importo da pagare per poter beneficiare di tali risorse.

![select quota](images/selectquotas.png){.thumbnail}

La tabella seguente riporta le risorse ottenute per ciascuna quota:

|Quota|Instanze|CPU/Cores|RAM (GB)|Dimensione del volume (TB)|Volumi|Backups|Dimensione di backup (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Una volta selezionato il tuo volume, fai clic su `Conferma`{.action}. Il pagamento verrà processato nel più breve tempo possibile.

> [!warning]
>
> **Qualsiasi aumento manuale della quota verrà fatturato immediatamente.**
>
> Dopo aver cliccato sul pulsante `Conferma`{.action}, l'ordine viene automaticamente creato e l'importo viene addebitato sul tuo metodo di pagamento predefinito.
>

### Aumentare la quota dei progetti Public Cloud

Esistono due situazioni principali in cui potresti aver bisogno di un aggiustamento della quota:

1. **Numero massimo di progetti raggiunto**: Se hai raggiunto il numero massimo di progetti Public Cloud autorizzati nel tuo spazio client e desideri crearne di nuovi, devi inviare una richiesta al nostro team di supporto.

2. **Altri tipi di richieste di quote**: Per qualsiasi altra limitazione (CPU, RAM, storage, ecc.) o bisogno specifico riguardo ai tuoi progetti Public Cloud, puoi contattare il supporto per richiedere un aumento.

> [!primary]
>
> **Nota**: Le richieste di quota vengono elaborate manualmente dal nostro team. Il tempo di elaborazione può variare in base alla complessità della richiesta. Ti consigliamo di inviare la tua richiesta il prima possibile per evitare qualsiasi blocco nei tuoi progetti.

Per accelerare l'elaborazione, ti preghiamo di specificare nella tua richiesta:

- il tipo di quota da aumentare (numero di progetti, risorse, ecc.);
- l'uso previsto e la motivazione del bisogno;
- il periodo o la durata desiderata per l'aumento.

### Quote specifiche e risorse particolari

Per alcune risorse o servizi potrebbero essere applicate quote specifiche. Per ulteriori informazioni:

**Quota S3**<sup>1</sup>: Consulta la documentazione ufficiale "[Object Storage - Limiti tecnici (EN)](/pages/storage_and_backup/object_storage/s3_limitations)".

**Quota Kubernetes gestito (MKS)**: Consulta la documentazione ufficiale "[ETCD Quotas, usage, troubleshooting and error](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.