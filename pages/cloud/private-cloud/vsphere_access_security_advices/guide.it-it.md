---
title: 'Buone prassi di sicurezza sul client vSphere Web'
slug: rendere-piu-sicuro-accesso-vsphere-web
excerpt: 'Scopri come rendere più sicuro l’accesso al tuo client vSphere Web'
section: 'Per iniziare'
---

**Ultimo aggiornamento: 23/08/2018**

## Obiettivo

Per garantire l’integrità della tua infrastruttura, è opportuno restringerne l’accesso. Per fare ciò, ti proponiamo vari metodi. 

**Questa guida ti mostra come rendere rapidamente e facilmente più sicuro l’accesso al tuo client vSphere grazie ad alcuni nostri consigli.** 


## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}


## Procedura

### Controlla gli accessi tramite IP

Il primo consiglio riguarda la restrizione di accesso tramite IP. Ti consigliamo di operare sempre con un sistema di registrazione su whitelist. Questa tecnica si basa sul principio del divieto di tutti gli indirizzi IP, con eccezione per gli indirizzi che possono avere accesso alla tua infrastruttura. 

Questa azione è possibile direttamente dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Dopo aver effettuato l’accesso alla sezione Private Cloud, vai su `Sicurezza`{.action}. Comparirà una tabella sulla quale potrai vedere gli indirizzi IP autorizzati o rifiutati. Per aggiungerne di nuovi, clicca a destra su `Aggiungi IP`{.action}: 

![Aggiunta IP](images/adding_ip.png){.thumbnail}


### Crea utenti specifici

Ti consigliamo vivamente di creare un account utente per ogni persona che accede alla tua infrastruttura. Anche questa operazione si effettua nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, ma questa volta dalla scheda `Utenti`{.action}. Per aggiungerne di nuovi, clicca sul pulsante a destra: `Crea un utente`{.action}.

![Utenti](images/users.png){.thumbnail}

Per creare di un account utente è necessario inserire una password. 

> [!primary]
>
> Per rendere più sicuri i tuoi dati, la tua password deve possedere le seguenti caratteristiche:
>
> - contenere minimo otto caratteri; 
> - contenere minimo tre tipi di caratteri; 
> - non essere tratta dal dizionario; 
> - non deve contenere informazioni personali (il tuo nome, cognome o data di nascita); 
> - non deve essere utilizzata per molteplici utenti; 
> - essere archiviata in un password manager; 
> - essere cambiata ogni tre mesi; 
> - essere diversa dalle password precedenti.
>

In seguito potrai gestire i diritti di ogni utente cliccando sulla ruota dentata a destra di ciascun nome utente: 

![Modifica delle impostazioni utente](images/users_edit.png){.thumbnail}

### Limitare i tempi di sessione

Al termine dell’utilizzo, si consiglia di chiudere la sessione aperta col tuo account. Per limitare i tempi di connessione, è possibile impostare un timeout per la scadenza della sessione. 

Puoi compiere questa operazione dal tuo [Spazio clienti OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Dopo l’accesso al tuo Private Cloud, seleziona `Sicurezza`{.action}. Clicca sul tasto `Modifica il timeout di sessione`{.action} situato a destra.  La finestra che si apre ti permetterà di stabilire la durata (in minuti) di una sessione. 

![Scadenza della sessione](images/expiration.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.