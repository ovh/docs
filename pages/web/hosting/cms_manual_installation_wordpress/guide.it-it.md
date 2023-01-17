---
title: 'Tutorial - CMS: installa manualmente WordPress'
excerpt: Come fai a installare manualmente WordPress?
slug: cms_installa_manualmente_wordpress
section: CMS
order: 04
---

**Ultimo aggiornamento: 01/03/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come installare manualmente il CMS (Content Management System) WordPress in pochi step.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/) o [l'amministratore del CMS WordPress](https://wordpress.com/it/support/){.external}. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più](#go-further) di questa guida.
>

> [!success]
>
> Per installare WordPress **automaticamente** dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), consulta la nostra guida sull'[installazione di un modulo "in un click"](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/).
>
> Per installare **manualmente un altro CMS** (Joomla!, Drupal, PrestaShop), consulta la nostra guida sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/).
>

## Prerequisiti

- Disporre di un'offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/) che contiene almeno un database.
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/)
- Avere accesso allo[Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Step 1 - preparare l'installazione <a name="step1"></a>

Per installare il CMS **WordPress** sulla tua offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/), è necessario effettuare alcuni preparativi.

#### 1.1 - Verifica la dichiarazione della "cartella di root"

La "cartella di root" corrisponde alla directory in cui verrà installato il tuo futuro CMS sul tuo hosting. Ti consigliamo di scegliere una directory vuota per evitare conflitti con altri potenziali multisiti.

Per definire la cartella di root da utilizzare sul tuo WordPress, consulta la nostra documentazione che descrive [come aggiungere un multisito sul tuo hosting Web](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/).

> [!primary]
>
> Se definisci un nome di "cartella di root" che non esiste sul tuo hosting Web, verrà creato automaticamente nello spazio di storage FTP del tuo hosting Web.
>

#### 1.2 - Verifica il "puntamento" del dominio

- Assicurati che il dominio che utilizzerai per accedere al tuo WordPress e il sottodominio "www" puntino verso l'indirizzo IP della tua offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/).

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) nella sezione `Web Cloud`{.action} e seleziona la tua soluzione di hosting Web nella sezione `Hosting`{.action}.<br>
Nel riquadro `Informazioni generali`{.action} sulla tua destra, clicca su `IPv4`{.action} e seleziona l'indirizzo IP del tuo hosting Web.

Se la zona DNS attiva del tuo dominio è gestita dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), compara l'indirizzo IP del tuo hosting con quello presente nella zona DNS del tuo dominio, consultando la nostra documentazione sulle [zone DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/).

> [!warning]
>
> Se hai attivato le opzioni `CDN`{.action} o `IP del paese`{.action} con il tuo dominio, utilizza l'indirizzo IP adattato seguendo la procedura descritta nella guida che contiene [tutti gli indirizzi IP dei nostri hosting condivisi](https://docs.ovh.com/it/hosting/lista-indirizzi-ip-di-cluster-e-hosting-web/).
>

Se non riesci a effettuare queste verifiche, contatta il provider della tua zona DNS attiva per aggiornare il puntamento del tuo dominio.

> [!warning]
>
> Le modifiche effettuate nella tua zona DNS comportano un tempo di propagazione da 4 a 24 ore.
>

