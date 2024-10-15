---
title: Domande frequenti sulla soluzione Zimbra OVHcloud
excerpt: "Ritrova le domande relative alla migrazione a Zimbra per il servizio MX Plan di OVHcloud"
updated: 2024-10-10
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Nell'ambito dell'evoluzione dell'offerta MX Plan, dall'attuale soluzione che utilizza la webmail Outlook Web App (OWA) è prevista una migrazione verso la soluzione Zimbra e la sua webmail.

Se sei interessato da questa migrazione, qui trovi le domande più frequenti al riguardo.

### Zimbra, che cos'è?

Zimbra è una popolare soluzione collaborativa open source. Verrai migrato a una versione professionale (Zimbra Network Edition) di questa soluzione.

Zimbra propone numerose funzionalità che saranno disponibili prossimamente nei cataloghi OVHcloud.

### Quali sono le differenze tra le Webmail Outlook Web App (OWA) e Zimbra?

Zimbra offre le stesse funzionalità e un'ergonomia simile a OWA. Una guida all’utilizzo di Zimbra è già disponibile a [questo indirizzo](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Come configurare un indirizzo email su un client di posta?

Consulta la nostra pagina "[Configurare un indirizzo email Zimbra su un client di posta](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)".

### La migrazione apre nuove funzionalità?

La migrazione alla nuova Webmail mantiene lo stesso livello di servizio del precedente.

### Quando avrà luogo la migrazione dei miei servizi?

Riceverai email di notifica per ogni servizio **2 settimana** e poi **1 giorno** prima del trasferimento.

I servizi saranno migrati progressivamente, quindi è possibile che i diversi servizi siano migrati con diverse settimane di ritardo.

### Come preparare il trasferimento a Zimbra?

La migrazione non richiede alcuna azione da parte tua relativamente al contenuto degli account email.

Durante la fase di migrazione è tuttavia necessaria una breve interruzione del servizio. È quindi consigliabile informare gli utenti quando ti verrà comunicata la data della migrazione dei tuoi account email.

### Hai operazioni da effettuare durante la migrazione a Zimbra?

Il processo di migrazione è stato ideato per ridurre al minimo l'impatto sui clienti. Non sono previste operazioni da parte tua.

Non sono previste operazioni da parte tua.

### È necessario apportare modifiche allo Spazio Cliente OVHcloud?

Non sono previste modifiche nello Spazio Cliente. A causa della nuova soluzione adottata, alcune funzionalità minori potrebbero non essere disponibili nelle prime settimane successive alla migrazione.

Consulta l'elenco delle funzionalità e il loro stato per questa migrazione [alla fine delle FAQ](#features).

### Dovrò riconfigurare il mio client di posta?

No, la migrazione non richiede una riconfigurazione del client di posta.

Per modificare la password è necessario inserire la nuova password nel client di posta.

### La migrazione modifica la fatturazione del tuo servizio?

No, la migrazione alla nuova Webmail Zimbra è inclusa nella tua offerta. La parte relativa alla fatturazione o al contratto del servizio MX Plan non subirà modifiche.

### Dove posso trovare delle guide?

