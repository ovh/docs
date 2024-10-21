---
title: "Come configurare il reverse DNS del tuo server (record PTR)"
excerpt: Copri come impostare la risoluzione reverse DNS del tuo indirizzo IP dal tuo Spazio Cliente OVHcloud
updated: 2024-09-24
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il Reverse DNS (*rDNS*) è il complemento della risoluzione DNS "*forward*" che permette di risolvere i nomi di dominio in indirizzi IP. Grazie al reverse DNS, un indirizzo IP può essere risolto in nome di dominio (o nome host) a cui è associato. Questo significa che le richieste DNS dell'indirizzo IP associato restituiranno questo nome di dominio.

La configurazione del reverse DNS di un server è particolarmente utile durante l'invio di email. La convalida di un server di posta da parte dei sistemi di protezione antispam migliora se una richiesta DNS dell'indirizzo IP viene risolta correttamente.

**Questa guida ti mostra come configurare il reverse DNS di un indirizzo IP dalloSpazio Cliente OVHcloud.**

## Prerequisiti

- un indirizzo IP associato a un servizio del tuo account OVHcloud
- Un dominio con il suo record `A` associato al tuo servizio
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Bare Metal Cloud`{.action} e apri `Network`{.action}. Clicca su `IP`{.action}.

I menu a tendina della sezione **I miei indirizzi IP pubblici e i servizi associati** ti permettono di filtrare gli elementi della tabella per i servizi e trovare rapidamente l'indirizzo IP desiderato.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Clicca su `...`{.action} nella riga dell’indirizzo IP in questione e seleziona `Modifica il reverse`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse.png){.thumbnail}

Nella nuova finestra, inserisci il reverse e clicca su `Conferma`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse.png){.thumbnail}

È inoltre possibile modificare il reverse direttamente tramite l’icona a forma di penna nella colonna **Reverse DNS** della tabella.

> [!warning]
> Quando inserisci il tuo dominio nel reverse, verifica immediatamente se il record A restituisce lo stesso IP. Questa operazione viene utilizzata nelle procedure anti-spam e il record A deve essere valido e divulgato. Per inserire il reverse, è necessario seguire alcune regole:
>
>  - il reverse non può iniziare con un `-`
>  - il reverse non può contenere più di 80 caratteri
>  - il reverse non può contenere caratteri maiuscoli
>  - il reverse deve terminare con un `.`
>
> Esempio: "MyDomain.ca" nel campo reverse sarebbe **mydomain.ca.**
>

> [!primary]
>
> Se la modifica non funziona come previsto, verifica che il record `A` sia configurato correttamente nella zona DNS del dominio. L’applicazione delle modifiche nella zona DNS potrebbe richiedere fino a 24 ore, nel caso in cui il record `A` sia stato modificato.
>
> Se il dominio è gestito da OVHcloud come Registrar **e utilizza i server DNS OVHcloud**, consulta [questa guida](/pages/web_cloud/domains/dns_zone_edit).
>

## Per saperne di più

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Contatta la nostra [Community di utenti](/links/community).