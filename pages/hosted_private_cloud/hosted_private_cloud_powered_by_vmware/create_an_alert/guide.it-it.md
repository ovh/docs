---
title: Creare un alert
excerpt: Come impostare un allarme sul tuo client vSphere
updated: 2020-07-08
---

**Ultimo aggiornamento: 29/06/2020**

## Obiettivo

Tutti gli elementi di un Private Cloud consentono la creazione di alert: datacenter, cluster, VM, datastore, rete...

**Questa guida ti mostra come attivare l’invio di alert sul tuo servizio.**

## Prerequisiti

- Disporre di un servizio [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external} attivo
- Avere accesso all’[interfaccia vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion)

## Procedura

### Creare un alert

Per creare un alert, clicca con il tasto destro sul datacenter o qualsiasi altro elemento da monitorare e seleziona `Alarms`{.action} > `New Alarm Definition`{.action}.

![Creazione di un alert](images/alarms01.png){.thumbnail}

### Definisci un nome e il target

Il primo step consiste nell’assegnare un nome all’alert e definirne il target. È inoltre possibile aggiungere una descrizione.

![Nome e destinazione dell'alert](images/alarms02.png){.thumbnail}

### Configura le regole dell’alert

A questo punto è necessario definire le regole dell’alert e le conseguenti azioni.

Il campo `IF` permette di indicare, tra una serie di variabili disponibili, l’elemento che determinerà l’attivazione dell’alert. In base alla variabile selezionata verrà proposta la lista degli argomenti associati.

Il campo `THEN` permette di indicare le azioni che verranno effettuate al raggiungimento di un certo livello di criticità, come l’invio di un’email, l’esecuzione di uno script o l’arresto di una VM.

![Regole dell'alert](images/alarms03.png){.thumbnail}

In questo modo è possibile, ad esempio, monitorare la RAM di un host indicando la soglia massima da raggiungere prima dell’attivazione dell’allarme e dell’invio di un’email di notifica.

>[!primary]
> Cliccando su `ADD ANOTHER RULE`{.action} è possibile aggiungere più regole all’alert.
>

### Sospendi l’alert

Lo step successivo permette di stabilire i criteri che determinano la fine dell’alert e l’esecuzione di nuove azioni.

![Sospensione dell'alert](images/alarms04.png){.thumbnail}

### Riepilogo dell’alert

Lo step finale presenta un riepilogo delle regole definite. È possibile attivare l’allarme abilitando l’apposito cursore oppure cliccando con il tasto destro sull’elemento scelto e selezionando `Alarms`{.action} > `Enable Alarm Actions`{.action}.

![Ripeilogo dell'alert](images/alarms05.png){.thumbnail}

In questo step è possibile anche configurare la frequenza di ripetizione dell’alert.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
