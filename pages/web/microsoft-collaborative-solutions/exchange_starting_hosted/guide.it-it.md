---
title: 'Iniziare a utilizzare Hosted Exchange'
slug: exchange_20132016_prima_configurazione
excerpt: 'Scopri come configurare un Hosted Exchange'
section: 'Iniziare a utilizzare Exchange'
order: 01
updated: 2023-03-06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

<style>
.w-640 {
  max-width:640px !important;
}
</style>

**Ultimo aggiornamento: 06/03/2023**

## Obiettivo

Con Hosted Exchange puoi usufruire di account email professionali che semplificano il lavoro collaborativo, grazie a funzionalità come la sincronizzazione del calendario e dei contatti.

**Questa guida ti mostra come iniziare a utilizzare il servizio Hosted Exchange.**

## Prerequisiti

- Disporre di una soluzione [Hosted Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/)
- Aver ricevuto l’email di conferma dell’installazione di Hosted Exchange
- Disporre di un dominio
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Accedi alla gestione del tuo servizio

Una volta che il tuo Hosted Exchange è pronto per l’utilizzo, puoi gestirlo direttamente dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

cliccando su `Microsoft`{.action} e poi su `Exchange`{.action}. Infine selezione il nome del tuo Hosted Exchange.

> [!primary]
>
> Il nome dei servizi Hosted Exchange nello Spazio Cliente OVHcloud inizia sempre con **hosted-**, dopodiché contiene una parte del tuo identificativo cliente e termina con una cifra (1 per il primo servizio Hosted Exchange installato, 2 per il secondo, ecc...).
>

### Effettua la prima configurazione del servizio

Il tuo servizio non è mai stato utilizzato, quindi è necessario eseguire la prima configurazione. che permetterà in seguito di utilizzare i nuovi indirizzi email Exchange.

Accedendo per la prima volta all’interfaccia di gestione di Hosted Exchange, potrai usufruire di una configurazione assistita. Per cominciare, clicca sul pulsante `Inizia`{.action}.

La configurazione assistita ti aiuta a eseguire diverse operazioni. In base alla tua situazione:

#### Scegli il dominio giusto

Scegli uno dei tuoi domini nella lista o spunta la casella `Il mio dominio non figura nella lista qui sotto` per inserire un dominio che non è gestito nel tuo Spazio Cliente **ma che puoi configurare**.

![email](images/exchange-wizard01.png){.thumbnail}

#### Con questo dominio utilizzerai esclusivamente l'offerta Exchange OVH?

Con questo dominio **utilizzerai esclusivamente l'offerta Exchange OVH?** " determinerà il tipo di configurazione del tuo dominio. 

- Se utilizzi una soluzione Exchange da sola o con altre soluzioni **email OVHcloud**, la configurazione può essere effettuata automaticamente o manualmente utilizzando esclusivamente i server di posta di OVHcloud.
- Se utilizzi la tua soluzione Exchange in aggiunta a un servizio email **esterno alle offerte OVHcloud**, ti verrà chiesto di inserire l'URL del server di ricezione del tuo servizio email esterno, sotto la voce `Server relais (SMTP)`.

![email](images/exchange-wizard02.png){.thumbnail}

#### Come vuoi configurare la tua zona DNS?

- **Configurazione automatica**: Se gestito da OVHcloud sullo stesso identificativo cliente del tuo servizio Exchange, il dominio inserito verrà automaticamente configurato a livello della zona DNS.
- **Configurazione manuale**: Il dominio non è gestito nello stesso Spazio Cliente della tua piattaforma, è gestito da un altro provider di domini o vuoi semplicemente effettuare la configurazione in autonomia.<br> I valori da inserire al termine del processo di configurazione o nella sezione `Domini associati`{.action} della piattaforma.

![email](images/exchange-wizard03.png){.thumbnail}

#### **Configurazione degli account Exchange**

Determina il nome dei tuoi account email Exchange e aggiungi ulteriori informazioni.

![email](images/exchange-wizard04.png){.thumbnail}

#### **Caso particolare**

- Se configuri la tua piattaforma Exchange con un dominio non gestito sullo stesso Spazio Cliente OVH o presso un altro provider di domini, ottieni questa finestra:<br>
![email](images/exchange-wizard05.png){.thumbnail .w-640}<br>
Da questa finestra è possibile aggiungere un **record CNAME** alla zona DNS del dominio. Questo record ha lo scopo di verificare che il dominio sia gestito correttamente.<br>

> [!warning]
> Senza questa conferma da record CNAME, non è possibile utilizzare la piattaforma con questo dominio.

- Se configuri la tua piattaforma Exchange con un dominio non gestito sullo stesso spazio cliente della piattaforma, gestito da un altro provider di domini o se hai scelto di configurare manualmente il tuo dominio, visualizzi la finestra seguente:<br>
![email](images/exchange-wizard06.png){.thumbnail .w-640}<br>
Qui puoi trovare i valori da inserire nella tua zona DNS. I **record MX** corrispondono alla ricezione delle tue email. Il **record SRV** corrisponde alla configurazione automatica dei tuoi indirizzi email.

Per maggiori informazioni sulla configurazione della tua zona DNS, consulta la pagina "[Aggiungere un record MX alla configurazione del dominio](https://docs.ovh.com/it/domains/aggiungere-record-mx-configurazione-dominio/)".

### Aggiungi domini aggiuntivi (facoltativo)

