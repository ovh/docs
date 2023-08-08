---
title: Condividere immagini tra progetti Public Cloud
excerpt: Scopri come condividere immagini tra progetti Public Cloud con OpenStack
updated: 2023-08-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

In alcuni casi potrebbe essere necessario condividere un’immagine [Instance Backup](/pages/platform/public-cloud/save_an_instance) o un’immagine [Volume Backup](/pages/platform/public-cloud/volume-backup) tra più progetti Public Cloud.

OpenStack ti permette di condividere un'immagine tra più progetti, anche se non appartengono allo stesso account.
Questa funzionalità offre numerose possibilità ma comporta anche dei rischi. È quindi importante comprenderne i principi.

Ad esempio, se si desidera condividere un'immagine di un progetto A con un progetto B (nello stesso account o in un account diverso), vengono applicate le regole seguenti:

- L'immagine rimane fisicamente attaccata al progetto A. Il progetto B dispone solo di un'autorizzazione di accesso a questa immagine.
- Se il Progetto A elimina l'accesso all'immagine (eliminazione dell'ACL, eliminazione dell'immagine, eliminazione del progetto per fatture non pagate, ecc.), le istanze che vengono eseguite da questa immagine sul Progetto B potrebbero non funzionare a causa di problemi di migrazione o di ricostruzione.

È quindi importante tenerlo a mente prima di intraprendere questa configurazione.
Per maggiori informazioni, consulta la [documentazione ufficiale OpenStack](https://docs.openstack.org/image-guide/share-images.html){.external}.

**Questa guida ti mostra come condividere immagini tra uno o più progetti, preservandone la configurazione e lo stato.**

## Prerequisiti

Prima di seguire questi passaggi, ti consigliamo di consultare questa guida:

- [Preparare l’ambiente di sviluppo all’API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)

Avrai anche bisogno di:

- Disporre di un’[Istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) iscritta nel proprio account OVHcloud
- [Aver creato un utente OpenStack](/pages/platform/public-cloud/create_and_delete_a_user)

> [!primary]
>
> Questa guida ti mostra come utilizzare il [OpenStack Cient](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

## Procedura

### Condividere un'immagine

Per elencare le immagini esistenti, eseguire innanzitutto il comando seguente:

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> Per condividere un'immagine, è necessario innanzitutto renderla visibile in condivisione (*shared visibility*).
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Aggiungere un progetto a un'immagine

Lo step successivo consiste nell’aggiungere l’UUID di un altro progetto come membro dell’immagine. Nel nostro esempio qui sotto, aggiungiamo l’UUID del « Progetto B ».

```bash
$ openstack image add project 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B>
+------------+--------------------------------------+
| Field      | Value                                |
+------------+--------------------------------------+
| created_at | 2020-01-27T13:26:52Z                 |
| image_id   | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| member_id  | <UUID_Project_B>                      |
| schema     | /v2/schemas/member                   |
| status     | pending                              |
| updated_at | 2020-01-30T15:18:00Z                 |
+------------+--------------------------------------+
```

Una volta effettuata questa operazione, verifica la richiesta per il progetto B:


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


Se la richiesta di condivisione è in stato `pending`, è necessario accettarla:

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Una volta accettata la richiesta di condivisione, assicurati di poter visualizzare e accedere all'immagine:

```bash
$ openstack image show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                  |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 1b19c9e5bdd36b9010de0164dd8b245e                                                                                                                                                       |
| container_format | bare                                                                                                                                                                                   |
| created_at       | 2018-05-08T15:38:50Z                                                                                                                                                                   |
| disk_format      | raw                                                                                                                                                                                    |
| file             | /v2/images/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba/file                                                                                                                                   |
| id               | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba                                                                                                                                                   |
| min_disk         | 0                                                                                                                                                                                      |
| min_ram          | 0                                                                                                                                                                                      |
| name             | pfsense                                                                                                                                                                                |
| owner            | 35c9ee22e5c84c1097a5652b0abcbab3                                                                                                                                                       |
| properties       | direct_url='swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', locations='[{'url': 'swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', 'metadata': {}}]' |
| protected        | False                                                                                                                                                                                  |
| schema           | /v2/schemas/image                                                                                                                                                                      |
| size             | 10737418240                                                                                                                                                                            |
| status           | active                                                                                                                                                                                 |
| tags             |                                                                                                                                                                                        |
| updated_at       | 2018-05-08T15:53:57Z                                                                                                                                                                   |
| virtual_size     | None                                                                                                                                                                                   |
| visibility       | private                                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Controllare i membri dell'immagine

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

### Rimuovere un membro da un'immagine o annullare la condivisione di un'immagine

```bash
$ openstack image remove project <image> <UUID_Project_To_Delete>
```

## Per saperne di più

[Trasferire il backup di un’istanza tra datacenter](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.