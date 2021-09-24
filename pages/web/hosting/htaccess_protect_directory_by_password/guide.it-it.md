---
title: "Proteggi l'interfaccia di gestione del tuo sito con un file.htaccess"
slug: condividi-htaccess-come-proteggere-lacci-a-una-cartella-tramite-autenticazione
legacy_guide_number: 1968
excerpt: Come proteggere l'accesso alla gestione del tuo sito con un file .htaccess
section: Scrittura e autenticazione
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 20/09/2021**

## Obiettivo

A volte potrebbe essere necessario proteggere l'accesso a una parte del tuo sito con le credenziali In particolare, è possibile creare un file ".htaccess" per proteggere l'accesso all'interfaccia di amministrazione.

**Questa guida ti mostra come proteggere l'accesso alla sezione amministratore del tuo sito tramite un'autenticazione con file ".htaccess".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovh.it/hosting-web/) OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Avere a disposizione le credenziali di accesso allo [spazio di storage dell'hosting](../accedere-spazio-storage-ftp-hosting-web/)

## Procedura

> [!primary]
>
> La soluzione proposta è solo una delle possibilità tecniche per creare uno spazio amministratore sul tuo sito. Inoltre, è possibile utilizzare la funzionalità [CMS in 1 click](../modules-en-1-clic/) proposta da [OVHcloud](https://www.ovh.com/fr/).
>
> Per qualsiasi richiesta relativa alla creazione o alla programmazione del tuo sito, contatta la nostra [Community di utenti](https://community.ovh.com) o i [partner OVHcloud](https://partner.ovhcloud.com/fr/). OVH non sarà infatti in grado di fornirti assistenza su questi argomenti.
>

### Step 1: creare l'arborescenza

Accedi a >
Crea un file "crypter.php".

![root_folder](images/root_folder.png){.thumbnail}

Apri o crea la cartella che contiene la parte "admin" del tuo sito. Crea in questa directory un file ".htpasswd" e un file ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> I file ".htpasswd" e ".htaccess" possono trovarsi in cartelle diverse. Per più ".htaccess" può essere utilizzato un solo file ".htpasswd".
>
> I parametri definiti da un file ".htaccess" si applicano alla directory in cui è installato e a tutte le sue sottodirectory.
>

### Step 2: completare il file "crypter.php"

Inserisci nel file "crypter.php" creato precedentemente le seguenti righe (da ripetere secondo il numero di password da generare):

```php
<?php
$string_1 = crypt('motdepasse_en_clair_1');
$string_2 = crypt('motdepasse_en_clair_2');
$string_3 = crypt('motdepasse_en_clair_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Se disponi di un hosting [Pro](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) o [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml), accedi in [SSH](../mutualise-le-ssh-sur-les-hebergements-mutualises/) al tuo hosting. Esegui questo comando:

```bash
php crypt.php
```

> [!warning]
>
> Per motivi di sicurezza, si raccomanda l'utilizzo di SSH. Tuttavia, se disponi di un'offerta [Kimsufi Web](https://www.kimsufi.com/fr/hosting.xml) o [Personale](https://www.ovh.com/fr/hebergement-web/hebergement-perso.xml) e non desideri passare a un'offerta [Pro](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) o [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml), puoi anche eseguire il file "crypter.php" tramite il tuo browser Web (accedendo a un URL di tipo https://votre-domaine.ovh/crypter.php).
>
> Per maggiori informazioni sul metodo da utilizzare per cifrare la password, contatta la nostra [Community di utenti](https://community.ovh.com) o i [partner OVHcloud](https://partner.ovhcloud.com/fr/). Non saremo in grado di fornirti assistenza al riguardo.
>

Recupera le password cifrate (Non copiare "<br />" se esegui il comando "php cripter.php" in SSH):

```bash
password_crittografata1
password_crittografata2
password_crittografata3
```

### Step 3: completare il file ".htpasswd"

Il file ".htpasswd" contiene la lista degli utenti autorizzati a connettersi all'interfaccia di amministrazione del tuo sito e la loro password cifrata.

Inserisci in questo file per **ogni utente** una riga che indica il suo identificativo e la password cifrata:

```bash
utente1:password_crittografata1
utente2:password_crittografata2
utente3:password_crittografata3
```

### Step 4: completare il file ".htaccess"

#### Blocca l'accesso a una directory completa

Nella directory da proteggere, crea un file ".htaccess" con questo codice:

```bash
AuthName "Inserisci il tuo identificativo amministratore e la password"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/dossier_racine/admin/.htpasswd"
Richiedi valid-user
```

> [!warning]
>
> In questo esempio, è necessario sostituire "il tuo_login_ftp" con il tuo [identificativo FTP](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter). Nella sezione `Hosting`{.action}, è disponibile nella scheda `FTP-SSH`{.action} del tuo hosting.
>
> Sostituisci, se necessario, nell'esempio qui sotto "cartella_radice" con il nome della [cartella contenente i file del tuo sito](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-21-ajouter-un-domaine-enregistre-chez-ovhcloud).
>

#### Blocca l'accesso a uno o più file

Per bloccare l'accesso a uno o più file specifici, aggiungi una [direttiva "Code"](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} nel file ".htaccess":

```bash
<Files test.php>

AuthName "Indica i tuoi identificativi"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/dossier_racine/admin/.htpasswd"
Richiedi valid-user

</Files>
```

> [!warning]
>
> Dovrai indicare una [direttiva "Code"](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} per **ogni file** da proteggere.
>
> Le direttive "Code" si applicano a tutti i file dello stesso nome o che terminano con il nome specificato. Questo a condizione che siano contenuti nella stessa directory del.htaccess o in una delle sue sottodirectory (Nella configurazione qui indicata, la direttiva "tile" si applicherebbe ad esempio su un file "nuovo_test.php" contenuto in una sottodirectory della cartella "admin").
>

## Spingiti oltre <a name="gofurther"></a>

[Tutto sul file .htaccess](../mutualise-tout-sur-le-fichier-htaccess/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/fr/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/>.
