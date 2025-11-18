---
title: "Rendere sicuro il tuo dominio con DNSSEC"
excerpt: "Questa guida ti mostra come proteggere il tuo dominio dal Cache Poisoning attivando DNSSEC"
updated: 2025-03-04
---

## Obiettivo 

Un server DNS ospita una o più zone DNS. Una zona DNS contiene la configurazione DNS di un dominio. È questa configurazione che collega il dominio ai diversi servizi associati (server di hosting per il sito Web, server per gli indirizzi email personalizzati con il dominio, ecc...).

In alcuni casi, i flussi di dati che passano attraverso i server DNS possono essere dirottati da persone malintenzionate.
In sintesi, per fare ciò, queste persone avvelenano la cache dei server DNS con la configurazione DNS che vogliono applicare al tuo dominio: è quello che chiamano "Cache poisoning".
In questo modo, possono reindirizzare i flussi in entrata dal tuo dominio verso i loro siti Web e verso i loro indirizzi email.

Il **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**), permette di proteggere la configurazione DNS del tuo nome di dominio dal "Cache poisoning" verificando e autenticando le risposte DNS.

**Questa guida ti mostra come attivare il protocollo DNSSEC per proteggere il tuo dominio dal "Cache poisoning".**

> [!primary]
>
> L'opzione DNSSEC non è attualmente disponibile per i domini registrati in OVHcloud con estensione **.it**.
>

Per maggiori informazioni sul funzionamento del **DNSSEC**, consulta la nostra pagina "[Comprendere il DNSSEC](/links/web/domains-dnssec)".

Per maggiori informazioni su questi argomenti, consulta le nostre guide disponibili su [server DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information) e sull’[edizione di una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

## Prerequisiti

- Disporre di un dominio.
- l’estensione del dominio deve essere compatibile con DNSSEC.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.

## Procedura

Per verificare se il dominio utilizza la configurazione DNS di OVHcloud, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!warning]
>
> **Questi 3 step sono validi solo se il dominio è registrato presso OVHcloud.** In caso contrario, è necessario effettuare la verifica presso il Registrar del dominio.
>
> Se i nomi dei server DNS terminano con *ovh.net* (ad eccezione del server *snds2.ovh.net*), *ovh.ca* o *anycast.me*, il dominio utilizza i server DNS di OVHcloud.
>

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul dominio interessato.
>>
>> Se i nomi dei server DNS terminano con *ovh.net* (ad eccezione del server *snds2.ovh.net*), *ovh.ca* o *anycast.me*, il dominio utilizza i server DNS di OVHcloud.

> [!primary]
>
> L'attivazione/disattivazione del **DNSSEC** richiede **24** ore per essere effettiva.
>
> Per modificare i server DNS associati al dominio in un secondo momento, la modifica dei server DNS sarà effettiva sul lato OVHcloud solo dopo la disattivazione del **DNSSEC**. In seguito, la propagazione DNS della modifica potrebbe richiedere da **24** a **48** ore.
>
> In totale, la modifica dei server DNS di un dominio con la soluzione **DNSSEC** attiva sarà pienamente effettiva dopo **48** alle **72** ore.
>

L'attivazione del **DNSSEC** è possibile in tre situazioni descritte di seguito.

### Caso n°1 - Il dominio è registrato in OVHcloud e utilizza i server DNS di OVHcloud

Per attivare (o disattivare) la soluzione **DNSSEC** per il tuo dominio, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3**
>>
>> Visualizzi una tabella con tutte le informazioni generali relative al tuo dominio. In questa interfaccia è possibile verificare lo stato di attivazione del **DNSSEC**.
>>
>> Nel riquadro `Sicurezza`, controlla lo stato accanto alla voce `Delegazione Sicura (DNSSEC)`.
>>
>> ![Secured Delegation DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec.png){.thumbnail}
>>
> **Step 4**
>>
>> Il pulsante di attivazione situato sopra la voce `Delegazione Sicura (DNSSEC)`{.action} permette di attivare o disattivare il **DNSSEC** sul dominio. L’operazione genera una nuova finestra da cui è possibile confermare la modifica.
>>
>> ![Enable DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec-confirmation.png){.thumbnail}