- Recupera [le informazioni necessarie per accedere allo spazio FTP del tuo hosting web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/#step-1-recupera-i-dati-necessari-a-effettuare-laccesso).
- Recupera gli accessi al database della tua offerta di hosting Web se esiste già, o creane una utilizzando la nostra [guida](https://docs.ovh.com/it/hosting/creare-database/).

#### 1.3 - Installare il client FTP gratuito "FileZilla"

Per maggiori informazioni, consulta la guida scaricare gratuitamente il link di download e consulta la nostra guida su [utilizzare FileZilla con la tua soluzione di hosting OVHcloud](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/).

#### 1.4 - Preparare un database <a name="step1-4"></a>

I CMS necessitano di un database per funzionare. Le nostre offerte di [hosting web](https://www.ovhcloud.com/it/web-hosting/) ne contengono, ad eccezione di [hosting gratuito Start 10M](https://www.ovhcloud.com/it/domains/free-web-hosting/).

Utilizza la nostra documentazione per [creare un database dalla tua offerta di hosting web](https://docs.ovh.com/it/hosting/creare-database/).

Se disponi di un'offerta Web Cloud Databases in MySQL o MariaDB e desideri utilizzarla per installare manualmente il tuo WordPress, consulta la nostra guida sulla [creazione di un database su un Web Cloud Databases](https://docs.ovh.com/it/clouddb/creare-database-e-utente/#crea-un-database).

Una volta creato il database, recupera i parametri di connessione (server, nome del database, nome utente e password) e conservali per [step 3](#step3) di questa guida.

> [!primary]
>
> Per installare il tuo CMS WordPress con un database già esistente, recupera i parametri di connessione al database direttamente nei file del sito ad esso associati.
>
> Se il CMS utilizzato è anche quello da installare, puoi utilizzare [questa guida](https://docs.ovh.com/it/hosting/modificare-password-database/#step-3-modifica-la-password-del-database-del-tuo-sito-nel-file-di-configurazione) per identificare i file di configurazione nel tuo [spazio di storage FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/).
>
> Accedi al tuo database per censire i "prefissi" delle tabelle già presenti all'interno. per non scegliere un "prefisso" da tavolo già utilizzato da un altro sito.
>
> - Per connetterti al tuo database associato alla tua offerta di hosting Web, consulta [questa guida](https://docs.ovh.com/it/hosting/creare-database/#accedi-allinterfaccia-phpmyadmin).
> - Per connetterti a un database presente su un Web Cloud Databases, consulta [questa guida](https://docs.ovh.com/it/clouddb/connessione-database-server-bdd/).
>

### Step 2 - Avvia l'installazione manuale

#### 2.1 - Recuperare i file sorgente di WordPress

Accedi al sito dell'editor [WordPress](https://wordpress.org/download/#download-install){.external} per scaricare i file sorgente del CMS.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> Nella pagina di download, inserisci la versione PHP e MySQL o MariaDB necessarie per far funzionare il tuo WordPress.
>
> Configura la versione di PHP sul tuo hosting Web consultando la nostra guida su [modifica della versione PHP di un hosting Web](https://docs.ovh.com/it/hosting/configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/).
>
> Se utilizzi già una versione di PHP superiore o uguale a quella richiesta, non è necessario apportare modifiche.
>

> [!warning]
>
> Se hai altri siti ospitati sulla tua offerta di hosting Web, verifica che siano compatibili con la versione di PHP scelta per il tuo WordPress.
>

#### 2.2 - Decomprimere i file sorgente scaricati in una nuova cartella

Il file caricato è in formato **compresso** (zippato). Crea una cartella intitolata "**WordPress**" sul tuo computer e **decomprimine** il contenuto del file scaricato all'interno della cartella "**WordPress**".

Per farlo, apri la cartella in cui hai scaricato il file compresso, clicca con il tasto destro sul file in questione e seleziona "Estrarre tutto... ".

Indica la cartella "**WordPress**" in arrivo per estrarre i tuoi file da questa cartella.

#### 2.3 - Trasferisci i file sorgente dalla cartella "WordPress" alla cartella "root" sul tuo hosting Web

Una volta che i file vengono decomprimiti nella cartella "**WordPress**", [collegati in FTP al tuo spazio di archiviazione](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) con l'aiuto del [client FTP FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/) e copia i file contenuti nella cartella "**WordPress**" nella "cartella root" definita sul tuo hosting durante lo[step 1]( #step1) di questa guida.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Ti consigliamo vivamente di utilizzare una "cartella radice" vuota per evitare qualsiasi conflitto con un altro sito. Verifica che la cartella di destinazione non contenga elementi prima di spostare i file.
>

>[!primary]
>
> Se la cartella root definita non è stata creata automaticamente durante le azioni descritte nello[step 1](#step1), puoi crearla via FileZilla.
>
> Il deposito dei file sul tuo hosting può richiedere qualche minuto.
>
> Una volta completata l'operazione, verifica che tutti gli elementi presenti nella cartella locale "**WordPress**" siano stati correttamente trasferiti nella "cartella di root" presente sul tuo hosting Web.
>

**Caso Particolare**: Se disponi di una connessione Internet limitata e/o di un'offerta di hosting **Pro** o superiore, puoi utilizzare la connessione in **SSH** per inserire i file sorgente di WordPress nello spazio di storage del tuo hosting Web. 

Per connetterti in SSH al tuo hosting, consulta la nostra guida sulla [connessione in SSH da un hosting condiviso OVHcloud](https://docs.ovh.com/it/hosting/hosting_condiviso_il_protocollo_ssh/).

Una volta connesso in **SSH**, esegui questi comandi:

- Accedi alla "cartella di root" in cui vuoi installare il tuo WordPress sul tuo hosting Web:

```bash
cd NameOfYourTargetFolder
```

- Recupera i file sorgente di WordPress direttamente dalla tua "cartella root":

```bash
wget http://wordpress.org/latest.tar.gz
```

- Elimina gli file sorgente di WordPress dalla tua "cartella di root":

```bash
tar xvf latest.tar.gz
```

- Nella tua "cartella root" viene creata una cartella "**wordpress**". Sposta il contenuto alla base della tua "cartella di root":

```bash
mv wordpress/* ./
```

- Elimina la cartella "**wordpress**", ormai vuota:

```bash
rmdir ./wordpress/
```

- Elimina il file compresso "**latest.tar.gz**":

```bash
rm -f latest.tar.gz
```

### Step 3 - Completare l'installazione manuale <a name="step3"></a>

> [!success]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare errori.
>

#### 3.1 - Accedi al tuo sito WordPress tramite il tuo browser

Inserisci il tuo dominio nella barra di ricerca del tuo browser Internet.

Se i file sorgente di WordPress sono stati inseriti correttamente nella tua cartella root, la pagina WordPress che permette di selezionare la lingua apparirà:

![hosting](images/WPselectlangue.png){.thumbnail}

Seleziona la lingua del sito e clicca su `Continua`{.action}.

#### 3.2 - Associa il tuo WordPress al tuo database

WordPress ti chiederà di recuperare le credenziali di accesso al tuo database:

![hosting](images/WPstart.png){.thumbnail}

Recupera le credenziali del tuo database (se necessario, consulta [step 1.4](#step1-4) di questa guida e clicca su `C'è partito!`{.action} per continuare.

Visualizzi questa pagina:

![hosting](images/WPdb.png){.thumbnail}

Inserisci le informazioni richieste relative al database:

- Nome del database: questo nome è stato definito durante la creazione del database nello[Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

- Identificativo: è identico al nome del database se utilizzi un database incluso con il tuo hosting Web.
Per i database creati su un Web Cloud Databases, fai riferimento alle informazioni indicate nello [step 1.4](#step1-4) di questa guida.

- Password: ti è stato inviato via email durante la creazione del database. È possibile che l'abbiate modificato nel frattempo.

- Indirizzo del database: inserisci il nome del server del database presente nell'email di installazione o nello Spazio Cliente OVHcloud. 

> [!primary]
> 
> - Il nome del server di un database incluso nella tua offerta di hosting Web ha questa forma: `NameOfYourDatabase.mysql.db` 
>
> - Il nome del server di un database Web Cloud Databases inizia con il tuo identificativo cliente OVHcloud, nella forma seguente: `OVHID(without-ovh)-XXX.eu.cloudddb.ovh.net` dove i **"X"** sono da sostituire con il riferimento del tuo servizio Web Cloud Databases.
>

- Prefisso delle tabelle: se l'installazione avviene con un nuovo database, inserisci il "prefisso" che preferisci. Se utilizzi un database già utilizzato da un altro sito, consulta lo [step 1.4](#step1-4) di questa guida per non inserire un "prefisso" di tavolo già utilizzato nel tuo database.

Clicca su `Sottoporre`{.action} per confermare le informazioni di connessione al database.

Se tutto è andato bene, visualizzi la pagina seguente:

![hosting](images/WPafterDB.png){.thumbnail}

Clicca su `Avvia l'installazione`{.action}.

#### 3.3 - Definisci l'accesso Amministratore al back office del tuo WordPress e la tua email di contatto

Una volta completata l'installazione, WordPress ti chiederà informazioni sul tuo futuro sito, inclusa la creazione dell'identificativo Amministratore WordPress.

che permette di accedere allo spazio di amministrazione del CMS WordPress, comunemente chiamato "Back-office".

![hosting](images/WPafterDB2.png){.thumbnail}

Inserisci le informazioni richieste:

- Titolo del sito: inserisci il titolo del tuo sito.
- Identificativo: inserisci l'identificativo Amministratore del tuo CMS.
- Password: definisci una password per questo identificativo Amministratore.
- Il tuo indirizzo email: inserisci un indirizzo email valido.
- Privacy: seleziona questa opzione per i motori di ricerca che indicano il tuo WordPress.

Clicca su `Installa WordPress`{.action} non appena tutto è stato inserito correttamente.

#### 3.4 - Completare l'installazione manuale e testare l'accesso "Amministratore"

L'installazione viene terminata se visualizzi la pagina seguente:

![hosting](images/WPend.png){.thumbnail}

Clicca su `Accedi`{.action} per testare l'accesso al tuo nuovo CMS WordPress utilizzando gli identificativi amministratore creati precedentemente allo Step 3.3.

> [!primary]
>
> I team OVHcloud non supportano soluzioni terze come WordPress e non possono quindi supportarti nell'utilizzo o nella configurazione del tuo CMS WordPress.
>
> Per questo tipo di supporto, utilizza i forum dedicati alla soluzione WordPress.
>

Una volta connesso, visualizzi la pagina seguente:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Puoi avviare la creazione dei contenuti del tuo sito WordPress!
>

## Per saperne di più <a name="go-further"></a>

[Sito ufficiale WordPress](https://wordpress.org)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.