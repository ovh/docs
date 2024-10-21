---
title: "Hosting Web - Come gestire gli utenti FTP"
excerpt: "Scopri come creare, modificare o eliminare utenti FTP sul tuo hosting Web OVHcloud"
updated: 2024-10-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Le offerte di hosting Web OVHcloud danno accesso a uno spazio di storage FTP. Questo spazio FTP permette, ad esempio, di pubblicare online i file dei tuoi siti Web o delle tue applicazioni. L’accesso a questo spazio è possibile tramite un utente FTP o SSH e la password associata. Nell'ambito delle vostre attività, potreste avere diversi utenti FTP per i vostri diversi collaboratori.

**Questa guida ti mostra come creare, modificare o eliminare utenti FTP su un hosting Web OVHcloud.**

> [!primary]
>
> Questa guida è valida esclusivamente per gli hosting Web di tipo **Pro** o **Performance**. Solo queste 2 offerte permettono l'attivazione di più utenti FTP.

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting) compatibile.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.

## Procedura

### Creare un nuovo utente FTP sul tuo hosting Web <a name="create-ftp-user"></a>

Per creare un nuovo utente FTP sull’hosting Web dallo Spazio Cliente OVHcloud, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `FTP-SSH`{.action}.
6. Per creare un nuovo utente FTP, clicca sul pulsante `Crea un utente`{.action} a destra. In base alla risoluzione dello schermo, il pulsante può trovarsi nella parte inferiore della pagina.

![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}

Viene visualizzata la seguente finestra:

![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}

Inserisci i parametri del nuovo utente FTP definendo gli elementi / moduli seguenti:

- *Utente* : corrisponde al nome utente FTP completo che definisci per il tuo collaboratore. Dovrà utilizzarlo per connettersi allo spazio di storage FTP del tuo hosting Web. Qualunque sia il nuovo utente FTP creato sul tuo hosting Web, il nome scelto sarà sempre preceduto dal login FTP principale del tuo hosting Web, seguito da un trattino.
- Ad esempio, se il tuo login FTP principale è `FTPLogin` e vuoi creare un nuovo utente FTP `user1`, il login FTP del tuo nuovo utente sarà `FTPLogin-user1`.

- *Cartella di root* : corrisponde al nome della directory o sottodirectory nella quale l'utente FTP avrà il diritto di connettersi allo spazio di storage FTP.
- Ad esempio, se il tuo collaboratore ha bisogno di accedere all’intero spazio di storage FTP del tuo hosting Web, lascia vuoto questo modulo. In caso contrario, indica il nome della directory a cui sarà autorizzato ad accedere (esempi: `www`, `blog`, `website1`, `wwww/development`, ecc...).

- *Protocollo di connessione*: permette di definire il o i protocolli che l’utente FTP potrà utilizzare per connettersi allo spazio di storage FTP del tuo hosting Web.
- Ad esempio, se scegli la terza scelta (i protocolli **FTP**, **SFTP** e **SSH**), l’utente FTP potrà connettersi con i tre protocolli. In questo modo, il collaboratore che utilizzerà questo utente FTP potrà, ad esempio, scegliere di connettersi da riga di comando tramite il protocollo **SSH** ma anche gestire il contenuto FTP a partire dallo stesso protocollo.

Una volta definiti i parametri, clicca su `Continua`{.action} per accedere allo step 2 della creazione del nuovo utente FTP:

![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}

In questo secondo step, è sufficiente impostare e confermare la password del nuovo utente FTP nei 2 moduli. Segui la politica delle password elencata subito sotto i 2 moduli per andare al passaggio 3.

Una volta selezionata e confermata la password, clicca su `Continua`{.action} per accedere allo step 3 della creazione del nuovo utente FTP:

![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}

In questo ultimo step vengono riepilogati i parametri scelti per il nuovo utente FTP. Se queste impostazioni corrispondono a quanto desideri, clicca su `Conferma`{.action} per completare la richiesta di creazione di un nuovo utente FTP sul tuo hosting Web.

> [!primary]
>
> Una volta confermata la richiesta di creazione, l’upgrade del nuovo utente all’hosting Web potrebbe richiedere fino a 15 minuti.

In caso di necessità, prova il nuovo utente FTP consultando la nostra guida "[Accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection)".

### Modificare un utente FTP

Per modificare un utente FTP, effettuare le seguenti operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `FTP-SSH`{.action}.
6. Nella tabella in fondo alla pagina e nella parte destra della riga corrispondente all’utente FTP interessato, clicca sul pulsante `...`{.action} e poi su `Modifica`{.action}.

![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}

Viene visualizzata la seguente finestra:

![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}

Ad eccezione del nome utente FTP e della password associata, qui è possibile modificare la *cartella di root* e i *protocolli di connessione* definiti per l'utente FTP. Se necessario, consulta la sezione "[Creare un nuovo utente FTP sul tuo hosting Web](#create-ftp-user)" situata più in alto in questa guida per maggiori informazioni sulla *cartella di root* e sui *protocolli di connessione*.

Se necessario, è possibile disattivare l’utente* selezionando l’apposita casella di controllo. Questa opzione può essere utile per impedire ad un collaboratore di accedere al tuo spazio FTP senza eliminare i log FTP ed SSH ad esso associati. Questi log ti permetteranno di determinare quali operazioni sono state effettuate dal tuo collaboratore in caso di interventi indesiderati sul tuo hosting Web.

Una volta effettuate le modifiche, clicca su `Continua`{.action} per accedere allo Step 2. Verifica le richieste di modifica e clicca su `Conferma`{.action} per completare la richiesta di modifica dell’utente FTP sul tuo hosting Web.

> [!primary]
>
> Per modificare la password di un utente FTP, consulta la nostra guida "[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password)".
>
> Se vuoi modificare il nome dell'utente FTP, ricordati che questa funzionalità non è disponibile. Sarà necessario [creare un nuovo utente FTP](#create-ftp-user) con il nuovo nome utente. In seguito, se necessario, sarai libero di [eliminare il vecchio utente FTP](#delete-ftp-user).

### Eliminare un utente FTP <a name="delete-ftp-user"></a>

Per eliminare un utente FTP, effettuare le seguenti operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `FTP-SSH`{.action}.
6. Nella tabella in fondo alla pagina e nella parte destra della riga corrispondente all’utente FTP interessato, clicca sul pulsante `...`{.action} e poi su `Elimina`{.action}.

![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}

Viene visualizzata la seguente finestra:

![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}

Clicca su `Conferma`{.action} per eliminare definitivamente l’utente FTP dal tuo hosting Web.

## Per saperne di più

[Accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection).

[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utilizza una connessione SSH su un hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utilizza PuTTY per connetterti in SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilizza FileZilla con il tuo hosting Web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizza Cyberduck con il tuo hosting Web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).