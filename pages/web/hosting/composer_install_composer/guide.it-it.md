---
title: Installare Composer su un hosting Web
slug: installare-di-comporre-sugli-hosting-condivisi
excerpt: Scopri come installare e fare i primi passi su Composer.
section: PHP
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 30/11/2020**

## Obiettivo

[Composer](https://getcomposer.org/){.external} è un gestore di dipendenze creato per il linguaggio PHP. Permette agli sviluppatori PHP di includere librerie esterne nei loro programmi. "Composer" ha permesso ai progetti PHP di semplificare la distribuzione delle librerie e la manutenzione del loro codice. Inoltre, dalla creazione di questo strumento, sono state proposte numerose buone pratiche di sviluppo all'interno della comunità PHP e hanno migliorato le librerie della comunità PHP. Tali buone pratiche sono documentate sotto forma di [PSR](http://www.php-fig.org/){.external}.

**Come installare e fare i primi passi su Composer**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei il responsabile per la configurazione e la gestione. garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} con accesso SSH
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}


## Procedura

Verifica di utilizzare una versione di PHP compatibile con il tuo ordine:


```bash
php —version
```

Se non è la versione corretta, puoi configurare un alias:


```bash
alias php='/sr/local/php8.0/bin/php'
```

Ti consigliamo di restare nella cartella di root del tuo hosting per non rendere pubblici i file di "Composer". Effettua questo comando:


```bash
curl -sS https://getcomposer.org/installer | php
```

Complimenti, "Composer" è disponibile sul tuo hosting condiviso!


### Esempi di utilizzo

Per installare Symfony 2 semplicemente, esegui il comando:


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7*"
```

Allo stesso modo, puoi utilizzare l'API di OVHcloud dal tuo hosting utilizzando il wrapper ufficiale. Per farlo, è sufficiente aggiungere un file chiamato composer.json che contiene la lista delle dipendenze di cui hai bisogno. Ecco un esempio di questo file con il wrapper dell'API OVHcloud:


```json
1. {
2.     "name": "Esempio di Applicazione",
3.     "descrizione": "This an esempio of OVHcloud APIs wrapper use",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Per installarlo, è sufficiente avviare il seguente comando nella stessa cartella:


```bash
php composer.phar install
```

Per utilizzare questa libreria, consulta la documentazione e il codice disponibili su [github.](https://github.com/ovh/php-ovh){.external}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
