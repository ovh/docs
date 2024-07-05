---
title: 'Risolvere l’errore "Sito non installato"'
excerpt: Questa guida ti mostra come identificare e risolvere la pagina di errore "Sito non installato"
updated: 2021-05-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La pagina di errore **Sito non installato** può essere visualizzata sul browser, in particolare al momento della prima installazione del sito Web.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Questa guida ti mostra come individuare e risolvere la pagina di errore "Sito non installato"**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il fornitore del servizio. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.

## Prerequisiti

- Disporre di una [offerta di hosting condiviso](/links/web/hosting)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Disporre anche della gestione della [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) alla quale è associato il dominio.

## Procedura

La pagina **Sito non installato** viene visualizzata per due motivi:

- 1: [Il tuo dominio o sottodominio non è dichiarato correttamente sul tuo hosting Web](#check-multisites).

- 2: [Il dominio non punta all'indirizzo IP della tua soluzione di hosting Web](#check-dns-domain)

Gli step successivi ti permetteranno di correggere l’errore `Sito non installato` in entrambi i casi.

### Step 1 - Verifica la dichiarazione del dominio o sottodominio sull’hosting Web <a name="check-multisites"></a>

Nel tuo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Web Cloud`{.action} in alto nella pagina, poi clicca sulla scheda `Hosting`{.action} nella colonna di sinistra.

Seleziona l’hosting Web nella lista e clicca sulla scheda `Multisito`{.action}.

|Scenario|Azione da effettuare|
|---|---| 
|Il dominio o sottodominio associato al sito Web appare nella tabella "Multisito".|Se hai appena aggiunto il dominio o il sottodominio nella sezione `Multisito`{.action} del tuo hosting Web, attendi un **ventina di minuti** e poi aggiorna la cache del tuo browser. Se visualizzi ancora il messaggio "Sito non installato", vai allo [step 2](#check-dns-domain).|
|Il dominio o sottodominio associato al sito Web non compare nella tabella "Multisito".|Aggiungere il dominio o il sottodominio nella sezione `Multisito`{.action} seguendo la sezione dedicata della guida "[Condivisione dell’hosting tra più siti - Aggiungere un dominio o un sottodominio](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
|Il dominio o sottodominio è stato rimosso dalla tabella "Multisito" senza alcuna azione da parte tua.|Il dominio o la zona DNS possono essere gestiti da un altro account. Aggiungere un dominio/sottodominio nella sezione `Multisito`{.action} seguendo la sezione dedicata della guida "[Condivisione dell’hosting tra più siti - Aggiungere un dominio esterno](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|

### Step 2 - Verifica il puntamento IP nella zona DNS attiva del tuo dominio <a name="check-dns-domain"></a>

Per prima cosa è necessario verificare che il dominio o sottodominio punti verso l’indirizzo IP dell’hosting Web, dalla sua zona DNS attiva.

> [!primary]
>
> Per saperne di più sul concetto di DNS, consulta le pagine seguenti:
> 
> - [Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)
>

#### 2\.1 Identificare l’indirizzo IP dell’hosting Web OVHcloud

Per recuperare l’indirizzo IP dell’hosting Web, accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action} in alto nella pagina. Clicca sulla scheda `Hosting`{.action} nella colonna di sinistra e seleziona l’hosting Web interessato dalla lista.

L’indirizzo `IPv4` è disponibile nel riquadro `Informazioni generali`{.action}.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

L’indirizzo IP associato all’hosting Web è disponibile anche nella nostra guida "[Elenco degli indirizzi IP associati agli hosting Web OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Verifica l'indirizzo IP indicato nella zona DNS attiva del dominio

A questo punto, è necessario verificare che l’indirizzo IP dell’hosting Web compaia nella zona DNS attiva del dominio.

> [!primary]
>
> Prima di continuare, in caso di modifica nella **zona DNS** attiva di un dominio, potrebbe essere necessario un tempo di propagazione di **4 a 24 ore** per aggiornare le informazioni sulla rete DNS.
>
> Se modifichi direttamente i **server DNS** associati al tuo dominio, l'intervallo di tempo massimo consentito è di **48 ore**.
>

Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), clicca sulla sezione `Web Cloud`{.action} in alto nella pagina. Accedi alla sezione `Domini`{.action}, seleziona il tuo dominio e clicca sulla scheda `Zona DNS`{.action}.

Viene visualizzata una tabella con diversi record DNS.

|Possibili scenari|Azione da intraprendere|
|---|---| 
|Nella zona DNS attiva, il dominio/sottodominio punta all'indirizzo IP dell'hosting Web con un record di tipo A (per un IPv4) o AAAA (per un IPv6).<br><br>![zonaDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Ciò indica che la configurazione del dominio è corretta.<br><br><br> Attendere il tempo di propagazione DNS se la modifica è recente.<br><br> Ricordati inoltre di riavviare i tuoi dispositivi (PC, smartphone, box, ecc.) e di svuotare la cache del browser. La configurazione precedente del dominio può infatti essere salvata in cache e rallentare la visualizzazione dell’aggiornamento.|
|La zona DNS attiva non contiene record di tipo A o AAAA che collegano il dominio o sottodominio all’indirizzo IP dell’hosting Web. In cui il record esistente punta a un altro indirizzo IP.|Aggiungere il nuovo record di tipo A o AAAA o correggere il record esistente seguendo [questa guida](/pages/web_cloud/domains/dns_zone_edit).|
|Il tuo dominio non compare nella sezione `Domini`{.action} dello Spazio Cliente OVHcloud.<br><br>Oppure la scheda `Zona DNS`{.action} del tuo dominio viene visualizzata nel modo seguente:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|Questo significa che il tuo dominio non è gestito dallo Spazio Cliente OVHcloud.<br><br>Determina il suo "registrar" tramite il nostro strumento [WHOIS](/links/web/domains-whois) e i server DNS ai quali è associato. <br><br>Ritrova e modifica la zona DNS seguendo la sezione dedicata della guida "[Condividere l’hosting tra più siti - aggiungere un dominio esterno](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
|Questo avviso viene visualizzato nella scheda `Zona DNS`{.action}:<br><br><br>![avviso_zonedns_pas_sur_srv_dns](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Dovrai quindi modificare i server DNS del tuo nome di dominio di conseguenza seguendo la nostra guida "[Modifica i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)"|

## Per saperne di più <a name="go-further"></a>

[Elenco degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).