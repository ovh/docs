---
title: 'Funzionamento della quota sulla CDN'
slug: funzionamento-quota-cdn
excerpt: 'Come funziona la gestione della quota disponibile sulla CDN OVH'
section: 'Per iniziare'
order: 3
---

**Ultimo aggiornamento: 20/08/2019**

## Obiettivo

La CDN (Content Delivery Network) è un servizio che permette di ottimizzare i tempi di risposta dei siti Web, velocizzando il caricamento delle pagine visitate. Quando un utente accede ai contenuti di un sito, la connessione stabilita genera un flusso di dati che comporta il consumo della quota, cioè del volume massimo di traffico dati che può transitare da e verso la CDN.

**Questa guida ti mostra come funziona la CDN OVH e fornisce alcune informazioni  sulla sua gestione.**


## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}


## Procedura

### Rinnovo della quota

L’attivazione della CDN OVH permette di usufruire di **1 TB** di traffico incluso. Questa quota non si rinnova mensilmente con il servizio ma, indipendentemente dalla sua durata, una volta consumata è necessario ordinare una quota aggiuntiva.

Il traffico supplementare può essere aggiunto direttamente dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}:

![Aggiungere quota](images/add_quota.png){.thumbnail}


Le tariffe relative alla quota aggiuntiva sono disponibili sul [sito OVH](https://www.ovh.it/cdn/infrastructure/){.external}.

Al raggiungimento di **100 GB** residui viene inviata automaticamente una notifica per poter pianificare un nuovo acquisto di banda passante. Se il traffico a disposizione termina si attiva automaticamente la funzione _bypass_, che resterà abilitata fino a quando non sarà nuovamente disponibile una quota.


### Fatturazione del traffico sulla CDN

> [!primary]
>
> Per il servizio CDN viene fatturato tutto il traffico in uscita.  
>

Analizziamo questo esempio:

![Utilizzo della quota](images/quota_used.png){.thumbnail}


- I 21,74 MB rappresentano file già salvati in cache: significa che la CDN ha potuto rispondere direttamente alle richieste relative a questi file.

- I 72,96 MB rappresentano file richiesti direttamente al *backend*, dietro la CDN.


I contenuti salvati in cache e quelli richiesti direttamente al *backend* dipenderanno dalle regole di cache applicate al dominio, ma entrambi verranno sottratti dalla quota totale disponibile. Ti consigliamo quindi di creare un sottodominio specifico dedicato ai file da salvare in cache e utilizzare i domini che puntano verso il *backend* per gli altri file.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
