---
title: "Tutorial - Proteggere una directory o l'interfaccia di amministrazione del tuo sito web con file .htaccess e .htpasswd"
excerpt: "Questa guida ti mostra come proteggere una directory o l'accesso alla gestione del tuo sito Web tramite un'autenticazione con i file .htaccess e .htpasswd"
updated: 2023-06-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 01/06/2023**

## Obiettivo

Questa guida ti mostra come impostare un'autenticazione "utente/password" per accedere a tutto o a parte del tuo sito Web tramite un browser. 

utilizzando due file di configurazione (HTTP) Apache da inserire nello [spazio FTP](/pages/web/hosting/ftp_connection) del tuo hosting Web: 

- "**.htaccess**": per maggiori informazioni sulle funzionalità di questo file, consulta il nostro tutorial sulle ["Operazioni realizzabili con un file ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do).
- "**.htpasswd**": in aggiunta a questo tutorial, consulta la [documentazione ufficiale Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) relativa a questo file.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/directory/) o di contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>
> Gli esempi che seguiranno devono essere salvati in file denominati ".htaccess" e ".htpasswd". Attenzione, le regole definite in questi file hanno conseguenze dirette sul tuo sito web. Prima di applicarle al tuo sito, verifica sistematicamente le regole che aggiungi. 
> 

**Questa guida ti mostra come proteggere una directory o l'accesso alla sezione amministratore del tuo sito Web tramite un'autenticazione con i file ".htaccess" e ".htpasswd".**

## Prerequisiti

