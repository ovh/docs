---
title: "Come migrare un sito Web da un hosting Web condiviso a un VPS"
excerpt: "Questa guida ti mostra come migrare un sito Web da un hosting condiviso a un VPS OVHcloud"
updated: 2025-10-23
---

## Obiettivo

Il tuo sito Web si evolve, il suo consumo di risorse diventa tale che il tuo hosting Web non corrisponde più alle tue necessità in termini di performance o in termini di capacità di gestire operazioni più complesse. La migrazione a un VPS permette di migliorare la velocità e la reattività del sito Web, aumentare le risorse di calcolo disponibili (CPU, RAM, ecc...) e avere un maggiore controllo sull'ambiente server. Questa guida descrive gli step principali per passare in modo efficace a un VPS, garantendo la continuità di servizio.

**Questa guida ti mostra come migrare un sito Web da un hosting condiviso a un VPS.**

## Prerequisiti

- Disporre di una [offerta di hosting Web](/links/web/hosting) attiva.
- Aver sottoscritto un [VPS](/links/bare-metal/vps) presente nel proprio account OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

### Step 1 - Eseguire il backup dei file e del database del sito Web <a name="step1"></a>

Il primo step consiste nel salvare tutti i file del tuo sito Web, di solito tramite il **F**ile **T**ransfer **P**rotocol (**FTP**), insieme al suo database.

