---
title: 'Delegare i diritti su un account email'
excerpt: 'Come assegnare i diritti del tuo email a un altro account'
updated: 2024-06-19
---

## Obiettivo

I servizi Exchange ed Email Pro permettono di usufruire di indirizzi email professionali che facilitano il lavoro collaborativo grazie a diverse funzionalità. Una permette di delegare diritti specifici (come quello di invio o di accesso) a diversi account email.

**Questa guida ti mostra come delegare diritti del tuo servizio email ad altri account.**

## Prerequisiti

- Disporre di una [soluzione Exchange OVHcloud](/links/web/emails-hosted-exchange) o [Email Pro](/links/web/email-pro) attive

> [!warning]
>
> **Per l'offerta [Email Pro](/links/web/email-pro)** le funzionalità di delega descritte in questa guida possono essere utilizzate esclusivamente tramite [Webmail](/links/web/email). Per utilizzare i protocolli tramite un client di posta elettronica è necessario disporre di un account [Exchange](/links/web/emails-hosted-exchange).

- Disporre di almeno due account attivi e configurati sulla stessa piattaforma email OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Disporre delle credenziali dell’account email a cui verranno delegati i diritti

## Procedura

Prima di iniziare è necessario definire i diritti da delegare. Ti ricordiamo che una delega consiste nel concedere a uno o più account email alcuni diritti aggiuntivi sull’account email in questione.

|Diritto|Descrizione|
|---|---|
|Diritto di invio|Permette di effettuare un invio come se si trattasse di un altro utente: a comparire come mittente non è l’account delegato ma l’indirizzo del proprietario della casella di posta. Il destinatario non ha alcuna visibilità del fatto che il messaggio è stato inviato da un altro account.|
|Diritto di invio “da parte di”|Permette di effettuare un invio per conto di un altro utente: a comparire come mittente non è l’account delegato ma l’indirizzo del proprietario della casella di posta. In questo caso sarà presente una dicitura che indica che il messaggio è stato inviato da un altro utente per conto dell’account proprietario.|
|Diritto di accesso|Permette all’utente delegato di accedere in sola lettura a un determinato account. Questo tipo di diritto non autorizza l’invio di messaggi ma solo la visualizzazione del contenuto della casella di posta.|

> [!warning]
>
> I diritti “Invio come” e “Invio da parte di” non possono essere assegnati contemporaneamente; le altre combinazioni sono invece possibili. 
> 

Una volta individuato l’account per cui vuoi delegare i diritti, definito i permessi da assegnare e gli account che ne usufruiranno, prosegui con il primo step.

### Step 1: crea la delega

Per effettuare questa operazione, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}:

- **Exchange**: Clicca su `Microsoft`{.action} > `Exchange`{.action}. 
- **Email Pro**: Clicca su `Email Pro`{.action}.

Seleziona il nome del servizio in cui si trova l’account per cui vuoi creare la delega e clicca sulla scheda `Account email`{.action}.

Visualizzi una tabella con tutti gli account associati al tuo servizio email. Clicca sui tre puntini in corrispondenza dell’account in questione e seleziona `Gestisci le tue deleghe`{.action}.

![Delega](images/delegation-step1.png){.thumbnail}

Nella nuova finestra, seleziona i diritti che vuoi delegare per ciascun account. Clicca su `Seguente`{.action}.

![Delega](images/delegation-step2.png){.thumbnail}

Verifica il riepilogo delle modifiche e, se tutto è corretto, clicca su `Conferma`{.action}. La delega verrà creata sui nostri server in pochi minuti.

Una volta configurata, *test@mypersonnaldomain.ovh* potrà effettuare le azioni selezionate sull’account *test2@mypersonnaldomain.ovh*.

### Step 2: utilizza i diritti delegati

Ora che la delega è pronta, non resta che utilizzarla. Prima di proseguire, assicurati di avere a disposizione le credenziali associate all’account email a cui hai assegnato i nuovi diritti.

Il procedimento è diverso in base ai diritti delegati e al software o all’interfaccia Web con cui accedi al tuo account email. Continua a consultare questa guida in base al tipo di diritto delegato.

