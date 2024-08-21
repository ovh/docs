---
title: "Tutorial - Salva il tuo sito WordPress"
excerpt: "Questa guida ti mostra come salvare il contenuto del tuo sito WordPress e il suo database"
updated: 2023-02-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Anche prendendo tutte le precauzioni possibili, il tuo sito Web resta esposto ad un potenziale malfunzionamento (errore di manipolazione, schiacciamento accidentale di file, difetto di configurazione, falla di sicurezza o pirateria) che può avere come conseguenza la perdita parziale o totale dei tuoi dati.<br>
Backup regolare delle informazioni del tuo sito Web è una buona prassi da adottare. per permetterti di tornare allo stato precedente del tuo sito in caso di malfunzionamenti.

Su un hosting Web condiviso, sei responsabile dei backup del tuo sito Web. Anche se OVHcloud offre backup (extracontrattuali), ti consigliamo di eseguire backup regolari e di gestire i tuoi supporti di backup (hard disk, penna USB, ecc...) per maggiore cautela.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a [fornitore specializzato](/links/partner) o [amministratore del CMS WordPress](https://wordpress.com/support/){.external}. OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
>

**Questa guida ti mostra come salvare il contenuto del tuo sito WordPress e del suo database.**

## Prerequisiti

- Disporre di un [hosting Web](/links/web/hosting) e aver installato WordPress
  
## Procedura

Puoi effettuare un backup in due modi: **manualmente** o con **o tramite estensione**.

OVHcloud fornisce un [servizio (non contrattuale) di backup automatico dei dati](/pages/web_cloud/web_hosting/ftp_save_and_backup) e la messa a disposizione di questi backup. E' tuttavia vostro compito attuare la vostra politica di ripristino e individuare i punti di ripristino nei momenti che riterrete opportuni.

### Metodo n°1 - Effettuare un backup manuale

Il backup manuale deve essere eseguito in due fasi. Per eseguire questa operazione è necessario salvare i file PHP del sito Web ed esportare il database.

#### 1.1 - Salva i file del tuo sito web

Il recupero viene effettuato tramite un client FTP come FileZilla. Per maggiori informazioni, consulta la guida "[Utilizzare FileZilla con il tuo hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)".

Quando ti connetti sul tuo server tramite FTP, devi recuperare (trascinando/depositando) il contenuto della directory `www` sul lato destro. Questa directory contiene tutti i file e le directory del tuo sito WordPress (configurazione, temi, media, ecc...).

![Visualizza file e directory WordPress alla radice](/pages/assets/screens/other/web-tools/filezilla/wordpress-into-www.png){.thumbnail}

Clicca sulla directory `www` e trascina sulla directory che scegli nella finestra di sinistra. Il trasferimento dei file inizierà automaticamente.

In caso di malfunzionamento sul tuo sito Web, è necessario eseguire l'operazione inversa schiacciando i file di destinazione.

#### 1.2 - Esporta il tuo database

Per esportare il tuo database, accedi all'interfaccia _PHPMyAdmin_ tramite l'URL che ti è stato comunicato al momento della sottoscrizione della tua offerta di hosting web.

> [!success]
>
> Consulta la nostra guida su [esportare un database](/pages/web_cloud/web_hosting/sql_database_export).

![Accesso PHPMyAdmin - Home](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Clicca su `Esportare`{.action} in alto a pagina:

![Accesso PHPMyAdmin - Esporta](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export.png){.thumbnail}

Scegli come predefinito: metodo di esportazione rapido e formato SQL.

Clicca su `Esegui`{.action} per scaricare il database completo in formato SQL (Structured Query Language).

![Accesso PHPMyAdmin - Esporta - Scaricamento](/pages/assets/screens/other/browsers/web-pages/dowload-successfull.png){.thumbnail}

### Metodo n°2 - Effettuare un backup con estensione

Le estensioni WordPress permettono di gestire i backup La più popolare è [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external}, con diversi milioni di impianti attivi. La versione gratuita è sufficiente per salvare il tuo sito Web. La versione premium offre più opzioni come backup incrementali, strumenti di migrazione, backup multisito, più scelta sui cloud per archiviare i dati, ecc...

Scarica l'estensione in `.zip` sul tuo computer. Per motivi di chiarezza, il file caricato dell'estensione verrà rinominato **updraftplus.zip** nel seguito di questa guida.

#### 2.1 - Accedi all'interfaccia di amministrazione per installare l'estensione

Di default, si tratta del dominio seguito da `/wp-admin`:

![Accesso amministratore su wp-admin](/pages/assets/screens/other/cms/wordpress/login-interface.png){.thumbnail}

Accedi alla sezione `Plugin`{.action} e clicca su `Aggiungi nuovo`{.action}

![Aggiungi un'estensione](/pages/assets/screens/other/cms/wordpress/plugins-add-new.png){.thumbnail}

Seleziona l'estensione cliccando su `Percorrere`{.action}:

![Carica l'estensione](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-add-new-updraftplus.png){.thumbnail}

Clicca su `Installa adesso`{.action}:

![Installare l'estensione](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-browse-updraftplus.png){.thumbnail}

Dopo l'installazione, ti verrà chiesto di attivare l'estensione:

![Conferma di installazione](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-activate-updraftplus.png){.thumbnail}

Una volta attivata, comparirà nella lista delle estensioni:

![Elenco delle estensioni installate](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-list-updraftplus.png){.thumbnail}

#### 2.2 - Configura i tuoi backup

Nella pagina seleziona `Impostazioni`{.action} e, nella pagina `UpdraftPlus Backup/Restore`, clicca su `Impostazioni`{.action}:

![Pagina UpdraftPlus Backup/Restore](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-settings.png){.thumbnail}

Definisci il backup giornaliero dei tuoi file e del tuo database:

![Pagina UpdraftPlus](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-settings-2.png){.thumbnail}

Scegli il backup via email.

I backup saranno inviati all'indirizzo email dell'account amministratore (l'account che utilizzi):

![Backup via email](/pages/assets/screens/other/cms/wordpress/email-setting.png){.thumbnail}

In fondo alla pagina, clicca su `Salva le modifiche`{.action} per confermare l'operazione.

#### 2.3 - Effettua il tuo primo backup

Accedi alla scheda `Backup/Ripristino`{.action} e clicca su `Esegui il backup adesso`{.action}:

![Pagina UpdraftPlus Salvare/Ripristinare](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-backup-now.png){.thumbnail}

Nella nuova finestra, clicca su `Esegui il backup adesso`{.action}:

![Pagina UpdraftPlus modale Salva/Ripristina](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-perform-backup.png){.thumbnail}

Una volta terminati i backup, riceverai due email: uno con il contenuto del tuo Wordpress, l'altro con il database del tuo sito Web.
Se non ricevi le email, verifica l'indirizzo email dell'account che utilizzi (nella sezione `Utenti`{.action}). Verifica anche le cartelle "SPAM / Posta indesiderata".

### A quale frequenza effettuare i backup?

La frequenza dei tuoi backup è determinata dalla frequenza con cui modifichi il tuo contenuto. Un backup giornaliero è utile se il contenuto viene pubblicato giornalmente sul tuo sito Web. e adattare la frequenza in base alla frequenza delle pubblicazioni. Hai la possibilità di effettuare manualmente l'aggiornamento (l'opzione è proposta di default). Ti consigliamo inoltre di eseguire un backup non appena installi o modifichi un tema o un'estensione.

### Cosa bisogna ricordare

- Integrare una routine di backup regolari è un buon modo per proteggere il contenuto del tuo sito Web.
- Assicurati che i tuoi backup siano sicuri da soli.
- Effettua un backup prima di effettuare un aggiornamento e verifica che funzioni correttamente sul tuo sito Web. 

Applicando queste best practice, hai la possibilità di tornare a una versione precedente e sana.

## Per saperne di più <a name="go-further"></a>

- [Sito ufficiale di WordPress](https://wordpress.org){.external}
- [Maggiori informazioni sui backup del tuo hosting Web](/pages/web_cloud/web_hosting/hosting_technical_specificities#informazioni-sui-backup-automatici)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).