- Disporre di una [offerta di hosting Web](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre delle credenziali di accesso a [spazio FTP del tuo hosting](/pages/web/hosting/ftp_connection)

## Procedura

> [!primary]
>
> La soluzione di sicurezza proposta è solo una delle possibilità tecniche. 
>
> Sappiate, ad esempio, che se utilizzate un **C**ontent **M**anagement **S**ystem (**CMS**), esistono altre soluzioni di sicurezza.
>
> Se utilizzi un CMS Wordpress, OVHcloud mette a disposizione anche una guida su come [utilizzare il file htaccess con WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> Per qualsiasi domanda relativa alla creazione, all'utilizzo o alla programmazione del tuo sito Web, il supporto OVHcloud non sarà in grado di fornirti assistenza su questi argomenti.
>
> Per farlo, contatta la nostra [Community di utenti](https://community.ovh.com/en/) o i nostri [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).
>

Per proteggere l'accesso a una directory o a una parte del tuo sito, ti spieghiamo i 4 step principali da effettuare:

- creare file "crypt.php", ".htaccess" e ".htpasswd"
- Genera password crittografate con il file "crypt.php"
- definire utenti e password crittografate con il file ".htpasswd"
- Configurare regole nel file ".htaccess" ed eliminare il file "crypt.php"

> [!warning]
>
> Gli step successivi per ottimizzare la sicurezza dei tuoi dati ospitati.
> Se i tuoi siti Web sono compatibili, ti consigliamo di utilizzare la versione più recente possibile di PHP.
> 
> Per modificare la versione di PHP sui tuoi siti Web, consulta queste guide:
> 
> - [Modificare la configurazione di un hosting Web](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [Cambiare la versione di PHP su un hosting Web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)
>
> In effetti, gli script e le informazioni descritte in questa guida funzionano solo con un ambiente di esecuzione e una versione PHP recente.
> 
> In caso contrario, ti consigliamo di ottimizzare il tuo sito Web per renderlo compatibile prima di installare quello che seguirà. Questa operazione ridurrà ulteriormente il rischio di pirateria informatica attraverso falle di sicurezza.
>

### Step 1: creare file "crypt.php", ".htaccess" e ".htpasswd"

Accedi a [lo spazio di storage FTP](/pages/web/hosting/ftp_connection) del tuo hosting Web. Apri la ["cartella di root"](/pages/web/hosting/multisites_configure_multisite) verso cui punta il tuo dominio.

Crea un file "crypt.php" in questa "cartella root".

![root_folder](images/root_folder.png){.thumbnail}

Apri o crea la cartella per essere protetta dal tuo sito Web. Nel nostro esempio, si tratterà della cartella "admin". Crea in questa directory un file ".htpasswd" e un file ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

Per utilizzare correttamente i file ".htaccess" e ".htpasswd", è necessario conoscere e rispettare queste regole: 

- **un solo** file ".htaccess" e **un solo** file ".htpasswd" per directory o sottodirectory, per evitare conflitti tra file differenti ".htaccess" e ".htpasswd";
- i file ".htaccess" e ".htpasswd" sono invisibili agli utenti che visitano il tuo sito Web;
- le regole dichiarate in un file ".htaccess" si applicano all'intera directory in cui è installato il file ".htaccess", nonché a tutte le sottodirectory della stessa directory;
- i file ".htpasswd" e ".htaccess" possono trovarsi in cartelle diverse. Per più ".htaccess" può essere utilizzato un solo file ".htpasswd".

### Step 2: completare il file "crypt.php"

Clicca sulla cartella root in cui hai creato il file "crypt.php". Clicca su `Modifica`{.action} e inserisci queste righe:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Sostituisci `plain_text_password` con la password **in chiaro** che vuoi cifrare.

**Puoi adattare lo script in funzione del numero di password che desideri cifrare.**

- Esempio in cui lo script PHP cifrerà 3 password in una sola operazione:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Sostituisci `plain_text_password1`, `plain_text_password2` e `plain_text_password3` con la password **in chiaro**"che vuoi cifrare.

> [!primary]
>
> I due script di cui sopra utilizzano, alla data, il metodo di cifratura più sicuro tramite l'algoritmo **bcrypt** raccomandato da Apache.
>
> Per maggiori informazioni sull'argomento, consulta la [documentazione ufficiale Apache](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

Se disponi di un hosting [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/), collegati in [SSH](/pages/web/hosting/ssh_on_webhosting) al tuo hosting Web. Scendete nella "**directory**" dove si trova il vostro script "crypt.php".

Per effettuare questa operazione, utilizza il comando SSH:

```bash
cd Name_of_your_root_folder
```

Sostituisci `Name_of_your_root_folder` con il nome della tua "cartella di root" per scendere dove si trova il tuo script "crypt.php".

Se, ad esempio, il tuo file "crypt.php" si trova in una sottocartella della tua "cartella di root", esegui questo comando SSH:

```bash
cd Name_of_your_root_folder/sub_folder
```

Sostituisci `Name_of_your_root_folder` con il nome della tua "cartella di root" e `sub_folder` con il nome della sottocartella in cui si trova il tuo script "crypt.php".

A questo punto, esegui il comando:

```bash
php crypt.php
```

> [!warning]
>
> Per motivi di sicurezza, si raccomanda l'utilizzo di SSH. Tuttavia, se disponi di un'offerta **Starter** o [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) sulle quali l'SSH non è disponibile, puoi anche eseguire il file "crypt.php" tramite il tuo browser Web.
>
> Inserisci questo URL: `https://domain.tld/crypt.php` en che modifica `domain.tld` con il tuo dominio. direttamente nella barra degli indirizzi del browser.
>

Recupera le password cifrate **senza copiare** il "&#60;br />" se esegui l'ordine "*php crypt.php*" in SSH:

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

I valori `encrypted_password1`, `encrypted_password2` e `encrypted_password3` devono, ad esempio, essere conformi al formato della riga seguente:

```text
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Verifica solo che la tua password crittografata inizi correttamente con `$2y$`. Questa operazione conferma che la tua password è stata cifrata con l'algoritmo sicuro **bcrypt*.

### Step 3: definire gli utenti e le password cifrate con il file ".htpasswd"

Il file ".htpasswd" contiene le rispettive password cifrate a ciascuno degli utenti dichiarati nel file. Sono solo questi utenti che saranno autorizzati a connettersi alla directory di cui vuoi proteggere l'accesso.

Per farlo, per **ogni utente** in questo file, inserisci una riga che indica il suo identificativo e la password cifrata:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Sostituisci `user1`, `user2` e `user3` del nostro esempio con i nomi degli utenti.

Sostituisci `encrypted_password1`, `encrypted_password2` e `encrypted_password3` con le password precedentemente recuperate.

### Step 4: configurare le regole nel file ".htaccess"

#### Blocca l'accesso a una directory completa

Nella directory da proteggere, crea un file ".htaccess" con questo codice:

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

Nello script di cui sopra, sostituisci questi elementi con i tuoi valori:

- `"Indicates your login(s)"`: corrisponde all'utente o agli utenti autorizzati ad accedere alla directory completa. Se hai più utenti, separali solo per via *spazio*.
- `your_ftp_login`: il login FTP che utilizzi per accedere al tuo spazio di archiviazione FTP. Per recuperare il tuo login FTP, consulta la nostra guida sulla [connessione al tuo spazio FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: percorso di accesso directory dalla root FTP del tuo hosting web al file ".htpasswd" che deve essere utilizzato per autenticare gli utenti autorizzati dalla regola presente nel tuo file ".htaccess".

#### Blocca l'accesso a uno o più file

Per bloccare l'accesso a uno o più file, aggiungi una [direttiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} nel file ".htaccess":

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

Nello script di cui sopra, sostituisci questi elementi con i tuoi valori:

- `test.php`: nome del file specifico o gruppo di file contenente, nel nostro esempio, il termine **test.php** (termine per il quale si applica la restrizione di accesso).
- `"Indicates your login(s)"`: corrisponde all'utente o agli utenti autorizzati ad accedere ai file i cui nomi contengono **test.php**. Se hai più utenti, separali per un *spazio*.
- `your_ftp_login`: il login FTP che utilizzi per accedere al tuo spazio di archiviazione FTP. Per recuperare il tuo login FTP, consulta la nostra guida sulla [connessione al tuo spazio FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: percorso di accesso directory della radice FTP del tuo hosting web fino al file ".htpasswd" che deve essere utilizzato per autenticare gli utenti autorizzati dalla direttiva del file ".htaccess".

> [!warning]
>
> Inserisci una [direttiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} per **ogni file** da proteggere.
>
> Le direttive "Files" si applicano a tutti i file con lo stesso nome o che terminano con il nome specificato. A condizione che siano contenuti nella stessa directory del.htaccess o in una delle sue sottocartelle.
>
> Nella configurazione sopraindicata, poiché "new_test.php" contiene **test.php** nel suo nome, la direttiva "Files" si applicherebbe anche su un file "new_test.php" contenuto in una sottodirectory della cartella "admin".
>
> Inoltre, fino a quando non vi sarà autenticato per accedere ai file oggetto della direttiva, questi possono non apparire e non essere quindi "leggibili" tramite una pagina "index of".
>

> [!alert]
>
> Una volta completata l'installazione dei tuoi file ".htaccess" e ".htpasswd", elimina il file di crittografia "crypt.php" dal tuo hosting Web.
>

## Per saperne di più <a name="go-further"></a>

[Documentazione ufficiale Apache](https://httpd.apache.org/docs/2.4/){.external}

[Accedere allo spazio FTP del tuo hosting Web](/pages/web/hosting/ftp_connection)

[Tutorial - Operazioni realizzabili con un file ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do)

[Bloccare l'accesso al mio sito per alcuni indirizzi IP tramite un file.htaccess](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Riscrivere l'URL di accesso al mio sito grazie al mod_rewrite via file.htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.