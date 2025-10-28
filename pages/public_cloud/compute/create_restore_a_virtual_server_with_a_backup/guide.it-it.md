---
title: 'Crea/ripristina il tuo server virtuale da un backup'
excerpt: 'Scopri come creare o ripristinare il backup di un’istanza'
updated: 2025-10-15
---

## Obiettivo

Lo Spazio Cliente OVHcloud ti permette di creare i [backup delle tue istanze](/pages/public_cloud/compute/save_an_instance) in pochi click e automatizzare questo processo.
Ripristinare un’istanza utilizzando un backup è necessario, ad esempio, se hai effettuato un’operazione scorretta sulla sua configurazione o semplicemente per crearne una nuova. Puoi utilizzare questi backup di istanze per due ragioni principali:

- Creare un'istanza basata sul backup per duplicare l'istanza di origine ad esempio, se configuri un'infrastruttura di load balancing.
- Ripristinare un'istanza a partire da un backup Ad esempio, se le modifiche recenti hanno interrotto le configurazioni critiche sull'istanza.

**Questa guida ti mostra come duplicare o ripristinare le istanze utilizzando i backup.**

## Prerequisiti

- Disporre del backup di [un’istanza Public Cloud](/links/public-cloud/instance-backup). A questo proposito, consulta [la guida dedicata alla creazione di un backup](/pages/public_cloud/compute/save_an_instance)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Crea un’istanza a partire da un backup

> [!tabs]
> Via lo Spazio Cliente OVHcloud
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Public Cloud`{.action} e seleziona il progetto Public Cloud desiderato.<br>
>> Clicca quindi su `Instance backup`{.action} nella barra di navigazione a sinistra sotto **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}
>>
>> Clicca quindi sui `...`{.action} a destra della copia di backup selezionata e infine su `Crea un'istanza`{.action}.
>>
>> Verrà visualizzata una versione semplificata della pagina di creazione dell'istanza, che ti permetterà di personalizzare alcune opzioni.
>>
>> ![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}
>>
>> Alcuni elementi sono predefiniti:
>>
>> - **Localizzazione**: La tua istanza verrà creata nello stesso data center della tua copia di backup.
>> - **Immagine**: L'immagine corrisponderà alla tua copia di backup.
>> - **Modello**: Solo i modelli che possono ospitare la tua immagine saranno disponibili, in base al tuo limite.
>>
>> ![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}
>>
>> Definisci il nome della nuova istanza, la chiave SSH, il vRack e il periodo di fatturazione, quindi clicca sul pulsante `Crea l'istanza`{.action}.
>>
>> Per ulteriori informazioni sulla creazione di un'istanza, consulta [questa guida](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!primary]
>> >
>> > Per creare un'istanza in un data center diverso da quello della copia di backup, sarà necessario trasferirla nella zona corrispondente. Riferisciti quindi alla [guida sulla copia di un'istanza da un data center a un altro](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>> >
>>
> Via la CLI OpenStack
>>
>> Per creare un'istanza a partire dalla tua copia di backup, utilizza l'ID della copia di backup come immagine con questo comando:
>>
>> ```bash
>> $ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
>> ```
>>
> Via Horizon
>> Nell'interfaccia Horizon, clicca su `Compute`{.action} nel menu a sinistra, quindi su `Images`{.action}. Cerca l'immagine desiderata e clicca sul pulsante `Launch`{.action} a destra della riga della tua immagine.
>>
>> ![public-cloud-instance-backup-horizon](images/restorebackuphorizon1.png){.thumbnail}
>>
>> Assegna un nome alla tua istanza nel campo dedicato e determina il numero di istanze da creare. Poi clicca sulla scheda `Flavor`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-2](images/restorebackuphorizon2.png){.thumbnail}
>>
>> Seleziona il modello di istanza desiderato, quindi clicca sulla scheda `Networks`{.action}.
>>
>> > [!warning]
>> >
>> > Se la tua istanza è un server Windows, devi selezionare un flavor del tipo win-xx-xx (ad esempio, win-b2-15) e disporre di un'interfaccia pubblica sulla rete Ext-Net. Senza queste condizioni, l'autenticazione presso il KMS OVHcloud non sarà possibile, e il tuo server rimarrà con una [licenza non attivata](/pages/public_cloud/compute/activate-windows-license-private-mode). Questo potrebbe comportare limitazioni, in particolare l'assenza di aggiornamenti. Nota che non è possibile ridimensionare un'istanza Linux (ad esempio b2-15) in un'istanza Windows (come win-b2-15). Per effettuare questa transizione, è necessario creare una nuova istanza.
>> >
>>
>> ![public-cloud-instance-backup-horizon-3](images/restorebackuphorizon3.png){.thumbnail}
>>
>> Seleziona la rete che desideri assegnare, quindi clicca sul pulsante `Launch Instance`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-4](images/restorebackuphorizon4.png){.thumbnail}
>>
>> Puoi trovare lo stato della tua nuova istanza in `Compute`{.action} nel menu a sinistra, quindi su `Instances`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-5](images/restorebackuphorizon5.png){.thumbnail}
>>
> Via l'API OVHcloud <a name="createinstanceviaapi"></a>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance
>> >
>>
>> Compila le variabili:
>>
>> - **serviceName** : L'ID del progetto OVHcloud.
>> - **regionName** : Il nome della regione dove verrà creata l'istanza.
>>
>> Esempio del corpo della richiesta:
>>
>> ```json
>> {
>>   "billingPeriod": "hourly",
>>   "bootFrom": {
>>     "imageId": "5cb8ea68-****-****-****-820be8346***"
>>   },
>>   "flavor": {
>>     "id": "e81b46f8-****-****-****-cad655e65***"
>>   },
>>   "name": "newInstance",
>>   "network": {
>>     "public": true
>>   },
>>   "sshKey": {
>>     "name": "MySSHKey"
>>   }
>> }
>> ```
>>

