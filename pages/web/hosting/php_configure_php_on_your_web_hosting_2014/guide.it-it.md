---
title: "Modificare la versione di PHP su un hosting Web"
slug: configura_php_sul_tuo_hosting_web_condiviso_2014_ovh
excerpt: "Come configurare una nuova versione di PHP su un hosting Web OVHcloud"
section: PHP
order: 01
---

**Ultimo aggiornamento: 19/09/2022**

## Obiettivo

Il tuo [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} permette di ospitare qualsiasi tipologia di sito Web, purché compatibile con la [configurazione delle nostre infrastrutture](https://webhosting-infos.hosting.ovh.net){.external}. Per questo motivo, potresti voler modificare la versione di PHP utilizzata dal tuo hosting Web.

**Questa guida ti mostra come modificare la versione PHP di un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}, ad eccezione di una soluzione di hosting Cloud Web.
- Avere accesso alla soluzione di hosting Web dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o conoscere le informazioni di accesso allo [Spazio Cliente OVHcloud](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) 

## Procedura

Esistono diverse versioni del linguaggio di programmazione PHP. Le modifiche apportate alle versioni contengono patch diverse e aggiungono o rimuovono funzionalità. OVHcloud propone le versioni più recenti di PHP, di cui è possibile consultare la lista [clicca qui](https://www.ovhcloud.com/it/web-hosting/uc-programming-language/). 

> [!primary]
>
> Perché alcune funzionalità potrebbero non essere mantenute nelle nuove versioni, **Prima di apportare qualsiasi modifica assicurati che la nuova versione di PHP sia compatibile con il tuo sito Internet.**
>

### Step 1: assicurarsi che il tuo sito sia compatibile

Anche se OVHcloud gestisce l'installazione delle ultime versioni di PHP sui suoi server, è compito tuo assicurarti che il tuo sito sia **sempre aggiornato** e quindi compatibile con le ultime versioni di PHP. In base al sito Web utilizzato, puoi assicurarti di avere due possibilità:

**Caso 1: utilizzi un sito "chiavi in mano" come un sistema di gestione dei contenuti (Content Management System o CMS)** come WordPress, Joomla!, PrestaShop o Drupal: 

- Consulta la documentazione ufficiale creata dall'editor del CMS che utilizzi.
- leggi le informazioni relative ai prerequisiti tecnici indispensabili per il funzionamento del tuo CMS e l'operazione di aggiornamento.
- Se necessario, aggiorna il CMS assicurandoti che la nuova versione sia compatibile con l'hosting OVHcloud.

**Caso 2: utilizzi un sito basato su una soluzione personalizzata**: 

- Accedi al webmaster che ha creato il sito Internet.
- Consulta la [documentazione ufficiale PHP](http://php.net/manual/en/appendices.php){.external} per maggiori informazioni sulle migrazioni di versione.
- Se necessario, aggiorna il codice del tuo sito assicurandoti che sia compatibile con l'hosting OVHcloud.

Se necessario, è possibile conoscere la versione di PHP attualmente utilizzata dal tuo hosting in due modi:

- **dallo Spazio Cliente OVHcloud**: accedi alla sezione `Web Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Hosting`{.action} e seleziona l'hosting Web corrispondente. Nella scheda `Informazioni generali`{.action}, visualizzi la versione sotto la *Versione PHP globale*. 

![phpversion](images/change-php-version-step1.png){.thumbnail}

> [!primary]
> Se visualizzi un cerchio azzurro, attendi qualche minuto fino all'aggiornamento della versione.
>

- **tramite uno script**: Crea uno script **.php** contenente solo il codice `<?php phpinfo(); ?>`. Inseriscilo online sul tuo [spazio di storage FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) e chiamalo accedendo al suo indirizzo/URL completo.

Se non riesci a verificare la compatibilità del tuo sito con la nuova versione di PHP e **anche se non consigliamo vivamente questo metodo**, puoi provare a modificare la versione corrente e tornare indietro. Rischiando di generare un potenziale malfunzionamento sul sito Web, Inoltre, anche se il dominio viene visualizzato sempre dopo la modifica, è possibile che una delle sue funzionalità specifiche ne sia influenzata e diventi inefficace. 

Quando tutto è pronto, passa allo Step 2.

### Step 2: modifica la versione di PHP del tuo hosting Web

La versione di PHP dell'hosting Web può essere modificata in due modi:

- **tramite un assistente di configurazione dal tuo Spazio Cliente OVH**: accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), è possibile scegliere la nuova versione di PHP desiderata tra le altre impostazioni. Per utilizzare questa modalità, segui la procedura descritta nella guida [Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}.

- **modificando manualmente un file sullo spazio di storage**: questa soluzione è più tecnica e richiede l'accesso allo [spazio di storage FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/), dove sarà necessario modificare il file `.ovhconfig`. Per effettuare l'operazione segui la procedura descritta nella guida [Configurare il file.ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.

> [!primary]
>
> La modifica della versione di PHP tramite un file ".htaccess" non è più possibile sulle ultime offerte di[hosting web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}.<br>
> Il comando che permette di modificare la versione di PHP nel file ".htaccess" non permette di utilizzare le versioni recenti di PHP sulle nostre infrastrutture.<br>
> Per effettuare questa operazione, è necessario utilizzare il file `.ovhconfig` e consultare la nostra documentazione ["Configura il file.ovhconfig di un hosting Web"](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.
>

Alcune versioni di PHP funzionano solo con alcuni ambienti di esecuzione. Di seguito trovi le versioni di PHP disponibili sugli hosting condivisi OVHcloud e [gli ambienti di esecuzione](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/) compatibili:

|Versioni PHP| Ambienti di esecuzione compatibili|
|---|---|
|5.4, 5.5, 5.6 e 7.0|Legacy, Stable|
|7.1, 7.2 e 7.3|Stable|
|7.4, 8.0 e 8.1 (bêta)|stable64|

## Per saperne di più

[Modifica la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}

[Configurare il file.ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}

[Accedere allo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.
