---
title: Modificare un Volume Block Storage
excerpt: "Scopri come modificare il tipo di un volume block storage utilizzando Openstack"
updated: 2026-01-13
---

## Obiettivo

L’obiettivo di questa guida è mostrarti come modificare un tipo di volume Block Storage da Classic o High Speed a High Speed gen2.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager) o all'[interfaccia Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Un volume [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) creato nel tuo progetto [Public Cloud](/links/public-cloud/public-cloud).

## Procedura

Quando si modifica un tipo di volume Block Storage in un volume "High speed gen2", la politica di migrazione deve essere modificata da `Never` a `On Demand`.

Per impostazione predefinita, la politica di migrazione è impostata su `Never` perché il volume rimane sullo stesso cluster CEPH. Per "High speed gen2", invece, il volume dovrà essere migrato verso un nuovo cluster.

La modifica può essere effettuata via Horizon o tramite l’interfaccia da riga di comando OpenStack.

> [!warning]
>
> Se il volume Block Storage è collegato a un'istanza, devi prima scollegarlo prima di procedere. Per ulteriori informazioni, consulta la sezione **Scollega un volume** della guida "[Crea e configura un disco aggiuntivo sulla tua istanza](/pages/public_cloud/Compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume)".
>
> Il cambio di tipo di volume (retyping) tramite l'Spazio Cliente OVHcloud o l'API OVHcloud è disponibile solo per i volumi non crittografati. Non è possibile modificare il tipo dei volumi crittografati di tipo **-LUKS** tramite queste interfacce.
>
> Il retyping è possibile tramite OpenStack / Horizon solo per volumi **-LUKS** verso **-LUKS**. In questo caso, la ripristinazione del volume dopo il retyping non è possibile.
> 
> Le conversioni **-LUKS** verso **non -LUKS** non sono supportate, nemmeno tramite OpenStack / Horizon.
>

> [!tabs]
> Dallo Spazio Cliente OVHcloud
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Public Cloud`{.action} e seleziona il progetto Public Cloud desiderato. Successivamente, clicca su `Block Storage`{.action} nel menu a sinistra sotto **Storage e Backup**.
>>
>> Trova il volume desiderato nell'elenco, quindi clicca sul pulsante `...`{.action} a destra di esso. Scegli quindi `Modificare il tipo del volume`{.action}.
>>
>> Si aprirà una finestra che ti permette di visualizzare i diversi tipi di volumi disponibili. Seleziona il tipo desiderato, quindi conferma la tua scelta cliccando su `Modifica`{.action}.
>>
>> > [!primary]
>> >
>> > L'aggiornamento del tipo di volume (retyping) può richiedere diversi minuti.
>> >
>>
> Dall'interfaccia Horizon
>>
>> Accedi all'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/) e assicurati di essere nella regione corretta. Puoi verificarlo in alto a sinistra. 
>>
>> ![Selezione della regione](images/region2021.png){.thumbnail}
>>
>> Clicca sul menu `Volumes`{.action} a sinistra e poi su `Volumes`{.action}.
>>
>> Clicca sulla freccia a lato di `Edit Volume`{.action} e seleziona `Change Volume Type`{.action}.
>>
>> ![Scelta dell'opzione](images/selectoption.png){.thumbnail}
>>
>> Nella finestra che appare, clicca sul menu a discesa sotto `Type` e seleziona `high-speed-gen-2`{.action}. Clicca quindi sulla freccia a lato di `Migration Policy` e seleziona `On Demand`{.action}.
>>
>> Una volta completate queste azioni, clicca su `Change Volume Type`{.action} per confermare il cambiamento.
>>
>> ![Scelta dell'opzione](images/changevolume.png){.thumbnail}
>>
> Dalla CLI OpenStack
>>
>> Prima di iniziare, consulta la seguente guida :
>>
>> - [Preparare l'ambiente per utilizzare l'API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> In primo luogo, elenca i tipi di volumi disponibili nella tua regione con il comando seguente :
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> > Nota che se i tipi di volumi "high-speed-gen2" o **-LUKS** non appaiono nell'elenco, significa che non sono disponibili in questa regione.
>> >
>> > I tipi di volumi **-LUKS** vengono visualizzati solo quando sono supportati nella regione e compatibili con il tipo di crittografia del volume.
>> >
>>
>> Modifica quindi il tipo di volume con il comando seguente :
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Per saperne di più

Per scoprire come migrare un volume Block Storage verso un volume crittografato LUKS, consulta la nostra guida dedicata [Migrating a Block Storage volume to an encrypted LUKS volume](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume) (EN).

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).