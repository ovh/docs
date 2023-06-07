---
title: Installare Composer su un hosting Web
excerpt: Scopri come installare e fare i primi passi su Composer.
updated: 2023-02-24
---

**Ultimo aggiornamento: 24/02/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

[Composer](https://getcomposer.org/){.external} è un gestore di dipendenze creato per il linguaggio PHP. Permette agli sviluppatori PHP di includere librerie esterne nei loro programmi. "Composer" ha permesso ai progetti PHP di facilitare la distribuzione delle librerie e la manutenzione del loro codice. Inoltre, dalla creazione di questo strumento, sono state proposte numerose buone pratiche di sviluppo all'interno della comunità PHP e hanno migliorato le librerie della comunità PHP. Tali buone pratiche sono documentate sotto forma di [PSR](http://www.php-fig.org/){.external}.

**Come installare e fare i primi passi su Composer**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/) o di contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
> 

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} con accesso SSH
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

Accedi in SSH al tuo hosting condiviso utilizzando la nostra guida su [l'utilizzo dell'SSH con il tuo hosting Web OVHcloud](/pages/web/hosting/ssh_on_webhosting).

Verifica di utilizzare una versione di PHP compatibile con il tuo ordine:

```bash
php —version
```

Se non è la versione corretta, puoi configurare un alias:

```bash
alias php='/sr/local/php8.0/bin/php'
```

Ti consigliamo di restare nella cartella di root del tuo hosting per non rendere pubblici i file di "Composer". Esegui questo comando:

```bash
curl -sS https://getcomposer.org/installer | php
```

"Composer" è disponibile sul tuo hosting condiviso.

### Esempi di utilizzo

Per installare **Symfony 2**, esegui il comando:

```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7*"
```

Puoi utilizzare l'API di OVHcloud dal tuo hosting utilizzando il wrapper ufficiale. Per effettuare questa operazione, aggiungi un file denominato *composer.json*, che contiene la lista delle dipendenze di cui hai bisogno. Ecco un esempio di questo file con il wrapper dell'API OVHcloud:

```json
1. {
2.     "name": "Esempio di Applicazione",
3.     "descrizione": "This an esempio of OVHcloud APIs wrapper use",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Per installarla, avvia il comando seguente nello stesso schienale:

```bash
php composer.phar install
```

Per utilizzare questa libreria, consulta la documentazione e il codice disponibili su [GitHub](https://github.com/ovh/php-ovh){.external}

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.