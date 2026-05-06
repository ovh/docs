---
title: "Come configurare il reverse DNS del tuo server (record PTR)"
excerpt: Copri come impostare la risoluzione reverse DNS del tuo indirizzo IPv4 o IPv6 dal tuo Spazio Cliente OVHcloud
updated: 2026-02-23
---

## Obiettivo

Il Reverse DNS (*rDNS*) è il complemento della risoluzione DNS "*forward*" che permette di risolvere i nomi di dominio in indirizzi IP. Grazie al reverse DNS, un indirizzo IP può essere risolto in nome di dominio (o nome host) a cui è associato. Questo significa che le richieste DNS dell'indirizzo IP associato restituiranno questo nome di dominio.

La configurazione del reverse DNS di un server è particolarmente utile durante l'invio di email. La convalida di un server di posta da parte dei sistemi di protezione antispam migliora se una richiesta DNS dell'indirizzo IP viene risolta correttamente.

**Questa guida ti mostra come configurare il reverse DNS di un indirizzo IP dalloSpazio Cliente OVHcloud.**

## Prerequisiti

- Un indirizzo IP associato a un servizio del tuo account OVHcloud
- Un dominio con il suo record `A` o `AAAA` associato al tuo servizio

<!-- CP-NAV-START:network-public-ip -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public IP](/links/control-panel/network-public-ip)
- **Percorso di navigazione:** `Network`{.action} > `Indirizzi IP pubblici`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

## Procedura
Il menu a discesa sotto "**I tuoi indirizzi IP pubblici e servizi associati**" ti permette di filtrare i tuoi servizi per categoria. Puoi anche cercare un indirizzo IP specifico utilizzando la barra di ricerca a sinistra del menu a discesa.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Clicca sul pulsante `⁝`{.action} nella riga dell'indirizzo IP interessato e seleziona `Configurare il reverse DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Nella nuova finestra, inserisci il tuo reverse e clicca su `Confermare`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Puoi anche modificare il reverse direttamente tramite l'icona `matita`{.action} nella colonna **Reverse DNS** della tabella.

> [!warning]
> Quando inserisci il tuo dominio nel reverse, verifica immediatamente se il record `A` / `AAAA` restituisce lo stesso IP. Questa operazione viene utilizzata nelle procedure anti-spam e il record DNS deve essere valido e divulgato. Per inserire il reverse, è necessario seguire alcune regole:
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
> Se la modifica non funziona come previsto, verifica che il record `A` / `AAAA` sia configurato correttamente nella zona DNS del dominio. L’applicazione delle modifiche nella zona DNS potrebbe richiedere fino a 24 ore, nel caso in cui il record sia stato modificato.
>
> Se il nome di dominio è gestito da OVHcloud come registro **e utilizza i server DNS OVHcloud**, puoi fare riferimento a [questa guida](/pages/web_cloud/domains/dns_zone_edit).
>

## Per saperne di più

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Contatta la nostra [Community di utenti](/links/community).