---
title: Cosa fare in caso di pagina "403 forbidden"?
excerpt: Come caricare il tuo sito online su una pagina "403 forbidden"
slug: diagnostic-403-forbidden
section: Diagnostica
order: 08
---

**Ultimo aggiornamento: 16/06/2022**

## Obiettivo

Le modifiche ai diritti di accesso ai file del tuo sito, al file **.htaccess** o all'installazione di un plugin di sicurezza possono talvolta tradursi in una pagina **"403 forbidden"**.

In caso di malfunzionamenti, i nostri sistemi di sicurezza hanno dovuto bloccare temporaneamente l'accesso ai file del tuo hosting. Questo tipo di blocco automatico ha lo scopo di impedire l'invio del codice malevolo verso altre entità e di proteggerti giuridicamente.

![403error](images/403error.png){.thumbnail}

**Questa guida ti mostra come sbloccare l'accesso al tuo sito in caso di visualizzazione "403 forbidden".**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/) o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web](https://www.ovhcloud.com/it/web-hosting/) OVHcloud
- Disporre delle [credenziali di accesso](../accedere-spazio-storage-ftp-hosting-web/#step-1-recupera-i-dati-necessari-a-effettuare-laccesso) allo spazio di storage dell'hosting
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1: analizzare la situazione

Se la pagina **"403 forbidden"** è apparsa a seguito di una modifica errata del tuo sito, [ripristina in tutto o in parte lo spazio di storage del tuo hosting](../web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/) a una data precedente.

Se i backup disponibili non ti permettono di ripristinare l'accesso al tuo sito, contatta un [provider specializzato](https://partner.ovhcloud.com/it/).

Se la pagina **"403 forbidden"** non è apparsa a seguito di una modifica del tuo sito, consulta la tua messaggeria. Se hai ricevuto un'email dai nostri servizi che indica la chiusura dell'hosting per motivi di sicurezza, passa allo [Step 2](#step2).

Se la pagina **"403 forbidden"** è apparsa senza azione da parte tua e non hai ricevuto email dai nostri servizi a questo proposito, contatta un [provider specializzato](https://partner.ovhcloud.com/it/).

### Step 2: rendere sicure le tue soluzioni <a name="step2"></a>

Verifica la sicurezza della tua postazione(e) informatica:

- Effettua gli aggiornamenti di sicurezza;
- Verifica anche che sia installato un antivirus, aggiorna e avvia una scansione completa. Se non ne hai uno, consulta un [provider specializzato](https://partner.ovhcloud.com/it/) prima di installare il tuo servizio;
- Modificate l'insieme delle vostre password locali, in particolare quelle dei vostri indirizzi email, rispettando queste [buone pratiche](https://docs.ovh.com/it/customer/gestire-la-password/#genera-una-password-efficace);
- Modifica le password di tutti i tuoi servizi OVHcloud, in particolare del tuo [database](../modificare-password-database/) e dell'accesso al tuo [spazio di storage FTP](../modificare-la-password-utente-ftp/).

> [!warning]
>
> Prima di modificare la password del database dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), aggiorna il file di configurazione del tuo sito per connettersi al database con la nuova password.
>
> In caso contrario, la modifica della password del tuo database comporta l'interruzione del sito o dei servizi che lo utilizzano.
>
> In caso di dubbi sulle operazioni da effettuare, contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).
>

### Step 3: intervenire sul tuo hosting

Annota innanzitutto la data di invio dell'email di OVHcloud che indica la disattivazione del tuo hosting, nonché la o le cartelle che contengono esempi di file illegittimi.

#### Caso 1: il tuo hosting è stato disattivato meno di due settimane fa

Se il tuo hosting è stato chiuso meno di due settimane fa e contiene un solo sito, ripristina il tuo spazio di storage seguendo le istruzioni di questa [guida](../web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/#ripristina-i-dati-dello-storage-dallo-spazio-cliente-ovh).

Se il tuo hosting è stato chiuso meno di due settimane fa e contiene diversi siti, ripristina solo le cartelle contenenti i file illegittimi seguendo le istruzioni di questa [guida](../web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/#ripristina-un-file-da-un-software-o-uninterfaccia-web).

> [!warning]
>
> Il solo ripristino del tuo spazio di storage non basterà a correggere eventuali falle di sicurezza presenti sul tuo sito.
> Per identificare queste falle di sicurezza, puoi analizzare i ["logs web"](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/#logs) del tuo hosting o rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/) per effettuare un audit di sicurezza delle tue soluzioni.
>

#### Caso 2: il tuo hosting è stato disattivato più di due settimane fa

Se il tuo hosting è stato chiuso più di due settimane fa, contatta un [provider specializzato](https://partner.ovhcloud.com/it/) per effettuare un audit di sicurezza delle tue soluzioni. 

### Step 4: riattivare il tuo hosting Web

> [!warning]
>
> Ti consigliamo di effettuare un audit di sicurezza **prima** della riapertura del tuo hosting. L'invio del codice malevolo dal tuo hosting può impegnare la tua responsabilità legale.
>

#### Riattiva il tuo hosting con FileZilla

> [!primary]
>
> Per installare il software **FileZilla** per gestire i file del tuo sito, segui questa [guida](../hosting_condiviso_guida_allutilizzo_di_filezilla/).
>

Apri il software FileZilla e accedi allo spazio di storage. Clicca sul `Server`{.action} nella barra del menu e poi su `Esegui comando personalizzato`{.action} (la denominazione può essere leggermente diversa a seconda della versione di FileZilla utilizzata):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

Nella nuova finestra, inserisci il comando qui sotto e conferma:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Una risposta **"200 Permissions changed on /"** conferma che l'operazione è stata effettuata correttamente. Per verificarlo, prova di nuovo ad accedere al tuo sito.

#### Riattiva il tuo hosting con FTP Explorer "net2ftp"

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Web Cloud`{.action}, poi `Hosting`{.action} e clicca sulla scheda `FTP-SSH`{.action} dell'hosting in questione.

Clicca sul pulsante `FTP Explorer`{.action} e accedi allo spazio di storage seguendo le indicazioni di questa [guida](../accedere-spazio-storage-ftp-hosting-web/#1-ftp-explorer). Clicca sul pulsante `Funzioni avanzate`{.action} e poi sul pulsante `Esegui`{.action} accanto a "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

Nella parte superiore della pagina, inserisci il comando qui sotto e clicca su "V" verde.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Una risposta **"200 Permissions changed on /"** conferma che l'operazione è stata effettuata correttamente. Per verificarlo, prova di nuovo ad accedere al tuo sito.

## Per saperne di più <a name="gofurther"></a>

[Consigli in caso di hacking del tuo sito WordPress](../hacking_del_tuo_sito_wordpress_consigli_e_casi_pratici/)

[Attivazione del firewall applicativo](../hosting_condiviso_attiva_un_firewall_applicativo/)

[Modificare la versione di PHP su un hosting Web](../configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.