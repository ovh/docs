---
title: 'Configurare il Public Cloud vRack con OpenStack CLI'
excerpt: 'Come attivare e gestire una vRack Public Cloud con OpenStack CLI'
updated: 2025-01-13
---

## Obiettivo

La [vRack](/links/network/vrack) è una rete privata che permette di configurare l'indirizzamento tra diversi server dedicati OVHcloud. Permette anche di aggiungere [istanze Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) alla tua rete privata per creare un'infrastruttura di risorse fisiche e virtuali.

**Questa guida ti mostra come configurare le tue istanze Public Cloud con OpenStack CLI**

## Prerequisiti

- Disporre di un [progetto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- Aver [creato un utente OpenStack](/pages/public_cloud/compute/create_and_delete_a_user#crea-un-utente-openstack) (facoltativo)
- Conoscenze di rete elementari

Prima di iniziare, ricorda di leggere queste guide:

- [Preparare l’ambiente per utilizzare l’API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- [Impostare le variabili d'ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables).

## Procedura

### Presentazione del contenuto

- [Step 1: Attivazione e gestione di un vRack](#activating-vrack)
    - [Dallo Spazio Cliente OVHcloud](#control-panel)
    - [Dalle APIv6 OVHcloud](#ovhcloud-api)
- [Step 2: Crea una rete privata nella vRack](#private-network)
- [Step 3: Integra un'istanza nella vRack](#instance-vrack)
    - [Caso di una nuova istanza](#new-instance)
    - [In caso di istanza esistente](#existing-instance)
- [Elimina un'interfaccia privata](#detach-interface)

<a name="activating-vrack"></a>

### Step 1: Attivazione e gestione di un vRack

> [!warning]
> La vRack è un'infrastruttura gestita a livello di OVHcloud e può essere gestita solo dallo Spazio Cliente OVHcloud e dalle APIv6 OVHcloud.
>

<a name="control-panel"></a>

#### Dallo Spazio Cliente OVHcloud

> [!primary]
> Questo non si applica ai progetti appena creati che vengono consegnati automaticamente con una vRack. Per visualizzare la vRack dopo aver creato il progetto, accedi al menu `Bare Metal Cloud`{.action} e clicca su `Network`{.action} nella scheda a sinistra. Clicca su `Rete Privata vRack`{.action} per visualizzare le vRack.
>

Se hai un progetto più datato e non hai una vRack, è necessario ordinarne una. Questo prodotto è gratuito e la consegna richiede solo pochi minuti.

Accedi al menu `Bare Metal Cloud`{.action} e clicca sul pulsante `Ordina`{.action}. Clicca sull’opzione `vRack`{.action}.

![Ordina la vrack](images/ordering_vrack_2024.png){.thumbnail}

Sarai reindirizzato verso un'altra pagina per convalidare l'ordine, l'operazione richiederà alcuni minuti.

Una volta attivato il servizio, è disponibile nello Spazio Cliente, sezione `Bare Metal Cloud`{.action} > `Network`{.action} > `Rete Privata vRack`{.action}. Con la denominazione "pn-xxxxxx".

Nella lista dei servizi compatibili, seleziona il progetto che vuoi aggiungere alla vRack e clicca sul pulsante `Aggiungi`{.action}.

![aggiungi il progetto](images/addprojectvrack.png){.thumbnail}

<a name="ovhcloud-api"></a>

#### Dalle APIv6 OVHcloud

Per attivare e gestire una vRack, clicca [qui](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), per consultare la guida specifica a questo metodo.

<a name="private-network"></a>

### Step 2: Crea una rete privata nella vRack

È necessario creare una rete privata con una rete locale virtuale (VLAN) in modo che le istanze collegate alla vRack possano comunicare tra loro.

Sull'offerta Public Cloud è possibile creare fino a 4.000 VLAN all'interno di una sola vRack. In questo modo è possibile utilizzare ciascun indirizzo IP privato fino a 4.000 volte.
Ad esempio, l'IP 192.168.0.10 della VLAN 2 è diverso dall'IP 192.168.0.10 della VLAN 42.

Questa operazione potrebbe rivelarsi utile per segmentare la tua vRack tra più reti virtuali.

Per creare la stessa rete privata, è necessario creare 2 oggetti OpenStack: network e subnet.

Nell'esempio che segue, si specifica la `VLAN_ID` a cui vogliamo che la rete faccia parte tramite `--provider-network-type` e `--provider-segment`.

Puoi eliminare queste impostazioni. In questo caso, verrà utilizzata una `VLAN_ID` disponibile.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

<a name="instance-vrack"></a>

### Step 3: Integra un'istanza nella vRack

Possono presentarsi due situazioni:

- L'istanza non esiste ancora.
- L'istanza esiste già e devi aggiungerla alla vRack.

<a name="new-instance"></a>

#### Caso di una nuova istanza

**Recupero delle informazioni necessarie**

Identificazione delle reti pubbliche e private:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

o

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Annotare gli ID della rete che ti interessa:
><br> - Ext-Net per avere un IP pubblico
><br> - Quello delle VLAN necessarie alla tua configurazione
>

Ricorda anche queste informazioni, come indicato nella [guida all'utilizzo dell'API Nova](/pages/public_cloud/compute/starting_with_nova):

- ID o nome della chiave SSH OpenStack
- ID del tipo di istanza (*flavor*)
- ID dell'immagine desiderata (sistema operativo, snapshot, ecc.)

**Implementazione dell'istanza**

Con gli elementi recuperati precedentemente, è possibile creare un'istanza includendola direttamente nella vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [name-of-instance]
```

Esempio:

```bash
nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_vLan] name_of_instance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```
o

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Esempio:

```bash
openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Puoi definire l'indirizzo IP dell'istanza della tua interfaccia vRack a livello di OpenStack.

Per farlo, puoi aggiungere un semplice argomento nella funzione "--nic":

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Esempio:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

**Verifica dell'istanza**

Dopo pochi minuti, puoi verificare la lista delle istanze esistenti per trovare il server creato:

```bash
openstack server list
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```

```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```

<a name="existing-instance"></a>

#### In caso di istanza esistente

**Recupero delle informazioni necessarie**

Identificazione delle tue istanze:

```bash
openstack server list
 
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

o

```bash
nova list
 
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Identificazione delle reti pubbliche e private:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

o

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxx-xxxxxxxxxxxxx | MyVLAN-0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Annotare gli ID della rete che ti interessa:
><br> - Ext-Net per avere un IP pubblico
><br> - quello delle VLAN necessarie alla tua configurazione
>

**Aggiunta di un'interfaccia privata**

Per associare una nuova interfaccia, esegui questo comando:

```bash
nova interface-attach --net-id <ID-VLAN> <ID-instance>
```

Esempio:

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Verifica che l'azione sia stata presa in carico:

```bash
nova show <ID-instance>
 
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => il tuo IP Pubblico
| MyVLAN-42 network                    | 192.168.0.x                                              | => il tuo IP privato
[...]
```

o

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx; MonVLAN-42=192.168.0.x   | => il tuo IP Pubblico ; il tuo IP privato                                                                     
[...]
```

<a name="remove-network"></a>

### Elimina un'interfaccia

> [!warning]
> L'eliminazione di un'interfaccia è definitiva.
>
> Se elimini l'interfaccia "Ext-Net" (IP pubblico), questo indirizzo viene rilasciato e rimesso in circolazione. Non potreste riassegnarla.
><br>Questa operazione è necessaria solo per isolare il server nella vRack (interfaccia "Ext-Net") o per estrarlo da una VLAN.
>

Per scollegare un'interfaccia è necessario, in un primo tempo, identificare la porta *Neutron* creata.

Puoi usare i seguenti comandi:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

o

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Una volta identificata la porta da eliminare, esegui il comando:

```bash
nova interface-detach <ID_instance> <port_id>
```

Ad esempio:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Per saperne di più

[Configurazione della vRack Public Cloud da APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN).

[Server dedicati - Creare due o più VLAN nella vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).