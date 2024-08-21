---
title: "Accedi allo spazio di storage FTP del tuo hosting Web"
excerpt: "Questa guida ti mostra come connettersi allo spazio di storage FTP del tuo hosting Web OVHcloud"
updated: 2024-05-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Le offerte di hosting Web OVHcloud danno accesso a uno spazio di storage FTP che permette di pubblicare online i file dei tuoi siti o delle tue applicazioni. L'accesso a questo spazio è possibile tramite un utente FTP o SSH con le password associate.

**Questa guida ti mostra come connettersi allo spazio di storage FTP del tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](/links/web/hosting){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione `Web Cloud`{.action}

> [!primary]
> Solo gli hosting Web **Pro** o **Performance** permettono l'attivazione di più utenti FTP e dispongono di connessioni in SSH.
>

## Procedura

### Step 1: recupera i dati necessari a effettuare l’accesso

Per accedere allo spazio di storage FTP, recupera questi elementi:

- utente FTP o SSH attivo
- la password associata a questo utente FTP o SSH
- l'indirizzo del server FTP o SSH del tuo hosting Web
- la porta di connessione al server FTP o SSH del tuo hosting Web

> [!primary]
>
> Questi elementi ti sono stati comunicati nell'email di conferma dell'installazione del tuo hosting Web al momento della sottoscrizione. accessibili dallo [Spazio Cliente OVHcloud](/links/manager){.external}.
>
> **Se disponi già di questi elementi**, prosegui direttamente allo Step 2 "[Accedi al tuo spazio di storage](#ftp_storage_access)" di questa guida.
> 

Se non disponi di questi elementi, accedi alla sezione `Web Cloud`{.action} del tuo [Spazio Cliente OVHcloud](/links/manager){.external}. Clicca su `Hosting`{.action} nella colonna di sinistra. Seleziona il nome dell'hosting Web interessato e clicca sulla scheda `FTP - SSH`{.action}. 

Visualizzi una tabella con tutti gli utenti FTP e SSH creati sul tuo hosting Web, con tutte le informazioni relative al tuo spazio di storage.

![ftpconnect](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}

> [!primary]
>
> Per creare un nuovo utente FTP/SSH dalla stessa pagina, clicca su `Crea utente`{.action} situato a destra.
> Definisci l'estensione del nome di questa nuova `Utente`{.action} e la `Cartella di root`{.action} in cui l'utente potrà agire e clicca su `Avanti`{.action}.
> Seleziona una password per questo nuovo account utente, clicca su `Avanti`{.action} e poi clicca su `Conferma`{.action}.
>

Tutti gli elementi necessari per connetterti allo spazio di storage FTP sono presenti su questa stessa pagina.

Di seguito trovi una descrizione delle informazioni essenziali visualizzate sulla pagina `FTP-SSH`:

- **Server FTP e SFTP**: indirizzo del server FTP del tuo hosting Web che permette di accedere al tuo spazio di archiviazione FTP, utilizzando, ad esempio, un software FTP tramite il protocollo FTP o SFTP.

> La porta classica di connessione è la porta "21". Utilizza la porta "22" per una connessione tramite il protocollo SFTP (se attivo)

- **Server SSH**: indirizzo del server SSH del tuo hosting Web che permette di accedere al tuo spazio di archiviazione FTP, utilizzando un terminale tramite il protocollo SSH.

> La porta di connessione SSH è la porta "22".

- **Login principale**: identificativo (S)FTP principale creato sul tuo hosting Web. Tutti gli utenti (S)FTP del tuo hosting sono disponibili nella colonna "Login" della tabella.

> [!primary]
>
> In base all'offerta di [hosting Web OVHcloud](/links/web/hosting){.external}, alcune delle informazioni descritte in precedenza (in particolare quelle relative all'SSH) potrebbero non comparire.
>

Se non conosci più la password di un utente FTP o SSH, consulta la nostra guida "[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

![ftpconnect](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password.png){.thumbnail}

A questo punto, disporrai di tutti gli elementi che ti permetteranno di accedere al tuo spazio di archiviazione FTP.

### Step 2: accedere al tuo spazio di archiviazione FTP <a name="ftp_storage_access"></a>

La connessione allo spazio di storage FTP può essere effettuata in diversi modi. Prosegui nella lettura di questa guida in base all'operazione che vuoi effettuare:

