---
title: Hosting condiviso altre operazioni possibili con il file .htaccess
excerpt: Questa guida ti mostra le altre operazioni che possono essere effettuate con il file .htaccess
slug: hosting_condiviso_altre_operazioni_possibili_con_il_file_htaccess
section: Scrittura e autenticazione
order: 04
---


## Impedire il listing del contenuto di una directory
Per impedire agli utenti di visualizzare il contenuto di una cartella in cui non sono presenti file index (.cgi, .html, .php, ecc...), crea un file .htaccess che contiene questa riga:


```
Options -Indexes
```




## Reindirizzare i messaggi di errore
Per utilizzare messaggi di errore personalizzati o reindirizzare gli errori su una pagina Web, crea un file .htaccess che contiene righe di questo formato:


```
ErrorDocument numero_dell_errore messaggio_o_destinazione
```


Sostituisci "numero_dell_errore" con il numero corrispondente. Gli errori più frequenti sono:


- 401: Authorization required. L'utente tenta di accedere a un file o a una cartella protetta utilizzando le credenziali non corrette.
- 403: Access denied. L'accesso alla directory viene negato in quanto non sono presenti file index e la configurazione del server non consente la visualizzazione del contenuto della cartella.
- 404: Not Found. Il file richiesto dall'utente non esiste.
- 500: Internal Server Error. In genere, questo errore dipende da un CGI non eseguito correttamente o da permessi di uno script errati.


Sostituisci "messaggio_o_destinazione" con l'azione da eseguire. Per visualizzare un semplice messaggio, scrivi il testo tra virgolette. Per creare il reindirizzamento verso una pagina, inseriscine il percorso di accesso.

Esempi:


- Per mostrare il messaggio "Spiacenti, non possiedi i permessi di accesso a questo file" in caso di errore 403, inserisci questa riga nel tuo .htaccess: 


```
ErrorDocument 403 "Spiacenti, non possiedi i permessi di accesso a questo file"
```


- Per reindirizzare gli errori 404 sulla tua pagina personalizzata 404.html (per il tuo dominio: dominio.com): 


```
ErrorDocument 404 http://www.dominio.com/404.php
```



È possibile anche reindirizzare l'errore verso uno script CGI che mostrerà il messaggio, reindirizzerà l'utente verso un altro file in base all'URL richiesto inizialmente (disponibile nella variabile d'ambiente REQUEST_URI), ti invierà un'email, ecc... Per eseguire queste operazioni, aggiungi nel tuo file .htaccess questa riga:


```
Errordocument 404 /cgi-bin/errore.cgi?type=404
```


Se la pagina viene chiamata in https (SSL), inserisci:


```
Errordocument 401 /~login/error.html
```


Se non funziona, verifica che nella scheda "Avanzate" delle proprietà di Internet Explorer, non sia selezionata l'opzione "Mostra messaggi di errore HTTP brevi".


## Specificare un altro file index
Il file index predefinito di una cartella è index.html, index.htm o index.php. Per utilizzare un altro file, puoi inserire nel tuo .htaccess una riga di questo tipo:


```
DirectoryIndex nome_del_file
```


Ad esempio, per utilizzare homepage.html come pagina index, utilizza:


```
DirectoryIndex homepage.html
```




## Impostare reindirizzamenti
Per effettuare questa operazione, consulta [questa guida](https://www.ovh.it/g1339.reindirizzamento-dominio#reindirizzamento_web_con_lhtaccess)


## Riscrivere un URL
Per effettuare questa operazione, consulta [questa guida](https://www.ovh.it/g1971.hosting_condiviso_riscrivi_url_tramite_mod_rewrite_con_file_htaccess)


## 
Per scoprire di più sul file .htaccess, [clicca qui](https://www.ovh.it/g1967.hosting_condiviso_tutto_sul_file_htaccess)

