---
title: "Hosting Web: il mio database è saturo, cosa fare?"
excerpt: "Questa guida ti mostra come agire in caso di saturazione del database"
updated: 2023-12-13
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un database permette, ad esempio, di salvare le informazioni relative al tuo sito Web e al suo funzionamento. Queste informazioni sono strutturate in modo che il tuo sito Web possa accedervi facilmente, consentendo una consultazione ottimale e personalizzata per gli utenti/utenti del tuo sito Web. 

Durante l'utilizzo, un database può acquisire, modificare o eliminare informazioni (dati di connessione, utenti, visualizzazioni, dati necessari al corretto funzionamento del tuo sito Web, ecc...). 

In alcuni casi la banca dati registra una tale quantità di informazioni che comporta una saturazione dello spazio di storage ad essa assegnato. Quando il database è saturo, si parla di **overquota**.

Questa guida ti mostra le operazioni da effettuare quando il tuo database condiviso OVHcloud è prossimo alla saturazione o è già in **overquota**.

**Questa guida ti mostra come agire in caso di saturazione del database.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Disporre di una [offerta di hosting Web OVHcloud](/links/web/hosting) con un database condiviso OVHcloud associato
  
## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner). OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

Quando il database condiviso OVHcloud raggiunge la saturazione (**overquota**), i nostri robot ti avvertono via email all'indirizzo del [contatto "amministratore"](/pages/account_and_service_management/account_information/managing_contacts) del database. 

Una prima email viene inviata quando il tuo database ha consumato più di **80%** della sua capacità di storage. Una seconda email viene inviata quando **90%** di questa capacità di storage viene raggiunto.

Quando il tuo database è in **overquota**, riceverai una terza email di avviso. Il tuo database passa in "*READ ONLY*" (sola lettura). Non è possibile aggiungere o modificare i record del tuo database, ma resta accessibile in **lettura** e in **eliminazione**. 

### Step 1: identificare la o le tavole voluminose

Una banca dati è costituita da una o più **table**, costituite a loro volta da una o più **linee** organizzate con **colonne** predeterminate.

Il primo step consiste nell'identificare le tavole voluminose presenti nel tuo database.

> [!primary]
>
> Tutte le azioni descritte in questo tutorial saranno realizzate a partire da **phpMyAdmin**.
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} è disponibile su tutti i database condivisi OVHcloud.
> Questa applicazione di gestione database facilita la realizzazione delle azioni manuali che puoi effettuare con il tuo database.
>

#### 1.1 - Connettersi al database tramite phpMyAdmin

Recupera le informazioni di accesso al database direttamente nel file di configurazione del tuo sito Web. Per effettuare questa operazione, utilizza lo step 1** della nostra guida su [modificare la password di un database](/pages/web_cloud/web_hosting/sql_change_password).

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e seleziona `Web Cloud`{.action} nella barra di navigazione in alto a sinistra. Clicca su `Hosting`{.action} e seleziona l'hosting Web associato al database condiviso OVHcloud. e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database disponibili nella parte inferiore dello schermo.

![phpMyAdmin Access](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Ti ricordiamo che **per un database saturo**, il suo `Nome utente` e il suo `Indirizzo del server` sono presenti nella tabella che elenca i tuoi database. 

Sempre nella scheda `Database`{.action}, clicca sul pulsante `...`{.action} a destra del database che è pieno e poi su `Accedi a phpMyAdmin`{.action}.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Inserisci le informazioni di accesso al database e clicca su `Connetti`{.action}.

#### 1.2 - Ricerca le tavole più voluminose

> [!alert]
>
> Da questo momento, potrete intervenire direttamente sul contenuto del vostro database. Le operazioni eseguite in phpMyAdmin possono avere conseguenze irreversibili se non vengono eseguite correttamente.
>
> Assicurati di aver effettuato le operazioni necessarie. In caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner). OVHcloud non potrà fornirti assistenza sul contenuto del database.
>

Una volta connesso, visualizzi questa pagina:

