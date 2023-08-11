---
title: 'Funzionamento del certificato SSL sulla CDN'
excerpt: 'Come aggiungere un certificato SSL sulla CDN'
updated: 2018-02-22
---

**Ultimo aggiornamento: 19/12/2018**

## Obiettivo

È possibile aggiungere un [certificato SSL](https://www.ovhcloud.com/it/web-hosting/options/ssl/){.external} sulla CDN (Content Delivery Network) per consentire agli utenti di stabilire connessioni sicure, anche nei casi in cui il traffico passi attraverso la CDN.

**Questa guida ti mostra nel dettaglio il funzionamento del certificato SSL <i>Let's Encrypt</i> fornito da OVH.**


## Prerequisiti

- Disporre della soluzione [CDN OVH](https://www.ovh.it/cdn/){.external}
- Avere accesso alla gestione della zona DNS del dominio

## Procedura

### Ottieni il certificato Let’s Encrypt di OVH per i sottodomini che utilizzano la CDN

- Se non hai configurato nessun certificato e stai integrando il primo sottodominio sula CDN, un certificato Let’s Encrypt verrà generato automaticamente per il dominio in questione.
- Se stai integrando un altro sottodominio sulla CDN, verrà generato automaticamente un nuovo certificato al fine di includere anche il nuovo sottodominio.


Per poter creare correttamente il certificato, è necessario che il sottodominio che stai aggiungendo punti correttamente verso l’IP della CDN. Per maggiori informazioni, consulta la guida su come [configurare per la prima volta un dominio sulla CDN](/pages/network/content_delivery_network_infrastructure/first_domain_name_configuration).

Il certificato si rinnova automaticamente nei 20 giorni precedenti la scadenza del certificato.

> [!warning]
>
> Il certificato Let’s Encrypt di OVH può essere utilizzato per i primi 100 domini o sottodomini configurati sulla CDN. Se hai la necessità di gestire più di 100 domini, dovrai configurare il tuo certificato Wildcard o Multidominio.
>


### Quanto tempo ci vuole per generare un certificato?

In media sono necessarie due ore affinché un certificato SSL venga generato (o rigenerato) e distribuito in tutti i nostri punti di presenza.

![Certificato SSL in corso](images/ssl_in_progress.png){.thumbnail}


Se il processo sembra richiedere più tempo del dovuto, verifica che tutti i domini configurati sulla tua soluzione puntino verso l’IP della CDN. In caso contrario, il nostro sistema non sarà in grado di generare correttamente il certificato.

Se hai aggiornato il puntamento durante la creazione del certificato, il nostro sistema riproverà a eseguire l’operazione per le successive 48 ore, dopodiché verrà automaticamente annullata.

Il nostro sistema eseguirà un altro tentativo nel momento in cui aggiungerai un nuovo dominio o se richiedi manualmente un certificato.

Una volta attivato il certificato otterrai questo risultato:

![SSL confermato](images/ssl_validated.png){.thumbnail}


### Aggiungi il tuo certificato

- Se non hai ancora integrato alcun dominio o se non possiedi un certificato, puoi utilizzare l’opzione `Aggiungi il tuo certificato`{.action} dalla scheda SSL della tua soluzione CDN OVH:


![Aggiungi un certificato SSL](images/add_ssl.png){.thumbnail}

- Se possiedi già un certificato Let's Encrypt, puoi semplicemente utilizzare l’opzione `Sostituisci con il tuo certificato`{.action}:

![Modifica un certificato SSL](images/change_ssl.png){.thumbnail}


## Per saperne di più

[Prima configurazione di un dominio](/pages/network/content_delivery_network_infrastructure/first_domain_name_configuration)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.