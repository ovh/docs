---
title: FAQ email OVHcloud
excerpt: "Rileggi le domande più frequenti sulle email"
updated: 2025-05-21
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## FAQ e-mail

In questa pagina vengono fornite le domande più frequenti sull’utilizzo delle email in base ai servizi di posta elettronica di OVHcloud.

### Le offerte di posta elettronica in OVHcloud

OVHcloud propone attualmente 4 offerte email. Per comprenderne le specificità, naviga attraverso le schede seguenti:

> [!tabs]
> **Email/MX Plan**
>>
>> ![MX Plan](images/mxplan01.png){.thumbnail .w-500}
>>
>> 1. Il servizio email più datato di OVHcloud, che include le funzioni essenziali di un servizio di posta con 5 GB di spazio di storage per ogni account email.
>> 2. Incluso nelle offerte di hosting Web e può essere ordinato dallo [Spazio Cliente OVHcloud](/links/manager).
>> 3. Questa soluzione è disponibile con 3 diverse tecnologie di posta. **Roundcube**, **OWA** (Outlook Web Access) e **Zimbra**.
>>
> **Zimbra Mail**
>>
>> ![Zimbra Mail](images/zimbra01.png){.thumbnail .w-500}
>>
>> 1. La soluzione email più recente di OVHcloud propone un servizio email flessibile e scalabile su tre livelli di offerte e funzionalità.
>> 2. È possibile ordinare un account Zimbra dallo [Spazio Cliente OVHcloud](/links/manager) o direttamente da [ovhcloud.com](/links/web/email).
>> 3. Come indica il nome, utilizza l’interfaccia **Zimbra**.
>>
> **Email Pro**
>>
>> ![Email Pro](images/emailpro01.png){.thumbnail .w-500}
>>
>> 1. Offerta email basata sulla tecnologia Exchange, che offre funzionalità essenziali con uno spazio di storage di 10 GB.
>> 2. È possibile ordinare un account Email Pro dallo [Spazio Cliente OVHcloud](/links/manager) o direttamente da [ovhcloud.com](/links/web/email).
>> 3. Questa soluzione utilizza l’interfaccia Webmail **OWA** (Outlook Web Access).
>>
> **Exchange**
>>
>> ![Exchange](images/exchange01.png){.thumbnail .w-500}
>>
>> 1. Offerta email completa che dispone di funzionalità collaborative con 50 GB o 300 GB di spazio di storage.
>> 2. Incluso nelle offerte di hosting Web e può essere ordinato dallo [Spazio Cliente OVHcloud](/links/manager).
>> 3. Questa soluzione utilizza l’interfaccia Webmail **OWA** (Outlook Web Access).
>>

> [!success]
>
> Tutte le soluzioni di posta elettronica OVHcloud sono soggette alle domande riportate di seguito, a meno che non sia specificato diversamente.

/// details | Quali sono le differenze tra le tecnologie di posta elettronica utilizzate dalle soluzioni **MX Plan**?

Il servizio MX Plan si distingue per l’evoluzione che si basa su tre tecnologie email distinte. Ognuna dispone della propria interfaccia Webmail:

- **Roundcube**.
- **OWA** (Outlook Web Access).
- **Zimbra**.

Questa diversità di tecnologie implica una diversa ergonomia di funzionamento per ogni interfaccia. Alcune funzionalità possono essere configurate dallo Spazio Cliente, altre dalla Webmail.

Di seguito trovi una tabella riassuntiva delle principali funzionalità email, ordinate per tecnologia e percorso di configurazione:

![MX plan](images/email_feature_table.png){.thumbnail .w-500}

///

/// details | Come identificare la tecnologia utilizzata sulla tua offerta **MX Plan**?

La tecnologia di posta utilizzata per il servizio MX Plan è caratterizzata dall’interfaccia della sua Webmail. Per identificarlo dallo Spazio Cliente, segui questo percorso:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Accedi alla sezione `Web Cloud`{.action}.
1. Clicca su `MX Plan`{.action}.
1. Seleziona il dominio.
1. Nella scheda `Informazioni generali`{.action}, selezionata di default.
1. Aumenta la tecnologia utilizzata sotto la voce **Webmail**.

![MX plan](images/technology-email.png){.thumbnail .w-500}

///


