---
title: MX Plan - Configura il tuo account di posta elettronica su Mail per macOS
excerpt: Scopri come configurare il tuo indirizzo email MX Plan su Mail di macOS
updated: 2024-10-22
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Obiettivo

Gli account MX Plan possono essere configurati su client di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci. L'applicazione Mail su macOS è disponibile gratuitamente su tutti i Mac.

**Questa guida ti mostra come configurare il tuo indirizzo email MX Plan su Mail di macOS.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione "Per saperne di più" di questa guida.

## Prerequisiti

- Disporre di un account email MX Plan incluso nel servizio MX Plan o in una [soluzione di hosting Web OVHcloud](/links/web/hosting)
- Disporre del software Mail installato sul tuo Mac
- Disporre delle credenziali associate all’indirizzo email da configurare

## Procedura

### Aggiungi l'account

- **Al primo avvio dell'applicazione**: un assistente di configurazione apparirà direttamente e ti inviterà a scegliere il tipo di account.

- **Se è già stato impostato un account**: clicca su `Mail`{.action} in alto nello schermo e poi su `Account`{.action}.

Segui i passaggi di installazione cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Seleziona `Altro account Mail`{.action} e clicca su `Account Mail`{.action}.<br><br>
>> ![mailmac](images/mail-mac-email01.png){.thumbnail .w-400 .h-600}
>>
> **Step 2**
>>
>> Nella finestra "**Aggiungi account Mail**", inserisci le informazioni seguenti: <br><br>
>> - Un **Nome** per il tuo account email
>> - Il tuo **Indirizzo email**
>> - La **Password** del tuo indirizzo email<br>
>> ![mailmac](images/mail-mac-email02.png){.thumbnail .w-400 .h-600}
>>
> **Step 3**
>>
>> Nella finestra successiva, completa le informazioni:
>>
>> - **Indirizzo email**
>> - **Nome utente**: inserisci il tuo indirizzo email completo
>> - **Password**
>> - **Tipo di account**: seleziona `IMAP` (consigliato) o `POP`
>> - **Server di posta in arrivo**:<br>- **EUROPA**: Inserisci `imap.mail.ovh.net` o `ssl0.ovh.net`<br>- **AMERICA/ASIA**: Inserisci `imap.mail.ovh.ca`
>> - **Server di invio**:<br>- **EUROPA**: Inserisci `smtp.mail.ovh.net` o `ssl0.ovh.net`<br>- **AMERICA/ASIA**: Inserisci `smtp.mail.ovh.ca`
>>
>> Per completare la configurazione, clicca su `Accedi`{.action}
>>
>> > [!warning]
>> >
>> > È normale vedere apparire in rosso il messaggio "**impossibile verificare il nome o la password dell'account**" quando viene visualizzata la prima finestra. Tuttavia, se il messaggio persiste dopo la convalida, significa che le informazioni immesse sono errate.<br><br>
>>
>> ![mailmac](images/mail-mac-email03.png){.thumbnail .w-400 .h-600}

