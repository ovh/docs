---
title: Autorizzare IP ad accedere al vCenter
slug: autorizzare-ip-ad-accedere-al-vcenter
routes:
    canonical: 'https://docs.ovh.com/it/private-cloud/autorizzare-ip-ad-accedere-al-vcenter/'
section: Funzionalità OVHcloud
updated: 2020-11-18
---

**Ultimo aggiornamento: 18/11/2020**

## Obiettivo

Impostare restrizioni di accesso al vCenter consente di limitare la connessione esclusivamente ad alcuni indirizzi IP autorizzati. 

**Questa guida ti mostra come gestire le restrizioni di accesso al vCenter per gli indirizzi IP.**

## Prerequisiti

* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
* Disporre di un’[infrastruttura Managed Bare Metal](https://www.ovhcloud.com/it/managed-bare-metal/){.external} sul proprio account OVHcloud

## Procedura

Se la [politica di accesso al vCenter è configurata come limitata](../modificare-la-politica-di-accesso-al-vcenter/), è necessario aggiungere gli IP che saranno autorizzati a connettersi al servizio.

Questa operazione può essere effettuata dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external-link}: nella sezione `Bare Metal Cloud`, clicca su `Managed Bare Metal` nella colonna a sinistra. Seleziona l’infrastruttura, clicca sulla scheda `Sicurezza` e poi su `Aggiungi una nuova classe di indirizzi IP`{.action}.

![vCenter](images/restrictIP.png){.thumbnail}

Nella nuova finestra, indica l’IP in questione ed eventualmente una descrizione per poterlo trovare più facilmente nella lista in un secondo momento.

Clicca su `Continua`{.action} per confermare l’operazione: una volta che l’IP risulterà **Autorizzato e installato**, potrà essere utilizzato per l’accesso a vSphere.

![vCenter](images/restrictIP2.JPG){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