![phpMyAdmin Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Nella colonna di sinistra clicca su `"Nome del database"`{.action} e poi su `Taille`{.action} in alto a destra.

![phpMyAdmin Tables](/pages/assets/screens/other/web-tools/phpmyadmin/pma-check-size.png){.thumbnail}

Le tavole più voluminose appaiono in cima alla tabella. Identificalo e passa allo **step 2**.

### Step 2: determinare l'utilità del contenuto presente nella o nelle tabelle voluminose

Una volta identificate le tavole voluminose, accertati se l'intero contenuto è necessario per il funzionamento del tuo sito.

> [!primary]
>
> Se utilizzi un Content Managment System (CMS) come WordPress, Joomla!, PrestaShop o Drupal, verifica che le tue tabelle voluminose non siano associate a un plugin/tema installato o aggiornato di recente.
>
> In questo caso, contatta l'editor del plugin/tema per informarti sulle azioni da effettuare sul tuo CMS.
>
 
Per gli altri casi relativi ai CMS, ti consigliamo di contattare direttamente il direttore del tuo CMS prima di eseguire le azioni che seguono.

Di seguito trovi i link ai siti ufficiali dei CMS proposti per l'installazione "**In un click**" da OVHcloud:

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> Se il tuo sito è stato sviluppato "**manualmente**" da un provider specializzato, ti consigliamo di contattare quest'ultimo per ricevere assistenza.
>

### Step 3: intraprendere un'azione correttiva

Una volta stabilito se il contenuto delle tue tabelle è necessario per il funzionamento del tuo sito, puoi scegliere tra diverse opzioni:

#### Caso n°1 - L'insieme del contenuto della tavola voluminosa è necessario al buon funzionamento del tuo sito

È necessario migrare il database verso un database più grande.

> [!primary]
>
> Per aumentare le dimensioni del database, è necessario creare un nuovo database più grande e copiare il contenuto dal database precedente a quello nuovo. Infatti, non è possibile aumentare direttamente la dimensione di un database associato a un hosting Web.
>

Consulta la nostra offerta di database [Web Cloud Databasess](https://www.ovh.it/cloud/cloud-databases/) per scegliere il tuo nuovo servizio di database. 

Consigliamo questa offerta per database voluminosi.

È possibile duplicare il contenuto del database OVHcloud direttamente verso un altro database grazie a una funzionalità disponibile nello [Spazio Cliente OVHcloud](/links/manager). Per farlo, consulta la nostra guida "[Duplicare il contenuto di un database in un altro](/pages/web_cloud/web_hosting/copy_database)".

In caso di migrazione verso un database esterno alle offerte [Start SQL](/links/web/hosting-options-startsql) e [Web Cloud Databases](/links/web/databases), è possibile spostare manualmente il contenuto del vecchio database verso un nuovo database utilizzando le nostre guide:

- [Esporta il tuo database esistente](/pages/web_cloud/web_hosting/sql_database_export)
- [Iniziare a utilizzare l'offerta Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
- [Importare il tuo database precedente nella tua offerta Web Cloud Databases](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

#### Caso n. 2 - Una parte o l'insieme del contenuto della tavola voluminosa non è necessaria al funzionamento del tuo sito

Prima di effettuare questa operazione, verifica che i dati contenuti nella tabella voluminosa corrispondano a elementi che possono essere eliminati dallo spazio di gestione del tuo CMS. 

**Esempi**:

- commenti precedenti/post
- elementi presenti nel menu `Cestino` del tuo CMS
- dati relativi a un tema precedente e/o plugin.

> [!alert]
>
> Questa guida ti mostra come eliminare i dati presenti nel tuo database. In caso di dubbi, assicurati di aver consultato uno [specialista del settore](/links/partner).
>

I database condivisi OVHcloud dispongono di diversi comandi SQL per agire sul loro contenuto.

In caso di sovrattassa o di tabella voluminosa, sono disponibili **tre comandi**.

Queste richieste possono essere effettuate direttamente dall'interfaccia **phpMyAdmin**, tramite la scheda `SQL`{.action}:

![phpMyAdmin SQL request](/pages/assets/screens/other/web-tools/phpmyadmin/pma-sql-menu.png){.thumbnail}

- Ordine **DELETE**: 

Essa permette di eliminare **una o più righe** da una determinata tabella. Questo comando è utile se una parte del contenuto della tabella è necessaria per il corretto funzionamento del tuo sito Web.

**Esempio**:

```sql
DELETE FROM `table_1` HERE `id` = 1
```

> In questo esempio, il comando elimina la o le righe della **table_1** il cui valore nella colonna **id** è pari a **1**.

- Ordine **TRUNCATE**: 

In questo modo è possibile eliminare **tutte le linee** da una tabella.

**Esempio**:

```sql
TRUNCATE TABLE `table_1`
```

> In questo esempio, il comando elimina tutte le linee dalla **table_1** senza eccezione.

- L'ordine **DROP**: 

Essa permette di eliminare completamente **una tabella e l'insieme delle linee che contiene**. Questo comando non deve essere utilizzato se il tavolo deve continuare ad esistere.

**Esempio**:

```sql
DROP TABLE `table_1`
```

> In questo esempio, il comando elimina la tavola **table_1** e tutte le righe che contiene.

## Spingiti oltre <a name="go-further"></a>

[Duplicare il contenuto di un database in un altro](/pages/web_cloud/web_hosting/copy_database)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).