> [!warning]
>
> Se, dopo aver eseguito i passaggi di configurazione riportati di seguito, si verifica un errore di invio o di ricezione, vedere [Modifica impostazioni esistenti](#modify-settings)

### Utilizza l'indirizzo email

Una volta configurato l’indirizzo email, non ti resta che utilizzarlo! A partire da questo momento puoi inviare e ricevere messaggi.

OVHcloud propone anche un'applicazione Web che permette di accedere al tuo indirizzo email da un browser Internet. disponibile alla pagina [Webmail](/links/web/email) accessibile utilizzando le credenziali del tuo account. Se hai bisogno di aiuto per effettuare questa operazione, consulta [il tuo account dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) o [Utilizza il tuo indirizzo email dalla Webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

### Recuperare un backup del tuo indirizzo email

Se è necessario effettuare un'operazione che potrebbe comportare la perdita dei dati del tuo account email, ti consigliamo di effettuare un backup preliminare dell'account email in questione. Per effettuare questa operazione consulta il paragrafo "**Esporta**" nella sezione "**Mail su Mac OS**" della nostra guida [Migra manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#esportare).

### Modifica i parametri esistenti <a name="modify-settings"></a>

Se il tuo account email è già configurato e devi accedere alle impostazioni dell'account per modificarle:

- Clicca su `Mail`{.action} nella barra dei menu in alto nello schermo e poi su `Preferenze`{.action}.
- Seleziona l’account interessato nella colonna di sinistra e clicca su `Impostazioni del server`{.action}.
- Nella sezione `Server di ricezione (POP)` o `Server di ricezione (IMAP)`, inserisci il tuo indirizzo email completo nella casella `Nome utente`{.action} e la `Password`{.action} associata nell’apposita casella.
- Nella sezione `Server di invio (SMTP)` inserire l’indirizzo email completo nella casella `Nome utente`{.action} e la `Password`{.action} associata nell’apposita casella.
- Deseleziona le caselle `Gestisci automaticamente le impostazioni di connessione`{.action} per visualizzare le impostazioni di `Porta`{.action} e `Autenticazione`{.action}.
- Assicurati che le caselle `Utilizza TLS/SSL`{.action} siano selezionate.
- Nel menu a tendina `Autenticazione`{.action}, verifica che `Password` sia selezionata.
- Per le caselle `Nome host`{.action} e `Porta`{.action}, consulta i valori della sezione "[Promemoria dei parametri POP, IMAP e SMTP](#popimap-settings)". **Verifica che il tipo di server (IMAP, POP e SMTP) corrisponda alla tua regione (Europa o Asia Pacifica)**.

Per completare la configurazione, clicca su `Salva`{.action}.

![mailmac](images/mail-mac-email04.png){.thumbnail .w-400 .h-600}

> [!primary]
>
> **Modifica la configurazione**
>
> Se il tuo indirizzo email è configurato in **IMAP** e vuoi modificare questa configurazione in **POP**, elimina l’account su Mail di MacOS e poi ricrealo in **POP**.

### Richiamo dei parametri POP, IMAP e SMTP <a name="popimap-settings"></a>

Per la ricezione delle email, durante la scelta del tipo di account, ti consigliamo di utilizzare il **IMAP**. Tuttavia, è possibile selezionare **POP**.

> [!warning]
>
> È necessario rilevare il valore corrispondente alla tua localizzazione (**EUROPA** o **AMERICA/ASIA PACIFICA**)

- **Per una configurazione in POP**

|Informazione|Descrizione|
|---|---|
|Nome utente|Inserisci l'indirizzo email **completo**|
|Password|Inserisci la password dell’indirizzo email|
|Server **EUROPA** (in entrata)|pop.mail.ovh.net **o** ssl0.ovh.net|
|Server **AMERICA/ASIA PACIFICA** (in entrata)|pop.mail.ovh.ca|
|Porta|995|
|Tipo di sicurezza|SSL/TLS|

- **Per una configurazione in IMAP**

|Informazione|Descrizione|
|---|---|
|Nome utente|Inserisci l'indirizzo email **completo**|
|Password|Inserisci la password dell’indirizzo email|
|Server **EUROPA** (in entrata)|imap.mail.ovh.net **o** ssl0.ovh.net|
|Server **AMERICA/ASIA PACIFICA** (in entrata)|imap.mail.ovh.ca|
|Porta|993|
|Tipo di sicurezza|SSL/TLS|

Per l’invio delle email, se hai necessità di inserire manualmente le impostazioni **SMTP** nelle preferenze dell’account, trovi qui sotto le impostazioni da utilizzare:

- **Configurazione SMTP**

|Informazione|Descrizione|
|---|---|
|Nome utente|Inserisci l'indirizzo email **completo**|
|Password|Inserisci la password dell’indirizzo email|
|Server **EUROPA** (in uscita)|smtp.mail.ovh.net **o** ssl0.ovh.net|
|Server **AMERICA/ASIA PACIFICA** (in uscita)|smtp.mail.ovh.ca|
|Porta|465|
|Tipo di sicurezza|SSL/TLS|

> [!primary]
>
> **Modifica la configurazione**
>
> Quando configuri il tuo indirizzo email in **IMAP** e vuoi modificare la configurazione in **POP**, è necessario eliminare l'account di Mail da Mac e crearlo in **POP** per modificare la configurazione.

### Che fare se non riesco a ricevere/inviare le mie email?

- Se l'icona visualizzata nell'acquisizione riportata di seguito appare, si tratta di una disconnessione di rete. Verificare che la connessione Internet funzioni correttamente.

![mailmac](images/mail-mac-disconnect.png){.thumbnail .w-400 .h-600}

- Se l'icona visualizzata nell'acquisizione riportata di seguito appare, si tratta di un errore di sincronizzazione. Per verificare le impostazioni di configurazione dell’account email, consulta la sezione [Modifica le impostazioni esistenti](#modify-settings).

![mailmac](images/mail-mac-fail.png){.thumbnail .w-400 .h-600}

## Per saperne di più <a name="go-further"></a>

> [!primary]
>
> Per informazioni sulla configurazione di un indirizzo email dall’applicazione Mail su macOS, consulta [il centro assistenza Apple](https://support.apple.com/it-it/guide/mail/mail35803/mac).

[MX Plan - Configurare un account email su Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[Email Pro - Configurare un account email su Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)<br>
[Email Pro - Configurare un account email su Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios)

[Exchange - Configurare un account email su Mail di macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios)<br>
[Exchange - Configurare un account email su Mail per iPhone e iPad](pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos/guide.fr-fr.md)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).