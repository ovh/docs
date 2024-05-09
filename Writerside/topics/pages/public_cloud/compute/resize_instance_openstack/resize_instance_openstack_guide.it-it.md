---
title: "Ridimensionare un’istanza Public Cloud con il CLI OpenStack"
excerpt: Scopri come modificare le risorse dell’istanza per adattarle a un aumento dell’attività
updated: 2023-09-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

A causa di un aumento dell'attività o semplicemente per rispondere a nuove esigenze, l'istanza potrebbe esaurire le risorse e non essere in grado di rispondere a un nuovo carico. Grazie al Public Cloud di OVHcloud è possibile aumentare le risorse disponibili per l'istanza in pochi step.

**Scopri come ridimensionare un’istanza utilizzando la CLI di OpenStack.**

> [!primary]
> **Limiti:**
>
> - Solo il ridimensionamento a un modello superiore (*upscaling*) è possibile per le istanze classiche.
> - Un [istanza Metal](https://www.ovhcloud.com/it/public-cloud/metal-instances/) può essere ridimensionata solo verso un altro modello **Metal**.
> - Le istanze *Flex* consentono il ridimensionamento verso modelli superiori o inferiori, grazie a una singola dimensione del disco bloccata.
>

## Prerequisiti

- Disporre di un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) sul proprio account OVHcloud
- Un [utente OpenStack](create_and_delete_a_user1.)
- Disporre di un [ambiente OpenStack predisposto per la CLI](prepare_the_environment_for_using_the_openstack_api1.)
- Aver definito le [variabili d’ambiente OpenStack](loading_openstack_environment_variables1.)

## Procedura

> [!warning]
>
> Questa operazione comporta l'arresto dell'istanza per tutta la durata dell'operazione.
>

### Effettua il backup dell’istanza

Durante il ridimensionamento, l'istanza viene arrestata per tutta la durata dell'operazione. Prima di procedere, ti consigliamo di effettuare il backup dell’istanza e arrestare tutti i processi in esecuzione. Per maggiori informazioni sui metodi di backup consulta la [guida dedicata](save_an_instance1.).

### Elenca le istanze

Il primo step consiste nell’elencare le istanze per recuperare il nome dell’istanza che vuoi ridimensionare. Nel nostro esempio, vogliamo ridimensionare l’istanza denominata "OVHcloudistance".

```bash
$ openstack server list
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Image      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxxxxxx | testinstance1    | Centos 7     | d2-2 |        | ACTIVE | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxxxxxx | testinstance2    | Ubuntu 23.04 | d2-2 |        | ACTIVE | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx | OVHcloudinstance | Debian 12    | b2-7 |        | ACTIVE | Ext-Net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Elenca modelli <a name="flavorlist"></a>

Per recuperare l'ID del nuovo modello, è necessario visualizzare l'elenco dei modelli (*flavors*) disponibili nella propria area geografica. Nel nostro esempio, vogliamo ridimensionare la nostra istanza su un modello b2-30 con l'ID `098889e6-d1fc-4967-baea-19fd97fd83a8`.

```bash
$ openstack flavor list
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009ee05f-9430-4c85-b9f7-66297db22731 | win-hg-7-ssd-flex   |   7000 |   50 |         0 |     2 | True      |
| 01ef1e13-5a85-4c4b-84f4-9e9da85da51d | r2-15               |  15000 |   50 |         0 |     2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  |  60000 |   50 |         0 |    16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | r2-60               |  60000 |  100 |         0 |     4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | c2-60               |  60000 |  400 |         0 |    16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 |   50 |         0 |     8 | True      |
| 098889e6-d1fc-4967-baea-19fd97fd83a8 | b2-30               |  30000 |  200 |         0 |     8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           |  30000 |   50 |         0 |     2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | r2-30               |  30000 |   50 |         0 |     2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 |   50 |         0 |    32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | eg-30-flex          |  30000 |   50 |         0 |     8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      |  30000 |   50 |         0 |     8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | eg-120-ssd          | 120000 |  800 |         0 |    32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | eg-7-ssd            |   7000 |  100 |         0 |     2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Si noti che è possibile ridimensionare un'istanza solo da un modello Linux a un altro modello Linux e da un modello Windows a un altro modello Windows.

### Ridimensiona l’istanza

Una volta recuperate le informazioni, è possibile ridimensionare l’istanza:

```bash
$  openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

Ad esempio, per ridimensionare l’istanza "OVHcloudInstance":

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

È possibile seguire il processo eseguendo frequentemente il comando seguente. Lo stato (*status*) deve essere `RESIZE`.

```bash
$ openstack server show OVHcloudinstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                                  | 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx                                                                                                                                                              |
| image                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudinstance                                                                                                                                                                                     |
| status                              | RESIZE                                                                                                                                                                                             |
| tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | active           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Ridurre un’istanza

> [!warning]
> Questa opzione è disponibile solo per i modelli *Flex*.
>

Se si desidera ridurre un'istanza, è possibile farlo seguendo gli stessi passaggi indicati [sopra](#flavorlist.) e utilizzando un ID diverso nel campo <FLAVOR-ID>.

## Per saperne di più

[Ridimensionare un’istanza Public Cloud dallo Spazio Cliente OVHcloud](resize_instance_manager1.)

[Ridimensionare un’istanza Public Cloud con Horizon](resize_of_an_instance1.)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.