---
title: FAQ email OVHcloud
updated: 2024-06-27
---

## FAQ e-mail

### Cosa fare se se è impossibile inviare o ricevere email?

La maggior parte delle volte, i problemi di invio e ricezione delle email sono dovuti alla configurazione del tuo indirizzo sul tuo client di posta elettronica. Per verificarlo, accedi alla [Webmail](/links/web/email) e effettua un test di invio e di ricezione a partire dal tuo indirizzo.

- Se l’indirizzo funziona correttamente, il problema potrebbe essere causato dalla configurazione del client di posta.
- Al contrario, se continui a riscontrare problemi nell’inviare o ricevere email, sono disponibili altre soluzioni.

Dopo aver inviato un’email sul tuo account email, ricevi un messaggio di errore? Se sì, ritrova il messaggio d’errore, che potrebbe indicarne il motivo (casella piena, casella non esistente, ecc.).

Puoi anche verificare che il tuo dominio consegni le e-mail al posto giusto. Per farlo, accedi allo [Spazio Cliente](/links/manager), seleziona la zona DNS del tuo dominio e consulta i record MX applicati. Questi record devono essere in questo formato “mx\*.mail.ovh.net.” (sostituisci l’asterisco \* con una cifra tra 0 e 3).
Se i record MX sono diversi, è possibile che tu disponga di un servizio di posta elettronica di un operatore diverso da OVHcloud.

**Consigli e suggerimenti**: Se non riesci ad accedere alla tua Webmail, è probabile che la tua password sia errata. Verifica la tua password e, se necessario, modificala dal tuo [Spazio Cliente OVHcloud](/links/manager) prima di effettuare nuovamente il login. Per questa procedura, consulta la [nostra guida](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password).

### Come configurare il tuo indirizzo email e utilizzarlo con la Webmail?

È possibile configurare il tuo account email su un client di posta come Outlook, Thunderbird, Mail di Mac, ecc.
Per seguire la procedura, puoi consultare le nostre guide disponibili [qui](/products/web-cloud-email-collaborative-solutions-mx-plan).

Attraverso la [Webmail](/links/web/email) è possibile accedere in qualsiasi momento alla tua casella di posta elettronica, da qualsiasi dispositivo connesso. Una volta creato il tuo account email, clicca qui per accedervi.