Se utilizzi WordPress, segui la nostra guida "[Salva il tuo sito WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress)" per scoprire come salvare i file e il database del tuo sito Web WordPress, quindi passa allo [step 2](#step2).

#### Step 1.1 - Accedere allo spazio di storage FTP dell’hosting Web

Segui gli step della nostra guida "[Accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection)" per accedere allo spazio di storage FTP del tuo hosting Web.

#### Step 1.2 - Backup dei file via FTP <a name="step1.2"></a>

Se non utilizzi un CMS (WordPress, Joomla!, Drupal, PrestaShop, ecc...), scarica in locale un backup completo di tutti i file presenti nel tuo spazio FTP. Include tutti i file HTML, CSS, JavaScript, immagini e di configurazione (`config.php`, `.env`, ecc.) che costituiscono il sito Web. Assicurati di recuperare completamente le cartelle e i file della directory radice (spesso denominata `public_html` o `wwww`) affinché tutto il contenuto necessario al funzionamento del tuo sito Web sia salvato per la migrazione.

Se utilizzi un CMS per effettuare il backup dei file, seleziona il metodo di backup più adatto alle tue esigenze e clicca sulla scheda.

> [!tabs]
> PrestaShop
>>
>> Per PrestaShop, salva le directory critiche come:
>>
>> - `/admin` : per i file relativi al back office.
>> - `/modules` : per i moduli installati.
>> - `/img` : per tutte le immagini e le icone.
>> - `/themes` : per i file del tema del tuo sito.
>>
>> Per maggiori informazioni sulla struttura dei file PrestaShop, consulta la loro [documentazione tecnica ufficiale](https://docs.prestashop-project.org/welcome).
>>
> Joomla!
>>
>> Per Joomla!, i file importanti di cui effettuare il backup includono le directory:
>>
>> - `/administrator` : per l'interfaccia di amministrazione.
>> - `/components`, `/plugins` : per le estensioni installate.
>> - `/images` : per i file multimediali del tuo sito.
>>
>> Per maggiori informazioni sulla struttura dei file Joomla!, consulta la [documentazione ufficiale di Joomla!](https://docs.joomla.org/).
>>
> Drupal
>>
>> Per Drupal, le cartelle importanti di cui eseguire il backup sono:
>>
>> - `/sites` : che contiene i file specifici del tuo sito.
>> - `/modules`: e `/themes`: per i moduli e i temi personalizzati.
>>
>> Per maggiori informazioni, consulta la [documentazione ufficiale di Drupal](https://www.drupal.org/docs).

> [!primary]
>
> Una volta scaricati tutti i file del sito Web, assicurati di salvarli in una cartella locale facilmente identificabile per facilitare l’ulteriore trasferimento verso il VPS.

#### Step 1.3 - Salva il database

> [!primary]
>
> Se utilizzi già un database Web Cloud Database per il tuo sito Web, puoi continuare a utilizzarlo senza effettuare la migrazione. Il VPS si connetterà al database Web Cloud Database per gestire i dati.

In caso di migrazione del database sul VPS, segui gli step indicati nella nostra guida "[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export)" per effettuare il backup del database.

### Step 2 - Configura il tuo VPS <a name="step2"></a>

> [!primary]
>
> Se non hai ancora attivato un VPS, accedi alla [pagina dei prodotti VPS di OVHcloud](/links/bare-metal/vps) per acquistarne uno. Assicurati di scegliere il VPS che meglio si adatta alle esigenze del sito Web in termini di risorse (RAM, CPU, storage, ecc.) e alle specifiche tecniche del CMS. Per chi non ha dimestichezza con i VPS, consulta la nostra guida "[Iniziare a utilizzare un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

#### Step 2.1 - Accedi al tuo VPS

Per accedere al VPS, consulta la sezione "Connettersi al proprio VPS" della nostra guida "[Iniziare a utilizzare un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

#### Step 2.2 - Installare e configurare un server Web sul VPS <a name="step2.2"></a>

Una volta effettuato l’accesso, installa e configura un ambiente di sviluppo Web sul tuo VPS. Questo step è fondamentale per garantire che il server sia pronto ad accogliere il sito Web una volta trasferiti i file e il database.

Per installare questo ambiente Web, consulta la nostra guida "[Installare un ambiente di sviluppo Web su un VPS o un server dedicato](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)".

### Step 3 - Trasferire i file del sito Web via SFTP

Utilizzare il **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) è il metodo consigliato per trasferire i file dal tuo sito Web al tuo VPS. Questo servizio offre un livello di sicurezza superiore a quello FTP grazie all’utilizzo della crittografia fornita dal servizio SSH, già attivo di default sul VPS OVHcloud.

#### Step 3.1 - Accedi al tuo VPS via SFTP

Consulta la nostra [guida sull’utilizzo di FileZilla](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp) e inserisci le seguenti informazioni:

- **Host**: utilizza l'indirizzo IP del tuo VPS.
- **Username** e **Password**: le credenziali dell'account utente SSH sul VPS.
- **Porta**: utilizza la porta 22 (porta predefinita per SFTP).

#### Step 3.2 - Trasferimento dei file del vostro sito web verso il VPS

Una volta connessi al VPS, l’albero delle directory locali apparirà a sinistra dell’interfaccia FileZilla, e quelle del VPS a destra.

La directory web (o radice web) è il luogo in cui i file del vostro sito web verranno memorizzati per essere accessibili su Internet. **Per impostazione predefinita, potrebbe trattarsi di una directory chiamata `/var/www/html` o di un’altra directory configurata durante l’installazione del vostro server web nell’[passo 2.2](#step2.2)**. Assicuratevi di posizionare i vostri file nella directory configurata come **radice web** per garantire il corretto funzionamento del vostro sito.

> [!warning]
>
> Se siete connessi in SFTP con un utente non-root (es. `debian`), non avrete il permesso di scrivere direttamente in `/var/www/html`.

**Procedura semplice: depositare in `/home` e spostare con `sudo`**

##### In FileZilla (SFTP)

- Sul lato "Sito remoto" (pannello a destra), andate in: `/home/debian/`
- Trascinate e rilasciate il file del vostro database (es. `backup.sql`) in `/home/debian/`. **Non posizionate questa copia né nella directory che copierete verso la radice web** (es. `/home/debian/site/`) **né nella radice web** (es. `/var/www/html`), altrimenti potrebbe essere scaricata pubblicamente.
- Create una directory `site` in `/home/debian/` (clic destro → `Crea una directory`{.action}), quindi apritela.
- Selezionate tutti i file del vostro sito web (il database non deve trovarsi più qui) e trascinateli in `/home/debian/site/`. **Non depositate i vostri dump SQL in questa directory**. Manteneteli fuori dalla radice web, (es. `/home/debian/backup.sql`.)

##### Sul VPS

Connettetevi al VPS tramite SSH consultando la sezione "Connessione al VPS" della guida "[Primi passi con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

Eseguite i seguenti comandi:

> [!warning]
>
> In questo esempio, la radice web è `/var/www/html`. Se la vostra radice web è diversa (configurata al passo 2.2), sostituite `/var/www/html` con il vostro percorso reale.

Creare la radice web se non esiste:

```bash
sudo mkdir -p /var/www/html
```

Copia il contenuto di `/home/debian/site/` verso la radice web mantenendo la struttura e le metadati:

```bash
sudo rsync -a /home/debian/site/ /var/www/html/
```

Alternativa se `rsync` non è installato:

```bash
sudo cp -a /home/debian/site/. /var/www/html/
```

Assegna la proprietà dei file al servizio web (`www-data` per Nginx/Apache su Debian/Ubuntu):

```bash
sudo chown -R www-data:www-data /var/www/html
```

Imposta le autorizzazioni delle directory a `755` (navigabile) e dei file a `644` (leggibile):

```bash
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

### Step 4 - Importa il database sul tuo VPS (facoltativo)

> [!warning]
>
> Se il database è già ospitato su un servizio Web Cloud Databases, non è necessario migrarlo verso il VPS. È possibile conservare il database sul servizio Web Cloud Databases e configurare il VPS per la connessione a questo database ([step 5](#step5)).

#### Prima di iniziare

- Il vostro file di backup (`.sql`) è stato depositato al passo 3.2 (es. `/home/debian/backup.sql`).
- Il **S**istema di **G**estione di **B**ase di **D**ati (**SGBD**) (MySQL / MariaDB) e il relativo client in riga di comando sono stati installati al [passo 2.2](#step2.2).
- Il database **`db_name`**:
    - **esiste già** se lo avete creato durante il passo 2.2 (o tramite il vostro pannello di amministrazione).
    - **può essere creato automaticamente** se il vostro backup `.sql` contiene `CREATE DATABASE`.
    - **altrimenti, createvelo prima dell'importazione**:

    ```bash
    sudo mysql -e "CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    ```

    (sostituite `db_name` con il nome desiderato).

#### Importazione del database

1. Connettetevi al VPS tramite SSH consultando la sezione "Connessione al VPS" della guida "[Primi passi con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".
2. Avviate l'importazione utilizzando il client del SGBD:

    Nell'esempio seguente, utilizziamo MySQL come SGBD. Fate riferimento alla documentazione ufficiale del SGBD che avete installato durante il [passo 2.2](#step2.2) per utilizzare il comando corretto per importare il database sul VPS.

    ```bash
    mysql -u user_name -p db_name < /home/debian/backup.sql
    ```

    - Sostituite `user_name` con il vostro nome utente MySQL (MySQL/MariaDB), e non con il vostro login SSH.
    - Sostituite `db_name` con il nome del database da importare.

3. Inserite la password dell'utente SGBD quando richiesto e attendete la fine dell'importazione.

### Step 5 - Configurare i file di configurazione del sito Web <a name="step5"></a>

Dopo aver trasferito i file del sito Web e, in questo caso, importato il database sul VPS, è importante aggiornare i file di configurazione del sito Web per garantirne il corretto funzionamento. Le variabili principali da regolare sono spesso le informazioni di connessione al database e i percorsi delle cartelle. Ecco le configurazioni specifiche da aggiornare per i principali CMS.

> [!tabs]
> WordPress
>>
>> Modificate le seguenti variabili nel file `wp-config.php`:
>>
>> - **DB_NAME**: il nome del database.
>> - **DB_USER**: utente del database.
>> - **DB_PASSWORD**: la password dell'utente.
>> - **DB_HOST**: l’host del database (generalmente localhost su un VPS).
>>
>> Per maggiori dettagli, consulta la [documentazione ufficiale di WordPress](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/).
>>
>> Per evitare problemi di sicurezza, consulta la documentazione ufficiale relativa alle [permessi di file per WordPress](https://wordpress.org/support/article/changing-file-permissions/)
>>
> PrestaShop
>>
>> Modificate le seguenti variabili nel file `parameters.php`:
>>
>> - **database_host**: host del database.
>> - **database_name**: il nome del database.
>> - **database_user**: utente del database.
>> - **database_password**: la password del database.
>>
>> Per maggiori dettagli, consulta la [documentazione ufficiale di PrestaShop](https://devdocs.prestashop-project.org/8/development/configuration/configuring-prestashop/).
>>
>> Per evitare problemi di sicurezza, consulta la [documentazione ufficiale](https://devdocs.prestashop-project.org/) sui permessi file per PrestaShop.
>>
> Joomla!
>>
>> Modificate le seguenti variabili nel file `configuration.php`:
>>
>> - **public $host**: l'host del database (spesso localhost).
>> - **public $db**: il nome del database.
>> - **public $user**: utente del database.
>> - **public $password**: la password del database.
>>
>> Per maggiori dettagli, consulta la [documentazione ufficiale di Joomla!](https://docs.joomla.org/).
>>
>> Per evitare problemi di protezione, consultare la documentazione ufficiale relativa ai [permessi di file per Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F)
>>
> Drupal
>>
>> Modificate le seguenti variabili nel file `settings.php`:
>>
>> - **host**: l'host del database (spesso localhost).
>> - **database**: il nome del database.
>> - **username**: utente del database.
>> - **password**: la password del database.
>>
>> Per maggiori dettagli, consulta la [documentazione ufficiale di Drupal](https://www.drupal.org/documentation).
>>
>> Per evitare problemi di sicurezza, consulta la documentazione ufficiale relativa ai [permessi di file per Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership)
>>
> Senza CMS
>>
>> **1. Aggiorna le informazioni di connessione al database**
>>
>> Identificate i file di configurazione (come `config.php` o `.env`). Alcuni possono trovarsi in sottocartelle. In questi file, cerca le impostazioni di connessione al database e modificale in base ai nuovi valori di connessione del VPS:
>>
>> - **DB_HOST**: indirizzo del server di database.
>> - **DB_NAME**: nome del database.
>> - **DB_USER**: utente del database.
>> - **DB_PASSWORD**: password.
>>
>> **2. Configura percorsi file**
>>
>> Alcuni siti Web utilizzano percorsi assoluti (ad esempio `/home/user/public_html/`) per file o risorse specifiche come immagini, file CSS, ecc. Verificare che questi percorsi siano adattati correttamente alla struttura del server sul VPS, ad esempio `/var/www/html/`.
>>
>> Per evitare errori di caricamento dei file o collegamenti interrotti, assicuratevi di regolare questi percorsi in tutti i file di configurazione, `.htaccess` o in altri script che contengono collegamenti a queste risorse. In questo modo si garantisce che il sito trovi correttamente tutti gli elementi necessari per il suo corretto funzionamento, anche dopo la migrazione.
>>
>> **3. Modifica il file .htaccess** (facoltativo)
>>
>> Verificare che il file `.htaccess` sia configurato correttamente per il nuovo ambiente. Se si utilizzano regole di riscrittura (`RewriteRule`) per personalizzare gli URL, verificare che i percorsi siano appropriati alla struttura del VPS (ad esempio `/var/www/html/` anziché `/public_html/`). In questo modo è possibile garantire il corretto funzionamento di reindirizzamenti e accessi.
>>
>> Se il file `.htaccess` include limitazioni di accesso o impostazioni di protezione, ad esempio la disattivazione dell'elenco directory o la configurazione della cache, modificare queste impostazioni in modo che corrispondano alle configurazioni e alle condizioni di protezione del nuovo server.
>>
>> **4. Configura i permessi per file e cartelle**
>>
>> Assicurati che i permessi (ad esempio `chmod`) dei file e delle cartelle siano configurati correttamente per evitare errori di accesso. Sui VPS, le autorizzazioni consigliate sono spesso `755` per le cartelle e `644` per i file, ma questo può variare in base alle esigenze di sicurezza.

Se utilizzi un database Web Cloud Databases, verifica che il tuo VPS sia autorizzato a connettersi. Aggiungi l’indirizzo IP del VPS alla lista degli indirizzi IP autorizzati. Questa configurazione permette di rendere sicuro l'accesso al database ed evitare qualsiasi problema di connessione. Consulta la sezione "Autorizzare un indirizzo IP" della nostra guida "[Iniziare a utilizzare un VPS](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

### Step 6 - Associare il dominio all'indirizzo IP del VPS

> [!primary]
>
> Prima di modificare i record della zona DNS per puntare verso l’indirizzo IP del VPS, consigliamo di ridurre il **T**ime **T**o **L**ive (**TTL**). In questo modo la propagazione delle modifiche risulterà più rapida, in quanto i server DNS aggiorneranno le informazioni più rapidamente. Segui lo step "Il tempo di propagazione" della nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" per modificare il TTL e configurare i record per far puntare il dominio verso il VPS.

Per impostare il puntamento del dominio del sito Web verso il VPS, configura i record DNS del dominio in modo che reindirizzino il traffico verso l’indirizzo IP pubblico del VPS. Per maggiori informazioni, consulta la nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

### Step 7 - Verifica il corretto funzionamento del sito Web

Una volta completata la migrazione, prova il sito Web per verificare che funzioni come previsto. Verificare tutte le funzionalità essenziali (moduli, connessioni utente, pagamento online, ecc.) e assicurarsi che tutte le pagine vengano visualizzate correttamente.

### Step 8 - Proteggi il tuo VPS

Dopo aver migrato il sito Web sul VPS, è fondamentale proteggere il server per garantire la protezione dei dati e il corretto funzionamento dei servizi. Per aumentare la sicurezza del VPS è necessario adottare alcune misure:

- Modificare la password SSH e la porta di accesso SSH di default fornite da OVHcloud.
- Configurare un firewall.
- Configurare l’autenticazione a due fattori (2FA).
- Controllare i log.
- Ecc.

Per un elenco completo delle best practice di sicurezza, consulta la nostra guida "[Mettere in sicurezza un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".

## Per saperne di più <a name="go-further"></a>
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).