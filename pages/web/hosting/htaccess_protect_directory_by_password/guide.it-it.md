---
title: "Tutorial - Proteggere una directory o l'interfaccia di amministrazione del tuo sito web con file .htaccess e .htpasswd"
slug: condividi-htaccess-come-proteggere-laccesso-a-una-cartella-tramite-autenticazione
excerpt: "Questa guida ti mostra come proteggere una directory o l'accesso alla gestione del tuo sito Web tramite un'autenticazione con i file .htaccess e .htpasswd"
section: Scrittura e autenticazione
order: 02
updated: 2023-06-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 01/06/2023**

## Obiettivo

Questa guida ti mostra come impostare un'autenticazione "utente/password" per accedere a tutto o a parte del tuo sito Web tramite un browser. 

utilizzando due file di configurazione (HTTP) Apache da inserire nello [spazio FTP](/pages/web/hosting/ftp_connection/) del tuo hosting Web: 

- "**.htaccess**": per maggiori informazioni sulle funzionalità di questo file, consulta il nostro tutorial sulle ["Operazioni realizzabili con un file ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**": in aggiunta a questo tutorial, consulta la [documentazione ufficiale Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) relativa a questo file.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/directory/) o di contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>
> Gli esempi che seguiranno devono essere salvati in file denominati ".htaccess" e ".htpasswd". Attenzione, le regole definite in questi file hanno conseguenze dirette sul tuo sito web. Prima di applicarle al tuo sito, verifica sistematicamente le regole che aggiungi. 
> 

**Questa guida ti mostra come proteggere una directory o l'accesso alla sezione amministratore del tuo sito Web tramite un'autenticazione con i file ".htaccess" e ".htpasswd".**

## Prerequisiti

## Procedura

## Per saperne di più <a name="go-further"></a>