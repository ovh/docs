---
title: "Tutorial - Cosa fare quando il tuo database è saturo?"
slug: database-overquota
excerpt: "Come agire in caso di saturazione del database"
section: Database
order: 06
---

**Ultimo aggiornamento: 23/01/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Un database permette, ad esempio, di salvare le informazioni relative al tuo sito Web e al suo funzionamento. Queste informazioni sono strutturate in modo che il tuo sito Web possa accedervi facilmente, consentendo una consultazione ottimale e personalizzata per gli utenti/utenti del tuo sito Web. 

Durante l'utilizzo, un database può acquisire, modificare o eliminare informazioni (dati di connessione, utenti, visualizzazioni, dati necessari al corretto funzionamento del tuo sito Web, ecc...). 

In alcuni casi la banca dati registra una tale quantità di informazioni che comporta una saturazione dello spazio di storage ad essa assegnato. Quando il database è saturo, si parla di **overquota**.

Questa guida ti mostra le operazioni da effettuare quando il tuo database condiviso OVHcloud è prossimo alla saturazione o è già in **overquota**.

**Questa guida ti mostra come agire in caso di saturazione del database.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di una [offerta di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) con un database condiviso OVHcloud associato
  
## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/). OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

Quando il database condiviso OVHcloud raggiunge la saturazione (**overquota**), i nostri robot ti avvertono via email all'indirizzo del [contatto "amministratore"](https://docs.ovh.com/it/customer/gestisci_i_tuoi_contatti/) del database. 

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

Recupera la password di accesso al tuo database direttamente nel file di configurazione del tuo sito Web. Esegui questa operazione utilizzando lo **step 1** della nostra guida su [modifica della password di un database](https://docs.ovh.com/it/hosting/modificare-password-database/).

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona `Web Cloud`{.action} nella barra di navigazione in alto nello schermo. Clicca su `Hosting`{.action} e seleziona l'hosting Web associato al tuo database condiviso OVHcloud. e clicca sulla scheda `Database`{.action}.

![phpMyAdmin Access](images/pma_access.png){.thumbnail}

Sempre nella scheda `Database`{.action}, clicca sul pulsante `...`{.action} a destra del database, saturato e poi su `Accedi a phpMyAdmin`{.action}.

![phpMyAdmin Go Login](images/pma_interface.png){.thumbnail}

Inserisci la password di accesso al tuo database in aggiunta alle informazioni pre-compilate e clicca su `Esegui`{.action}.

#### 1.2 - Ricerca le tavole più voluminose

> [!alert]
>
> Da questo momento, potrete intervenire direttamente sul contenuto del vostro database. Le operazioni eseguite in phpMyAdmin possono avere conseguenze irreversibili se non vengono eseguite correttamente.
>
> Assicurati di aver effettuato le operazioni necessarie. In caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/). OVHcloud non potrà fornirti assistenza sul contenuto del database.
>

Una volta connesso, visualizzi questa pagina:

![phpMyAdmin Login](images/pma_login.png){.thumbnail}

Nella colonna di sinistra clicca su `"Nome del database"`{.action} e poi su `Taille`{.action} in alto a destra.

![phpMyAdmin Tables](images/pma_show_table.png){.thumbnail}

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

Per spostare il database su un database più voluminoso,

Consulta la nostra offerta di database [Cloud Databases](https://www.ovh.it/cloud/cloud-databases/) per scegliere il tuo nuovo servizio di database. 

Consigliamo questa offerta per database voluminosi.

Segui le nostre guide per spostare il contenuto del tuo database precedente verso la nuova:

- [Esporta il tuo database esistente](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/)
- [Iniziare a utilizzare l'offerta Cloud Databases](https://docs.ovh.com/it/clouddb/iniziare-a-utilizzare-clouddb/)
- [Importare il tuo database precedente nella tua offerta Cloud Database](https://docs.ovh.com/it/clouddb/ripristinare-importare-database/)

#### Caso n. 2 - Una parte o l'insieme del contenuto della tavola voluminosa non è necessaria al funzionamento del tuo sito

Prima di effettuare questa operazione, verifica che i dati contenuti nella tabella voluminosa corrispondano a elementi che possono essere eliminati dallo spazio di gestione del tuo CMS. 

**Esempi**:

- commenti precedenti/post
- elementi presenti nel menu `Cestino` del tuo CMS
- dati relativi a un tema precedente e/o plugin.

> [!alert]
>
> Questa guida ti mostra come eliminare i dati presenti nel tuo database. In caso di dubbi, assicurati di aver consultato uno [specialista del settore](https://partner.ovhcloud.com/it/).
>

I database condivisi OVHcloud dispongono di diversi comandi SQL per agire sul loro contenuto.

In caso di sovrattassa o di tabella voluminosa, sono disponibili **tre comandi**.

Queste richieste possono essere effettuate direttamente dall'interfaccia **phpMyAdmin**, tramite la scheda `SQL`{.action}:

![phpMyAdmin SQL request](images/pma_sql_request.png){.thumbnail}

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

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.