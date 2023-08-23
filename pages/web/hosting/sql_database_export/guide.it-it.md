---
title: "Recuperare il backup del database di un hosting Web"
excerpt: "Questa guida ti mostra come ripristinare il backup di un database di un hosting Web OVHcloud"
updated: 2023-08-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I database sono utilizzati dalla maggior parte dei siti Web e **C**ontent **M**anagement **S**ystem (**CMS**) come *WordPress*, *Joomla!*, *PrestaShop* o *Drupal*. Permettono generalmente di archiviare elementi dinamici come, ad esempio, commenti, utenti / password, lo stato del magazzino se hai un sito e-commerce o articoli. Per diversi motivi potrebbe essere necessario effettuare un backup del database per recuperarne il contenuto.

**Questa guida ti mostra come ripristinare il backup di un database di un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Disporre di un database creato nell’ambito di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- In base al metodo di backup scelto, avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o disporre dei dati di connessione al database

## Procedura

Prima di iniziare, definisci il metodo che intendi utilizzare per recuperare il backup del database. Le opzioni disponibili sono diverse:

- **Utilizza lo strumento di backup di OVHcloud**: permette di recuperare i backup dei tuoi database dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Questo metodo non richiede particolari competenze tecniche.

- **Effettuare il backup dall’interfaccia web phpMyAdmin** : per effettuare l’operazione è necessario connettersi all’interfaccia *phpMyAdmin*. per utilizzare al meglio l’interfaccia *phpMyAdmin*.

- **Utilizza uno script per il backup** : per poter effettuare il backup è necessario creare uno script e salvarlo sull’hosting Web OVHcloud. Per questa creazione sono necessarie conoscenze specifiche.

- **Effettua il backup da un comando SSH**: questo metodo richiede l’accesso allo spazio di storage FTP tramite il protocollo SSH e l’utilizzo di comandi per interagire con esso. Questo tipo di accesso richiede conoscenze avanzate e una soluzione [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} specifica.

> [!success]
>
> Se effettui un backup del tuo database perché è pieno/pieno, consulta il nostro tutorial "[Cosa fare quando il tuo database è pieno?](/pages/web/hosting/sql_overquota_database)".
>

Alcuni dei metodi indicati non sono relativi a un’interfaccia OVHcloud. e, in base alle tue conoscenze, sarà necessario effettuare l’operazione. Le informazioni contenute in questa guida potrebbero esserti di aiuto per effettuare l’operazione ma non sostituiscono l’assistenza fornita da un webmaster.

Continua la lettura in base al metodo di backup scelto.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/). OVHcloud non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) della guida.
>

### Recuperare un backup tramite lo strumento di OVHcloud

Per accedere allo strumento di backup di OVHcloud, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona il nome dell’hosting interessato. e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Da questo momento è possibile scegliere se effettuare un nuovo backup o ripristinarne uno esistente.

#### Step 1: effettua un nuovo backup del database

Sempre nella scheda `Database`{.action}, clicca sul pulsante `...`{.action} a destra del database di cui vuoi effettuare il backup e seleziona `Crea un backup`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Nella nuova finestra, seleziona la data in cui effettuare il backup e clicca sul pulsante `Avanti`{.action}. Verifica la correttezza delle informazioni e clicca su `Conferma`{.action} per avviare l’operazione.

Attendi il completamento del processo. appena il backup diventerà disponibile, sarà possibile recuperarlo.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Step 2: recupera un backup del database

Sempre nella scheda `Database`{.action}, clicca sul pulsante `...`{.action} a destra del database di cui vuoi effettuare il backup e seleziona `Ripristina un backup`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

Visualizzi una tabella con tutti i backup disponibili per il database selezionato. di cui viene mostrata la data di creazione e di rimozione dei backup dallo strumento OVHcloud.

Per scaricare un backup, clicca sul pulsante `...`{.action} a destra del backup che vuoi ripristinare e poi su `Scarica il backup`{.action}. Viene visualizzata una finestra in cui è possibile salvare il file nel computer. Conferma e attendi il completamento dell’operazione.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Recupera un backup dall'interfaccia web phpMyAdmin

