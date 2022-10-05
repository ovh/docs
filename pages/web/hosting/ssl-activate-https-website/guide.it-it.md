---
title: 'Attivare HTTPS su un sito Internet tramite il certificato SSL'
slug: attivare-https-su-sito-internet-tramite-certificato-ssl
excerpt: 'Come abilitare il protocollo HTTPS sul tuo sito grazie al certificato SSL'
section: SSL
order: 02
---

**Ultimo aggiornamento: 04/10/2022**

## Obiettivo

Gli [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} includono di default un certificato SSL gratuito, grazie al quale i siti Internet possono stabilire una connessione sicura alla rete ed essere accessibili in HTTPS. Per attivare questo canale di comunicazione sicuro, sono necessari diversi step.

**Questa guida ti mostra come abilitare il protocollo HTTPS sul tuo sito utilizzando un certificato SSL.**

## Prerequisiti

- Disporre di un [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} con [certificato SSL](https://www.ovhcloud.com/it/web-hosting/options/ssl/){.external} attivo
- Disporre di almeno un sito Internet installato e accessibile sul proprio hosting Web OVH
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}

## Procedura

La sicurezza svolge un ruolo sempre più importante sul Web. Gli utenti rivolgono un’attenzione sempre maggiore alla confidenzialità dei propri dati e al modo in cui circolano in rete, riponendo più fiducia nei siti che garantiscono scambi sicuri, soprattutto se i dati trasmessi sono personali. 

Quando il sito visitato utilizza una connessione sicura, viene indicato nella barra degli indirizzi del browser in diversi modi: un logo (generalmente un lucchetto), un messaggio, un codice cromatico o il protocollo attivo (HTTPS invece di HTTP). Riconoscere a colpo d’occhio se un sito è sicuro è sempre più facile.

![httpswebsite](images/activate-https-website-ssl-step1.png){.thumbnail}

**Attivare il protocollo HTTPS su un sito Web è un’operazione delicata**, che implica operazioni dirette sulla configurazione del sito (il suo codice). Una o più azioni errate potrebbero avere conseguenze negative, come una peggiore indicizzazione sui motori di ricerca o persino l’irraggiungibilità del sito. 

Nella tabella qui sotto sono riportati gli step necessari per abilitare la connessione HTTPS.

|Step|Azione|Descrizione|
|---|---|---|
|1|Attivare il certificato SSL sull’hosting Web|È necessario attivare il certificato SSL o verificare che sia installato correttamente sull’hosting.|
|2|Verificare l’ambiente tecnico|Prima di proseguire, è necessario verificare che l’installazione dell’HTTPS sul sito non abbia avuto impatto sul suo funzionamento.|
|3|Attivare il protocollo HTTPS sul sito|A questo punto è necessario attivare il protocollo HTTPS in modo che il sito possa utilizzarlo. Questa operazione non è universale, ma dipende dal tipo di sito Internet implementato.|
|4|Verificare il corretto funzionamento del sito|L’ultimo step permette di accertarsi che, dopo l’attivazione dell’HTTPS, il sito venga visualizzato correttamente.|

### Step 1: attiva il certificato SSL sull’hosting

L’attivazione del certificato SSL sull’hosting Web, possibile direttamente dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, richiede due operazioni distinte:

|Operazione|Descrizione|
|---|---|
|Attivazione del certificato SSL sull’hosting|Una volta scelto il certificato SSL più adatto alle proprie esigenze tra le diverse tipologie proposte, OVHcloud provvederà alla sua installazione sull'hosting.  |
|Attivazione del certificato SSL sul multisito corrispondente|Il sito su cui si vuole utilizzare l’HTTPS deve essere configurato sull’hosting come “multisito”: assicurati che il certificato SSL sia attivo per questa funzionalità.|

Per maggiori informazioni sulla procedura completa da seguire per effettuare queste due operazioni, consulta la nostra guida [Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/){.external}. Se hai appena attivato un hosting OVHcloud, è possibile che sia già installato un certificato SSL gratuito e che il multisito disponga già di una connessione SSL attiva.

Per verificarlo, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca nella scheda `Informazioni generali`{.action}. Nel riquadro <b>Configurazione</b>, verifica se sotto <b>Certificato SSL</b> compare la voce <b>Sì</b>: in questo caso, significa che sull’hosting Web è già installato un certificato SSL. 

![httpswebsite](images/activate-https-website-ssl-step2.png){.thumbnail}

A questo punto, clicca sulla scheda `Multisito`{.action}. Visualizzi una tabella con tutti i domini aggiunti alla tua soluzione di hosting. Nella colonna <b>SSL</b> viene mostrato lo stato di attivazione della connessione SSL per i tuoi multisiti. 

![httpswebsite](images/activate-https-website-ssl-step3.png){.thumbnail}

Se hai difficoltà a verificare che il certificato SSL sia installato sull’hosting o sia attivo sul multisito corrispondente, consulta la nostra guida [Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/){.external}.

### Step 2: verifica l’ambiente tecnico

Prima di apportare qualsiasi modifica ai parametri del tuo sito, assicurati che sia configurato per utilizzare il protocollo HTTPS. La procedura da seguire non è universale, ma dipende dal tipo di sito Web utilizzato. 

Le informazioni contenute in questa guida potrebbero esserti di aiuto per effettuare l’operazione  ma non si sostituiscono all’aiuto di un webmaster.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.  
>
> Questa guida ti aiuta a eseguire le operazioni necessarie per attivare l’HTTPS sul tuo sito. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida. 
>

#### 1\. Evitare di mischiare contenuto HTTP e HTTPS

