---
title: 'Web hosting: come esportare un database'
excerpt: Scopri in questa guida come esportare i tuoi database dai nostri server.
id: '1394'
slug: web_hosting_come_esportare_un_database
legacy_guide_number: g1394
---


## Requisiti
Devi avere:


- accesso al tuo Spazio Cliente OVH.

- Username e password del database SQL con cui ti connetti, insieme all'b]host SQL.

È disponibile una guida su come recuperare le credenziali SQL:[]({legacy}1374)


![](images/img_1833.jpg){.thumbnail}


## Dal tuo Spazio Cliente OVH
Puoi recuperare la copia del tuo database direttamente dal tuo Spazio Cliente OVH. 

Per farlo, accedi allo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login/) e seleziona il tuo dominio nella sezione Hosting.

## Step 1
In "Web hosting" clicca su "Hosting" e seleziona poi "Gestione SQL".

In base alla grandezza del tuo database, la creazione del backup può richiedere più o meno tempo.

![](images/img_2698.jpg){.thumbnail}

## Step 2
Seleziona "Salvataggio".

Nella tabella compare l'elenco dei tuoi database (come nella figura accanto).

![](images/img_2699.jpg){.thumbnail}

## Step 3
Seleziona il database che vuoi salvare e la data di backup.

Sono disponibili 3 opzioni di data:


- Copia attuale: copia del database in quel momento.

- Ieri: copia del database della notte precedente. Il backup viene effettuato intorno alle 3 del mattino.

- Ultima settimana: copia del database degli ultimi sette giorni. Il backup viene effettuato intorno alle 3 del mattino.


Clicca su "Validare" per avviare il backup.

Devi aspettare che venga creato il dump*, riceverai una mail con un link da cui scaricare il file di backup.

Ecco un esempio dell'oggetto dell'email che riceverai:


```
[OVH-SQL] testovh.ovh - Dump del tuo database: testovhmod1
```


In questa email troverai il link per accedere al backup, disponibile su un server remoto per 30 giorni.

Il file che scaricherai sarà compresso, ti consigliamo di decomprimerlo prima di importarlo.

![](images/img_2700.jpg){.thumbnail}


## Da PhpMyAdmin
Puoi effettuare l'esportazione del database da PhpMyAdmin.

Innanzitutto connettiti all'interfaccia di [PhpMyAdmin](https://phpmyadmin.ovh.net/).

## Esportazione rapida
Una volta connesso, seleziona il tuo database.

In "Esporta", scegli il metodo di esportazione rapido e il formato di esportazione del tuo database.

Per un'esportazione più completa, seleziona il metodo di esportazione personalizzato.

![](images/img_1963.jpg){.thumbnail}

## Esportazione personalizzata
Una volta connesso, seleziona il tuo database.

In "Esporta", seleziona "Personalizzato - mostra tutte le possibili opzioni".

Vedrai diverse opzioni.

Tabella(e): 

Dalla tabella puoi selezionare tutte le voci o solo quelle che vuoi esportare.

Questo sistema è utile se hai un database molto grande che in questo modo puoi esportare (e poi importare) in più tranche.

Output: 

Puoi definire qui se vuoi creae un backup SQL in un file esterno oppure visualizzare direttamente il risultato della ricerca che dovrai poi copiare.

Formato: 

Definisci il formato di esportazione del tuo database. Ti consigliamo di lasciare SQL.

Opzioni specifiche al formato:

Puoi definire quello che vuoi esportare della tabella: le strutture, i dati o entrambi. Ti consigliamo di lasciare "struttura e dati".

Opzioni di esportazione:

Selezione l'opzione di esportazione nessuno dei precedenti per evitare l'errore associato a "Max_Allowed_Packet".

In questa guida trovi solo le opzioni principali.

Per avviare l'esportazione, clicca su "Esegui".

![](images/img_1964.jpg){.thumbnail}

## Scarica il file .sql
Effetturare il download del dump* dal link e salva il file.

![](images/img_1848.jpg){.thumbnail}

## Backup precedente

- Da PhpMyAdmin puoi recuperare il backup della notte e della settimana precedente. Seleziona l'opzione desiderata dal menu nella home page.




## Utilizzando uno script
Puoi creare questi script in un file txt dando loro l'estensione corrispondente alla lingua utilizzata.

È una soluzione interessante perché ti permette di esportare i dump* importanti ed è disponibile per tutti gli hosting condivisi.

Negli script, sostituisci:


