---
title: Cosa fare in caso di pagina "Index of"?
excerpt: Come caricare il tuo sito online, quando visualizza una pagina "Index of"
updated: 2026-05-04
---

## Obiettivo

Una pagina **"Index of"** compare in almeno uno dei seguenti casi:

- La [configurazione del tuo nome dominio con il tuo sito web](/pages/web_cloud/web_hosting/multisites_configure_multisite) non è correttamente configurata verso la tua directory di destinazione.
- La cartella di destinazione verso cui il tuo dominio punta non contiene file **"index.html"** o **"index.php"**

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Questa guida ti mostra come correggere la visualizzazione di una pagina "Index of".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner) o di contattare l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.

## Prerequisiti

- Disporre di un [dominio](/links/web/domains)
- Disporre di una [soluzione di hosting Web](/links/web/hosting)

## Procedura

### Comprendere l'origine della pagina "Index of"

Il tuo dominio è dichiarato per accedere a una directory di destinazione (una "`Cartella di root`") sul server [FTP](/pages/web_cloud/web_hosting/ftp_connection) del tuo hosting web condiviso. Per ulteriori informazioni sull'associazione di un dominio con un hosting, consulta la nostra guida "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

La pagina **Index of** indica che la directory di destinazione non contiene file **index.php** o **index.html**. Un file di questo tipo costituisce il "*punto di accesso*" del tuo sito Web. Il nome del file è normalizzato.

Per visualizzare il tuo sito web, dovrai assicurarti che la `Cartella di root` per cui il tuo dominio è dichiarato contenga un file **index.php** o **index.html**.

> [!primary]
>
> Per collegare temporaneamente il tuo dominio a una `Cartella root` che non contiene file **index.php** o **index.html**, puoi vietare la visualizzazione della lista delle cartelle del tuo sito seguendo questo [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#impedire-il-listing-del-contenuto-di-una-directory). È inoltre possibile proteggere l'accesso alle cartelle tramite una [password](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Ti consigliamo di contattare un [fornitore specializzato](/links/partner) se riscontri difficoltà nell'implementare questa configurazione. Infatti, i nostri team di supporto non saranno in grado di fornirti un supporto per qualsiasi modifica alla programmazione interna del tuo sito web.

### Risolvere il caso più comune di una pagina "Index of"

Hai importato i file del tuo sito **domain.tld** nella cartella `www` del tuo spazio di storage del tuo hosting Web tramite [FTP](/pages/web_cloud/web_hosting/ftp_connection). Tuttavia, il sito web al quale è associato il tuo dominio non è collegato a questa directory nella colonna `Cartella di root`.

Dovrai modificare la `Cartella di root` dichiarata inizialmente per il tuo sito web dal tuo [Spazio Cliente OVHcloud](/links/control-panel/web-hosting). Per farlo, consulta la nostra guida "[Come modificare la cartella di root di un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

Se il tuo sito web dispone di una configurazione con Git, consulta in precedenza la nostra guida « [Configurare e utilizzare Git con un hosting Web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting) » per rimuovere l'associazione con Git **prima** di procedere. Infatti, la modifica della cartella di root dichiarata per un sito web non è disponibile se il tuo sito web è configurato con Git.

Verifica che il tuo sito venga visualizzato correttamente. In caso contrario, riavvia il tuo dispositivo e svuota la cache del tuo browser se necessario.

Assicurati inoltre che nella tua directory di destinazione sia presente un file **index.php** o **index.html**.

## Per saperne di più <a name="go-further"></a>

[Risolvere gli errori più frequenti associati ai moduli in 1 click](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Risolvere l’errore «Sito non installato»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
