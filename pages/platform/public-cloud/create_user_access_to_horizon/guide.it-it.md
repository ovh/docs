---
title: 'Creare un utente per accedere a Horizon'
excerpt: 'Scopri come accedere all’interfaccia Horizon'
slug: crea_un_utente_per_accedere_a_horizon
legacy_guide_number: g1773
section: 'Dall’interfaccia Horizon'
order: 1
---

**Ultimo aggiornamento: 14/11/2019**

## Obiettivo

Horizon è l’interfaccia grafica d’amministrazione di OpenStack.  Alcune funzioni sono disponibili soltanto da questa interfaccia.

**Questa guida ti mostra come eseguire l’accesso a Horizon.**


## Prerequisiti

- Aver creato un progetto Public Cloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Crea un utente OpenStack

Per accedere a Horizon bisogna innanzitutto creare un utente OpenStack. Per farlo, accedi al tuo Spazio Cliente, sezione`Public Cloud`{.action},  poi clicca sull’icona a forma di`freccia`{.action}e infine seleziona il progetto che ti interessa.

![Add user](images/select_project.png){.thumbnail}

Nella sezione “Project Management” del menu a sinistra, seleziona`Users & Roles user`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Clicca sul pulsante`Create User`{.action}per generare il seguente pop-up.

![Add user](images/adduser.png){.thumbnail}

La descrizione utente non corrisponde al nome utente: è soltanto un termine descrittivo per aiutarti a ricordare di che tipo di utente si tratta. Nella nuova finestra, puoi impostare i permessi dell’utente. Per ogni ruolo selezionato, all’utente vengono assegnati i permessi corrispondenti, come mostrato nella tabella qui sotto:

![Permissions](images/permissions.png){.thumbnail}

Al termine dell’operazione clicca su`Conferma`{.action}e visualizzerai la seguente finestra: 

![User_pw](images/user_pw.png){.thumbnail}

Ricordati di salvare la password ora per poterla utilizzare di nuovo per una successiva connessione. Tuttavia, se la perdi puoi sempre crearne una nuova cliccando sui tre puntini (...) nel seguente menu e selezionando`Crea una nuova password:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Una volta creato l’utente, puoi accedere all’interfaccia Horizon con queste credenziali dalla sezione `Horizon`{.action}nel menu a sinistra.

### Accedi a OpenStack Horizon

Per aprire il menu, clicca sui tre puntini al termine della riga `...`{.action}, poi clicca sul link`Apri OpenStack Horizon`{.action} per aprire la pagina di login di [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}. Per effettuare l’accesso, inserisci `Nome Utente` e password.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Una volta effettuato l’accesso, puoi visualizzare l’interfaccia OpenStack Horizon.

![Horizon interface](images/5_H_view.png){.thumbnail}


## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.