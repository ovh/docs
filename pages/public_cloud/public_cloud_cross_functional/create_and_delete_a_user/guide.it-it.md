---
title: Gestione degli utenti OpenStack
excerpt: "Scopri come gestire gli utenti OpenStack nello Spazio Cliente OVHcloud e nell’interfaccia Horizon"
updated: 2025-04-28
---

## Obiettivo

L’accesso a Horizon e alle API OpenStack avviene tramite combinazioni identificativo/password chiamate "*OpenStack users*". Potrete creare tutti gli utenti OpenStack che vi servono e attribuire loro diversi diritti di accesso.

Dall’interfaccia Horizon, è possibile impostare una password per ogni utente. Attenzione: la modifica della password di un account utente comporta la revoca immediata della password precedente.

**Questa guida ti mostra come gestire gli utenti OpenStack dallo Spazio Cliente OVHcloud e tramite l’interfaccia Horizon.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Un progetto [Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Crea un utente OpenStack

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Public Cloud`{.action} e seleziona il progetto Public Cloud interessato. Clicca su `Utenti e ruoli`{.action} nel menu a sinistra sotto **Impostazioni**. 

Clicca sul pulsante `Crea un utente`{.action}.

![User roles](images/users_roles.png){.thumbnail}

La descrizione dell'utente non è il nome utente OpenStack ma una descrizione da inserire per aiutarti a organizzare gli utenti e i loro diritti. Inserisci una descrizione e clicca su `Seguente`{.action}.

![Add user](images/adduser.png){.thumbnail}

Adesso puoi selezionare ruoli che rappresentano le autorizzazioni che l'utente otterrà. Per ogni casella selezionata, l'utente otterrà privilegi di accesso in base alla tabella qui sotto.

![Permessi](images/permissions.png){.thumbnail}

Clicca su `Conferma`{.action} per creare l'utente OpenStack. L'identificativo e la password vengono generati automaticamente e visualizzati nello Spazio Cliente.

![User_pw](images/user_pw.png){.thumbnail}

Salva la password, solo visualizzata in verde in quel momento, su un gestore di password. La password non potrà essere recuperata in seguito. Tuttavia, è sempre possibile creare una nuova password cliccando su `...`{.action} e selezionando `Rigenerare una password`{.action}.

![Generate](images/generatepw.png){.thumbnail}

Una volta creato l'utente OpenStack, puoi utilizzare le credenziali per accedere all'[interfaccia Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) cliccando sul link `Horizon`{.action} nel menu di sinistra.

### Modificare la password di un utente OpenStack

Puoi creare una password OpenStack dopo esserti collegato a [OpenStack Horizon](https://horizon.cloud.ovh.net/): 

![Connessione a Horizon](images/1_H_login_window.png){.thumbnail}

Il nome utente Horizon si trova nell’angolo in alto a destra dell’interfaccia Horizon. Clicca sul tuo nome utente per far apparire un menu con le opzioni disponibili. Seleziona `Settings`{.action} e poi, sulla sinistra, `Change Password`{.action}.

![Modifica della password](images/2_H_pass_change_option.png){.thumbnail}

Inserisci la password attuale nel primo campo e la nuova password nei due campi successivi.

> [!primary]
>
> è necessario che la nuova password abbia la seguenti caratteristiche: 
>
> - un minimo di 8 caratteri
> - un massimo di 30 caratteri
> - almeno una lettera maiuscola 
> - almeno una lettera minuscola
> - almeno un numero
> - solo numeri e lettere
>

Successivamente conferma la tua nuova password cliccando su `Change`{.action}.

![Impostazione password](images/3_H_set_new_passord.png){.thumbnail}

Ricorda che la modifica della password dell’account utente comporta l’annullamento immediato delle precedenti credenziali.

### Elimina l'utente OpenStack

L'utente OpenStack viene eliminato dallo [Spazio Cliente OVHcloud](/links/manager). Clicca su `Utenti e ruoli`{.action} nel menu a sinistra sotto **Impostazioni**. 

![public-cloud](images/delete.png){.thumbnail}

Clicca su `...`{.action} e seleziona `Elimina`{.action}.

> [!warning]
>
> L'eliminazione di un utente è definitiva e invaliderà tutti i token associati, inclusi quelli la cui data di scadenza non è ancora stata superata.
> 

## Per saperne di più

[Introduzione a Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Contatta la nostra [Community di utenti](/links/community).
