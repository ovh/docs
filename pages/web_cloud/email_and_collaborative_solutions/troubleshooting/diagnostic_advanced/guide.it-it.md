---
title: Invio o ricezione delle email impossibile
excerpt: Come reagire in caso di malfunzionamenti durante l'invio o la ricezione delle email in OVHcloud
updated: 2026-02-20
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

## Obiettivo

Non è possibile ricevere o inviare email dal tuo client di posta o dalla Webmail?

**Questa guida ti mostra come diagnosticare un errore durante l'invio o la ricezione del servizio di posta elettronica OVHcloud.**

> [!primary]
>
> Per maggiori informazioni, consulta le nostre [FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

## Prerequisiti

- Disporre di una soluzione **MX Plan**, **Email Pro**, **Exchange** o **Zimbra**

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Accesso allo Spazio Cliente OVHcloud

**MX Plan:**

- **Link diretto:** [MX Plan](/links/control-panel/web-mx-plan)
- **Percorso di navigazione:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleziona il tuo servizio MX Plan

**Email Pro:**

- **Link diretto:** [Email Pro](/links/control-panel/web-email-pro)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Email Pro`{.action} > Seleziona la tua piattaforma

**Exchange:**

- **Link diretto:** [Exchange](/links/control-panel/web-exchange)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Exchange`{.action} > Seleziona la tua piattaforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## Procedura

> [!success]
>
> Identifica rapidamente, grazie alle opzioni **invio** e **ricezione**, il problema applicabile a ogni caso pratico qui sotto.

/// details | Il tuo servizio di posta elettronica e/o i tuoi account sono attivi? (**invio** e **ricezione**)

Per una corretta gestione delle email è necessario disporre di un'offerta attiva. Se la tua offerta email è associata a un'offerta di hosting, verifica che non sia scaduta. È possibile verificare questa informazione direttamente dallo Spazio Cliente. Allo stesso modo, anche il tuo nome di dominio deve essere attivo.

Verifica di essere aggiornato sui [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e sui [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei tuoi servizi.

Come verificare che i tuoi servizi siano operativi:

> [!tabs]
> **Nome di dominio**
>>
>> Accedi alla sezione `Web Cloud`{.action}, clicca su `Domini`{.action} e seleziona il tuo nome di dominio. Se il tuo nome di dominio è scaduto, ti verrà indicato in alto.
>>
> **Hosting Web**
>>
>> Vai alla sezione `Web Cloud`{.action}, clicca su `Hosting`{.action} e seleziona il tuo hosting. La data di scadenza o di rinnovo automatico del tuo hosting verrà indicata in alto.
>>
> **Account email MX Plan**
>>
>> Vai alla sezione `Web Cloud`{.action}, clicca su `Email`{.action} (o `MX Plan`{.action} a seconda della tua offerta) e seleziona il nome di dominio interessato. Clicca sulla scheda `Email`{.action}. Verifica lo stato dell'account email nella colonna `Bloccato per SPAM`.
>>
> **Email Pro**
>>
>> Seleziona la sezione `Web Cloud`{.action}, clicca su `Email Pro`{.action} e seleziona la tua piattaforma. Clicca sulla scheda `Account email`{.action}. Verifica lo stato dell'account email nella colonna `Stato`.
>>
> **Exchange**
>>
>> Accedi alla sezione `Web Cloud`{.action}, clicca su `Exchange`{.action} nella sezione **Microsoft** e seleziona la tua piattaforma. Clicca sulla scheda `Account email`{.action}. Verifica lo stato dell'account email nella colonna `Stato`.
>>
> **Zimbra**
>>
>> Accedi alla sezione `Web Cloud`{.action} e clicca su `Zimbra Mail`{.action}. Clicca sulla scheda `Account email`{.action}. Verifica lo stato dell'account email nella colonna `Stato`.

///

/// details | Non riesco a inviare e/o ricevere email dal mio client di posta (**invio** e/o **ricezione**)

Se utilizzi un client di posta sul tuo computer (Outlook, Mail di Mac, Thunderbird, ecc.) o sul tuo smartphone (iOS, Android, ecc.), e riscontri un malfunzionamento all'invio o alla ricezione:

1. Da un browser Internet, accedi alla [Webmail](/links/web/email) con l'indirizzo email interessato.
2. Verifica i parametri di configurazione in base al tuo servizio di posta elettronica e al client di posta o applicazione utilizzato:

> [!tabs]
> **Account email MX Plan**
>>
>> Per un'offerta **MX Plan**, vai alla [pagina delle nostre guide MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan) e verifica la configurazione del tuo client di posta utilizzando le guide disponibili nella sezione `Configura un'applicazione di posta elettronica sul tuo computer` o `Installazione di un'applicazione di posta elettronica sul telefono cellulare`, a seconda del dispositivo utilizzato.
>>
> **Email Pro**
>>
>> Per un'offerta **Email Pro**, vai alla [pagina delle nostre guide Email Pro](/products/web-cloud-email-collaborative-solutions-email-pro) e verifica la configurazione del tuo client di posta utilizzando le guide disponibili nella sezione `Configura un'applicazione di posta elettronica sul tuo computer` o `Installazione di un'applicazione di posta elettronica sul telefono cellulare`, a seconda del dispositivo utilizzato.
>>
> **Exchange**
>>
>> Per un'offerta **Exchange**, vai alla [pagina delle nostre guide Microsoft Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange) e verifica la configurazione del tuo client di posta utilizzando le guide disponibili nella sezione `Configura un'applicazione di posta elettronica sul tuo computer` o `Installazione di un'applicazione di posta elettronica sul telefono cellulare`, a seconda del dispositivo utilizzato.
>>
> **Zimbra**
>>
>> Per un'offerta **Zimbra**, vai alla [pagina delle nostre guide Zimbra](/products/web-cloud-email-collaborative-solutions-zimbra) e verifica la configurazione del tuo client di posta utilizzando le guide disponibili nella sezione `Configura un'applicazione di posta elettronica sul tuo computer` o `Installazione di un'applicazione di posta elettronica sul telefono cellulare`, a seconda del dispositivo utilizzato.

///

/// details | Non riesco a ricevere email perché il mio indirizzo email è pieno, non ho più spazio. Cosa posso fare?

Se hai attivato [una delle nostre soluzioni email OVHcloud](/links/web/emails) e uno dei tuoi account è pieno, consulta la nostra guida "[Gestire lo spazio di storage di un account email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Questa guida ti mostra come ottimizzare lo spazio disponibile o se è necessario cambiare il tuo servizio di posta per aumentare lo spazio di storage.

///

/// details | Le email sono funzionali dalla Webmail? (**invio** e/o **ricezione**)

Per assicurarti che il malfunzionamento non sia associato a un errore di configurazione, effettua un test di invio e di ricezione direttamente dalla Webmail di OVHcloud. Se tutto funziona correttamente, verifica la configurazione del tuo software tramite le guide disponibili.

Dal browser del vostro computer o da uno smartphone, andate sull'indirizzo [Webmail](/links/web/email).

![webmail](images/webmail.png){.thumbnail}

///

/// details | Non riesco a connettermi alla Webmail

Assicurati di avere la password giusta. Se necessario, è possibile modificarlo. Verifica che la doppia autenticazione sia attiva ([solo Exchange](/links/web/emails-hosted-exchange)).

Come modificare la password di un indirizzo email:

> [!tabs]
> **Account email MX Plan**
>>
>> Per una soluzione **MX Plan**, consulta la guida "[Modificare la password di un indirizzo email MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)".
>>
> **Email Pro**
>>
>> Per un'offerta **Email Pro**, seleziona la sezione `Web Cloud`{.action}, clicca su `Email Pro`{.action} e seleziona la tua piattaforma. Nella scheda `Account email`{.action}, clicca sul pulsante `...`{.action} e clicca su `Modifica`{.action} per modificare la password.
>>
> **Exchange**
>>
>> Per un'offerta **Exchange**, accedi alla sezione `Web Cloud`{.action}, clicca su `Exchange`{.action} nella sezione **Microsoft** e seleziona la tua piattaforma. Nella scheda `Account email`{.action}, clicca sul pulsante `...`{.action} e clicca su `Modifica`{.action} per modificare la password. <br> Per verificare che la doppia autenticazione sia attiva, consulta la guida "[Configurare la doppia autenticazione su un account Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_2fa_exchange)".
>>
> **Zimbra**
>>
>> Per un'offerta **Zimbra**, accedi alla sezione `Web Cloud`{.action} e clicca su `Zimbra Mail`{.action}. Nella scheda `Account email`{.action}, clicca sul pulsante `⋮`{.action} e clicca su `Modificare`{.action} per modificare la password.

///

/// details | Sul tuo servizio è in corso un incidente o una manutenzione? (**invio** e/o **ricezione**)

È possibile verificare i diversi task in corso su <https://web-cloud.status-ovhcloud.com/>

- Per **MX Plan**, verifica nella sezione `Email`
- Per **Email Pro**, accedi alla sezione `Microsoft`
- Per **Exchange**, accedi alle sezioni `Hosted Microsoft`, `Private Microsoft` e `Trusted Microsoft` a seconda della tua offerta.
- Per **Zimbra**, accedi alla sezione `Zimbra`

///

/// details | Il puntamento del nome di dominio verso il tuo servizio di posta è corretto? (**ricezione**)

Verifica che il tuo nome di dominio punti correttamente verso i server di posta OVHcloud. Per fare ciò, nella tua zona DNS devono essere configurati record di tipo MX. <br>Consulta la nostra guida "[Aggiungere un record MX alla configurazione del nome di dominio](/pages/web_cloud/domains/dns_zone_mx)".

![DNSzone](images/DNS.png){.thumbnail}

> [!primary]
>
> Per verificare la configurazione DNS del tuo nome di dominio, indipendentemente dal suo registrar, puoi utilizzare lo strumento [Zone Master](https://zonemaster.net/), utilizzando la nostra documentazione "[Tutorial - Utilizzo di Zonemaster](/pages/web_cloud/domains/dns_zonemaster)".

///

/// details | Dopo l'invio di un'email, ricevi un messaggio che indica che la tua email non ha potuto essere inviata, con un codice a 3 cifre (**invio**)

Si tratta di un ritorno di errore SMTP. Ciò indica che lo scambio tra il server di invio e il server di posta in entrata non è stato possibile. Il codice serve a determinare il tipo di errore riscontrato dal server. In genere è accompagnato da un messaggio che illustra in dettaglio tale errore.

Una risposta SMTP è costituita da un numero di tre cifre. Le tre cifre della risposta hanno un significato particolare:

- la prima cifra indica se la risposta è corretta, cattiva o incompleta. Un cliente SMTP sarà in grado di determinare la sua prossima azione esaminando la prima cifra;
- La seconda e la terza cifra forniscono ulteriori informazioni.

Ci sono quattro possibili valori per la prima cifra del codice di risposta:

|Codice|Descrizione|
|---|---|
|2 xx|Risposta positiva: l'azione richiesta è stata effettuata correttamente. È possibile inoltrare una nuova richiesta.|
|3 xx|Risposta positiva temporanea: l'ordine è stato accettato, ma l'azione richiesta è in attesa di ulteriori informazioni. Il cliente SMTP dovrebbe inviare un altro ordine che specifichi questa informazione.|
|4 xx|Risposta negativa di completamento transitorio: l'ordine non è stato accettato e l'azione richiesta non è stata eseguita. Tuttavia, la condizione dell'errore è temporanea e l'azione può essere nuovamente richiesta.|
|5 xx|Risposta negativa: l'ordine non è stato accettato e l'azione richiesta non è stata eseguita. Il cliente SMTP non dovrebbe ripetere la stessa richiesta.|

> [!primary]
>
> Utilizzare **Ctrl+F** / **Cmd+F** e inserire il codice di errore per trovarlo rapidamente nella tabella seguente.

Di seguito trovi la maggior parte dei codici di risposta negativi SMTP utilizzati dai server:

> [!tabs]
> Errori 4xx — Temporanei
>>
>> Un codice **4xx** indica che l'errore è temporaneo. Il messaggio può essere inviato nuovamente in un secondo momento. Identifica la causa e riprova dopo averla risolta.
>>
>> |Codici di risposta|Descrizione|Azione|
>> |---|---|---|
>> |420|Tempo superato, problema di connessione|Questo messaggio di errore viene restituito solo dai server mail GroupWise. Contatta l'amministratore del server di posta di destinazione|
>> |421|Servizio non disponibile, canale di trasmissione in corso di chiusura|Provenienza dall'errore indefinito, assicurati che l'invio verso un altro nome di dominio funzioni correttamente. In caso affermativo, riprova l'invio iniziale più tardi|
>> |432|Ricezione dell'email sul server Exchange bloccato|Questo messaggio di errore viene restituito solo dai server mail Microsoft Exchange. Contatta l'amministratore del server di posta di destinazione|
>> |449|Errore di routing|Questo messaggio di errore viene restituito solo dai server mail Microsoft Exchange. Microsoft consiglia di effettuare una diagnostica con il loro tool WinRoute|
>> |450|Azione di messaggeria richiesta non effettuata: casella email non disponibile (ad esempio, una casella email occupata o temporaneamente bloccata per motivi di sicurezza o per ragioni di blacklist)|Verifica che il tuo indirizzo IP del server di posta non sia inserito nella blacklist ([Spamhaus](https://check.spamhaus.org/)) e verifica che la tua email non contenga parole relative allo SPAM.|
>> |451|Azione richiesta abbandonata: Errore di trattamento locale|Ciò può essere dovuto a un sovraccarico temporaneo o a una verifica del record SPF del nome di dominio di emissione non corretto. Fai riferimento al messaggio aggiuntivo fornito dal server o contatta l'amministratore del server se questo persiste|
>> |452|Azione richiesta non effettuata: sistema di archiviazione insufficiente|Il tuo server di posta è "sovraccarico". Ciò potrebbe essere causato anche da troppi messaggi che cercano di essere inviati contemporaneamente. Verifica la tua casella di posta e riprova|
>> |455|Server incapace di ricevere le impostazioni|Attendi qualche tempo e prova a riprovare. In caso di malfunzionamento, contatta l'amministratore del server di posta del destinatario|
>>
> Errori 5xx — Permanenti
>>
>> Un codice **5xx** indica che l'errore è permanente. Il messaggio non verrà inviato automaticamente di nuovo. È necessario intraprendere azioni correttive prima di tentare un nuovo invio.
>>
>> |Codici di risposta|Descrizione|Azione|
>> |---|---|---|
>> |500|Errore di sintassi, ordine non riconosciuto (potrebbe includere errori come linea di comando troppo lunga)|Ciò è spesso causato dall'antivirus o dal firewall del mittente. Verifica questo e riprova|
>> |501|Errore di sintassi nei parametri o negli argomenti|Ciò è spesso causato da un indirizzo email di destinazione errato o da un problema di antivirus o firewall sul lato mittente. Verifica l'indirizzo di destinazione e il tuo antivirus o firewall|
>> |502|Ordine non implementato|I parametri o le opzioni utilizzati durante l'invio dell'email con il tuo server SMTP sono riconosciuti ma disattivati nella sua configurazione. Contatta il tuo provider di servizi|
>> |503|Il server ha riscontrato una brutta sequenza di comandi|In genere è necessario verificare l'autenticazione. Assicurati di essere autenticato correttamente sul server SMTP al livello di configurazione del tuo client di posta|
>> |504|Parametro di comando non implementato|I parametri o le opzioni utilizzati durante l'invio dell'email con il tuo server SMTP sono riconosciuti ma disattivati nella sua configurazione. Contatta il tuo provider di servizi|
>> |535|Perdita durante l'autenticazione|Le informazioni utente/password sono eliminate o l'invio è potenzialmente bloccato sul tuo indirizzo email. Dallo Spazio Cliente OVHcloud è possibile verificare lo stato dell'indirizzo email Se l'account è stato bloccato per Spam, è possibile sbloccare la password. Per maggiori informazioni, consulta la nostra guida "[Che fare in caso di account bloccato per invio di Spam ?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam)"|
>> |550|Azione richiesta non effettuata: casella di posta non disponibile|Il server di posta di destinazione non ha potuto verificare l'indirizzo email utilizzato. Questo problema è causato principalmente da un indirizzo email di destinazione non valido, ma può anche significare che il server di posta di destinazione ha problemi di firewall o di connettività. Verifica l'indirizzo email del destinatario e/o riprova|
>> |550 5.7.1|Email rejected per policy reason|Il server di posta di destinazione ha rifiutato l'indirizzo di posta elettronica di spedizione per motivi di politica di sicurezza. Questi motivi possono essere multipli, di solito sono dettagliati con il codice di errore. In alcuni casi può trattarsi di un indirizzo IP nella catena di trasmissione presente in un elenco di rifiuto. Per verificare la reputazione di un indirizzo IP, è possibile testarlo, ad esempio, su [MXtoolbox](https://mxtoolbox.com/blacklists.aspx) o verificare la catena di trasmissione di un'email dall'indirizzo interessato con [Mailtester](https://www.mail-tester.com/)|
>> |550 5.7.26|*This message does not have authentication information or fails to pass authentication checks*|L'e-mail è stata rifiutata perché il servizio di posta del mittente non ha SPF o DKIM configurati sul proprio nome di dominio.<br><br>Si consiglia di impostare un record SPF prioritario, compatibile con tutte le e-mail offerte. Usa la nostra guida "[Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)".<br><br>Se la tua offerta e-mail ha l'opzione DKIM, puoi metterla in atto utilizzando la nostra guida "[Migliora la sicurezza delle email con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)".|
>> |551|Utenti non locali|Questo viene generalmente utilizzato come strategia di prevenzione contro lo spam. Ti ricordiamo che il corriere di posta non è autorizzato per alcun motivo a trasferire il tuo messaggio verso un server diverso dal tuo. Contatta il tuo provider di servizi|
>> |552|Azione di messaggistica richiesta interrotta: spazio di storage superato|L'utente che hai cercato di contattare non ha più spazio disponibile per ricevere messaggi. Purtroppo, l'unica soluzione è contattare il destinatario con un altro metodo|
>> |553|Azione richiesta non effettuata: indirizzo email non autorizzato|La causa principale di questa operazione è in genere un indirizzo email di destinazione non corretto. Verifica che l'indirizzo email in questione sia corretto|
>> |554|Operazione fallita, "Nessun servizio SMTP qui"|Di solito è un problema di blacklist. Verifica che il tuo indirizzo IP del server di posta non sia inserito nella blacklist ([Spamhaus](https://check.spamhaus.org/))|
>> |555|MAIL FROM / RCPT TO, parametri non riconosciuti o non attuati|Il server SMTP in uscita non registra correttamente l'indirizzo email utilizzato nei parametri "Da" o "A". Verifica la correttezza degli indirizzi email indicati e verifica che non sia stato superato il limite definito da OVHcloud: 200 email/ora/account e 300 email/ora/ip|

///

## Per saperne di più

[FAQ E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)

[Migliora la sicurezza delle email con un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)

[Gestire lo spazio di storage di un account email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)

[Che fare in caso di account bloccato per invio di Spam ?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam)

Contatta la nostra [Community di utenti](/links/community).