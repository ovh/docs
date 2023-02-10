---
title: Modificare i permessi di un utente
slug: modificare-permessi-di-un-utente
section: Funzionalità OVHcloud
updated: 2020-06-29
---

**Ultimo aggiornamento: 30/04/2020**

## Obiettivo

Il servizio Private Cloud di OVHcloud permette di assegnare agli utenti permessi che li autorizzano a eseguire operazioni specifiche.

**Questa guida ti mostra come gestire i permessi utente sulla tua infrastruttura.**

## Prerequisiti

* Disporre di una soluzione [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external}
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e, nella sezione `Hosted Private Cloud`{.action}, clicca su `Private Cloud`{.action} nella colonna a sinistra e seleziona il servizio su cui apportare la modifica.

Clicca sulla scheda `Utenti`{.action} e poi sui tre puntini in corrispondenza dell’utente in questione.

![Visualizza/Modifica i diritti per DC](images/user_rights_1.png){.thumbnail}

Dal menu a tendina è possibile modificare i diritti degli utenti vSphere per datacenter:

![Modificare i diritti](images/user_rights_2.png){.thumbnail}

| Accesso  | Tipo di permesso | Descrizione |
|---|---|---|
| Accesso vSphere | Nessuno/Sola lettura/Lettura e scrittura | Permessi globali dell'utente su vSphere |
| Accesso al vmNetwork | Nessuno/Sola lettura/Provider | Permessi di gestione nella sezione della rete pubblica (“VM Network” nell'interfaccia vSphere) |
| Accesso al V(x)Lans | Nessuno/Sola lettura/Provider/Amministratore | Permessi di gestione nella sezione della rete privata (VxLan e VLAN) |
| Aggiunta di risorse | Sì/No | Permesso di aggiungere risorse supplementari tramite il plugin OVHcloud nel client vSphere (Host, Datastore, Veeam Backup) |

![Modificare i diritti](images/user_rights_3.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
