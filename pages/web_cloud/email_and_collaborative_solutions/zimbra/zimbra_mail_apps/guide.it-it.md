---
title: "Zimbra - Configurare il proprio account e-mail su un client di posta"
excerpt: "Scopri come scegliere il metodo di configurazione adatto alla tua offerta Zimbra Starter o Pro e al tuo client di posta"
updated: 2026-05-04
---

## Obiettivo

Con l'offerta Zimbra, OVHcloud ti propone una piattaforma di messaggeria collaborativa open source che offre tutte le funzionalità necessarie per un utilizzo professionale. Questa guida ti aiuta a scegliere il metodo di configurazione adatto alla tua offerta Zimbra e al tuo client di posta.

**Scopri quale metodo scegliere per configurare il tuo account e-mail Zimbra sul client di posta che preferisci.**

## Prerequisiti

- Aver sottoscritto un account e-mail su una delle nostre [soluzioni Zimbra](/links/web/emails-zimbra) (**Zimbra Starter** o **Zimbra Pro**).
- Aver installato un client di posta sul dispositivo scelto.
- Possedere le credenziali di accesso dell'indirizzo e-mail da configurare.

<!-- CP-NAV-START:web-zimbra -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zimbra](/links/control-panel/web-zimbra)
- **Per accedere ai tuoi servizi:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Procedura

### Identificare la tua offerta Zimbra <a name="identifier-offre"></a>

Il metodo di configurazione da utilizzare dipende dalla tua offerta Zimbra. Le due offerte non supportano gli stessi protocolli.

| Offerta | Protocolli supportati | Funzionalità sincronizzate |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | Solo e-mail |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | E-mail, calendario, contatti, attività |

> [!primary]
>
> Per identificare la tua offerta, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), vai nella sezione `Web Cloud`{.action} e poi `Zimbra Mail`{.action}. Nella scheda `Account email`{.action}, l'offerta è indicata nella colonna **Piano** di ogni account.

### Configurare un account Zimbra Pro <a name="config-zimbra-pro"></a>

> [!success]
>
> Per sfruttare pienamente le funzionalità collaborative di Zimbra Pro (sincronizzazione di calendario, contatti e attività), utilizza i protocolli **ActiveSync** o **EWS** tramite le guide dedicate qui sotto. La configurazione IMAP/POP resta possibile, ma sincronizza solo le e-mail.

Fai clic sulla scheda corrispondente al tipo di dispositivo in uso:

> [!tabs]
> **Computer Windows**
>>
>> - [Outlook classico tramite ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Computer Apple Mac**
>>
>> - [Mail tramite EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook tramite EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone o iPad**
>>
>> - [Mail tramite ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook tramite ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Smartphone o tablet Android**
>>
>> - [Gmail tramite ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook tramite ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Configurare un account Zimbra Starter (o un account Zimbra Pro in IMAP/POP) <a name="mail-config"></a>

Per l'offerta **Zimbra Starter**, o se preferisci una configurazione IMAP/POP per il tuo account **Zimbra Pro**, utilizza le guide qui sotto.

> [!primary]
>
> Le guide qui sotto sono condivise con l'offerta MX Plan poiché i parametri IMAP/POP/SMTP sono assolutamente identici per le due offerte. È per questo che i link riportano la dicitura "MX Plan" nel loro titolo.

Fai clic sulla scheda corrispondente al tipo di dispositivo in uso:

> [!tabs]
> **Computer Windows**
>>
>> - [Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Posta per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Computer Apple Mac**
>>
>> - [Outlook per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone o iPad**
>>
>> - [Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone o tablet Android**
>>
>> - [Gmail per Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interfaccia web**
>>
>> - [Interfaccia online di Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Utilizzare l'applicazione mobile Zimbra <a name="config-zimbra-app"></a>

Compatibile con le offerte **Zimbra Starter** e **Zimbra Pro**, l'applicazione mobile Zimbra (Android e iOS) consente di accedere al tuo account tramite il protocollo nativo di Zimbra.

- [Configurare l'applicazione mobile Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Parametri IMAP, POP e SMTP di riferimento <a name="popimap-settings"></a>

Se il tuo client di posta richiede una configurazione manuale, utilizza i parametri seguenti.

#### Server di ricezione

Per la ricezione delle e-mail, consigliamo il protocollo **IMAP**. Il protocollo **POP** resta disponibile. Fai clic sulla scheda corrispondente al protocollo che preferisci:

> [!tabs]
> **IMAP (consigliato)**
>>
>> - **Nome utente**: indirizzo e-mail **completo**
>> - **Password**: password dell'indirizzo e-mail
>> - **Server EUROPA (in entrata)**: `imap.mail.ovh.net` **o** `ssl0.ovh.net`
>> - **Server AMERICA/ASIA-PACIFICO (in entrata)**: `imap.mail.ovh.ca`
>> - **Porta**: 993
>> - **Tipo di sicurezza**: SSL/TLS
>>
> **POP**
>>
>> - **Nome utente**: indirizzo e-mail **completo**
>> - **Password**: password dell'indirizzo e-mail
>> - **Server EUROPA (in entrata)**: `pop.mail.ovh.net` **o** `ssl0.ovh.net`
>> - **Server AMERICA/ASIA-PACIFICO (in entrata)**: `pop.mail.ovh.ca`
>> - **Porta**: 995
>> - **Tipo di sicurezza**: SSL/TLS
>>

#### Server di invio

Per l'invio delle e-mail, utilizza i seguenti parametri **SMTP**:

- **Nome utente**: indirizzo e-mail **completo**
- **Password**: password dell'indirizzo e-mail
- **Server EUROPA (in uscita)**: `smtp.mail.ovh.net` **o** `ssl0.ovh.net`
- **Server AMERICA/ASIA-PACIFICO (in uscita)**: `smtp.mail.ovh.ca`
- **Porta**: 465
- **Tipo di sicurezza**: SSL/TLS

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare l'offerta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurare l'applicazione mobile Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Utilizzare il webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sulla soluzione Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Per prestazioni specializzate (referenziazione, sviluppo, etc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un'assistenza all'utilizzo e alla configurazione delle tue soluzioni OVHcloud, ti proponiamo di consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