Per effettuare l’operazione, accedi a *phpMyAdmin*. Per conoscere il link di accesso a quest’ultimo, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona il nome dell’hosting interessato. e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Clicca sul pulsante `...`{.action} in corrispondenza del database interessato e seleziona `Accedi a phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Accedi all’interfaccia di connessione a *phpMyAdmin*, inserisci le informazioni del database ed effettua l’accesso. Accedi alla scheda `Esporta`{.action}, in cui sono proposti due metodi di esportazione:

- **metodo rapido** : è possibile definire il formato di esportazione del backup. Il più diffuso è il formato SQL ma, in base alle necessità, ne sono disponibili anche altri;

- **metodo personalizzato**: è possibile definire in dettaglio le impostazioni di esportazione del backup.

> [!warning]
>
> L’interfaccia *phpMyAdmin* non è stata creata da OVHcloud: sarà necessario effettuare l’operazione in base alle proprie conoscenze. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o il fornitore dell’interfaccia. OVH non sarà infatti in grado di fornirti assistenza.
>

### Recuperare un backup utilizzando uno script

Questa operazione prevede diversi step. Per prima cosa, assicurati di avere a disposizione tutti i dati necessari per effettuare l’accesso al database di cui vuoi effettuare il backup: nome utente, password, nome del database e indirizzo del server.

> [!warning]
>
> Questa soluzione richiede competenze di programmazione. Di seguito vengono fornite alcune informazioni su come procedere. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/). OVH non sarà infatti in grado di fornirti assistenza.
>

#### Step 1: crea lo script di backup

Il primo step consiste nel creare lo script che permetterà di effettuare il backup del database. Ecco un esempio. Tuttavia, in caso di difficoltà, questo esempio non potrà sostituire l’assistenza fornita da un webmaster.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

Sostituisci le informazioni generiche dello script con le informazioni del database in questione, seguendo le indicazioni riportate di seguito. Una volta terminato lo script, ti consigliamo di denominarlo "backup.php" ad esempio.

|Informazioni|Da sostituire con|
|---|---| 
|server_address|L'indirizzo del server del database.|
|user_name|Il nome utente con accesso al database.|
|user_password|La password del nome utente indicato precedentemente.|
|name_of_database|Il nome del database.|
|backup_file_name|Il nome che verrà assegnato al file di backup una volta eseguito.|

#### Step 2: scarica lo script sullo spazio di storage FTP

Una volta creato lo script è necessario caricarlo sullo spazio di storage FTP del tuo hosting Web. Per farlo, consulta le informazioni descritte allo Step 2 della guida intitolata "[Accedere allo spazio di storage](/pages/web/hosting/hosting_how_to_get_my_website_online)".

Per completare gli step successivi, scarica lo script nella cartella che contiene il sito Web che utilizza il database. **Durante il download dello script, prestare particolare attenzione al nome del file dello script di backup.** Non sovrascrivere un file esistente con lo stesso nome nello spazio di storage FTP. Se viene visualizzato un messaggio di avvertenza di questo tipo, modificare il nome dello script appena creato e riprovare a caricarlo.

#### Step 3: chiama lo script

Una volta che lo script è stato caricato sullo spazio di storage FTP, inizia il codice in esso chiamando lo script.

Per effettuare questa operazione, accedi dal browser all’indirizzo URL completo dello script (ad esempio: mypersonaldomain.ovh/backup.php se il nome del tuo script è "backup.php"). Se le informazioni inserite nello script sono corrette, il backup si avvia. e attendi il tempo di esecuzione. In caso contrario verifica le informazioni inserite e ripeti l’operazione.

#### Step 4: recupera il backup dallo spazio di storage FTP

Una volta effettuato il backup, recuperalo nella cartella in cui è stato caricato lo script di backup. Il nome del backup del database deve corrispondere a quello definito precedentemente nello script. A questo punto, non ti resta che ripristinare il backup sul tuo dispositivo.

Prima di terminare, ti consigliamo di eliminare il file di backup e lo script dalla directory in cui si trovano.

> [!primary]
>
> L'utilizzo di uno script di backup con il nostro sistema di task pianificati (task "CRON") può permettere di automatizzare i backup alla frequenza che preferisci. Per maggiori informazioni sui task pianificati, consulta la nostra guida: "[Implementa un task pianificato (CRON) sul tuo hosting Web](/pages/web/hosting/cron_tasks)".
>

### Recupera un backup tramite un comando SSH

Per effettuare questa operazione è necessario interagire con lo spazio di storage FTP eseguendo alcuni comandi da un terminale.

> [!warning]
>
> Per utilizzare questo tipo di accesso sono necessarie competenze tecniche avanzate. Qui di seguito ti forniamo alcune informazioni su come procedere. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/). OVH non sarà infatti in grado di fornirti assistenza.
>

Una volta effettuato l’accesso in SSH allo spazio di storage FTP, esegui un comando per effettuare il backup del database. Qui sotto ne proponiamo uno di esempio. Ti ricordiamo che, nel momento in cui il comando viene eseguito nel terminale, il backup verrà realizzato nella directory corrente.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Sostituisci le informazioni generiche del comando con le informazioni del database corrispondente. A questo punto, non ti resta che ripristinare il backup sulla macchina.


|Informazioni|Da sostituire con|
|---|---| 
|server_address|L'indirizzo del server del database.|
|user_name|Il nome utente con accesso al database.|
|user_password|La password del nome utente indicato precedentemente.|
|name_of_database|Il nome del database.|
|backup_file_name|Il nome che verrà assegnato al file di backup una volta eseguito.|

## Per saperne di più <a name="go-further"></a>

[Tutorial - Cosa fare quando il database è pieno?](/pages/web/hosting/sql_overquota_database)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.