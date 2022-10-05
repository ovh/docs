---
title: 'Recuperare il backup del database di un hosting Web'
excerpt: 'Come ripristinare il backup di un database di un hosting Web OVH'
slug: web_hosting_come_esportare_un_database
section: Database
order: 03
---

**Ultimo aggiornamento: 25/02/2019**

## Obiettivo

Utilizzati dalla maggior parte dei sistemi di gestione dei contenuti (Content Management System o CMS) come WordPress e Joomla!, i database permettono di salvare gli elementi detti dinamici (ad esempio, commenti o articoli). Per diversi motivi, potresti aver bisogno di effettuare un backup del tuo database per recuperarne il contenuto.

**Questa guida ti mostra come recuperare il backup di un database del tuo hosting Web OVH.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external}
- Disporre di un database creato nell’ambito di una soluzione di [hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external}
- In base al metodo di backup scelto, avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o disporre dei dati di connessione al database

## Procedura

Prima di iniziare, è necessario indicare il metodo con cui intendi recuperare il backup del database. A seconda delle tue competenze tecniche a riguardo, puoi utilizzare diversi metodi:

- **strumento di backup di OVH**: grazie a questo tool è possibile recuperare i backup direttamente dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. È la soluzione più semplice, perché non richiede particolari competenze tecniche.

- **interfaccia Web phpMyAdmin**: questa soluzione richiede la conoscenza dell’applicazione Web phpMyAdmin e della sua interfaccia di gestione.

- **script**: per utilizzare questa soluzione è necessario creare uno script e salvarlo sull’hosting Web OVH e richiede quindi competenze specifiche.

- **comando SSH**: questa soluzione richiede l’accesso allo spazio di storage tramite il protocollo SSH e l’utilizzo di comandi per interagire con esso.  Sono quindi necessarie competenze tecniche avanzate e una soluzione di[ hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external} compatibile.

Alcune delle opzioni elencate non vengono eseguite in un’interfaccia OVH, e non possiamo quindi fornire assistenza sul loro utilizzo. Le informazioni contenute in questa guida potrebbero esserti di aiuto per effettuare l’operazione ma non si sostituiscono all’aiuto di un webmaster. 

Continua la lettura in base al metodo di backup scelto.

> [!warning]
>
> OVH mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente. 
>
> Questa guida ti aiuta a eseguire le operazioni necessarie per recuperare il backup di un database. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”. 
>

### Strumento di backup di OVH

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Da questa pagina è possibile scegliere se creare un nuovo backup o ripristinarne uno esistente.

#### 1\. Effettuare un nuovo backup del database

Nella scheda `Database`{.action}, clicca sui tre puntini in corrispondenza del database di cui vuoi effettuare il backup e seleziona `Crea un backup`{.action}.

![database dump](images/database-dump-step2.png){.thumbnail}

Nella nuova finestra, scegli la data in cui effettuare il backup e clicca su `Seguente`{.action}. Verifica la correttezza delle informazioni e `Conferma`{.action} per avviare l’operazione.

Attendi il completamento del processo: appena il backup diventerà disponibile, sarà possibile recuperarlo.

![database dump](images/database-dump-step3.png){.thumbnail}

#### 2\. Ripristinare un backup del database

Sempre nella scheda `Database`{.action}, clicca sui tre puntini in corrispondenza del database di cui vuoi recuperare il backup e seleziona `Ripristina un backup`{.action}.




![database dump](images/database-dump-step4.png){.thumbnail}

Visualizzi una tabella con tutti i backup disponibili per il database selezionato, di cui viene mostrata la data di creazione e di cancellazione dal sistema OVH.

Per effettuare il download, clicca sui tre puntini in corrispondenza del backup che vuoi ripristinare e seleziona `Scarica il backup`{.action}. Si apre una finestra da cui puoi salvare il file sul tuo computer: conferma e attendi il completamento dell’operazione.

![database dump](images/database-dump-step5.png){.thumbnail}

### Interfaccia Web phpMyAdmin

Per recuperare il link di accesso a phpMyAdmin accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting. Clicca sui tre puntini in corrispondenza del database di cui vuoi effettuare il backup e seleziona `Accedi a phpMyAdmin`{.action}.

![database dump](images/database-dump-step6.png){.thumbnail}

Nella pagina di phpMyAdmin, inserisci le informazioni relative al database, scegli dal menu a tendina se visualizzare i dati attuali del database o quelli di un backup precedente ed effettua l’accesso. Seleziona la scheda `Esporta`{.action}, in cui sono proposti due metodi di esportazione:

- rapido: questa opzione permette scegliere il formato di esportazione del backup. Il più diffuso è SQL ma, in base alle esigenze, è possibile selezionarne anche un altro tra quelli disponibili nella lista.

