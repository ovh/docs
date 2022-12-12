---
title: Gestire lo spazio di storage di un account email
slug: manage-email-quota
excerpt: Come gestire e ottimizzare lo spazio di storage di un indirizzo email
section: Diagnostica
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 17/11/2022**

## Obiettivo

Ogni account email OVHcloud dispone di uno spazio di storage dedicato. Gestire correttamente lo spazio di storage permette di evitare la saturazione, conosciuta anche come "overquota". Di default, le email ricevute ed inviate vengono salvate sul server del tuo account email. È inoltre possibile, tramite un client di posta (Outlook, Mail di macOS, Thunderbird, ecc...), salvare le tue email in locale sul tuo computer.

**Questa guida ti mostra come gestire e ottimizzare lo spazio di storage di un indirizzo email.**

## Prerequisiti

- Disporre di una soluzione email OVHcloud configurata precedentemente (**MX Plan**, inclusa nelle nostre [soluzioni di hosting Web](https://www.ovhcloud.com/it/web-hosting/), inclusa in un [hosting Start10M gratuito](https://www.ovhcloud.com/it/domains/free-web-hosting/) o ordinata separatamente come soluzione autonoma, come [**Hosted Exchange**](https://www.ovhcloud.com/it/emails/hosted-exchange/) o [**Email Pro**](https://www.ovhcloud.com/it/emails/email-pro/))
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}.
- Disporre delle informazioni di connessione agli indirizzi email interessati

> [!primary]
>
> **Casi particolari**
>
> - Se disponi di un hosting Start 10M, prima di creare un indirizzo email è necessario attivarlo. Questa operazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, selezionando il dominio interessato.
> - Prima di continuare la lettura di questa guida, è necessario attivare il servizio di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}. Per farlo, consulta la guida [Attiva gli indirizzi email inclusi nel tuo hosting Web](https://docs.ovh.com/it/hosting/attivare-email-hosting-web/).

## In pratica <a name="instructions"></a>

La gestione dello spazio di storage del tuo account email sarà suddivisa in 3 step in questa guida. Possono essere eseguite nell'ordine o in modo indipendente, secondo le vostre necessità.

- [**Verifica**](#check-quota) la quota attuale del tuo account email. Questo step ti permetterà di valutare il tuo consumo attuale, per i 2 step successivi.
- [**Ottimizza**](#optimise) il tuo account email. Questo step ti dà suggerimenti per mantenere uno spazio di storage senza elementi superflui.
- [**Archivia** o **Cambia offerta email**](#archiveorswitch). Se lo step precedente non è sufficiente, troverai le informazioni necessarie per configurare uno spazio di archiviazione locale (sul tuo computer) per le tue email tramite il tuo client di posta. Troverai anche le informazioni necessarie per modificare l'offerta email del tuo account, a vantaggio di un'offerta con uno spazio di storage maggiore.

![email](images/email-quota-intro.gif){.thumbnail}

### 1- **Verifica** la quota attuale del tuo account email <a name="check-quota"></a>

Questa operazione è disponibile nello Spazio Cliente OVHcloud, se la gestione del servizio email interessato è attiva, o nella Webmail, se sei l'utente dell'account.

#### Dallo Spazio Cliente OVHcloud <a name="quotacontrolpanel"></a>

Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona la sezione `Web Cloud`{.action} e segui le indicazioni fornite:

> [!tabs]
> **Email (MXplan)**
>>
>> Clicca su `Email`{.action} e poi seleziona il nome del servizio MX Plan. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti. Nella colonna `Dimensione` del tuo account puoi visualizzare i consumi in corso di storage del tuo indirizzo email.<br><br>
>>![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Clicca su `Email Pro`{.action} e seleziona il nome della piattaforma. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti. Nella colonna `Dimensione` del tuo indirizzo email puoi visualizzare i consumi in corso di storage.<br><br>
>>![email](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Clicca su `Microsoft`{.action} / `Exchange`{.action} e poi seleziona il nome della piattaforma. Clicca sulla scheda `Account email`{.action}. Visualizzi una finestra con tutti gli account email esistenti. Nella colonna `Dimensione` del tuo account puoi visualizzare i consumi in corso di storage del tuo indirizzo email.<br><br>
>>![email](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### Dalla Webmail <a name="quotawebmail"></a>

Accedi alla Webmail, clicca sulla pagina <https://www.ovhcloud.com/it/mail/>e inserisci le informazioni di connessione al tuo account. Seleziona qui sotto la Webmail corrispondente alla tua offerta:

> [!tabs]
> **OWA**: **Email (MX Plan)**/**Email Pro**/**Exchange**
>>
>> Clicca sul pulsante <i class="icons-gear-concept icons-masterbrand-blue"></i>in alto a destra dello schermo e poi su `Opzioni`{.action}. Clicca sul `tuo account`{.action} nella sezione `Generale`{.action} nella colonna di sinistra. Visualizza la quota attuale del tuo account nella parte inferiore destra del form.<br><br>
>>![email](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **Email (MXplan)**
>>
>> Quando sei connesso alla Webmail Roundcube, la quota è visibile nella parte inferiore sinistra, materializzata da un camembert e la percentuale consumata.<br><br>
>>![email](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2- **Ottimizza** il tuo account email <a name="optimise"></a>

Se il tuo account email è saturo, significa che non sei più in grado di ricevere email.<br>
Quando una persona ti invia un'email, riceve, in risposta automatica, un'email di errore del tipo *"552, "5.2.2", l'account di posta a cui hai inviato un messaggio ha esaurito la sua quota. "*.<br>
Quando il tuo account email è saturo, puoi sempre inviare email dalla tua parte. Queste email, invece, non potranno essere salvate nella tua "casella di invio".

#### Ottimizza lo spazio associato al tuo account email

Prima di effettuare qualsiasi altra operazione sul tuo account email, è necessario prendere visione del contenuto del tuo account per eliminare tutti gli elementi superflui. Ti consigliamo di verificarne alcuni in particolare:

- `1`{.action} **La spazzatura (trash)**: contiene gli elementi che hai eliminato. Per evitare di accumulare email in questa cartella, ti consigliamo di svuotare regolarmente il cestino.
- `2`{.action} **Gli elementi inviati (sent messages)**: quando inviate un'email, questa viene trasmessa al destinatario. ma viene anche conservato sul tuo account email nei "messaggi inviati". Ti consigliamo di svuotare regolarmente questa cartella o archiviarne il contenuto in locale sul tuo computer o su uno spazio di archiviazione remoto di tipo "cloud".
- `3`{.action} **Le email salvate contenenti allegati voluminosi**: le email contenenti allegati richiedono più spazio sul tuo account email. Ti consigliamo di salvare gli elementi voluminosi su uno spazio di storage locale (computer) o remoto (cloud).
- `4`{.action}**Cartella**: quando hai molte cartelle sul tuo account email, è meno facile misurare lo spazio occupato sul tuo account email. Effettua regolarmente l'inventario delle tue cartelle e del loro contenuto.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Aumenta la capacità del tuo account email

Se l'account email non ha raggiunto la sua capacità massima, è possibile aumentare la capacità di storage. Di seguito trovi la procedura da seguire in base alla tua offerta:

> [!tabs]
> **Email (MXplan)**
>>
>> La capacità di un account MXplan può variare da 2,5 MB a 5 GB. In caso di saturazione e capacità inferiore a 5 GB, è possibile modificarne la capacità tramite lo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).<br>
>> Nella scheda `Account email`{.action}, clicca sul pulsante <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>a destra dell'account da modificare e poi clicca su `Modifica`{.action}.
>> Dalla casella `Quota`{.action}, seleziona la dimensione più adatta alle tue esigenze, clicca su `Seguente`{.action} e poi `Conferma`{.action}.<br><br>
>> ![email](images/email-quota-more01.png){.thumbnail}<br>
>>
> **Email Pro**
>> 
>> L'offerta Email Pro dispone di una capacità unica di 10 GB. Se hai bisogno di maggiore spazio di storage, è necessario passare a un'offerta con maggiore spazio. Per farlo, leggi la sezione [cambiare offerta per aumentare la capacità](#switchingoffer) di questa guida.<br>
>>
> **Exchange**
>>
>> Se il tuo account Exchange raggiunge i 50 GB, è possibile, per le offerte **Hosted** e **Provider**, sottoscrivere un'opzione di estensione per estendere la sua capacità a 300 GB.<br>
>> Nella scheda `Account email`{.action} della tua piattaforma, clicca sul pulsante <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>a destra dell'account da modificare e poi clicca su `Aumenta la capacità a 300 GB`{.action}. Scegli la modalità di fatturazione più adatta alle tue esigenze e clicca su `Conferma`{.action}.<br><br>
>>![email](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Se il tuo account Exchange ha già riempito i 300 GB di spazio su un'offerta **Hosted** o **Provider**, devi liberare spazio sul tuo account Exchange eliminando elementi superflui o [archiviare le tue email](#archiveorswitch) sul tuo computer in locale. Questa situazione è valida anche per gli account Exchange da 50 GB presenti su un'offerta **Private**.
>>

### 3- **Archivia** o **modifica offerta email** <a name="archiveorswitch"></a>

#### Archivia le tue email in locale sul tuo computer

> [!warning]
> 
> Le informazioni che seguono si basano su una configurazione IMAP del tuo account email, la configurazione più diffusa. La configurazione POP si basa sul principio di storage delle email in locale. Nel nostro contesto, non è quindi pertinente archiviare email già salvate localmente sul tuo computer.

Quando hai configurato l'account email sul tuo client di posta in IMAP, **di default** il contenuto visibile corrisponde alla **sincronizzazione sul server di posta**. Questo significa che le email vengono caricate sul tuo computer ma spariscono se vengono rimosse dal server. Per **archiviarli sul vostro computer**, dovrete configurare il vostro client di posta.

![email](images/email-quota-step03-archive.png){.thumbnail}

Se vuoi, liberare lo spazio di storage del tuo account email salvando le tue email direttamente sul tuo computer. Per farlo, sarà necessario utilizzare un client di posta installato sul tuo computer.
Il client di posta convertirà le tue email in file, per poterle salvare sul tuo computer. ma è necessario configurare la funzione "archivio" del tuo client di posta. Le email saranno inserite nella cartella "locale" e non direttamente sul server del tuo account email.

Di seguito trovi una lista non esaustiva delle guide di configurazione per i client di posta che utilizzano:

- protocollo IMAP sulle offerte **MXplan** ed **Email Pro**;
- protocollo MAPI sull'offerta **Exchange** per Outlook Windows
- il protocollo EWS sull'offerta **Exchange** per Outlook macOS.

> [!tabs]
> **Email (MXplan)**
>>
>> Configurazione di un account MXplan su **Windows**:<br><br>
>> - [Posta su Windows 10](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_dellapp_posta_di_windows_10/) (incluso con Windows)<br>
>> - [Outlook per Mxplan](https://docs.ovh.com/it/emails/configurazione-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/it/emails/email_condivisa_guida_alla_configurazione_di_thundebird/) (gratuito)<br><br>
>> Configurazione di un account MXplan su **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_su_mail_di_mac_-_el_capitan/) (incluso con macOS)<br>
>> - [Outlook](https://docs.ovh.com/it/emails/configurazione-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/it/emails/servizio_email_guida_alla_configurazione_di_thunderbird_su_mac/) (gratuito)
>>
> **Email Pro**
>>
>> Configurazione di un account Email Pro su **Windows**:<br><br>
>> - [Posta su Windows 10](https://docs.ovh.com/it/emails-pro/configurazione-posta-windows-10/) (incluso con Windows)<br>
>> - [Outlook](https://docs.ovh.com/it/emails-pro/configurazione-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/it/emails-pro/configurazione-thundebird-emailpro-windows/) (gratuito)<br><br>
>> Configurazione di un account Email Pro su **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/it/emails-pro/configurare-email-pro-mail-macos/) (incluso con macOS)<br>
>> - [Outlook](https://docs.ovh.com/it/emails-pro/configurazione-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/it/emails-pro/configurazione-thundebird-emailpro-mac/) (gratuito)<br>
>>
> **Exchange**
>>
>> Configurazione di un account Exchange su **Windows**:<br><br>
>> - [Posta su Windows 10](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-posta-windows-10/) (incluso con Windows)<br>
>> - [Outlook](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-windows/)<br>
>> - [Thunderbird](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_configurazione_di_thunderbird/) (gratuito)<br><br>
>> Configurazione di un account Exchange su **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-mail-macos/) (incluso con macOS)<br>
>> - [Outlook](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/it/microsoft-collaborative-solutions/configurazione-exchange-thunderbird-mac/) (gratuito)<br>
>>

Una volta installato il client di posta, segui le istruzioni qui sotto per preparare la cartella di archiviazione sul tuo client di posta.

> [!tabs]
> **Outlook**
>>
>> Su Outlook, assicurati che nella colonna di sinistra la cartella "archivia" o "sul mio computer" sia presente per potervi depositare gli elementi che desideri tenere in locale sul tuo computer. Consulta la documentazione di Microsoft per preparare la cartella di archiviazione:<br><br>
>> - [Archiviazione in Outlook per Windows](https://support.microsoft.com/it-it/office/archivio-in-outlook-per-windows-25f75777-3cdc-4c77-9783-5929c7b47028){.external}<br>
>> - [Sulle cartelle del mio computer in Outlook per Mac](https://support.microsoft.com/it-it/office/informazioni-sulle-cartelle-in-questo-computer-in-outlook-per-mac-c91b8729-924d-4c25-a5f6-38883d0f763d){.external}<br>
>>
> **Mail macOS**
>>
>> Da Mail su macOS, crea una cartella che comparirà nella sezione "Sul mio Mac" nella colonna di sinistra. Per effettuare questa operazione, consulta la documentazione di Apple:<br><br>
>> - [Creare o eliminare caselle di posta in Mail su Mac](https://support.apple.com/it-it/guide/mail/mlhlp1021/15.0/mac/12.0){.external}<br>
>>
> **Thunderbird**
>>
>> Tramite thunderbird da Windows, macOS o Linux, potete spostare le vostre email in una cartella del lato sinistro. Per maggiori informazioni, consulta la documentazione di Mozilla:<br><br>
>> - [Creare o eliminare caselle di posta in Mail su Mac](https://support.mozilla.org/it/kb/archiviazione-messaggi}<br>
>>

#### Cambia offerta per aumentare la capacità <a name="switchingoffer"></a>

Seleziona l'offerta corrente del tuo account email nel menu qui sotto:

> [!tabs]
> **Email (MXplan)**
>>
>> Se la capacità del tuo account email è già al massimo di 5 GB, puoi optare per una migrazione verso un'offerta [**Email Pro** da 10 GB](https://www.ovhcloud.com/it/emails/email-pro/) o [**Hosted Exchange** da 50 GB](https://www.ovhcloud.com/it/emails/hosted-exchange/). Per effettuare questa operazione, puoi scegliere la soluzione più adatta alle tue esigenze e consultare la nostra guida [Migrare un indirizzo email MX Plan verso un account Email Pro o Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/migrazione-indirizzo-email-condiviso-verso-exchange/). 
>>
> **Email Pro**
>>
>> L'offerta Email Pro dispone di una capacità unica di 10GB. È possibile optare per una migrazione verso un'offerta [**Hosted Exchange** da 50 GB](https://www.ovhcloud.com/it/emails/hosted-exchange/). Per effettuare questa operazione, puoi scegliere la soluzione più adatta alle tue esigenze e consultare la guida [Migrare i tuoi indirizzi email da una piattaforma OVHcloud verso un'altra](https://docs.ovh.com/it/microsoft-collaborative-solutions/migration-email-platform/).
>>
> **Exchange**
>>
>> Se il tuo account Exchange raggiunge i 50 GB di spazio, è possibile attivare un'opzione di estensione per estenderne la capacità a 300 GB. Solo se l'account Exchange è presente su un'offerta **Hosted** o **Provider**.<br>
>> Nella scheda `Account email`{.action} della piattaforma Exchange, clicca sul pulsante <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>a destra dell'account da modificare e poi su `Aumenta la capacità a 300 GB`{.action}.<br><br>
>> ![email](images/email-quota-more02.png){.thumbnail}<br>
>>

## Per saperne di più

[Migrare un indirizzo email MX Plan verso un account Email Pro o Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/migrazione-indirizzo-email-condiviso-verso-exchange/)

[Migra manualmente il tuo indirizzo email](https://docs.ovh.com/it/emails/migrare-i-indirizzi-email-manualmente/)

[Migrare i tuoi account email da una piattaforma OVHcloud verso un'altra](https://docs.ovh.com/it/microsoft-collaborative-solutions/migration-email-platform/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
