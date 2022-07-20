---
title: Configurare un account email su un iPhone o un iPad
excerpt: Come configurare un account email MX Plan su un iPhone o un iPad
slug: servizio_email_guida_alla_configurazione_su_iphone_ios_91
section: Configurazione su smartphone
order: 01
---


> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 20/07/2022**

## Obiettivo

Gli account email del servizio MX Plan possono essere configurati su client o applicazioni di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un indirizzo email MX Plan su un iPhone o un iPad tramite l'applicazione Mail.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo sito. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Disporre di un account email MX Plan incluso nel servizio MX Plan o in una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Essere aggiornato nei [pagamenti](https://docs.ovh.com/it/billing/gestire-fatture-ovhcloud/#pay-bills) e [rinnovi](https://docs.ovh.com/it/billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#renewal-management) dei servizi associati (dominio e hosting web).
- Aver installato l'applicazione Mail sul proprio dispositivo iOS
- Disporre delle credenziali associate all’account email da configurare

## Procedura

### Aggiungi l'account

Sulla schermata Home del tuo dispositivo clicca su `Impostazioni`{.action} (icona a ruota dentata). L'aggiunta di un account si effettua in diversi modi, a seconda della tua versione iOS:

- **Per iOS 7, 8, 9 e 10**: clicca su `Mail, Contatti, Calendario`{.action}, poi su `Aggiungi account`{.action}. Infine seleziona Altro, poi Aggiungi account Mail. A questo punto, passa allo Step 5 della tabella seguente.

- **Per iOS 11**: clicca su `Account e password`{.action} e poi su `Aggiungi account`{.action}. Infine seleziona Altro, poi Aggiungi account Mail. A questo punto, passa allo Step 5 della tabella seguente.

- **Per le versioni attuali**: seguire le istruzioni riportate nella tabella seguente.

| | |
|---|---|
|![exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. Nelle `Impostazioni`, vai su `Mail`. <br><br> 2. Premi su `Account`.<br><br> 3. Clicca su `Aggiungi account`.<br><br> 4. Scegliete `Altro` in basso.|
|5. Clicca su `Aggiungi un account Mail`.<br><br>6. Inserisci il tuo **nome**, il tuo indirizzo **email**, la tua **password** e una **descrizione** del tuo account.<br><br>7. Clicca su `Avanti`.|![exchange](images/configuration-mail-ios-step02.png){.thumbnail}|
|![exchange](images/configuration-mail-ios-step03.png){.thumbnail}|8. Seleziona il tipo di server di ricezione `IMAP` (consigliato) o `POP`.<br><br>Nelle sezioni `SERVER DI RICEZIONE` e `SERVER DI INVIO`, nonostante la dicitura "facoltativo", inserisci: <br>- host **ssl0.ovh.net** <br>- il tuo **indirizzo email completo** nel nome utente <br>- la password del tuo indirizzo email|

Assicurati che, al termine della configurazione, la voce `Mail`{.action} sia selezionata in modo che l'applicazione possa utilizzare questo account e poi clicca su `Salva`{.action}.

Per verificare la corretta configurazione dell’account esegui un test di invio dall’applicazione Mail del tuo dispositivo.

Se hai necessità di inserire manualmente le preferenze per il tuo account, ecco i parametri da utilizzare con il nostro servizio MX Plan: 

- **Per una configurazione in IMAP**

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|993|
|In uscita|ssl0.ovh.net|Sì|465|

- **Per una configurazione in POP**

|Tipo di server|Nome del server|SSL|Porta|
|---|---|---|---|
|In entrata|ssl0.ovh.net|Sì|995|
|In uscita|ssl0.ovh.net|Sì|465|

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone un'applicazione Web che permette di accedere al tuo indirizzo email dal browser all'indirizzo <https://www.ovh.it/mail/>corrispondente. e accessibile con le credenziali del tuo account.

> [!primary]
>
> In caso di difficoltà a ricevere o inviare email, consulta le nostre [FAQ sui servizi di posta OVHcloud](https://docs.ovh.com/it/emails/faq-emails/).
>

## Per saperne di più

[Configurare un account Exchange su un iPhone o un iPad](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_configurazione_automatica_con_ios_iphone-ipad/){.external}

[Configurare un account Email Pro su un iPhone o un iPad](https://docs.ovh.com/it/emails-pro/configurazione-iphone-ios/){.external}

[FAQ e-mail](https://docs.ovh.com/it/emails/faq-emails/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.