### Caso n°2 - Il dominio è registrato in OVHcloud e non utilizza i server DNS di OVHcloud

In questo caso, contatta il provider che gestisce la configurazione DNS del tuo dominio per richiedere i parametri di attivazione del DNSSEC ("Key Tag" / "Flag" / "Algoritmo" / "Chiave pubblica (codificata in base64)").

Una volta recuperate queste 4 impostazioni, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3**
>>
>> Clicca sulla scheda `record DS`{.action}. **Questa scheda appare solo se il dominio utilizza server DNS esterni**.
>>
>
>>
>> Nella nuova pagina, clicca sul pulsante `Modifica`{.action} a destra e poi sul pulsante `+`{.action}.
>>
>
>>
>> Compila i 4 moduli `Key Tag`, `Flag`, `Algoritmo` e `Chiave pubblica (codificata in base64)` con i dati comunicati dal tuo attuale provider.
>>
>> ![DS records](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ds-records/edit-plus-dashboard.png){.thumbnail}
>>
>> Una volta completati tutti e 4 i moduli, clicca sul pulsante blu `Conferma`{.action} a destra della tabella.

### Caso n°3 - Il dominio non è registrato in OVHcloud e utilizza i server DNS di OVHcloud

> [!warning]
>
> Prima di proseguire, assicurati presso il Registrar attuale che nessuna opzione DNSSEC sia già attiva.

Diversamente dal **caso n. 2**, qui è necessario recuperare da OVHcloud i parametri di attivazione del DNSSEC ("Key Tag" / "Flag" / "Algoritmo" / "Chiave pubblica (codificata in base64)").

Per farlo, utilizza le [API OVHcloud](/pages/manage_and_operate/api/first-steps) ed effettua le seguenti operazioni:

- Accedi al nostro sito [API OVHcloud](/links/api) (verifica di essere su `https://eu.api.ovh.com` se i tuoi servizi sono ospitati in Europa e su `https://ca.api.ovh.com` se i tuoi servizi sono ospitati al di fuori dell’Europa).
- Nella nuova pagina, clicca al centro su `Explore the OVHcloud API`{.action}.
- Nella nuova pagina che appare e nella parte sinistra della pagina, utilizza il menu a tendina situato a destra del form `v1`{.action}, poi seleziona/inserisci la scelta `/domain`.
- Dall’elenco di API che appare sotto nella colonna di sinistra, cerca e clicca su questa API: **POST /domain/zone/{zoneName}/dnssec**. In alternativa, clicca direttamente su questo link per accedervi:

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/dnssec
>

- Sul lato destro della pagina compare l’API con i suoi moduli da compilare.
- Clicca sul pulsante in alto a destra intitolato `Authenticate`{.action} e poi sul pulsante `Login with OVHcloud SSO`{.action}.
- Si apre l’interfaccia di connessione al tuo [Spazio Cliente OVHcloud](/links/manager).
- Accedi al tuo account e clicca su `Authorize`{.action} per utilizzare le API OVHcloud con i servizi presenti nel tuo Spazio Cliente.
- verrai reindirizzato automaticamente alla pagina precedente dell'API **POST /domain/zone/{zoneName}/dnssec**, dove verrai autenticato.
- Sul lato destro della pagina compare l’API con un form da compilare.
- Compila il modulo nella sezione `PATH PARAMETERS` come segue:
- `zoneName` : inserisci qui il nome di dominio pertinente (esempio: `domain.tld`).

![API](/pages/assets/screens/api/post-domain-zone-zonename-dnssec.png){.thumbnail}

Una volta completato il form, clicca sul pulsante blu `EXECUTE`{.action} in basso a destra nella sezione precedentemente compilata.

Dopo qualche minuto, riceverai un’email da OVHcloud all’indirizzo di contatto della tua zona DNS.
Questa email conterrà i 4 parametri ("Key Tag" / "Flag" / "Algoritmo" / "Chiave pubblica (codificata in base64)") necessari per attivare DNSSEC presso il Registrar del tuo dominio.

> [!success]
>
> Controlla la posta indesiderata se non la ricevi entro un'ora.

Per completare l’operazione, contatta il Registrar attuale del tuo dominio con le 4 impostazioni indicate per attivare l’opzione DNSSEC.

## Per saperne di più

[Generalità sui server DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).