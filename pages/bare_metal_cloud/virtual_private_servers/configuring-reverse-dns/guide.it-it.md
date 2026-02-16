---
title: "Come configurare il reverse DNS del tuo server (record PTR)"
excerpt: Scopri come configurare la risoluzione reverse DNS del tuo indirizzo IP dal tuo Spazio Cliente OVHcloud
updated: 2026-01-06
---

## Obiettivo

Il Reverse DNS (*rDNS*) è il complemento della risoluzione DNS "*forward*" che permette di risolvere i nomi di dominio in indirizzi IP. Grazie al reverse DNS, un indirizzo IP può essere risolto in nome di dominio (o nome host) a cui è associato. Questo significa che le richieste DNS dell'indirizzo IP associato restituiranno questo nome di dominio.

La configurazione del reverse DNS di un server è particolarmente utile durante l'invio di email. La convalida di un server di posta da parte dei sistemi di protezione antispam migliora se una richiesta DNS dell'indirizzo IP viene risolta correttamente.

**Questa guida ti mostra come configurare il reverse DNS di un indirizzo IP dalloSpazio Cliente OVHcloud.**

## Prerequisiti

- Un indirizzo IP associato a un servizio del tuo account OVHcloud
- Un nome di dominio con il suo record `A` collegato al tuo servizio
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Network`{.action} nel menu a sinistra dello schermo e poi su `Indirizzi IP Pubblici`{.action}.

Il menu a discesa sotto "**I tuoi indirizzi IP pubblici e servizi associati**" ti permette di filtrare i tuoi servizi per categoria. Puoi anche cercare un indirizzo IP specifico utilizzando la barra di ricerca a sinistra del menu a discesa.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Clicca sul pulsante `⁝`{.action} nella riga dell'indirizzo IP interessato e seleziona `Configurare il reverse DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Nella nuova finestra, inserisci il tuo reverse e clicca su `Confermare`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Puoi anche modificare il reverse direttamente tramite l'icona `matita`{.action} nella colonna **Reverse DNS** della tabella.

> [!warning]
> Quando inserisci il tuo nome di dominio nel *reverse*, verifica immediatamente se il record A restituisce la stessa IP. Questo è utilizzato nelle procedure anti-spam, quindi il tuo record A deve essere valido e propagato. Ci sono alcune regole da seguire quando si inserisce il *reverse* :
>
>  - il *reverse* non può iniziare con un `-`
>  - il *reverse* non può contenere più di 63 caratteri
>  - il *reverse* non può contenere caratteri maiuscoli
>  - il *reverse* deve terminare con un `.`
>
> Esempio : « domain.tld » nel record *reverse* sarebbe `domain.tld.`.
>

> [!primary]
>
> Se la modifica non funziona come previsto, verifica che il record `A` sia correttamente configurato nella zona DNS del tuo nome di dominio. L'applicazione delle modifiche nella zona DNS può richiedere fino a 24 ore, nel caso in cui tu abbia appena modificato il record `A`.
>
> Se il nome di dominio è gestito da OVHcloud come registro **e utilizza i server DNS OVHcloud**, puoi fare riferimento a [questa guida](/pages/web_cloud/domains/dns_zone_edit).
>

## Per saperne di più

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Contatta la nostra [Community di utenti](/links/community).