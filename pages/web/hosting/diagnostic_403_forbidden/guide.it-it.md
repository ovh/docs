---
title: Cosa fare in caso di pagina "403 forbidden"?
excerpt: Questa guida ti mostra come caricare il tuo sito online su una pagina "403 forbidden"
updated: 2023-06-09
---

**Ultimo aggiornamento: 09/06/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Una pagina **"403 forbidden"** può apparire quando:

- i diritti di accesso FTP (CHMOD) sono insufficienti o limitati. l'accesso al file/cartella/sito Web al quale vuoi accedere tramite il tuo browser viene rifiutato dal server web del tuo hosting Web;

- il file **.htaccess** contiene una regola di restrizione di accesso;

- un plugin di sicurezza protegge l'accesso ai tuoi file/cartella/sito web tramite il tuo browser

- un firewall applicativo è attivo.

In seguito al rilevamento di un funzionamento sospetto, i nostri sistemi di sicurezza possono bloccare temporaneamente l'accesso ai file del tuo hosting Web. Questo dispositivo permette di impedire:

- lo stato di avanzamento di un'eventuale pirateria dei tuoi dati presenti sul tuo hosting Web;

- l'invio del codice malevolo ad altri enti/siti web, che potrebbero dar luogo ad una pirateria;

- la realizzazione di operazioni illegali.
 
 Questo dispositivo ti protegge giuridicamente contro le azioni risultanti da un'eventuale pirateria del tuo hosting Web verso altre organizzazioni/siti Web. 
 
 *Se utilizzi un blocco di questo tipo, invia una notifica all'indirizzo email del contatto "amministratore" del tuo hosting Web*

![403error](images/403error.png){.thumbnail}

**Questa guida ti mostra come sbloccare l'accesso al tuo sito in caso di visualizzazione "403 forbidden".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/) e/o di contattare la nostra [Community di utenti](https://community.ovh.com/en/). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#gofurther) di questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovhcloud.com/it/web-hosting/) OVHcloud
- Disporre delle [credenziali di accesso](/pages/web/hosting/ftp_connection) allo spazio di storage FTP dell'hosting
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1: analizzare la situazione

Se la pagina **"403 forbidden"** è apparsa in seguito a una modifica del tuo sito Web, [ripristina totalmente o in parte lo spazio di storage FTP del tuo hosting](/pages/web/hosting/ftp_save_and_backup) a una data precedente.

Se i backup disponibili non ti permettono di ripristinare l'accesso al tuo sito Web, contatta uno dei [provider specializzati](https://partner.ovhcloud.com/it/directory/).

Se la pagina **"403 forbidden"** non è apparsa a seguito di una modifica del tuo sito web, consulta il tuo servizio di posta elettronica. Se hai ricevuto un'email dai nostri servizi che indica la chiusura del tuo hosting Web per motivi di sicurezza, passa direttamente allo Step 2 della presente guida.

