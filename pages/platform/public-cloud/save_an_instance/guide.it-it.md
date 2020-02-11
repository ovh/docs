---
title: 'Effettuare lo Snapshot di un''istanza'
slug: effettuare-snapshot-di-un-istanza
excerpt: 'Come eseguire l’istantanea di un’istanza Public Cloud OVHcloud'
legacy_guide_number: g1881
section: 'Spazio Cliente OVH'
---

**Ultimo aggiornamento: 22/11/2019**

## Obiettivo

Dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} è possibile creare uno Snapshot in qualsiasi momento e utilizzarlo per ripristinare una configurazione precedente o creare una nuova istanza.

**Questa guida ti mostra come eseguire l’istantanea di un’istanza Public Cloud OVHcloud in pochi click.**

## Prerequisiti

- [Disporre di un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/crea_unistanza_dallo_spazio_cliente_ovh/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Effettua un backup dell’istanza

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona la scheda Public Cloud e poi la sezione `Istanze`{.action}.

Clicca sui `...`{.action} a destra dell’istanza che ti interessa e poi su `Crea uno Snapshot`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Nella nuova finestra, assegna un nome alla tua istantanea.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Una volta terminata l’operazione, visualizzi l’istantanea nella sezione`Instance Backup`{.action}.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Crea lo Snapshot di un’istanza

Nella sezione `Istanze`{.action}, seleziona l’opzione`Crea uno Snapshot`{.action} tra le azioni disponibili per l’istanza interessata.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Nella nuova finestra, ti verrà chiesto di inserire alcune informazioni :

#### **Il workflow** 

Attualmente esiste un unico workflow, che eseguirà un’istantanea dell’istanza e del suo volume principale.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **La risorsa** 

È sufficiente selezionare l’istanza della quale vuoi creare uno Snapshot.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **L’autorizzazione** 

Definisci la frequenza degli Snapshot. Di default, hai due opzioni:

* Uno Snapshot giornaliero con una cronologia consultabile per un massimo di 7 giorni 
* Uno Snapshot giornaliero con una cronologia consultabile per un massimo di 14 giorni

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **Il naming** 

Assegna un nome alla tua istantanea.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Una volta creata, potrai visualizzarla nella sezione`Workflow Management`{.action}:

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Visualizzi gli Snapshot disponibili nella sezione `Instance Backup`{.action} e addebitati come tali.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>.