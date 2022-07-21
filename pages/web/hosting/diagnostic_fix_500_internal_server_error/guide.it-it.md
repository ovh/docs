---
title: Cosa fare in caso di errore 500 Internal Server Error?
legacy_guide_number: 1987
slug: errore-500-internal-server-error
excerpt: Diagnostica i casi più comuni di errore 500
section: Diagnostica
order: 5
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/07/2022**

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
- Essere aggiornato nei [pagamenti](https://docs.ovh.com/it/billing/gestire-fatture-ovhcloud/#pay-bills) e [rinnovi](https://docs.ovh.com/it/billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#renewal-management) dei servizi associati (dominio e hosting web)

## Procedura

Prima di proseguire, controlla il tuo sito su diversi apparecchi e browser. Se in alcuni casi l'errore 500 non compare (ad esempio tramite un browser diverso dal tuo), significa che non è associato ai tuoi servizi OVHcloud. Riavvia i tuoi dispositivi e, se necessario, contatta un tecnico informatico vicino al tuo domicilio.

Un sito è costituito da un **codice sorgente** (ad esempio file con .php visibili durante una connessione al tuo hosting in [FTP](../accedere-spazio-storage-ftp-hosting-web/)), al quale si aggiunge spesso una **database**.
<br>Nonostante l'errore 500, ti consigliamo di effettuare un backup locale di tutti i tuoi dati prima di effettuare qualsiasi altra operazione :

- Consulta questa [guida](../hosting_condiviso_guida_allutilizzo_di_filezilla/) per recuperare una copia del codice sorgente.
- Se il tuo sito utilizza un database, consulta anche questo [documento](../web_hosting_come_esportare_un_database/) per recuperarne una copia.

In caso di errore 500, è possibile effettuare un [ripristino](#restore) del tuo sito. Tuttavia, è preferibile effettuare una diagnosi approfondita per determinare l'esatta origine dell'errore.

### Verifica i log del tuo hosting

Consulta questa [guida](../hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/) per individuare la causa dell'errore 500 nei log del tuo hosting.

### Passa il tuo sito in modalità sviluppo

Per visualizzare eventuali errori PHP, passa il tuo hosting in modalità `sviluppo` grazie a queste [indicazioni](../modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#step-2-modifica-la-configurazione-dellhosting-web).

### Testa il file .htaccess

Un errore 500 può essere associato a un'anomalia in un file `.htaccess`. Questo file si trova generalmente al primo livello nella cartella che contiene il tuo sito sul tuo FTP.

Per verificarlo, [connettiti in FTP](../accedere-spazio-storage-ftp-hosting-web/) al tuo hosting.

Rinomina questo file in.`htaccess.old` e prova il tuo sito.

Se il dominio è di nuovo accessibile, è in causa il `.htaccess`. Il progetto dovrà pertanto essere modificato. Per farlo, contatta uno dei nostri [partner](https://partner.ovhcloud.com/it/directory/).

### Verifica i permessi su cartelle e file

I file e le cartelle che costituiscono il tuo sito possiedono un certo livello di "permessi" in lettura, scrittura ed esecuzione. Per proteggerli da manipolazioni malevoli o errate.

Un errore 500 potrebbe essere associato a un livello di diritti di accesso non corretto su alcune cartelle o file del tuo sito.

Per accedere a questi file, accedi in FTP al tuo hosting seguendo la nostra [documentazione](../accedere-spazio-storage-ftp-hosting-web/).

In seguito, nella guida "[Utilizzare FileZilla con il tuo hosting](../hosting_condiviso_guida_allutilizzo_di_filezilla/#diritti-su-file-e-cartelle)", verifica i seguenti elementi :

- La **radice** del tuo hosting (si tratta della directory registrata `/` o `.` nel tuo software FTP) deve essere obbligatorio con diritti 705 (permessi di default). Ti consigliamo di non modificare questo livello di diritti.
- I fascicoli devono essere di diritto 705.
- I file devono essere in diritto 604.

### Accedi ai dettagli degli errori sui tuoi script

Per ragioni di sicurezza, il tuo sito nasconde gli eventuali dettagli sull'origine dell'errore 500 a chiunque vi si connetta tramite un browser web.

Se vuoi avere accesso a questi dettagli, dal piano di hosting [pro2014](https://www.ovhcloud.com/it/web-hosting/professional-offer/) puoi connetterti al tuo sito tramite una [connessione ssh](../hosting_condiviso_il_protocollo_ssh/).

### Ripristina il tuo sito allo stato precedente <a name="restore"></a>

> [!warning]
>
> Il ripristino del codice sorgente del tuo sito riguarderà tutti i siti del tuo hosting OVHcloud.
>
> Durante un ripristino, il contenuto del tuo spazio FTP o del tuo database viene sostituito da un backup. Non sarà possibile recuperare i dati presenti sul server immediatamente prima del ripristino.
>

Per ripristinare il codice sorgente del tuo sito, consulta la guida Ripristinare [Ripristinare i dati dello spazio di storage di un hosting Web](../web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/).

Se il tuo sito contiene un database, consulta la nostra guida [Importare un backup nel database di un hosting Web](../web_hosting_come_importare_un_database_mysql/#ripristino-dallo-spazio-cliente-ovh) per ripristinarlo in uno stato precedente.

Se l'errore 500 è apparso a seguito di un aggiornamento della versione PHP del tuo hosting, consulta la nostra guida "[Modificare la versione di PHP su un hosting Web](../configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/)" per ritornare alla configurazione precedente.

## Per saperne di più <a name="gofurther"></a>

[Tutto sul file .htaccess](../hosting_condiviso_tutto_sul_file_htaccess/)

[Come diagnosticare una pagina bianca?](../web_hosting_come_fai_a_diagnosticare_una_pagina_bianca/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
