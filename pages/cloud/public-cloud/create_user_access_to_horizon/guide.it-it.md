---
title: 'Creare un utente per accedere a Horizon'
excerpt: 'Scopri come accedere all’interfaccia Horizon'
slug: crea_un_utente_per_accedere_a_horizon
legacy_guide_number: g1773
section: 'Dall’interfaccia Horizon'
order: 1
---

**Ultimo aggiornamento: 24/08/2018**

## Obiettivo

Horizon è l’interfaccia grafica d’amministrazione di OpenStack. Alcune funzioni sono disponibili soltanto da questa interfaccia.

**Questa guida ti mostra come eseguire l'accesso a Horizon.**

## Prerequisiti

- Aver creato un progetto Public Cloud
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager)

## Procedura

### Crea un utente OpenStack

Per accedere a Horizon bisogna innanzitutto creare un utente OpenStack. Per fare ciò accedi al tuo Spazio Cliente, sezione `Cloud`{.action}, poi clicca su `Server`{.action} e infine seleziona il progetto che ti interessa. In seguito seleziona la scheda `OpenStack`{.action} nella colonna di sinistra:

![Aggiunta di un utente](images/1_H_add_user.png){.thumbnail}

Clicca su `Aggiungi un utente`{.action} e scegli una descrizione utente. Il nome utente e la password si generano automaticamente in seguito. Una volta terminata l’operazione, compare il messaggio di conferma di creazione dell’account.

La password è visibile nello Spazio Cliente fino all’aggiornamento della pagina. Puoi salvarla per poterla utilizzare di nuovo per una successiva connessione. È anche possibile creare una nuova password cliccando sull'icona di aggiornamento che appare accanto alla tua password. 


### Accedi a OpenStack Horizon

Per visualizzare il menu, clicca sul simbolo dei tre punti al termine della riga `...`{.action} e clicca sul link `Apri Openstack Horizon`{.action}. A questo punto compare la pagina di connessione di [Horizon](https://horizon.cloud.ovh.net/auth/login/). Per connetterti, inserisci il tuo nome utente (User Name) e password. 

![Menù del progetto](images/3_H_open_menu.png){.thumbnail}

Una volta connesso, puoi visualizzare l’interfaccia OpenStack Horizon. 

![Interface Horizon](images/5_H_view.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.