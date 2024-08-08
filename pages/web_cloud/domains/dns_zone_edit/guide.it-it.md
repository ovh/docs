---
title: 'Modificare una zona DNS di OVHcloud'
excerpt: 'Questa guida ti mostra come modificare una zona DNS OVHcloud dallo Spazio Cliente'
updated: 2024-06-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

L'acronimo **DNS**, che sta per **D**omain **N**ame **S**ystem, è un insieme di elementi (server DNS, zone DNS, ecc...) che permettono di far corrispondere un nome di dominio con un indirizzo IP.

Per maggiori spiegazioni, consulta le nostre guide "[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Questa guida ti mostra come modificare la zona DNS OVHcloud dallo Spazio Cliente.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](/links/manager){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}
- Utilizza la configurazione OVHcloud (server DNS) per il dominio in questione. 

> [!warning]
>
> - Se il dominio non utilizza i server DNS di OVHcloud, è necessario effettuare la modifica attraverso l'interfaccia del provider che gestisce la configurazione del dominio.
> 
> - Se il dominio è registrato presso OVHcloud, è possibile verificare se utilizza la nostra configurazione. Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), cliccando sulla scheda `Server DNS`{.action} del nome di dominio pertinente. In caso di necessità, consulta la nostra guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
> 
> In entrambi i casi, fai attenzione effettuando le modifiche dei server DNS. Infatti, la configurazione precedente che può essere applicata al tuo dominio non sarà più attiva se non hai precedentemente riconfigurato e personalizzato la nuova zona DNS presente in OVHcloud.<br>
> È possibile avere una sola zona DNS attiva per ogni dominio.
>

## Procedura

### Accedere alla gestione di una zona DNS OVHcloud

> [!primary]
>
> A differenza del nome di dominio, per una zona DNS non esiste la nozione di proprietario, ma di gestione dei contatti per una zona DNS OVHcloud. Se desideri trasferire la gestione della tua zona DNS su un altro account OVHcloud, segui la nostra guida [Gestire i contatti di servizio](/pages/account_and_service_management/account_information/managing_contacts).

Per accedere alla gestione di una zona DNS OVHcloud, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
4. Seleziona il dominio o la zona DNS.
5. Clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con tutti i record DNS associati al tuo dominio in OVHcloud. Il contenuto può essere filtrato per tipo di record o dominio.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}

### Modifica la zona DNS OVHcloud del dominio

**La modifica di una zona DNS è un’operazione delicata** : se non viene eseguita correttamente, potrebbe risultare impossibile raggiungere il tuo sito e ricevere nuovi messaggi nella tua casella di posta.

Essere a conoscenza delle diverse tipologie di record consente di modificare al meglio la zona DNS del dominio.

> [!success]
>
> Consulta la nostra guida sui [record DNS](/pages/web_cloud/domains/dns_zone_records) per capire meglio le tue operazioni DNS.
>
> Per maggiori informazioni, consulta la nostra guida relativa ai [sottodomini](/pages/web_cloud/domains/domain_create_subdomains).
>

Per modificare la zona DNS del dominio è possibile aggiungere, modificare o eliminare un record DNS.<br>
Per effettuare questa operazione è possibile modificare manualmente la zona in modalità testo oppure utilizzare la configurazione guidata.

#### Modifica manualmente la zona in modalità testuale <a name="txtmod"></a>

> [!warning]
> 
> Solo per gli utenti esperti. Presta particolare attenzione alla sintassi durante le modifiche.
>

Per modificare in modalità testo una zona DNS di OVHcloud, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
4. Seleziona il dominio o la zona DNS.
5. Clicca sulla scheda `Zona DNS`{.action}.
6. Clicca sul pulsante `Modifica in modalità testuale`{.action} a destra o sotto la tabella e segui gli step.

> [!warning]
>
> Non modificare i record DNS della tua zona DNS a favore di server DNS esterni a OVHcloud, cliccando sul pulsante `Modifica in modalità testuale`{.action}. Questa zona DNS funziona **esclusivamente** con server DNS OVHcloud.

#### Utilizza i nostri assistenti di configurazione

Questa guida descrive la procedura relativa alla configurazione guidata.

> [!primary]
>
> Recupera le informazioni da modificare nella tua zona DNS OVHcloud. Se effettui questa modifica su richiesta di un provider di servizi, questi deve comunicarti l'elenco degli elementi da modificare.
>

