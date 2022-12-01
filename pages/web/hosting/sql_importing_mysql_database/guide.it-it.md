---
title: 'Importare un backup nel database di un hosting Web'
slug: web_hosting_come_importare_un_database_mysql
excerpt: 'Come importare un backup in un database di un hosting Web OVH'
section: Database
order: 04
---

**Ultimo aggiornamento: 28/03/2019**

## Obiettivo

Utilizzati dalla maggior parte dei sistemi di gestione dei contenuti (Content Management System o CMS) come WordPress e Joomla!, i database permettono di salvare gli elementi detti dinamici (ad esempio, commenti o articoli). Per diversi motivi, potresti aver bisogno di effettuare un backup del tuo database per recuperarne il contenuto.

**Questa guida ti mostra come importare un backup nel database del tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Disporre di un database creato nell’ambito di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Avere accesso al backup da importare nel database o essere in grado di recuperarlo
- In base al metodo di importazione scelto, avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o disporre dei dati di connessione al database

## Procedura

Prima di iniziare, è necessario indicare il metodo con cui intendi importare il backup del database. A seconda delle tue competenze tecniche a riguardo, puoi utilizzare diversi metodi:

- **ripristinare lo stato di una data precedente**: questa soluzione permette di ripristinare il contenuto dei tuoi database grazie ai backup presenti nel tool di backup OVHcloud. Non richiede particolari competenze tecniche ed è disponibile direttamente nello [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

- **file di backup**: questa soluzione permette di importare i dati del tuo file di backup in uno dei tuoi database ed è disponibile direttamente nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

- **interfaccia Web phpMyAdmin**: questa soluzione richiede la conoscenza dell’applicazione Web phpMyAdmin e della sua interfaccia di gestione. Inoltre, la dimensione del file di backup ha dei limiti.

- **script**: per utilizzare questa soluzione è necessario creare uno script e salvarlo sull’hosting Web OVHcloud e richiede quindi competenze specifiche.

- **comando SSH**: questa soluzione richiede l’accesso allo spazio di storage tramite il protocollo SSH e l’utilizzo di comandi per interagire con esso.  Sono quindi necessarie competenze tecniche avanzate e una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} compatibile.

Alcune delle opzioni elencate non vengono eseguite in un’interfaccia OVHcloud e non possiamo quindi fornire assistenza sul loro utilizzo. Le informazioni contenute in questa guida potrebbero esserti di aiuto per effettuare l’operazione ma non si sostituiscono all’aiuto di un webmaster.

Continua la lettura in base al metodo di importazione scelto. 

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie per importare il backup di un database. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”. 
>

### Ripristino dallo Spazio Cliente OVH

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Clicca sui tre puntini in corrispondenza del database da ripristinare e seleziona `Ripristina un backup`{.action}. Ti ricordiamo che scegliendo questa opzione il contenuto del database verrà sostituito con quello del backup.

![Importazione database](images/database-import-step5.png){.thumbnail}

Nella tabella sono elencati tutti i backup disponibili per il database selezionato, di cui viene mostrata la data di creazione e di cancellazione dal sistema OVHcloud.

Clicca sui tre puntini in corrispondenza del database da ripristinare e seleziona `Ripristina un backup`{.action}. Verifica la correttezza delle informazioni e `Conferma`{.action} per avviare l’operazione. Attendi il completamento del processo.

![Importazione database](images/database-import-step6.png){.thumbnail}

### Importazione dallo Spazio Cliente OVH

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Clicca sui tre puntini in corrispondenza del database da importare e seleziona `Importa un file`{.action}.

![Importazione database](images/database-import-step1.png){.thumbnail}

Nella nuova finestra, seleziona `Importa un nuovo file`{.action} e poi clicca su `Seguente`{.action}.

> [!primary]
>
> L’opzione `Utilizza un file esistente`{.action} permette di importare nuovamente i dati di un file già inviato nel tool di importazione. 
>

![Importazione database](images/database-import-step2.png){.thumbnail}

Assegna un nome al tuo file di backup (per trovarlo più facilmente in un secondo momento) e clicca su `Browse...` per selezionare il file nel tuo computer. Clicca su `Seguente`{.action}.

Attendi il completamento dell’operazione e poi clicca su `Seguente`{.action}.

![Importazione database](images/database-import-step3.png){.thumbnail}

Scegli se utilizzare o meno le opzioni aggiuntive proposte:

- **Elimina tutti i file dal tuo database attuale**: tutti i contenuti presenti nel database verranno cancellati e sostituiti con quelli del backup. Ti consigliamo di selezionare questa opzione esclusivamente se intendi sostituire l’intero contenuto presente nel database con quello del file di backup. 

