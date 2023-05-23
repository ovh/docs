---
title: "Tutorial - Operazioni realizzabili con un file ".htaccess"
excerpt: "Questa guida ti mostra alcuni esempi di operazioni realizzabili con un file .htaccess"
slug: hosting_condiviso_altre_operazioni_possibili_con_il_file_htaccess
section: Scrittura e autenticazione
order: 04
updated: 2023-05-23
---

**Ultimo aggiornamento: 23/05/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra le principali funzionalità del file ".htaccess" per il tuo hosting Web.

Il file ".htaccess" è un file di configurazione (HTTP) Apache eseguito dal server Web del tuo hosting Web. Permette di definire regole specifiche per una directory e l'insieme delle sue sottodirectory. Possono essere creati diversi file ".htaccess" nello [spazio FTP](/pages/web/hosting/ftp_connection/) del tuo hosting Web. 

Se non esiste già nel tuo spazio FTP, puoi aggiungerlo creando un file che potrai definire "**.htaccess**" nella directory per la quale desideri applicare una o più delle regole descritte in questo tutorial.

Per utilizzare correttamente il file ".htaccess", è necessario conoscere e rispettare queste regole: 

- **un solo** file ".htaccess" per directory o sottodirectory per evitare conflitti tra diversi file ".htaccess";
- il file ".htaccess" è invisibile agli utenti che visitano il tuo sito Web;
- le regole dichiarate in un file ".htaccess" si applicano all'intera directory in cui è installato il file ".htaccess", nonché a tutte le sottodirectory della stessa directory.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/directory/) o di contattare l'amministratore del servizio. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>
> Gli esempi che seguiranno devono essere inseriti in un file ".htaccess". Attenzione, le regole definite in questo file hanno conseguenze dirette sul tuo sito Web. Prima di applicarle al tuo sito, verifica sistematicamente le regole che aggiungi. 
> 

**Questa guida ti mostra le principali operazioni realizzabili con un file ".htaccess".**

## Prerequisiti

- Disporre di un [hosting condiviso OVHcloud](https://www.ovhcloud.com/it/web-hosting/)

## Procedura

### Autorizza o restringe l'accesso ad una directory o ad un sito Web per uno o più indirizzi IP

Questa funzionalità è molto utile e aumenta la sicurezza per i tuoi siti Web. che può contribuire a ridurre i rischi di pirateria del tuo sito Web.

Per maggiori informazioni, consulta il nostro tutorial: ["Come bloccare l'accesso al mio sito per alcuni indirizzi IP tramite un file.htaccess? "](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Definisci una password di accesso cifrata per accedere a una directory o a un sito web

Tramite il file ".htaccess", potete impostare un accesso protetto (tramite una password crittografata) ai vostri dati presenti sul vostro hosting.

Per maggiori informazioni, consulta il nostro tutorial ["Proteggi l'interfaccia di gestione del tuo sito con un file .htaccess"](/pages/web/hosting/htaccess_protect_directory_by_password/).

### Specificare un file di indice differente

Di default, il file **index** di una directory è *index.html*, *index.htm* o *index.php*. Se preferisci un altro file, puoi aggiungere una linea di questo tipo nel tuo ".htaccess":

```bash
DirectoryIndex File_Name
```

Ad esempio, se vuoi utilizzare la pagina **home.html** come pagina di indice, aggiungi questa riga:

```bash
DirectoryIndex home.html
```

### Impedire la lista del contenuto di una cartella

Per impedire agli utenti di elencare tutti i file contenuti in una directory in assenza di file **index** (.cgi,.html, .php, ecc.), crea un file "**.htaccess**" contenente la riga seguente:

```bash
Options -Indexes
```

### Effettua la riscrittura dell'URL

Grazie al modulo **mod_rewrite** del server Web HTTP Apache preinstallato sul tuo hosting Web, questa funzionalità permette di reindirizzare:

- tutte le richieste HTTP verso un unico file del tuo sito Web
- una parte delle richieste HTTP verso un unico file del tuo sito Web
- il tuo dominio verso il sottodominio in "www"
- le richieste verso un fascicolo specifico, senza visualizzare il fascicolo in questione;
- automaticamente un visitatore verso il tuo sito Web in HTTPS quando lo consulta con un URL in HTTP.

Per maggiori informazioni, consulta il nostro tutorial: ["Riscrivere l'URL di accesso al mio sito grazie al mod_rewrite via file.htaccess"](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Reindirizzare i messaggi di errore

Per personalizzare e/o reindirizzare i messaggi di errore su una pagina Web, crea un file "**.htaccess**" con la seguente riga di codice:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Sostituisci solo "**Error_Code_Number**" con il numero del codice di guasto HTTP Apache corrispondente. 

Per maggiori informazioni su questa funzionalità, consulta la [documentazione ufficiale Apache](https://httpd.apache.org/docs/trunk/en/custom-error.html){.external}.

I codici di errore HTTP più comuni sono:

- 401: Authorization required: questo errore si verifica quando un visitatore inserisce un login sbagliato/password durante l'accesso a un file o cartella protetti.
- 403: Access denied: questo errore si verifica durante l'accesso a una directory in cui il file *index.html* (o *index.cgi*, ecc.) è assente e se la configurazione del server vieta la visualizzazione dei file della directory.
- 404: Not Found : il file che il visitatore cerca di vedere non esiste.
- 500: Internal Server Error: questo errore si verifica quando uno script non è stato eseguito correttamente o lo script o i diritti dello script non sono corretti.

Sostituisci **"Message_Or_Destination"** con l'azione da effettuare. Per visualizzare un messaggio direttamente, inserisci il messaggio corrispondente tra virgolette. Per reindirizzare su una pagina specifica, inserisci la via di accesso a questa pagina. 

Di seguito trovi due esempi concreti:

- Desiderate indicare *"Spiacenti, non hai il diritto di accedere a questo file"* se il visitatore riscontra un errore **403**. Aggiungi questa riga nel tuo file ".htaccess":

```bash
ErrorDocument 403 "Spiacenti, non hai il diritto di accedere a questo file"
```

- Desiderate restituire gli errori **404** alla vostra pagina personalizzata *404.html* (per il vostro dominio: domain.tld). Aggiungi questa riga nel tuo file ".htaccess":

```bash
ErrorDocument 404 http://domain.tld/404.html
```

Puoi anche reindirizzare un errore verso uno script **C**ommon **G**ateway **I**nterface (**CGI**). Puoi codificare uno script in **CGI** per, ad esempio, effettuare le seguenti azioni:
 
- visualizzare un messaggio;
- reindirizzare il visitatore verso un altro file in base all'URL inizialmente richiesto (disponibile nella variabile d'ambiente **REQUEST_URI**);
- inviare un'email

Per esempio, per reindirizzare un errore verso uno script **CGI**, aggiungi questa riga nel tuo file ".htaccess":

```bash
ErrorDocument 404 /cgi-bin/errore.cgi?type=404
```

La linea che precede reindirizza il visitatore che riscontra un errore **404** verso il tuo script *errore.cgi*. Quest'ultimo eseguirà le direttive in esso contenute, specificatamente in relazione all'errore **404**.

## Per saperne di più <a name="go-further"></a>

[Accedere allo spazio FTP del tuo hosting Web](/pages/web/hosting/ftp_connection/)

[Bloccare l'accesso al mio sito per alcuni indirizzi IP tramite un file.htaccess?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Proteggere l'interfaccia di gestione del tuo sito con un file .htaccess](/pages/web/hosting/htaccess_protect_directory_by_password/)

[Riscrivere l'URL di accesso al mio sito grazie al mod_rewrite via file.htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.