- [1. Connessione via "FTP Explorer"](#ftpesplorer): permette di accedere al tuo spazio di archiviazione FTP dal tuo browser Internet.

- [2. Connessione tramite un software FTP](#ftpsoftware): permette di accedere al tuo spazio di storage FTP tramite un software (ad esempio [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) o [Cyberduck](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac). 
Dovrai installare il client FTP o il software scelto sul tuo computer.

- [3. Connessione via un accesso SSH](#ssh): permette di accedere al tuo spazio di storage FTP tramite un accesso SSH. Per utilizzare questo tipo di accesso sono necessarie conoscenze avanzate e un'offerta di [hosting Web OVHcloud](/links/web/hosting){.external} **Pro** o **Performance**.

#### 1. FTP Explorer <a name="ftpexplorer"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e clicca su `Web Cloud`{.action}.

Clicca su `Hosting`{.action} nella colonna di sinistra. Clicca sulla scheda `FTP - SSH`{.action} e poi su `FTP Explorer`{.action}.

![ftpconnect](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/ftp-explorer.png){.thumbnail}

Nella nuova pagina, inserisci l'identificativo FTP e la password associata. Se le informazioni sono corrette, visualizzi il tuo spazio di storage.

![ftpconnect](/pages/assets/screens/other/web-tools/net2ftp/login-interface.png){.thumbnail}

#### 2. Client FTP <a name="ftpsoftware"></a>

Dopo aver installato il software FTP che preferisci sul tuo computer (ad esempio [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) o [Cyberduck](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac), avvialo. 

È necessario trovare campi specifici in cui inserire le informazioni di connessione. 

> [!warning]
>
> Questa operazione è relativa al software utilizzato e alla sua versione, pertanto non è possibile indicarli tutti in questa guida.
>

Ecco una sintesi delle informazioni da inserire:

- **Server FTP e SFTP**: indirizzo del server FTP che permette di accedere al tuo spazio di archiviazione FTP. A seconda del software utilizzato, la denominazione può essere: "Server", "Indirizzo del server", "Nome host" o ancora "Host".
- **Login principale**: identificativo che permette di accedere al tuo spazio di storage FTP. A seconda del software utilizzato, la denominazione può essere: "Utente", "Nome utente", "Identificativo", "Login" o ancora "Username".
- **Password dell'utente FTP**: password associata al login FTP. A seconda del software utilizzato, la denominazione può essere "Password".
- **Porta di connessione**: in genere viene completato automaticamente dal software. Inserisci:
    - utilizza la porta "21" per una connessione che utilizza il protocollo FTP
    - utilizza la porta "22" per una connessione che utilizza il protocollo SFTP (se attivo).

Se le informazioni sono corrette, il software utilizzato mostrerà il contenuto del tuo spazio di storage FTP. Può apparire un messaggio (chiamato anche "status") per confermare che il contenuto è stato letto correttamente dal tuo client FTP.

#### 3. Accesso SSH <a name="ssh"></a>

Per connetterti in SSH, utilizza un terminale per interagire direttamente con il tuo spazio di storage FTP tramite riga di comando. 

Per maggiori informazioni sull'SSH, consulta la nostra guida sull'[utilizzo dell'SSH con il tuo hosting condiviso OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Questo tool è installato di default su *macOS*, *Linux* e *Windows 10*. Un ambiente Windows più vecchio richiederà l'installazione di un software come [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) o l'aggiunta della funzionalità "*OpenSSH*". 

> [!warning]
> 
> Questa procedura è specifica per il sistema operativo utilizzato e non è quindi possibile descriverla in questa guida.
>

Una volta stabilita la connessione SSH, in base al metodo scelto, esistono due modi per connetterti: 

- **da un software**: le sezioni di testo devono essere completate dalle informazioni di connessione;
- **da riga di comando**: deve essere rispettata una sintassi specifica.

Da riga di comando, utilizza questa sintassi:

```bash
ssh sshlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Nel comando precedente, sostituisci:

- il valore `sshlogin` dal tuo login FTP principale descritto nello [step 2.2](#ftpsoftware) (o da un login FTP che dispone degli accessi SSH);
- i `XXX` con le cifre corrispondenti al numero del cluster in cui si trova l’hosting Web.

Una volta inviato il comando, ti verrà chiesto di inserire la password dell'utente SSH.

Se le informazioni sono corrette, verrà effettuato l'accesso allo spazio di storage FTP. 

Se necessario, consulta la guida "[Utilizzare una connessione SSH su un hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".

![ftpconnect](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-connected.png){.thumbnail}

## Per saperne di più

[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password){.external}.

[Utilizza una connessione SSH su un hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}.

[Utilizza PuTTY per connetterti in SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilizza FileZilla con il tuo hosting Web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizza Cyberduck con il tuo hosting Web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).