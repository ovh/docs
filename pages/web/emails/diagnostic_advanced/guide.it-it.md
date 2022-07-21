---
title: Invio o ricezione delle email impossibile
slug: i_codici_di_risposta_di_un_server_smtp
legacy_guide_number: g2272
excerpt: Come reagire in caso di malfunzionamenti durante l'invio o la ricezione delle email in OVHcloud
section: Diagnostica
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/07/2022**

## Obiettivo

Non è possibile ricevere o inviare email dal tuo client di posta o dalla Webmail?

**Questa guida ti mostra come diagnosticare un errore durante l'invio o la ricezione del servizio di posta elettronica OVHcloud.**

> [!primary]
>
> Per maggiori informazioni, consulta le nostre [FAQ](https://docs.ovh.com/it/emails/faq-emails/).

## Prerequisiti

- Disporre di una soluzione **MX Plan** o di una soluzione **Email Pro** o di una soluzione **Exchange**
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Il tuo servizio di posta elettronica e/o i tuoi account sono attivi?

Per una corretta gestione delle email è necessario disporre di un'offerta attiva. Se la tua offerta email è associata a un'offerta di hosting, verifica che non sia scaduta. È possibile verificare questa informazione direttamente dallo Spazio Cliente. Allo stesso modo, anche il tuo dominio deve essere attivo.

Verifica di essere aggiornato sui [pagamenti](https://docs.ovh.com/it/billing/gestire-fatture-ovhcloud/#pay-bills) e sui [rinnovi](https://docs.ovh.com/it/billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#renewal-management) dei tuoi servizi.

Come verificare che i tuoi servizi siano operativi:

- Per il tuo **dominio**, accedi alla sezione `Web Cloud`{.action}, clicca su `Domini`{.action} e seleziona il tuo dominio. Se il tuo dominio è scaduto, ti verrà indicato in alto.
- Per il tuo **hosting Web**, vai alla sezione `Web Cloud`{.action}, clicca su `Hosting`{.action} e seleziona il tuo hosting. La data di scadenza o di rinnovo automatico del tuo hosting verrà indicata in alto.
- Per un'offerta **MX Plan**, vai alla sezione `Web Cloud`{.action}, clicca su `Email`{.action} e seleziona il dominio interessato. Clicca sulla scheda `Account email`{.action}. Verifica lo stato dell'account email nella colonna `Stato`.
- Per un'offerta **Email Pro**, seleziona la sezione `Web Cloud`{.action}, clicca su `Email Pro`{.action} e seleziona la tua piattaforma. Clicca sulla scheda `Account email`{.action}. Verifica lo stato dell'account email nella colonna `Stato`.
- Per un'offerta **Exchange**, accedi alla sezione `Web Cloud`{.action}, clicca su `Microsoft`{.action}, clicca su `Exchange`{.action} e seleziona la tua piattaforma. Clicca sulla scheda `Account email`{.action}. Verifica lo stato dell'account email nella colonna `Stato`.

### Non riesco a inviare email dal mio client di posta

Se utilizzi un client di posta sul tuo computer (Outlook, Mail di Mac, Thunderbird, ecc.) o sul tuo smartphone (iOS, Android, ecc.), e riscontri un malfunzionamento all'invio o alla ricezione, verifica i parametri di configurazione in base al tuo servizio di posta elettronica e al client di posta o applicazione utilizzato.

- Per un'offerta **MX Plan**, nella sezione [Hosted email - MX Plan](https://docs.ovh.com/it/emails/) delle nostre guide **Web Cloud**.

- Per un'offerta **Email Pro**, nella sezione [Email Pro](https://docs.ovh.com/it/emails-pro/) delle nostre guide **Web Cloud**, verifica la configurazione del tuo client di posta nel paragrafo `Configurazione di un client di posta`.

- Per un'offerta **Exchange**, nella sezione [Soluzioni collaborative Microsoft](https://docs.ovh.com/it/microsoft-collaborative-solutions/) delle nostre guide **Web Cloud**, verifica la configurazione del tuo client di posta nel paragrafo `Configurazione di un client di posta elettronica Exchange` o del tuo smartphone nella `Varie`.

### Le email sono funzionali dalla Webmail?

Per assicurarti che il malfunzionamento non sia associato a un errore di configurazione, effettua un test di invio e di ricezione direttamente dalla Webmail di OVHcloud. Se tutto funziona correttamente, verifica la configurazione del tuo software tramite le guide disponibili.

Dal browser del vostro computer o da uno smartphone, andate sull'indirizzo <https://www.ovh.it/mail/>.

![webmail](images/webmail.png){.thumbnail}

### Non riesco a connettermi alla Webmail

Assicurati di avere la password giusta. Se necessario, è possibile modificarlo. Verifica che la doppia autenticazione sia attiva ([solo Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/)).

Come modificare la password di un indirizzo email:

- Per una soluzione **MX Plan**, consulta la guida [Modificare la password di un indirizzo email MX Plan](https://docs.ovh.com/it/emails/modificare-password-account-email-mxplan/).

- Per un'offerta **Email Pro**, seleziona la sezione `Web Cloud`{.action}, clicca su `Email Pro`{.action} e seleziona la tua piattaforma. Nella scheda `Account email`{.action}, clicca sul pulsante `...`{.action} e clicca su `Modifica`{.action} per modificare la password.

- Per un'offerta **Exchange**, accedi alla sezione `Web Cloud`{.action}, clicca su `Microsoft`{.action}, clicca su `Exchange`{.action} e seleziona la tua piattaforma. Nella scheda `Account email`{.action}, clicca sul pulsante `...`{.action} e clicca su `Modifica`{.action} per modificare la password. <br> Per verificare che la doppia autenticazione sia attiva, consulta la guida [Configurare la doppia autenticazione su un account Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/attiva_2fa_exchange/).

### Sul tuo servizio è in corso un incidente o una manutenzione?

È possibile verificare i diversi task in corso su <https://web-cloud.status-ovhcloud.com/> questo

- Per **MX Plan**, verifica nella sezione `Email`
- Per **Email Pro**, accedi alla sezione `Microsoft`
- Per **Exchange**, accedi alla sezione `Microsoft`

### Il puntamento del dominio verso il tuo servizio di posta è corretto?

Verifica che il tuo dominio punti correttamente verso i server di posta OVHcloud. Per fare ciò, nella tua zona DNS devono essere configurati record di tipo MX. <br>Consulta la nostra guida [Aggiungere un record MX alla configurazione del dominio](https://docs.ovh.com/it/domains/aggiungere-record-mx-configurazione-dominio/).

![DNSzone](images/DNS.png){.thumbnail}

### Dopo l'invio di un'email, ricevi un messaggio che indica che la tua email non ha potuto essere inviata, con un codice a 3 cifre

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

Di seguito trovi la maggior parte dei codici di risposta negativi SMTP utilizzati dai server:

|Codici di risposta|Descrizione|Azione|
|---|---|---|
|420|Tempo superato, problema di connessione|Questo messaggio di errore viene restituito solo dai server mail GroupWise. Contatta l'amministratore del server di posta di destinazione|
|421|Servizio non disponibile, canale di trasmissione in corso di chiusura|Provenienza dall'errore indefinito, assicurati che l'invio verso un altro dominio funzioni correttamente. In caso affermativo, riprova l'invio iniziale più tardi|
|432|Ricezione dell'email sul server Exchange bloccato|Questo messaggio di errore viene restituito solo dai server mail Microsoft Exchange. Contatta l'amministratore del server di posta di destinazione|
|449|Errore di routing|Questo messaggio di errore viene restituito solo dai server mail Microsoft Exchange. Microsoft consiglia di effettuare una diagnostica con il loro tool WinRoute|
|450|Azione di messaggeria richiesta non effettuata: casella email non disponibile (ad esempio, una casella email occupata o temporaneamente bloccata per motivi di sicurezza o per ragioni di blacklist)|Verifica che il tuo indirizzo IP del server di posta non sia inserito nella blacklist ([SpamHaus](https://check.spamhaus.org/){.external}) e verifica che la tua email non contenga parole relative allo SPAM.|
|451|Azione richiesta abbandonata: Errore di trattamento locale|Ciò può essere dovuto a un sovraccarico temporaneo o a una verifica del record SPF del dominio di emissione non corretto. Fai riferimento al messaggio aggiuntivo fornito dal server o contatta l'amministratore del server se questo persiste|
|452|Azione richiesta non effettuata: sistema di archiviazione insufficiente|Il tuo server di posta è "sovraccarico". Ciò potrebbe essere causato anche da troppi messaggi che cercano di essere inviati contemporaneamente. Verifica la tua casella di posta e riprova|
|455|Server incapace di ricevere le impostazioni|Attendi qualche tempo e prova a riprovare. In caso di malfunzionamento, contatta l'amministratore del server di posta del destinatario|
|500|Errore di sintassi, ordine non riconosciuto (potrebbe includere errori come linea di comando troppo lunga)|Ciò è spesso causato dall'antivirus o dal firewall del mittente. Verifica questo e riprova|
|501|Errore di sintassi nei parametri o negli argomenti|Ciò è spesso causato da un indirizzo email di destinazione errato o da un problema di antivirus o firewall sul lato mittente. Verifica l'indirizzo di destinazione e il tuo antivirus o firewall|
|502|Ordine non implementato|I parametri o le opzioni utilizzati durante l'invio dell'email con il tuo server SMTP sono riconosciuti ma disattivati nella sua configurazione. Contatta il tuo provider di servizi|
|503|Il server ha riscontrato una brutta sequenza di comandi|In genere è necessario verificare l'autenticazione. Assicurati di essere autenticato correttamente sul server SMTP al livello di configurazione del tuo client di posta|
|504|Parametro di comando non implementato|I parametri o le opzioni utilizzati durante l'invio dell'email con il tuo server SMTP sono riconosciuti ma disattivati nella sua configurazione. Contatta il tuo provider di servizi|
|535|Perdita durante l'autenticazione|Le informazioni utente/password sono eliminate o l'invio è potenzialmente bloccato sul tuo indirizzo email. Dallo Spazio Cliente OVHcloud è possibile verificare lo stato dell'indirizzo email Se l'account è stato bloccato per Spam, è possibile sbloccare la password. Per maggiori informazioni, consulta la nostra guida [Che fare in caso di account bloccato per invio di Spam ?](https://docs.ovh.com/it/microsoft-collaborative-solutions/blocco-per-spam/)|
|550|Azione richiesta non effettuata: casella di posta non disponibile|Il server di posta di destinazione non ha potuto verificare l'indirizzo email utilizzato. Questo problema è causato principalmente da un indirizzo email di destinazione non valido, ma può anche significare che il server di posta di destinazione ha problemi di firewall o di connettività. Verifica l'indirizzo email del destinatario e/o riprova|
|551|Utenti non locali|Questo viene generalmente utilizzato come strategia di prevenzione contro lo spam. Ti ricordiamo che il corriere di posta non è autorizzato per alcun motivo a trasferire il tuo messaggio verso un server diverso dal tuo. Contatta il tuo provider di servizi|
|552|Azione di messaggistica richiesta interrotta: spazio di storage superato|L'utente che hai cercato di contattare non ha più spazio disponibile per ricevere messaggi. Purtroppo, l'unica soluzione è contattare il destinatario con un altro metodo|
|553|Azione richiesta non effettuata: indirizzo email non autorizzato|La causa principale di questa operazione è in genere un indirizzo email di destinazione non corretto. Verifica che l'indirizzo email in questione sia corretto|
|554|Operazione fallita, "Nessun servizio SMTP qui")|Di solito è un problema di blacklist. Verifica che il tuo indirizzo IP del server di posta non sia inserito nella blacklist ([SpamHaus](https://check.spamhaus.org/){.external})|
|555|MAIL FROM / RCPT TO, parametri non riconosciuti o non attuati|Il server SMTP in uscita non registra correttamente l'indirizzo email utilizzato nei parametri "Da" o "A". Verifica la correttezza degli indirizzi email indicati e verifica che non sia stato superato il limite definito da OVHcloud: 200 email/ora/account e 300 email/ora/ip|

## Per saperne di più

[FAQ E-mail](https://docs.ovh.com/it/emails/faq-emails/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