Se la pagina **"403 forbidden"** è apparsa senza azione da parte tua e non hai ricevuto alcuna email dai nostri servizi a questo proposito, verifica i diritti di accesso FTP (CHMOD) dei tuoi file/cartelle e il codice contenuto nei tuoi file **.htaccess**. Verifica che questa situazione non sia causata da un plugin di sicurezza o da un firewall applicativo. In caso di necessità, contatta un [fornitore specializzato](https://partner.ovhcloud.com/it/directory/).

### Step 2: rendere sicure le tue soluzioni <a name="step-2"></a>

Verifica la sicurezza della tua o delle tue postazioni/dispositivi informatici:

- Effettua gli aggiornamenti di sicurezza dei tuoi dispositivi.

- Verifica che sia installato un antivirus, aggiornalo e esegui una scansione completa. Se non ne hai uno, consulta [uno specialista](https://partner.ovhcloud.com/it/directory/) prima di installare il tuo servizio.

- Modificate l'insieme delle vostre password locali, in particolare quelle dei vostri indirizzi email, rispettando i **best practice** specificati in [questa guida](/pages/account/customer/manage-ovh-password).

- Modifica le password di tutti i tuoi servizi OVHcloud, in particolare quelli del tuo [database](/pages/web/hosting/sql_change_password) e dell'accesso al tuo [spazio di storage FTP](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Prima di modificare la password del database del tuo sito Web dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), aggiorna il file di configurazione del tuo sito Web per connettersi al database con la nuova password.
>
> In caso contrario, la modifica della password del tuo database determinerà un blocco dell'accesso al tuo sito Web o ai tuoi servizi/clienti che lo utilizzano.
>
> In caso di dubbi sulle operazioni da effettuare, contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).
>

### Step 3: intervenire sul tuo hosting

Annota innanzitutto la data di invio dell'email di OVHcloud che indica la disattivazione del tuo hosting Web, nonché la o le cartelle che contengono esempi di file illegittimi.

> [!primary]
>
> I nostri sistemi di sicurezza possono applicare due livelli di disattivazione sul tuo hosting Web: 
>
> - disattivazione applicando un "**CHMOD 700**" alla radice FTP del tuo hosting Web;
> - disattivazione applicando un "**CHMOD 000**" alla radice FTP del tuo hosting Web.
>
> In caso di disattivazione tramite restrizione di accesso FTP in "**CHMOD 000**", contatta obbligatoriamente i nostri [team di supporto](https://www.ovhcloud.com/it/support-levels/) per fare il punto sulla situazione prima di proseguire gli step descritti in questa guida. 
>
> In base alla tua situazione, questi ultimi applicheranno una restrizione meno elevata trasformando il "**CHMOD 000**" in "**CHMOD 700**" affinché tu possa agire sullo spazio FTP del tuo hosting Web.
>

#### Caso 1: il tuo hosting è stato disattivato meno di due settimane fa

Se il tuo hosting è stato chiuso meno di due settimane fa e contiene un solo sito Web, ripristina il tuo spazio di storage FTP. Se contiene più siti Web, ripristina solo i file che contengono file illegittimi.

Per ripristinare totalmente o in parte il tuo spazio di storage FTP, consulta la [nostra guida](/pages/web/hosting/ftp_save_and_backup) sull'argomento.

> [!warning]
>
> Il solo ripristino dello spazio di storage FTP non è sufficiente a correggere eventuali falle di sicurezza presenti sul tuo sito Web.
> Per identificare queste falle di sicurezza, analizza i ["log web"](/pages/web/hosting/logs_and_statistics) del tuo hosting web o rivolgiti a un [fornitore specializzato](https://partner.ovhcloud.com/it/directory/) per effettuare un audit di sicurezza dei tuoi siti Web.
>

#### Caso 2: il tuo hosting è stato disattivato più di due settimane fa

Se il tuo hosting è stato chiuso più di due settimane fa, contatta un [provider specializzato](https://partner.ovhcloud.com/it/directory/) per effettuare un audit di sicurezza dei tuoi siti Web. 

> [!success]
>
> Per maggiori informazioni sui [step 2 e 3](#step-2), consulta la nostra guida su [le azioni da effettuare in caso di hacking del tuo sito Web](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
>

### Step 4: riattivare il tuo hosting Web <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Ti consigliamo di effettuare un audit di sicurezza **prima** della riapertura del tuo hosting. L'invio del codice malevolo dal tuo hosting può impegnare la tua responsabilità legale.
>

#### Riattiva il tuo hosting con FileZilla

> [!primary]
>
> Per installare il software **FileZilla** per gestire i file del tuo sito Web, segui le istruzioni di questo [tutorial](/pages/web/hosting/ftp_filezilla_user_guide).
>

Apri il software FileZilla e poi [collegati al tuo spazio di storage FTP](/pages/web/hosting/ftp_connection). Clicca su `Server`{.action} nella barra del menu e poi su `Effettua un ordine FTP`{.action} (la denominazione può essere diversa in base alla versione di FileZilla utilizzata):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Nella nuova finestra, inserisci il comando qui sotto e conferma:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Una risposta **"200 Permissions changed on /"** conferma che l'operazione è stata effettuata correttamente. Per verificarlo, prova di nuovo ad accedere al tuo sito.

> [warning]
>
> Potrebbe essere necessario qualche minuto (massimo 20 minuti) per rendere visibile la modifica attraverso il browser.
>
> In base al tuo sito Web, potrebbe essere necessario svuotare la cache del tuo browser.
>

Se il comando qui sotto non funziona, prova utilizzando l'altro comando:

```
SITE CHMOD 705 .
```

#### Riattiva il tuo hosting con FTP Explorer "net2ftp"

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Web Cloud`{.action}, poi `Hosting`{.action} e clicca sulla scheda `FTP-SSH`{.action} dell'hosting in questione.

Clicca su `FTP Explorer`{.action} e accedi al tuo [spazio di storage FTP](/pages/web/hosting/ftp_connection).

Clicca sul pulsante `Funzioni avanzate`{.action} e poi sul pulsante `Esegui`{.action} accanto a "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

Nella parte superiore della pagina, inserisci questo comando:

```
SITE CHMOD 705 /
```

Clicca su "V" verde.


![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Una risposta **"200 Permissions changed on /"** conferma che l'operazione è stata effettuata correttamente. Per verificarlo, prova di nuovo ad accedere al tuo sito.

> [warning]
>
> Potrebbe essere necessario qualche minuto (massimo 20 minuti) per rendere visibile la modifica attraverso il browser.
>
> In base al tuo sito Web, potrebbe essere necessario svuotare la cache del tuo browser.
>

## Per saperne di più <a name="go-further"></a>

[Consigli in caso di hacking del tuo sito WordPress](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Attivazione del firewall applicativo](/pages/web/hosting/multisites_activating_application_firewall)

[Modificare la versione di PHP su un hosting Web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)


Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.