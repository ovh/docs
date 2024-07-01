---
title: 'Trasferire un dominio Ionos in OVHcloud'
excerpt: 'Questa guida ti mostra tutte le informazioni relative al trasferimento di un dominio Ionos in OVHcloud'
updated: 2024-07-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il trasferimento di un dominio Ionos richiede una procedura specifica.

**Questa guida ti mostra come trasferire un dominio Ionos in OVHcloud**

> [!warning]
>
> Il [Registrar](/links/web/domains-what-is-registrar) di un dominio rappresenta l'organizzazione/provider accreditata presso la quale il dominio è registrato/sottoscritto da un privato, un'associazione o un'organizzazione. È presso lo stesso Registrar che rinnovi la sottoscrizione del tuo dominio (generalmente una volta all'anno).
>
> Se OVHcloud è già il Registrar del tuo dominio **prima** di avviare la procedura che seguirà, il trasferimento in entrata del dominio non è la procedura appropriata. La procedura trasferimento in entrata da un dominio si applica **solo** ai domini registrati in un altro Registrar di OVHcloud.
>
> Per trasferire la gestione del tuo dominio verso un altro account cliente OVHcloud, la modalità corretta è una modifica dei contatti. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare il **proprietario** del dominio, è necessario farlo **prima** di modificare i contatti del dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di proprietario dei domini](/pages/web_cloud/domains/trade_domain).
>

## Prerequisiti

- il dominio è registrato presso il Registrar Ionos.
- il dominio esiste da più di 60 giorni.
- Il dominio non è stato trasferito o non ha cambiato proprietario nel corso degli ultimi 60 giorni.
- Lo stato del dominio è "OK" o "Trasferibile".
- il dominio non è scaduto e ha una data di scadenza che permette di completare il processo di trasferimento entro i termini (consigliato: oltre 60 giorni).

È inoltre necessario:

- Essere in grado di sbloccare il dominio.
- essere in possesso del codice di trasferimento o avere la possibilità di recuperarlo.
- essere abilitato a richiedere il trasferimento del dominio.
- Aver informato il proprietario del dominio e/o i suoi amministratori della richiesta di trasferimento.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il tuo attuale provider. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

# Procedura

> [!primary]
>
> La zona DNS attiva di un dominio contiene la configurazione DNS applicata al dominio. che collega il dominio a servizi come gli indirizzi email o un sito Web.
>
> Se, oltre al dominio, disponi di una zona DNS attiva presso il tuo attuale Registrar, verifica che la zona DNS applicata non venga eliminata una volta effettuato il trasferimento.
>
> Alcuni Registrar eliminano la zona DNS in loro possesso al termine del trasferimento del dominio. In questo caso, ricrea la zona DNS in OVHcloud prima di avviare le azioni associate al trasferimento del dominio.
>
> Per farlo, consulta queste guide:
>
> - [Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Assicurati che il tuo attuale Registrar non chiuda altri servizi, ad esempio gli indirizzi email associati al dominio.
>
> Se, oltre al trasferimento del dominio, vuoi anche migrare i servizi associati (sito Web, email, ecc...), prima di proseguire consulta la nostra guida "[Migrare il sito Web e i servizi associati in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Questa guida ti mostra come migrare tutti i tuoi servizi senza interruzioni di servizio.
>
> Se trasferisci il tuo dominio senza trasferire gli altri servizi, assicurati di recuperare i server DNS attivi per il tuo dominio presso il tuo **Registrar** attuale e di inserirli direttamente nello step 3 della guida "[Trasferisci il tuo dominio in OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)"
> In questo modo eviterai di interrompere l'associazione tra il tuo dominio e i tuoi servizi esterni associati.
>

### Step 1 - Disattiva la registrazione privata

Per confermare se la registrazione privata è attivata per il tuo dominio, segui gli step descritti nella [documentazione dedicata di Ionos](https://www.ionos.it/aiuto/domini/trasferire-un-dominio-allinterno-di-11-ionos/disattivare-la-registrazione-privata-per-un-dominio-su-11-ionos/){.external}.

### Step 2 - Disattiva il blocco del trasferimento

> [!warning]
>
> Per motivi di sicurezza, i domini con estensione generica (ad esempio *.com*, *.net* o *.org*) sono bloccati di default e non possono essere trasferiti. Prima di avviare un trasferimento di dominio, è necessario disattivare questo blocco.
>

Segui gli step descritti nella [documentazione dedicata di Ionos](https://www.ionos.it/aiuto/domini/trasferire-un-dominio-allinterno-di-11-ionos/disattivare-il-blocco-di-trasferimento-di-un-dominio-su-11-ionos/){.external}.

### Step 3 - Ottieni il codice di autorizzazione

Il codice di autorizzazione protegge il dominio da trasferimenti non autorizzati da parte di terzi. Questo codice è necessario per autorizzare il trasferimento del tuo dominio verso un nuovo provider.

Segui gli step descritti nella [documentazione dedicata di Ionos](https://www.ionos.it/aiuto/domini/trasferire-un-dominio-da-11-ionos-ad-un-provider-esterno/visualizzare-il-codice-di-autorizzazione-per-un-dominio-su-11-ionos/){.external}.

Una volta ottenuto il codice di autorizzazione, è possibile procedere al trasferimento del dominio seguendo gli step indicati nella nostra guida "[Trasferire un dominio in OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Per saperne di più <a name="go-further"></a>

[Migrare il proprio sito Web e le proprie email in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).