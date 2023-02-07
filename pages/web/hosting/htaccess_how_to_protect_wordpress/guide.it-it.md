---
title: "Tutorial - Utilizza il file htaccess con WordPress"
slug: use-htaccess-with-wordpress
excerpt: "Come proteggere un blog WordPress con uno o più file htaccess"
section: Tutorial
order: 
---

**Ultimo aggiornamento: 07/02/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come configurare alcune funzionalità del tuo hosting Web con uno o più file **.htaccess**, in particolare per modificare i parametri di una parte o dell'insieme del tuo sito Web (reindirizzamenti, divieti di accesso, autorizzazioni limitate, controllo della cache, ecc...).

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/fr-ca/) o [l'amministratore del CMS WordPress](https://wordpress.com/fr/support/){.external}. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
>

**Questa guida ti mostra come proteggere il tuo WordPress con uno o più file htaccess.**

## Prerequisiti

- Disporre di un [hosting Web](https://www.ovhcloud.com/fr-ca/web-hosting/) e aver installato WordPress
- Essere in grado di utilizzare un client FTP come [FileZilla](https://filezilla-project.org/) Consulta la guida [Utilizzare FileZilla per recuperare e salvare i tuoi dati](https://docs.ovh.com/ca/fr/dedicated/deposer-et-recuperer-donnees-via-sftp/#utiliser-filezilla-pour-recuperer-et-deposer-vos-donnees).

I file **.htaccess** possono essere creati e modificati con editor di testo come:

- [Blocco note](https://support.microsoft.com/fr-ca/windows/aide-de-bloc-notes-windows-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c){.external} di Windows
- [TextEdit](https://support.apple.com/fr-ca/guide/textedit/welcome/mac){.external} su macOS 
- [Notepad++](https://notepad-plus-plus.org/){.external}.

## FAQ

### Cos'è un file **.htaccess**?

Un file **.htaccess** permette di configurare un server Web. Nel caso di un hosting web condiviso, si tratta del server web open source "**Apache**". La sintassi di questo file è definita dall'organismo che modifica e mantiene **Apache**. A differenza della maggior parte dei file di configurazione di un server, i file **.htaccess** sono situati nelle directory dei siti Web, nello spazio di storage FTP del tuo hosting Web. Un file **.htaccess** avrà effetti sulla directory in cui è presente e su tutte le sottocartelle presenti all'interno.

Le nostre offerte di hosting condivisi non autorizzano i file di configurazione server. Tuttavia, i file **.htaccess** danno la possibilità di modificare alcune caratteristiche e comportamenti. Inoltre, non è necessario riavviare il server **Apache** affinché le indicazioni e le modifiche scritte nel file **.htaccess** siano prese in carico. Tutte le nostre offerte di [hosting web condiviso OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/) permettono di configurare file **.htaccess*.

Il punto davanti al nome del file **.htaccess** (senza estensione) designa un file nascosto. Questi file non sono accessibili da utenti esterni che accedono al tuo sito Web.

### Cos'è un server web?

Un server Web è un software che consente lo scambio di informazioni su una rete utilizzando il protocollo *HTTP*.<br>
Ce ne sono molti, tra cui *Apache*, *Nginx*, *Tomcat* o il modulo http incluso nella *NodeJS*.

### Quali sono le precauzioni da prendere?

Una configurazione errata del tuo file **.htaccess** può generare errori sul tuo server (come un errore 500: *Internal Server Error*) o rendere totalmente indisponibile il tuo servizio, anche per te. È normale eseguire backup sistematici delle versioni dei tuoi file funzionali, in modo da poter tornare a uno stato precedente in caso di guasti a seguito di una modifica.

Allo stesso modo, se non hai l'abitudine di manipolare questo tipo di file, fai un test su ogni elemento che modifichi. In questo modo eviti di perdere tempo per ritrovare la linea o le linee che hanno causato il malfunzionamento del tuo server Web. Un errore di configurazione o un semplice errore di battitura possono compromettere la configurazione del tuo server Web e quindi il suo funzionamento.

### Quali strumenti utilizzare?

- client FTP per recuperare i tuoi file (FileZilla, Cyberduck)
- un editor di testo.

### Dove sono localizzati i file .htaccess in WordPress?

Come precisato nell'introduzione, è possibile avere più file**.htaccess** su uno stesso hosting Web. Ciascuno di questi file definisce le regole per la directory in cui si trova, nonché le sottocartelle che contiene.

La maggior parte delle modifiche avverrà a livello di **radice del sito web**. Installato di default, il file **.htaccess** nella root del sito contiene queste righe:

```bash
# BEGIN WordPress
# Le linee guida tra "BEGIN WordPress" e "END WordPress" sono generate
# dinamicamente e devono essere modificati solo tramite i filtri WordPress.
# Ogni modifica delle direttive tra questi marcatori sarà sovraccaricata.

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

**Spiegazioni del codice di cui sopra**:

- **#** : carattere utilizzato per mettere una riga di commento.
- **RewriteEngine On**: attiva il modulo Apache `mod_rewrite`, che permette la riscrittura dell'URL al volo (consente anche di reindirizzare un URL verso un altro URL).
- **RewriteRule**: questa sintassi si scrive in base alla figura `RewriteRule Modello Sostitution`. La scrittura può essere presente più volte nel file **.htaccess** (è il caso nel file predefinito che trovi alla radice dell'installazione del tuo WordPress). L'ordine di scrittura nel file è fondamentale, assicurati di essere vigili sull'ordine in cui scrivi le tue regole.
- **RewriteBase**: indica che la radice del sito è `/`.
- **RewriteCond**: si tratta di condizioni preliminari per la regola che segue direttamente. Nel nostro caso, la prima condizione esclude gli URL che contengono un percorso verso un file reale, mentre la seconda esclude, invece, le sottodirectory.

### Cosa posso aggiungere in un file **.htaccess* con WordPress?

Esistono diversi modi per definire e modificare i parametri che cambieranno il comportamento del server (alcune limitazioni esistono tuttavia in funzione dell'hosting):

- modificare i file di configurazione del tuo server
- aggiungere o modificare direttive nel file di configurazione **wp-config.php** alla radice del tuo sito Web
- modificare o aggiungere direttive nel file **.htaccess** alla radice.

## Procedura

> [!warning]
>
> Prima di seguire gli step qui sotto, è necessario reindirizzare il protocollo HTTP verso HTTPS. Per effettuare questa operazione, segui le istruzioni contenute nella guida [Attivare il protocollo HTTPS su un sito Internet tramite SSL](https://docs.ovh.com/ca/fr/hosting/passer-site-internet-https-ssl/#etape-1-activer-le-certificat-ssl-sur-lhebergement).

### Impedire la visualizzazione delle directory e delle sottodirectory

Per evitare di permettere a tutti i visitatori del tuo sito di visualizzare il contenuto delle sotto-directory (e accidentalmente dare informazioni ai pirati sui temi o sulle estensioni utilizzate), blocca la visualizzazione del contenuto aggiungendo questa riga nel tuo file **.htaccess**:

```bash
Options All -Indexes
```

### Proteggi il tuo file di configurazione

Il tuo file **wp-config.php**, presente alla radice del tuo sito Web, contiene informazioni di configurazione sensibili. Impedisci l'accesso a questo file aggiungendo queste righe nel tuo file **.htaccess**:

```bash
<Files ~ "^.*\.([Hh][Tt][AaPp])">
    order allow,deny
    deny from all
    satisfy all
</Files>
```

Per maggiori informazioni su questo argomento, consulta la nostra guida sulla ["restrizione di accesso via IP tramite il file.htaccess"](https://docs.ovh.com/ca/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/).

### Blocca un indirizzo IP

Se hai identificato un indirizzo IP malevolo, inserisci la riga nel tuo file **.htaccess*:

```bash
<Limit GET POST>
    order allow,deny deny from xxx.xxx.xxx.xxx
    allow from all
</Limit>
```

In questo esempio `xxx.xxx.xxx.xxx` indica l'indirizzo IP da bloccare.

Per maggiori informazioni su questo argomento, consulta la nostra guida sulla ["restrizione di accesso via IP tramite il file.htaccess"](https://docs.ovh.com/ca/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/).

#### Blocca un indirizzo IP dalla directory wp-admin (o nelle altre directory)

La directory **wp-admin** permette di accedere alla tua interfaccia di amministrazione (il metodo funziona anche con le altre directory, ma corrispondono a URL che non portano a un'interfaccia specifica). Per proteggere questa directory, autorizzi in modo specifico l'accesso a uno o più indirizzi IP utilizzando il seguente codice da inserire nel tuo **.htaccess**:

```bash
<Limit GET POST PUT>
    order deny,allow deny from all
    allow from xxx.xxx.xxx.xxx
    allow from xxx.xxx.xxx.xxx
</Limit>
```

### Informazioni importanti da ricordare

- Salva una versione funzionale del tuo file **.htaccess** prima di effettuare qualsiasi operazione.
- Se le modifiche apportate provocano un errore, sostituisci (tramite il tuo client FTP) il file **.htaccess** online con la versione precedente.
- Puoi gestire alcuni parametri nel tuo file **wp-config.php**
- I file **.htaccess** sono particolarmente efficaci per la gestione di URL, reindirizzamenti e la sicurezza del tuo sito Web.

## Spingiti oltre <a name="go-further"></a>

Consulta il [tutorial disponibile sul sito della Fondazione Apache](https://httpd.apache.org/docs/2.4/fr/howto/htaccess.html).