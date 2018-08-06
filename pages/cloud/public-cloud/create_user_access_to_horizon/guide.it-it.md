---
title: 'Crea un utente per accedere a Horizon'
excerpt: 'Scopri come accedere all’interfaccia Horizon'
slug: crea_un_utente_per_accedere_a_horizon
legacy_guide_number: g1773
section: 'Dall’interfaccia Horizon'
order: 1
---

**Ultimo aggiornamento: 06/08/2018**

## Obiettivo

Horizon è l’interfaccia grafica d’amministrazione di OpenStack. Alcune funzioni sono disponibili soltanto da questa interfaccia.

**Questa guida ti illustra come accedervi.**

## Prerequisiti

- Aver creato un progetto Public Cloud.
- Avere accesso allo [Spazio Clienti OVH](https://www.ovh.com/auth/?action=gotomanager)

## Procedura

### Creare un utente OpenStack

Per accedere a Horizon bisogna innanzitutto creare un utente OpenStack. Per fare ciò accedi al tuo Spazio Clienti, vai nella sezione `Cloud`{.action}, poi su `Server`{.action} e infine selezione il progetto che ti interessa. In seguito seleziona la scheda `OpenStack`{.action} nella colonna di sinistra:

![Aggiunta di un utente](images/1_H_add_user.png){.thumbnail}

Clicca su `Aggiungi un utente`{.action} e scegli una descrizione utente.  Il nome utente e la password sono generati automaticamente in seguito. Una volta terminata l’operazione, comparirà il messaggio di conferma di creazione dell’account.

La password è visibile nello Spazio Clienti fino all’aggiornamento della pagina. Puoi salvarla per poterla utilizzare di nuovo per una successiva connessione. E’ anche possibile creare una nuova password cliccando sull'icona di aggiornamento che compare accanto alla tua password. 


### Connettersi a OpenStack Horizon

Per visualizzare il menù, clicca sul simbolo dei tre punti al termine della riga `...`{.action} Clicca in seguito sul link `Apri Openstack Horizon`{.action} . A quel punto comparirà la pagina di connessione di [Horizon](https://horizon.cloud.ovh.net/auth/login/). Per connetterti, inserisci il tuo nome utente (User Name) e la tua password. 

![Menù del progetto](images/3_H_open_menu.png){.thumbnail}

Una volta connesso, comparirà l’interfaccia OpenStack Horizon. 

![Interface Horizon](images/5_H_view.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.