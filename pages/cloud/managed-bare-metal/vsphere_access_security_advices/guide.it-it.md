---
title: Best practice di sicurezza per il client vSphere Web
slug: sicurezza-accesso-vsphere-web
routes:
    canonical: 'https://docs.ovh.com/it/private-cloud/sicurezza-accesso-vsphere-web/'
excerpt: Come proteggere l’accesso al client vSphere Web
section: Per iniziare
updated: 2020-11-18
---

**Ultimo aggiornamento: 18/11/2020**

## Obiettivo

Per assicurare un livello di sicurezza ottimale di un’infrastruttura, limitare gli accessi potrebbe rivelarsi la scelta più giusta. Questa operazione può essere eseguita con diversi metodi. 

**Questa guida fornisce alcuni consigli utili per rendere più sicuro l’accesso al client vSphere in modo semplice e rapido.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Controlla gli accessi tramite IP

Il primo consiglio è relativo alla restrizione dell’accesso tramite IP, per cui suggeriamo di utilizzare un sistema di registrazione basato su <i>whitelist</i>. Questa tecnica consiste nel rifiutare di default l’accesso a tutti gli indirizzi IP e aggiungere gli indirizzi autorizzati a connettersi all’infrastruttura.

Questa operazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Accedi alla sezione Managed Bare Metal, seleziona il servizio in questione e clicca sulla scheda `Sicurezza`{.action}: compare una tabella che mostra gli indirizzi IP autorizzati o bloccati. Per aggiungerne di nuovi, clicca sul pulsante `Aggiungi IP`{.action} a destra:

![Aggiunta di IP](images/adding_ip.png){.thumbnail}


### Crea utenti specifici

Consigliamo vivamente di creare un accesso personale per ogni utente che ha bisogno di connettersi all’infrastruttura. Anche questa operazione è disponibile nello [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}: accedi alla scheda `Utenti`{.action} e clicca sul pulsante `Crea un utente`{.action}.

![Utenti](images/users.png){.thumbnail}


Durante la creazione dell’account utente, sarà necessario impostare una password.

> [!primary]
>
> Per una protezione ottimale dei dati, la password deve possedere alcuni requisiti specifici:
>
> - contenere almeno 8 caratteri
> - contenere almeno 3 tipi di caratteri
> - non essere tratta dal dizionario
> - non contenere informazioni personali (nome, cognome o data di nascita)
> - non essere utilizzata per più accessi
> - essere salvata in un <i>password manager</i>
> - essere cambiata ogni 3 mesi
> - essere diversa dalle password precedenti
>

In seguito sarà possibile gestire i diritti di ogni account cliccando sul pulsante `...`{.action} in corrispondenza dei diversi utenti:

![Modifica dei parametri degli utenti](images/users_edit.png){.thumbnail}

### Limita la durata delle sessioni

Al termine dell’utilizzo, consigliamo di chiudere la sessione aperta con l’account utilizzato.   Per limitare la durata delle connessioni è possibile impostare la scadenza della sessione.

Questa operazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Accedi alla sezione Managed Bare Metal, seleziona la scheda `Sicurezza`{.action} e clicca sul pulsante `Modifica la durata di una sessione `{.action} a destra.

![Scadenza della sessione](images/security-expiration.png){.thumbnail}

A questo punto, inserisci il numero di minuti di validità di una sessione.

![Scadenza della sessione](images/expiration.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
