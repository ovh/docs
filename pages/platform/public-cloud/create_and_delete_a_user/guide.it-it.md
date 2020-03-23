---
title: 'Creare e rimuovere un utente OpenStack'
slug: creation-and-deletion-of-openstack-user
---

**Ultimo aggiornamento 06/12/2019**

## Obiettivo
Per utilizzare le API OpenStack o Horizon è necessario creare un utente OpenStack. Questa guida ti mostra come creare e rimuovere un utente.

Il numero degli utenti OpenStack è illimitato.


## Prerequisiti
Aver creato un Progetto Public Cloud da oltre 7 giorni, se si tratta del primo (altrimenti, contatta il team di supporto per verificare se è possibile sbloccare il progetto prima). Gli altri progetti non hanno questo limite.


## Procedura

### Crea un utente OpenStack
Per accedere a Horizon bisogna innanzitutto creare un utente OpenStack. Per farlo, accedi al tuo Spazio Cliente, sezione `Public Cloud`{.action},  clicca sull’icona a forma di `freccia`{.action} e infine seleziona il progetto che ti interessa.

![Add user](images/select_project.png){.thumbnail}

Nella sezione “Project Management” del menu a sinistra, seleziona `Users & Roles user`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Clicca sul pulsante `Create User`{.action} per generare il seguente pop-up.

![Add user](images/adduser.png){.thumbnail}

La descrizione utente non corrisponde al nome utente: è soltanto un termine descrittivo per aiutarti a ricordare di che tipo di utente si tratta. Nella nuova finestra, puoi impostare i permessi dell’utente. Per ogni ruolo selezionato, all’utente vengono assegnati i permessi corrispondenti, come mostrato nella tabella qui sotto:

![Permissions](images/permissions.png){.thumbnail}

Al termine dell’operazione clicca su `Conferma`{.action} e visualizzerai la seguente finestra: 

![User_pw](images/user_pw.png){.thumbnail}

Ricordati di salvare la password ora per poterla utilizzare di nuovo per una successiva connessione. Tuttavia, se la perdi puoi sempre crearne una nuova cliccando sui tre puntini (...) nel seguente menu e selezionando `Crea una nuova password:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Una volta creato l’utente, puoi accedere all’interfaccia Horizon con queste credenziali dalla sezione `Horizon`{.action} nel menu a sinistra.

### Rimuovi un utente OpenStack

È possibile rimuovere un utente OpenStack direttamente dallo Spazio Cliente OVHcloud (Cloud → Servers → Nome del progetto Public Cloud). Vai nella sezione OpenStack e clicca sull’icona a forma di cestino a destra della schermo.


![public-cloud](images/delete.png){.thumbnail}

L’utente verrà eliminato in pochi secondi.

> [!alert]
>
> La rimozione di un utente è definitiva e, di conseguenza,
> tutti i token associati non saranno più validi, anche quelli con data di scadenza non ancora superata.
> 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.