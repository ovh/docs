---
title: "Hosting Web - Passare il proprio sito Web in HTTPS"
excerpt: "Questa guida ti mostra come abilitare il protocollo HTTPS sul tuo sito Web dopo aver attivato un certificato SSL"
updated: 2024-02-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Gli hosting Web OVHcloud permettono di usufruire di un [certificato SSL](/links/web/hosting-options-ssl). grazie al quale i siti Web possono stabilire una connessione sicura alla rete ed essere accessibili in *HTTPS*. Per utilizzare questa connessione sicura sono necessari diversi step.

**Questa guida ti mostra come abilitare il protocollo HTTPS sul tuo sito dopo aver attivato un certificato SSL.**

## Prerequisiti

- Disporre di un [certificato SSL](/links/web/hosting-options-ssl){.external} installato sul [hosting web OVHcloud](/links/web/hosting){.external}.
- Disporre di almeno un sito Web installato e accessibile sul proprio hosting Web OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione `Web Cloud`{.action}.

## Procedura

La sicurezza svolge un ruolo sempre più importante sul Web. Gli utenti rivolgono un’attenzione sempre maggiore alla confidenzialità dei propri dati e al modo in cui circolano in rete. In generale, gli internauti accordano maggiore fiducia ai siti Web che permettono scambi sicuri, in particolare quando i dati scambiati sono sensibili. 

Quando visitate un sito web che dispone di una connessione protetta, il vostro browser Internet vi indica nella sua barra degli indirizzi (URL) in diversi modi, come: 

- un logo (generalmente un lucchetto);
- un messaggio;
- un codice di colore; 
- il protocollo utilizzato, *HTTPS* anziché *HTTP*.

Riconoscere a colpo d’occhio se un sito è sicuro è sempre più facile.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Attivare il protocollo HTTPS su un sito Web è un’operazione delicata**. in effetti, la maggior parte delle azioni da effettuare si effettueranno nel codice sorgente del tuo sito Web. Se non vengono effettuate correttamente, rischi un calo di referenziazione (SEO) nei risultati proposti dai motori di ricerca (Google, Yahoo!, bing, ecc.), oppure un’inaccessibilità totale del tuo sito Web.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

Segui i passaggi descritti in questa guida per cambiare il tuo sito Web in *HTTPS*:

