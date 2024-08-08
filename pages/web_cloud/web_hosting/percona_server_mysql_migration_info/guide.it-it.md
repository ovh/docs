---
title: "Migrazione da MySQL a Percona Server per MySQL"
excerpt: "Scopri i vantaggi della migrazione da MySQL a Percona Server per MySQL"
updated: 2024-07-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Nell'ambito del nostro impegno continuo a fornire soluzioni performanti e affidabili, OVHcloud ha scelto di migrare i propri servizi di database condivisi MySQL da Oracle verso Percona Server per MySQL.
Questa guida ti mostra le implicazioni di questa transizione e ti rassicura sul fatto che l’aggiornamento a Percona Server non ha alcun impatto sull’utilizzo del database MySQL.

**Scopri i vantaggi della migrazione da MySQL a Percona Server per MySQL.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting) con un database condiviso OVHcloud (MySQL) associato.

## Procedura

### Confronto di Percona Server per MySQL con MySQL di Oracle

Percona Server per MySQL è una versione avanzata e totalmente compatibile di MySQL, che fornisce migliori prestazioni e funzionalità aggiuntive senza compromettere la compatibilità con le applicazioni MySQL esistenti. Per illustrare ciò, ecco una tabella comparativa che mostra la corrispondenza delle funzionalità tra MySQL da parte di Oracle e Percona Server per MySQL.

|Funzionalità|MySQL di Oracle|Percona Server per MySQL|
|---|---|---| 
|Compatibilità SQL|Completa|Completa|
|Supporto motori InnoDB|Sì|Sì|
|Scalabilità|Standard|Esteso|
|Strumenti di gestione e monitoraggio|Basic|Avanzate|
|Sicurezza|Standard|Rafforzata|

### Impatto sull'utente finale

Per l’utente finale, il passaggio a Percona Server per MySQL è trasparente:

- **Nessuna modifica di codice necessaria**: le applicazioni funzioneranno come prima senza alcuna modifica del codice.
- **Prestazioni migliorate**: le prestazioni potrebbero aumentare grazie all'ottimizzazione del motore di storage InnoDB e agli strumenti di monitoring avanzati.

### Conclusione

La migrazione di MySQL da Oracle verso Percona Server per MySQL ha lo scopo di rafforzare le prestazioni e la stabilità dei database condivisi in OVHcloud. Questo aggiornamento è concepito per essere trasparente per gli utenti di MySQL, senza interruzione del servizio né modifiche dell'interfaccia utente. Ti garantiamo che la transizione avvenga senza complicazioni, per mantenere la continuità e la qualità dei servizi OVHcloud.

## Per saperne di più

[Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).