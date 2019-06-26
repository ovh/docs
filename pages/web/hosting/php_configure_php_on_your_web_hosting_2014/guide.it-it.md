---
title: 'Modificare la versione di PHP su un hosting Web'
slug: configura_php_sul_tuo_hosting_web_condiviso_2014_ovh
excerpt: 'Come configurare una nuova versione di PHP su un hosting Web OVH'
section: PHP
order: 1
id: '1207'
legacy_guide_number: g1207
---

**Ultimo aggiornamento: 26/06/2019**

## Obiettivo

I siti Internet presenti in rete sono di tanti tipi diversi: gli [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} permettono di ospitare qualsiasi tipologia di sito, purché compatibile con la [configurazione delle nostre infrastrutture](http://pro.ovh.net/infos/){.external}. Per questo motivo, potrebbe essere necessario modificare la versione di PHP utilizzata dall’hosting Web.

**Questa guida ti mostra come configurare una nuova versione di PHP sul tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} (escluso il servizio Cloud Web)
- In base al metodo utilizzato, avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager) o disporre delle informazioni di accesso allo spazio di storage 

## Procedura

PHP è un linguaggio di programmazione in continua evoluzione, disponibile attualmente in numerose versioni. Le più recenti contengono le patch per i bug esistenti e aggiungono o rimuovono determinate funzionalità. OVH propone le nuove versioni appena vengono rilasciate in beta, disponibili alla pagina: <https://www.ovh.it/hosting-web/php.xml> 

Dal momento che le ultime versioni potrebbero non includere alcune funzionalità, **prima di apportare qualsiasi modifica assicurati che la nuova versione di PHP sia compatibile con il tuo sito Internet**.

### Step 1: verifica la compatibilità del tuo sito

OVH gestisce l’installazione delle ultime versioni di PHP sui server, ma l’aggiornamento regolare del sito Internet per garantire la compatibilità è responsabilità dell’utente. In base al sito utilizzato, è possibile effettuare questa verifica in due modi.

**Se utilizzi un sito chiavi in mano con un sistema di gestione dei contenuti (Content Management System o CMS)**, ad esempio WordPress o Joomla!: 
- consulta le informazioni utili nella documentazione disponibile sul sito ufficiale del CMS utilizzato 
- recupera le informazioni relative ai requisiti tecnici necessari per il corretto funzionamento del tuo CMS e alle operazioni che ne consentono l’aggiornamento
- se necessario, aggiorna il CMS assicurandoti che la nuova versione sia compatibile con l’hosting OVH


**Se utilizzi un sito basato su una soluzione personalizzata**:  
- contatta il webmaster che ha creato il sito Internet
- consulta le informazioni relative agli aggiornamenti di versione nella documentazione ufficiale PHP, disponibile a questo link: <http://php.net/manual/en/appendices.php>
- se necessario, modifica il codice del tuo sito Internet assicurandoti che sia compatibile con l’hosting OVH

Per conoscere la versione PHP in uso sul tuo hosting Web, è possibile utilizzare due metodi: 

|Metodo|Descrizione|
|---|---|
|Spazio Cliente OVH|Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager), seleziona il tuo servizio dalla sezione `Hosting`{.action} nel menu a sinistra e assicurati di essere posizionato nella scheda `Informazioni generali`. La versione installata è visibile nel riquadro “Configurazione”, in corrispondenza della voce “Versione PHP”. Se visualizzi un cerchio azzurro, attendi qualche minuto fino al completamento dell’aggiornamento della versione.|
|Script|Crea uno script **.php** che contenga esclusivamente il codice `<?php phpinfo(); ?>`, caricalo sul tuo spazio di storage ed eseguilo accedendo al suo indirizzo URL completo.|

![phpversion](images/change-php-version-step1.png){.thumbnail}

Se non riesci a verificare la compatibilità del tuo sito con la nuova versione di PHP puoi provare a modificare la versione corrente e, se necessario, ripristinarla. **Questo metodo non è però sicuro e, se possibile, consigliamo di evitarlo**: potrebbe infatti causare malfunzionamenti. Inoltre, anche se il sito resta raggiungibile, è probabile che l’aggiornamento abbia avuto impatto su una delle sue funzionalità specifiche, rendendola inutilizzabile. 

Quando tutto è pronto per l’upgrade di versione, passa allo step successivo.

### Step 2: modifica la versione di PHP sul tuo hosting Web

Una volta verificata la compatibilità del sito Web, è possibile cambiare la versione di PHP dell’hosting Web in due modi:

- **utilizzare l’assistente di configurazione dallo Spazio Cliente OVH**: questa soluzione è meno tecnica e richiede l’accesso allo Spazio Cliente, dove sarà possibile selezionare le modifiche da apportare. Per utilizzare questa modalità, segui la procedura descritta nella guida [Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}.

- **agire manualmente su un file presente nello spazio di storage**: questa soluzione è tecnica e richiede l’accesso allo spazio di storage in cui modificare il file .ovhconfig. Per utilizzare questa modalità, segui la procedura descritta nella guida [Configurare il file .ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.

Per gli utenti avanzati, ricordiamo che sugli [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} più recenti la modifica della versione PHP non può essere effettuata tramite file .htaccess, in quanto la direttiva che permette di eseguire questa operazione non consente di utilizzare le versioni recenti di PHP sulle nostre infrastrutture. In caso di necessità, per eseguire questa operazione consulta la guida [Configurare il file .ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.

## Per saperne di più

[Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}

[Configurare il file .ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.