- personalizzato: questa opzione permette di definire nel dettaglio i parametri di esportazione del backup.

> [!warning]
>
> phpMyAdmin non è un’applicazione OVH, pertanto non forniamo assistenza relativamente al suo utilizzo. In caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o accedere al sito del fornitore del servizio.  
>

### Script

Questa operazione prevede diversi step. Per prima cosa, assicurati di avere a disposizione tutti i dati necessari per effettuare l’accesso al database di cui vuoi effettuare il backup: nome utente, password, nome del database e indirizzo del server.

> [!warning]
>
> Questa soluzione è più tecnica e richiede competenze di programmazione. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. 
>

#### 1\. Creare lo script del backup

Il primo step consiste nel creare lo script che permetterà di effettuare il backup del database. Ecco un esempio:

```php
<?
system(“mysqldump -- host=inidrizzo_del_server--user=nome_utente--password=password_utente nome_database > nome_file_backup.sql
?>
```

Sostituisci le informazioni generiche dello script con i dati del database in questione, seguendo le indicazioni riportate qui sotto. Una volta creato lo script, ti consigliamo di assegnargli un nome (ad esempio, “backup.php”).

|Informazione|Sostituire con...|
|---|---|
|indirizzo_del_server|L’indirizzo del server del database|
|nome_utente|Lo username che ha accesso al database|
|password_utente|La password associata al nome utente indicato precedentemente|
|nome_database|Il nome del database |
|nome_file_backup|Il nome che, una volta realizzato, verrà assegnato al file di backup|

> [!primary]
>
> Aggiungendo una porta allo script è possibile effettuare un backup a partire da una data precedente: ad esempio, la porta <b>3307 </b>permette di eseguire una copia della data di ieri, la porta <b>3317 </b>degli ultimi sette giorni e la <b>3306 </b>dello stato attuale dei dati presenti sul database.
>

#### 2\. Caricare lo script sullo spazio di storage 

Una volta creato lo script è necessario caricarlo sullo spazio di storage dell’hosting Web. Per effettuare questa operazione, è necessario collegarsi all’hosting (se hai bisogno di aiuto, consulta lo step 2 di [questa guida](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/#step-2-carica-i-file-del-sito-nello-spazio-di-storage){.external}).

Per realizzare correttamente gli step successivi, carica lo script nella cartella “www”. **Ti consigliamo di prestare la massima attenzione al nome assegnato al file dello script di backup**: quando effettui l’upload nello spazio di storage assicurati di non sovrascriverlo a un file già esistente con lo stesso nome. Nel caso, modifica il nome dello script appena creato e prova a caricarlo di nuovo.

#### 3\. Eseguire lo script

Una volta che lo script è stato caricato nello spazio di storage non ti resta che eseguire il codice in esso contenuto richiamando lo script. 

Per effettuare questa operazione, accedi dal browser all’indirizzo URL completo dello script (ad esempio, se il nome del tuo script è “backup.php”: mypersonaldomain.ovh/backup.php). Se le informazioni nello script sono corrette, il backup si avvia e non resta che attenderne il completamento. In caso contrario verifica i dati inseriti e ripeti l’operazione.

#### 4\. Recuperare il backup dallo spazio di storage

Una volta effettuato il backup, è possibile ripristinarlo nella cartella in cui è stato caricato lo script di backup. Il nome del backup del database deve corrispondere a quello indicato precedentemente nello script. A questo punto, non ti resta che ripristinare il backup sulla macchina.

Una volta terminata questa procedura ti consigliamo di eliminare il file di backup e lo script dalla directory “www”.

> [!primary]
>
> Utilizzare uno script di backup e task pianificati (detti CRON) ti permette di automatizzare i backup con la frequenza che preferisci. Per maggiori informazioni sui task pianificati, consulta [questa guida](https://docs.ovh.com/it/hosting/hosting_web_task_automatizzaticron/){.external}.
>

### Comando SSH

Per effettuare questa operazione è necessario interagire con lo spazio di storage eseguendo alcuni comandi da un terminale.

> [!warning]
>
> Questa soluzione richiede competenze tecniche avanzate. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. 
>

Una volta effettuato l’accesso in SSH allo spazio di storage, per effettuare il backup del database è necessario eseguire un comando. Qui sotto ne proponiamo uno di esempio. Ti ricordiamo che, nel momento in cui il comando viene eseguito nel terminale, il backup verrà realizzato nella directory corrente.

```sh
mysqldump --host=indirizzo_del_server --user=nome_utente --password=password_utente nome_database > nome_file_backup.sql
```

Sostituisci le informazioni generiche del comando con i dati del database in questione. A questo punto, non ti resta che ripristinare il backup sulla macchina.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.