/// details | Cosa è necessario sapere prima di creare un indirizzo email?

Creare un indirizzo email non è un'operazione complessa, ma è necessario rispettare alcune regole per definire il **nome del tuo indirizzo email** e la sua **password**.

Il **nome dell’indirizzo email** deve rispettare queste regole:

- Minimo 2 caratteri.
- massimo 32 caratteri.
- Nessun carattere accentato.
- Nessun carattere speciale ad eccezione dei caratteri seguenti: `.`, `,`, `-` e `_`.

La **password** deve rispettare queste regole:

- minimo 9 caratteri.
- massimo 30 caratteri.
- Nessun carattere accentato.

> [!warning]
> Per motivi di sicurezza, non utilizzare due volte la stessa password. Sceglierne uno che non contenga informazioni personali (ad esempio, non inserire cognome, nome e data di nascita). Cambialo regolarmente.

///

/// details | Cosa fare se non ricevo più le email?

Qui sotto trovi le principali ragioni del mancato ricevimento delle tue email.

1. **Software di posta elettronica**: Un problema di ricezione email è spesso legato alla configurazione del tuo indirizzo e-mail sul tuo client di posta (Outlook, Mail di macOS, Thunderbird, ecc.). Per verificarlo, accedi alla [webmail](/links/web/email). Se nella casella di posta in arrivo della Webmail vengono rilevati messaggi che non sono presenti nel client di posta, il problema potrebbe essere causato dalla configurazione del client di posta. Per maggiori informazioni, consulta la nostra pagina "[Impossibile inviare o ricevere email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Configurazione DNS**: Il servizio di posta elettronica associato a un dominio. Nella sua zona DNS, i record MX designano i server di ricezione email. Se di recente hai modificato i tuoi server DNS o la tua zona DNS, è possibile che i record MX siano stati "tagliati". Per maggiori informazioni, consulta la nostra pagina "[Impossibile inviare o ricevere email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Quota email superata**: Se la quota di spazio di archiviazione del tuo account email è raggiunta, non è più possibile ricevere email e il tuo mittente riceve un messaggio di errore che indica che il tuo account email è pieno. Gestire lo spazio di storage di un account email Per maggiori informazioni, consulta la nostra pagina "[Gestire lo spazio di storage di un account email ](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)".
1. **Regole della cartella della posta in arrivo**: È possibile che una regola della cartella della posta in arrivo impedisca la consegna di un'email nella cartella della posta in arrivo o la reindirizzi alla cartella SPAM. Consulta le tue regole dal tuo client di posta (Outlook, Mail di macOS, Thunderbird, ecc.) o dalla [webmail](/links/web/email).
1. **Incidente o manutenzione**: consulta la nostra pagina "[Web Cloud status](https://web-cloud.status-ovhcloud.com/)" per verificare se è in corso un’operazione sul tuo servizio di posta elettronica.

> [!primary]
>
> **Suggerimenti**: se non riesci ad accedere alla tua Webmail, è possibile che la tua password sia errata. Verifica la tua password e, se necessario, modificala dal tuo [Spazio Cliente OVHcloud](/links/manager) prima di effettuare nuovamente il login.

///

/// details | Cosa fare se non è possibile inviare le email?

1. **Software di posta elettronica**: Un difetto di invio può essere legato alla configurazione del tuo indirizzo e-mail sul tuo client di posta (Outlook, Mail di macOS, Thunderbird, ecc.). Per verificarlo, accedi alla [webmail](/links/web/email). Se ti accorgi di essere in grado di inviare email dalla Webmail, il problema è causato dalla tua configurazione software. Per maggiori informazioni, consulta la nostra pagina "[Impossibile inviare o ricevere email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Codice di errore**: quando si invia un messaggio e il server di destinazione lo rifiuta, in genere viene restituito un messaggio di errore con un codice di errore. Analizza il messaggio di errore e potrebbe indicarne il motivo (quota massima dell’account email raggiunto, indirizzo email del destinatario inesistente, ecc.). Per maggiori informazioni, consulta la nostra pagina "[Impossibile inviare o ricevere email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced)".
1. **Dimensione dell’email**: Che si tratti del tuo provider di posta o del server di destinazione, esiste un limite di dimensione per un’email. Ti consigliamo di trasmettere principalmente immagini o file pdf con dimensioni ridotte. Per file di grandi dimensioni, è preferibile utilizzare strumenti di trasferimento file come [plik.ovh](https://plik.ovh/).

///


/// details | Perché configurare record SPF e DKIM?

**SPF (Sender Policy Framework)**

che permette ai server di posta di verificare che le email siano state inviate da un server di fiducia. Questo protocollo è diventato indispensabile per legittimare gli scambi di email. Se il dominio del servizio di posta non è registrato come SPF, i messaggi di posta elettronica rischiano di essere considerati indesiderati dai destinatari.

Per maggiori informazioni su come configurare un record SPF sul tuo servizio di posta, consulta la nostra guida: "[Migliorare la sicurezza delle email tramite un record SPF](/pages/web_cloud/domains/dns_zone_spf)".

**DKIM (DomainKeys Identified Mail)**

Permette di firmare le email per evitare furti di identità. Questa firma funziona sul principio dell'hash combinato con una crittografia asimmetrica. Questo protocollo è complementare al SPF. Il record SPF conferma la legittimità del dominio, mentre il DKIM verifica che le email siano firmate dal servizio di posta corretto in fase di invio. Diventa anche un riferimento in termini di sicurezza email. Alcuni servizi di posta elettronica potrebbero inoltre considerare indesiderabile un messaggio di posta elettronica che non è protetto da una firma DKIM.

Per informazioni su come configurare un record DKIM sul servizio di posta, consulta la nostra guida: "[Migliorare la sicurezza delle email tramite un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)".

///


/// details | Come configurare il tuo indirizzo email e utilizzarlo con la Webmail?

È possibile configurare il tuo account email su un client di posta come Outlook, Thunderbird, Mail di macOS, ecc.
Per seguire la procedura, puoi consultare le nostre guide disponibili [qui](/products/web-cloud-email-collaborative-solutions-mx-plan).

> [!tabs]
> **Email e Zimbra Mail**
>>
>> **Computer Windows**
>> - [Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).
>> - [Thunderbird per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).
>> - [Posta per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
>> **Computer Apple Mac**
>> - [Outlook per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>> - [Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).
>> - [Thunderbird per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
>> **iPhone o iPad**
>> - [Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
>> **Smartphone o tablet Android**
>> - [Gmail per Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>
> **Email Pro**
>>
>> **Computer Windows**
>> - [Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016).
>> - [Thunderbird per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_thunderbird).
>> - [Posta per Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10).
>>
>> **Computer Apple Mac**
>> - [Outlook per macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016_mac).
>> - [Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos).
>> - [Thunderbird per macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_thunderbird_mac).
>>
>> **iPhone o iPad**
>> - [Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios).
>>
>> **Smartphone o tablet Android**
>> - [Gmail per Android](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).
>>
> **Microsoft Exchange**
>>
>> **Computer Windows**
>> - [Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016).
>> - [Thunderbird per Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird).
>> - [Posta per Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10).
>>
>> **Computer Apple Mac**
>> - [Outlook per macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).
>> - [Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos).
>> - [Thunderbird per macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird_mac).
>> 
>> **iPhone o iPad**
>> - [Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios).
>>
>> **Smartphone o tablet Android**
>> - [Gmail per Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).
>>

Attraverso la [Webmail](/links/web/email) è possibile accedere in qualsiasi momento alla tua casella di posta elettronica, da qualsiasi dispositivo connesso. Una volta creato il tuo account email, clicca qui per accedervi.

**Consigli e suggerimenti**: Se configuri il tuo account email su un client di posta, ti consigliamo di configurarlo con il protocollo IMAP. In questo modo, le email rimarranno salvate sul server e potrai consultarle ovunque dalla [Webmail](/links/web/email). Per conoscere la procedura, consulta [la nostra documentazione](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

///

/// details | Come gestire i tuoi servizi email?

Tutti gli indirizzi email possono essere gestiti dallo [Spazio Cliente OVHcloud](/links/manager). Una volta effettuato l’accesso, accedi al servizio interessato. A questo punto è possibile modificare la password degli indirizzi email, verificare il tasso di riempimento, creare nuovi indirizzi email o eliminare gli indirizzi esistenti.

**Suggerimenti**: sui servizi di posta MX Plan, è possibile delegare la gestione di un account email OVHcloud, pur continuando a tenerlo sotto controllo. Per farlo, è sufficiente configurare una delega dallo [Spazio Cliente OVHcloud](/links/manager). Per maggiori informazioni, consulta la [nostra documentazione](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation).

///

/// details | Cosa è necessario sapere prima di creare un indirizzo email?

Creare un indirizzo email non è un'operazione complessa, ma è necessario rispettare alcune regole per definire il **nome del tuo indirizzo email** e la sua **password**.

Il **nome dell’indirizzo email** deve rispettare queste regole:

- Minimo 2 caratteri.
- Massimo 32 caratteri.
- Nessun carattere accentato.
- Nessun carattere speciale ad eccezione dei caratteri seguenti: `.`,`,`, `-` e `_`.

La **password** deve rispettare queste regole:

- Minimo 9 caratteri.
- Massimo 30 caratteri.
- Nessun carattere accentato.

> [!warning]
> Per motivi di sicurezza, ti consigliamo di non utilizzare due volte la stessa password, di sceglierne una che non abbia alcun rapporto con le tue informazioni personali (ad esempio evita di inserire il tuo cognome, nome e data di nascita) e di rinnovarla regolarmente.

///

/// details | Come recuperare la password dimenticata?

Per motivi di sicurezza e riservatezza non è possibile **recuperare una password**. Come descritto nella nostra "[Modifica la password di un indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)", è necessario reimpostare la password se non la conosci più.

> [!primary]
>
> Se vuoi salvare una password, ti consigliamo di utilizzare un gestore di password come **Keepass** ad esempio.

///

/// details | Come limitare la ricezione di spam?

Per limitare la ricezione di SPAM, è possibile impostare filtri sulle email (chiamati "Filtri" nella soluzione MX Plan), per eliminare o spostare email nella cartella "posta indesiderata" fin dal loro arrivo.
Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), clicca su `Web Cloud`{.action} e clicca su `MX Plan`{.action}. Seleziona il dominio interessato, clicca sulla scheda `Email`{.action} e poi nella colonna `Filtri` clicca sull’icona "Gestisci i filtri dell’account".

Se nello Spazio Cliente non è presente la colonna `Filtri`, è necessario creare i filtri seguendo le regole di gestione della posta in arrivo di [Webmail](/links/web/email). Per maggiori dettagli, consulta questa guida: "[Regole della posta in arrivo dall’interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)".

**Consigli e suggerimenti**: Se imposti un filtro sulla ricezione di SPAM, è probabile che alcune email legittime vengano considerate come SPAM. Queste email vengono chiamate "falsi positivi". In tal caso, ti invitiamo a creare una richiesta di assistenza dal tuo [Spazio Cliente](/links/manager) per informarci. In questo modo potremo fare il necessario per fare in modo che queste email non vengano considerate come SPAM anche in futuro.

///


/// details | Il mio indirizzo email è pieno, non ho più spazio. Cosa posso fare?

Se hai attivato una delle nostre [soluzioni email OVHcloud](/links/web/emails) e uno dei tuoi account è pieno, consulta la nostra guida "[Gestire lo spazio di storage di un account email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Questa guida ti mostra come ottimizzare lo spazio disponibile o se è necessario cambiare il tuo servizio di posta per aumentare lo spazio di storage.

///

/// details | Voglio cambiare offerta email per il mio indirizzo, come posso farlo pur conservandone il contenuto?

Per modificare il tuo [servizio di posta](/links/web/emails) e usufruire di più spazio e funzionalità, conserva il contenuto del tuo indirizzo esistente. Per effettuare questa operazione, consulta le nostre guide alla migrazione:

- [Migrare un indirizzo email MX Plan verso un account Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrare gli indirizzi email da una piattaforma di posta elettronica OVHcloud a un’altra](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrare manualmente l’indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration).
- [Migrare account email tramite OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

///

/// details | La soluzione 365 Pro Plus include una licenza Skype?

La soluzione 365 Pro Plus non include una licenza Skype. È incluso solo il software Skype for Business.

///

/// details | Come trasferire senza interruzione di servizio email, sito Web, database e dominio sui server OVHcloud?

Consulta la guida "[Migrare il proprio sito Web e i servizi associati a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" per visualizzare gli step successivi.

///

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).