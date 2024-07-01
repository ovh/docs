---
title: "Hosting Web : ambiente, versione PHP, .ovhconfig"
excerpt: "Questa guida ti mostra come modificare ambiente di esecuzione, versione PHP, firewall applicativo, motore, modalità e .ovhconfig di un hosting Web"
updated: 2024-03-12
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Le offerte di [hosting Web OVHcloud](/links/web/hosting){.external} permettono di ospitare il sito Web che si desidera, purché sia compatibile con la [configurazione delle nostre infrastrutture condivise](https://webhosting-infos.hosting.ovh.net){.external}.
Tuttavia, sulle nostre infrastrutture condivise, è possibile modificare i seguenti parametri per il tuo hosting Web:

- [ambiente di esecuzione](#runtime-environment)
- [versione di PHP](#php-versions)
- [il motore d'esecuzione PHP](#php-runtime)
- [firewall applicativo](#firewall)
- [modalità di esecuzione](#runtime-mod)

Queste impostazioni di configurazione possono essere modificate in due modi:

- dallo [Spazio Cliente OVHcloud](/links/manager);
- dallo spazio di storage FTP del tuo hosting Web OVHcloud tramite un file denominato ".ovhconfig".

> [!primary]
>
> I file ".ovhconfig" sono file di configurazione server che vengono riconosciuti automaticamente dall'infrastruttura di hosting condiviso.
> Sono presenti di default nella "root FTP" dello spazio di storage FTP del tuo hosting Web.
> Contengono i valori degli elementi sopra indicati.
>

Per riassumere, modificare la configurazione dell’hosting Web dallo [Spazio Cliente OVHcloud](/links/manager) o modificare i valori presenti nel file ".ovhconfig" equivale a effettuare la stessa operazione.

### Sommario

- [1 - Descrizione dei parametri di configurazione disponibili sugli hosting Web OVHcloud](#all-parameters)
- [2 - Metodo 1: Modifica la configurazione dell’hosting Web dallo Spazio Cliente OVHcloud](#setting-ovh-manager)
- [3 - Metodo 2: Modifica la configurazione dell’hosting Web dal file ".ovhconfig"](#setting-ovhconfig)
- [4 - Utilizzo avanzato dei file ".ovhconfig"](#ovhconfig-more)

**Questa guida ti mostra come modificare ambiente di esecuzione, versione PHP, firewall applicativo, motore, modalità e file ".ovhconfig" di un hosting Web.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X31MNMLw064" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting){.external}, ad eccezione di una [soluzione di hosting Cloud Web](/links/web/hosting-cloud-web-offer).
- Avere accesso al piano di hosting Web dallo [Spazio Cliente OVHcloud](/links/manager) o conoscere le informazioni di accesso allo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection).

## Procedura

### 1 - Descrizione dei parametri di configurazione disponibili sugli hosting Web OVHcloud <a name="all-parameters"></a>

Prima di iniziare, consulta la descrizione tecnica di ogni parametro modificabile sugli hosting Web OVHcloud.

> [!warning]
>
> La modifica di uno o più di questi elementi potrebbe avere conseguenze sulla visualizzazione o sul corretto funzionamento del sito Web. **Assicurati prima che il tuo sito Web sia compatibile con le modifiche che vuoi apportare alla configurazione del tuo hosting Web**. Contatta un [provider specializzato](/links/partner) in caso di dubbi o difficoltà.
>

##### 1.1 - Gli ambienti di esecuzione <a name="runtime-environment"></a>

Gli ambienti di esecuzione contengono un insieme di linguaggi di programmazione. In base all'ambiente di esecuzione scelto, i linguaggi sono disponibili in versioni più o meno avanzate. Lo scopo di questi ambienti è di permettere di eseguire correttamente i file che compongono il sito Web, in modo adeguato alle proprie esigenze tecniche.

Sugli hosting Web OVHcloud proponiamo **3** ambienti di esecuzione: *Legacy*, *Stable* e *Stable64*.
Di seguito sono riportati gli elementi contenuti nei nostri diversi ambienti di esecuzione:

|Ambiente|Legacy|Stable|Stable64|
|---|---|---|---| 
|Architettura|32 bit|32 bit|64 bit|
|Versione PHP minima|5.4|5.4|7.4|
|OpenSSL|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 e 3.4|2.7 e 3.7|2.7 e 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|git|2.1|2.1|2.20|

> [!primary]
>
> L'ambiente *Legacy* può essere utile per siti legacy che utilizzano ancora vecchie versioni di PHP. Tuttavia, è consigliabile utilizzare l'ambiente *Stable64* con gli ultimi aggiornamenti. **Prima di apportare qualsiasi modifica, assicurati che il tuo sito Web sia compatibile con tutte le funzionalità.**
> 

##### 1.2 - Le versioni di PHP <a name="php-versions"></a>

PHP è un linguaggio di programmazione dinamico utilizzato per realizzare siti Web. Per il tuo sito Web e in funzione della sua anzianità, degli aggiornamenti effettuati o di alcune variabili necessarie al suo corretto funzionamento, potresti aver bisogno di modificare la versione di PHP che utilizza.

Esistono diverse versioni del linguaggio di programmazione PHP. Le modifiche apportate alle versioni apportano patch di vario tipo e aggiungono o rimuovono alcune funzionalità. OVHcloud propone le ultime versioni principali di PHP, disponibili nella lista [qui](/links/web/hosting-programming-language).

Alcune versioni di PHP funzionano solo con certi ambienti di esecuzione. Di seguito trovi le versioni di PHP disponibili sugli hosting condivisi OVHcloud e [gli ambienti di esecuzione](#runtime-environment) compatibili:

|Versioni PHP|Ambienti di esecuzione compatibili|
|---|---| 
|5.4, 5.5, 5.6 e 7.0|Legacy, Stable|
|7.1, 7.2 e 7.3|Stable|
|7.4, 8.0, 8.1 e 8.2|stable64|

> [!primary]
>
> Alcune funzionalità potrebbero non essere mantenute con le nuove versioni. **Prima di apportare qualsiasi modifica, assicurati che la nuova versione di PHP scelta sia compatibile con il tuo sito.**
>

OVHcloud gestisce l’installazione delle ultime versioni di PHP sui propri server, ma l’utente è tenuto a verificare che il sito Web sia **sempre aggiornato** e compatibile con le ultime versioni di PHP. In base al sito utilizzato, è possibile effettuare questa verifica in due modi:

**Caso 1 - utilizzi un Content Management System (CMS)** come *WordPress*, *Joomla!*, *PrestaShop* o *Drupal*: 

- consulta la documentazione ufficiale creata dal gestore del CMS in uso.
- Prendi nota delle informazioni relative ai requisiti tecnici necessari al funzionamento del CMS e alle operazioni che ne consentono l’aggiornamento.
- Se necessario, aggiorna il CMS assicurandoti che la nuova versione sia compatibile con l’hosting Web OVHcloud.

**Caso 2 - utilizzi un sito basato su una soluzione personalizzata**: 

- Contatta il webmaster che ha creato il sito Web.
- Consulta la [documentazione ufficiale PHP](http://php.net/manual/en/appendices.php){.external} per maggiori informazioni sulle migrazioni di versione.
- Se necessario, aggiorna il codice del sito Web assicurandoti che sia compatibile con l’hosting Web OVHcloud.

Per conoscere la versione PHP in uso sull’hosting Web sono disponibili due distinti metodi:

- **Dallo Spazio Cliente OVHcloud**. Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella scheda `Informazioni generali`{.action}, individua la versione sotto *Versione PHP*. 

![phpversion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/change-php-version-step1.png){.thumbnail}

> [!primary]
> Se è presente un cerchio blu, attendi qualche minuto fino all'aggiornamento della versione.
>

- **Tramite uno script**. Crea uno script **.php** che contenga esclusivamente il codice seguente:

```php
<?php phpinfo(); ?>
```

Accedi allo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) e chiama il tuo dominio accedendo al suo indirizzo/URL completo.

> [!warning]
>
> La modifica della versione di PHP tramite un file ".htaccess" non è più possibile sulle ultime offerte di [hosting Web OVHcloud](/links/web/hosting).<br>
> Il comando che permette di modificare la versione di PHP nel file ".htaccess" non permette di utilizzare le versioni recenti di PHP sulle nostre infrastrutture.
> È necessario utilizzare il file ".ovhconfig".
>

#### 1.3 - I motori di esecuzione PHP <a name="php-runtime"></a>

I motori di esecuzione PHP sono programmi che permettono di eseguire azioni sul server Web secondo un metodo preciso. Questo parametro viene in genere modificato per influire sulla velocità di esecuzione delle richieste generate dai visitatori del sito Web.

Sugli hosting Web OVHcloud proponiamo **2** programmi d’esecuzione PHP: *php* ("PHP-FPM") e *phpcgi*.

Il motore *php* consente di attivare o disattivare l’acceleratore PHP ("PHP-FPM"). ottimizzato per la nostra infrastruttura in modo da aumentare la velocità di esecuzione degli script PHP. 

Il motore *phpcgi* esegue le richieste "in serie", diversamente dal motore *php* ("PHP-FPM") che le esegue "in parallelo".

In confronto, l'acceleratore PHP ("PHP-FPM") offre performance fino a sette volte più elevate rispetto all'utilizzo del motore *phpcgi*. 

#### 1.4 - Il firewall applicativo <a name="firewall"></a>

Un firewall è una sicurezza che filtra le richieste in entrata del tuo hosting Web. Sui nostri hosting Web, questa impostazione di configurazione funziona sotto forma di opzione **attivabile** o **disattivabile**.
Non sarà infatti possibile modificare le impostazioni di filtro del firewall.

Per maggiori informazioni, consulta la nostra guida "[Attivazione del firewall applicativo](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

> [!warning]
>
> Se si utilizzano i moduli di pagamento, l'attivazione dell'applicazione firewall potrebbe talvolta causare problemi di comunicazione tra il modulo di pagamento e le banche. In questo caso, disattivare l'opzione.
>

##### 1.5 - Modalità di esecuzione <a name="runtime-mod"></a>

Le modalità di esecuzione permettono di gestire il comportamento della cache dei file statici del tuo sito Web (ad esempio, le immagini) e gli errori PHP (utili se, ad esempio, il tuo sito mostra una pagina bianca). 

Esistono **2** modalità attivabili: *Production* e *Development*.

|Modalità|Cache dei file statici|Gestione degli errori PHP|
|---|---|---| 
|*Production*|Massimizza la memorizzazione in cache dei file statici sui browser Internet.|Gli errori PHP non vengono visualizzati sul sito.|
|*Development*|Nessuna cache applicata.|Gli errori PHP vengono visualizzati sul sito.|

> [!primary]
>
> Per le versioni 7.1 e superiori di PHP, gli errori appariranno sul sito, indipendentemente dalla modalità utilizzata. 
> 

Ora che conosci i diversi parametri modificabili per il tuo hosting Web OVHcloud, è possibile modificare questi parametri in due modi diversi.

### 2 - Metodo 1: modifica la configurazione dell’hosting Web dallo Spazio Cliente OVHcloud <a name="setting-ovh-manager"></a>

> [!warning]
>
> Ti ricordiamo che la modifica di uno o più di questi elementi potrebbe avere conseguenze sulla visualizzazione o sul corretto funzionamento del tuo sito Web. **Assicurati prima che il tuo sito Web sia compatibile con le modifiche alla configurazione del tuo hosting Web.** Contatta un [provider specializzato](/links/partner) in caso di dubbi o difficoltà.
>

#### 2.1 - Accedi alla gestione della configurazione dell’hosting Web

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Assicurati di essere posizionato sulla scheda
`Informazioni generali`{.action}. A destra della voce `Versione PHP`{.action}, situata quasi al centro della pagina, clicca sul pulsante `...`{.action} e poi su `Modifica la configurazione`{.action}.

![hostingconfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}

> [!primary]
>
> Se il pulsante `Modifica la configurazione`{.action} è disattivato, è possibile che una verifica della **versione PHP globale** sia in corso. In questo caso, accanto alla versione verrà visualizzato un cerchio blu che indica che è in corso un controllo. Attendi qualche minuto fino a quando il pulsante `Modifica la configurazione`{.action} sarà nuovamente disponibile.
>
> Se l’opzione `Versione PHP Globale`{.action} non compare nel tuo [Spazio Cliente OVHcloud](/links/manager), verifica che il file *.ovhconfig* esista effettivamente nella root FTP del tuo hosting condiviso OVHcloud.
>
> Tutte le informazioni relative al file *.ovhconfig* sono disponibili nella terza parte "[Metodo 2: modificare la configurazione dell’hosting Web dal file ".ovhconfig"](#setting-ovhconfig)" di questa guida.
>

#### 2.2 - Modifica la configurazione dell’hosting Web

Nella nuova finestra, sono disponibili due opzioni. Seleziona quella che corrisponde all’azione che vuoi effettuare e clicca su `Seguente`{.action}.

|Scelta|Dettaglio|
|---|---| 
|`Ritorna alla configurazione precedente`|Dopo aver selezionato questa opzione, scegli la configurazione da ripristinare accanto a `Scelta storica`. Se in passato non hai apportato modifiche, questa opzione non sarà disponibile.|
|`odifica la configurazione attuale`|Dopo aver selezionato questa opzione, scegli le modifiche da apportare alla configurazione tra i campi proposti. Se necessario, torna alla prima parte "[Descrizione dei parametri di configurazione disponibili sugli hosting Web OVHcloud](#all-parameters)" di questa guida.|

> [!primary]
>
> Cambia ambiente di esecuzione del tuo hosting Web ripristina automaticamente le sessioni PHP.
> 

Clicca su `Conferma`{.action} per applicare la modifica. e attendi il tempo necessario alla loro propagazione.

![hostingconfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration-step-1-and-2.png){.thumbnail}

### 3 - Metodo 2: modificare la configurazione dell’hosting Web dal file ".ovhconfig" <a name="setting-ovhconfig"></a>

#### 3.1 - Accedi allo spazio di storage FTP del tuo hosting Web

Recupera l’identificativo FTP principale, la password e l’indirizzo del server FTP.
Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager){.external} e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting interessato. e clicca sulla scheda `FTP - SSH`{.action}. In questa interfaccia sono disponibili anche le informazioni necessarie per effettuare l’accesso. 

Per conoscere la password associata a un utente FTP, consulta le istruzioni fornite nella nostra guida ["Modificare la password di un utente FTP"](/pages/web_cloud/web_hosting/ftp_change_password).

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}

#### 3.2 - Recuperare o creare il file ".ovhconfig"

Una volta effettuato l’accesso allo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection), visualizzi tutti i file attualmente ospitati su questo spazio. Rimani posizionato sulla root dell’hosting (simbolo "/"). dovrebbe essere presente il file ".ovhconfig".

![ovhconfig](/pages/assets/screens/other/web-tools/net2ftp/ovhconfig-file.png){.thumbnail}

A questo punto, si presentano due possibilità:

- **il file ".ovhconfig" è presente**: scaricalo sulla tua macchina/dispositivo. Copialo prima di modificarlo. e, se necessario, ripristinare il file originale.
- **il file ".ovhconfig" non esiste**: crealo sulla tua macchina o dispositivo e assegnagli il nome ".ovhconfig".

#### 3.3 - Modificare il contenuto del file ".ovhconfig" <a name="update-ovhconfig"></a>

Una volta recuperato il file ".ovhconfig", modificalo. Per farlo, utilizza un editor di testo. Il file ".ovhconfig" deve contenere un codice simile a questo:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

> [!success]
>
> Se hai appena creato il file ".ovhconfig", copia il codice qui sotto nel tuo file e poi prosegui nella lettura di questa guida.
>

Personalizza i valori delle variabili in base alla configurazione che vuoi utilizzare con il tuo hosting Web.

|Variabili|Dettaglio|
|---|---| 
|app.engine|Permette di modificare [il motore PHP](#php-runtime) utilizzato dall’hosting. Inserisci **php** per attivare l’acceleratore PHP-FPM e **phpcgi** per disattivarlo.|
|app.engine.version|Permette di definire [la versione di PHP](#php-versions) utilizzata dall’hosting tra [quelle proposte da OVHcloud](/links/web/hosting-programming-language){.external}. Inserisci la versione scelta (in base all’ambiente di esecuzione che hai scelto di utilizzare).|
|http.firewall|Permette di attivare o disattivare il [firewall incluso negli hosting Web OVHcloud](/links/web/hosting-options){.external}. Inserisci **security** per attivarlo o **none** per disattivarlo.|
|environment|Permette di gestire il comportamento della cache dei file statici del tuo sito Web e la gestione degli errori PHP. Questa è la [modalità di esecuzione](#runtime-mod). Inserisci **production** per massimizzare la memorizzazione in cache e nascondere gli errori PHP o **development** per disattivare la cache e visualizzare gli errori PHP.|
|container.image|Permette di modificare [l’ambiente di esecuzione](#runtime-environment) utilizzato dall’hosting. Inserisci l'ambiente di esecuzione (**legacy**,**stable** o **stable64**) che preferisci. Se scegli l'ambiente di esecuzione **stable64**, verifica che il tuo sito sia compatibile con l'architettura a 64 bit.|

Se necessario, torna alla prima parte "[Descrizione dei parametri di configurazione disponibili sugli hosting Web OVHcloud](#all-parameters)" di questa guida.

Se necessario, trovi qui sotto la descrizione tecnica dettagliata del file ".ovhconfig":

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

#### 3.4 - Scarica il file ".ovhconfig" sullo spazio di storage

Una volta modificato il file ".ovhconfig", caricalo sul tuo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection). Riconnettiti allo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) e posizionati alla root del tuo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) (simbolo "/"). Carica il file ".ovhconfig" modificato nello [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection). Se il file esiste già, sostituiscilo.

### 4 - Utilizzo avanzato dei file ".ovhconfig" <a name="ovhconfig-more"></a>

Se utilizzi l’hosting Web per ospitare più siti Web (in *multisiti*), per diversi motivi potresti aver bisogno di una versione di PHP diversa per alcuni dei tuoi *multisiti*.

Crea un file ".ovhconfig" contenente la versione di PHP desiderata per i *multisiti* interessati. Se necessario, guida alle operazioni descritte nella sezione "[3.3 - Modificare il contenuto del file ".ovhconfig"](#update-ovhconfig)" di questa guida. Quando carichi il file ".ovhconfig" sul tuo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection), accedi alla cartella root in cui si trovano i file che compongono il sito Web "*multisiti*" interessato. Consulta la cartella root dei tuoi *multisiti* nel tuo [Spazio Cliente OVHcloud](/links/manager) nella scheda `Multisito`{.action} dell’hosting interessato.

Se necessario, consulta la nostra guida "[Configurare un multisito su un hosting Web](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

> [!warning]
>
> **Non è possibile specificare un secondo [ambiente di esecuzione](#runtime-environment), un secondo [modo di esecuzione](#runtime-mod) e/o un secondo [motore di esecuzione PHP](#php-runtime)** sullo stesso hosting Web. Saranno presi in considerazione solo quelli inseriti nel file ".ovhconfig" che si trova nella root del tuo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection).
>

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

## Per saperne di più

[Accedere allo spazio di storage dell’hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).