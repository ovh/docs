---
title: 'Modificare la password di un utente OpenStack in Horizon'
excerpt: 'Scopri come modificare una password utente nell’interfaccia Horizon'
slug: modifica-della-password-di-un-utente-openstack
section: 'Dall’interfaccia Horizon'
---

**Ultimo aggiornamento: 24/08/2018**

## Obiettivo

Dopo aver creato un utente OpenStack e generato una password di accesso seguendo la guida [Creare un utente per accedere a Horizon](https://docs.ovh.com/it/public-cloud/crea_un_utente_per_accedere_a_horizon/){.external}, è possibile effettuarne la modifica attraverso l'interfaccia Horizon. È importante ricordare che questa operazione comporta l’annullamento delle precedenti credenziali.

**Questa guida ti mosta come personalizzare una password utente dall’interfaccia Horizon.**


## Prerequisiti

- Aver creato un account utente OpenStack Horizon


## Procedura

Puoi creare una password OpenStack dopo esserti collegato a [OpenStack Horizon](https://horizon.cloud.ovh.net/){.external}: 

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

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.