Una volta terminata la prima configurazione del tuo dominio, puoi anche configurare, tramite l'assistente, domini supplementari se lo desideri e se non l'hai già fatto.

> [!warning]
>
> Tutti gli indirizzi creati sul tuo servizio Exchange saranno visibili nella rubrica indirizzi di questo servizio, inclusi quelli con un dominio diverso. Se vuoi che alcuni domini non vengano visualizzati nella stessa directory, è necessario ordinare un altro Hosted Exchange.
>

Per aggiungere un nuovo dominio, seleziona il servizio Hosted Exchange dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sulla scheda `Domini associati`{.action}. La tabella mostra la lista dei domini configurati o in fase di configurazione nel tuo servizio. Per aggiungerne altri, clicca sul pulsante `Aggiungi un dominio`{.action} e segui le indicazioni.

Per saperne di più, consulta la guida [Aggiungere un dominio sul servizio Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/aggiungere-dominio-su-exchange/).

> [!primary]
>
> Se un dominio richiede una configurazione specifica, appare una casellina rossa nella colonna `Diagnostica`{.action} della tabella. Cliccando sulla casellina, puoi visualizzare le modifiche da apportare. Se il dominio non utilizza i server DNS di OVHcloud, è necessario effettuare le modifiche attraverso l'interfaccia di gestione per la configurazione del dominio. 
>

![Ajout d'un domaine](images/first-steps-hosted-exchange-add-domain.png)

### Configura account Exchange supplementari (facoltativo)

Puoi configurare account aggiuntivi se vuoi e se non l'hai già fatto tramite l'assistente tecnico.

Clicca sul servizio Hosted Exchange corrispondente allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)  e seleziona la scheda `Account email`{.action}. La tabella mostra la lista dei domini configurati o in fase di configurazione nel tuo servizio.

Gli account in attesa di configurazione includono “*@configureme.me*” accanto al nome dell’account. Per procedere con la configurazione, clicca sull’icona a forma di matita e segui i vari passaggi.

> [!primary]
>
> Ripeti questa operazione per ogni numero di account che possiedi. Per ordinarne di nuovi, clicca sul pulsante `Azioni`{.action} e poi su `Ordina account`{.action}.
>

![Ajout d'un compte](images/first-steps-hosted-exchange-add-account.png)

### Utilizza i tuoi indirizzi email

Una volta configurati gli account, non rimane che utilizzarli! OVHcloud mette a disposizione la Webmail **Outlook Web App** (OWA). alla quale puoi accedere tramite l’indirizzo <https://www.ovhcloud.com/it/mail/>,  inserendo le credenziali associate al tuo indirizzo di posta elettronica. Per maggiori informazioni sull’utilizzo di OWA, consulta la nostra documentazione disponibile a questo link: [https://docs.ovh.com/it/microsoft-collaborative-solutions/](https://docs.ovh.com/it/microsoft-collaborative-solutions/).

Per configurare l’account email su un client di posta o un dispositivo (ad esempio smartphone o tablet), consulta la documentazione disponibile in questa pagina: [https://docs.ovh.com/it/microsoft-collaborative-solutions/](https://docs.ovh.com/it/microsoft-collaborative-solutions/). Per un utilizzo ottimale del tuo account Exchange, assicurati che il client di posta scelto sia compatibile con il servizio.

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) OVHcloud è possibile attivare licenze Outlook in opzione con il tuo account email Exchange.

Per sottoscrivere, consulta la pagina "[Ottieni una licenza Outlook per Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/guida_licenza_outlook_exchange_2013/)".

Le licenze Office 365 sono disponibili anche alla pagina <https://www.ovhcloud.com/it/collaborative-tools/microsoft-365/>. Per utilizzare un client di posta Outlook o una o più applicazioni della suite Office, ti consigliamo di optare per una di queste soluzioni.

> [!primary]
>
> Sia che utilizzi un'applicazione Web o un client di posta compatibile, Exchange consente di sincronizzare tutti i parametri di configurazione (filtri, firme, cartelle, ecc...).
> Pertanto, se utilizzi Exchange su tre dispositivi e attraverso tre diverse modalità di connessione (Webmail, client di posta o client compatibili), tutte le tue informazioni saranno disponibili contemporaneamente.
>

### Impostare le funzioni collaborative (facoltativo)

Una volta completata la configurazione e l'operatività del servizio Hosted Exchange, è possibile attivare le funzionalità collaborative direttamente dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). le quali ti consentono di creare risorse (sale riunioni, attrezzatura, ecc...) così come gruppi.

Per attivare queste diverse funzioni, seleziona il servizio Hosted Exchange dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e scegli tra le tab che mostrano l'azione da effettuare.

Per maggiori informazioni sulle funzionalità, consulta la nostra documentazione disponibile a questo link: https://docs.ovh.com/it/microsoft-collaborative-solutions/.

## Per saperne di più

[Crea un gruppo di contatti](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2013_utilizzo_dei_gruppi_mailing_list/)

[Crea e utilizza un account condiviso](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange-utilizzo-account-condivisi/)

[Crea e utilizza account risorsa](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2013_utilizzo_account_di_risorsa/)

[Delega i diritti su un account email](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2013_assegna_i_diritti_full_access_a_un_account/)

[Condividi una cartella con l'interfaccia OWA](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2016_condividi_una_cartella_con_la_webmail_owa/)

[Gestisci la fatturazione dei tuoi account Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/gestisci-fatturazione-exchange/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
