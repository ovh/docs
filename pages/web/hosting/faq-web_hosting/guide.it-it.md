---
title: FAQ Web Hosting
excerpt: Domande più frequenti sugli hosting web OVHcloud
updated: 2022-11-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 15/02/2023**

## Gestisci la tua offerta

### Come configurare il tuo hosting?

Per configurare il tuo hosting, accedi innanzitutto allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Dalla rubrica `Hosting`{.action} è possibile gestire certificati SSL, versione PHP, opzione CDN, multisito, database, ecc...

**Consigli e suggerimenti**: Per aiutarti a configurare il tuo hosting, ti invitiamo a consultare la sezione "*Per iniziare*" che trovi [qui](https://docs.ovh.com/it/hosting/).

### Come gestire le tue password?

Per gestire le password, è necessario innanzitutto accedere allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Se hai dimenticato l’identificativo o la password, clicca su `Non ricordi identificativo o password?`{.action} nella finestra di login. Riceverai un’email con la procedura di rispristino.

Per maggiori informazioni, consulta la guida [Impostare e gestire la password di un account OVHcloud](/pages/account/customer/manage-ovh-password).

Accedi allo Spazio Cliente:

- Per modificare la password del tuo spazio FTP, segui le indicazioni di [questa guida](/pages/web/hosting/ftp_change_password);
- Per modificare la password del tuo database, segui le indicazioni di [questa guida](/pages/web/hosting/sql_change_password);
- Per modificare la password del tuo indirizzo email MX Plan, segui le indicazioni di [questa guida](/pages/web/emails/email_change_password).

### Come mettere online il tuo sito? 

Per pubblicare online il tuo sito, è necessario disporre di un [dominio](https://www.ovhcloud.com/it/domains/) che corrisponda all'indirizzo Web da cui il tuo sito sarà accessibile (ad esempio: *miodominio.com*). Ti servirà anche un [hosting](https://www.ovhcloud.com/it/web-hosting/) su cui installare il tuo sito.

Per seguire gli step necessari alla costruzione del tuo sito, consulta [questa pagina](https://www.ovhcloud.com/it/web-hosting/uc-website/) e segui le istruzioni contenute nella guida [Mettere online un sito Internet su un hosting Web](/pages/web/hosting/hosting_how_to_get_my_website_online).

**Consigli e suggerimenti**: Per aiutarti a creare il tuo sito, OVHcloud ti permette di installare sul tuo hosting un software di assistenza alla creazione di siti (WordPress, PrestaShop, Joomla! e Drupal), grazie alla funzionalità [CMS in 1 click](/pages/web/hosting/cms_install_1_click_modules).

### Come trasferire un sito e un servizio di posta sui server OVHcloud? 

Consulta la guida [Migrare un sito e un servizio di posta in OVHcloud](/pages/web/hosting/hosting_migrating_to_ovh).

### Come ospitare diversi siti Web su uno stesso hosting condiviso?

Consulta la guida [Condividere un hosting tra più siti](/pages/web/hosting/multisites_configure_multisite).

### Come cambiare il piano di hosting?

Per ordinare la soluzione di hosting Web più adatta alle tue esigenze, consulta le nostre offerte su [questa pagina](https://www.ovhcloud.com/it/web-hosting/).

Una volta effettuata la scelta, segui la procedura descritta nella guida [Fai evolvere la tua offerta di hosting Web](/pages/web/hosting/how_to_upgrade_web_hosting_offer).

### Come conservare l'offerta email associata al tuo hosting condiviso durante la disattivazione?

Una volta terminato o eliminato il tuo hosting condiviso, l'offerta email associata viene disattivata. Per conservare i tuoi indirizzi email, prima di disattivare l'hosting, dovrai scollegare il servizio di posta.<br>

Per effettuare questa operazione, clicca sulla scheda `Informazioni generali`{.action} del tuo hosting. Nella sezione `Configurazione`, clicca sul pulsante `...`{.action} a destra di `Account email`. Clicca su `Scollega la tua opzione email`{.action} e segui le istruzioni per ordinare un'offerta email indipendente che ti permetterà di conservare i tuoi indirizzi email già creati.

### In caso di disattivazione di un hosting condiviso Performance, come conservare l'offerta Web Cloud Databases associata?

Gli hosting condivisi **Performance** includono un'offerta Web Cloud Databases attivabile gratuitamente.
Quando elimini o elimini il tuo hosting condiviso **Performance**, l'offerta Web Cloud Databases associata è disattivata. Per conservare il tuo Web Cloud Databases, dovrai scollegarlo prima della disattivazione dell'hosting.<br>

Clicca sulla scheda `Informazioni generali`{.action} del tuo hosting. Nella sezione **Configurazione**, clicca sul pulsante `...`{.action} a destra di "**Database Private**". Clicca su `Scollega`{.action} e segui le istruzioni per ordinare un'offerta Web Cloud Databases indipendente, per mantenere il tuo Web Cloud Databases già creato.

## Diagnostica

> [!warning]
>
> Se riscontri un'anomalia non inclusa in questa FAQ, consulta la pagina "Diagnostica" della [nostra guida](https://docs.ovh.com/it/hosting/).
>

### Cosa fare se il tuo sito Web non funziona? 

Il malfunzionamento del sito può essere spiegato per diversi motivi. Per identificarne la causa, verifica prima di tutto che nessuno dei tuoi abbonamenti sia **rinnovato** accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Consulta gli [eventi in corso sulla nostra infrastruttura](https://www.status-ovhcloud.com/). Se tutti i tuoi servizi sono attivi e non subiscono incidenti o interventi di manutenzione, ti consigliamo di eseguire una diagnostica più approfondita.

### Cosa fare se, dopo la pubblicazione del tuo sito, la pagina "Sito in costruzione" di OVHcloud resta visualizzata?

![Sito in costruzione](images/site_en_construction.png){.thumbnail}

Al momento dell'installazione del tuo hosting, OVHcloud installa questa pagina come file **index.html** contenuto nella cartella `www` del tuo server FTP.

Questo file viene automaticamente disattivato durante la creazione del tuo [modulo in 1 click](/pages/web/hosting/cms_install_1_click_modules).

Se hai scelto di [installare manualmente](/pages/web/hosting/cms_manual_installation) il tuo sito, [connettiti al tuo spazio FTP](/pages/web/hosting/ftp_connection) per rinominarlo in **index.html.old**.

### Cosa fare se il tuo sito viene visualizzato su un indirizzo Web di tipo "xxxxx.cluster0xx.hosting.ovh.net"?

![url-cluster](images/url-cluster.png){.thumbnail}

Sono possibili due scenari. Il tuo sito è stato creato con questo indirizzo Web o è stato creato in seguito a una modifica.

#### Scenario 1: il tuo sito è stato creato con un indirizzo web del tipo "xxxxx.cluster0xx.hosting.ovh.net"

> [!warning]
>
> L'eliminazione di un database, come quello di un modulo in 1 click, è definitiva. e l'**eliminazione dei backup** dei dati. Prima di rimuovere un sito sull'hosting OVHcloud, assicurati **di essere in grado di ricrearlo allo stesso** modo. Se non sei sicuro delle operazioni da effettuare, contatta il tuo Webmaster o uno dei [nostri partner](https://partner.ovhcloud.com/it/directory/).
>

Nel primo caso, dopo aver effettuato tutti i backup necessari, elimina il tuo modulo dalla sezione `Hosting` dello Spazio Cliente OVHcloud:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Rimuovi il database dalla scheda con lo stesso nome a destra del tuo schermo, sempre nella sezione `Hosting`:

![delete_a_database](images/delete_a_database.png){.thumbnail}
 
Riavvia l'installazione sul dominio che vuoi, utilizzando la funzionalità [Modulo in 1 click](/pages/web/hosting/cms_manage_1_click_module).

#### Scenario 2: il tuo sito appare con un indirizzo web del tipo "xxxxx.cluster0xx.hosting.ovh.net" in seguito a una modifica

Se il tuo sito viene visualizzato con questo URL a seguito di un'operazione, ripristinalo allo stato precedente.

> [!alert]
>
> Il ripristino di un hosting OVHcloud comporta il ripristino di **tutti i siti in esso contenuti**.
>
> Durante un ripristino, il contenuto del tuo spazio FTP o del tuo database viene sostituito da un backup. Non è possibile recuperare i dati presenti sul server FTP o sul database prima del ripristino.
>

Per ripristinare il codice sorgente del tuo sito, consulta la guida [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web/hosting/ftp_save_and_backup).

Se il tuo sito contiene un database, consulta la guida [Importare un backup nel database di un hosting Web](/pages/web/hosting/sql_importing_mysql_database#ripristino-dallo-spazio-cliente-ovh).

### Cosa fare se il tuo sito reindirizza verso la Webmail OVHcloud?

![webmail](images/webmail.png){.thumbnail}

Questa anomalia indica una configurazione errata dei [server DNS](/pages/web/domains/dns_server_general_information) o della [zona DNS](/pages/web/domains/dns_zone_edit) associati al dominio.

Il caso più comune è il seguente: il dominio e il servizio di hosting sono stati ordinati separatamente e non sono quindi collegati tra loro tramite la zona DNS.

Accedi alla sezione `Domini`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sul dominio interessato e poi sulla scheda `Server DNS`{.action}.

Annota i server DNS indicati e clicca sulla scheda `Zona DNS`{.action}.

Confronta i `Destinazione` degli record di tipo `NS` indicati nella scheda `Zona DNS`{.action} con i `Server DNS` indicati nella scheda con lo stesso nome:

- Se gli elementi sono identici, sostituisci il record `213.186.33.5` con il codice a quattro cifre riportato nella scheda `Informazioni generali` con il nome `IPv4` (per maggiori informazioni sulle operazioni da effettuare, segui le istruzioni di [questa guida](/pages/web/domains/dns_zone_edit#procedura)).

- Se gli elementi non corrispondono, ma i `Server DNS` indicati nella scheda con lo stesso nome appaiono in [questa lista](/pages/web/hosting/clusters_and_shared_hosting_IP), effettua una reinizializzazione seguendo le indicazioni di [questa guida](/pages/web/domains/dns_server_general_information#reinizializza-i-server-dns).

- Se gli elementi non corrispondono e i `Server DNS` indicati nella scheda con lo stesso nome non compaiono in [questa lista](/pages/web/hosting/clusters_and_shared_hosting_IP), contatta il tuo Webmaster o cerca un [provider specializzato](https://partner.ovhcloud.com/it/directory/) tramite la pagina dei [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

### Cosa fare se il tuo sito mostra un errore "La pagina non si reindirizza correttamente"?

![too_many_redirect](images/too_many_redirect.png){.thumbnail}

> [!alert]
>
> Il ripristino di un hosting OVHcloud comporta il ripristino di tutti i siti in esso contenuti.
>
> Durante un ripristino, il contenuto del tuo spazio FTP o del tuo database viene sostituito da un backup. Non sarà possibile recuperare i dati presenti sul server FTP o sul database immediatamente prima del ripristino.
>

Ripristina il tuo sito allo stato precedente:

- Per ripristinare il codice sorgente del tuo sito, consulta la guida [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web/hosting/ftp_save_and_backup).

- Se il tuo sito contiene un database, consulta la guida [Importare un backup nel database di un hosting Web](/pages/web/hosting/sql_importing_mysql_database#ripristino-dallo-spazio-cliente-ovh).

Se il ripristino non ti consente di ripristinare l'accesso al tuo sito, contatta il tuo Webmaster o cerca un [provider specializzato](https://partner.ovhcloud.com/it/directory/) sul sito dei [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

### Cosa fare se il tuo sito mostra un errore "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](images/503_varnish.png){.thumbnail}

Se hai attivato l'[opzione CDN](/pages/web/hosting/cdn_how_to_use_cdn) del tuo hosting, disattiva la modalità *Maintenance* sul tuo sito WordPress o PrestaShop.

Se non hai attivato questa opzione o utilizzato la modalità *Maintenance*, contatta il tuo Webmaster o cerca un [provider specializzato](https://partner.ovhcloud.com/it/directory/) sul sito dei [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

### Cosa fare se il tuo sito mostra un errore "Your request has been blocked"?

![your_request_has_been_blocked](images/your_request_has_been_blocked.png){.thumbnail}

Questo messaggio indica che il tipo di richiesta HTTP che stai cercando di effettuare sul tuo sito è vietato per un periodo di tempo limitato. In questa situazione, [controlla i log](/pages/web/hosting/logs_and_statistics) del tuo sito per determinare quali richieste abbiano causato il blocco.

Per risolvere eventuali problemi, contatta il tuo Webmaster o uno dei nostri [partner](https://partner.ovhcloud.com/it/directory/).

### Cosa fare se il tuo sito mostra un errore "Your IP has been banned"?

![your_ip_has_been_blocked](images/your_ip_has_been_blocked.png){.thumbnail}

Questo messaggio indica che l'indirizzo IP utilizzato per connetterti al tuo sito è bloccato per un periodo di tempo limitato. 

In questo caso, esamina i [log del tuo sito](/pages/web/hosting/logs_and_statistics), per determinare quali richieste abbiano provocato questo blocco.<br>
Verifica anche che il tuo computer non sia infettato da un virus.<br>
contatta uno dei [nostri partner](https://partner.ovhcloud.com/it/directory/) per verificare il codice informatico del tuo sito.

### Ho ordinato un dominio con accenti e si affigge in modo strano nel mio Spazio Cliente. Cosa devo fare?

![notebook_idn](images/notation_idn.png){.thumbnail}

Non c'è nulla da fare in questa situazione. Anche se il tuo dominio compare con [rating internazionale (IDN)](https://it.wikipedia.org/wiki/Nome_di_dominio_internazionalizzato){.external} nello Spazio Cliente, funzionerà e verrà visualizzato in modo del tutto normale. L'indirizzo Web del tuo sito verrà visualizzato come richiesto. I tuoi indirizzi email saranno visualizzati come desideri presso i tuoi interlocutori.

> [!warning]
>
> L'utilizzo di un indirizzo email con un dominio IDN in un client di posta (Outlook, Mail di macOS, ecc...) non è consigliato e può causare incompatibilità.
>

## Per saperne di più <a name="gofurther"></a>

[FAQ - Email condivise MX Plan](/pages/web/emails/faq-emails)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
