--- 
title: "Configurare un indirizzo email Zimbra su un client di posta"
excerpt: "Scopri come configurare il tuo client di posta per consultare le email del tuo account Zimbra"
updated: 2024-10-10
--- 

<style>
.w-400 {
max-width:400px!important;
}
</style>

> [!warning]
>
> **Importante**
>
> L'offerta Zimbra è un prodotto in fase beta.
>
> È disponibile solo per coloro che hanno compilato il [modulo di iscrizione alla beta](https://labs.ovhcloud.com/en/zimbra-beta/).
>

## Obiettivo

Con l'offerta Zimbra, OVHcloud ti propone una piattaforma di messaggeria collaborativa open source che offre tutte le funzionalità necessarie ad un utilizzo professionale. In questa pagina trovi le informazioni necessarie per configurare i tuoi account email Zimbra sul tuo client di posta preferito.

**Questa guida ti mostra come configurare il client di posta per consultare le email del tuo account Zimbra**

## Prerequisiti

- Aver sottoscritto un account email sulla soluzione email Zimbra OVHcloud.
- Aver installato un client di posta elettronica sul dispositivo scelto.

## Procedura

### Configurare un account email <a name="mail-config"></a>

La configurazione dell’account email Zimbra utilizza gli stessi parametri della soluzione MX Plan, inclusa con gli hosting Web OVHcloud o disponibile solo in. Ecco perché i link di configurazione qui sotto hanno una dicitura "MX Plan" nel loro titolo.

Fare clic sulla scheda relativa al tipo di dispositivo in uso:

> [!tabs]
> **Computer Windows**
>>
>> - [Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Posta per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Computer Apple mac**
>>
>> - [Outlook per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone o iPad**
>>
>> - [Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone o Tablet Android**
>>
>> - [Gmail per Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interfaccia Web**
>>
>> - [Gmail Online Interface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Richiamo dei parametri POP, IMAP e SMTP <a name="popimap-settings"></a>

Per la ricezione delle email, durante la scelta del tipo di account, ti consigliamo di utilizzare il **IMAP**. Tuttavia, è possibile selezionare **POP**.

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

Per l’invio delle email, se hai necessità di inserire manualmente le impostazioni **SMTP** nelle preferenze dell’account, ecco i parametri da utilizzare:

- **Configurazione SMTP**

|Informazione|Descrizione|
|---|---|
|Nome utente|Inserisci l'indirizzo email **completo**|
|Password|Inserisci la password dell’indirizzo email|
|Server **EUROPA** (in entrata)|smtp.mail.ovh.net **o** ssl0.ovh.net|
|Server **AMERICA/ASIA PACIFICA** (in entrata)|smtp.mail.ovh.ca|
|Porta|465|
|Tipo di sicurezza|SSL/TLS|

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ soluzione Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Per prestazioni specializzate (referenziazione, sviluppo, etc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un'assistenza per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/link/supporto).

Contatta la nostra [Community di utenti](/links/community).