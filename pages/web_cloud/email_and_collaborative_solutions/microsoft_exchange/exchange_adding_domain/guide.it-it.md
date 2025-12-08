---
title: 'Aggiungi un dominio su una piattaforma email'
excerpt: Come aggiungere un dominio alla piattaforma Exchange o Email Pro
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Obiettivo

Aggiungere un dominio su Exchange è un’operazione fondamentale per utilizzare gli account inclusi in questa soluzione. È anche possibile aggiungere più domini a un servizio Exchange o Email Pro.

**Questa guida ti mostra come aggiungere un dominio alla piattaforma Exchange o Email Pro.**

## Prerequisiti

- Disporre di una soluzione [Exchange](/links/web/emails) o [Email Pro](/links/web/email-pro).
- Aver registrato uno o più domini.
- Poter modificare la configurazione del dominio ([zona DNS](/pages/web_cloud/domains/dns_zone_edit)).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### Accedi alla gestione del tuo servizio

> [!tabs]
> **Exchange**
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
>> 1. Accedi alla sezione `Web Cloud`{.action}.
>> 1. Nella sezione `MICROSOFT`, clicca su `Exchange`{.action}.
>> 1. Seleziona la piattaforma interessata.
>>
> **Email Pro**
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
>> 1. Clicca sulla scheda `Web Cloud`{.action}.
>> 1. Clicca su `Email Pro`{.action}.
>> 1. Seleziona la piattaforma interessata.
>>

### Aggiungi un dominio

1. Clicca sulla scheda `Domini associati`{.action} della tua piattaforma Exchange o Email Pro.
1. Visualizzi una tabella con tutti i domini associati al tuo servizio.
1. Clicca sul pulsante `Aggiungi un dominio`{.action}.

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail .w-600}

> [!warning]
>
> Di default, tutti gli account email di una piattaforma sono interconnessi. Tutti gli indirizzi creati sul servizio di posta elettronica saranno all’interno della stessa directory degli altri indirizzi email, inclusi quelli con un dominio diverso. Per dissociare la visualizzazione dei domini, è necessario ordinare un'altra piattaforma [Exchange o Email Pro](/links/web/email) per il o i domini in questione.
>

Nella finestra di aggiunta del dominio:

- **Seleziona un dominio dalla lista**: i domini che gestisci completamente (o almeno la zona DNS) sono disponibili anche nello Spazio Cliente.

- **Inserisci un dominio non gestito dal tuo account OVHcloud**: per poter configurare il servizio, assicurati di poter modificare la configurazione del dominio, più precisamente la sua zona DNS.

Una volta effettuata la scelta, clicca sul pulsante `Avanti`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail .w-600}

Nella finestra vengono visualizzate le informazioni relative alla configurazione della modalità.

- **Se il dominio inserito è gestito da OVHcloud**, è possibile scegliere tra due modalità.
    - **Configurazione consigliata**: la zona DNS verrà configurata automaticamente. È indicata se nella zona DNS non sono presenti configurazioni specifiche per i record MX, SPF, DKIM e SRV.
    - **Configurazione personalizzata**: è adatta se hai già configurato un'offerta email sul tuo dominio. È possibile scegliere gli elementi desiderati.
        - Per utilizzare un servizio di posta privato o esterno a OVHcloud in aggiunta a questa piattaforma di posta, inserisci il nome host del server di posta nella sezione `URL del server di posta di destinazione`.
        - *Configurare la registrazione MX automaticamente*: permette una registrazione automatica dei server di posta in arrivo OVHcloud (si applica a tutte le soluzioni e-mail OVHcloud).
        - *Configura il record SPF automaticamente*: consente l’inserimento automatico del record SPF per autorizzare i server di posta OVHcloud a trasmettere le email. Questo record è valido per tutte le soluzioni di posta elettronica OVHcloud.
        - *Configura il record DKIM automaticamente*: permette l'inserimento automatico dei record necessari ad autenticare l'invio delle email.
        - *Configura il record SRV automaticamente*: permette al client di posta di configurare automaticamente gli account Exchange sul tuo dominio.

![Add Domain](images/add_domain_exchange_step2-1b.png){.thumbnail .w-600}