- nome_del_database.sql con il nome del tuo file.

- server_sql con il nome del server su cui è creato il database.

- nome_del_database con il nome del tuo database.

- password con la password associata al tuo database.

Il tuo file di backup dovrà essere inserito sull'hosting in FTP.

In php (backupbase.php):
Codice da inserire e completare: 


```
<?
echo "Backup del tuo database in corso.......";
system("mysqldump --host=server_sql --user=nome_del_database --password=password nome_del_database > nome_del_database.sql");
echo "Backup concluso. Puoi recuperare il tuo database con FTP";
?>
```



In PERL (backupbd.cgi):
Codice da inserire e completare: 


```
#!/usr/bin/perl
print "Backup del tuo database in corso... ";
system("mysqldump --host=server_sql --user=nome_del_database --password=password nome_del_database > nome_del_database.sql");
print "Backup concluso. Puoi recuperare il tuo database con FTP";
```


- Carica con FTP lo script che hai creato nella directory www del tuo hosting e richiama lo script con il browser con questo URL: http://tuo_dominio.com/backupbase.php


Sostituisci tuo_dominio.com con il tuo dominio e backupdatabase.php con il nome del tuo file.

In questo modo crei un file nome_del_database.sql nella directory in cui si trova lo script.

In questo file, trovi tutte le istruzioni SQL per ricreare il database com'era al momento del backup, con tutti i tuoi dati.

- Nota 1: Se il tuo database è troppo voluminoso, puoi fare il dump* tabella per tabella aggiungendo alla fine l'opzione ""--tables nome_della_tabella" e ottenere questo comando:

mysqldump --host=serveur_sql --user=nome_del_database --password=password nome_del_database --tables nome_della_tabella > nome_del_database.sql


- Nota 2: Puoi anche comprimere questo file per scaricarlo più facilmente sul tuo computer (da FTP o web).

Per comprimere il file, esegui il comando gzip che creerà il file con l'estensione .sql.gz:
system("gzip nome_del_database.sql");


## Con SSH

## Requisiti

- Credenziali FTP di accesso al tuo hosting Web.
È disponibile una guida per recuperare le credenziali FTP:[]({legacy}1374)

- Avere un'offerta che permetta l'accesso con SSH ([vedi le caratteristiche delle nostre offerte](https://www.ovh.it/hosting-web/))


Trovi qui sotto una guida per la connessione in SSH:


- [Connessione SSH su Hosting Condiviso](http://guida.ovh.it/SshSuHostingCondiviso)



## Esporta il database in SSH.
Conettiti in SSH al tuo hosting condiviso.

Entra alla directory in cui hai il backup ed esegui questo comando:

Codice da inserire e completare: 


```
mysqldump --host=server_sql --user=nome_del_database --password=password nome_del_database > nome_del_database.sql
```


Codice completato per esempio: 


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## Dal servizio SQL Privato
È disponibile una guida sull'importazione di un database:


- []({legacy}2023)




## Backup
Se vuoi recuperare il backup a una data precedente di uno dei tuoi database utilizzando uno script, devi specificare il numero di porta:

Copia attuale = 3306
Ieri = 3307
Settimana scorsa = 3317

Esempio di codice che puoi utilizzare:

PHP:

```
system("mysqldump --host=server_sql --user=nome_del_database --password=password --port=3317 nome_del_database > nome_del_database.sql ");
```



- Questo sistema di backup è disponibile per i database con Mysql5 min.




## Errore "Max_Allowed_Packet" durante l'importazione del dump*
Durante un dump* può essere interessante esportare il tuo database SQL con PhpMyAdmin in modo che il contenuto di una tabella di grandi dimensioni non venga aggiunto con un solo "INSERT INTO" evitando così errori relativi alla variabile server "Max_Allowed_Packet".

Ad esempio, se la tabella A ha 500 righe, anziché avere un solo "INSERT INTO" per tutte le 500 righe, puoi effettuare 500 "INSERT INTO". 

Con PhpMyAdmin:

Durante l'esportazione in PhpMyAdmin, seleziona l'opzione di creazione dei dati  "nessuno dei precedenti" per evitare l'errore associato a "Max_Allowed_Packet".

In SSH:

Devi utilizzare l'opzione --skip-extended-insert.

L'opzione --extended-insert, inclusa nell'opzione --opt (attiva di default), genera un unico INSERT INTO per l'intera tabella e deve essere disattivata con:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Glossario
*dump: file di backup del database del tuo sito. 

