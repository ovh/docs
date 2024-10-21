---
title: "Presentazione delle identità che possono interagire all'interno di un account OVHcloud"
excerpt: "Scopri i diversi tipi di identità che permettono di interagire con un prodotto OVHcloud"
updated: 2024-10-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Lo scopo di questa guida è di presentare i diversi tipi di identità che possono essere gestite nell’account OVHcloud.

## Prerequisiti

- Disporre di un [account cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Procedura

### Presentazione delle identità

Esistono diversi tipi di identità che possono interagire con i prodotti OVHcloud:

![identities-types](images/identities_types.png){.thumbnail}

### Account OVHcloud

identificativo primario utilizzato per accedere allo Spazio Cliente OVHcloud. L’account OVHcloud viene utilizzato per accedere allo Spazio Cliente con il proprio indirizzo email o identificativo cliente (ad esempio xx1111-ovh).

Questa identità agisce come un account root e non può vedersi limitati i propri diritti, indipendentemente dalle politiche di accesso applicate.

L'account OVHcloud può essere referenziato sotto il nome di NIC o NIC-handle nella documentazione.

### Utenti locali

Gli utenti locali sono identità associate all’account OVHcloud. Questi account sono progettati per le **interazioni umane** con i prodotti OVHcloud in quanto basati su un’autenticazione di tipo login/password e i cui diritti di accesso dipendono dalle [politiche IAM](/pages/account_and_service_management/account_information/iam-policy-ui) messe in atto.

La configurazione degli utenti locali è descritta nella [documentazione dedicata](/pages/account_and_service_management/account_information/ovhcloud-users-management).

Possono essere utilizzati anche per la connessione alle API OVHcloud [generando un token associato all’utente](/pages/manage_and_operate/api/first-steps). I diritti di questo token possono essere limitati a un perimetro preciso, in aggiunta alle politiche IAM.

Per utilizzare un’API OVHcloud in un’applicazione basata su token associato a un utente locale, è necessario che il token l’integri nel suo perimetro **e** che l’utente che ha creato il token disponga dei diritti su questa API.

Nella documentazione relativa agli utenti locali è inoltre possibile fare riferimento al nome *sub-user*.

Per garantire la tracciabilità del percorso, consigliamo di installare degli utenti locali ogni volta che più di una persona deve accedere al tuo account OVHcloud.

### Account di servizio

Gli account di servizio sono identità associate all’account OVHcloud. Questi account sono progettati per **interazioni macchina** con i prodotti OVHcloud in quanto basati su un’autenticazione di tipo cliente/token e i cui diritti di accesso dipendono dalle [politiche IAM](/pages/account_and_service_management/account_information/iam-policy-ui) messe in atto.

La creazione degli account di servizio è descritta nella [documentazione dedicata](/pages/manage_and_operate/api/manage-service-account).

Un account di servizio può quindi essere utilizzato per la [connessione sulle API OVHcloud](/pages/account_and_service_management/account_information/authenticate-api-with-service-account) e su API terze come quelle esposte da [OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

La connessione agli account di servizio non è ancora supportata su SDK e provider Terraform.

### Utenti federati

Sono gli account utente di una [federazione identità](/products/manage-operate-user-federation). Questi utenti provengono da un elenco di terze parti e non sono quindi gestiti direttamente da OVHcloud. I loro diritti di accesso dipendono dalle [politiche IAM](/pages/account_and_service_management/account_information/iam-policy-ui) implementate.

Gli utenti federati sono rappresentati da gruppi di utenti a livello di gestione dei diritti.

Consigliamo di creare una federazione di identità quando il numero di persone che si connettono al tuo account OVHcloud diventa sufficientemente elevato, o se vuoi centralizzare gli accessi su un elenco terzi utilizzato per servizi diversi da OVHcloud.

### Gruppi di utenti

Le diverse identità possono essere associate a gruppi di utenti per facilitarne la manipolazione.
La configurazione dei gruppi di utenti è descritta nella documentazione di gestione degli [utenti locali](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Utenti dei prodotti OVHcloud

Alcuni prodotti messi a disposizione da OVHcloud possono offrire agli utenti una soluzione aggiuntiva, come OpenStack, VMware vSphere o Object Storage.
Questi utenti sono indipendenti dall'account OVHcloud e vengono gestiti direttamente attraverso i prodotti interessati.

Per i prodotti che permettono di utilizzare un'identità OVHcloud (utente locale, account di servizio, utente federato) o un utente specifico del prodotto, consigliamo di utilizzare questi utenti specifici per mantenere la reversibilità del prodotto e limitare la dipendenza da OVHcloud.
Per una gestione centralizzata su tutti i prodotti, consigliamo di utilizzare le identità OVHcloud.

## Per saperne di più <a name="go-further"></a>

La gestione delle identità può essere automatizzata tramite le [API OVHcloud](/pages/manage_and_operate/api/first-steps) o tramite il [provider Terraform OVHcloud](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

Contatta la nostra [Community di utenti](/links/community).