- **Se il dominio inserito non è gestito dal tuo account OVHcloud**, significa che il dominio, in particolare la zona DNS, non è gestito dallo Spazio Cliente. Può anche essere registrato presso un altro Registrar. Sarà necessario procedere alla configurazione direttamente nella propria interfaccia di gestione, qualunque sia la scelta effettuata.
    - **Configurazione consigliata**: adatta solo per le soluzioni di posta elettronica OVHcloud.<br><br>
    - **Configurazione personalizzata**: per utilizzare un servizio email privato o esterno a OVHcloud in aggiunta a questa piattaforma email, inserisci il nome host del server email nel riquadro `URL del server email di destinazione`.

![Add Domain](images/add_domain_exchange_step2-2.png){.thumbnail .w-600}

Alla fine del processo di configurazione, verifica il riepilogo delle informazioni e poi clicca sul pulsante `Conferma`{.action} per confermare l’aggiunta del dominio.

### Configura il dominio (zona DNS)

Una volta che il dominio aggiunto sarà associato, assicurati che la configurazione sia avvenuta correttamente con l’aiuto della tabella riepilogativa. Una casellina verde indica che il dominio è configurato correttamente.<br>

Se la casellina è rossa:

- **se hai scelto una configurazione automatica durante l’aggiunta del dominio**: l’aggiornamento della visualizzazione nello Spazio Cliente OVHcloud potrebbe richiedere alcuni minuti.

- **se il dominio inserito non è gestito dal tuo account OVHcloud**:
    - Clicca sulla casellina rossa `MX`, `SRV`, `SPF` e `DKIM` per visualizzare le modifiche da apportare. Se il dominio non utilizza la configurazione di OVHcloud (i suoi server DNS), è necessario apportare le modifiche tramite l’interfaccia di gestione del dominio.
    - Per una casellina `CNAME` rossa, consulta la nostra guida che spiega come [creare un record CNAME quando si aggiunge un dominio associato](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname).

![exchange](images/add_domain_exchange_step4.png){.thumbnail .w-600}

> [!primary]
>
> La propagazione delle modifiche alla configurazione di un dominio potrebbe richiedere da 4 a 24 ore.
>

Per verificare la correttezza della configurazione di un dominio, accedi nuovamente alla tabella `Domini associati`{.action} del servizio. Se la casellina è diventata verde significa che il dominio è stato configurato correttamente. In caso contrario, è possibile che la propagazione delle modifiche non sia ancora terminata.

### Modificare la modalità di un dominio associato

È possibile modificare la modalità di un dominio associato sulla piattaforma. Come prerequisito è necessario comprendere la differenza di funzionamento tra la modalità autoritativa e la modalità non autoritativa.

> [!primary]
>
> **Autoritativa / non autoritativa**
>
> - La scelta della modalità **autoritativa** sulla piattaforma di posta (*Server A*) comporta l’hosting di tutti gli indirizzi email del dominio su questa piattaforma.<br>Ad esempio, se si invia un’email all’indirizzo "*mary.johnson@mydomain.ovh*", il "*Server A*" restituirà un messaggio di errore al mittente perché questo indirizzo non esiste sul "*Server A*".<br><br>
>
> - La modalità **non autoritativa** sulla piattaforma di posta elettronica (*Server A*) consente di ripartire gli indirizzi email del dominio tra la piattaforma di posta principale (*Server A*) e un altro servizio di posta elettronica (*Server B*).<br>Ad esempio, se si invia un’email all’indirizzo "*mary.johnson@mydomain.ovh*", il "*Server A*" trasmetterà l’email al "*Server B*" perché quest’ultimo possa consegnarla.<br>
>
> ![Authoritative](images/add_domain_exchange_authoritative.png){.thumbnail .w-600}

1. Clicca sulla scheda `Domini associati`{.action}.
1. Clicca sul pulsante `...`{.action} nella riga del dominio corrispondente.
1. Clicca su `Configurazione`{.action}.
1. Selezionare la modalità desiderata.

