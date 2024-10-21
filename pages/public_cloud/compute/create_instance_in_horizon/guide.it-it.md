---
title: 'Creare un’istanza dall’interfaccia Horizon'
excerpt: 'Come creare un’istanza dall’interfaccia Horizon'
updated: 2024-09-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

In alcuni casi potrebbe essere necessario creare istanze direttamente dall’interfaccia Horizon: questa operazione permette, ad esempio, di aggiungere più istanze contemporaneamente o configurare gruppi di sicurezza specifici da applicare alle istanze.

**Questa guida ti mostra come creare un’istanza dall’interfaccia Horizon**.

## Prerequisiti

- Disporre di un progetto [Public Cloud OVHcloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- [Essere connesso all’interfaccia Horizon](/pages/public_cloud/compute/introducing_horizon)

## Procedura

### Creare una rete privata

Prima di creare un’istanza, consigliamo di creare una rete privata. Successivamente sarà possibile associare la rete alla propria istanza.

Per iniziare, accedi all’interfaccia Horizon. Per maggiori informazioni, consulta la [nostra guida](/pages/public_cloud/compute/introducing_horizon).

Clicca su `Network`{.action} nel menu a sinistra e poi su `Networks`{.action}.

![network](images/create-network.png){.thumbnail}

Clicca su `Create Network`{.action}

![network](images/create-network-1.png){.thumbnail}

> [!tabs]
> 1. **Network (Rete)**
>>
>> **Network Name:** Immettere un nome per la rete.<br>
>> **Enable Admin State:** Selezionare questa opzione per attivare la rete.<br>
>> **Create Subnet:** Selezionare questa opzione per creare la sottorete.<br>
>> **Availability Zone Hints:** Lasciare l'opzione predefinita.<br><br>
>>![network](images/network_information.png){.thumbnail}<br>
>>
> 2. **Subnet (Sottorete)**
>>
>> **Subnet Name:** Immettere un nome per la sottorete.<br>
>> **Network Address:** Scegli un intervallo di rete privato. Ad esempio: `192.168.0.0/24`.<br>
>> **IP Version:** Lascia questo valore a IPv4.<br>
>> **Gateway IP:** Facoltativo. Se non viene definito, viene selezionato automaticamente un indirizzo Gateway IP.<br>
>> **Disable Gateway:** Disattivare questa opzione.<br><br>
>>![subnet](images/subnet_information.png){.thumbnail}<br>
>>
> 3. **Subnet Details (Dettagli sottorete)**
>>
>> **Enable DHCP:** Lascia questa opzione abilitata.<br>
>> **Allocation Pools:** Facoltativo. È possibile specificare l'intervallo in cui vengono selezionati gli indirizzi IP.<br>
>> **DNS Name Server:** Facoltativo. È possibile specificare qualsiasi server dei nomi DNS.<br>
>> **Host Routes:** Facoltativo. È possibile specificare qualsiasi route host.<br><br>
>>![KVM](images/subnetdetails_information.png){.thumbnail}<br>
>>

### Crea un'istanza

Nell’interfaccia Horizon, clicca su `Compute`{.action} nel menu a sinistra e seleziona `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

Visualizzi una pagina con tutte le istanze in esecuzione. Per avviarne una nuova, clicca sul pulsante `Launch Instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

A questo punto completa i campi con le informazioni richieste aiutandoti, se necessario, con la tabella qui sotto (la lista non è esaustiva).

**Details**

![createinstance](images/create-instance-step3.png){.thumbnail}

|Informazioni|Descrizione|
|---|---|
|Instance name|Specificare il nome che si desidera assegnare all'istanza che verrà avviata.|
|Description|Facoltativo. Se necessario, aggiungi una descrizione.|
|Availability zone|Lascia "nova" (scelta predefinita).|
|Count|Specificare il numero di istanze da creare.|


**Source**

![createinstance](images/create-instance-step4.png){.thumbnail}

|Informazioni|Descrizione|
|---|---|
|Select Boot Source|Fare clic sulla freccia a discesa per selezionare l'origine di avvio di un'istanza (ad esempio, "Image" o "Instance snapshot").|
|Create New Volume|È possibile selezionare questa opzione per creare un volume in cui copiare l'immagine del sistema operativo specificata.|
|Volume size (GB)|Se si sceglie di creare un volume, lasciare che sia il sistema a stabilire le dimensioni del volume.|
|Delete Volume on Instance Delete|È possibile mantenere l’opzione predefinita **No**. Se **Yes** è selezionato, quando l'istanza viene eliminata, viene eliminato anche il volume.|
|Image name|Selezionare l'immagine dell'istanza (solo in caso di avvio da un'immagine) facendo clic sulla freccia rivolta verso l'alto accanto all'immagine desiderata. Nel nostro esempio, utilizziamo una selezione di CentOS 7.|
|Instance snapshot|Scegli un’istantanea di un’istanza (solo in caso di avvio da uno Snapshot) cliccando sulla freccia verso l’alto accanto al fotogramma di istantanea di un’istanza di tua scelta.|

**Flavor**

![createinstance](images/create-instance-step5.png){.thumbnail}

*flavor* precostruiti sono disponibili per te, seleziona la *flavor* che preferisci nella scheda `Available`.

**Networks**

![createinstance](images/create-instance-step6.png){.thumbnail}

|Informazioni|Dettagli|
|---|---|
|Network|Seleziona, nell’elenco delle reti disponibili, le reti che vuoi creare |
|Ext-Net|Rappresenta la rete pubblica.|
|Mynewnetwork|Rappresenta la rete privata creata all'inizio di questa guida.|

**Security Groups (Gruppi di sicurezza)**

![createinstance](images/create-instance-step7.png){.thumbnail}

Per maggiori informazioni, consulta [questa guida](/pages/public_cloud/compute/setup_security_group).

**Key Pairs (Coppia di chiavi)**

> [!warning] 
>
> Anche se il campo "Key Pair" non è obbligatorio nell'interfaccia Horizon durante la creazione di un'istanza, la registrazione di una chiave SSH è assolutamente necessaria per potersi connettere a un'istanza. Senza chiave SSH, dovrai riavviare l'istanza in modalità Rescue per creare una password o aggiungere una chiave SSH nel file appropriato (per maggiori informazioni, consulta la guida [Sostituisci la tua chiave SSH in caso di perdita](/pages/public_cloud/compute/replacing_lost_ssh_key#procedura)).
>

In questa sezione è possibile creare una coppia di chiavi, importare una coppia di chiavi o utilizzare una coppia di chiavi esistente.

Per maggiori informazioni sulla creazione di una chiave SSH, consulta [questa guida](/pages/public_cloud/compute/public-cloud-first-steps#create-ssh).


> [!tabs]
> **+ Create Key Pair**
>>
>> Per creare una coppia di chiavi, clicca sul pulsante `+ Create Key Pair`{.action}. Ti ricordiamo che, con questa opzione, dovrai effettuare alcuni step supplementari prima di poter accedere all’istanza, soprattutto se utilizzi il software PuTTY per connetterti alla tua istanza. Consulta [questa sezione](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) della guida corrispondente.
>>
>> **Key Pair Name:** Immettere un nome per la chiave.<br>
>> **Key Type:** Fare clic sulla `freccia a discesa`{.action} e selezionare `SSH Key`{.action}.<br>
>> Clicca su `Create Keypair`{.action} per iniziare a creare la chiave.<br>
>>
>> Una volta creata la coppia di chiavi, clicca su `Copy Private Key to Clipboard`{.action} e poi su `Done`{.action}.<br><br><br>
>>![create ssh key](images/create-ssh-key-1.png){.thumbnail}<br>
>>
>> Una volta effettuata questa operazione, la chiave appena creata verrà selezionata automaticamente. Clicca su `Launch Instance`{.action} per avviare la creazione dell’istanza.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>
>>
> **Import Key Pair (Importa coppia di chiavi)**
>>
>> Per importare una chiave SSH creata precedentemente, clicca sul pulsante `Import Key Pair`{.action}.
>>
>> **Key Pair Name:** Immettere un nome per la chiave.<br>
>> **Key Type (Tipo di chiave):** Fare clic sulla `freccia a discesa`{.action} e selezionare `SSH Key`{.action}.<br>
>> **Load Public Key from a file (Carica chiave pubblica da file):** Fare clic su `Browse`{.action} per specificare la posizione della chiave pubblica nel computer.<br>
>> **Public Key:** Copia e incolla la chiave pubblica qui.<br>
>> Fare clic su `Import Key Pair`{.action} per importare la chiave.<br><br>
>>![import key pair](images/import-ssh-key.png){.thumbnail}<br>
>>
>> Al termine dell'operazione, la chiave importata verrà selezionata automaticamente. Clicca su `Launch Instance`{.action} per avviare la creazione dell’istanza.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>

**Altre opzioni**

Attenzione: queste opzioni non sono obbligatorie per la creazione di un’istanza di base. Per maggiori informazioni su queste opzioni, consulta la [documentazione ufficiale OpenStack](https://docs.openstack.org/horizon/latest/user/launch-instances.html){.external}.

|Informazioni|Dettagli|
|---|---|
|Custom script source|Specificare l'origine tra direct entry o file.|
|Script data|Immettere il codice di script nel campo di input (massimo 16 KB).|
|Script file|Fare clic su `Browse`{.action} per selezionare lo script di post-installazione.|
|Disk partitioning|Scegli tra "automatic" e "manual".|
|Configuration disk|Configura OpenStack per scrivere metadati su un disco di configurazione specifico che sarà associato all'Istanza all'avvio.|

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.