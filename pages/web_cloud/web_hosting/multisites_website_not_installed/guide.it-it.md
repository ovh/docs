---
title: 'Risolvere l’errore "Sito non installato"'
excerpt: Questa guida ti mostra come identificare e risolvere la pagina di errore "Sito non installato"
updated: 2025-08-25
---

## Obiettivo

La pagina di errore "**Sito non installato**" può essere visualizzata sul browser, in particolare al momento della prima installazione del sito Web.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Questa guida ti mostra come individuare e risolvere la pagina di errore "Sito non installato"**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il fornitore del servizio. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.

## Prerequisiti

- Disporre di una [offerta di hosting condiviso](/links/web/hosting)
- Disporre anche della gestione della [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) alla quale è associato il dominio.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

La pagina "**Sito non installato**" viene visualizzata per due motivi:

- 1: [Il tuo dominio o sottodominio non è dichiarato correttamente sul tuo hosting Web](#check-multisites).
- 2: [Il dominio non punta all'indirizzo IP della tua soluzione di hosting Web](#check-dns-domain)

Gli step successivi ti permetteranno di correggere l’errore `Sito non installato` in entrambi i casi.

### 1 - Verifica la dichiarazione del dominio o sottodominio sull’hosting Web <a name="check-multisites"></a>

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `Multisito`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Visualizzi una tabella nella nuova pagina.
>>
>>![Interfaccia multisito](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Scenari|Azioni da intraprendere|
>> |---|---| 
>> |Il dominio o sottodominio associato al tuo sito Web **compare** nella tabella "Multisito".|Se hai appena aggiunto il tuo dominio o sottodominio nella sezione `Multisito`{.action} del tuo hosting Web, attendi circa **venti minuti** e poi aggiorna la cache del tuo browser. Se visualizzi ancora il messaggio "Sito non installato", vai alla [parte 2](#check-dns-domain).|
>> |Il dominio o sottodominio associato al sito Web **non compare** nella tabella "Multisito".|Aggiungere il dominio o il sottodominio nella sezione `Multisito`{.action} seguendo la sezione dedicata della guida "[Ospitare più siti su uno stesso hosting - aggiungere un dominio o un sottodominio](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
>> |Il dominio o sottodominio **è stato rimosso** dalla tabella "Multisito" senza che tu abbia effettuato alcuna azione.|Il dominio o la zona DNS possono essere gestiti da un altro account. Aggiungere un dominio o un sottodominio nella sezione `Multisito`{.action} seguendo la sezione dedicata della guida "[Ospitare più siti su uno stesso hosting - Aggiungere un dominio esterno](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|

#### 2 - Verifica il puntamento IP nella zona DNS attiva del tuo dominio <a name="check-dns-domain"></a>

Per prima cosa è necessario verificare che il dominio o sottodominio punti verso l’indirizzo IP dell’hosting Web, dalla sua zona DNS attiva.

> [!primary]
>
> Per saperne di più sul concetto di DNS, consulta le pagine seguenti:
>
> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit);
> - [Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create);
> - [Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit).

#### 2\.1 Identificare l’indirizzo IP dell’hosting Web OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel riquadro **Informazioni generali**, trovi la dicitura **IPv4**.
>>
>> ![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copia l'indirizzo IPv4, poi prosegui nella lettura della guida.

L’indirizzo IP associato all’hosting Web è disponibile anche nella nostra guida "[Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Verifica l'indirizzo IP indicato nella zona DNS attiva del dominio

A questo punto, è necessario verificare che l’indirizzo IP dell’hosting Web compaia nella zona DNS attiva del dominio.

> [!primary]
>
> Prima di continuare, in caso di modifica nella **zona DNS** attiva di un dominio, potrebbe essere necessario un tempo di propagazione di **4 a 24 ore** per aggiornare le informazioni sulla rete DNS.
>
> Se modifichi direttamente i **server DNS** associati al tuo dominio, l'intervallo di tempo massimo consentito è di **48 ore**.

Clicca sulle schede qui sotto per visualizzare ciascuno dei **4** step successivi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Se il dominio non compare nella lista, significa che la zona DNS non è gestita dallo Spazio Cliente OVHcloud.<br>
>> > Determina il suo "Registrar" e i server DNS ai quali è associato tramite il nostro tool [WHOIS](/links/web/domains-whois).<br>
>> > Trova e modifica la zona DNS seguendo la sezione dedicata della guida "[Ospitare più siti su uno stesso hosting - aggiungere un dominio esterno](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>>
> **Passaggio 3**
>>
>> Visualizzi una tabella con tutti i record DNS associati al tuo dominio in OVHcloud. Il contenuto della tabella può essere filtrato in base al tipo di record o al dominio.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Se la scheda `Zona DNS`{.action} del dominio viene visualizzata nel modo seguente:<br><br> ![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>> >
>> > Questo significa che il dominio non è gestito dallo Spazio Cliente OVHcloud.<br> Determina il suo "Registrar" e i server DNS ai quali è associato tramite il nostro tool [WHOIS](/links/web/domains-whois).<br> Recupera e modifica la zona DNS seguendo la sezione dedicata della guida "[Ospitare più siti su uno stesso hosting - aggiungere un dominio esterno](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>>
>> Passare al passaggio 4 per visualizzare i diversi scenari possibili e le azioni da intraprendere.
>>
> **Passaggio 4**
>>
>> |Possibili scenari|Azione da intraprendere|
>> |---|---|
>> |Nella zona DNS attiva, il dominio o sottodominio punta all'indirizzo IP dell'hosting Web con un record di tipo A (per un indirizzo IPv4) o AAAA (per un indirizzo IPv6).<br><br>![zonaDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Ciò indica che la configurazione del nome di dominio è corretta.<br>Attendi il tempo di propagazione DNS se la modifica è recente.<br><br>Riavvia i tuoi dispositivi (PC, smartphone, box, ecc...) e svuota la cache del tuo browser. è possibile che la configurazione precedente del dominio resti ancora nella cache e che l'aggiornamento subisca dei ritardi.|
>> |La zona DNS attiva non contiene record di tipo A o AAAA che collegano il dominio o il sottodominio all'indirizzo IP dell'hosting Web.|Aggiungere il nuovo record DNS di tipo A o AAAA o correggere il record esistente seguendo [questa guida](/pages/web_cloud/domains/dns_zone_edit).|
>> |Il record DNS di tipo A o AAAA esistente nella zona DNS per il dominio o il sottodominio punta verso un indirizzo IP diverso da quello dell’hosting Web.|Aggiungere il nuovo record DNS di tipo A o AAAA o correggere il record esistente seguendo [questa guida](/pages/web_cloud/domains/dns_zone_edit).|
>> |Questo avviso viene visualizzato nella scheda `Zona DNS`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modifica i server DNS del dominio di conseguenza seguendo la nostra guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)."|

## Per saperne di più <a name="go-further"></a>

[Elenco degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).