- [Utilizzare il “diritto di accesso”](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#utilizzare-il-diritto-di-accesso){.external}

- [Utilizzare il “diritto di invio”](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#utilizzare-il-diritto-di-invio){.external}

- [Utilizzare il “diritto di invio da parte di”](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#utilizzare-il-diritto-invia-da-parte-di){.external}

> [!warning]
>
> Questa soluzione richiede conoscenze del software o dell’interfaccia utilizzati. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore.  
>

#### Utilizzare il “diritto di accesso”

- **Dalla Webmail Outlook Web App (OWA)**

Accedi all’indirizzo <https://www.ovh.it/mail/> utilizzando le credenziali dell’account email con i diritti delegati. Nel menu a sinistra, clicca con il tasto destro sul nome dell’account e seleziona `Aggiungi cartella condivisa...`{.action}.

Nella nuova finestra, inserisci il nome dell’account con i diritti delegati e poi clicca su `Aggiungi`{.action}. A questo punto l’account viene mostrato nel menu a sinistra ed è possibile visualizzarne il contenuto.

![Delega](images/delegation-step3.png){.thumbnail}

- **Dal client Outlook per Windows**

> [!warning]
>
> L'utilizzo di questa funzionalità **via Outlook** è disponibile esclusivamente per un account email [Exchange](/links/web/emails-hosted-exchange).

Se utilizzi Outlook, seleziona la scheda `File`{.action} in alto a sinistra e clicca su `Impostazioni account`{.action}. Nel menu a tendina, seleziona di nuovo `Impostazioni account...`{.action}. Nella nuova finestra, seleziona l’account a cui sono stati delegati i diritti e clicca su `Cambia...`{.action}.

![Delega](images/delegation-step4.png){.thumbnail}

Clicca su `Altre impostazioni...`{.action}. Nella nuova finestra, seleziona la scheda `Impostazioni avanzate`{.action} e clicca su `Aggiungi...`{.action}. Inserisci l’indirizzo dell’account per cui usufruisci della delega e conferma gli step successivi fino al completamento dell’operazione. A questo punto l’account viene mostrato nel menu a sinistra ed è possibile visualizzarne il contenuto.

![Delega](images/delegation-step5.png){.thumbnail}

#### Utilizzare il “diritto di invio”

- **Dalla Webmail Outlook Web App (OWA)**

Accedi all’indirizzo <https://www.ovh.it/mail/> utilizzando le credenziali dell’account email con i diritti delegati. Inizia a scrivere un nuovo messaggio cliccando sul pulsante `+ Nuovo`{.action}.

Nella finestra di redazione, clicca sui tre puntini e seleziona `Mostra Da`{.action}. Clicca sul pulsante `Da`{.action} e seleziona l’indirizzo che verrà visualizzato come mittente (per cui disponi del diritto di delega). Se non compare, elimina l’account già inserito e digita quello che desideri.

A questo punto scrivi il tuo messaggio e invialo.

![Delega](images/delegation-step6.png){.thumbnail}

- **Dal client Outlook per Windows**

> [!warning]
>
> L'utilizzo di questa funzionalità **via Outlook** è disponibile esclusivamente per un account email [Exchange](/links/web/emails-hosted-exchange).

Se utilizzi Outlook, inizia a scrivere un nuovo messaggio assicurandoti che il pulsante `Da`{.action} venga mostrato nella casella di testo. In caso contrario seleziona la scheda `Opzioni`{.action} e, nella sezione “Mostra campi”, clicca su `Da`{.action}.

Clicca sul pulsante `Da`{.action} e seleziona l’indirizzo che verrà visualizzato come mittente (per cui disponi del diritto di delega). Se non compare, clicca su `Altro`{.action}, inserisci l’indirizzo che desideri e conferma l’operazione. 

A questo punto scrivi il tuo messaggio e invialo.

![Delega](images/delegation-step7.png){.thumbnail}

#### Utilizzare il diritto di “invio da parte di”

- **Dalla Webmail Outlook Web App (OWA)**

Accedi all’indirizzo <https://www.ovh.it/mail/> utilizzando le credenziali dell’account email con i diritti delegati. Inizia a scrivere un nuovo messaggio cliccando sul pulsante `+ Nuovo`{.action}.

Nella finestra di redazione, clicca sui tre puntini e seleziona `Mostra Da`{.action}. Clicca sul pulsante `Da`{.action} e seleziona l’indirizzo che verrà visualizzato come mittente (per cui disponi del diritto di delega). Se non compare, elimina l’account già inserito e digita quello che desideri.

A questo punto scrivi il tuo messaggio e invialo.

![Delega](images/delegation-step6.png){.thumbnail}

- **Dal client Outlook per Windows**

> [!warning]
>
> L'utilizzo di questa funzionalità **via Outlook** è disponibile esclusivamente per un account email [Exchange](/links/web/emails-hosted-exchange).

Se utilizzi Outlook, inizia a scrivere un nuovo messaggio assicurandoti che il pulsante `Da`{.action} venga mostrato nella casella di testo. In caso contrario seleziona la scheda `Opzioni`{.action} e, nella sezione “Mostra campi”, clicca su `Da`{.action}.

Clicca sul pulsante `Da`{.action} e seleziona l’indirizzo che verrà visualizzato come mittente (per cui disponi del diritto di delega). Se non compare, clicca su `Altro`{.action}, inserisci l’indirizzo che desideri e conferma l’operazione.

A questo punto scrivi il tuo messaggio e invialo.

![Delega](images/delegation-step7.png){.thumbnail}

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

[Utilizzare un account di posta da "Outlook on the web"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Condividere una cartella con la Webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Utilizzo dei gruppi (mailing list)](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Contatta la nostra [Community di utenti](/links/community).