**Consigli e suggerimenti**: Se configuri il tuo account email su un client di posta, ti consigliamo di configurarlo con il protocollo IMAP. In questo modo, le email rimarranno salvate sul server e potrai consultarle ovunque dalla [Webmail](/links/web/email). Per conoscere la procedura, consulta [la nostra documentazione](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

### Come gestire i servizi di posta? 

Tutti gli indirizzi email possono essere gestiti dallo [Spazio Cliente OVHcloud](/links/manager). Una volta effettuato l’accesso, seleziona il servizio in questione. A questo punto è possibile modificare la password associata agli account di posta elettronica, verificare la percentuale di spazio utilizzato, creare nuovi indirizzi email o eliminare quelli esistenti.

**Suggerimenti**: le soluzioni email MX Plan consentono di delegare a un altro account OVHcloud la gestione di uno o più account di posta, continuando a mantenerne il controllo. Per effettuare questa operazione è sufficiente configurare una delega dallo [Spazio Cliente OVHcloud](/links/manager): accedi alla sezione `Email` nella colonna a sinistra e seleziona il dominio in questione, poi clicca sulla scheda `Email` e scegli una di queste opzioni:

- `Gestisci autorizzazioni`{.action}, nella parte destra dell’interfaccia, per delegare la gestione di tutti gli account di questo dominio
- `Gestisci la delega`{.action}, per delegare la gestione di un account specifico (clicca sul pulsante `...`{.action} in corrispondenza dell’account)

Ti ricordiamo che in entrambi i casi è necessario inserire l’identificativo cliente OVHcloud (NIC handle).

### Cosa è necessario sapere prima di creare un indirizzo email?

Creare un indirizzo email non è un'operazione complessa, ma è necessario rispettare alcune regole per definire il **nome del tuo indirizzo email** e la sua **password**.

Il **nome dell’indirizzo email** deve rispettare queste regole:

- Minimo 2 caratteri
- Massimo 32 caratteri
- Nessun carattere accentato
- Nessun carattere speciale ad eccezione dei caratteri seguenti: `.`,`,`, `-` e `_`

La **password** deve rispettare queste regole:

- Minimo 9 caratteri
- Massimo 30 caratteri
- Nessun carattere accentato

> [!warning]
> Per motivi di sicurezza, ti consigliamo di non utilizzare due volte la stessa password, di sceglierne una che non abbia alcun rapporto con le tue informazioni personali (ad esempio evita di inserire il tuo cognome, nome e data di nascita) e di rinnovarla regolarmente.

### Come recuperare la password dimenticata?

Per motivi di sicurezza e riservatezza non è possibile **recuperare una password**. Come descritto nella nostra "[Modifica la password di un indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)", è necessario reimpostare la password se non la conosci più.

> [!primary]
>
> Se vuoi salvare una password, ti consigliamo di utilizzare un gestore di password come **Keepass** ad esempio.

### Come limitare la ricezione di spam?  

Per limitare la ricezione di SPAM, è possibile impostare filtri sulle email (chiamati “Filtri” nella soluzione MX Plan), per eliminare o spostare email nella cartella “posta indesiderata” fin dal loro arrivo.
Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), sezione `Email` e seleziona il tuo dominio. Clicca sulla scheda `Email`{.action} e, nella colonna `Filtro`{.action}, clicca sul pulsante di azione.

Se nello Spazio Cliente non è presente la colonna `Filtro`{.action}, è necessario creare i filtri seguendo le regole di gestione della posta in arrivo di [Webmail](/links/web/email). Per maggiori dettagli, consulta questa guida: [Regole della posta in arrivo dall’interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

**Consigli e suggerimenti**: Se imposti un filtro sulla ricezione di SPAM, è probabile che alcune email legittime vengano considerate come SPAM. Queste email vengono chiamate “falsi positivi”. In tal caso, ti invitiamo a creare una richiesta di assistenza dal tuo [Spazio Cliente](/links/manager) per informarci. In questo modo potremo fare il necessario per fare in modo che queste email non vengano considerate come SPAM anche in futuro.

### Il mio indirizzo email è pieno, non ho più spazio. Cosa posso fare?

Se hai attivato [una delle nostre soluzioni email OVHcloud](/links/web/emails) e uno dei tuoi account è pieno, consulta la nostra guida "[Gestire lo spazio di storage di un account email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Questa guida ti mostra come ottimizzare lo spazio disponibile o se è necessario cambiare il tuo servizio di posta per aumentare lo spazio di storage.

### Voglio cambiare offerta email per il mio indirizzo, come posso farlo pur conservandone il contenuto?

Per modificare il tuo [servizio di posta](/links/web/emails) e usufruire di più spazio e funzionalità, conserva il contenuto del tuo indirizzo esistente. Per effettuare questa operazione, consulta le nostre guide alla migrazione:

- [Migrare un indirizzo email MX Plan verso un account Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Migrare gli indirizzi email da una piattaforma di posta elettronica OVHcloud a un’altra](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Migrare manualmente l’indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)
- [Migrare account email tramite OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)
- [Migrare un account Gmail verso un account email OVHcloud tramite OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail)

### La soluzione 365 Pro Plus include una licenza Skype?  

La soluzione 365 Pro Plus non include una licenza Skype. È incluso solo il software Skype for Business.

### Come trasferire senza interruzione di servizio email, sito Web, database e dominio sui server OVHcloud?

Consulta la guida "[Migrare il proprio sito Web e i servizi associati a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" per visualizzare gli step successivi.

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).