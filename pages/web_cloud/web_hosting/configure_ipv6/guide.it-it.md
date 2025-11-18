---
title: "Configura un indirizzo IPv6 per il tuo sito Web"
excerpt: "Questa guida ti mostra come rendere il tuo sito Web compatibile con un indirizzo IPv6"
updated: 2025-01-28
---

## Obiettivo

La rete Internet funziona dall'inizio degli anni '90 seguendo lo standard IPv4. Questa norma permette di fornire un indirizzo IP X.X.X.X (o le "X" sono numeri compresi tra 0 e 255) a ciascuna delle macchine collegate alla rete Internet (server, computer, smartphone, tablet, ecc.). Tuttavia, tale norma limita a circa 4 miliardi il numero di dispositivi connessi alla rete Internet, che nel 2022 rappresentava meno di un apparecchio connesso per due persone sulla Terra.

In seguito, il protocollo **IPv6** è stato introdotto per permettere di connettere alla rete Internet fino a 340 sextitillions di apparecchi. La sua implementazione richiede tempo perché l'intera rete Internet deve integrare questa nuova norma. 

Dato che gli indirizzi IPv4 sono meno disponibili, è più difficile aggiungere nuove macchine sulla rete con lo standard IPv4. Tuttavia, le connessioni con un indirizzo IPv6 sono utili solo se, ad esempio, il tuo sito Web è anche disponibile con lo stesso protocollo. In questo modo, più siti web accessibili in IPv6, più i diversi attori presenti sulla rete Internet trasferiranno i loro dispositivi/macchine su questo nuovo protocollo.

Per maggiori informazioni, consulta l'articolo di [Wikipedia](https://it.wikipedia.org/wiki/IPv6) sul protocollo IPv6.

I nostri hosting Web sono compatibili con IPv6 dal 2011. L'attivazione di questo protocollo è rimasta fino a poco tempo fa un'opzione facoltativa alla configurazione. 

**Questa guida ti mostra come verificare la compatibilità del tuo sito con il protocollo IPv6 e come configurarlo con un indirizzo IPv6.**

## Prerequisiti

- Avere un [dominio](/links/web/domains) nello Spazio Cliente OVHcloud
- Disporre di una [offerta di hosting Web](/links/web/hosting)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. In caso di difficoltà, ti consigliamo di contattare un [provider specializzato](/links/partner) e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
> 

Se il tuo sito non è configurato per funzionare con un indirizzo IPv6, puoi aggiungere [l'indirizzo IPv6 del tuo hosting condiviso OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) nella zona DNS attiva del tuo dominio. L'obiettivo è permettere ai browser di trovare un indirizzo IPv6 associato al tuo sito Web tramite il tuo dominio.

### 1 - Verifica la compatibilità IPv6 del tuo sito Web

Per verificare se il tuo sito Web utilizza già un indirizzo IPv6, utilizza il sito [ipv6-test.com](https://ipv6-test.com/validate.php). Ti dirà se il tuo sito Web risponde a questo nuovo protocollo IP. In caso contrario, prosegui nella lettura della guida.

### 2 - recuperare l'indirizzo IPv6 del tuo hosting Web

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> Nel riquadro **Informazioni generali**, trovi la dicitura **IPv6**.
>>
>> ![IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv6.png){.thumbnail}
>>
>> Copia l'indirizzo IP, poi prosegui nella lettura della guida.

### 3 - configurare la zona DNS attiva del dominio

> [!warning]
>
> Le nostre opzioni CDN sono attualmente incompatibili con gli indirizzi IPv6. Se configuri un indirizzo IPv6 per il tuo sito Web, i tuoi visitatori non usufruiranno della CDN.
>
> Inoltre, l'aggiunta, la modifica o l'eliminazione di un record DNS nella zona DNS attiva di un dominio comporta un tempo di propagazione da **4 a 24 ore** per essere pienamente efficace.
>

Per consentire al browser di trovare l’indirizzo IPv6 con il dominio, è necessario modificare la zona DNS attiva del dominio.

Se la zona DNS attiva del dominio è presente in OVHcloud, utilizza le nostre guide "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" e "[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)" per creare un record DNS di tipo **AAAA**.

In caso contrario, contatta il provider DNS specificando l’indirizzo IPv6 recuperato precedentemente.

## Per saperne di più <a name="go-further"></a>

[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).