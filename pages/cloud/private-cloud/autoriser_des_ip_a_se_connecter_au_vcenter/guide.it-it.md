---
title: Autorizzare IP ad accedere al vCenter
slug: autorizzare-ip-ad-accedere-al-vcenter
legacy_guide_number: '1442255'
space_key: VS
space_name: vSphere as a Service
section: Funzionalità OVHcloud
---

**Ultimo aggiornamento: 18/08/2021**

## Obiettivo

Impostare restrizioni di accesso al vCenter consente di limitare la connessione esclusivamente ad alcuni indirizzi IP autorizzati. 

**Questa guida ti mostra come gestire le restrizioni di accesso al vCenter per gli indirizzi IP.**

## Prerequisiti

* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
* Disporre di un’[infrastruttura Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external} sul proprio account OVHcloud

## Procedura

Se la [politica di accesso al vCenter è configurata come limitata](../modificare-la-politica-di-accesso-al-vcenter/), è necessario aggiungere gli IP che saranno autorizzati a connettersi al servizio.

Questa operazione può essere effettuata dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external-link}: nella sezione `Hosted Private Cloud`, clicca su `Private Cloud` nella colonna a sinistra. Seleziona l’infrastruttura, clicca sulla scheda `Sicurezza` e poi su `Aggiungi una nuova classe di indirizzi IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Nella nuova finestra, indica l’IP in questione ed eventualmente una descrizione per poterlo trovare più facilmente nella lista in un secondo momento.

Clicca su `Continua`{.action} per confermare l’operazione: una volta che l’IP risulterà **Autorizzato e installato**, potrà essere utilizzato per l’accesso a vSphere.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Ti ricordiamo che, per motivi di sicurezza, puoi autorizzare un massimo di 2048 indirizzi IP a connettersi al tuo vCenter.
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