In generale, se sul tuo sito Internet è abilitata la connessione HTTPS, è necessario evitare di mischiare il contenuto HTTP e HTTPS in una stessa pagina o nell’intero sito: se il tuo sito utilizza questo protocollo, fai quindi in modo che l’intero contenuto si carichi in HTTPS.

In caso contrario il rischio è che si presenti il problema del <i>mixed content</i>, ovvero pagine Web con contenuti misti dove elementi potenzialmente non sicuri sono inseriti in pagine considerate sicure. In base alla tipologia, i contenuti misti possono produrre due effetti:

- **il sito viene visualizzato correttamente, ma nella barra degli indirizzi compare un avviso** che indica che il contenuto considerato passivo (immagini, video, ecc...) dal browser proviene da una fonte non sicura.

- **alcune sezioni del sito non vengono visualizzate e nella barra degli indirizzi compare un avviso** che indica che il contenuto considerato attivo (script, iframe, file CSS, ecc...) dal browser è stato bloccato in quanto proveniente da una fonte non sicura.
 

![httpswebsite](images/activate-https-website-ssl-step4.png){.thumbnail}

Ricordati che, anche nel caso in cui l’hosting disponga di un certificato SSL, i file ospitati possono essere caricati in HTTP o HTTPS in base al modo in cui questi elementi sono identificati nel codice del sito. Assicurati che il contenuto del tuo sito utilizzi il protocollo HTTPS, ad esempio prestando una particolare attenzione agli indirizzi presenti nel codice del sito. Se possibile:

- prediligi gli indirizzi relativi, ad esempio `./img/header.png`
- evita indirizzi assoluti che contengano il protocollo HTTP, ad esempio `http://mypersonaldomain.ovh/img/header.png`

Se necessario, adatta il codice del tuo sito in modo che segua queste raccomandazioni. Se utilizzi un CMS (ad esempio WordPress), probabilmente la sua struttura è già pronta per utilizzare l’HTTPS e non dovrebbe quindi essere necessario apportare modifiche al codice.

#### 2\. Evitare di generare contenuti duplicati

Verifica il codice del sito per accertarti che le pagine Web non siano accessibili da più indirizzi, ad esempio utilizzando sia HTTP che HTTPS. In questo caso, infatti, lo stesso contenuto sarà disponibile su diversi indirizzi e verrà considerato come contenuto duplicato (o <i>duplicate content</i>) dai motori di ricerca, con conseguente impatto sull’indicizzazione del sito. Per risolvere questo problema, è necessario “forzare” l’utilizzo di HTTPS implementando una regola di riscrittura nel codice del sito.

Se utilizzi un CMS (ad esempio, WordPress), le regole di riscrittura sono gestite automaticamente e non dovrebbe quindi essere necessario apportare modifiche.

### Step 3: attiva l’HTTPS sul sito

Una volta che l’hosting Web dispone di un certificato SSL valido, che il multisito usufruisce di una connessione SSL attiva e che sul tuo sito Internet è configurato l’HTTPS, è possibile attivare il protocollo.

> [!warning]
>
> Prima di eseguire qualsiasi operazione ti consigliamo di effettuare un backup completo del tuo sito, ovvero sia dei file presenti nello spazio di storage che dell’eventuale database utilizzato. 
>

Per attivare l’HTTPS sul tuo sito, è necessario apportare modifiche alla sua configurazione. Le informazioni fornite in questa guida possono essere d’aiuto nella procedura di attivazione, ma potrebbero rivelarsi incomplete o non applicabili al tuo caso.

- **Utilizzi un sito chiavi in mano (ad esempio, WordPress)**: 

In genere è possibile attivare l’HTTPS dall’interfaccia di gestione del sito. La procedura da seguire varia in base al CMS utilizzato. 

Ad esempio, è possibile che sia necessario attivare l’opzione “Forzare HTTPS” o modificare l’URL del tuo sito per aggiungervi una “s”: “http://mypersonaldomain.ovh” diventerebbe “https://mypersonaldomain.ovh”.

Se non sai come effettuare l’operazione, consulta la documentazione ufficiale del tuo CMS. 

- **Utilizzi un sito che tu stesso hai sviluppato (o qualcuno l’ha fatto per te)**:  

Per attivare l’HTTPS, è necessario agire direttamente nel codice del tuo sito. Se disponi delle competenze necessarie, modifica il codice per adattarlo al protocollo HTTPS; in caso contrario, contatta il webmaster che ha creato il tuo sito. 

Ecco un esempio di script da inserire in un file **.htaccess**:

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```
Sostituisci le informazioni generiche presenti nello script con il tuo dominio e adattalo, se necessario.

> [!warning]
>
> Per le offerte di hosting [Cloud Web](https://www.ovhcloud.com/it/web-hosting/cloud-web-offer/), utilizza questo script:
> ```
> RewriteEngine On
> RewriteCond %{ENV:HTTPS} !on
> RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
> ```
>

### Step 4: verifica il corretto funzionamento del sito

Una volta attivato l’HTTPS, accertati che le pagine Web siano raggiungibili e che il loro contenuto venga mostrato correttamente: accedi al sito, verifica la presenza di eventuali messaggi e controlla il layout delle varie sezioni. 

In caso di malfunzionamenti, reagisci il più rapidamente possibile ed eventualmente disattiva il protocollo HTTPS fino alla completa risoluzione del problema. Se i tuoi tentativi non sono andati a buon fine, ripristina il backup realizzato nello step precedente.

Se non si verificano problemi di visualizzazione e non appaiono messaggi di errore, hai effettuato l’operazione correttamente.

Per attivare il protocollo HTTPS su un altro sito, ripeti la procedura descritta in questa guida.

## Per saperne di più

[Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.