Una guida all’utilizzo di Zimbra è già disponibile a [questo indirizzo](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Dove saranno ospitate le mie email dopo la migrazione?

La migrazione avviene nei nostri datacenter in Francia. I tuoi dati restano in Francia.

### Ci saranno cambiamenti nel trattamento dei miei dati?

Non sono previste modifiche per quanto riguarda il trattamento dei dati e il loro utilizzo. Tutte le informazioni relative al contratto della soluzione MX Plan sono disponibili online.

### Come restare sulla Webmail attuale (OWA)?

Se lo desideri, è possibile migrare in qualsiasi momento verso un servizio che utilizza la webmail OWA, ovvero Email Pro o Exchange. Per farlo, consulta la nostra guida " [Migrare un indirizzo email MX Plan verso un account Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel) ".

### Posso oppormi alla migrazione?

No. OVHcloud si impegna a fornire un servizio con il miglior rapporto qualità/prezzo per le sue offerte MX Plan. Per questo motivo abbiamo scelto di migrare le offerte attuali verso la soluzione Zimbra.

Tuttavia, è possibile continuare a usufruire dell’interfaccia OWA [migrando i tuoi account email verso una soluzione Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

### Puoi disattivare la tua offerta MX Plan?

Per disattivare il servizio nella sezione "I tuoi servizi" dello spazio OVHcloud, consulta la sezione MX Plan della nostra guida " [Come disattivare i servizi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services#mxplan) ".

### Le funzionalità mantenute, sospese o eliminate durante la migrazione verso Zimbra. <a name="features"></a>

| Funzione | Descrizione | Stato |
|-|-|-|
|**Gestione dell’account email dallo Spazio Cliente**<br>(Password, alias, quota)|Mantenuta|✅|
|**Offerte e fatturazione**|Mantenute|✅|
|**Reindirizzamento / Alias / mailing list dallo Spazio Cliente**|Mantenuti|✅|
|**Configurazione DNS**<br>(SPF/MX/SRV)|Mantenuta|✅|
|**Deleghe account email**|Mantenute, tramite la Webmail|✅|
|**Connessione a programmi di posta elettronica**<br>(IMAP/POP)|Mantenuta, nessuna modifica alla configurazione necessaria.|✅|
|**Contenuto dell'account email**<br>(email, cartelle, contatti)|Migrato|✅|
|**Email ricevute durante il processo di migrazione**|Consegnate|✅|
|**Risposta automatica / Segreteria**|Mantenuta|✅|
|**Regola casella di posta in arrivo**|- Le regole configurate dal tuo client di posta saranno invariate.<br>- Le regole configurate dalla Webmail OWA saranno migrate verso la Webmail Zimbra. Solo una minima parte delle norme non potrà essere migrata a causa di incompatibilità. Le informazioni verranno inviate sotto forma di un’email sull’account email dell’utente e potranno essere ricreate manualmente.<br>- *Regola non compatibile*: regola che utilizza due tipi di condizioni, ad esempio AND e OR simultaneamente. Ad esempio, se il messaggio viene ricevuto da (**john@mydomain.ovh** O **mary@mydomain.ovh**) E l'oggetto contiene "fattura", sposta nella cartella "Importante"|⚠️|
|**Firma personale**|- Le firme configurate dal tuo client di posta non verranno modificate.<br>- Le firme configurate dalla Webmail OWA non verranno migrate a causa della formattazione.|⚠️|
|**Blocca/Autorizza**|Questa funzionalità, che permette di bloccare email provenienti da un dominio o indirizzo email specifico, non sarà presente su Zimbra. Tuttavia, questo comportamento può essere facilmente ricreato tramite una regola di posta in arrivo da Zimbra.|❌|
|**Piè di pagina**<br>(firma di un dominio configurabile dallo Spazio Cliente)|Questa funzionalità non sarà presente sulla nuova infrastruttura Zimbra. È comunque possibile configurare una firma a livello di account email.|❌|
|**Politica di Sicurezza**|Questa funzionalità dello Spazio Cliente che permette di modificare la politica di gestione delle password non sarà presente, in un primo momento, sulla soluzione Zimbra.<br>La politica di sicurezza applicata di default sulle password richiede almeno 10 caratteri alfanumerici, 1 carattere speciale, 1 maiuscolo.|❌|
|**Spoofing**|Lo spoofing consiste nell'inviare un'email da un'identità diversa dall'account email su cui ti sei autenticato. Questa pratica è incompatibile con i protocolli di sicurezza SPF e DKIM necessari per la corretta consegna delle email.<br>Da Zimbra, è possibile configurare un'altra identità diversa dall'account email utilizzato, a condizione che sia applicata una delega.|❌|
|**Supporto per il protocollo di sicurezza TLS (Transport Layer Security) 1.0 e 1.1.**|Le versioni 1.0 e 1.1 sono considerate vulnerabili agli attacchi e non soddisfano più gli standard di sicurezza attuali.<br>Se il browser utilizzato non supporta **come minimo il protocollo TLS 1.2**, si consiglia di installare gli ultimi aggiornamenti di sicurezza e funzionalità.|❌|

## Per saperne di più

[MX Plan - Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>.