- [Step 1 - Attiva il certificato SSL sull’hosting Web](#enable-ssl): permette di attivare o verificare che un certificato SSL sia installato correttamente sul tuo hosting Web/sito Web.
- [Step 2 - Controlla l’ambiente tecnico del tuo sito Web](#check-environment): permette di verificare che il passaggio del tuo sito in *HTTPS* non provochi malfunzionamenti prima di avviare qualsiasi modifica.
- [Step 3 - Attiva il *HTTPS* sul tuo sito Web](#https-enable): permette al tuo sito Web di utilizzare il protocollo *HTTPS*. Il metodo descritto in questa guida non è universale e dipenderà dal sito Web utilizzato.
- [Step 4 - Verifica il corretto funzionamento del tuo sito Web](#check-your-website): permette di accertarsi che il tuo sito venga visualizzato correttamente dopo l'attivazione del *HTTPS*.

### Step 1 - Attiva il certificato SSL sull’hosting Web <a name="enable-ssl"></a>

Per attivare un certificato SSL sul tuo hosting Web o verificare che sia già installato un certificato SSL per il tuo sito Web, consulta la nostra guida: "[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

### Step 2 - Verifica l’ambiente tecnico del sito Web <a name="check-environment"></a>

Prima di apportare qualsiasi modifica alla configurazione del sito Web, è importante assicurarsi che il sito sia configurato per utilizzare *HTTPS* correttamente. La procedura da seguire non è universale, ma dipende dal tipo di sito Web utilizzato.

Le informazioni riportate di seguito sono pertanto generiche. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner).

#### 2.1 - Evitare di mischiare contenuti HTTP e HTTPS

Quando il sito Web viene visualizzato in *HTTPS*, è necessario evitare di mischiare il contenuto in *HTTP* e *HTTPS* nella stessa pagina e su tutto il sito Web. Se il tuo sito Web utilizza *HTTPS*, assicurati che l’intero contenuto sia caricato in *HTTPS*.

In caso contrario, sarà possibile pubblicare sul sito Web contenuti considerati misti (*Mixed Content*) dai browser, ovvero contenuti considerati potenzialmente non sicuri su una pagina dichiarata sicura.

*Mixed Content* può essere utilizzato in due diversi casi:

- **Il sito Web viene visualizzato correttamente, ma nella barra degli indirizzi è presente un avviso**. Il contenuto considerato passivo (immagini, video, ecc...) dal browser viene caricato sulla pagina da una fonte non sicura.

- **Alcune sezioni del sito Web non vengono visualizzate e nella barra degli indirizzi è presente un avviso**. Il contenuto considerato attivo dal tuo browser (script, iframe, file CSS, ecc...), proveniente da una fonte non protetta, è stato bloccato.

Verificare che tutti i contenuti caricati dal sito Web provengano da una fonte protetta.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Ricordati che, anche nel caso in cui l’hosting disponga di un certificato SSL, i contenuti ospitati possono essere caricati in *HTTP* o in *HTTPS*. Dipende da come hai identificato questi contenuti nel codice del tuo sito web. per assicurarsi che tutti i contenuti caricati dal sito Web utilizzino il protocollo *HTTPS*.

Ad esempio, presta particolare attenzione agli indirizzi che utilizzi nel codice del tuo sito Web. Se possibile:

- preferisci l'utilizzo di indirizzi relativi come: `../img/header.png`;
- evita indirizzi assoluti che contengano il protocollo *HTTP*, ad esempio `http://domain.tld/img/header.png`.

Se necessario, modifica il codice del sito Web. 

Se utilizzi un "sito chiavi in mano" (WordPress, PrestaShop, Drupal, Joomla!), la struttura di questi siti è generalmente già concepita per passare al *HTTPS*. Non dovrebbe essere necessario apportare modifiche al codice del sito Web.

#### 2.2 - Evitare di generare contenuti duplicati

Assicurati che il sito Web non sia accessibile da diversi indirizzi, ad esempio *HTTP* e *HTTPS*, a seconda del modo in cui è codificato. In questo caso, lo stesso contenuto sarà accessibile da diversi indirizzi, che vengono considerati come contenuto duplicato ( *duplicate content*) dai motori di ricerca.

Questo fenomeno può ridurre il livello di referenziamento (SEO) del sito Web. Assicurati che il codice "imponga" l’utilizzo del *HTTPS*, inserendo una regola di riscrittura nel codice del tuo sito Web quando desideri attivare il *HTTPS*.

Se utilizzi un "sito chiavi in mano", la sua struttura gestisce automaticamente le regole di riscrittura. e non dovrebbe quindi essere necessario apportare modifiche al codice.

### Step 3 - Attiva il protocollo HTTPS sul tuo sito Web <a name="https-enable"></a>

Una volta che l’hosting Web dispone di un certificato SSL attivo e che il [multisito](/pages/web_cloud/web_hosting/multisites_configure_multisite) usufruisce di una connessione SSL attiva e che il sito Web è pronto per *HTTPS*, è possibile attivarlo.

> [!warning]
>
> Prima di effettuare qualsiasi operazione ti consigliamo di effettuare un backup completo del tuo sito Web. Questo backup deve contenere non solo i file presenti nello [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup), ma anche quelli di [il database](/pages/web_cloud/web_hosting/sql_database_export) se il sito web ne utilizza uno.
>
> A partire da questo step, è possibile eseguire le azioni direttamente dai file che compongono il sito Web. In caso di difficoltà o dubbi, contatta un [provider specializzato](/links/partner).
>

Per attivare il *HTTPS* sul sito Web sono disponibili diversi metodi. è necessario apportare modifiche alla sua configurazione. Le informazioni fornite in questa guida potrebbero essere d’aiuto nel processo di attivazione, ma potrebbero rivelarsi incomplete o non applicabili al tuo caso d’uso.

- **Utilizzi un "sito chiavi in mano" (WordPress, PrestaShop, Drupal, Joomla!, ecc.)**:

*HTTPS* è in genere abilitato dall’interfaccia di gestione del sito Web. Il nome e l’utilizzo di *HTTPS* variano in base al "sito chiavi in mano" utilizzato. 

Ad esempio, potrebbe essere necessario attivare l’opzione "Forza *HTTPS*" o modificare l’intero link del sito Web per aggiungervi un `s`: "**http**://domain.tld" diventerebbe "**https**://domain.tld".

In caso di dubbi o dubbi, contatta la documentazione ufficiale del produttore del tuo sito Web. 

- **Utilizzi un sito Web codificato da te (o da un provider)**: 

Per attivare il *HTTPS* è necessario agire direttamente nel codice del sito Web. Se disponi delle competenze necessarie, modifica il codice per adattarlo al *HTTPS*. In caso di dubbi sulle operazioni da effettuare, contatta lo sviluppatore del sito Web. 

Di seguito alcuni esempi di script da inserire in un file **.htaccess**. ma non si sostituiscono all’assistenza di un webmaster. Sostituisci il dominio `domain.tld` presente nel primo script con il tuo dominio e adattalo, se necessario.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

Questo primo script di esempio reindirizza tutti gli URL arrivati tramite la porta 80 in *HTTP* verso l’URL sicuro in *HTTPS* `https://domain.tld/`.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Questo secondo script di esempio trasforma tutti gli URL arrivati tramite il protocollo *HTTP* in *HTTPS*, mantenendo intatto il resto dell'URL dopo i `://`.

Per il secondo esempio, verifica che tutti i domini o sottodomini di destinazione abbiano un certificato SSL attivo.

**Attenzione**, per le offerte di hosting [Cloud Web](/links/web/hosting-cloud-web-offer), utilizzare lo script seguente:

```bash
RewriteEngine On
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

### Step 4 - Verifica il corretto funzionamento del sito Web <a name="check-your-website"></a>

Una volta attivato il *HTTPS*, assicurati che il sito funzioni correttamente e che il suo contenuto venga mostrato correttamente. Per farlo, prova ad accedere al sito Web, controlla se non compaiono messaggi o avvisi e prendi qualche minuto per esaminare il layout di diverse parti del sito Web. 

In caso di malfunzionamenti, è possibile risolvere il problema il più rapidamente possibile oppure ripristinare il sistema disattivando *HTTPS*. In caso di reale necessità, è disponibile anche il backup completo del sito Web realizzato nello [step 3](#https-enable).

Se il sito Web appare correttamente e non compare alcun avviso dopo il passaggio in *HTTPS*, l’operazione è andata a buon fine. Per attivare il *HTTPS* su un altro sito Web, ripeti la procedura descritta in questa guida.

## Per saperne di più <a name="go-further"></a>

[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).