> [!tabs]
> **Aggiungi un nuovo record DNS**
>>
>> Per aggiungere un nuovo record DNS, eseguire le operazioni seguenti:
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
>> 2. Nella sezione superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
>> 3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
>> 4. Seleziona il dominio o la zona DNS.
>> 5. Clicca sulla scheda `Zona DNS`{.action}.
>> 6. Clicca su `Aggiungi un record`{.action} e segui gli step.
>>
>> Verifica che il record non esista già e non punti a un target differente. filtrando il contenuto della tabella per tipo di record o dominio. Se il record esiste già, ti consigliamo di modificarlo seguendo la procedura descritta.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
>> > Quando la destinazione del record è un URL, ricordati di punteggiare quest'ultimo. In caso contrario, il dominio verrà aggiunto automaticamente alla fine del target.
>> >
>> > **Esempio**: vuoi creare un record CNAME da `test.mydomain.ovh` verso `mydomain.ovh`.
>> >
>> > Dovrai avere come bersaglio `mydomain.ovh.` e non `mydomain.ovh` senza il **.** alla fine.
>>
> **Modifica un record DNS esistente**
>>
>> Per modificare un record DNS, eseguire le operazioni seguenti:
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
>> 2. Nella sezione superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
>> 3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
>> 4. Seleziona il dominio o la zona DNS.
>> 5. Clicca sulla scheda `Zona DNS`{.action}.
>> 6. Nella tabella che appare, clicca sul pittogramma `...`{.action} a destra della voce interessata.
>> 7. Clicca su `Modifica il record`{.action} e segui gli step.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-record.png){.thumbnail}
>>
> **Elimina un record DNS**
>>
>> Per eliminare un record DNS, eseguire le operazioni seguenti:
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
>> 2. Nella sezione superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
>> 3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
>> 4. Seleziona il dominio o la zona DNS.
>> 5. Clicca sulla scheda `Zona DNS`{.action}.
>> 6. Nella tabella che appare, clicca sul pittogramma `...`{.action} a destra della voce interessata.
>> 7. Clicca su `Elimina il record`{.action} e segui gli step.
>>
>> Per eliminare più record contemporaneamente è sufficiente selezionare le caselle corrispondenti e cliccare sul pulsante `Elimina`{.action}.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-record.png){.thumbnail}
>>
> **Reinizializza la zona DNS**
>>
>> La reinizializzazione della zona DNS permette di ripristinare una configurazione minima, con i record OVHcloud di default o quelli dei servizi. Inoltre è possibile puntare il dominio verso servizi di hosting Web e email personalizzati.
>>
>> > [!alert]
>> >
>> > Prima di reimpostare la zona DNS, assicurati che il dominio non sia associato a servizi in uso, come un sito Web o indirizzi email.
>> >
>>
>> Per reinizializzare la zona DNS, esegui queste operazioni:
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
>> 2. Nella sezione superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
>> 3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
>> 4. Seleziona il dominio o la zona DNS.
>> 5. Clicca sulla scheda `Zona DNS`{.action}.
>> 6. Clicca sul pulsante `Ripristina la tua zona DNS`{.action} e segui gli step 2.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
>> **Step 1**
>>
>> Rispondi alla domanda `Vuoi attivare il numero minimo di record durante la reinizializzazione della zona DNS?`. Definire i record minimi in una zona DNS permette di evitare che una richiesta verso il nome di dominio si concluda con un errore.
>>
>> - `Sì, voglio reinizializzare la mia zona DNS con il numero minimo di record`
>> - `No, ma voglio reinizializzare la mia zona DNS`
>>
>> **Step 2**
>>
>> Indipendentemente dalla scelta effettuata allo step 1, è necessario definire una risposta quando si interroga il dominio per evitare una risposta DNS in errore.
>>
>> Selezionare entrambe le opzioni facendo clic sulle schede seguenti.
>>
>> **Indirizzo IP dell’hosting**
>>
>> - `Reindirizzamento`: il dominio punterà verso il server di reindirizzamento OVHcloud. In questo modo viene visualizzata una home page di OVHcloud e si evita un errore DNS.<br>
>> - `Hosting Web OVHcloud`: il dominio punterà verso l’indirizzo IP dell’hosting Web associato al dominio <br>
>> - `Personalizzato`: definisci il valore IPv4 ([record A](/pages/web_cloud/domains/dns_zone_records#pointer-records)) dell’hosting Web che vuoi puntare. <br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-01.png){.thumbnail}
>>
>> **Indirizzo del tuo server mail**
>>
>> - `Reindirizzamento`: il tuo dominio punterà verso i server di reindirizzamento email. Questa scelta. È particolarmente utile se non disponi di offerte email ma vuoi inoltrare le email verso uno o più indirizzi email esterni al tuo dominio.
>> - `Server Di Posta Elettronica OVHcloud`: da definire quando si possiede un servizio di posta elettronica condiviso.
>> - `Personalizzato`: definisci l’URL e la priorità del server di posta ([record MX](/pages/web_cloud/domains/dns_zone_records#mail-records)) che desideri puntare.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-02.png){.thumbnail}
>>

### Tempo di propagazione

Una volta modificata la zona DNS del dominio, la propagazione delle modifiche potrebbe richiedere fino a 24 ore.

Per ridurre il tempo di propagazione per le prossime modifiche della zona DNS, è possibile regolare il TTL (*Time To Live*) che si applicherà a tutti i record della zona DNS. Eseguire le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
4. Seleziona il dominio o la zona DNS.
5. Clicca sulla scheda `Zona DNS`{.action}.
6. Clicca sul pulsante `Modifica il TTL predefinito`{.action} e segui gli step.

È inoltre possibile modificare il TTL di un record DNS. ma questa operazione può essere effettuata solo su una registrazione alla volta, modificandola o aggiungendola.

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Aggiungere un record SPF alla configurazione di un dominio](/pages/web_cloud/domains/dns_zone_spf)

[Proteggere il dominio dal Cache Poisoning con DNSSEC](/pages/web_cloud/domains/dns_dnssec)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).