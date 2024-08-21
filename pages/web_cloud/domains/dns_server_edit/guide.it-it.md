---
title: 'Modificare i server DNS di un dominio OVHcloud'
excerpt: 'Questa guida ti mostra coome modificare i server DNS di un dominio OVHcloud'
updated: 2024-06-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La sigla DNS, che significa **D**omain **N**ame **S**ystem, è un insieme di elementi (server DNS, zone DNS, ecc...) che permettono di far corrispondere un nome di dominio con un indirizzo IP.

Consulta le nostre guide "[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" per maggiori informazioni.

**Questa guida ti mostra come modificare i server DNS configurati sul tuo dominio OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Disporre di un [dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle [autorizzazioni appropriate per la gestione](/pages/account_and_service_management/account_information/managing_contacts) il dominio dal tuo [Spazio Cliente OVHcloud](/links/manager){.external}.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}.

> [!primary]
>
> **Registrar** è un'organizzazione autorizzata a vendere domini. Tra questi **Registrars** anche OVHcloud.
>
> Se il dominio non è registrato presso OVHcloud, è necessario modificare i server DNS presso il **Registrar** in cui è attualmente registrato il dominio.
>

## Procedura

> [!warning]
>
> **Fai attenzione quando modifichi i server DNS di un dominio.** Un errore di modifica può rendere inaccessibile il tuo sito Web o impedire ai tuoi indirizzi di posta di ricevere nuove email. Comprendere le conseguenze di una modifica è importante per effettuare l’operazione con la massima consapevolezza.
>

La modifica dei server DNS di un dominio comporta la modifica della sua configurazione. La nuova configurazione DNS sostituisce la precedente ed è archiviata sui server DNS appena definiti. Tecnicamente, il dominio utilizza una nuova zona DNS.

Tuttavia, è importante notare che:

- In caso di modifica del server DNS (ad esempio. DNS esterno (tramite DNS OVHcloud), il contenuto della configurazione precedente/zona DNS non viene automaticamente replicato nella nuova. Assicurati che la nuova zona DNS contenga tutti i record DNS necessari al corretto funzionamento dei servizi associati al dominio (ad esempio, il sito Web e gli indirizzi di posta elettronica).

- Per modificare non i server DNS ma uno o più record della configurazione/zona DNS corrente, consulta la guida "[Modifica zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- Alcune organizzazioni, i Registri, che gestiscono le estensioni dei domini, hanno dei requisiti particolari riguardo ai server DNS (quantità di server dei nomi, valore dei record, ecc.). In caso di dubbi, contatta il Registro responsabile del dominio.

ed è quindi importante assicurarsi che le modifiche apportate non abbiano impatto sulla raggiungibilità del dominio. In caso di dubbi, contattare la persona che ha richiesto le modifiche.

### Accedere alla gestione dei server DNS OVHcloud

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio interessato. Infine seleziona la scheda `Server DNS`{.action}.

Visualizzi una tabella con tutti i server DNS configurati da OVHcloud per il tuo dominio. A ogni riga corrisponde un server DNS.

> [!primary]
>
> Quando utilizzi i server DNS OVHcloud, i numeri presenti nei nomi dei server non hanno alcun legame con il servizio o i servizi che utilizzi. Solo l'opzione [DNS anycast](/links/web/domains-options) utilizza server DNS specifici che vengono automaticamente assegnati all'utente. 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Modifica i server DNS

Se si desidera utilizzare server DNS esterni, è necessario sostituire i server DNS di OVHcloud con questi server DNS esterni, e non sommarli.

Clicca su `Modifica i server DNS`{.action} a destra.

Nei moduli di input, **Sostituisci** i valori correnti dei server DNS con le informazioni relative ai nuovi server DNS che vuoi definire. Per aggiungere altri server alla lista, clicca sul pulsante `+`{.action} a destra dell’ultima riga. Nella tabella è presente una riga aggiuntiva che è possibile completare.

> [!warning]
>
> Assicurati di non mescolare un gruppo di server DNS con un altro. 
>
> Ad esempio, *dns19.ovh.net* e *ns19.ovh.net* corrispondono a un gruppo di server DNS di OVHcloud, vanno di pari passo e sono sincronizzati. Se al servizio vengono aggiunti server DNS esterni a OVHcloud (o di un gruppo OVHcloud diverso), la risoluzione DNS verrà eseguita in modo casuale tra i server DNS di OVHcloud e i server DNS esterni inseriti.
>
> In OVHcloud, i gruppi di server DNS sono identificabili tramite il numero presente nei nomi dei server. Due server DNS OVHcloud fanno parte dello stesso gruppo di server quando condividono lo stesso numero. *dns19.ovh.net* e *ns19.ovh.net*.
>

Una volta inserite queste informazioni, clicca su `Applica la configurazione`{.action}. Lo stato dei server DNS verrà aggiornato nella tabella con le nuove informazioni inserite.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/edit-dns-servers.png){.thumbnail}

> [!success]
>
> La modifica dei server DNS associati a un dominio comporta un tempo di propagazione che va da **24** a **48** ore massimo.
>

#### Caso particolare: Ripristina i server DNS 

Il pulsante `Reinizializza i server DNS`{.action} permette di reinizializzare i server DNS correnti sostituendoli automaticamente con i server DNS OVHcloud di origine. Utilizzare questa opzione **solo** per riutilizzare i server DNS di OVHcloud (e la zona DNS di OVHcloud associata ai propri server DNS). 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/reset-the-dns-servers.png){.thumbnail}

Una volta completata l’operazione attendi il tempo necessario alla sua elaborazione. Devono essere presi in considerazione due periodi successivi:

- la modifica apportata in OVHcloud deve essere presa in carico dal *registro* che gestisce l’estensione del dominio (ad esempio, il registro delle estensioni in *.it*). Lo stato di avanzamento dell’operazione è disponibile nello [Spazio Cliente OVHcloud](/links/manager){.external}. Accedi alla sezione `Web Cloud`{.action}, clicca su `Domini`{.action} nella colonna di sinistra e poi su `Operazioni in corso`{.action}.
- una volta che la modifica è stata presa in carico dall'organizzazione che gestisce l’estensione del dominio, è necessario attendere fino a **48 ore** perché le modifiche apportate siano completamente propagate.

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Modifica di una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).