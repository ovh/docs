---
title: 'Trasferire un nome di dominio Wix in OVHcloud'
excerpt: 'Questa guida ti mostra tutte le informazioni relative al trasferimento di un nome di dominio Wix in OVHcloud'
updated: 2026-02-10
---

## Obiettivo

Il trasferimento di un nome di dominio Wix richiede una procedura specifica.

**Questa guida ti mostra come trasferire un nome di dominio Wix in OVHcloud**

> [!warning]
>
> Il [Registrar](/links/web/domains-what-is-registrar) di un nome di dominio rappresenta l'organizzazione/provider accreditata presso la quale il nome di dominio è registrato/sottoscritto da un privato, un'associazione o un'organizzazione. È presso lo stesso Registrar che rinnovi la sottoscrizione del tuo nome di dominio (generalmente una volta all'anno).
>
> Se OVHcloud è già il Registrar del tuo nome di dominio **prima** di avviare la procedura che seguirà, il trasferimento in entrata del nome di dominio non è la procedura appropriata. La procedura trasferimento in entrata da un nome di dominio si applica **solo** ai nomi di dominio registrati in un altro Registrar di OVHcloud.
>
> Per trasferire la gestione del tuo nome di dominio verso un altro account cliente OVHcloud, la modalità corretta è una modifica dei contatti. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare l'**intestatario** del nome di dominio, è necessario farlo **prima** di modificare i contatti del nome di dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di intestatario dei domini](/pages/web_cloud/domains/trade_domain).
>

## Prerequisiti

- Il nome di dominio è registrato presso il Registrar Wix.
- Il nome di dominio esiste da più di 60 giorni.
- Il nome di dominio non è stato trasferito o non ha cambiato intestatario nel corso degli ultimi 60 giorni.
- Lo stato del nome di dominio è "OK" o "Trasferibile".
- Il nome di dominio non è scaduto e ha una data di scadenza che permette di completare il processo di trasferimento entro i termini (consigliato: oltre 60 giorni).

È inoltre necessario:

- Essere in grado di sbloccare il nome di dominio.
- Essere in possesso del codice di trasferimento o avere la possibilità di recuperarlo.
- Essere abilitato a richiedere il trasferimento del nome di dominio.
- Aver informato l'**intestatario** del nome di dominio e/o i suoi amministratori della richiesta di trasferimento.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il tuo attuale provider. OVHcloud non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

# Procedura

> [!primary]
>
> La zona DNS attiva di un nome di dominio contiene la configurazione DNS applicata al nome di dominio. che collega il nome di dominio a servizi come gli indirizzi email o un sito Web.
>
> Se, oltre al nome di dominio, disponi di una zona DNS attiva presso il tuo attuale Registrar, verifica che la zona DNS applicata non venga eliminata una volta effettuato il trasferimento.
>
> Alcuni Registrar eliminano la zona DNS in loro possesso al termine del trasferimento del nome di dominio. In questo caso, ricrea la zona DNS in OVHcloud prima di avviare le azioni associate al trasferimento del nome di dominio.
>
> Per farlo, consulta queste guide:
>
> - [Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Assicurati che il tuo attuale Registrar non chiuda altri servizi, ad esempio gli indirizzi email associati al nome di dominio.
>
> Se, oltre al trasferimento del nome di dominio, vuoi anche migrare i servizi associati (sito Web, email, ecc...), prima di proseguire consulta la nostra guida "[Migrare il sito Web e i servizi associati in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Questa guida ti mostra come migrare tutti i tuoi servizi senza interruzioni di servizio.
>
> Se trasferisci il tuo nome di dominio senza trasferire gli altri servizi, assicurati di recuperare i server DNS attivi per il tuo nome di dominio presso il tuo **Registrar** attuale e di inserirli direttamente nello step 3 della guida "[Trasferisci il tuo nome di dominio in OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)"
> In questo modo eviterai di interrompere l'associazione tra il tuo nome di dominio e i tuoi servizi esterni associati.
>

### Sblocca il nome di dominio e recupera il codice di trasferimento

Per sbloccare il nome di dominio e recuperare il codice di trasferimento, segui i passaggi descritti nella [documentazione dedicata di Wix](https://support.wix.com/it/article/trasferire-il-tuo-dominio-wix-fuori-da-wix-6225331).

### Avvia il trasferimento di nome di dominio in OVHcloud

Una volta ottenuto il codice di autorizzazione, è possibile procedere al trasferimento del nome di dominio seguendo gli step indicati nella nostra guida "[Trasferire un nome di dominio in OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Per saperne di più <a name="go-further"></a>

[Trasferire un nome di dominio in OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrare il proprio sito Web e le proprie email in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).