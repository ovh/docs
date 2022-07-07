---
title: 'CMS: installa manualmente Wordpress'
excerpt: Come fai a installare manualmente Wordpress?
id: '1977'
slug: cms_installa_manualmente_wordpress
legacy_guide_number: g1977
section: CMS
---


## Parte 1: preparazione all’installazione

## [b]Software[/b]
Per installare la piattaforma WordPress sulla tua offerta di hosting condiviso, ti consigliamo di utilizzare un client FTP come FileZilla (gratuito).

## [b]Credenziali[/b]
Assicurati di disporre delle credenziali (Nic-handle e password) di accesso al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).


- Recupera le credenziali FTP per accedere al tuo hosting Web.
Per recuperare gli identificativi FTP, consulta la guida []({legacy}1374)

- Assicurati di avere a disposizione le credenziali per accedere al tuo database SQL.
Per recuperare le tue credenziali SQL, consulta la guida []({legacy}1374)


![wordpress](images/3125.png){.thumbnail}


## Parte 2: recupero dei file sorgente

- Accedi al sito di [Wordpress](https://it.wordpress.org/).

In genere, il link disponibile ti permette di scaricare l'ultima versione stabile del CMS.


Il file scaricato generalmente è compresso (.zip). Per aprirlo e installarlo è necessario decomprimerlo.

![wordpress](images/3126.png){.thumbnail}


## Parte 3: configurazione dei file sull'hosting via FTP

## - Decomprimi la cartella:
Apri la cartella in cui hai scaricato il file compresso.

Clicca con il tasto destro, seleziona Estrai tutto... o Estrai qui e indica la cartella di destinazione dei tuoi file.

Se hai bisogno di aiuto, segui i numerosi tutorial online e scarica uno dei tanti programmi per decomprimere file .zip disponibili su Internet.

La cartella di destinazione si chiamerà Wordpress.

![wordpress](images/3127.png){.thumbnail}

## - Accedi al tuo hosting Web via FTP
Accedi al tuo hosting e salva i file di Wordpress.

Se hai bisogno di aiuto per accedere in FTP alla tua soluzione di hosting condiviso, consulta la guida []({legacy}1374)

![wordpress](images/3128.png){.thumbnail}

## - Trasferisci i tuoi file via FTP
Per salvare i tuoi file sull'FTP, segui questi step.

## Step 1
Apri FileZilla.

Nella sezione Sito locale, che contiene l'elenco dei file presenti sul tuo pc, apri la cartella decompressa Wordpress in cui sono presenti i file del tuo CMS.

Nella sezione Sito remoto, che corrisponde in questo caso al tuo hosting condiviso OVH, apri la cartella www in cui dovrai salvare tutti i file del CMS.

Se questa cartella non esiste, puoi crearla.

Per poter effettuare l'installazione dal tuo dominio, i tuoi file devono necessariamente essere salvati nella cartella "www".

![wordpress](images/3129.png){.thumbnail}

## Step 2
Apri le cartelle:

Nella sezione Sito locale, trovi i file necessari all'installazione di WordPress.

Selezionali tutti premendo i tasti CTRL+A.

Trascina i tuoi file nella cartella "www" della sezione Sito remoto.

È molto probabile che la cartella "www" non sia vuota. Non è obbligatorio eliminare i file presenti al suo interno.

![wordpress](images/3130.png){.thumbnail}

## Step 3
Attendi qualche minuto fino al completo trasferimento dei file sul server FTP remoto.

Al termine dell'operazione, assicurati che tutti i file e le cartelle siano stati spostati correttamente.

![wordpress](images/3131.png){.thumbnail}


## Parte 4: collega Wordpress al tuo database

## - Per evitare errori, prima di proseguire cancella la cache del tuo browser.
Per collegare Wordpress al tuo database, è necessario seguire gli step di installazione del CMS.

## Step 1
Inserisci il tuo dominio nella barra degli indirizzi del tuo browser.
Compare questo messaggio:

Clicca su Creare un file di configurazione per continuare.

![wordpress](images/3132.png){.thumbnail}

## Step 2
Recupera le credenziali del tuo database (se hai bisogno di aiuto, consulta la guida[]({legacy}1374)).

Clicca su Installa Wordpress per continuare.

![wordpress](images/3133.png){.thumbnail}

## Step 3
Inserisci le informazioni del tuo database:

Nome database: il nome scelto al momento della sua creazione nello Spazio Cliente OVH.

Nome utente: uguale al nome del database.

Password: se non l'hai modificata, la password che hai ricevuto per email al momento della creazione del tuo database.

Host del database: il nome del server del tuo database, indicato nell'email di installazione o nel tuo Spazio Cliente OVH.

Prefisso tabella: utile per realizzare più installazioni di Wordpress utilizzando lo stesso database. In questo caso, è necessario inserire un prefisso diverso per ognuna delle installazioni.

Importante: le credenziali del database non vengono inviate automaticamente durante l'installazione dell'hosting. Per riceverle, attiva il database nel tuo Spazio Cliente OVH.

Clicca su Invia per confermare le informazioni di accesso al tuo database.

![wordpress](images/3134.png){.thumbnail}


## Finalizzazione

## Finalizzazione dell'installazione
Segui gli step di installazione del CMS per completare l'installazione del tuo blog WordPress.

## Step 1
Clicca su Eseguire l’installazione per continuare.

![wordpress](images/3135.png){.thumbnail}

## Step 2
Inserisci le informazioni relative al tuo blog WordPress:

Titolo sito: inserisci il titolo del tuo blog.

Nome utente: scegli l'identificativo per accedere al tuo blog come amministratore.

Password, due volte: inserisci due volte la password per accedere al tuo blog WordPress come amministratore.  

Tua e-mail: inserisci un indirizzo email valido.

Privacy: seleziona la casella se vuoi che il tuo blog venga indicizzato  dai motori di ricerca.

Clicca su Installa WordPress per avviare l'installazione.

![wordpress](images/3136.png){.thumbnail}

## Step 3
Il tuo blog WordPress è installato!

Clicca su Collegati e inserisci le tue credenziali per iniziare subito a utilizzare il tuo blog.

![wordpress](images/3137.png){.thumbnail}

## Pannello di amministrazione di WordPress
Una volta effettuato l'accesso, visualizzi il pannello di amministrazione di WordPress.

![wordpress](images/3138.png){.thumbnail}


## Informazioni utili
Il supporto OVH non risponde alle domande relative alla configurazione del tuo WordPress. Se hai bisogno di aiuto, consulta la guida []({legacy}2053) disponibile online o i [forum dedicati](https://it.forums.wordpress.com/forum/supporto) a questa soluzione.

## - Errore "Sito in costruzione"
Hai configurato i tuoi file sul tuo server FTP, ma continui a visualizzare la pagina "Sito in construzione" di OVH.

Quando installi il tuo hosting, OVH realizza una pagina di attesa per permetterti di caricare i file del tuo sito.

Se salvi i file nella cartella www ma non elimini il contenuto inserito da OVH, potrebbe verificarsi questo problema.

Per risolverlo, elimina o rinomina il file "index.html" che OVH ha salvato sul tuo hosting.

Se rinomini semplicemente il file, puoi riattivarlo in qualsiasi momento per utilizzarlo come pagina di attesa.

Altre informazioni utili: per essere presi in carico, i file del tuo sito devono trovarsi nella cartella "www".

![wordpress](images/3139.png){.thumbnail}

## - Errore con la versione di PHP
È un errore che riguarda la versione PHP del tuo server.

La causa è semplice: l'ultima versione di PHP non è stata attivata.

Per modificare la versione PHP del tuo hosting coindiviso, consulta la guida [Configura PHP sul tuo Hosting Web OVH]({legacy}1207)

![wordpress](images/3140.png){.thumbnail}

