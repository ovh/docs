---
title: 'Configurare il file .ovhconfig di un hosting Web'
slug: configurare-file-ovhconfig
excerpt: 'Come recuperare e modificare il file .ovhconfig di un hosting Web OVH'
section: Configurazione dell’hosting
order: 03
---

**Ultimo aggiornamento: 12/04/2019**

## Obiettivo

Nel caso in cui, per diversi motivi, avessi bisogno di modificare la configurazione del tuo [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}, OVH permette di cambiare i parametri necessari tramite il file **.ovhconfig**.

**Questa guida ti mostra come utilizzare il file .ovhconfig del tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external} (escluso il servizio Cloud Web)
- Disporre della password associata all’utente FTP per accedere allo spazio di storage 

## Procedura

La modifica del file .ovhconfig di un hosting Web comporta  la variazione della sua configurazione e, di conseguenza, anche di quella utilizzata dal tuo sito. È quindi importante che i parametri inseriti in questo file siano tecnicamente compatibili con il sito: un’azione errata potrebbe renderlo irraggiungibile. 

Per modificare il file .ovhconfig è possibile utilizzare due metodi: 

- **agire manualmente sul file .ovhconfig**: questa soluzione è tecnica e richiede l’accesso allo spazio di storage. In questa guida ci concentreremo soltanto su questa procedura.

- **utilizzare l’assistente di configurazione dallo Spazio Cliente OVH**: questa soluzione è meno tecnica e richiede l’accesso allo Spazio Cliente, dove sarà possibile selezionare le modifiche da apportare. Per utilizzare questa modalità, segui la procedura descritta nella guida [Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}.

Se invece vuoi modificare manualmente il file, prosegui nella lettura di questa guida. 

### Modifica il file .ovhconfig

#### Step 1: accedi allo spazio di storage

Recupera nome utente FTP principale, password, indirizzo del server FTP ed effettua il login allo spazio di storage. In caso di necessità, consulta il paragrafo “Connettersi allo spazio di storage” della guida [Mettere online un sito Internet su un hosting Web](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/#2-connettersi-allo-spazio-di-storage){.external}. 

**Se non disponi più di questi dati**, accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `FTP - SSH`{.action}.  In questa pagina sono riportate le informazioni necessarie per accedere allo storage. Se non ricordi la tua password FTP, consulta la guida [Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### Step 2: recupera o crea il file .ovhconfig

Una volta effettuato l’accesso allo storage, puoi visualizzare tutti i file disponibili in questo spazio. Il file .ovhconfig dovrebbe trovarsi nella cartella root dell’hosting (simbolo “/”). 

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

A questo punto possono presentarsi due eventualità: 

- **il file .ovhconfig è presente**: scaricalo sulla tua macchina. Prima di modificarlo ti consigliamo di effettuarne una copia, in modo da poterlo ripristinare in caso di necessità.
- **il file .ovhconfig non è presente**: in questo caso, il file non esiste. Crealo sulla tua macchina e assegnagli il nome “.ovhconfig”.

#### Step 3: modifica il file .ovhconfig

Per modificare il file è possibile utilizzare un editor di testo.  Il file .ovhconfig deve contenere un codice di questo tipo:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

Sostituisci le variabili con i valori della configurazione che intendi utilizzare con il tuo hosting Web. 

|Variabile|Descrizione|
|---|---|
|app.engine|Permette di modificare il motore PHP utilizzato dall’hosting. Inserisci “php” per attivare l’acceleratore PHP-FPM e “phpcgi” per disattivarlo.|
|app.engine.version|Permette di definire la versione di PHP utilizzata dall’hosting tra [quelle proposte da OVH](https://www.ovhcloud.com/it/web-hosting/uc-programming-language/){.external}. Inserisci la versione che vuoi utilizzare.|
|http.firewall|Permette di attivare o disattivare il [firewall incluso sugli hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/options/){.external}: inserisci “security” per attivarlo e “none” per disattivarlo.|
|environment|Permette di gestire il comportamento della cache dei file statici del tuo sito e gli errori PHP.  Inserisci “production” per ottimizzare la memorizzazione in cache e nascondere gli errori PHP o “development” per disattivare la cache e visualizzare gli errori PHP.|
|container.image|Permette di modificare l’ambiente di esecuzione utilizzato dall’hosting. Per conoscere i motori disponibili, consulta la sezione   “Opzioni di configurazione disponibili” della guida [Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#opzioni-di-configurazione-disponibili){.external}.|

> [!warning]
>
> Quando scegli l'ambiente di esecuzione "stable64", verifica che il tuo sito sia compatibile con l'ambiente a 64 bits.

Ecco tutti i dettagli del file .ovhconfig:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 8.0
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=8.0

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | stable64
;
container.image=stable64
```

#### Step 4: carica il file .ovhconfig nello spazio di storage

Una volta modificato il file .ovhconfig, non ti resta che caricarlo nello storage: accedi alla root dello spazio di storage (simbolo “/”) ed effettua l’upload del file appena modificato. Se il file esiste già, sostituiscilo.

### Utilizzo avanzato del file .ovhconfig 

Se utilizzi il tuo hosting per ospitare più siti, hai sicuramente attivato l’opzione multisito.  Se hai bisogno di una diversa versione di PHP per alcuni di essi è necessario creare, per ognuno di questi siti, un file .ovhconfig specifico contenente la versione da utilizzare. Per effettuare l’operazione, torna alla sezione [Modifica il file .ovhconfig](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/#modifica-il-file-ovhconfig){.external} di questa guida. Quando dovrai caricare il file .ovhconfig nello spazio di storage, assicurati di farlo nella cartella root del sito Web configurato come multisito (questa cartella è disponibile nello Spazio Cliente OVH, nella scheda `Multisito`{.action} dell’hosting in questione).

> [!warning]
>
> Non è possibile indicare un secondo ambiente di esecuzione: sarà preso in considerazione soltanto quello definito nel file .ovhconfig che si trova nella root del tuo Spazio Cliente OVH.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Per saperne di più

[Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}

[Mettere online un sito Internet su un hosting Web](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/){.external}

[Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
