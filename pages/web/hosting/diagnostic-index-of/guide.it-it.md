---
title: Cosa fare in caso di pagina « Index of »?
excerpt: Come caricare il tuo sito online, quando visualizza una pagina « Index of »
slug: diagnostic-index-of
section: Diagnostica
order: 6
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 10/05/2022**

## Obiettivo

Se una configurazione `Multisito` non è configurata correttamente, il tuo sito potrebbe visualizzare una pagina **"Index of"**.

![index_of](images/index_of.png){.thumbnail}

**Questa guida ti mostra come correggere la visualizzazione di una pagina "Index of"**.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Comprendere l'origine della pagina "Index of"

Il tuo dominio è collegato tramite la sezione `Multisito`{.action} del tuo hosting a una directory (una "`Cartella di root`") sul tuo server [FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/).

La pagina **Index of** indica che la directory in questione non contiene file **index.php** o **index.html**. Un file di questo tipo costituisce il "*punto di accesso*" del tuo sito.

Per visualizzare il tuo sito Web, dalla sezione `Multisito`{.action} del tuo hosting dovrai collegare il tuo dominio alla `Cartella di root` che contiene questo file **index.php** o **index.html**.

> [!primary]
>
> Per collegare temporaneamente il tuo dominio a una `Cartella di root` che non contiene file **index.php** o **index.html**, è possibile vietare la visualizzazione della lista delle cartelle del tuo sito seguendo questa [guida](https://docs.ovh.com/it/hosting/hosting_condiviso_altre_operazioni_possibili_con_il_file_htaccess/#impedire-il-listing-del-contenuto-di-una-directory). È inoltre possibile proteggere l'accesso alle cartelle tramite una [password](https://docs.ovh.com/it/hosting/condividi-htaccess-come-proteggere-laccesso-a-una-cartella-tramite-autenticazione/).
>
> In caso di difficoltà nell'implementare questa configurazione, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/). Il nostro team di supporto non sarà infatti in grado di fornirti assistenza su eventuali modifiche della programmazione interna del tuo sito.

### Risolvere il caso più comune di una pagina "Index of"

Hai importato i file del tuo sito **mydomain.ovh** nella cartella `www` del tuo hosting tramite [FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/). Il tuo dominio non è associato a questa cartella nella colonna `Cartella di root` del tuo `Multisito`{.action}.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modifica la `Cartella di root` cliccando sul pulsante `...`{.action} a destra della tabella e poi su `Modifica il dominio`{.action}:

![modify_domain](images/modify_domain.png){.thumbnail}

Nella finestra che appare:

* Seleziona la casella `Modifica anche il sottodominio www.mydomain.ovh`{.action} (1)
* Indica la directory contenente il file **index.php** o **index.html** del tuo sito come `Cartella di root` (2);
* Clicca su `Continua` (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> Utilizzare la directory `www` come `Cartella di root` non è in nessun caso obbligatorio. Puoi installare il tuo sito in un'altra cartella del tuo [server FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/).
>

Nella nuova finestra, clicca su `Conferma`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Tra pochi minuti (ricordati di aggiornare il browser), ottieni questo risultato:

![multisite_modified](images/multisite_modified.png){.thumbnail}

e verifica che il tuo sito venga visualizzato correttamente. In caso contrario, riavvia il tuo dispositivo e svuota la cache del tuo browser se necessario.

## Per saperne di più <a name="gofurther"></a>

[Risolvere gli errori più frequenti associati ai moduli in 1 click](https://docs.ovh.com/it/hosting/errori-frequenti-moduli-in-1-click/)

[Risolvere l’errore «Sito non installato»](https://docs.ovh.com/it/hosting/errore-sito-non-installato/)

[Ospitare più siti su uno stesso hosting](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