- **Invia un'email alla fine dell'importazione**: al termine dell'operazione riceverai una notifica via email.

Una volta effettuata la tua scelta, clicca su `Conferma`{.action} e attendi la fine del processo. 

![Importazione database](images/database-import-step4.png){.thumbnail}

### Interfaccia Web phpMyAdmin

Per recuperare il link di accesso a phpMyAdmin accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Clicca sui tre puntini in corrispondenza del database di cui vuoi importare il backup e seleziona `Accedi a phpMyAdmin`{.action}.

![Importazione database](images/database-import-step7.png){.thumbnail}

Nella pagina di phpMyAdmin, inserisci le informazioni relative al database, scegli dal menu a tendina se visualizzare i dati attuali del database ed effettua l’accesso.  Seleziona la scheda `Importa`{.action} e inserisci i dati richiesti. Ti ricordiamo che il file caricato non può superare la dimensione massima consentita.

> [!warning]
>
> phpMyAdmin non è un’applicazione OVHcloud, pertanto non forniamo assistenza relativamente al suo utilizzo. In caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o accedere al sito del fornitore del servizio.  
>

### Script

Questa operazione prevede diversi step. Per prima cosa, assicurati di disporre del file di backup da importare e di tutti i dati necessari per effettuare l’accesso al database di destinazione: nome utente, password, nome del database e indirizzo del server.

> [!warning]
>
> Questa soluzione è più tecnica e richiede competenze di programmazione. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. 
>

#### 1. Creare lo script di importazione

Il primo step consiste nel creare lo script che permetterà di effettuare l’importazione verso il database. Ecco un esempio:

```php
<?php
system("cat nome_file_backup.sql | mysql --host=inidrizzo_del_server --user=nome_utente --password=password_utente nom_database");
?>
```

Sostituisci le informazioni generiche dello script con i dati del database in questione, seguendo le indicazioni riportate qui sotto. Una volta creato lo script, ti consigliamo di assegnargli un nome (ad esempio, “import.php”).

|Informazione|Sostituire con...|
|---|---|
|nome_file_backup|Il nome del file di backup che intendi importare |
|indirizzo_del_server|L’indirizzo del server del database verso cui saranno importati i dati|
|nome_utente|Lo username che ha accesso al database|
|password_utente|La password associata al nome utente indicato precedentemente|
|nome_database|Il nome del database|

#### 2. Caricare lo script e il backup sullo spazio di storage

Una volta creato lo script è necessario caricarlo insieme al file di backup da importare sullo spazio di storage dell’hosting Web. Per effettuare questa operazione, è necessario collegarsi all’hosting (se hai bisogno di aiuto, consulta lo step 2 di [questa guida](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/#step-2-carica-i-file-del-sito-nello-spazio-di-storage){.external}).

Per realizzare correttamente gli step successivi, carica lo script e il file di backup nella cartella “www”. **Ti consigliamo di prestare la massima attenzione al nome assegnato al file dello script di importazione**: quando effettui l’upload nello spazio di storage assicurati di non sovrascriverlo a un file già esistente con lo stesso nome. Nel caso, modifica il nome dello script appena creato e prova a caricarlo di nuovo.

#### 3. Eseguire lo script

Una volta che lo script di importazione e il file di backup sono stati caricati nello spazio di storage non ti resta che eseguire il codice in esso contenuto richiamando lo script.

Per effettuare questa operazione, accedi dal browser all’indirizzo URL completo dello script (ad esempio, se il nome del tuo script è “import.php”: mypersonaldomain.ovh/import.php). Se le informazioni nello script sono corrette, l’importazione si avvia e non resta che attenderne il completamento. In caso contrario verifica i dati inseriti e ripeti l’operazione.

Una volta terminata questa procedura ti consigliamo di eliminare il file di backup e lo script dalla directory “www”.

### Comando SSH

Per effettuare questa operazione è necessario interagire con lo spazio di storage eseguendo alcuni comandi da un terminale.

> [!warning]
>
> Questa soluzione richiede competenze tecniche avanzate. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. 
>

Una volta effettuato l’accesso in SSH allo spazio di storage, per effettuare l’importazione del database è necessario eseguire un comando. Qui sotto ne proponiamo uno di esempio. Ti ricordiamo che è necessario caricare preventivamente il backup da importare sullo spazio di storage ed eseguire il comando dal terminale posizionandoti sulla directory in cui si trova il backup.  

```sh
cat nome_file_backup.sql | mysql --host=inidrizzo_del_server --user=nome_utente --password=password_utente nome_database
```

Sostituisci le informazioni generiche del comando con i dati del database in questione. A operazione completata, ti consigliamo di eliminare il file di backup dalla directory in cui è stato caricato. 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.