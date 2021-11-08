---
title: 'Ripristinare i dati dello spazio di storage di un hosting Web'
excerpt: 'Come recuperare un file o l’intero contenuto dello spazio di storage di un hosting Web OVH'
slug: web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla
legacy_guide_number: g1593
section: 'FTP e SSH'
---

**Ultimo aggiornamento: 15/04/2019**

## Obiettivo

Le soluzioni di hosting Web OVH includono uno spazio di storage in cui è possibile ospitare i tuoi siti Internet. Per diversi motivi potrebbe essere necessario ripristinare tutti i dati in esso contenuti o un file specifico, ad esempio nel caso in cui il tuo sito risulti irraggiungibile in seguito alla rimozione o alla modifica errata di un file.

**Questa guida ti mostra come ripristinare un file o l’intero contenuto dello storage del tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external} (escluso il servizio Cloud Web)
- In base al metodo utilizzato, disporre dell’accesso alla gestione della soluzione di hosting Web dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o della password FTP per accedere allo spazio di storage 

## Procedura

Prima di iniziare, assicurati che le date di ripristino disponibili ti consentano di recuperare i dati del tuo hosting allo stato desiderato:

- giorno corrente, alle 00:01
- giorno precedente, alle 00:01
- due giorni prima, alle 00:01
- domenica precedente, alle 01:00 del mattino
- domenica di due settimane prima, alle 01:00 del mattino

OVH non sarà in grado di fornirti backup antecedenti: in caso di necessità, dovrai utilizzare un backup eseguito personalmente. 

Inoltre, dovrai indicare il metodo di ripristino che intendi adottare:

|Metodo di ripristino|Descrizione|
|---|---|
|Ripristino dallo Spazio Cliente OVH|Ripristina tutti i dati dello spazio di storage. L’intero contenuto corrente sarà sostituito con quello del backup selezionato.|
|Ripristino da un software o un’interfaccia Web|Permette di accedere in sola lettura a un backup dello spazio di storage. Questo metodo, più tecnico, consente di recuperare uno o più file di una data anteriore senza sovrascrivere completamente il contenuto dello spazio di storage.|

Una volta scelto il metodo di ripristino più adatto alle tue esigenze, prosegui nella lettura di questa guida nel paragrafo corrispondente:

- [Ripristina i dati dello storage dallo Spazio Cliente OVH](./#ripristina-i-dati-dello-storage-dallo-spazio-cliente-ovh){.external}

- [Ripristina un file da un software o un’interfaccia Web](.#ripristina-un-file-da-un-software-o-uninterfaccia-web){.external}

### Ripristina i dati dello storage dallo Spazio Cliente OVH

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} nel menu a sinistra e, nella scheda `FTP - SSH`{.action}, clicca sul pulsante `Ripristina un backup`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

Nella nuova finestra è possibile selezionare la data di ripristino dal menu a tendina:

|Data|Momento del backup|
|---|---|
|g-1|Il giorno stesso alle 00:01|
|g-2|Il giorno precedente alle 00:01|
|g-3|Due giorni prima alle 00:01|
|1 settimana|La domenica precedente alle 01:00|
|2 settimane|La domenica di due settimane prima alle 01:00|

Una volta selezionata la data, clicca su `Seguente`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Assicurati che questa azione non comporti la perdita di dati, ad esempio di un file archiviato sullo spazio di storage dopo la data di ripristino selezionata. Come già precisato, il backup sovrascriverà i dati presenti nello storage.

Clicca su `Conferma`{.action} per avviare l’operazione.

### Ripristina un file da un software o un’interfaccia Web

Questa operazione prevede diversi step. Assicurati di avere a disposizione la password dell’utente FTP per poter accedere allo spazio di storage. 

> [!warning]
>
> Questa soluzione richiede conoscenze del software o dell’interfaccia utilizzati. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. 
>

#### 1. Scegliere il software o l’interfaccia Web da utilizzare

Per prima cosa, definisci quale software o interfaccia utilizzerai per accedere al backup del tuo spazio di storage. Se hai già preso la tua decisione, passa direttamente allo step 2. In caso contrario, ecco alcune soluzioni consigliate:

- **FileZilla**: il download di questo client è disponibile dal sito ufficiale. Per maggiori informazioni consulta la nostra[ guida all’utilizzo di FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/){.external}, tenendo però presente che non si sostituisce alla documentazione ufficiale del software.

- **Cyberduck**: il download di questo client è disponibile dal sito ufficiale. Per maggiori informazioni consulta la nostra [guida all’utilizzo di Cyberduck (MAC)](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_cyberduck_mac/){.external}, tenendo però presente che non si sostituisce alla documentazione ufficiale del software.

- **FTP Explorer**: questa interfaccia è disponibile nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}: seleziona il tuo servizio nella sezione `Hosting`{.action} del menu a sinistra, clicca sulla scheda `FTP - SSH`{.action} e poi sul pulsante `FTP Explorer`{.action}.

A questo punto, prosegui con lo step successivo.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### 2. Accedere al backup

Dall’interfaccia o dal software selezionato, dovrai connetterti al tuo spazio di storage per accedere ai dati del backup da recuperare. Per effettuare questa operazione è necessario disporre di nome utente FTP, password e hostname del server FTP.

Queste informazioni sono disponibili nella scheda `FTP - SSH`{.action} del tuo hosting. Se non possiedi più la password, segui le indicazioni descritte nella guida [Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}.

![backupftp](images/backupftp-step4.png){.thumbnail}

Una volta effettuato il login, dovrai aggiungere al tuo nome utente FTP il suffisso corrispondente al backup che utilizzerai, come indicato qui sotto:

|Data del backup|Suffisso da aggiungere|Esempio di nome utente completo|
|---|---|---|
|Il giorno stesso alle 00:01|-snap0|utenteftp**-snap0**|
|Il giorno precedente alle 00:01|-snap1|utenteftp**-snap1**|
|Due giorni prima alle 00:01|-snap2|utenteftp**-snap2**|
|La domenica precedente alle 01:00|-snap3|utenteftp**-snap3**|
|La domenica di due settimane prima alle 01:00|-snap4|utenteftp**-snap4**|

Sostituisci l’informazione generica “utenteftp” con il tuo nome utente FTP principale, conservando il suffisso che indica la data del backup che intendi ripristinare.

Il metodo di accesso allo spazio di storage differisce in base all’interfaccia o al software utilizzato. L’immagine qui sotto, ad esempio, ti mostra l’interfaccia di connessione di FTP Explorer.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### 3. Recuperare i file

A questo punto recupera i file da ripristinare esplorando il contenuto del tuo spazio di storage. L’operazione differisce a seconda del software o dell’interfaccia utilizzati.

Prima di passare allo step successivo, assicurati di aver recuperato tutti i file necessari e poi esci dallo spazio di storage.

#### 4. Ripristinare i file

Dopo aver recuperato i file, accedi di nuovo allo storage senza aggiungere suffissi al nome utente FTP: ti connetterai al contenuto corrente del tuo storage e non a un backup precedente.

A questo punto non ti resta che ripristinare i file: recuperali esplorando il contenuto del tuo spazio di storage e scaricali sostituendoli ai file precedenti.

## Per saperne di più

[Hosting condiviso: guida all’utilizzo di FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/){.external}

[Hosting condiviso: guida all’utilizzo di Cyberduck (MAC)](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_cyberduck_mac/){.external}

[Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.