### Ripristinare un’istanza a partire da un backup

> [!tabs]
> Via lo Spazio Cliente OVHcloud
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Public Cloud`{.action} e seleziona il progetto Public Cloud desiderato.<br>
>> Clicca quindi su `Instanze`{.action} nella barra di navigazione a sinistra sotto **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}
>>
>> Clicca sul pulsante `...`{.action} a destra dell'istanza che desideri ripristinare e clicca su `Modificare`{.action}.
>>
>> Verrà visualizzata la pagina di modifica dell'istanza. Potrai modificare:
>>
>> - il nome dell'istanza;
>> - l'immagine dell'istanza;
>> - il modello dell'istanza;
>> - la fatturazione dell'istanza (solo dal modello "Ora" al modello "Mensile").
>>
>> Esegui le modifiche necessarie e seleziona la scheda `Backups`{.action} nella sezione "Immagine".
>>
>> ![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}
>>
>> Seleziona un backup nell'elenco dei backup disponibili. Clicca su `Modifica l'immagine`{.action} se sei certo di voler sostituire l'immagine corrente con il backup.
>>
>> L'istanza avrà lo stato `Riinstallazione` fino al completamento del processo. Potrebbe essere necessario aggiornare la pagina nel browser per visualizzare lo stato corrente.
>>
>> > [!warning]
>> >
>> > Come indicato nel riquadro giallo, non sarà possibile recuperare alcun dato aggiunto dopo la creazione di questo backup.
>> >
>>
> Via l'API OVHcloud
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/reinstall
>> >
>>
>> Compila le variabili:
>>
>> - **serviceName** : L'ID del progetto OVHcloud.
>> - **regionName** : Il nome della regione dove si trova l'istanza di origine.
>> - **instanceId** : L'ID unico dell'istanza.
>>
>> Esempio del corpo della richiesta:
>>
>> ```json
>> {
>>   "imageId": "5cb8ea68-****-****-****-820be8346***",
>>   "imageRegionName": "GRA11"
>> }
>> ```
>>

## Per saperne di più

[Creazione e connessione a una prima istanza Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Effettuare lo Snapshot di un'istanza](/pages/public_cloud/compute/save_an_instance)

Contatta la nostra [Community di utenti](/links/community).