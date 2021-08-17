---
title: Cosa fare in caso di pagina « Index of »?
excerpt: Come caricare il tuo sito online, quando visualizza una pagina « Index of »
slug: diagnostic-index-of
section: Diagnostica
order: 6
---

**Ultimo aggiornamento: 25/06/2021**
 
## Obiettivo

Se una configurazione `Multisito` non è configurata correttamente, il tuo sito potrebbe visualizzare una pagina **« Index of »**.

![index_of](images/index_of.png){.thumbnail}

**Questa guida ti mostra come correggere la visualizzazione di una pagina « Index of ».**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovh.it/hosting-web/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Comprendere l'origine della pagina « Index of »

Il tuo dominio è collegato tramite la sezione `Multisito` del tuo hosting a una directory (una « `Cartella di root` ») sul tuo server [FTP](../accedere-spazio-storage-ftp-hosting-web/).

La pagina **« Index of »** indica che la directory in questione non contiene file **index.php** o **index.html**. Un file di questo tipo costituisce il « punto di ingresso » del tuo sito.

Per visualizzare il tuo sito Web, dalla sezione `Multisito` del tuo hosting dovrai collegare il tuo dominio alla `Cartella di root` che contiene questo file **index.php** o **index.html**.

> [!primary]
>
> Per collegare temporaneamente il tuo dominio a una `Cartella di root` che non contiene file **index.php** o **index.html**, è possibile vietare la visualizzazione della lista delle cartelle del tuo sito seguendo questa [guida](../hosting_condiviso_altre_operazioni_possibili_con_il_file_htaccess/#impedire-il-listing-del-contenuto-di-una-directory). È inoltre possibile proteggere l'accesso alle cartelle tramite una [password](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/).
>
> In caso di difficoltà nell'implementare questa configurazione, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/). Il nostro team di supporto non sarà infatti in grado di fornirti assistenza su eventuali modifiche della programmazione interna del tuo sito.

### Risolvere il caso più comune di una pagina « Index of »

Hai importato i file del tuo sito **mydomain.ovh** nella cartella `www` del tuo hosting tramite [FTP](../accedere-spazio-storage-ftp-hosting-web/). Il tuo dominio non è associato a questa cartella nella colonna `Cartella di root` del tuo `Multisito`.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modifica la `Cartella di root` cliccando sul pulsante `...`{.action} a destra della tabella e poi su `Modifica il dominio`{.action}:

![modify_domain](images/modify_domain.png){.thumbnail}

Seleziona la casella `Modifica anche il sottodominio www.mydomain.ovh` e inserisci la directory contenente il file **index.php** o **index.html** del tuo sito come `Cartella root`.

> [!primary]
>
> Utilizzare la directory `www` come `Cartella di root` non è in nessun caso obbligatorio. Puoi installare il tuo sito in un'altra cartella del tuo [server FTP](../accedere-spazio-storage-ftp-hosting-web/).

Per proseguire, clicca su `Continua`

![change_root_folder](images/change_root_folder.png){.thumbnail}

Clicca su `Conferma`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Otterrai questo risultato:

![multisite_modified](images/multisite_modified.png){.thumbnail}

## Per saperne di più <a name="gofurther"></a>

[Risolvere gli errori più frequenti associati ai moduli in 1 click](../errori-frequenti-moduli-in-1-click/)

[Risolvere l'errore "Sito non installato"](../errore-sito-non-installato/)

[Ospitare più siti su uno stesso hosting](../configurare-un-multisito-su-un-hosting-web/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