> [!warning]
>
> Se ricevi il messaggio "**autoritative domain detected**" quando aggiungi un dominio sulla tua piattaforma di posta, significa che il dominio è dichiarato in modalità **autoritativa** su un'altra piattaforma di posta. È necessario attivarlo in modalità **non autoritativa** su entrambe le piattaforme, in modo che possano convivere.

### Configura e utilizza gli account

Ora che i domini sono stati aggiunti al servizio, è possibile utilizzarli per configurare gli account di posta. Per effettuare questa operazione, clicca sulla scheda `Account email`{.action}. Se necessario, è possibile ordinare account aggiuntivi cliccando sul pulsante `Action`{.action}/`Ordina account`{.action} o `Aggiungi account`{.action}.

Ti ricordiamo che tutti gli indirizzi creati sul tuo servizio saranno in grado di visualizzare nella stessa directory tutti gli indirizzi email associati al servizio, inclusi quelli con un dominio diverso.

Una volta completata la configurazione degli account, è possibile iniziare a utilizzarli. OVHcloud mette a disposizione il servizio **webmail**, accessibile [qui](/links/web/email). Per un utilizzo ottimale del tuo indirizzo su un client, assicurati che sia compatibile con il servizio.

Per configurare l’indirizzo email su un client di posta o un dispositivo come smartphone o tablet o se hai bisogno di assistenza sulle funzionalità del tuo servizio di posta, consulta le nostre guide relative alle funzionalità del servizio di posta elettronica [Exchange](/links/web/emails) e [Email Pro](/links/web/email-pro).

È possibile acquistare licenze Outlook nello [Spazio Cliente OVHcloud](/links/manager) e licenze Office 365 nella pagina [Microsoft 365](/links/web/ms365). Per utilizzare un client di posta Outlook o più programmi della suite Office, ti consigliamo una di queste soluzioni.

### Rimuovere un dominio da una piattaforma

Per rimuovere un dominio associato a un servizio Exchange o Email Pro, assicurati che non sia associato a account email, alias, risorse, account condivisi (solo su Exchange), gruppi, contatti esterni o piè di pagina sempre configurati. Sarà necessario **associare questi account a un altro dominio** sulla tua piattaforma o **eliminarli**.

> [!warning]
>
> Prima di eliminare un account email, assicurati che non sia in uso. Può essere necessario effettuare un backup di questi account. Se necessario, consulta la guida [Migrare manualmente l’indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) che ti descriverà come esportare i dati di un account dal tuo Spazio Cliente o da un client di posta.

Clicca sulla scheda `Domini associati`{.action} della tua piattaforma. Dalla tabella, la colonna `Account` ti indica il numero di account associati ai domini della tua lista.

Se alcuni account email sono associati al dominio che vuoi scollegare, hai 2 possibilità:

**Associa gli account a un altro dominio**:

1. Accedi alla scheda `Account email`{.action}.
1. A destra degli account da modificare, clicca sul pulsante `...`{.action}.
1. Clicca su `Modifica`{.action}.

![exchange](images/add_domain_exchange_step8.png){.thumbnail .w-600}

4\. Dalla finestra di modifica, è possibile modificare il nome di dominio associato all'account tramite il menu a tendina.

![exchange](images/add_domain_exchange_step9.png){.thumbnail .w-600}

**Elimina gli account dalla tua piattaforma**:

1. Accedi alla scheda `Account email`{.action}.
1. A destra dell’account da eliminare, clicca sul pulsante `...`{.action}.
1. Clicca su `Ripristina questo account`{.action} o `Ripristina`{.action}.

![exchange](images/add_domain_exchange_step7.png){.thumbnail .w-600}

Una volta effettuata la riassegnazione degli account a un altro dominio o in seguito alla reinizializzazione, è possibile procedere alla cancellazione del dominio.

Dalla scheda `Domini associati`{.action} della tua piattaforma, clicca sul pulsante `...`{.action} a destra del dominio in questione e poi su `Elimina questo dominio`{.action}.

![exchange](images/add_domain_exchange_step10.png){.thumbnail .w-600}

## Per saperne di più

[Creare un record CNAME per aggiungere un dominio associato](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support)

Contatta la nostra [Community di utenti](/links/community).
