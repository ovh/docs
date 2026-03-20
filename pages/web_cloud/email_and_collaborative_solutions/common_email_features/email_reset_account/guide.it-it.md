---
title: "Elimina un account email"
excerpt: Come eliminare o reimpostare un indirizzo email sul servizio di posta
updated: 2026-02-19
---

## Obiettivo

Vuoi:

- Elimina un indirizzo email che non utilizzi più. 
- Reimposta un account email per utilizzarlo su un nuovo indirizzo email. 
- Reimposta un account email per disattivarlo.

**Come eliminare o reimpostare un indirizzo email sul servizio di posta**

## Prerequisiti

- Disporre di una soluzione email OVHcloud configurata precedentemente:
    - **MX Plan**, inclusa nelle nostre [soluzioni di hosting Web](/links/web/hosting), inclusa in un [Hosting gratuito 100M](/links/web/domains-free-hosting) o ordinata separatamente come soluzione autonoma.
    - [**Exchange**](/links/web/emails-exchange).
    - [**Email Pro**](/links/web/email-pro).
    - [**Zimbra**](/links/web/zimbra).
- Essere il contatto amministratore del servizio email interessato.
- Disporre delle informazioni di connessione agli account email interessati.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Accesso allo Spazio Cliente OVHcloud

**MX Plan:**

- **Link diretto:** [MX Plan](/links/control-panel/web-mx-plan)
- **Percorso di navigazione:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleziona il tuo servizio MX Plan

**Zimbra:**

- **Link diretto:** [Zimbra](/links/control-panel/web-zimbra)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

**Email Pro:**

- **Link diretto:** [Email Pro](/links/control-panel/web-email-pro)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Email Pro`{.action} > Seleziona la tua piattaforma

**Exchange:**

- **Link diretto:** [Exchange](/links/control-panel/web-exchange)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Exchange`{.action} > Seleziona la tua piattaforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

<a name="whichmxplan"></a>

> [!primary]
>
> **Identificare la tecnologia email della tua offerta MX Plan.**
>
> In base alla data di attivazione della tua offerta MX Plan o a una migrazione recente, la tecnologia email associata può differire. Questa tecnologia è caratterizzata dall'interfaccia del suo webmail. Per identificarla:
>
> - Dalla scheda `Informazioni generali`{.action}, rileva la tecnologia utilizzata sotto la dicitura **Webmail** presente nel riquadro `Abbonamento`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

## Procedura <a name="instructions"></a>

OVHcloud propone 4 soluzioni email, la nozione di eliminazione di un account è diversa a seconda della tua offerta.

- **Email MX Plan**: questa offerta è venduta sotto forma di un pack di più account email. Una volta eliminato un account, libera una posizione sul tuo pack.
- **Email Pro**, **Hosted Exchange** e **Zimbra**: queste offerte sono on demand, ordinerai un abbonamento individuale per account email. Per eliminare un indirizzo email è necessario procedere alla **reinizializzazione**. Una volta reimpostato l'account email, è possibile riutilizzarlo per creare un nuovo indirizzo email. Per [eliminare definitivamente l'abbonamento](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#elimina-account), è possibile disattivare l'account.

### Elimina o reinizializza un account email

Seleziona la scheda corrispondente al tuo servizio di posta:

> [!tabs]
> **MX Plan Roundcube**
>>
>> Per identificare la tecnologia email associata al tuo servizio MX Plan, fai riferimento alla sezione "[Identificare la tecnologia email della tua offerta MX Plan](#whichmxplan)" di questa guida.
>>
>> 1. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti.
>> 1. Clicca sul pulsante `...`{.action} a destra dell'account da modificare e poi clicca su `Elimina l'account`{.action}.
>>
>> ![email](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> Per identificare la tecnologia email associata al tuo servizio MX Plan, fai riferimento alla sezione "[Identificare la tecnologia email della tua offerta MX Plan](#whichmxplan)" di questa guida.
>>
>> 1. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti.
>> 1. Clicca sul pulsante `...`{.action} a destra dell'account da modificare e poi clicca su `Reimposta questo account`{.action}.
>>
>> ![email](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **Email Pro**
>>
>> 1. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti.
>> 1. Clicca sul pulsante `...`{.action} a destra dell'account da modificare e poi clicca su `Reimposta questo account`{.action}.
>>
>> Dopo la reinizializzazione del tuo account, per eliminarlo definitivamente, dovrai disattivarlo. Per effettuare questa operazione, consulta la nostra guida [Gestire la fatturazione dei tuoi account Email-Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro).
>>
>> ![email](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Clicca sulla scheda `Account email`{.action}.
>> 1. Clicca sul pulsante `...`{.action} a destra dell'account da modificare e poi clicca su `Reimposta`{.action}.
>>
>> Dopo la reinizializzazione del tuo account, per eliminarlo definitivamente, dovrai disattivarlo. Per effettuare questa operazione, consulta la nostra guida [Gestire la fatturazione dei tuoi account Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange).
>>
>> ![email](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti.
>> 1. Clicca sul pulsante `⋮`{.action} a destra dell'account da modificare e poi clicca su `Elimina`{.action}.
>>
>> ![email](images/email-zimbra-reset.png){.thumbnail}
>>

## Per saperne di più

[Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Iniziare a utilizzare la soluzione Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Iniziare a utilizzare la soluzione Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Iniziare a utilizzare Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Gestisci la fatturazione dei tuoi account Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Gestisci la fatturazione dei tuoi account Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
