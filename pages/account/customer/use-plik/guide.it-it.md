---
title: Condividere file con il tool Plik
excerpt: Come utilizzare il tool Plik per inviare file ad altre persone
slug: plik
section: Tool
updated: 2022-02-14
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 14/02/2022**

## Obiettivo

Il tool online [Plik](https://plik.ovhcloud.com) permette di condividere file tra diverse persone, offrendo opzioni di sicurezza di accesso a questi file.

**Questa guida ti mostra come utilizzare il tool online Plik per condividere file.**

## Prerequisiti

- Disporre di un [account OVHcloud attivo](https://docs.ovh.com/it/customer/creare-account-ovhcloud/)

## Procedura

### Connessione API

Per prima cosa accedi alla pagina <https://plik.ovhcloud.com>.

Per trasferire file, devi essere autenticato. Clicca su `Login with OVH`{.action}.

![login](images/plik-login-EU.png)

Accedi al tuo account OVHcloud, per consentire all'API OVHcloud di accedere al tool Plik.<br>
Inserisci le credenziali e clicca sul pulsante `Log in`{.action} per continuare.

![API](images/api-login-EU.png)

> [!primary]
>
> Se hai attivato la [doppia autenticazione](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/) sul tuo account, inserisci il codice fornito con il metodo di autenticazione definito sul tuo account. 

### Trasferisci file

Una volta connesso, clicca sulla parola `Plik`{.action} in alto a sinistra per accedere al menu di aggiunta dei file.

Clicca su `Add files`{.action} e seleziona il file da aggiungere o effettua un "drag&drop" dei tuoi file.

> [!primary]
>
> La dimensione dei file è limitata a 10 GB.
>

![Add files - options](images/plik-add-files-options.png)

Sono disponibili diverse opzioni per configurare i tuoi pagamenti:

- `Destruct after the first download` - L'opzione elimina il tuo file trasmesso dopo il primo download.
- `Streaming` - Il file non sarà archiviato sul server. Invece, il trasferimento di file inizia quando l'utente remoto inizia il download.
- `Removable` - Permette agli utenti finali di eliminare il file trasmesso.
- `Password` - Proteggi il tuo televersamento inserendo un identificativo e una password che l'utente remoto dovrà inserire.
- `Comments` - Aggiungi commenti al download. Il linguaggio *markdown* è supportato.
- `Files will be automatically removed in` - Scegli il numero di giorni (massimo 30), di ore o di minuti in base ai quali desideri che i tuoi file televisivi siano cancellati automaticamente.

> [!primary]
>
> Quando proteggi il tuo sistema di pagamento tramite una password, il nome utente predefinito è "plik".
>

Dopo aver aggiunto i tuoi file e selezionato le opzioni, clicca sul pulsante `Upload`{.action} verde sul lato sinistro. Questa operazione aprirà una nuova pagina con i file associati.

![upload file](images/plik-upload-EU.png)

Le opzioni di download sono disponibili

### Scarica file

Sulla pagina di download sono disponibili nuove opzioni:

- `Zip archive` - Metti tutti i file che hai trasmesso in una cartella compresso.
- `Add files` - Vi permette di aggiungere altri file.
- `Delete` - Elimina tutti i file preventivamente trasmessi.

Per rimuovere file, clicca sul pulsante `X`{.action} in corrispondenza di ciascun file.

![download file](images/plik-download-EU.png)

Per consentire ad altre persone di scaricare i tuoi file, clicca sul link verso il file individuale che si trova sotto il nome del file.<br>
Puoi anche fornire il link a tutti i file della sessione condividendo l'URL situato nella barra degli indirizzi del tuo browser.<br>
Puoi anche condividere il QR code situato a sinistra. Se hai caricato più file, il QR code permetterà di scaricare ciascun file.

### Opzioni dell'account

Clicca sul tuo identificativo in alto a destra per accedere alle opzioni dell'account.

![download file](images/account-options.png)

Tramite questo menu, potete disconnettervi, generare token per utilizzare il tool Plik da riga di comando, eliminare ogni singolo versamento (tramite il pulsante `Remove`{.action} situato a destra di ogni singolo trasferimento) o eliminarli tutti (tramite il pulsante `DELETE UPLOADS`{.action}).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
