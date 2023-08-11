---
title: Cosa fare in caso di errore 500 Internal Server Error?
excerpt: Diagnostica i casi più comuni di errore 500
updated: 2023-05-16
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Gli errori 500 "Internal Server Error" possono riguardare la totalità o parte del tuo sito, essere casuali o permanenti. Possono anche apparire sotto forma di una pagina bianca.

![error500](images/error-500-2.png){.thumbnail}

A volte provengono anche da un aggiornamento effettuato **automaticamente** da un componente del tuo sito e quindi possono verificarsi senza intervento da parte tua.

**Scopri come diagnosticare i casi di errore più comuni 500.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di un'[offerta di hosting condiviso](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei servizi associati (dominio e hosting web)

## Procedura

Prima di proseguire, controlla il tuo sito su diversi apparecchi e browser. Se in alcuni casi l'errore 500 non compare (ad esempio tramite un browser diverso dal tuo), significa che non è associato ai tuoi servizi OVHcloud. Riavvia i tuoi dispositivi e, se necessario, contatta un tecnico informatico vicino al tuo domicilio.

Un sito è costituito da un **codice sorgente** (ad esempio file con .php visibili durante una connessione al tuo hosting in [FTP](/pages/web_cloud/web_hosting/ftp_connection)), al quale si aggiunge spesso una **database**.
<br>Nonostante l'errore 500, ti consigliamo di effettuare un backup locale di tutti i tuoi dati prima di effettuare qualsiasi altra operazione :

- Consulta questa [guida](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) per recuperare una copia del codice sorgente.
- Se il tuo sito utilizza un database, consulta anche questo [documento](/pages/web_cloud/web_hosting/sql_database_export) per recuperarne una copia.

In caso di errore 500, è possibile effettuare un [ripristino](#restore) del tuo sito. Tuttavia, è preferibile effettuare una diagnosi approfondita per determinare l'esatta origine dell'errore.

### Verifica i log del tuo hosting

Consulta questa [guida](/pages/web_cloud/web_hosting/logs_and_statistics) per individuare la causa dell'errore 500 nei log del tuo hosting.

### Passa il tuo sito in modalità sviluppo

Per visualizzare eventuali errori PHP, passa il tuo hosting in modalità `sviluppo` grazie a queste [indicazioni](/pages/web_cloud/web_hosting/ovhconfig_modify_system_runtime#step-2-modifica-la-configurazione-dellhosting-web).

### Testa il file .htaccess

Un errore 500 può essere associato a un'anomalia in un file `.htaccess`. Questo file si trova generalmente al primo livello nella cartella che contiene il tuo sito sul tuo FTP.

Per verificarlo, [connettiti in FTP](/pages/web_cloud/web_hosting/ftp_connection) al tuo hosting.

Rinomina questo file in.`htaccess.old` e prova il tuo sito.

Se il dominio è di nuovo accessibile, è in causa il `.htaccess`. Il progetto dovrà pertanto essere modificato. Per farlo, contatta uno dei nostri [partner](https://partner.ovhcloud.com/it/directory/).

### Verifica i permessi su cartelle e file

I file e le cartelle che costituiscono il tuo sito possiedono un certo livello di "permessi" in lettura, scrittura ed esecuzione. Per proteggerli da manipolazioni malevoli o errate.

Un errore 500 potrebbe essere associato a un livello di diritti di accesso non corretto su alcune cartelle o file del tuo sito.

Per accedere a questi file, accedi in FTP al tuo hosting seguendo la nostra [documentazione](/pages/web_cloud/web_hosting/ftp_connection).

In seguito, nella guida "[Utilizzare FileZilla con il tuo hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide#diritti-su-file-e-cartelle)", verifica i seguenti elementi :

- La **radice** del tuo hosting (si tratta della directory registrata `/` o `.` nel tuo software FTP) deve essere obbligatoria con diritti 705 (permessi di default). Ti consigliamo di non modificare questo livello di diritti.
- Le cartelle devono avere i diritti 705.
- I file devono avere i diritti 604.

### Accedi ai dettagli degli errori sui tuoi script

Per ragioni di sicurezza, il tuo sito nasconde gli eventuali dettagli sull'origine dell'errore 500 a chiunque vi si connetta tramite un browser web.

Se vuoi avere accesso a questi dettagli, dal piano di hosting [pro2014](https://www.ovhcloud.com/it/web-hosting/professional-offer/) o superiore puoi connetterti al tuo sito tramite una [connessione ssh](/pages/web_cloud/web_hosting/ssh_on_webhosting).

### Verifica lo stato del database

Per tutti gli errori 500 che possono essere associati al database del tuo sito Web, clicca sulla nostra documentazione ["Risolvi gli errori più frequenti associati ai database"](/pages/web_cloud/web_hosting/diagnosis_database_errors).

### Ripristina il tuo sito allo stato precedente <a name="restore"></a>

> [!warning]
>
> Il ripristino del codice sorgente del tuo sito riguarderà tutti i siti del tuo hosting OVHcloud.
>
> Durante un ripristino, il contenuto del tuo spazio FTP o del tuo database viene sostituito da un backup. Non sarà possibile recuperare i dati presenti sul server immediatamente prima del ripristino.
>

Per ripristinare il codice sorgente del tuo sito, consulta la guida Ripristinare [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup).

Se il tuo sito contiene un database, consulta la nostra guida [Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database#ripristino-dallo-spazio-cliente-ovh) per ripristinarlo in uno stato precedente.

Se l'errore 500 è apparso a seguito di un aggiornamento della versione PHP del tuo hosting, consulta la nostra guida "[Modificare la versione di PHP su un hosting Web](/pages/web_cloud/web_hosting/php_configure_php_on_your_web_hosting_2014)" per ritornare alla configurazione precedente.

## Per saperne di più <a name="gofurther"></a>

[Cosa fare se il tuo sito è inaccessibile?](/pages/web_cloud/web_hosting/diagnostic-website-not-accessible)

[Cosa fare in caso di errore « La connessione non è privata »?](/pages/web_cloud/web_hosting/diagnostic-not-secured)

[Cosa fare in caso di pagina « Index of »?](/pages/web_cloud/web_hosting/diagnostic-index-of)

[Cosa fare in caso di pagina "403 forbidden"?](/pages/web_cloud/web_hosting/diagnostic_403_forbidden)

[Risolvi gli errori più frequenti associati ai database](/pages/web_cloud/web_hosting/diagnosis_database_errors)

[Il mio sito è lento. Cosa fare?](/pages/web_cloud/web_hosting/diagnostic_slownesses)

[Risolvere l’errore «Sito non installato»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
