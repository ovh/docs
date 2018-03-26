---
title: 'Hosting condiviso: il protocollo SSH'
excerpt: 'Hosting condiviso: il protocollo SSH'
id: '1962'
slug: hosting_condiviso_il_protocollo_ssh
legacy_guide_number: g1962
---


## Che cos'è SSH e come utilizzarlo?
Utilizzare SSH sul tuo hosting è possibile se hai attivato un'offerta Pro (per le [vecchie offerte](https://www.ovh.it/hosting-web/vecchie_offerte_hosting.xml), a partire dagli hosting della gamma Plan).

ATTENZIONE: con le vecchie offerte, l'accesso è possibile solo utilizzando l'account FTP principale, quindi gli utenti FTP aggiuntivi non possono accedere in SSH.

SSH ti permette di accedere al tuo hosting e modificarne i file (come in FTP).
Per maggiori informazioni su questo protocollo, [clicca qui](https://it.wikipedia.org/wiki/Secure_shell).


## Requisiti
L'opzione SSH è disponibile su:

- hosting a partire dall'[offerta Pro](https://www.ovh.it/hosting-web/hosting-web-pro.xml)

- un client SSH

- la porta 22 aperta sul tuo firewall e sul tuo router




## Attiva/disattiva l'SSH su un utente
Per gestire i tuoi login SSH, accedi al tuo Spazio Cliente OVH. Seleziona il nome del tuo hosting nella colonna di sinistra e clicca su FTP - SSH.

Creando nuovi utenti FTP, viene attivata automaticamente anche la connessione SSH.

![](images/img_3945.jpg){.thumbnail}
Per disattivarla, clicca sull'icona a forma di ingranaggio in corrispondenza del login e poi su Modifica.

Questa operazione diventa effettiva in pochi minuti.

![](images/img_3946.jpg){.thumbnail}


## Prompt dei comandi
Linux:

- Con KDE: apri il menu principale (di default in basso a sinistra del tuo desktop), scrivi "konsole" nella barra di ricerca e clicca sul primo risultato.

Mac:
- L'applicazione "Terminale" è preinstallata. Per avviarla, clicca sull'icona Finder > Applicazioni > Utility

Windows:


- Su Windows non esistono client SSH preinstallati, è necessario scaricarne uno.

Il più conosciuto è Putty, disponibile [qui](http://www.putty.org/).


## Accedi al tuo hosting in SSH
Con Linux e Mac:

- apri il tuo prompt dei comandi e inserisci:
ssh TuoLoginFtp@TuoServerFtp


Se hai bisogno di recuperare le tue credenziali FTP, consulta [questa guida](https://www.ovh.it/g1909.hosting_web_gestisci_le_tue_password#le_password_associate_ai_tuoi_servizi_di_web_hosting_ovh_connessione_ftp).

![](images/img_3093.jpg){.thumbnail}
Con Windows:

- ti consigliamo di consultare questa guida sull'utilizzo di [Putty](https://www.ovh.it/g1964.hosting_condiviso_utilizza_putty_su_windows).




## Elenco dei comandi principali
È sufficiente sostituire il termine arg con il nome della cartella o del file su cui vuoi lavorare.

|Comando da inserire|Traduzione (in inglese)|Descrizione|
|pwd|print working directory|Mostra la cartella corrente|
|cd arg|change directory|Cambia la cartella corrente; arg corrisponde alla nuova cartella. Il comando cd senza aggiungere arg ti posiziona nella directory home|
|cd ..|change directory to ..|Cambia la cartella corrente con quella del livello superiore|
|ls arg|list|Se arg è una cartella, ne elenca il contenuto.  Senza arg, ls elenca il contenuto della cartella corrente|
|ll arg|long list|Mostra le informazioni dettagliate del file arg|
|ls -a arg|list all|Se arg è una cartella , mostra tutti i file, anche quelli che iniziano per ... Le opzioni di ls possono essere associate: ls -al|
|chmod [tipo di permesso] arg|change mode|Modifica i permessi del file arg, in base al  tipo di permesso.|
|mkdir arg|make directory|Crea la cartella arg.|
|rmdir arg|remove directory|Elimina la cartella arg se è vuota.|
|rm arg|remove|Elimina arg.|
|rm -r arg|remove recursively|Elimina arg e tutti i file che contiene.|
|mv arg1 arg2|move|Rinomina o sposta arg1 in arg2.|
|touch arg|touch|Se non esiste già, crea un file vuoto chiamato arg. In caso contrario, aggiorna la data dell'ultima modifica con la data corrente.|




## Esegui uno script con una versione specifica di PHP
Per eseguire i tuoi script via SSH utilizzando una versione specifica di PHP, è necessario utilizzare questi comandi:

|Comando|Versione|
|php.ORIG.4 (cgi)|4.4.9|
|php.ORIG.5_2 (cgi)|5.2.17|
|php.ORIG.5_3 (cgi-fcgi)|5.3.29|
|/usr/local/php5.3/bin/php (cli)|5.3.29|
|php.ORIG.5_4 (cgi-fcgi)|5.4.38|
|/usr/local/php5.4/bin/php (cli)|5.4.38|
|/usr/local/php5.5/bin/php (cli)|5.5.22|
|/usr/local/php5.6/bin/php (cli)|5.6.6|


Ad esempio, per eseguire lo script "mioScript.php" con la versione 5.3 di PHP, è necessario eseguire il comando 
```
php.ORIG.5_3 mioScript.php
```


È necessario indicare anche il percorso completo dello script prima del suo nome.
Ad esempio, se il tuo file "mioScript.php" si trova nella cartella "WWW" e vuoi eseguirlo utilizzando la versione 5.3 di PHP, utilizza il comando

```
php.ORIG.5_3 www/mioScript.php
oppure
php.ORIG.5_3 /www/mioScript.php
```




## Impronta delle chiavi pubbliche OVH (da confermare al momento della prima connessione in SSH)
La prima volta che ti connetti sul server ti viene chiesto di confermare la tua chiave pubblica.

